import axios from 'axios';

const RequestServiceApi = axios.create({
  baseURL: '/local/ajax',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

const setStatus = (status) => {
  switch (status) {
    case 'success':
      return 'alert--green';

    case 'error':
      return 'alert--red';

    default:
      return '';
  }
};

// eslint-disable-next-line import/prefer-default-export
export const sendRequestService = (values, reset) => {
  window.Corners5ProjectLayout.addLoading('#RequestServiceProvider');
  RequestServiceApi
    .post('/feedback_services.php', values)
    .then((response) => {
      if (response.status === 200) {
        const alert = document.querySelector('#alert--request').content.querySelector('.alert');
        alert.classList.add(setStatus(response.data.status));

        const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
        container.innerHTML = response.data.text;

        window.Corners5ProjectLayout.removeLoading();
        window.Corners5ProjectLayout.summonAlert('#alert--request');
        reset();
      }
    })
    .catch(() => {
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert('#alert--error');
    });
};
