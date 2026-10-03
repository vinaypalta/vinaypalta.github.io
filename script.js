// Keep the footer year up to date.
document.getElementById('year').textContent = new Date().getFullYear();

// Show one section at a time. Hash links support bookmarks and browser Back.
const sections = [...document.querySelectorAll('main > section')];
const navigation = [...document.querySelectorAll('nav a')];

function showSection() {
  const requested = window.location.hash.slice(1) || 'home';
  const active = sections.find(section => section.id === requested) || sections[0];
  sections.forEach(section => { section.hidden = section !== active; });
  navigation.forEach(link => {
    if (link.hash === '#' + active.id) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
  document.title = active.id === 'home'
    ? 'Vinay Palta'
    : active.querySelector('h2').textContent + ' | Vinay Palta';
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', showSection);
showSection();
