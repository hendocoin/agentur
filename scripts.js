// Parallax Effekt für den Hero-Bereich
const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  hero.style.backgroundPosition = `center ${offset * 0.5}px`;
});

// Button Hover-Effekt für die CTA-Buttons
const buttons = document.querySelectorAll('.cta-button');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.1)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});
