import './profile-center.scss';
import Choices from 'choices.js';

const initProfileSelect = (func) => {
  const select = document.querySelector('.profile-center__select');
  let choicesNolint;
  if (select) {
    choicesNolint = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      classNames: {
        containerOuter: 'choices profile-center__choices',
      },
    });

    select.addEventListener('addItem', (event) => {
      func(event);
    });
  }

  return choicesNolint;
};

export default initProfileSelect;
