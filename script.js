const menuIcon = document.querySelector('.header__icon');
const hamburgerIcon = document.querySelector('#hamburger-icon');
const closeIcon = document.querySelector('#close-icon');

function toggleMenu (e) {
   const iconClass = e.target.className;
   // console.log(iconClass);

   if (iconClass === 'header__icon-hamburger') {
      closeIcon.style.display = 'inline-block';
      hamburgerIcon.style.display = 'none';
   } else if (iconClass === 'header__icon-close') {
      hamburgerIcon.style.display = 'inline-block';
      closeIcon.style.display = 'none';
   }
}

menuIcon.addEventListener('click', toggleMenu);

