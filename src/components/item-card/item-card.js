import './item-card.scss';
// onkeypress='return event.charCode >= 48 && event.charCode <= 57'

const activateItemCards = () => {
  const cards = document.querySelectorAll('.item-card:not(.item-card--js)');
  cards.forEach((card) => {
    if (!card.classList.contains('item-card--js')) {
      card.classList.add('item-card--js');

      const cartButton = card.querySelector('.item-card__cart');
      if (cartButton) {
        cartButton.addEventListener('click', () => {
          window.Corners5ProjectLayout.summonAlert('#alert--cart');
        });
      }

      const typeCountersCard = card.querySelectorAll('.packaging__count-buttons');
      typeCountersCard.forEach((typeCounter) => {
        const plus = typeCounter.querySelector('.packaging__count-button--plus');
        const minus = typeCounter.querySelector('.packaging__count-button--minus');
        const input = typeCounter.querySelector('.packaging__count-input');
        const maxValue = parseInt(typeCounter.dataset.max, 10);
        let currentValue = parseInt(input.value, 10);

        const getBlockMinus = () => {
          if (input.value <= 1) {
            input.value = 1;
            currentValue = parseInt(input.value, 10);
            minus.setAttribute('disabled', 'disabled');
          } else {
            minus.removeAttribute('disabled');
          }
        };

        const getBlockPlus = () => {
          if (maxValue) {
            if (input.value >= maxValue) {
              input.value = maxValue;
              currentValue = parseInt(input.value, 10);
              plus.setAttribute('disabled', 'disabled');
            } else {
              plus.removeAttribute('disabled');
            }
          }
        };

        getBlockMinus();
        getBlockPlus();

        const changeCountInItemCardEvent = new CustomEvent('changeCountInItemCard', {
          bubbles: true,
          detail: { input },
        });

        plus.addEventListener('click', () => {
          currentValue += 1;
          input.value = currentValue;
          minus.removeAttribute('disabled');
          getBlockPlus();

          input.dispatchEvent(changeCountInItemCardEvent);
        });
        minus.addEventListener('click', () => {
          currentValue -= 1;
          input.value = currentValue;
          plus.removeAttribute('disabled');
          getBlockMinus();

          input.dispatchEvent(changeCountInItemCardEvent);
        });
        input.addEventListener('change', () => {
          currentValue = parseInt(input.value, 10);
          getBlockMinus();
          getBlockPlus();

          input.dispatchEvent(changeCountInItemCardEvent);
        });
      });

      const content = card.querySelector('.item-card__content');
      const type = content.querySelector('.packaging__type');
      if (type) {
        const typeHead = type.querySelector('.packaging__type-input');
        const typeItems = type.querySelectorAll('.packaging__type-item');
        // const typeCounters = content.querySelectorAll('.packaging__count-item');

        // Скрывать выпадающий список когда убрали мышку.
        content.addEventListener('mouseleave', () => {
          type.classList.remove('packaging__type--active');
        });

        // Показывать\скрывать выпадющий список по клику.
        typeHead.addEventListener('click', () => {
          type.classList.toggle('packaging__type--active');
        });

        // Логика действий при выборе нового пункта из списка.
        typeItems.forEach((typeItem, index) => {
          typeItem.addEventListener('click', () => {
            const activeType = card.querySelector('.packaging__type-item--hide');
            if (activeType) {
              activeType.classList.remove('packaging__type-item--hide');
            }
            typeHead.textContent = typeItem.textContent;
            typeItem.classList.add('packaging__type-item--hide');
            type.classList.remove('packaging__type--active');

            // const activeCounter = card.querySelector('.packaging__count-item--active');
            // if (activeCounter) {
            //   activeCounter.classList.remove('packaging__count-item--active');
            // }
            // typeCounters[index].classList.add('packaging__count-item--active');
          });
        });
      }
    }
  });
};

export default activateItemCards;
