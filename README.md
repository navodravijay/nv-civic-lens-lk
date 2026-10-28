# NV. Civic Lens LK

A trilingual, non-partisan civic information website prototype for Sri Lanka. It helps visitors search official public records, understand source limits, and draft a focused Right to Information request in their own browser.

**Creator:** Navod Ravindu Jayaweera  
**Brand:** NV SHARP SOLUTIONS  
**Stack:** Static HTML, CSS, JavaScript. No build step, backend, analytics, cookies, or third-party JavaScript.

## Run locally

Open `index.html` in a modern browser, or serve the folder with any static file server. Source search and the RTI draft helper work entirely in the browser. Drafts can be copied or downloaded as a text file; entries are not submitted or stored by this page.

## Accessibility and privacy

- Source search matches the bundled English, Sinhala, and Tamil titles and descriptions, plus common institution names and acronyms. It searches the source shelf, not the contents of external documents.
- Navigation remains available on small screens. Filters expose their selected state to screen readers, and controls have visible keyboard focus and larger touch targets.
- The draft helper uses no HTML form or named submission fields. Its controls stay disabled until JavaScript initializes; official source links remain usable without JavaScript. The security policy also blocks form submissions with `form-action 'none'`.
- Draft entries exist only in page memory. Clear removes the entries and generated draft from the page. Copy and download create a user-requested copy; clearing the page does not remove clipboard contents or files already downloaded. Browser autofill, history restoration, and clipboard behavior are controlled by the browser.
- Editing an entry or changing the language marks a draft as outdated and disables copy/download until the draft matches the current entries and language or is regenerated. The existing draft retains its original language for screen readers.
- Validation, draft status messages, accessibility labels, and helper controls are available in all three languages. Draft navigation respects reduced-motion settings.

## Guided browsing and motion

- A three-step introduction helps visitors find a source, understand its limits, and prepare a question.
- Each source has a native disclosure explaining how to read it in context. The FAQ and request-writing example also work without JavaScript.
- Search can be reset with one action. The request helper includes writing prompts and a character count without sending or saving entries.
- Desktop navigation stays available while scrolling and indicates the current records, standards, or request section. On smaller screens the header remains in normal document flow.
- Hero animations finish within 2.8 seconds. Scroll reveals run once per element; content never starts hidden. Keyboard-focused content is not animated. Reduced-motion preferences disable CSS motion and cancel running JavaScript reveals, including when the preference changes during a visit.
- All additions use the existing local HTML, CSS, and JavaScript. No third-party scripts, tracking, or security-header exceptions are needed.

## Browser checks

With Node.js and an existing Playwright installation and Chromium browser available, run `node tests/browser-checks.cjs`. If Playwright is installed outside this project, set `PLAYWRIGHT_MODULE_PATH` to that installation's module path first. The checks start a temporary local server with the included security headers; the website itself still needs no packages or build step.

The checks cover all three languages, search/filter/reset combinations, native source/FAQ/example disclosures, character counts, inline validation, literal rendering of user text, draft language and stale-state handling, copy/download, clear, keyboard focus, and 15 viewport/language combinations. They also check finite animations, changes to reduced-motion preferences, active section navigation, JavaScript-disabled/blocked behavior, empty browser storage, and the absence of form submissions or external requests. Clipboard behavior is simulated to avoid changing the developer's OS clipboard. Screenshots are written to a temporary directory.

## Continue in VS Code with Codex

1. Download and extract the ZIP file.
2. In VS Code, choose **File → Open Folder** and select `nv-civic-lens-lk`.
3. Open the Codex panel and ask it to make one focused change at a time. Example prompt:

   > Improve the civic source search for keyboard and screen-reader users. Keep the site non-partisan, trilingual, static, privacy-preserving, and compatible with Cloudflare Pages. Do not add unsourced political claims or send user data to a server.

4. Review the changed files before committing. Keep official source links and the integrity notes accurate.

## Deploy to Cloudflare Pages

1. Create a GitHub repository and upload the contents of this folder to its root.
2. In Cloudflare Pages, connect the repository using the Git integration.
3. Set the production branch to `main`, the build command to `exit 0`, and the build output directory to `.` (the repository root, where `index.html` lives).
4. Deploy. Future pushes to the connected GitHub branch trigger deployments automatically. The included `_headers` file adds baseline browser security headers.

## Official source shelf

- Ministry of Finance: Budget Estimates 2026 — https://www.treasury.gov.lk/web/budget-estimates/section/budget%20estimates%20-2026
- Parliament of Sri Lanka: Committee on Public Accounts — https://www.parliament.lk/en/business-of-parliament/committees/658
- Right to Information Commission: FAQ and guidance — https://rticommission.lk/web/index.php?Itemid=111&id=8&lang=en&option=com_content&view=article

The starter shelf links to official sources but does not claim that a local project is on time, complete, wasteful, or corrupt. It does not independently audit public spending. Add project-level tracking only after each status can be supported with a dated public source and a clear methodology.

## Information integrity and safety

- Keep a source URL and access/review date for every displayed claim.
- Mark missing or conflicting public information clearly; do not infer wrongdoing.
- Keep the same evidence rules across political parties and officials.
- Provide a visible correction channel before collecting public submissions.
- Do not collect allegations, identity documents, political affiliation, or sensitive personal data in a public form.
- Update the content security policy if adding local scripts or styles. Avoid third-party scripts unless necessary and reviewed.

## Notes

This is an independent civic information demo. It is not affiliated with the Government of Sri Lanka, Parliament, the Right to Information Commission, or any political party. The request draft is a writing aid, not legal advice; visitors should follow current official RTI guidance.
