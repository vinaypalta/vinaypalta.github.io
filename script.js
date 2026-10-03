// Keep the footer year up to date.
document.getElementById('year').textContent = new Date().getFullYear();

// Each hash opens one section; browser Back and direct links work too.
const sections = [...document.querySelectorAll('main > section')];
const navigation = [...document.querySelectorAll('nav a')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let currentSection;
let transitionNumber = 0;

async function showSection() {
  const requested = window.location.hash.slice(1) || 'home';
  const next = sections.find(section => section.id === requested) || sections[0];
  const transition = ++transitionNumber;
  sections.forEach(section => section.getAnimations().forEach(animation => animation.cancel()));

  if (currentSection && currentSection !== next && !reduceMotion.matches) {
    try {
      await currentSection.animate(
        [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-8px)' }],
        { duration: 130, easing: 'ease-in', fill: 'forwards' }
      ).finished;
    } catch { /* A newer navigation cancels the previous transition. */ }
  }
  if (transition !== transitionNumber) return;

  const changed = currentSection !== next;
  sections.forEach(section => {
    section.getAnimations().forEach(animation => animation.cancel());
    section.hidden = section !== next;
  });
  navigation.forEach(link => {
    if (link.hash === '#' + next.id) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.title = next.id === 'home' ? 'Vinay Palta' : next.querySelector('h2').textContent + ' | Vinay Palta';
  window.scrollTo({ top: 0, behavior: 'instant' });

  if (currentSection && changed) {
    const heading = next.querySelector('h1, h2');
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }
  currentSection = next;
  if (changed && !reduceMotion.matches) {
    next.animate(
      [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 380, easing: 'cubic-bezier(.2,.7,.2,1)' }
    );
  }
}

window.addEventListener('hashchange', showSection);
showSection();
