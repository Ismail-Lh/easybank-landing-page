const body = document.querySelector('.body');
const header = document.querySelector('.header');
const menuIcon = document.querySelector('.header__icon');
const hamburgerIcon = document.querySelector('#hamburger-icon');
const closeIcon = document.querySelector('#close-icon');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('#mobile-menu');

function toggleMenuIcon (icon, display = 'inline-block') {
   icon.style.display = display;
}

function showItem (item, showClass, hideClass, display = 'block') {
   item.classList.add(showClass);
   item.classList.remove(hideClass);
   item.style.display = display;

   toggleMenuIcon(closeIcon);
   toggleMenuIcon(hamburgerIcon, 'none');

   body.classList.add('noscroll');
}

function hideItem (item, showClass, hideClass, display = 'none') {
   item.classList.remove(showClass);
   item.classList.add(hideClass);
   item.style.display = display;

   toggleMenuIcon(hamburgerIcon);
   toggleMenuIcon(closeIcon, 'none');

   body.classList.remove('noscroll');
}

function toggleMenu (e) {
   const iconClass = e.target.className;

   if (iconClass === 'header__icon-hamburger') {
      showItem(overlay, 'animate__fadeInDown', 'animate__fadeOutUp');
      showItem(mobileMenu, 'animate__backInUp', 'animate__backOutUp');

   } else if (iconClass === 'header__icon-close') {
      hideItem(overlay, 'animate__fadeInDown', 'animate__fadeOutUp');
      hideItem(mobileMenu, 'animate__backInUp', 'animate__backOutUp');
   }
}

menuIcon.addEventListener('click', toggleMenu);

overlay.addEventListener('click', () => {
   hideItem(overlay, 'animate__fadeInDown', 'animate__fadeOutUp');
   hideItem(mobileMenu, 'animate__backInUp', 'animate__backOutUp');
});