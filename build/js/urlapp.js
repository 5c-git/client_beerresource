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
        // скриншот
        screenshot: '',
        // POST
        // phone: string

        // локальный успешный
        urlLocal:
          'https://run.mocky.io/v3/f655070d-5fa0-4543-a222-c8f5799b1dec',
        // локальный неуспешный
        // urlLocal:
        // "https://run.mocky.io/v3/1d0492b9-1ac2-47bf-96f3-37fe70592c5d",
        // удаленный
        urlRemote: '/local/ajax/regauth.php',
      },
      sendCode: {
        // скриншот
        screenshot: '',
        // POST
        // phone: string
        // sms: string

        // локальный успешный
        urlLocal:
          'https://run.mocky.io/v3/f655070d-5fa0-4543-a222-c8f5799b1dec',
        // локальный регистрация
        // urlLocal:
        //   "https://run.mocky.io/v3/36303be6-b63c-4c76-adf0-a6b897b6950f",
        // локальный неуспешный
        urlLocal:
          'https://run.mocky.io/v3/1d0492b9-1ac2-47bf-96f3-37fe70592c5d',
        // удаленный
        urlRemote: '/local/ajax/regauth.php',
      },
      sendRegistration: {
        // скриншот
        screenshot: '',
        // POST

        // локальный успешный
        // urlLocal:
        //   "https://run.mocky.io/v3/f655070d-5fa0-4543-a222-c8f5799b1dec",
        // локальный неуспешный
        // urlLocal:
        //   "https://run.mocky.io/v3/1d0492b9-1ac2-47bf-96f3-37fe70592c5d",
        urlLocal:
          'https://run.mocky.io/v3/1acf2538-a4c5-4d25-9b34-9a7a11f7d8c7',
        // удаленный
        urlRemote: '/local/ajax/regauth.php',
      },
    },
  },
  addresses: {
    // запросы
    requests: {
      getAddresses: {
        // скриншот
        screenshot: '',
        // GET

        // локальный
        // urlLocal:
        //   "https://run.mocky.io/v3/70f36149-5441-4ec0-8944-40156f86e6e3",
        // локальный пустой
        urlLocal:
          'https://run.mocky.io/v3/7c908308-2828-47ab-b14b-31f2d0048c21',
        // удаленный
        urlRemote: '/local/ajax/delivery_addresses.php',
      },
      updateAddresses: {
        // скриншот
        screenshot: '',
        // POST

        // локальный
        urlLocal:
          'https://run.mocky.io/v3/fe1d210b-8ba5-4cf2-8b0a-1277b6b44ce0',
        // удаленный
        urlRemote: '/local/ajax/delivery_addresses.php',
      },
    },
  },
  organizations: {
    // запросы
    requests: {
      getOrganizations: {
        // скриншот
        screenshot: '',
        // GET

        // локальный пустой
        urlLocal:
          'https://run.mocky.io/v3/baaf9b39-3faa-471e-a4a3-ec82003d602f',
        // локальный полный (старый)
        // urlLocal:
        //   "https://run.mocky.io/v3/590209b9-3b3a-45c2-b816-cd6d66ccb123",
        // локальный полный (новый)
        // urlLocal:
        //   "https://run.mocky.io/v3/a635f2ad-0f36-43ce-9469-2724a2257b2a",
        // удаленный
        urlRemote: '/local/ajax/organizations.php',
      },
      updateOrganizations: {
        // скриншот
        screenshot: '',
        // POST

        // локальный
        urlLocal:
          'https://run.mocky.io/v3/590209b9-3b3a-45c2-b816-cd6d66ccb123',
        // удаленный
        urlRemote: '/local/ajax/organizations.php',
      },
      deleteOrganizations: {
        // скриншот
        screenshot: '',
        // POST

        // локальный
        urlLocal:
          'https://run.mocky.io/v3/590209b9-3b3a-45c2-b816-cd6d66ccb123',
        // удаленный
        urlRemote: '/local/ajax/organizations.php',
      },
    },
  },
  profile: {
    // запросы
    requests: {
      getProfile: {
        // скриншот
        screenshot: '',
        // GET

        // локальный успешный
        urlLocal:
          'https://run.mocky.io/v3/a1b4586f-1a95-4b2a-b179-ab6fc2217eb6',
        // локальный неуспешный
        // urlLocal:
        //   "https://run.mocky.io/v3/1d0492b9-1ac2-47bf-96f3-37fe70592c5d",
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
