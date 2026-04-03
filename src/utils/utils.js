/* eslint-disable */
import utils from "./utils.scss";
import main from "./main.scss";
import fonts from "./fonts.scss";
/* eslint-enable */

// const phoneRegExp = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;
const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;

// Находим ширину скролбара и узнаем на сколько добавлять отступ справа у body.
const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
let checker = false;

// Функция чтобы блочить экран и давать отступ.
const getPaddingOnBody = () => {
  if (!checker) {
    const body = document.querySelector('body');
    const header = document.querySelector('.header__fixed');
    const dropdown = document.querySelector('.header__dropdown');
    const promoFixed = document.querySelector('.promo__fixed');
    const Modal = document.querySelector('.Modal');
    const popUps = document.querySelectorAll('.popUp');
    const alertWrapper = document.querySelector('.alert-wrapper');

    body.style.paddingRight = `${getScrollbarWidth()}px`;

    if (header) {
      header.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (dropdown) {
      dropdown.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (promoFixed) {
      promoFixed.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (Modal) {
      Modal.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (alertWrapper) {
      alertWrapper.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (popUps.length > 0) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = `${getScrollbarWidth()}px`;
      });
    }
    body.classList.add('static');
    checker = true;
  }
};

// Функция чтобы снимать блокировку экрана и убирать отступ.
const getPaddingFromBody = () => {
  if (checker) {
    const body = document.querySelector('body');
    const header = document.querySelector('.header__fixed');
    const dropdown = document.querySelector('.header__dropdown');
    const promoFixed = document.querySelector('.promo__fixed');
    const Modal = document.querySelector('.Modal');
    const popUps = document.querySelectorAll('.popUp');
    const alertWrapper = document.querySelector('.alert-wrapper');

    body.style.paddingRight = '';

    if (header) {
      header.style.paddingRight = '';
    }
    if (dropdown) {
      dropdown.style.paddingRight = '';
    }
    if (promoFixed) {
      promoFixed.style.paddingRight = '';
    }
    if (Modal) {
      Modal.style.paddingRight = '';
    }
    if (alertWrapper) {
      alertWrapper.style.paddingRight = '';
    }
    if (popUps.length > 0) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = '';
      });
    }
    body.classList.remove('static');
    checker = false;
  }
};

const isObject = (object) => {
  const type = typeof object;
  return type === 'function' || type === 'object';
};

const createFormData = (values) => {
  const data = new FormData();

  // eslint-disable-next-line no-restricted-syntax
  for (const key in values) {
    if (isObject(values[key])) {
      values[key].forEach((file, index) => {
        data.append(`${key}-${index}`, file);
      });
    } else {
      data.append(key, values[key]);
    }
  }
  return data;
};

document.addEventListener('click', (evt) => {
  const button = evt.target.closest('.request-login');
  if (!button) return;

  evt.preventDefault();
  window.LoginProvider.setOpenPhone(true);
});

const CONTACTS = {
  phones: [
    {
      name: '+7(812)725-00-88',
      link: '+78127250088',
    }, {
      name: '+7(921)588-60-80',
      link: '+79215886080',
    },
  ],
  mails: [
    {
      name: 'sales@resource.beer',
      link: 'sales@resource.beer',
    },
  ],
  // whatsapps: [
  //   {
  //     name: 'Написать в WhatsApp',
  //     link: 'https://wa.me/message/2T7BTTKPQ34SF1',
  //   },
  // ],
  // telegrams: [
  //   {
  //     name: 'в Telegram',
  //     link: 'https://t.me/+79215886080',
  //   },
  // ],
};

export {
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  phoneRegExp,
  createFormData,
  CONTACTS,
};
