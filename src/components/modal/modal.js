import './modal.scss';
import Choices from 'choices.js';

const initCitySelect = (func) => {
  const select = document.querySelector('.modal__select');
  let choicesNolint;
  if (select) {
    choicesNolint = new Choices(select, {
      searchEnabled: true,
      itemSelectText: '',
      shouldSort: false,
      loadingText: 'Loading...',
      noResultsText: 'Ничего не найдено',
      noChoicesText: 'Ничего не выбрано',
      classNames: {
        containerOuter: 'choices modal__choices',
      },
    });

    select.addEventListener('addItem', (event) => {
      func(event);
    });
  }

  return choicesNolint;
};

export default initCitySelect;
