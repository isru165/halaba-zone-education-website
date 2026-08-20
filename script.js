const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const backTop = document.querySelector('.back-to-top');
const loader = document.querySelector('.page-loader');

window.addEventListener('load', () => {
  setTimeout(() => loader?.classList.add('hide'), 350);
});

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 35);
  backTop?.classList.toggle('show', window.scrollY > 500);
});

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Director section with the official photo supplied by the department/user.
const heroSection = document.querySelector('.hero');
if (heroSection && !document.querySelector('#director')) {
  heroSection.insertAdjacentHTML('afterend', `
    <section class="director-section" id="director">
      <div class="container">
        <div class="director-card reveal">
          <div class="director-image-wrap">
            <img src="assets/director.jpg" alt="Director of Halaba Zone Education Department" class="director-photo">
          </div>
          <div class="director-content">
            <span class="section-kicker">Leadership</span>
            <h2>Message from the <span>Director.</span></h2>
            <p class="director-lead">Welcome to the official website of the Halaba Zone Education Department.</p>
            <p>Our commitment is to strengthen the quality of education, support teachers and educational institutions, and create better learning opportunities for every student in our zone.</p>
            <p>We believe that quality education is the foundation of sustainable development and a brighter future for our communities.</p>
            <div class="director-info">
              <strong>Dr. Ephrem Zeleke Mohammed</strong>
              <span>Head of Halaba Zone Education Department</span>
            </div>
            <small class="content-note">Official name and message will be updated after confirmation by the department.</small>
          </div>
        </div>
      </div>
    </section>
  `);
}

// English / Amharic language support.
const translations = {
  en: {
    nav: ['Home', 'About', 'Programs', 'News', 'Resources', 'Gallery', 'Contact'],
    eyebrow: 'Central Ethiopia Regional State',
    heroTitle: 'Building a stronger future through <em>quality education.</em>',
    heroText: 'Welcome to the digital home of the Halaba Zone Education Department. Connecting learners, educators, schools and communities through accessible educational information.',
    discover: 'Discover our department',
    latest: 'Latest announcements',
    trust: '<strong>Education for every learner</strong><br />Serving our communities with purpose.',
    commitment: 'Our commitment',
    visualTitle: 'Learning today.<br /><span>Leading tomorrow.</span>',
    floating: 'Education<br />first',
    scroll: 'Scroll to explore',
    quick1small: 'Stay informed', quick1: 'News & announcements',
    quick2small: 'What we do', quick2: 'Education programs',
    quick3small: 'Useful information', quick3: 'Resources & documents',
    aboutKicker: 'About the department', aboutTitle: 'Creating opportunities <br /><span>through education.</span>',
    aboutLead: 'The Halaba Zone Education Department works to support quality, inclusive and accessible education for communities across the zone.',
    aboutText: 'Official department information, leadership details, programs and achievements will be added after they are provided and approved by the department.',
    learn: 'Learn more about us',
    values: [['Quality','Supporting continuous improvement in teaching and learning.'],['Inclusion','Promoting educational opportunity for every learner.'],['Innovation','Encouraging new ideas and better educational practices.'],['Community','Working together with schools, families and communities.']],
    programsKicker: 'What we do', programsTitle: 'Our education <span>priorities.</span>', programsIntro: 'These are proposed content areas for the website. Official program information will replace the placeholders.',
    programNames: ['School Education','Teacher Development','Student Programs','Community Engagement'],
    programTexts: ['Supporting effective school education and better learning environments across the zone.','Professional learning, training and capacity-building initiatives.','Programs designed to support student growth, participation and achievement.','Building strong partnerships between education and local communities.'],
    explore: 'Explore',
    statsKicker: 'Education at a glance', statsTitle: 'Our impact,<br /><em>measured.</em>', stats: ['Schools & institutions','Teachers','Learners'], pending: 'Official data pending',
    newsKicker: 'Stay informed', newsTitle: 'Latest <span>news.</span>', viewNews: 'View all news', featured: 'Featured', announcement: 'Announcement · Coming soon', newsTitle1: 'Official department announcements will appear here.', newsText1: 'This area will be populated with verified news and notices from the Education Department.', news2small: 'News · Coming soon', newsTitle2: 'Education activities and community updates.', newsText2: 'Official updates will be published once content is supplied by the department.', notice: 'Notice · Coming soon', newsTitle3: 'Important educational information and notices.', newsText3: 'A dedicated space for time-sensitive information and public notices.', read: 'Read more →',
    resourcesKicker: 'Resources', resourcesTitle: 'Information when <span>you need it.</span>', resourcesText: 'Official documents, guidelines, reports and educational resources can be made available here.', request: 'Request information', resourceNames: ['Guidelines & regulations','Reports & publications','Forms & applications','Useful education links'], resourceSmall: ['Official documents · Coming soon','Official documents · Coming soon','Official documents · Coming soon','Official links · Coming soon'],
    galleryKicker: 'Our community', galleryTitle: 'Moments from <span>education.</span>', galleryText: 'Official photographs of schools, events and department activities will be added here.', galleryNames: ['Learning','Community','Achievement','Education'],
    contactKicker: 'Get in touch', contactTitle: 'Let\'s connect for a <em>better future.</em>', contactText: 'Official address, telephone numbers, email and other contact details will be added after confirmation by the department.', office: 'Office', email: 'Email', phone: 'Telephone', send: 'Send a message', formNote: 'We will add the official contact workflow later.', name: 'Name', emailLabel: 'Email', message: 'Message', sendBtn: 'Send message',
    directorKicker: 'Leadership', directorTitle: 'Message from the <span>Director.</span>', directorLead: 'Welcome to the official website of the Halaba Zone Education Department.', directorP1: 'Our commitment is to strengthen the quality of education, support teachers and educational institutions, and create better learning opportunities for every student in our zone.', directorP2: 'We believe that quality education is the foundation of sustainable development and a brighter future for our communities.', directorRole: 'Head of Halaba Zone Education Department', directorNote: 'Official name and message will be updated after confirmation by the department.'
  },
  am: {
    nav: ['መነሻ', 'ስለ መምሪያው', 'መርሃ ግብሮች', 'ዜና', 'መረጃዎች', 'ጋለሪ', 'ያግኙን'],
    eyebrow: 'የማዕከላዊ ኢትዮጵያ ክልል',
    heroTitle: 'የተሻለ የወደፊት ሕይወትን በ<em>ጥራት ባለው ትምህርት</em> እንገነባለን።',
    heroText: 'እንኳን ወደ ሀላባ ዞን ትምህርት መምሪያ ዲጂታል መድረክ በደህና መጡ። ተማሪዎችን፣ መምህራንን፣ ትምህርት ቤቶችንና ማህበረሰቦችን በተደራሽ የትምህርት መረጃ እናገናኛለን።',
    discover: 'ስለ መምሪያው ይወቁ', latest: 'የቅርብ ጊዜ ማስታወቂያዎች', trust: '<strong>ትምህርት ለእያንዳንዱ ተማሪ</strong><br />ማህበረሰባችንን በቁርጠኝነት እናገለግላለን።', commitment: 'የእኛ ቁርጠኝነት', visualTitle: 'ዛሬ እንማራለን።<br /><span>ነገን እንመራለን።</span>', floating: 'ትምህርት<br />በቅድሚያ', scroll: 'ለማሰስ ይሸብልሉ',
    quick1small: 'መረጃ ያግኙ', quick1: 'ዜና እና ማስታወቂያዎች', quick2small: 'ምን እንሰራለን', quick2: 'የትምህርት መርሃ ግብሮች', quick3small: 'ጠቃሚ መረጃ', quick3: 'መረጃዎች እና ሰነዶች',
    aboutKicker: 'ስለ መምሪያው', aboutTitle: 'እድሎችን <br /><span>በትምህርት እንፈጥራለን።</span>', aboutLead: 'የሀላባ ዞን ትምህርት መምሪያ ለዞኑ ማህበረሰቦች ጥራት ያለው፣ አካታችና ተደራሽ ትምህርትን ለማጠናከር ይሰራል።', aboutText: 'ይፋዊ የመምሪያው መረጃ፣ የአመራር ዝርዝሮች፣ መርሃ ግብሮችና ስኬቶች ከመምሪያው ከተሰጡና ከተረጋገጡ በኋላ ይጨመራሉ።', learn: 'ስለ እኛ ተጨማሪ ይወቁ',
    values: [['ጥራት','በማስተማርና በመማር ሂደት ቀጣይነት ያለው መሻሻልን እንደግፋለን።'],['አካታችነት','ለእያንዳንዱ ተማሪ የትምህርት እድልን እናበረታታለን።'],['ፈጠራ','አዳዲስ ሀሳቦችንና የተሻሉ የትምህርት ልምዶችን እናበረታታለን።'],['ማህበረሰብ','ከትምህርት ቤቶች፣ ቤተሰቦችና ማህበረሰቦች ጋር በመተባበር እንሰራለን።']],
    programsKicker: 'ምን እንሰራለን', programsTitle: 'የትምህርት <span>ቅድሚያዎች።</span>', programsIntro: 'እነዚህ ለድረ-ገጹ የቀረቡ የይዘት ክፍሎች ናቸው። ይፋዊ የመርሃ ግብር መረጃ ከተረጋገጠ በኋላ ይተካል።', programNames: ['የትምህርት ቤት ትምህርት','የመምህራን ልማት','የተማሪዎች መርሃ ግብሮች','የማህበረሰብ ተሳትፎ'], programTexts: ['በዞኑ ውስጥ ውጤታማ የትምህርት ቤት ትምህርትንና የተሻለ የመማሪያ አካባቢን መደገፍ።','የሙያ ስልጠና፣ የአቅም ግንባታና የቀጣይ ሙያዊ ትምህርት ዕድሎች።','የተማሪዎችን እድገት፣ ተሳትፎና ውጤት ለመደገፍ የሚዘጋጁ መርሃ ግብሮች።','በትምህርትና በአካባቢው ማህበረሰብ መካከል ጠንካራ ትብብር መፍጠር።'], explore: 'ይመልከቱ',
    statsKicker: 'ትምህርት በአጭሩ', statsTitle: 'የእኛ ተፅዕኖ፣<br /><em>በመለካት።</em>', stats: ['ትምህርት ቤቶች እና ተቋማት','መምህራን','ተማሪዎች'], pending: 'ይፋዊ መረጃ በመጠባበቅ ላይ',
    newsKicker: 'መረጃ ያግኙ', newsTitle: 'የቅርብ ጊዜ <span>ዜና።</span>', viewNews: 'ሁሉንም ዜና ይመልከቱ', featured: 'የተለየ', announcement: 'ማስታወቂያ · በቅርቡ', newsTitle1: 'ይፋዊ የመምሪያው ማስታወቂያዎች እዚህ ይታያሉ።', newsText1: 'ይህ ክፍል ከትምህርት መምሪያው በተሰጡ የተረጋገጡ ዜናዎችና ማስታወቂያዎች ይሞላል።', news2small: 'ዜና · በቅርቡ', newsTitle2: 'የትምህርት ተግባራትና የማህበረሰብ ዝመናዎች።', newsText2: 'ይፋዊ ዝመናዎች ከመምሪያው ይዘት ከተሰጠ በኋላ ይታተማሉ።', notice: 'ማስታወቂያ · በቅርቡ', newsTitle3: 'አስፈላጊ የትምህርት መረጃና ማስታወቂያዎች።', newsText3: 'ጊዜ አስቸኳይ ለሆኑ መረጃዎችና ለህዝብ ማስታወቂያዎች የተዘጋጀ ቦታ።', read: 'ተጨማሪ ያንብቡ →',
    resourcesKicker: 'መረጃዎች', resourcesTitle: 'መረጃ በሚያስፈልግዎ <span>ጊዜ።</span>', resourcesText: 'ይፋዊ ሰነዶች፣ መመሪያዎች፣ ሪፖርቶችና የትምህርት መረጃዎች እዚህ ሊቀርቡ ይችላሉ።', request: 'መረጃ ይጠይቁ', resourceNames: ['መመሪያዎችና ደንቦች','ሪፖርቶችና ህትመቶች','ቅጾችና ማመልከቻዎች','ጠቃሚ የትምህርት አገናኞች'], resourceSmall: ['ይፋዊ ሰነዶች · በቅርቡ','ይፋዊ ሰነዶች · በቅርቡ','ይፋዊ ሰነዶች · በቅርቡ','ይፋዊ አገናኞች · በቅርቡ'],
    galleryKicker: 'ማህበረሰባችን', galleryTitle: 'ከ< span>ትምህርት</span> የተወሰዱ ቅጽበቶች።'.replace('< span>','<span>'), galleryText: 'ይፋዊ የትምህርት ቤቶች፣ የዝግጅቶችና የመምሪያው ተግባራት ፎቶዎች እዚህ ይጨመራሉ።', galleryNames: ['መማር','ማህበረሰብ','ስኬት','ትምህርት'],
    contactKicker: 'ያግኙን', contactTitle: 'ለተሻለ <em>የወደፊት ሕይወት</em> እንገናኝ።', contactText: 'ይፋዊ አድራሻ፣ ስልክ ቁጥሮች፣ ኢሜይልና ሌሎች የመገኛ መረጃዎች ከመምሪያው ከተረጋገጡ በኋላ ይጨመራሉ።', office: 'ቢሮ', email: 'ኢሜይል', phone: 'ስልክ', send: 'መልዕክት ይላኩ', formNote: 'የመገኛ ቅጹን ከይፋዊ ኢሜይል ጋር በኋላ እናገናኛለን።', name: 'ስም', emailLabel: 'ኢሜይል', message: 'መልዕክት', sendBtn: 'መልዕክት ይላኩ',
    directorKicker: 'አመራር', directorTitle: 'የዳይሬክተሩ <span>መልዕክት።</span>', directorLead: 'እንኳን ወደ ሀላባ ዞን ትምህርት መምሪያ ይፋዊ ድረ-ገጽ በደህና መጡ።', directorP1: 'በዞናችን ውስጥ የትምህርትን ጥራት ለማጠናከር፣ መምህራንንና የትምህርት ተቋማትን ለመደገፍ እና ለእያንዳንዱ ተማሪ የተሻለ የመማር እድል ለመፍጠር ቁርጠኞች ነን።', directorP2: 'ጥራት ያለው ትምህርት ለዘላቂ ልማትና ለተሻለ የወደፊት ሕይወት መሰረት እንደሆነ እናምናለን።', directorRole: 'የሀላባ ዞን ትምህርት መምሪያ ኃላፊ', directorNote: 'ይፋዊ ስምና መልዕክት ከመምሪያው ማረጋገጫ በኋላ ይዘመናል።'
  }
};

function addLanguageSwitcher() {
  if (!nav || document.querySelector('.language-switcher')) return;
  const wrap = document.createElement('div');
  wrap.className = 'language-switcher';
  wrap.innerHTML = '<button type="button" data-lang="en" class="active">EN</button><span>/</span><button type="button" data-lang="am">አማ</button>';
  nav.appendChild(wrap);
  wrap.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
}

function setText(selector, value, html = false) {
  const el = document.querySelector(selector);
  if (el) html ? el.innerHTML = value : el.textContent = value;
}

function setLanguage(lang) {
  const t = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.body.classList.toggle('amharic', lang === 'am');
  localStorage.setItem('halaba-language', lang);

  document.querySelectorAll('.language-switcher button').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  document.querySelectorAll('.main-nav > a').forEach((link, i) => { if (t.nav[i]) link.textContent = t.nav[i]; });

  setText('.eyebrow', t.eyebrow);
  setText('.hero-copy h1', t.heroTitle, true); setText('.hero-copy>p', t.heroText);
  setText('.hero-actions .btn-primary', t.discover + ' →'); setText('.hero-actions .btn-ghost', t.latest);
  setText('.hero-trust p', t.trust, true); setText('.floating-label', t.commitment); setText('.visual-content h2', t.visualTitle, true); setText('.floating-stat span', t.floating, true); setText('.scroll-hint', t.scroll);
  setText('.quick-card:nth-child(1) small', t.quick1small); setText('.quick-card:nth-child(1) strong', t.quick1); setText('.quick-card:nth-child(2) small', t.quick2small); setText('.quick-card:nth-child(2) strong', t.quick2); setText('.quick-card:nth-child(3) small', t.quick3small); setText('.quick-card:nth-child(3) strong', t.quick3);
  setText('.about-section .section-kicker', t.aboutKicker); setText('.about-section .section-heading h2', t.aboutTitle, true); setText('.about-text .lead', t.aboutLead); setText('.about-text p:not(.lead)', t.aboutText); setText('.about-text .text-link', t.learn + ' →');
  document.querySelectorAll('.value-card').forEach((card, i) => { if (t.values[i]) { setText(`.value-card:nth-child(${i+1}) h3`, t.values[i][0]); setText(`.value-card:nth-child(${i+1}) p`, t.values[i][1]); } });
  setText('.programs-section .section-kicker', t.programsKicker); setText('.programs-section .section-heading h2', t.programsTitle, true); setText('.programs-section .section-heading p', t.programsIntro);
  document.querySelectorAll('.program-card').forEach((card, i) => { if (t.programNames[i]) { setText(`.program-card:nth-child(${i+1}) h3`, t.programNames[i]); setText(`.program-card:nth-child(${i+1}) p`, t.programTexts[i]); setText(`.program-card:nth-child(${i+1}) a`, t.explore + ' →'); } });
  setText('.stats-intro .section-kicker', t.statsKicker); setText('.stats-intro h2', t.statsTitle, true); document.querySelectorAll('.stat').forEach((el,i)=>{if(t.stats[i]){setText(`.stat:nth-child(${i+2}) span`, t.stats[i] + '<br /><small>'+t.pending+'</small>', true);}});
  setText('.news-section .section-kicker', t.newsKicker); setText('.news-section .section-heading h2', t.newsTitle, true); setText('.row-heading .text-link', t.viewNews + ' →'); setText('.news-card.large .news-image span', t.featured); setText('.news-card.large .news-body small', t.announcement); setText('.news-card.large h3', t.newsTitle1); setText('.news-card.large p', t.newsText1); setText('.news-card.large a', t.read); setText('.news-card:nth-child(2) small', t.news2small); setText('.news-card:nth-child(2) h3', t.newsTitle2); setText('.news-card:nth-child(2) p', t.newsText2); setText('.news-card:nth-child(2) a', t.read); setText('.news-card:nth-child(3) small', t.notice); setText('.news-card:nth-child(3) h3', t.newsTitle3); setText('.news-card:nth-child(3) p', t.newsText3); setText('.news-card:nth-child(3) a', t.read);
  setText('.resources-section .section-kicker', t.resourcesKicker); setText('.resource-intro h2', t.resourcesTitle, true); setText('.resource-intro>p', t.resourcesText); setText('.resource-intro .btn', t.request + ' →'); document.querySelectorAll('.resource-item').forEach((el,i)=>{setText(`.resource-item:nth-child(${i+1}) strong`,t.resourceNames[i]);setText(`.resource-item:nth-child(${i+1}) small`,t.resourceSmall[i]);});
  setText('.gallery-section .section-kicker', t.galleryKicker); setText('.gallery-section .section-heading h2', t.galleryTitle, true); setText('.gallery-section .section-heading p', t.galleryText); document.querySelectorAll('.gallery-item strong').forEach((el,i)=>{if(t.galleryNames[i])el.textContent=t.galleryNames[i];});
  setText('.contact-copy .section-kicker', t.contactKicker); setText('.contact-copy h2', t.contactTitle, true); setText('.contact-copy>p', t.contactText); setText('.contact-details>div:nth-child(1) strong', t.office); setText('.contact-details>div:nth-child(2) strong', t.email); setText('.contact-details>div:nth-child(3) strong', t.phone); setText('.form-header span', t.send); setText('.form-header small', t.formNote); setText('label:nth-of-type(1)', t.name + '<input type="text" name="name" placeholder="" required />', true); setText('label:nth-of-type(2)', t.emailLabel + '<input type="email" name="email" placeholder="" required />', true); setText('label:nth-of-type(3)', t.message + '<textarea name="message" rows="5" placeholder="" required></textarea>', true); setText('#contactForm .btn', t.sendBtn + ' →');
  setText('#director .section-kicker', t.directorKicker); setText('#director h2', t.directorTitle, true); setText('#director .director-lead', t.directorLead); setText('#director .director-content p:nth-of-type(2)', t.directorP1); setText('#director .director-content p:nth-of-type(3)', t.directorP2); setText('#director .director-info span', t.directorRole); setText('#director .content-note', t.directorNote); document.querySelector('#director .director-photo')?.setAttribute('alt', lang === 'am' ? 'የሀላባ ዞን ትምህርት መምሪያ ዳይሬክተር' : 'Director of Halaba Zone Education Department');
}

addLanguageSwitcher();
setLanguage(localStorage.getItem('halaba-language') || 'en');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.main-nav a')];
const sectionObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }); }, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => sectionObserver.observe(section));

document.querySelectorAll('[data-count]').forEach(counter => {
  const target = Number(counter.dataset.count);
  const countObserver = new IntersectionObserver(entries => { if (!entries[0].isIntersecting) return; let current = 0; const step = Math.max(1, Math.ceil(target / 40)); const timer = setInterval(() => { current += step; counter.textContent = Math.min(current, target).toLocaleString(); if (current >= target) clearInterval(timer); }, 25); countObserver.disconnect(); }, { threshold: .7 });
  countObserver.observe(counter);
});

document.querySelector('#contactForm')?.addEventListener('submit', event => { event.preventDefault(); const note = document.querySelector('#formNote'); note.textContent = 'Thank you. The contact form is currently a demonstration and will be connected to the official department email later.'; event.target.reset(); });

document.querySelector('#year').textContent = new Date().getFullYear();