import { delay, http, HttpResponse } from 'msw';
import { ENV } from '../../env';

import getAddresses from '../data/getAddresses.json';

// Повторяет сборку строки адреса на бэке (local/ajax/delivery_addresses.php).
const buildAddress = (params) =>
  [
    params.city && `Российская Федерация, г ${params.city}`,
    params.street,
    params.house && `д ${params.house}`,
    params.block && `${params.blockType || 'к'} ${params.block}`,
    params.flat && `кв ${params.flat}`,
    params.entrance && `подъезд ${params.entrance}`,
    params.flatNumber && `домофон ${params.flatNumber}`,
    params.floor && `этаж ${params.floor}`,
  ]
    .filter(Boolean)
    .join(', ');

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
  // Бэк на POST отдаёт ПЕРЕСОБРАННЫЙ список — фронт берёт из него новый адрес (макс. ID).
  // Повторяем это: добавление одного адреса (объект) → дописываем его в «Личные адреса»
  // со свежим ID. Между запросами не персистим (норма для моков) — при перезагрузке
  // GET снова отдаст статичный getAddresses.json.
  http.post(
    `${window.routes5.addresses.requests.updateAddresses[`url${ENV}`]}`,
    async ({ request }) => {
      console.log('[MSW] handled updateAddresses:', request.url);
      await delay(500);

      const params = await request.json().catch(() => null);

      // Удаление шлёт массив групп — эхом отдаём как есть (правки не персистятся).
      if (!params || Array.isArray(params)) {
        return HttpResponse.json(getAddresses);
      }

      const groups = structuredClone(getAddresses);
      const personal =
        groups.find((group) => group.name === 'Личные адреса') ?? groups[0];

      const maxId = groups
        .flatMap((group) => Object.keys(group.addresses ?? {}))
        .reduce((max, id) => Math.max(max, Number(id)), 0);

      personal.addresses[maxId + 1] = buildAddress(params);

      return HttpResponse.json(groups);
    },
  ),
];
