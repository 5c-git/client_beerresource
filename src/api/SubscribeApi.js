import axios from 'axios';

const SubscribeApi = axios.create({
  baseURL: '/local/ajax',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// eslint-disable-next-line import/prefer-default-export
export const sendSubscribe = (values, reset) => {
  window.Corners5ProjectLayout.addLoading('#SubscribeProvider');
  SubscribeApi
    .post('/subscribe.php', values)
    .then((response) => {
      if (response.status === 200) {
        window.Corners5ProjectLayout.removeLoading();
        window.Corners5ProjectLayout.summonAlert('#alert--subscribe');
        reset();
      }
    })
    .catch(() => {
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert('#alert--subscribe');
    });
};
