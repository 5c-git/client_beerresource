import './packaging-amount.scss';

const counters = document.querySelectorAll('.packaging-amount__buttons');

counters.forEach((counter) => {
  const plus = counter.querySelector('.packaging-amount__button--plus');
  const minus = counter.querySelector('.packaging-amount__button--minus');
  const input = counter.querySelector('.packaging-amount__input');

  const packaging = counter.closest('.packaging-amount');
  const totalSpan = packaging.querySelector('.packaging-amount__total span');

  const unitType = packaging.dataset.unitType;
  const unitSize = Number(
    packaging.dataset.unitSize.replace(/\s/g, '')
  );

  const max = Number(counter.dataset.max ?? Infinity);
  const min = Number(input.min ?? 0);

  const getValue = () => {
    const value = Number(input.value);
    return Number.isNaN(value) ? min : value;
  };

  // Форматирование с пробелами. 
  const format = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });


  const updateTotal = () => {
    const count = getValue();

    const rawTotal = count * unitSize;
    const total = Math.round(rawTotal * 100) / 100;

    totalSpan.textContent =
      `${count} * ${format.format(unitSize)} = ${format.format(total)} ${unitType}`;
  };

  const setValue = (value) => {
    input.value = value;
    syncState();
    updateTotal();
    dispatchChange();
  };

  const clamp = (value) => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
  };

  const syncState = () => {
    const value = getValue();

    minus.disabled = value <= min;
    plus.disabled = value >= max;
  };

  const dispatchChange = () => {
    input.dispatchEvent(
      new CustomEvent('changeCountInItemPage', {
        bubbles: true,
        detail: { value: getValue(), input },
      })
    );
  };

  // --- Events ---

  plus.addEventListener('click', () => {
    const value = clamp(getValue() + 1);
    setValue(value);
  });

  minus.addEventListener('click', () => {
    const value = clamp(getValue() - 1);
    setValue(value);
  });

  input.addEventListener('change', () => {
    const value = clamp(getValue());
    setValue(value);
  });

  // initial state
  setValue(clamp(getValue()));
});