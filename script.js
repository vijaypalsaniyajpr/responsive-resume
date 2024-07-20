document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons button');
    const sections = document.querySelectorAll('.main-content section');
    const header = document.querySelector('header');
    const intro = document.querySelector('.intro');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            const isVisible = section.style.display === 'block';
            sections.forEach(section => {
                section.style.display = 'none';
            });
            section.style.display = isVisible ? 'none' : 'block';
        });
    });

    header.addEventListener('click', () => {
        intro.style.display = intro.style.display === 'block' ? 'none' : 'block';
    });
});
