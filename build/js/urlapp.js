/******/ (() => { // webpackBootstrap
const ROUTES = {
  Media: {
    // URL для медиафайлов(картиники, видео и тп)

    // локальный
    urlLocal: './assets/images/',

    // удаленный
    urlRemote: '/local/templates/beerresource/assets/images/',
  },
  login: {
    // запросы
    requests: {
      sendPhone: {

        // локальный (перехватывает MSW, данные в src/mocks/data/sendPhone.json)
        urlLocal: 'mocks/data/sendPhone.json',

        // удаленный
        urlRemote: '/local/ajax/regauth.php',
      },
      sendCode: {

        // локальный (перехватывает MSW, данные в src/mocks/data/sendCode.json — openreg:1 → регистрация)
        urlLocal: 'mocks/data/sendCode.json',
        // удаленный
        urlRemote: '/local/ajax/regauth.php',
      },
      sendRegistration: {

        // локальный (перехватывает MSW, данные в src/mocks/data/sendRegistration.json)
        urlLocal: 'mocks/data/sendRegistration.json',

        // удаленный
        urlRemote: '/local/ajax/regauth.php',
      },
    },
  },
  addresses: {
    // запросы
    requests: {
      getAddresses: {

        // локальный (перехватывает MSW, данные в src/mocks/data/getAddresses.json)
        urlLocal: 'mocks/data/getAddresses.json',

        // удаленный
        urlRemote: '/local/ajax/delivery_addresses.php',
      },
      updateAddresses: {

        // локальный (перехватывает MSW, см. addresses.handlers.js — возвращает getAddresses.json)
        urlLocal: 'mocks/data/getAddresses.json',

        // удаленный
        urlRemote: '/local/ajax/delivery_addresses.php',
      },
    },
  },
  organizations: {
    // запросы
    requests: {
      getOrganizations: {

        screenshot: '',
        // GET

        // локальный (перехватывает MSW, данные в src/mocks/data/getOrganizations.json)
        urlLocal: 'mocks/data/getOrganizations.json',

        // удаленный
        urlRemote: '/local/ajax/organizations.php',
      },
      updateOrganizations: {

        // локальный (перехватывает MSW, см. organizations.handlers.js — возвращает getOrganizations.json)
        urlLocal: 'mocks/data/getOrganizations.json',

        // удаленный
        urlRemote: '/local/ajax/organizations.php',
      },
      deleteOrganizations: {

        // локальный (тот же organizations.php, что и update — общий POST-хендлер MSW)
        urlLocal: 'mocks/data/getOrganizations.json',

        // удаленный
        urlRemote: '/local/ajax/organizations.php',
      },
    },
  },
  profile: {
    // запросы
    requests: {
      getProfile: {

        // локальный (перехватывает MSW, данные в src/mocks/data/getProfile.json)
        urlLocal: 'mocks/data/getProfile.json',

        // удаленный
        urlRemote: '/local/ajax/personal_data.php',
      },
    },
  },
  ACTIONS: {
    smsAction: () => {
      alert('smsAction is not implemented! (see urlapp.js)');
    },
  },
  LINKS: {
    addOrganization: '/personal/addorganization/',
  },
};

window.routes5 = ROUTES;

/******/ })()
;