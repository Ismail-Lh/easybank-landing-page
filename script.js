const header = document.querySelector('.header');
const menuIcon = document.querySelector('.header__icon');
const hamburgerIcon = document.querySelector('#hamburger-icon');
const closeIcon = document.querySelector('#close-icon');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('#mobile-menu');

function showOverlay () {
   overlay.classList.add('animate__fadeInDown');
   overlay.classList.remove('animate__fadeOutUp');
   overlay.style.display = 'block';
}

function hideOverlay () {
   overlay.classList.remove('animate__fadeInDown');
   overlay.classList.add('animate__fadeOutUp');
}

function showMobileMenu () {
   mobileMenu.classList.add('animate__backInUp');
   mobileMenu.classList.remove('animate__backOutUp');
   mobileMenu.style.display = 'block';
}

function hideMobileMenu () {
   mobileMenu.classList.remove('animate__backInUp');
   mobileMenu.classList.add('animate__backOutUp');
}

function toggleMenu (e) {
   const iconClass = e.target.className;

   if (iconClass === 'header__icon-hamburger') {
      closeIcon.style.display = 'inline-block';
      hamburgerIcon.style.display = 'none';

      showOverlay();
      showMobileMenu();

   } else if (iconClass === 'header__icon-close') {
      hamburgerIcon.style.display = 'inline-block';
      closeIcon.style.display = 'none';

      hideOverlay();
      hideMobileMenu();
   }
}

menuIcon.addEventListener('click', toggleMenu);

