window.addEventListener('scroll', () => {
  let scrollValue = window.scrollY;
  const setaUp = document.querySelector('.container-seta');
  if (window.innerWidth <= 930) {
    setaUp.style.display = 'none';
  } else if (scrollValue >= 105) {
    setaUp.style.display = 'flex';
  }
  else {
    setaUp.style.display = 'none';
  }
});

const menuHamburger = document.getElementById('menu-hamburger');

menuHamburger.addEventListener('click', () => {
  const menuList = document.querySelector('.list-hamburger');
  if (menuList.style.display === 'none') {
    menuList.style.display = 'block';
  } else {
    menuList.style.display = 'none';
  }
})

