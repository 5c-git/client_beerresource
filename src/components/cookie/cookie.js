import './cookie.scss';

const setCookie = (name, value) => {
  const updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=/;max-age=31536000;`;
  document.cookie = updatedCookie;
};

const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const showMessage = () => {
  window.Corners5ProjectLayout.summonPopUp('#cookie', false);
  const closeButton = document.querySelector('.cookie__button');

  closeButton.addEventListener('click', () => {
    setCookie('agreeCookie', true);
  });
};

const cookie = () => {
  const result = getCookie('agreeCookie');
  if (result === undefined) {
    showMessage();
  }
};

cookie();
