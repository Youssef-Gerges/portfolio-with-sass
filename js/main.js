const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('open');
    menuNav.classList.toggle('open');
    nav.classList.toggle('open');
    navItems.forEach(item => {
        item.classList.toggle('open');
    })
}