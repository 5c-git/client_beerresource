import { delay, http, HttpResponse } from 'msw';
import { ENV } from '../../env';

import getOrganizations from '../data/getOrganizations.json';

// update/delete бьют в один и тот же organizations.php (POST), как и на бэке.
// Мок статичный — всегда возвращаем полный список (правки/удаление не персистятся).
const orgPostHandler = async ({ request }) => {
  console.log('[MSW] handled organizations POST:', request.url);
  await delay(500);
  return HttpResponse.json(getOrganizations);
};

export const organizationsHandlers = [
  // Список организаций (fetchOrganizations → setOrganizations(response.data))
  http.get(
    `${window.routes5.organizations.requests.getOrganizations[`url${ENV}`]}`,
    async ({ request }) => {
      console.log('[MSW] handled getOrganizations:', request.url);
      await delay(500);
      return HttpResponse.json(getOrganizations);
    },
  ),
  // updateOrganizations и deleteOrganizations имеют одинаковый urlLocal → один POST-хендлер.
  http.post(
    `${window.routes5.organizations.requests.updateOrganizations[`url${ENV}`]}`,
    orgPostHandler,
  ),
];
