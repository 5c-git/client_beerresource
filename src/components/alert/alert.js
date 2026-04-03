import './alert.scss';

// Логика для отрисовки инф.сообщений
const body = document.querySelector('.alert-wrapper');

const removeAllAlert = () => {
  const currentAlert = body.querySelectorAll('.alert');
  currentAlert.forEach((el) => {
    el.remove();
  });
};

const removeAlert = (template) => {
  const templateContent = document.querySelector(`${template}`);

  templateContent.remove();
};

const summonAlert = (template) => {
  const alertName = template.slice(1);
  const templateContent = document.querySelector(`#${alertName}`).content.cloneNode(true);
  const alert = templateContent.querySelector(`.${alertName}`);
  const close = alert.querySelector('.alert__close');

  const hideAlert = () => {
    alert.classList.add('alert--back-bounce');
  };

  const closeAlert = () => {
    alert.remove();
  };

  if (close) {
    close.addEventListener('click', () => {
      closeAlert();
    });
  }

  removeAllAlert(); // Перед тем как показать новое сообщение, закрываем последнее.
  body.append(templateContent);
  alert.classList.add('alert--bounce');

  let h;
  let c;
  const hideAlertTimeout = setTimeout(() => {
    hideAlert();
  }, 10000);
  const closeAlertTimeout = setTimeout(() => {
    closeAlert();
  }, 12500);

  alert.addEventListener('mouseleave', () => {
    h = setTimeout(() => {
      hideAlert();
    }, 3000);
    c = setTimeout(() => {
      closeAlert();
    }, 5500);
  });

  alert.addEventListener('mouseenter', () => {
    clearTimeout(hideAlertTimeout);
    clearTimeout(closeAlertTimeout);
    clearTimeout(h);
    clearTimeout(c);
    alert.classList.remove('alert--back-bounce');
  });
};

export { summonAlert, removeAlert };
