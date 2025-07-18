// Optionales JavaScript für interaktive Animationen
document.addEventListener('DOMContentLoaded', () => {
    // Scroll-to-Section Animation
    const btnMain = document.querySelector('.btn-main');
    btnMain.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#services').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});
