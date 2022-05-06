// Бергур меню

const iconMenu = document.querySelector('.menu__icon');
const navMenu = document.querySelector('.header__navigation');
const body = document.querySelector('body');
const fone = document.querySelector('.fone');
const iconMenuSpan = document.querySelector('.menu__icon-span');

iconMenu.addEventListener("click", function(e) {
  iconMenu.classList.toggle('_active');
  navMenu.classList.toggle('active__menu');
  body.classList.toggle('_bodyNotScroll');
  fone.classList.toggle('fone-dark');
});

function closeMenu() {
  if (iconMenu.classList.contains('_active')) {
    iconMenu.classList.remove('_active');
    navMenu.classList.remove('active__menu');
    body.classList.remove('_bodyNotScroll');
    fone.classList.remove('fone-dark');
  }
};

document.addEventListener("click", function(e) {
  if (e.target.classList.contains('fone')) {
    iconMenu.classList.remove('_active');
    navMenu.classList.remove('active__menu');
    body.classList.remove('_bodyNotScroll');
    fone.classList.remove('fone-dark');
  }
});

const navLinks = document.querySelectorAll('.navigation__link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));