import './header-dropdown.scss';

const header = document.querySelector('.header');
const dropdownUser = document.querySelector('.header-dropdown__user--profile');

if (dropdownUser) {
  dropdownUser.addEventListener('click', (evt) => {
    evt.preventDefault();
    window.LoginProvider.setOpenPhone(true);
    header.classList.remove('header--dropdown');
  });
}
