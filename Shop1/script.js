const menuActive = document.querySelector('.menu-active');

const headerMenu = document.querySelector('.user-list__item-menu');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

headerMenu.addEventListener('click', toggleMenu);