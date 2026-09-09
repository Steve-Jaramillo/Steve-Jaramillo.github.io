const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const estaAbierto = navLinks.classList.toggle('activo');
  navToggle.setAttribute('aria-expanded', estaAbierto);
});