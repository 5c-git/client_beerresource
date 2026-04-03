import './select-city.scss';

const selectCityInit = () => {
  const selectCity = document.querySelector('.select-city');
  if (selectCity) {
    const geolocationText = document.querySelector('.header__geolocation-text');
    const geolocationTextMobile = document.querySelector('.mobile-nav__geolocation-text');
    const list = selectCity.querySelector('.select-city__list');
    const items = list.children;
    const inputCity = selectCity.querySelector('.select-city__input');
    inputCity.addEventListener('input', () => {
      const value = inputCity.value.toLowerCase();

      for (let i = 0; i < items.length; i += 1) {
        const name = items[i].querySelector('span').textContent.toLowerCase();
        if (name.includes(value)) {
          items[i].classList.remove('select-city__item--hidden');
        } else {
          items[i].classList.add('select-city__item--hidden');
        }
      }
    });

    const changeCityEvent = new CustomEvent('changeCity', {
      bubbles: true,
      detail: { geolocationText },
    });

    for (let i = 0; i < items.length; i += 1) {
      items[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        geolocationText.textContent = items[i].querySelector('span').textContent;
        geolocationTextMobile.textContent = items[i].querySelector('span').textContent;
        window.Corners5ProjectLayout.removePopUp('.modal--city', true);

        geolocationText.dispatchEvent(changeCityEvent);
      });
    }
  }
};

export default selectCityInit;
