// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navegación entre secciones
const navLinks = document.querySelectorAll('[data-section]');
const sections = document.querySelectorAll('.section');

function showSection(sectionId) {
  sections.forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const targetSection = document.getElementById(sectionId);
  const targetLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);

  if (targetSection) targetSection.classList.add('active');
  if (targetLink) targetLink.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.dataset.section;
    history.pushState(null, '', `#${sectionId}`);
    showSection(sectionId);
  });
});

// Cargar sección desde la URL al iniciar
window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    showSection(hash);
  }
});

// Soporte botones atrás/adelante del navegador
window.addEventListener('popstate', () => {
  const hash = window.location.hash.replace('#', '') || 'inicio';
  showSection(hash);
});
