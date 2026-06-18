import { ENV } from '../env';

/**
 * MSW только при ENV === 'Local' (dev, демо html.5corners, внутр. 192.168…).
 * На Remote (бой) — не подключаем.
 */
const useMsw = ENV === 'Local';

const isProductionBundle = process.env.NODE_ENV === 'production';
const getProductionWorkerUrl = () => new URL('mockServiceWorker.js', window.location.href).href;

console.log('[MSW]', {
  ENV,
  NODE_ENV: process.env.NODE_ENV,
  useMsw,
  staticSwUrl: isProductionBundle ? getProductionWorkerUrl() : null,
});

const startMocking = () => {
  if (!useMsw) {
    console.log('[MSW] пропуск: ENV=Remote — запросы без перехвата моков');
    return Promise.resolve();
  }

  return import(
  /* webpackChunkName: "msw-mocks" */
    './browser'
  )
    .then(({ worker }) => {
      const options = {
        onUnhandledRequest(request) {
          console.warn('[MSW] unhandled request:', request.method, request.url);
        },
      };

      if (isProductionBundle) {
        options.serviceWorker = {
          url: getProductionWorkerUrl(),
        };
      }

      return worker.start(options);
    })
    .then(() => {
      console.log('[MSW] запущен, перехват моков активен');
    })
    .catch((err) => {
      console.error('[MSW] failed to start', err);
    });
};

export const workerStartPromise = startMocking();
