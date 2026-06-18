import { delay, http, HttpResponse } from 'msw';
import { ENV } from '../../env';

import sendPhone from '../data/sendPhone.json';
import sendCode from '../data/sendCode.json';
import sendRegistration from '../data/sendRegistration.json';

// Логин/регистрация (LoginApi) через routes5, на бэке всё бьёт в regauth.php.
export const loginHandlers = [
  // Ввод телефона. sendPhone читает только data.status === 'success'.
  http.post(
    `${window.routes5.login.requests.sendPhone[`url${ENV}`]}`,
    async ({ request }) => {
      console.log('[MSW] handled sendPhone:', request.url);
      await delay(500);
      return HttpResponse.json(sendPhone);
    },
  ),
  // Ввод смс-кода. result.openreg === 1 → LoginProvider открывает форму регистрации
  // (новый юзер); иначе reload (существующий вошёл).
  http.post(
    `${window.routes5.login.requests.sendCode[`url${ENV}`]}`,
    async ({ request }) => {
      console.log('[MSW] handled sendCode:', request.url);
      await delay(500);
      return HttpResponse.json(sendCode);
    },
  ),
  // Регистрация нового юзера (тело {phone, fio, email}). success → LoginProvider
  // показывает алерт подтверждения почты (читает data.email).
  http.post(
    `${window.routes5.login.requests.sendRegistration[`url${ENV}`]}`,
    async ({ request }) => {
      console.log('[MSW] handled sendRegistration:', request.url);
      await delay(500);
      return HttpResponse.json(sendRegistration);
    },
  ),
];
