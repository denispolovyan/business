const burger = document.querySelector('.menu-burger__header');
const menu = document.querySelector('.header__list');
const body = document.querySelector('body');

burger.addEventListener('click', addClassToBurger);
burger.addEventListener('click', openMenu);
burger.addEventListener('click', closeScrollbar);

function addClassToBurger() {
	burger.classList.toggle('open-menu');
}

function openMenu() {
	menu.classList.toggle('open-menu');
}

function closeScrollbar() {
	body.classList.toggle('no-scroll');
}