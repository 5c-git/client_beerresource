import axios from 'axios';
import {
  addLoading, removeLoading,
} from '../components/loading/loading';
import {
  summonAlert,
} from '../components/alert/alert';
import { createFormData } from '../utils/utils';

const requestProductApi = axios.create({
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
export const sendRequestProduct = (values, reset, requestProductDecorator) => {
  const data = createFormData(values);

  addLoading('#RequestProductProvider');

  return requestProductApi
    .post('/feedback_question.php', data)
    .then((response) => {
      if (response.status === 200) {
        const alert = document.querySelector('#alert--request').content.querySelector('.alert');
        alert.classList.add(setStatus(response.data.status));

        const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
        container.innerHTML = response.data.text;

        removeLoading();
        summonAlert('#alert--request');
        reset();
        requestProductDecorator();
      }
    })
    .catch(() => {
      removeLoading();
      summonAlert('#alert--error');
    });
};
