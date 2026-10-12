const copyrightYear = document.getElementById('copyright-year');

if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}

const navigation = document.querySelector('nav');
const menuToggle = navigation?.querySelector('.menu-toggle');

if (navigation && menuToggle) {
    const closeMenu = () => {
        navigation.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
    };

    navigation.classList.add('menu-ready');

    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

        navigation.classList.toggle('menu-open', !isOpen);
        menuToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    navigation.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
            menuToggle.focus();
        }
    });
}