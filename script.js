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

// Director section is injected after the hero so it can be added without changing the existing page structure.
const heroSection = document.querySelector('.hero');
if (heroSection && !document.querySelector('#director')) {
  heroSection.insertAdjacentHTML('afterend', `
    <section class="director-section" id="director">
      <div class="container">
        <div class="director-card reveal">
          <div class="director-image-wrap">
            <div class="director-placeholder" aria-label="Director photo placeholder">
              <span>Director's<br>Photo</span>
            </div>
          </div>
          <div class="director-content">
            <span class="section-kicker">Leadership</span>
            <h2>Message from the <span>Director.</span></h2>
            <p class="director-lead">Welcome to the official website of the Halaba Zone Education Department.</p>
            <p>Our commitment is to strengthen the quality of education, support teachers and educational institutions, and create better learning opportunities for every student in our zone.</p>
            <p>We believe that quality education is the foundation of sustainable development and a brighter future for our communities.</p>
            <div class="director-info">
              <strong>Director's Name</strong>
              <span>Head of Halaba Zone Education Department</span>
            </div>
            <small class="content-note">Official name, photograph and message will be added after confirmation by the department.</small>
          </div>
        </div>
      </div>
    </section>
  `);
}

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.main-nav a')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => sectionObserver.observe(section));

document.querySelectorAll('[data-count]').forEach(counter => {
  const target = Number(counter.dataset.count);
  const countObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const timer = setInterval(() => {
      current += step;
      counter.textContent = Math.min(current, target).toLocaleString();
      if (current >= target) clearInterval(timer);
    }, 25);
    countObserver.disconnect();
  }, { threshold: .7 });
  countObserver.observe(counter);
});

document.querySelector('#contactForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const note = document.querySelector('#formNote');
  note.textContent = 'Thank you. The contact form is currently a demonstration and will be connected to the official department email later.';
  event.target.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();