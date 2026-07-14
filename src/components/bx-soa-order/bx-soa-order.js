import './bx-soa-order.scss';
import Choices from 'choices.js';

// Bitrix (editActiveRegionBlock) перерисовывает блок региона на каждый sendRequest и
// на сворачивание/разворачивание, но сам <select> не пересоздаёт — переносит между
// скрытым и активным контейнером. Повторный `new Choices` на таком элементе возвращает
// ЗАГЛУШКУ: конструктор видит data-choice="active", ставит initialised = true и выходит
// до init(), так что у объекта нет containerOuter — и любой setChoices на нём падает
// («Cannot read properties of undefined (reading 'removeLoadingState')»).
// Поэтому отдаём уже живой инстанс: заодно не плодим слушателей addItem.
const initBxSoaOrderSelect = (container, func) => {
  const select = container;

  if (!select) {
    return undefined;
  }

  if (select.choicesInstance) {
    return select.choicesInstance;
  }

  const choicesNolint = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });

  select.addEventListener('addItem', (event) => {
    func(event);
  });

  select.choicesInstance = choicesNolint;

  return choicesNolint;
};

export default initBxSoaOrderSelect;
