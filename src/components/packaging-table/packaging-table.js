import './packaging-table.scss';
import { getPaddingOnBody, getPaddingFromBody } from '../../utils/utils';

const packaging = document.querySelector('.packaging-table');
if (packaging) {
  const type = packaging.querySelector('.packaging-table__type');
  const typeHead = type.querySelector('.packaging-table__type-input');
  const typeItems = type.querySelectorAll('.packaging-table__type-item');
  const typeCounters = packaging.querySelectorAll('.packaging-table__count-item');
  const overlay = packaging.querySelector('.packaging-table__mobile-overlay');
  const typeClose = packaging.querySelector('.packaging-table__mobile-close');

  // Показывать\скрывать выпадющий список по клику.
  typeHead.addEventListener('click', () => {
    type.classList.add('packaging-table__type--active');
    getPaddingOnBody();
  });
  overlay.addEventListener('click', () => {
    type.classList.remove('packaging-table__type--active');
    getPaddingFromBody();
  });
  typeClose.addEventListener('click', () => {
    type.classList.remove('packaging-table__type--active');
    getPaddingFromBody();
  });

  // Логика действий при выборе нового пункта из списка.
  typeItems.forEach((typeItem, index) => {
    typeItem.addEventListener('click', () => {
      const activeType = packaging.querySelector('.packaging-table__type-item--active');
      if (activeType) {
        activeType.classList.remove('packaging-table__type-item--active');
      }

      const thList = typeItem.querySelectorAll('th');
      const tdList = typeItem.querySelectorAll('td');
      const cells = [];

      thList.forEach((el, i) => {
        cells.push(`${thList[i].textContent}: ${tdList[i].textContent}`);
      });
      const inputValue = cells.join(', ');
      typeHead.textContent = inputValue;

      typeItem.classList.add('packaging-table__type-item--active');
      type.classList.remove('packaging-table__type--active');
      getPaddingFromBody();

      const activeCounter = packaging.querySelector('.packaging-table__count-item--active');
      if (activeCounter) {
        activeCounter.classList.remove('packaging-table__count-item--active');
      }
      typeCounters[index].classList.add('packaging-table__count-item--active');
    });
  });

  // // Тестовая логика для счётчика на странице товара. Начало.
  // const typeCountersItem = document.querySelectorAll('.packaging-table__buttons');
  // typeCountersItem.forEach((typeCounter) => {
  //   const plus = typeCounter.querySelector('.packaging-table__button--plus');
  //   const minus = typeCounter.querySelector('.packaging-table__button--minus');
  //   const input = typeCounter.querySelector('.packaging-table__input');
  //   const maxValue = parseInt(typeCounter.dataset.max, 10);
  //   // let currentValue = parseInt(input.value, 10);
  //   input.setAttribute('value', input.value);

  //   const getBlockMinus = () => {
  //     if (input.value <= 0) {
  //       input.value = 0;
  //       // currentValue = parseInt(input.value, 10);
  //       minus.setAttribute('disabled', 'disabled');
  //     } else {
  //       minus.removeAttribute('disabled');
  //     }
  //   };

  //   const getBlockPlus = () => {
  //     if (input.value >= maxValue) {
  //       input.value = maxValue;
  //       // currentValue = parseInt(input.value, 10);
  //       plus.setAttribute('disabled', 'disabled');
  //     } else {
  //       plus.removeAttribute('disabled');
  //     }
  //   };

  //   getBlockMinus();
  //   getBlockPlus();

  //   const changeCountInItemPageEvent = new CustomEvent('changeCountInItemPage', {
  //     bubbles: true,
  //     detail: { input },
  //   });

  //   plus.addEventListener('click', () => {
  //     // currentValue += 1;
  //     // input.value = currentValue;
  //     input.value = parseInt(input.value, 10) + 1;
  //     minus.removeAttribute('disabled');
  //     getBlockPlus();

  //     input.dispatchEvent(changeCountInItemPageEvent);
  //   });

  //   minus.addEventListener('click', () => {
  //     // currentValue -= 1;
  //     // input.value = currentValue;
  //     input.value = parseInt(input.value, 10) - 1;
  //     plus.removeAttribute('disabled');
  //     getBlockMinus();

  //     input.dispatchEvent(changeCountInItemPageEvent);
  //   });

  //   input.addEventListener('change', (evt) => {
  //     // currentValue = parseInt(evt.target.value, 10);
  //     // input.value = currentValue;
  //     input.value = evt.target.value;
  //     getBlockMinus();
  //     getBlockPlus();

  //     input.dispatchEvent(changeCountInItemPageEvent);
  //   });
  // });

  const typeCountersItemMobile = document.querySelectorAll('.packaging-table__count-buttons');
  typeCountersItemMobile.forEach((typeCounter) => {
    const plus = typeCounter.querySelector('.packaging-table__count-button--plus');
    const minus = typeCounter.querySelector('.packaging-table__count-button--minus');
    const input = typeCounter.querySelector('.packaging-table__count-input');
    const maxValue = parseInt(typeCounter.dataset.max, 10);
    // let currentValue = parseInt(input.value, 10);

    const getBlockMinus = () => {
      if (input.value <= 0) {
        input.value = 0;
        minus.setAttribute('disabled', 'disabled');
      } else {
        minus.removeAttribute('disabled');
      }
    };

    const getBlockPlus = () => {
      if (input.value >= maxValue) {
        input.value = maxValue;
        plus.setAttribute('disabled', 'disabled');
      } else {
        plus.removeAttribute('disabled');
      }
    };

    getBlockMinus();
    getBlockPlus();

    const changeCountInMobileItemPageEvent = new CustomEvent('changeCountInMobileItemPage', {
      bubbles: true,
      detail: { input },
    });

    plus.addEventListener('click', () => {
      // currentValue += 1;
      // input.value = currentValue;
      input.value = parseInt(input.value, 10) + 1;
      minus.removeAttribute('disabled');
      getBlockPlus();

      input.dispatchEvent(changeCountInMobileItemPageEvent);
    });

    minus.addEventListener('click', () => {
      // currentValue -= 1;
      // input.value = currentValue;
      input.value = parseInt(input.value, 10) - 1;
      plus.removeAttribute('disabled');
      getBlockMinus();

      input.dispatchEvent(changeCountInMobileItemPageEvent);
    });

    input.addEventListener('change', (evt) => {
      // currentValue = parseInt(input.value, 10);
      // input.value = currentValue;
      input.value = evt.target.value;
      getBlockMinus();
      getBlockPlus();

      input.dispatchEvent(changeCountInMobileItemPageEvent);
    });
  });
  // Тестовая логика для счётчика в карточке товара. Конец.
}
