import { delay, http, HttpResponse } from 'msw';
import { ENV } from '../../env';

import getAddresses from '../data/getAddresses.json';

export const addressesHandlers = [
  // Список адресов доставки (fetchAddresses → setAddresses(response.data))
  http.get(
    `${window.routes5.addresses.requests.getAddresses[`url${ENV}`]}`,
    async ({ request }) => {
      console.log('[MSW] handled getAddresses:', request.url);
      await delay(500);
      return HttpResponse.json(getAddresses);
    },
  ),
  // Сохранение адресов (sendUpdatedAddresses → setAddresses(response.data), затем reload).
  // Мок статичный — возвращаем тот же список; правки не персистятся (норма для моков).
  http.post(
    `${window.routes5.addresses.requests.updateAddresses[`url${ENV}`]}`,
    async ({ request }) => {
      console.log('[MSW] handled updateAddresses:', request.url);
      await delay(500);
      return HttpResponse.json(getAddresses);
    },
  ),
];
