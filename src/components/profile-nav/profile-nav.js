import './profile-nav.scss';

const profileNav = document.querySelector('.profile-nav');
if (profileNav) {
  const toggle = profileNav.querySelector('.profile-nav__toggle');
  // toggle.addEventListener('click', () => {
  //   profileNav.classList.toggle('profile-nav--active');
  // });

  document.addEventListener('click', (evt) => {
    if (evt.target === toggle) {
      profileNav.classList.toggle('profile-nav--active');
    } else {
      profileNav.classList.remove('profile-nav--active');
    }
  });
}
