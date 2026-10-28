'use strict';
const copy = {
  en:{skip:'Skip to content',navExplore:'Explore records',navAsk:'Ask for information',navStandards:'Our standards',languageLabel:'Language',headerCta:'Open the lens',eyebrow:'INDEPENDENT · NON-PARTISAN · SOURCE-LED',heroTitle:'Public information.<br><em>Clearer for everyone.</em>',heroBody:'Explore official records, understand what they say, and prepare better questions about decisions that affect your community.',exploreButton:'Explore public records',askButton:'Prepare an information request',heroNote:'A civic information project by NV SHARP SOLUTIONS. Not an official government service.',heroBottomLeft:'CITIZEN TOOLKIT · SRI LANKA',principle1:'SOURCE EVERY CLAIM',principle2:'SHOW WHAT IS UNKNOWN',principle3:'MAKE CIVIC ACTION EASIER',exploreEyebrow:'THE PUBLIC RECORDS DESK',exploreTitle:'Start with what’s published.',exploreIntro:'A small, carefully labelled starter shelf of official sources. These documents help you investigate; they do not confirm the status of a specific local project.',filterAll:'All records <span>03</span>',searchLabel:'Search public sources',searchPlaceholder:'Search titles, topics, or institutions',noResults:'No sources match your search. Try another word or category.',recordsShown:'{count} sources shown',filterBudget:'Budget & spending',filterOversight:'Public oversight',filterRights:'Information rights',typeBudget:'BUDGET & SPENDING',typeOversight:'PUBLIC OVERSIGHT',typeRights:'INFORMATION RIGHTS',record1Title:'Budget Estimates 2026',record1Body:'Explore the Ministry of Finance’s published budget estimate documents. Use them to locate allocations and responsible institutions.',record2Title:'Committee on Public Accounts',record2Body:'Read reports published by Parliament’s Committee on Public Accounts, which examines public expenditure with the Auditor-General.',record3Title:'Right to Information Commission',record3Body:'Learn how to request public information, what proactive disclosure means, and where to find the Commission’s guidance.',officialSource:'OFFICIAL SOURCE',publishedRecord:'PUBLISHED RECORD',openSource:'Open source',integrityNote:'<strong>Read the original.</strong> Civic Lens links to public sources and helps explain them. It does not independently audit spending or determine wrongdoing.',standardsEyebrow:'HOW WE EARN TRUST',standardsTitle:'Evidence first.<br><em>People always.</em>',standardsIntro:'Civic information only helps when people can see where it came from and understand its limits.',standard1Title:'Every record has a source',standard1Body:'We link to the original public institution, document, and date wherever available.',standard2Title:'Unknown stays unknown',standard2Body:'Missing public data is labelled as missing. We never fill gaps with guesses.',standard3Title:'No party endorsements',standard3Body:'We do not rank parties, candidates, or officials. The same source rules apply to everyone.',standard4Title:'Corrections are welcome',standard4Body:'A public-interest project should make it easy to flag an outdated link or factual error.',rtiEyebrow:'YOUR RIGHT TO ASK',rtiTitle:'Turn a question<br>into a clear request.',rtiBody:'Use this private, in-browser helper to draft a focused request for public information. Review it, then submit it through the official process.',learnRti:'Read the Commission’s guidance',privacyLabel:'STAYS ON THIS DEVICE',officeLabel:'Public authority or office',officePlaceholder:'e.g., Kandy Municipal Council',topicLabel:'What information are you requesting?',topicPlaceholder:'Ask for a specific record, date range, or project document.',generateButton:'Create request draft',formDisclaimer:'Your entries are processed in your browser. This page does not send or store them.',draftReady:'YOUR DRAFT',copyButton:'Copy text',downloadDraft:'Download .txt',draftFooter:'Review and adapt this draft. The RTI Commission’s official guidance takes precedence.',closingText:'A clearer view of public information is a starting point for stronger civic participation.',footerDisclaimer:'Independent civic information demo. Not affiliated with the Government of Sri Lanka, Parliament, or any political party.',createdBy:'Created by Navod Ravindu Jayaweera',draftSubject:'Subject: Request for access to public information',draftGreeting:'To the Information Officer,',draftAsk:'Under the Right to Information Act, I request access to the following information:',draftAuthority:'Public authority: ',draftDetails:'Information requested: ',draftThanks:'Please let me know if clarification is needed. Kindly acknowledge this request and advise me of the next steps under the Act.',draftSign:'Name: [Your name]\nContact details: [Your contact details]\nDate: [Date]',fillRequired:'Please enter an authority and describe the information you need.',copied:'Copied',copyFailed:'Select and copy the draft manually.'},
  si:{skip:'අන්තර්ගතයට යන්න',navExplore:'වාර්තා බලන්න',navAsk:'තොරතුරු ඉල්ලන්න',navStandards:'අපේ ප්‍රමිතීන්',languageLabel:'භාෂාව',headerCta:'තොරතුරු බලන්න',eyebrow:'ස්වාධීන · පක්ෂපාතී නොවන · මූලාශ්‍ර මත පදනම් වූ',heroTitle:'පොදු තොරතුරු.<br><em>සැමට පැහැදිලිව.</em>',heroBody:'නිල වාර්තා බලන්න, ඒවායේ අර්ථය තේරුම්ගන්න, ඔබේ ප්‍රජාවට බලපාන තීරණ ගැන නිවැරදි ප්‍රශ්න සකස් කරන්න.',exploreButton:'පොදු වාර්තා බලන්න',askButton:'තොරතුරු ඉල්ලීමක් සකස් කරන්න',heroNote:'NV SHARP SOLUTIONS විසින් සකස් කරන ස්වාධීන පුරවැසි තොරතුරු ව්‍යාපෘතියකි. රජයේ නිල සේවාවක් නොවේ.',heroBottomLeft:'පුරවැසි මෙවලම් එකතුව · ශ්‍රී ලංකාව',principle1:'සෑම කරුණකටම මූලාශ්‍රයක්',principle2:'නොදන්නා දේ පැහැදිලිව පෙන්වන්න',principle3:'පුරවැසි ක්‍රියාමාර්ග පහසු කරන්න',exploreEyebrow:'පොදු වාර්තා එකතුව',exploreTitle:'ප්‍රසිද්ධ කර ඇති තොරතුරුවලින් පටන්ගමු.',exploreIntro:'නිල මූලාශ්‍ර කිහිපයක් පමණක් ප්‍රවේශමෙන් වර්ග කර ඇත. මේවා විමර්ශනයට උපකාරී වේ; ඔබේ ප්‍රදේශයේ ව්‍යාපෘතියක තත්ත්වය තහවුරු නොකරයි.',filterAll:'සියලු වාර්තා <span>03</span>',searchLabel:'පොදු මූලාශ්‍ර සොයන්න',searchPlaceholder:'මාතෘකා, විෂය හෝ ආයතන සොයන්න',noResults:'සෙවුමට ගැළපෙන මූලාශ්‍ර නැහැ. වෙනත් වචනයක් හෝ වර්ගයක් තෝරන්න.',recordsShown:'මූලාශ්‍ර {count}ක් පෙන්වයි',filterBudget:'අයවැය සහ වියදම්',filterOversight:'පොදු අධීක්ෂණය',filterRights:'තොරතුරු අයිතිය',typeBudget:'අයවැය සහ වියදම්',typeOversight:'පොදු අධීක්ෂණය',typeRights:'තොරතුරු අයිතිය',record1Title:'2026 අයවැය ඇස්තමේන්තු',record1Body:'මුදල් අමාත්‍යාංශය ප්‍රසිද්ධ කළ අයවැය ඇස්තමේන්තු බලන්න. වෙන්කිරීම් සහ වගකිව යුතු ආයතන සොයාගැනීමට ඒවා භාවිත කරන්න.',record2Title:'පොදු ගිණුම් පිළිබඳ කාරක සභාව',record2Body:'විගණකාධිපතිගේ සහාය ඇතිව පොදු වියදම් පරීක්ෂා කරන පාර්ලිමේන්තු පොදු ගිණුම් කාරක සභාවේ වාර්තා කියවන්න.',record3Title:'තොරතුරු දැනගැනීමේ කොමිෂන් සභාව',record3Body:'පොදු තොරතුරු ඉල්ලන ආකාරය, පෙර තොරතුරු හෙළිදරව් කිරීම සහ කොමිෂන් සභාවේ මාර්ගෝපදේශ දැනගන්න.',officialSource:'නිල මූලාශ්‍රය',publishedRecord:'ප්‍රසිද්ධ කළ වාර්තාව',openSource:'මුල් මූලාශ්‍රයට යන්න',integrityNote:'<strong>මුල් වාර්තාව කියවන්න.</strong> Civic Lens පොදු මූලාශ්‍ර වෙත යොමු කර ඒවා තේරුම්ගැනීමට උදව් කරයි. වියදම් ස්වාධීනව විගණනය කිරීම හෝ වරදක් තීරණය කිරීම සිදු නොකරයි.',standardsEyebrow:'විශ්වාසය ගොඩනඟන ආකාරය',standardsTitle:'සාක්ෂි පළමුව.<br><em>ජනතාව සැමවිටම.</em>',standardsIntro:'තොරතුරු ප්‍රයෝජනවත් වන්නේ එය පැමිණියේ කොහෙන්ද සහ එහි සීමාවන් මොනවාද යන්න ජනතාවට පෙනෙන විටයි.',standard1Title:'සෑම වාර්තාවකටම මූලාශ්‍රයක්',standard1Body:'හැකි සෑම විටම මුල් රාජ්‍ය ආයතනය, ලේඛනය සහ දිනයට සබැඳියක් දෙනවා.',standard2Title:'නොදන්නා දේ නොදන්නා ලෙසම',standard2Body:'ප්‍රසිද්ධ දත්ත නැති විට එය නැති බව පෙන්වනවා. අනුමානවලින් හිඩැස් පුරවන්නේ නැහැ.',standard3Title:'පක්ෂයකට සහාය නොදෙයි',standard3Body:'පක්ෂ, අපේක්ෂකයන් හෝ නිලධාරීන් ශ්‍රේණිගත කරන්නේ නැහැ. එකම මූලාශ්‍ර ප්‍රමිතිය සැමට යොදනවා.',standard4Title:'නිවැරදි කිරීම් පිළිගනිමු',standard4Body:'කල් ඉකුත් වූ සබැඳියක් හෝ කරුණු දෝෂයක් පහසුවෙන් දැනුම් දිය හැකි විය යුතුයි.',rtiEyebrow:'ඔබේ තොරතුරු ඉල්ලීමේ අයිතිය',rtiTitle:'ප්‍රශ්නයක් පැහැදිලි<br>ඉල්ලීමක් බවට පත්කරන්න.',rtiBody:'පොදු තොරතුරු සඳහා අවධානයෙන් සකස් කළ ඉල්ලීමක් මෙහිදී ඔබේ උපාංගයේම සකස් කරන්න. එය පරීක්ෂා කර නිල ක්‍රමය ඔස්සේ ඉදිරිපත් කරන්න.',learnRti:'කොමිෂන් සභාවේ මාර්ගෝපදේශ කියවන්න',privacyLabel:'ඔබේ උපාංගයේ පමණයි',officeLabel:'රාජ්‍ය ආයතනය හෝ කාර්යාලය',officePlaceholder:'උදා: මහනුවර මහ නගර සභාව',topicLabel:'ඔබ ඉල්ලන්නේ කුමන තොරතුරුද?',topicPlaceholder:'නිශ්චිත වාර්තාවක්, දිනයන් පරාසයක් හෝ ව්‍යාපෘති ලේඛනයක් සඳහන් කරන්න.',generateButton:'ඉල්ලීමේ කෙටුම්පත සකස් කරන්න',formDisclaimer:'ඔබ ඇතුළත් කරන දේ ඔබේ browser එකේම සකස් වේ. මෙම පිටුව ඒවා යවන්නේවත් ගබඩා කරන්නේවත් නැහැ.',draftReady:'ඔබේ කෙටුම්පත',copyButton:'පෙළ පිටපත් කරන්න',downloadDraft:'.txt බාගන්න',draftFooter:'මෙම කෙටුම්පත පරීක්ෂා කර අවශ්‍ය පරිදි වෙනස් කරන්න. RTI කොමිෂන් සභාවේ නිල මාර්ගෝපදේශ ප්‍රමුඛ වේ.',closingText:'පොදු තොරතුරු පැහැදිලිව දැකීම, ශක්තිමත් පුරවැසි සහභාගීත්වයට පළමු පියවරයි.',footerDisclaimer:'ස්වාධීන පුරවැසි තොරතුරු demo එකකි. ශ්‍රී ලංකා රජය, පාර්ලිමේන්තුව හෝ කිසිදු දේශපාලන පක්ෂයක් සමඟ අනුබද්ධ නැත.',createdBy:'නිර්මාණය: Navod Ravindu Jayaweera',draftSubject:'විෂය: පොදු තොරතුරු ලබාගැනීමේ ඉල්ලීම',draftGreeting:'තොරතුරු නිලධාරී වෙත,',draftAsk:'තොරතුරු දැනගැනීමේ අයිතිවාසිකම පිළිබඳ පනත යටතේ, පහත සඳහන් තොරතුරු ලබාදෙන ලෙස ඉල්ලමි:',draftAuthority:'රාජ්‍ය ආයතනය: ',draftDetails:'ඉල්ලන තොරතුරු: ',draftThanks:'වැඩිදුර පැහැදිලි කිරීමක් අවශ්‍ය නම් කරුණාකර දැනුම් දෙන්න. මෙම ඉල්ලීම ලැබුණු බව තහවුරු කර, පනත යටතේ ඊළඟ පියවර දන්වන්න.',draftSign:'නම: [ඔබගේ නම]\nසම්බන්ධතා තොරතුරු: [ඔබගේ සම්බන්ධතා]\nදිනය: [දිනය]',fillRequired:'කරුණාකර ආයතනයේ නම සහ ඔබට අවශ්‍ය තොරතුරු සඳහන් කරන්න.',copied:'පිටපත් කළා',copyFailed:'කෙටුම්පත තෝරාගෙන අතින් පිටපත් කරන්න.'},
  ta:{skip:'உள்ளடக்கத்திற்குச் செல்லவும்',navExplore:'ஆவணங்களைப் பாருங்கள்',navAsk:'தகவல் கோருங்கள்',navStandards:'எங்கள் தரநிலைகள்',languageLabel:'மொழி',headerCta:'தகவல்களைப் பாருங்கள்',eyebrow:'சுயாதீன · கட்சிசார்பற்ற · ஆதாரங்களை அடிப்படையாகக் கொண்டது',heroTitle:'பொதுத் தகவல்கள்.<br><em>அனைவருக்கும் தெளிவாக.</em>',heroBody:'அதிகாரப்பூர்வ ஆவணங்களைப் பாருங்கள், அவை கூறுவதைப் புரிந்துகொள்ளுங்கள், உங்கள் சமூகத்தைப் பாதிக்கும் முடிவுகள் பற்றி சிறந்த கேள்விகளைத் தயாரியுங்கள்.',exploreButton:'பொது ஆவணங்களைப் பாருங்கள்',askButton:'தகவல் கோரிக்கையைத் தயாரியுங்கள்',heroNote:'NV SHARP SOLUTIONS உருவாக்கிய குடிமக்கள் தகவல் திட்டம். அரசாங்கத்தின் அதிகாரப்பூர்வ சேவை அல்ல.',heroBottomLeft:'குடிமக்கள் கருவித்தொகுப்பு · இலங்கை',principle1:'ஒவ்வொரு கூற்றுக்கும் ஆதாரம்',principle2:'தெரியாததைத் தெளிவாகக் காட்டுங்கள்',principle3:'குடிமக்கள் நடவடிக்கையை எளிதாக்குங்கள்',exploreEyebrow:'பொது ஆவண மேசை',exploreTitle:'வெளியிடப்பட்ட தகவலிலிருந்து தொடங்குங்கள்.',exploreIntro:'கவனமாக வகைப்படுத்தப்பட்ட சில அதிகாரப்பூர்வ ஆதாரங்கள். இவை ஆய்வுக்கு உதவும்; உங்கள் பகுதியிலுள்ள குறிப்பிட்ட திட்டத்தின் நிலையை உறுதிப்படுத்தாது.',filterAll:'அனைத்து ஆவணங்களும் <span>03</span>',searchLabel:'பொது ஆதாரங்களைத் தேடுங்கள்',searchPlaceholder:'தலைப்பு, பொருள் அல்லது நிறுவனத்தைத் தேடுங்கள்',noResults:'உங்கள் தேடலுக்கு ஆதாரங்கள் இல்லை. வேறு சொல் அல்லது வகையை முயற்சிக்கவும்.',recordsShown:'{count} ஆதாரங்கள் காட்டப்படுகின்றன',filterBudget:'வரவு செலவு மற்றும் செலவுகள்',filterOversight:'பொது மேற்பார்வை',filterRights:'தகவல் உரிமை',typeBudget:'வரவு செலவு மற்றும் செலவுகள்',typeOversight:'பொது மேற்பார்வை',typeRights:'தகவல் உரிமை',record1Title:'2026 வரவு செலவு மதிப்பீடுகள்',record1Body:'நிதி அமைச்சு வெளியிட்ட வரவு செலவு மதிப்பீட்டு ஆவணங்களைப் பாருங்கள். ஒதுக்கீடுகளையும் பொறுப்பான நிறுவனங்களையும் கண்டறிய அவற்றைப் பயன்படுத்துங்கள்.',record2Title:'பொதுக் கணக்குகள் குழு',record2Body:'கணக்காய்வாளர் நாயகத்தின் உதவியுடன் பொதுச் செலவுகளை ஆய்வு செய்யும் பாராளுமன்ற பொதுக் கணக்குகள் குழுவின் அறிக்கைகளை வாசியுங்கள்.',record3Title:'தகவல் அறியும் உரிமை ஆணைக்குழு',record3Body:'பொதுத் தகவல்களைக் கோருவது, முன்கூட்டிய வெளிப்படுத்தல் மற்றும் ஆணைக்குழுவின் வழிகாட்டுதல்கள் பற்றி அறியுங்கள்.',officialSource:'அதிகாரப்பூர்வ ஆதாரம்',publishedRecord:'வெளியிடப்பட்ட பதிவு',openSource:'மூல ஆதாரத்தைத் திறக்கவும்',integrityNote:'<strong>அசல் ஆவணத்தைப் படியுங்கள்.</strong> Civic Lens பொது ஆதாரங்களுக்குச் சுட்டி காட்டி அவற்றைப் புரிந்துகொள்ள உதவும். செலவுகளைத் தனியாகத் தணிக்கை செய்யவோ தவறைத் தீர்மானிக்கவோ செய்யாது.',standardsEyebrow:'நம்பிக்கையைப் பெறும் வழி',standardsTitle:'ஆதாரம் முதலில்.<br><em>மக்கள் எப்போதும்.</em>',standardsIntro:'தகவலின் மூலத்தையும் அதன் வரம்புகளையும் மக்கள் அறிந்தால் மட்டுமே குடிமைத் தகவல் பயனுள்ளதாக இருக்கும்.',standard1Title:'ஒவ்வொரு பதிவுக்கும் ஓர் ஆதாரம்',standard1Body:'முடிந்தவரை அசல் பொது நிறுவனம், ஆவணம் மற்றும் தேதியுடன் இணைப்போம்.',standard2Title:'தெரியாதது தெரியாததாகவே இருக்கும்',standard2Body:'பொதுத் தரவு இல்லாதபோது அதை இல்லையெனக் குறிப்போம். ஊகங்களால் இடைவெளிகளை நிரப்பமாட்டோம்.',standard3Title:'கட்சிகளுக்கு ஆதரவு இல்லை',standard3Body:'கட்சிகள், வேட்பாளர்கள் அல்லது அதிகாரிகளை தரவரிசைப்படுத்தமாட்டோம். ஒரே ஆதார விதிகள் அனைவருக்கும் பொருந்தும்.',standard4Title:'திருத்தங்கள் வரவேற்கப்படுகின்றன',standard4Body:'காலாவதியான இணைப்பு அல்லது உண்மைத் தவறை எளிதாகத் தெரிவிக்க முடியும்.',rtiEyebrow:'கேட்கும் உங்கள் உரிமை',rtiTitle:'ஒரு கேள்வியைத் தெளிவான<br>கோரிக்கையாக மாற்றுங்கள்.',rtiBody:'பொதுத் தகவலுக்கான குறிப்பிட்ட கோரிக்கையை உங்கள் உலாவியிலேயே தனிப்பட்ட முறையில் தயாரியுங்கள். சரிபார்த்த பின் அதிகாரப்பூர்வ வழியில் சமர்ப்பியுங்கள்.',learnRti:'ஆணைக்குழுவின் வழிகாட்டுதலைப் படியுங்கள்',privacyLabel:'இந்த சாதனத்தில் மட்டுமே',officeLabel:'பொது அதிகார நிறுவனம் அல்லது அலுவலகம்',officePlaceholder:'உதா: கண்டி மாநகர சபை',topicLabel:'எந்தத் தகவலைக் கோருகிறீர்கள்?',topicPlaceholder:'குறிப்பிட்ட பதிவு, காலவரம்பு அல்லது திட்ட ஆவணத்தைக் குறிப்பிடுங்கள்.',generateButton:'கோரிக்கை வரைவை உருவாக்குங்கள்',formDisclaimer:'உங்கள் உள்ளீடுகள் உங்கள் உலாவியிலேயே செயலாக்கப்படும். இந்தப் பக்கம் அவற்றை அனுப்பவோ சேமிக்கவோ செய்யாது.',draftReady:'உங்கள் வரைவு',copyButton:'உரையை நகலெடுக்கவும்',downloadDraft:'.txt பதிவிறக்கவும்',draftFooter:'இந்த வரைவைச் சரிபார்த்து மாற்றியமைக்கவும். RTI ஆணைக்குழுவின் அதிகாரப்பூர்வ வழிகாட்டுதலே முன்னுரிமை பெறும்.',closingText:'பொதுத் தகவல்களைத் தெளிவாகப் பார்ப்பது வலுவான குடிமக்கள் பங்கேற்புக்கான தொடக்கமாகும்.',footerDisclaimer:'சுயாதீன குடிமக்கள் தகவல் மாதிரி. இலங்கை அரசாங்கம், பாராளுமன்றம் அல்லது எந்த அரசியல் கட்சியுடனும் இணைக்கப்படவில்லை.',createdBy:'உருவாக்கியவர்: Navod Ravindu Jayaweera',draftSubject:'தலைப்பு: பொதுத் தகவல்களை அணுகுவதற்கான கோரிக்கை',draftGreeting:'தகவல் அலுவலருக்கு,',draftAsk:'தகவல் அறியும் உரிமைச் சட்டத்தின் கீழ், பின்வரும் தகவல்களை அணுக அனுமதி கோருகிறேன்:',draftAuthority:'பொது அதிகார நிறுவனம்: ',draftDetails:'கோரப்படும் தகவல்: ',draftThanks:'மேலும் விளக்கம் தேவைப்பட்டால் தெரிவிக்கவும். இந்தக் கோரிக்கையைப் பெற்றதை உறுதிப்படுத்தி, சட்டத்தின் கீழான அடுத்த படிகளை அறிவிக்கவும்.',draftSign:'பெயர்: [உங்கள் பெயர்]\nதொடர்பு விவரங்கள்: [உங்கள் தொடர்பு விவரங்கள்]\nதேதி: [தேதி]',fillRequired:'நிறுவனத்தின் பெயரையும் தேவையான தகவலையும் குறிப்பிடுங்கள்.',copied:'நகலெடுக்கப்பட்டது',copyFailed:'வரைவைத் தேர்ந்தெடுத்து கைமுறையாக நகலெடுக்கவும்.'}
};
// All translations and search terms are bundled locally; no requests or storage.
const helperCopy = {
  en: {
    homeLabel: 'NV. Civic Lens LK home', navigationLabel: 'Main navigation',
    principlesLabel: 'Project principles', filtersLabel: 'Filter records',
    backToTopLabel: 'Back to top', helperLabel: 'RTI draft helper',
    newTab: 'opens in a new tab', draftStep: 'DRAFT / 01',
    officeRequired: 'Enter the public authority or office.',
    topicRequired: 'Describe the information you need.',
    clearButton: 'Clear entries and draft',
    draftStale: 'Your entries or language changed. Create a new draft before copying or downloading.',
    draftCreated: 'Your draft is ready. Review it before using it.',
    entriesCleared: 'Entries and draft cleared from this page.',
    downloaded: 'Draft download started.',
    formDisclaimer: 'Your entries stay in this page until you clear or leave it. Copy and download save a copy only when you choose.',
    copyFailed: 'Copy is unavailable. Select the draft text to copy it manually, or download the text file.'
  },
  si: {
    homeLabel: 'NV. Civic Lens LK මුල් පිටුව', navigationLabel: 'ප්‍රධාන සංචාලනය',
    principlesLabel: 'ව්‍යාපෘති මූලධර්ම', filtersLabel: 'වාර්තා වර්ග අනුව පෙරන්න',
    backToTopLabel: 'ඉහළට යන්න', helperLabel: 'තොරතුරු ඉල්ලීමේ කෙටුම්පත් මෙවලම',
    newTab: 'නව ටැබයක විවෘත වේ', draftStep: 'කෙටුම්පත / 01',
    officeRequired: 'රාජ්‍ය ආයතනය හෝ කාර්යාලය සඳහන් කරන්න.',
    topicRequired: 'ඔබට අවශ්‍ය තොරතුරු විස්තර කරන්න.',
    clearButton: 'ඇතුළත් කළ දේ සහ කෙටුම්පත මකන්න',
    draftStale: 'ඇතුළත් කළ දේ හෝ භාෂාව වෙනස් වී ඇත. පිටපත් කිරීමට හෝ බාගැනීමට පෙර නව කෙටුම්පතක් සකස් කරන්න.',
    draftCreated: 'ඔබේ කෙටුම්පත සූදානම්. භාවිතයට පෙර පරීක්ෂා කරන්න.',
    entriesCleared: 'ඇතුළත් කළ දේ සහ කෙටුම්පත මෙම පිටුවෙන් මකා ඇත.',
    downloaded: 'කෙටුම්පත බාගැනීම ආරම්භ විය.',
    formDisclaimer: 'ඔබ මකන තුරු හෝ පිටුවෙන් ඉවත් වන තුරු ඇතුළත් කළ දේ මෙම පිටුවේ පවතී. ඔබ තෝරාගත් විට පමණක් පිටපත් කිරීම හෝ බාගැනීම සිදු වේ.',
    copyFailed: 'පිටපත් කිරීම කළ නොහැක. කෙටුම්පත තෝරා අතින් පිටපත් කරන්න, නැතහොත් පෙළ ගොනුව බාගන්න.'
  },
  ta: {
    homeLabel: 'NV. Civic Lens LK முகப்புப் பக்கம்', navigationLabel: 'முதன்மை வழிசெலுத்தல்',
    principlesLabel: 'திட்டக் கொள்கைகள்', filtersLabel: 'ஆவணங்களை வகைப்படி வடிகட்டுங்கள்',
    backToTopLabel: 'மேலே செல்லவும்', helperLabel: 'தகவல் கோரிக்கை வரைவு உதவி',
    newTab: 'புதிய தாவலில் திறக்கும்', draftStep: 'வரைவு / 01',
    officeRequired: 'பொது அதிகார நிறுவனம் அல்லது அலுவலகத்தைக் குறிப்பிடுங்கள்.',
    topicRequired: 'உங்களுக்குத் தேவையான தகவலை விவரியுங்கள்.',
    clearButton: 'உள்ளீடுகளையும் வரைவையும் அழிக்கவும்',
    draftStale: 'உள்ளீடுகள் அல்லது மொழி மாறிவிட்டது. நகலெடுக்க அல்லது பதிவிறக்க முன் புதிய வரைவை உருவாக்குங்கள்.',
    draftCreated: 'உங்கள் வரைவு தயார். பயன்படுத்தும் முன் சரிபாருங்கள்.',
    entriesCleared: 'இந்தப் பக்கத்திலிருந்து உள்ளீடுகளும் வரைவும் அழிக்கப்பட்டன.',
    downloaded: 'வரைவின் பதிவிறக்கம் தொடங்கியது.',
    formDisclaimer: 'நீங்கள் அழிக்கும் வரை அல்லது பக்கத்தை விட்டு வெளியேறும் வரை உள்ளீடுகள் இந்தப் பக்கத்தில் இருக்கும். நீங்கள் தேர்ந்தெடுக்கும்போது மட்டுமே நகலெடுக்கப்படும் அல்லது பதிவிறக்கப்படும்.',
    copyFailed: 'நகலெடுக்க முடியவில்லை. வரைவு உரையைத் தேர்ந்தெடுத்து கைமுறையாக நகலெடுக்கவும் அல்லது உரைக் கோப்பைப் பதிவிறக்கவும்.'
  }
};
const experienceCopy = {
  en: {
    startEyebrow: 'A SIMPLE WAY TO BEGIN', startTitle: 'From a source to a better question.',
    startIntro: 'New here? Follow these three steps at your own pace.',
    start1Title: 'Find a source', start1Body: 'Search the official source shelf and open the original publication.',
    start2Title: 'Understand its limits', start2Body: 'Separate what is published from what is still unknown.',
    start3Title: 'Prepare your question', start3Body: 'Draft a focused request, review it, and follow the official process.',
    resetSearch: 'Reset search & filters', sourceLimits: 'Read with context',
    record1Limit: 'Use this as a starting point for allocations and institutions. This source card does not establish actual spending or whether a local project is complete.',
    record2Limit: 'Read the original report for its date, scope, and findings. This source card does not determine wrongdoing or the status of a particular project.',
    record3Limit: 'Follow the Commission’s guidance for the official process. This site prepares a draft; it does not submit a request or confirm which office holds a record.',
    requestGuideTitle: 'A focused request starts with…',
    requestTip1: 'A record: name the document or information you need.',
    requestTip2: 'A scope: include the relevant place, service, or project.',
    requestTip3: 'A period: give dates where they help narrow the request.',
    exampleLabel: 'See a writing example',
    requestExample: 'Please provide copies of [record name] relating to [service or project] in [area], for [date range].',
    exampleNote: 'Replace the brackets with your own details. This is a writing example, not an official form.',
    topicHint: 'Be specific: record, place, and period.',
    faqEyebrow: 'BEFORE YOU GO', faqTitle: 'A few things, made clear.',
    faqIntro: 'Know what this project offers before taking your next step.',
    faq1Question: 'Is this an official government website?',
    faq1Answer: 'No. NV. Civic Lens LK is an independent project by NV SHARP SOLUTIONS, created by Navod Ravindu Jayaweera. It is not affiliated with the Government of Sri Lanka, Parliament, or a political party.',
    faq2Question: 'Does this site submit an RTI request for me?',
    faq2Answer: 'No. The helper prepares text in your browser. Review the draft and follow the RTI Commission’s official guidance to submit it through the appropriate process.',
    faq3Question: 'What happens to what I type?',
    faq3Answer: 'This site does not send or persist your entries. They remain in the page while you work. Clear removes them from this page; it does not erase text you copied or files you downloaded.',
    faq4Question: 'Can a source card confirm a project’s status?',
    faq4Answer: 'No. These cards are starting points for official records. Read the original material and its scope. Missing information should remain unknown, rather than being treated as evidence of wrongdoing.',
    visualRecord: 'PUBLIC RECORD', visualPlain: 'PLAIN LANGUAGE', visualQuestion: 'YOUR QUESTION',
    visualCaption: 'A CLEARER VIEW<br><span>STARTS WITH A SOURCE</span>'
  },
  si: {
    startEyebrow: 'ආරම්භයට සරල මඟක්', startTitle: 'මූලාශ්‍රයකින් වඩා හොඳ ප්‍රශ්නයකට.',
    startIntro: 'පළමු වරට පැමිණියාද? ඔබට පහසු වේගයකින් මේ පියවර තුන අනුගමනය කරන්න.',
    start1Title: 'මූලාශ්‍රයක් සොයන්න', start1Body: 'නිල මූලාශ්‍ර එකතුව සොයා මුල් ප්‍රකාශනය විවෘත කරන්න.',
    start2Title: 'එහි සීමා තේරුම්ගන්න', start2Body: 'ප්‍රසිද්ධ කර ඇති දේ සහ තවමත් නොදන්නා දේ වෙන්කර හඳුනාගන්න.',
    start3Title: 'ඔබේ ප්‍රශ්නය සකස් කරන්න', start3Body: 'නිශ්චිත ඉල්ලීමක් කෙටුම්පත් කර, පරීක්ෂා කර, නිල ක්‍රියාවලිය අනුගමනය කරන්න.',
    resetSearch: 'සෙවුම සහ පෙරහන් යළි සකසන්න', sourceLimits: 'මූලාශ්‍රයේ සීමා දැනගන්න',
    record1Limit: 'වෙන්කිරීම් සහ ආයතන ගැන සොයාබැලීමට මෙය ආරම්භයක් ලෙස භාවිත කරන්න. සැබෑ වියදම හෝ ප්‍රාදේශීය ව්‍යාපෘතියක් සම්පූර්ණ වී ඇත්ද යන්න මෙම කාඩ්පත තහවුරු නොකරයි.',
    record2Limit: 'දිනය, විෂය පථය සහ සොයාගැනීම් සඳහා මුල් වාර්තාව කියවන්න. වරදක් සිදුවී ඇත්ද හෝ නිශ්චිත ව්‍යාපෘතියක තත්ත්වය කුමක්ද යන්න මෙම කාඩ්පත තීරණය නොකරයි.',
    record3Limit: 'නිල ක්‍රියාවලිය සඳහා කොමිෂන් සභාවේ මාර්ගෝපදේශ අනුගමනය කරන්න. මෙම අඩවිය කෙටුම්පතක් සකස් කරයි; ඉල්ලීමක් ඉදිරිපත් කිරීම හෝ වාර්තාවක් ඇති කාර්යාලය තහවුරු කිරීම සිදු නොකරයි.',
    requestGuideTitle: 'නිශ්චිත ඉල්ලීමකට අවශ්‍ය දේ…',
    requestTip1: 'වාර්තාවක්: අවශ්‍ය ලේඛනය හෝ තොරතුර නම් කරන්න.',
    requestTip2: 'විෂය පථයක්: අදාළ ස්ථානය, සේවාව හෝ ව්‍යාපෘතිය සඳහන් කරන්න.',
    requestTip3: 'කාලසීමාවක්: ඉල්ලීම නිශ්චිත කිරීමට උපකාරී වන දිනයන් සඳහන් කරන්න.',
    exampleLabel: 'ලිවීමේ උදාහරණයක් බලන්න',
    requestExample: '[දිනයන් පරාසය] සඳහා [ප්‍රදේශය] තුළ [සේවාව හෝ ව්‍යාපෘතිය] සම්බන්ධ [වාර්තාවේ නම] පිටපත් ලබාදෙන ලෙස ඉල්ලමි.',
    exampleNote: 'වරහන් තුළ ඔබේ විස්තර ඇතුළත් කරන්න. මෙය ලිවීමේ උදාහරණයක් මිස නිල ආකෘති පත්‍රයක් නොවේ.',
    topicHint: 'වාර්තාව, ස්ථානය සහ කාලසීමාව නිශ්චිතව සඳහන් කරන්න.',
    faqEyebrow: 'ඉදිරියට යාමට පෙර', faqTitle: 'දැනගත යුතු කරුණු කිහිපයක්.',
    faqIntro: 'ඊළඟ පියවරට පෙර මෙම ව්‍යාපෘතියෙන් ලබාදෙන දේ දැනගන්න.',
    faq1Question: 'මෙය රජයේ නිල වෙබ් අඩවියක්ද?',
    faq1Answer: 'නැහැ. NV. Civic Lens LK යනු Navod Ravindu Jayaweera විසින් නිර්මාණය කළ NV SHARP SOLUTIONS හි ස්වාධීන ව්‍යාපෘතියකි. එය ශ්‍රී ලංකා රජය, පාර්ලිමේන්තුව හෝ දේශපාලන පක්ෂයක් සමඟ අනුබද්ධ නැත.',
    faq2Question: 'මෙම අඩවිය මා වෙනුවෙන් RTI ඉල්ලීම ඉදිරිපත් කරනවාද?',
    faq2Answer: 'නැහැ. මෙවලම ඔබේ බ්‍රවුසරයේ පෙළක් සකස් කරයි. කෙටුම්පත පරීක්ෂා කර, සුදුසු නිල ක්‍රියාවලිය ඔස්සේ ඉදිරිපත් කිරීමට RTI කොමිෂන් සභාවේ මාර්ගෝපදේශ අනුගමනය කරන්න.',
    faq3Question: 'මා ඇතුළත් කරන තොරතුරුවලට සිදුවන්නේ කුමක්ද?',
    faq3Answer: 'මෙම අඩවිය ඔබේ තොරතුරු යවන්නේ හෝ ස්ථිරව ගබඩා කරන්නේ නැහැ. ඔබ වැඩ කරන අතරතුර ඒවා පිටුවේ පවතී. මකා දැමීමෙන් ඒවා මෙම පිටුවෙන් ඉවත් වේ; දැනටමත් පිටපත් කළ පෙළ හෝ බාගත් ගොනු මැකෙන්නේ නැහැ.',
    faq4Question: 'මූලාශ්‍ර කාඩ්පතකින් ව්‍යාපෘතියක තත්ත්වය තහවුරු කළ හැකිද?',
    faq4Answer: 'නැහැ. මෙම කාඩ්පත් නිල වාර්තා සොයාබැලීමට ආරම්භයක් පමණයි. මුල් ලේඛන සහ ඒවායේ විෂය පථය කියවන්න. තොරතුරු නොමැති වීම වරදක සාක්ෂියක් ලෙස සලකනවා වෙනුවට නොදන්නා දෙයක් ලෙසම තබන්න.',
    visualRecord: 'පොදු වාර්තාව', visualPlain: 'සරල භාෂාව', visualQuestion: 'ඔබේ ප්‍රශ්නය',
    visualCaption: 'පැහැදිලි දැක්මක්<br><span>මූලාශ්‍රයකින් ඇරඹේ</span>'
  },
  ta: {
    startEyebrow: 'தொடங்க ஓர் எளிய வழி', startTitle: 'ஆதாரத்திலிருந்து சிறந்த கேள்விக்கு.',
    startIntro: 'முதல் வருகையா? உங்கள் வசதிக்கேற்ப இந்த மூன்று படிகளைப் பின்பற்றுங்கள்.',
    start1Title: 'ஓர் ஆதாரத்தைக் கண்டறியுங்கள்', start1Body: 'அதிகாரப்பூர்வ ஆதாரங்களைத் தேடி அசல் வெளியீட்டைத் திறக்கவும்.',
    start2Title: 'அதன் வரம்புகளை அறியுங்கள்', start2Body: 'வெளியிடப்பட்டதையும் இன்னும் தெரியாததையும் பிரித்தறியுங்கள்.',
    start3Title: 'உங்கள் கேள்வியைத் தயாரியுங்கள்', start3Body: 'குறிப்பிட்ட கோரிக்கையை வரைந்து, சரிபார்த்து, அதிகாரப்பூர்வ நடைமுறையைப் பின்பற்றுங்கள்.',
    resetSearch: 'தேடலையும் வடிப்பான்களையும் மீட்டமைக்கவும்', sourceLimits: 'ஆதாரத்தின் வரம்புகளை அறியுங்கள்',
    record1Limit: 'ஒதுக்கீடுகளையும் நிறுவனங்களையும் ஆராய்வதற்கான தொடக்கமாக இதைப் பயன்படுத்துங்கள். உண்மையான செலவு அல்லது உள்ளூர் திட்டம் முடிந்ததா என்பதை இந்த அட்டை உறுதிப்படுத்தாது.',
    record2Limit: 'தேதி, ஆய்வு வரம்பு மற்றும் கண்டறிதல்களுக்கு அசல் அறிக்கையைப் படியுங்கள். தவறு நடந்ததா அல்லது குறிப்பிட்ட திட்டத்தின் நிலை என்ன என்பதை இந்த அட்டை தீர்மானிக்காது.',
    record3Limit: 'அதிகாரப்பூர்வ நடைமுறைக்கு ஆணைக்குழுவின் வழிகாட்டுதலைப் பின்பற்றுங்கள். இந்தத் தளம் வரைவைத் தயாரிக்கும்; கோரிக்கையைச் சமர்ப்பிக்கவோ எந்த அலுவலகத்தில் ஆவணம் உள்ளது என்பதை உறுதிப்படுத்தவோ செய்யாது.',
    requestGuideTitle: 'குறிப்பிட்ட கோரிக்கைக்கான தொடக்கம்…',
    requestTip1: 'ஓர் ஆவணம்: தேவையான ஆவணம் அல்லது தகவலைக் குறிப்பிடுங்கள்.',
    requestTip2: 'ஓர் வரம்பு: தொடர்புடைய இடம், சேவை அல்லது திட்டத்தைச் சேருங்கள்.',
    requestTip3: 'ஒரு காலப்பகுதி: கோரிக்கையைக் குறுக்க உதவும் தேதிகளைக் குறிப்பிடுங்கள்.',
    exampleLabel: 'எழுதுவதற்கான எடுத்துக்காட்டைப் பாருங்கள்',
    requestExample: '[காலப்பகுதி] தொடர்பாக [பகுதி]யில் உள்ள [சேவை அல்லது திட்டம்] குறித்த [ஆவணத்தின் பெயர்] நகல்களை வழங்கவும்.',
    exampleNote: 'அடைப்புக்குறிகளுக்குள் உங்கள் விவரங்களை இடுங்கள். இது எழுதுவதற்கான எடுத்துக்காட்டு; அதிகாரப்பூர்வப் படிவம் அல்ல.',
    topicHint: 'ஆவணம், இடம் மற்றும் காலப்பகுதியைத் தெளிவாகக் குறிப்பிடுங்கள்.',
    faqEyebrow: 'தொடரும் முன்', faqTitle: 'தெரிந்துகொள்ள வேண்டிய சில விஷயங்கள்.',
    faqIntro: 'அடுத்த படிக்கு முன் இந்தத் திட்டம் வழங்குவதை அறியுங்கள்.',
    faq1Question: 'இது அதிகாரப்பூர்வ அரசாங்க இணையத்தளமா?',
    faq1Answer: 'இல்லை. NV. Civic Lens LK என்பது Navod Ravindu Jayaweera உருவாக்கிய NV SHARP SOLUTIONS இன் சுயாதீனத் திட்டம். இலங்கை அரசாங்கம், பாராளுமன்றம் அல்லது அரசியல் கட்சியுடன் இணைக்கப்படவில்லை.',
    faq2Question: 'இந்தத் தளம் எனக்காக RTI கோரிக்கையைச் சமர்ப்பிக்குமா?',
    faq2Answer: 'இல்லை. இந்த உதவி உங்கள் உலாவியில் உரையைத் தயாரிக்கும். வரைவைச் சரிபார்த்து, உரிய அதிகாரப்பூர்வ நடைமுறை மூலம் சமர்ப்பிக்க RTI ஆணைக்குழுவின் வழிகாட்டுதலைப் பின்பற்றுங்கள்.',
    faq3Question: 'நான் உள்ளிடும் தகவலுக்கு என்ன நடக்கும்?',
    faq3Answer: 'இந்தத் தளம் உங்கள் உள்ளீடுகளை அனுப்பவோ நிரந்தரமாகச் சேமிக்கவோ செய்யாது. நீங்கள் வேலை செய்யும்போது அவை பக்கத்தில் இருக்கும். அழிப்பது இந்தப் பக்கத்திலிருந்து அவற்றை அகற்றும்; ஏற்கெனவே நகலெடுத்த உரை அல்லது பதிவிறக்கிய கோப்புகளை அழிக்காது.',
    faq4Question: 'ஆதார அட்டை ஒரு திட்டத்தின் நிலையை உறுதிப்படுத்துமா?',
    faq4Answer: 'இல்லை. இந்த அட்டைகள் அதிகாரப்பூர்வ ஆவணங்களை ஆராய்வதற்கான தொடக்கங்கள். அசல் ஆவணங்களையும் அவற்றின் வரம்பையும் படியுங்கள். தகவல் இல்லாததைத் தவறுக்கான ஆதாரமாகக் கருதாமல், தெரியாததாகவே கருதுங்கள்.',
    visualRecord: 'பொது ஆவணம்', visualPlain: 'எளிய மொழி', visualQuestion: 'உங்கள் கேள்வி',
    visualCaption: 'தெளிவான பார்வை<br><span>ஓர் ஆதாரத்தில் தொடங்குகிறது</span>'
  }
};
Object.entries(copy).forEach(([lang, dict]) => {
  Object.assign(dict, helperCopy[lang], experienceCopy[lang]);
  [1, 2, 3].forEach(number => {
    dict[`record${number}Link`] = `${dict.openSource}: ${dict[`record${number}Title`]} (${dict.newTab})`;
  });
});

let currentLang = 'en';
let activeFilter = 'all';
let lastDraft = null;
let statusKey = '';
const searchInput = document.getElementById('record-search');
const searchCount = document.getElementById('search-count');
const noResults = document.getElementById('no-results');
const resetSearchButton = document.getElementById('reset-search');
const officeInput = document.getElementById('office');
const topicInput = document.getElementById('topic');
const output = document.getElementById('draft-output');
const draftText = document.getElementById('draft-text');
const draftWarning = document.getElementById('draft-warning');
const copyButton = document.getElementById('copy-draft');
const downloadButton = document.getElementById('download-draft');
const status = document.getElementById('rti-status');
const recordSearchKeys = {
  budget: ['record1Title', 'record1Body', 'typeBudget'],
  oversight: ['record2Title', 'record2Body', 'typeOversight'],
  rights: ['record3Title', 'record3Body', 'typeRights']
};
const recordAliases = {
  budget: 'treasury finance budget estimates 2026',
  oversight: 'COPA parliament auditor general public accounts oversight',
  rights: 'RTI right to information commission'
};
const normalizeSearch = text => text.normalize('NFKC').toLocaleLowerCase();
const searchIndex = new Map();
document.querySelectorAll('.record-card').forEach(card => {
  const category = card.dataset.category;
  const translations = Object.values(copy).flatMap(dict => recordSearchKeys[category].map(key => dict[key]));
  searchIndex.set(card, normalizeSearch([...translations, recordAliases[category]].join(' ')));
});

function updateRecords() {
  const query = normalizeSearch(searchInput.value.trim());
  let visible = 0;
  searchIndex.forEach((text, card) => {
    const inCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
    card.hidden = !(inCategory && (!query || text.includes(query)));
    if (!card.hidden) visible++;
  });
  searchCount.textContent = copy[currentLang].recordsShown.replace('{count}', String(visible));
  noResults.hidden = visible !== 0;
  resetSearchButton.hidden = !searchInput.value && activeFilter === 'all';
}

function announce(key) {
  statusKey = key;
  status.textContent = key ? copy[currentLang][key] : '';
}

function draftIsCurrent() {
  return lastDraft !== null && lastDraft.lang === currentLang &&
    lastDraft.office === officeInput.value && lastDraft.topic === topicInput.value;
}

function updateDraftState() {
  const current = draftIsCurrent();
  copyButton.disabled = !current;
  downloadButton.disabled = !current;
  draftWarning.hidden = !lastDraft || current;
  if (lastDraft) announce(current ? 'draftCreated' : 'draftStale');
}

function setLanguage(lang) {
  currentLang = Object.hasOwn(copy, lang) ? lang : 'en';
  const dict = copy[currentLang];
  document.documentElement.lang = currentLang;
  document.body.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = dict[el.dataset.i18nPlaceholder];
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    el.setAttribute('aria-label', dict[el.dataset.i18nAriaLabel]);
  });
  document.getElementById('language').value = currentLang;
  updateRecords();
  updateTopicCount();
  if (lastDraft) updateDraftState();
  else announce(statusKey);
}

document.getElementById('language').addEventListener('change', e => setLanguage(e.target.value));
searchInput.addEventListener('input', updateRecords);
function setActiveFilter(category) {
  activeFilter = category;
  document.querySelectorAll('.filter-button').forEach(filter => {
    const selected = filter.dataset.filter === category;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  updateRecords();
}
document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => {
  setActiveFilter(button.dataset.filter);
}));
resetSearchButton.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus({ preventScroll: true });
  setActiveFilter('all');
});

function updateTopicCount() {
  const number = new Intl.NumberFormat(currentLang);
  document.getElementById('topic-count').textContent = `${number.format(topicInput.value.length)} / ${number.format(topicInput.maxLength)}`;
}
topicInput.addEventListener('input', updateTopicCount);

function validateField(input) {
  const invalid = !input.value.trim();
  document.getElementById(`${input.id}-error`).hidden = !invalid;
  if (invalid) input.setAttribute('aria-invalid', 'true');
  else input.removeAttribute('aria-invalid');
  return !invalid;
}

[officeInput, topicInput].forEach(input => input.addEventListener('input', () => {
  if (input.hasAttribute('aria-invalid')) validateField(input);
  if (lastDraft) updateDraftState();
  else announce('');
}));

document.getElementById('generate-draft').addEventListener('click', () => {
  const validOffice = validateField(officeInput);
  const validTopic = validateField(topicInput);
  if (!validOffice || !validTopic) {
    (validOffice ? topicInput : officeInput).focus();
    return;
  }
  const dict = copy[currentLang];
  draftText.textContent = [dict.draftSubject, '', dict.draftGreeting, '', dict.draftAsk, '',
    dict.draftAuthority + officeInput.value.trim(), '', dict.draftDetails + topicInput.value.trim(), '',
    dict.draftThanks, '', dict.draftSign].join('\n');
  draftText.lang = currentLang;
  lastDraft = { lang: currentLang, office: officeInput.value, topic: topicInput.value };
  output.hidden = false;
  updateDraftState();
  document.getElementById('draft-heading').focus({ preventScroll: true });
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  output.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'nearest' });
});

document.getElementById('clear-draft').addEventListener('click', () => {
  officeInput.value = '';
  topicInput.value = '';
  updateTopicCount();
  draftText.textContent = '';
  draftText.removeAttribute('lang');
  lastDraft = null;
  output.hidden = true;
  [officeInput, topicInput].forEach(input => {
    input.removeAttribute('aria-invalid');
    document.getElementById(`${input.id}-error`).hidden = true;
  });
  updateDraftState();
  announce('entriesCleared');
  officeInput.focus();
});

copyButton.addEventListener('click', async () => {
  if (!draftIsCurrent()) return;
  const snapshot = lastDraft;
  try {
    await navigator.clipboard.writeText(draftText.textContent);
    if (lastDraft === snapshot && draftIsCurrent()) announce('copied');
  } catch {
    if (lastDraft === snapshot && draftIsCurrent()) announce('copyFailed');
  }
});

downloadButton.addEventListener('click', () => {
  if (!draftIsCurrent()) return;
  const file = new Blob([draftText.textContent], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = 'civic-lens-rti-request.txt';
  document.body.appendChild(link);
  link.click();
  link.remove();
  // Keep the URL alive until the browser has started the download.
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  announce('downloaded');
});

setLanguage('en');
document.getElementById('helper-notice').hidden = true;
document.getElementById('rti-fields').disabled = false;

// Motion is an enhancement: content is visible before, during, and without it.
function initMotion() {
  if (typeof window.IntersectionObserver !== 'function' || typeof Element.prototype.animate !== 'function') return;
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animated = new WeakSet();
  const running = new Set();
  const targets = document.querySelectorAll('[data-reveal], .explore-section .section-heading, .record-card, .how-copy, .standard-row, .rti-copy');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || preference.matches) return;
      const element = entry.target;
      observer.unobserve(element);
      animated.add(element);
      // Never move a control or text that the keyboard user is interacting with.
      if (element.contains(document.activeElement)) return;
      const animation = element.animate([
        { opacity: .65, transform: 'translateY(14px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 480, easing: 'cubic-bezier(.2,.7,.2,1)' });
      running.add(animation);
      animation.onfinish = animation.oncancel = () => running.delete(animation);
    });
  }, { threshold: .12 });
  function applyPreference() {
    observer.disconnect();
    if (preference.matches) {
      running.forEach(animation => animation.cancel());
    } else {
      targets.forEach(element => { if (!animated.has(element)) observer.observe(element); });
    }
  }
  preference.addEventListener('change', applyPreference);
  document.addEventListener('focusin', event => {
    running.forEach(animation => {
      if (animation.effect.target.contains(event.target)) animation.cancel();
    });
  });
  applyPreference();
}

function initSectionNavigation() {
  const header = document.querySelector('.site-header');
  const links = [...document.querySelectorAll('.main-nav a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  let scheduled = false;
  function updatePosition() {
    scheduled = false;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
    const marker = Math.min(window.innerHeight * .3, 240);
    const active = sections.findIndex(section => {
      const rect = section.getBoundingClientRect();
      return rect.top <= marker && rect.bottom > marker;
    });
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updatePosition);
  }
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  document.getElementById('language').addEventListener('change', scheduleUpdate);
  // Expanding a disclosure changes section positions without scrolling.
  document.addEventListener('toggle', scheduleUpdate, true);
  updatePosition();
}
initMotion();
initSectionNavigation();
