import { delay, http, HttpResponse } from 'msw';
import { ENV } from '../../env';

import getProfile from '../data/getProfile.json';
import updateProfile from '../data/updateProfile.json';

// Обновление личных данных (updateName/updateEmail/updatePhone/sendSMS в api.js)
// идёт через axios-instance baseURL '/local/ajax/' → реальный путь personal_data.php
// (PUT для имени/почты/телефона, POST для смс). Конвертора url${ENV} тут нет —
// вешаемся прямо на путь. На Remote MSW выключен, идёт реальный бэк.
const updateProfileUrl = '/local/ajax/personal_data.php';

const handleUpdateProfile = async ({ request }) => {
  console.log('[MSW] handled updateProfile:', request.method, request.url);
  await delay(500);
  return HttpResponse.json(updateProfile);
};

export const profileHandlers = [
  http.get(
    `${window.routes5.profile.requests.getProfile[`url${ENV}`]}`,
    async ({ request }) => {
      console.log('[MSW] handled getProfile:', request.url);
      await delay(500);
      return HttpResponse.json(getProfile);
    },
  ),
  http.put(updateProfileUrl, handleUpdateProfile),
  http.post(updateProfileUrl, handleUpdateProfile),
];
