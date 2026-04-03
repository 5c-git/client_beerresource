import './about-nav.scss';

const storagesInfo = document.querySelector('.about-nav');
if (storagesInfo) {
  const toggle = storagesInfo.querySelector('.about-nav__header');

  document.addEventListener('click', (evt) => {
    if (window.innerWidth < 992) {
      if (evt.target === toggle) {
        storagesInfo.classList.toggle('about-nav--active');
      } else {
        storagesInfo.classList.remove('about-nav--active');
      }
    }
  });
}
