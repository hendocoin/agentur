// Hier kommt der JavaScript-Code für interaktive Elemente rein.
const button = document.querySelector('.cta-button');
button.addEventListener('mouseenter', () => {
  button.style.transform = 'scale(1.1)';
});
button.addEventListener('mouseleave', () => {
  button.style.transform = 'scale(1)';
});
