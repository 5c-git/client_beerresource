import './bx-soa-order.scss';
import Choices from 'choices.js';

const initBxSoaOrderSelect = (container, func) => {
  const select = container;
  let choicesNolint;
  if (select) {
    choicesNolint = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    });

    select.addEventListener('addItem', (event) => {
      func(event);
    });
  }

  return choicesNolint;
};

export default initBxSoaOrderSelect;
