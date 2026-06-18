import { delay, http, HttpResponse } from 'msw';

import subscribe from '../data/subscribe.json';
import successResponse from '../data/successResponse.json';

// Формы-сабмиты бьют напрямую в /local/ajax/*.php (axios.create baseURL '/local/ajax'),
// без routes5 — вешаемся прямо на путь.

// Feedback-формы: все возвращают общий «УспешныйОтвет» (successResponse).
// Потребители читают data.status (цвет алерта) и data.text (innerHTML).
const feedbackPaths = [
  '/local/ajax/feedback.php', // RequestContactsApi (контакты) + RequestSuggestApi (предложить товар)
  '/local/ajax/feedback_partner.php', // RequestCooperationApi (сотрудничество)
  '/local/ajax/feedback_question.php', // RequestProductApi (вопрос о товаре)
  '/local/ajax/feedback_services.php', // RequestServiceApi (услуги)
  '/local/ajax/search_notfound.php', // RequestSearchApi (не нашёл в поиске — простая форма обратной связи)
];

export const formsHandlers = [
  // Подписка на рассылку (FooterSubscribeApi + SubscribeApi → /subscribe.php).
  // Потребители смотрят только status 200.
  http.post('/local/ajax/subscribe.php', async ({ request }) => {
    console.log('[MSW] handled subscribe:', request.url);
    await delay(500);
    return HttpResponse.json(subscribe);
  }),
  // Feedback-формы — один паттерн на все.
  ...feedbackPaths.map((path) =>
    http.post(path, async ({ request }) => {
      console.log('[MSW] handled feedback:', request.url);
      await delay(500);
      return HttpResponse.json(successResponse);
    }),
  ),
  // Сохранение новой организации (organizationsApi.addNewOrganization → add_organization.php).
  // Читает только status 200 && data.status !== 'error' — отдаём общий успех.
  http.post('/local/ajax/add_organization.php', async ({ request }) => {
    console.log('[MSW] handled add_organization:', request.url);
    await delay(500);
    return HttpResponse.json(successResponse);
  }),
];
