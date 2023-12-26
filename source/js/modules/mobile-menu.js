//mobile menu
let navToggle = document.querySelector('.main-nav__toggle');
let navList = document.querySelector('.site-list');

navToggle.addEventListener('click', function () {
  navList.classList.toggle('site-list--closed');
  navToggle.classList.toggle('main-nav__toggle--closed');
});
