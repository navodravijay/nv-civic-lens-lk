'use strict';

// Uses an existing Playwright installation; no dependencies or build step for the site.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');
const root = path.resolve(__dirname, '..');
const headers = Object.fromEntries(fs.readFileSync(path.join(root, '_headers'), 'utf8')
  .split(/\r?\n/).filter(line => line.startsWith('  ')).map(line => {
    const colon = line.indexOf(':');
    return [line.slice(0, colon).trim(), line.slice(colon + 1).trim()];
  }));
const servedRequests = [];
const server = http.createServer((req, res) => {
  servedRequests.push({ method: req.method, url: req.url });
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const filename = pathname === '/' ? 'index.html' : pathname.slice(1);
  if (!['index.html', 'app.js', 'styles.css', 'favicon.svg'].includes(filename)) {
    res.writeHead(404).end();
    return;
  }
  const types = { html: 'text/html', js: 'text/javascript', css: 'text/css', svg: 'image/svg+xml' };
  res.writeHead(200, { ...headers, 'Content-Type': `${types[filename.split('.').pop()]}; charset=utf-8` });
  res.end(fs.readFileSync(path.join(root, filename)));
});

async function run() {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ headless: true });
  const artifacts = fs.mkdtempSync(path.join(os.tmpdir(), 'nv-civic-lens-checks-'));
  const errors = [];
  const requests = [];
  try {
    const context = await browser.newContext({ acceptDownloads: true, reducedMotion: 'reduce' });
    context.setDefaultTimeout(10000);
    context.on('page', page => page.on('pageerror', error => errors.push(error.message)));
    context.on('request', request => requests.push(request.url()));
    // Exercise clipboard handlers without overwriting the developer's OS clipboard.
    await context.addInitScript(() => {
      let clipboardText = '';
      Object.defineProperty(navigator, 'clipboard', { configurable: true, value: {
        writeText: async text => { clipboardText = text; },
        readText: async () => clipboardText
      } });
      const originalScroll = Element.prototype.scrollIntoView;
      Element.prototype.scrollIntoView = function (options) {
        window.lastRequestedScrollBehavior = options?.behavior;
        return originalScroll.call(this, options);
      };
    });
    const page = await context.newPage();
    await page.goto(origin);
    await page.waitForFunction(() => !document.getElementById('rti-fields').disabled);
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.className), 'skip-link', 'Skip link is first in keyboard order');
    assert.equal(await page.locator('.skip-link').evaluate(el => getComputedStyle(el).position), 'fixed', 'Skip link is visible on focus');
    assert.equal(await page.locator('form').count(), 0, 'No native submission path');
    assert.equal(await page.locator('#rti-form [name]').count(), 0, 'No named fields');
    assert.match(headers['Content-Security-Policy'], /form-action 'none'/);

    // Combined filtering and searches across languages must preserve state.
    for (const lang of ['en', 'si', 'ta']) {
      await page.selectOption('#language', lang);
      for (const [query, category] of [
        ['2026', 'budget'], ['COPA', 'oversight'], ['RTI', 'rights'],
        ['\u0d85\u0dba\u0dc0\u0dd0\u0dba', 'budget'],
        ['\u0ba4\u0b95\u0bb5\u0bb2\u0bcd', 'rights']
      ]) {
        await page.fill('#record-search', query);
        const visible = await page.locator('.record-card:visible').evaluateAll(cards => cards.map(card => card.dataset.category));
        assert.ok(visible.includes(category), `${lang}: cross-language query ${query}`);
      }
      await page.fill('#record-search', 'COPA');
      await page.locator('[data-filter="budget"]').click();
      assert.equal(await page.locator('.record-card:visible').count(), 0);
      assert.ok(await page.locator('#no-results').isVisible());
      assert.equal(await page.locator('[aria-pressed="true"]').count(), 1);
      await page.locator('[data-filter="all"]').click();
      assert.equal(await page.locator('.record-card:visible').count(), 1);
      await page.fill('#record-search', '');
      assert.equal(await page.locator('.record-card:visible').count(), 3);
      await page.fill('#record-search', 'COPA');
      await page.locator('[data-filter="budget"]').click();
      await page.locator('#reset-search').click();
      assert.equal(await page.inputValue('#record-search'), '');
      assert.equal(await page.locator('.record-card:visible').count(), 3);
      assert.equal(await page.locator('[data-filter="all"]').getAttribute('aria-pressed'), 'true');
      assert.ok(await page.locator('#reset-search').isHidden());
      assert.equal(await page.evaluate(() => document.activeElement.id), 'record-search');
      for (const selector of ['.source-details summary', '.faq-list summary', '.request-example summary']) {
        const summary = page.locator(selector).first();
        await summary.focus();
        await page.keyboard.press('Enter');
        assert.ok(await summary.evaluate(el => el.parentElement.open), `${lang}: keyboard disclosure ${selector}`);
        await page.keyboard.press('Enter');
        assert.equal(await summary.evaluate(el => el.parentElement.open), false);
      }
      const translations = await page.evaluate(() => {
        const dict = copy[document.documentElement.lang];
        return [...document.querySelectorAll('[data-i18n], [data-i18n-placeholder], [data-i18n-aria-label]')]
          .flatMap(el => [el.dataset.i18n, el.dataset.i18nPlaceholder, el.dataset.i18nAriaLabel].filter(Boolean))
          .filter(key => !dict[key] || dict[key].includes('????'));
      });
      assert.deepEqual(translations, [], `${lang}: complete translations`);
      assert.equal(await page.locator('#language').getAttribute('aria-label'), null, 'Uses translated associated label');
      assert.notEqual(await page.locator('.main-nav').getAttribute('aria-label'), lang === 'en' ? '' : 'Main navigation');

      await page.locator('#generate-draft').click();
      assert.equal(await page.locator('#office').getAttribute('aria-invalid'), 'true');
      assert.equal(await page.locator('#topic').getAttribute('aria-invalid'), 'true');
      assert.equal(await page.evaluate(() => document.activeElement.id), 'office');
      const authority = 'Sample public authority';
      const topic = '<img src=x onerror=alert(1)>\nRecords for January 2026';
      await page.fill('#office', authority);
      await page.fill('#topic', topic);
      assert.equal(await page.locator('#topic-count').textContent(), new Intl.NumberFormat(lang).format(topic.length) + ' / ' + new Intl.NumberFormat(lang).format(1200));
      await page.locator('#generate-draft').click();
      const draft = await page.locator('#draft-text').textContent();
      assert.ok(draft.includes(authority) && draft.includes(topic));
      assert.ok(draft.includes('\n\n'), 'Draft uses actual line breaks');
      assert.equal(await page.locator('#draft-text img').count(), 0, 'Entries remain text');
      assert.equal(await page.locator('#draft-text').getAttribute('lang'), lang);
      assert.equal(await page.evaluate(() => document.activeElement.id), 'draft-heading');
      assert.equal(await page.evaluate(() => window.lastRequestedScrollBehavior), 'instant', 'Draft scrolling respects reduced motion');
      assert.ok(await page.locator('#copy-draft').isEnabled());
      await page.locator('#copy-draft').click();
      await page.waitForFunction(() => document.getElementById('rti-status').textContent === copy[document.documentElement.lang].copied);
      const clipboard = await page.evaluate(() => navigator.clipboard.readText());
      assert.equal(clipboard.replace(/\r\n/g, '\n'), draft, 'Clipboard preserves the draft with platform line endings');
      const downloadEvent = page.waitForEvent('download');
      await page.locator('#download-draft').click();
      const download = await downloadEvent;
      assert.equal(download.suggestedFilename(), 'civic-lens-rti-request.txt');
      assert.equal(fs.readFileSync(await download.path(), 'utf8'), draft);

      await page.fill('#topic', topic + ' changed');
      assert.ok(await page.locator('#draft-warning').isVisible());
      assert.ok(await page.locator('#copy-draft').isDisabled());
      assert.ok(await page.locator('#download-draft').isDisabled());
      await page.fill('#topic', topic);
      assert.ok(await page.locator('#copy-draft').isEnabled(), 'Restoring original entries restores current draft');
      const nextLang = lang === 'en' ? 'si' : 'en';
      await page.selectOption('#language', nextLang);
      assert.ok(await page.locator('#draft-warning').isVisible());
      assert.ok(await page.locator('#download-draft').isDisabled());
      assert.equal(await page.locator('#draft-text').getAttribute('lang'), lang);
      await page.locator('#generate-draft').click();
      assert.equal(await page.locator('#draft-text').getAttribute('lang'), nextLang);
      assert.ok(await page.locator('#download-draft').isEnabled());
      await page.locator('#clear-draft').click();
      assert.equal(await page.inputValue('#office'), '');
      assert.equal(await page.inputValue('#topic'), '');
      assert.ok((await page.locator('#topic-count').textContent()).startsWith(new Intl.NumberFormat(nextLang).format(0)));
      assert.equal(await page.locator('#draft-text').textContent(), '');
      assert.ok(await page.locator('#draft-output').isHidden());
      assert.ok(await page.locator('#copy-draft').isDisabled());
      assert.equal(await page.evaluate(() => document.activeElement.id), 'office');
    }
    console.log('PASS: trilingual search, filters, validation, safe text, copy/download, stale drafts, language changes, clear');
    console.log('PASS: trilingual search reset/focus, keyboard source/FAQ/example disclosures, live character count');

    // Check real layouts, including non-Latin controls and populated drafts.
    for (const lang of ['en', 'si', 'ta']) {
      await page.selectOption('#language', lang);
      await page.fill('#office', 'Sample public authority');
      await page.fill('#topic', 'A'.repeat(300));
      await page.locator('#generate-draft').click();
      for (const width of [320, 375, 768, 1024, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        const dimensions = await page.evaluate(() => ({ width: innerWidth, content: document.documentElement.scrollWidth }));
        assert.ok(dimensions.content <= dimensions.width + 1, `${lang}/${width}: page overflow ${JSON.stringify(dimensions)}`);
        for (const selector of ['#language', '#generate-draft', '#clear-draft', '#copy-draft', '#download-draft']) {
          const box = await page.locator(selector).boundingBox();
          assert.ok(box.width >= 44 && box.height >= 44, `${lang}/${width}: touch target ${selector}`);
        }
        if (width <= 375) assert.ok(await page.locator('.main-nav').isVisible(), 'Mobile navigation is available');
      }
      await page.setViewportSize({ width: 375, height: 900 });
      await page.screenshot({ path: path.join(artifacts, `mobile-${lang}.png`), fullPage: true });
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: path.join(artifacts, `mobile-hero-${lang}.png`) });
      await page.locator('#ask').evaluate(el => el.scrollIntoView({ behavior: 'instant' }));
      await page.screenshot({ path: path.join(artifacts, `mobile-helper-${lang}.png`) });
      await page.locator('#start').screenshot({ path: path.join(artifacts, `mobile-start-${lang}.png`) });
      await page.locator('#questions').screenshot({ path: path.join(artifacts, `mobile-faq-${lang}.png`) });
      await page.locator('.source-details summary').first().click();
      await page.locator('.record-card').first().screenshot({ path: path.join(artifacts, `mobile-source-${lang}.png`) });
      await page.locator('.source-details summary').first().click();
      await page.locator('#clear-draft').click();
    }
    await page.selectOption('#language', 'en');
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.screenshot({ path: path.join(artifacts, 'desktop-en.png'), fullPage: true });
    console.log('PASS: 15 layouts across three languages, keyboard skip/focus, reduced motion, mobile navigation, 44px touch targets');

    await page.fill('#office', 'Sample');
    await page.fill('#topic', 'Sample records');
    await page.locator('#generate-draft').click();
    await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: () => Promise.reject(new Error('Clipboard blocked')) } }));
    await page.locator('#copy-draft').click();
    await page.waitForFunction(() => document.getElementById('rti-status').textContent === copy.en.copyFailed);
    assert.ok(await page.locator('#download-draft').isEnabled(), 'Download remains available after clipboard failure');

    await page.reload();
    assert.equal(await page.inputValue('#office'), '');
    assert.equal(await page.inputValue('#topic'), '');
    assert.deepEqual(await page.evaluate(() => [localStorage.length, sessionStorage.length, document.cookie]), [0, 0, '']);
    assert.equal(await page.evaluate(() => document.getAnimations().length), 0, 'Reduced motion disables decorative and reveal animations');
    const noScriptContext = await browser.newContext({ javaScriptEnabled: false, reducedMotion: 'reduce' });
    const noScriptPage = await noScriptContext.newPage();
    await noScriptPage.goto(origin);
    assert.ok(await noScriptPage.locator('#office').isDisabled());
    assert.ok(await noScriptPage.locator('#helper-notice').isVisible());
    assert.equal(await noScriptPage.locator('.record-link:visible').count(), 3);
    assert.equal(await noScriptPage.locator('form').count(), 0);
    assert.equal(await noScriptPage.locator('.journey-card').count(), 3);
    const noScriptSummary = noScriptPage.locator('.faq-list summary').first();
    await noScriptSummary.focus();
    await noScriptPage.keyboard.press('Enter');
    assert.ok(await noScriptSummary.evaluate(el => el.parentElement.open), 'FAQ works without JavaScript');
    // Simulate a partial initialization failure: even enabled inputs cannot submit.
    await noScriptPage.evaluate(() => document.getElementById('rti-fields').disabled = false);
    await noScriptPage.fill('#office', 'PRIVATE SENTINEL');
    await noScriptPage.press('#office', 'Enter');
    await noScriptPage.locator('#generate-draft').click();
    assert.equal(noScriptPage.url(), origin + '/');
    await noScriptContext.close();
    const blockedContext = await browser.newContext();
    const blockedPage = await blockedContext.newPage();
    await blockedPage.route('**/app.js', route => route.abort());
    await blockedPage.goto(origin);
    assert.ok(await blockedPage.locator('#office').isDisabled());
    assert.ok(await blockedPage.locator('#helper-notice').isVisible());
    await blockedContext.close();

    // Exercise real motion as well as the existing reduced-motion checks.
    const motionContext = await browser.newContext({ reducedMotion: 'no-preference', viewport: { width: 1440, height: 1000 } });
    motionContext.setDefaultTimeout(10000);
    const motionPage = await motionContext.newPage();
    motionPage.on('pageerror', error => errors.push(error.message));
    await motionPage.goto(origin);
    assert.equal(await motionPage.locator('.orbit-one').evaluate(el => getComputedStyle(el).animationName), 'orbit-arrive-one');
    assert.equal(await motionPage.locator('.site-header').evaluate(el => getComputedStyle(el).position), 'sticky');
    assert.ok(await motionPage.locator('.hero h1').isVisible());
    const initialAnimations = await motionPage.evaluate(() => document.getAnimations().map(animation => ({ duration: animation.effect.getTiming().duration, iterations: animation.effect.getTiming().iterations })));
    assert.ok(initialAnimations.length > 0, 'Motion is enabled');
    assert.ok(initialAnimations.every(animation => animation.duration <= 2800 && animation.iterations === 1), 'Decorative animations are short and finite');
    await motionPage.waitForFunction(() => document.getAnimations().every(animation => animation.playState !== 'running'));
    await motionPage.locator('#explore').evaluate(el => el.scrollIntoView({ behavior: 'instant' }));
    await motionPage.waitForFunction(() => document.querySelector('.main-nav a[href="#explore"]').getAttribute('aria-current') === 'location');
    await motionPage.emulateMedia({ reducedMotion: 'reduce' });
    await motionPage.waitForFunction(() => document.getAnimations().length === 0);
    assert.equal(await motionPage.locator('.orbit-one').evaluate(el => getComputedStyle(el).animationName), 'none');
    for (const section of ['standards', 'ask']) {
      await motionPage.locator(`#${section}`).evaluate(el => el.scrollIntoView({ behavior: 'instant' }));
      await motionPage.waitForFunction(id => document.querySelector(`.main-nav a[href="#${id}"]`).getAttribute('aria-current') === 'location', section);
    }
    assert.equal(await motionPage.locator('.main-nav [aria-current]').count(), 1);
    await motionPage.locator('#questions').evaluate(el => el.scrollIntoView({ behavior: 'instant' }));
    await motionPage.waitForFunction(() => document.querySelectorAll('.main-nav [aria-current]').length === 0);
    await motionPage.setViewportSize({ width: 375, height: 900 });
    assert.equal(await motionPage.locator('.site-header').evaluate(el => getComputedStyle(el).position), 'relative', 'Mobile header does not cover content');
    await motionPage.locator('#questions').evaluate(el => el.scrollIntoView({ behavior: 'instant' }));
    await motionPage.screenshot({ path: path.join(artifacts, 'faq-mobile.png'), fullPage: false });
    await motionContext.close();
    console.log('PASS: short finite animations, live reduced-motion changes, active section navigation, native FAQ without JavaScript');

    const fallbackContext = await browser.newContext({ reducedMotion: 'reduce' });
    const fallbackPage = await fallbackContext.newPage();
    fallbackPage.on('pageerror', error => errors.push(error.message));
    await fallbackPage.addInitScript(() => { window.IntersectionObserver = undefined; });
    await fallbackPage.goto(origin);
    assert.ok(await fallbackPage.locator('#office').isEnabled(), 'Missing animation APIs do not affect the helper');
    assert.equal(await fallbackPage.locator('[data-reveal]').evaluateAll(elements => elements.every(el => getComputedStyle(el).opacity === '1')), true);
    await fallbackContext.close();
    assert.deepEqual(errors, [], 'No JavaScript errors');
    assert.ok(requests.every(url => url.startsWith(origin + '/') || url.startsWith('blob:')), 'No external requests');
    assert.ok(servedRequests.every(req => req.method === 'GET' && !req.url.includes('?')), 'No submission or query-string entries');
    console.log('PASS: clipboard fallback, no persistence, JavaScript-disabled/blocked safety, no submission or external requests');
    console.log(`Screenshots: ${artifacts}`);
  } finally {
    await browser.close();
  }
}

run().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
