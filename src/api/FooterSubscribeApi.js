import axios from 'axios';

const FooterSubscribeApi = axios.create({
  baseURL: '/local/ajax',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// eslint-disable-next-line import/prefer-default-export
export const sendFooterSubscribe = (values, reset) => {
  const buttonSubmit = document.querySelector('.FooterSubscribe__submit');
  buttonSubmit.disabled = true;

  FooterSubscribeApi
    .post('/subscribe.php', values)
    .then((response) => {
      if (response.status === 200) {
        window.Corners5ProjectLayout.summonAlert('#alert--subscribe');
        reset();

        setTimeout(() => {
          buttonSubmit.disabled = false;
        }, 1000);
      }
    })
    .catch(() => {
      window.Corners5ProjectLayout.summonAlert('#alert--error');

      setTimeout(() => {
        buttonSubmit.disabled = false;
      }, 1000);
    });
};
