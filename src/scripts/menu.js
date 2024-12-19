'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuCloseIcon = document.querySelector('.menu-close');
    const menuOpenIcon = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
        menuCloseIcon.classList.toggle('hidden');
        menuOpenIcon.classList.toggle('hidden');
    });

    const handleResize = () => {
        if (window.innerWidth >= 769) {
            menu.classList.remove('hidden');
            menu.classList.add('flex');
            menuCloseIcon.classList.add('hidden');
            menuOpenIcon.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
});
