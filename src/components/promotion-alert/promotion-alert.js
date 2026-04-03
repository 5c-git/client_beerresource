import './promotion-alert.scss';

// Логика для отрисовки инф.сообщений
const body = document.querySelector('.alert-wrapper');

const removePromotionAlert = (template) => {
  const templateContent = document.querySelector(`${template}`);

  templateContent.remove();
};

const summonPromotionAlert = (template) => {
  const alertName = template.slice(1);
  const templateContent = document.querySelector(`#${alertName}`).content.cloneNode(true);
  const alert = templateContent.querySelector(`.${alertName}`);
  const close = alert.querySelector('.promotion-alert__close');

  const closeAlert = () => {
    alert.remove();
  };

  if (close) {
    close.addEventListener('click', () => {
      closeAlert();
    });
  }

  body.append(templateContent);
  alert.classList.add('promotion-alert--bounce');
};

export { summonPromotionAlert, removePromotionAlert };
