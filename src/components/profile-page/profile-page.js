import './profile-page.scss';

const profilePage = document.querySelector('.profile-page');
if (profilePage) {
  const profileTop = profilePage.querySelector('.profile-page__top');
  const addOrganization = document.querySelector('#add-organization');
  if (addOrganization) {
    profileTop.classList.add('profile-page__top--hidden');
  }
}
