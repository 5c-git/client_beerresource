import './sidebar-nav.scss';

const storagesInfo = document.querySelector('.sidebar-nav');
if (storagesInfo) {
  const toggle = storagesInfo.querySelector('.sidebar-nav__header');

  document.addEventListener('click', (evt) => {
    if (window.innerWidth < 992) {
      if (evt.target === toggle) {
        storagesInfo.classList.toggle('sidebar-nav--active');
      } else {
        storagesInfo.classList.remove('sidebar-nav--active');
      }
    }
  });
}
