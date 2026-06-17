import './warehouses-map.scss';
import Swiper from 'swiper';
import {
  Navigation,
} from 'swiper/modules';

const warehousesMapInit = (data) => {
  const map = document.querySelector('.warehouses-map');
  if (map) {
    const body = document.querySelector('body');
    const citiesContainer = map.querySelector('.warehouses-map__cities');
    const stores = map.querySelectorAll('[data-code]');
    let citiesSlider;

    // Создаём подсказку.
    const hint = document.createElement('div');
    hint.classList.add('warehouses-map__hint');

    // Получаем новый массив где будут регионы только со складами.
    const newData = data.filter((elem) => elem.cities);

    // Объявляем массив куда будем собирать вообще все города для вывода на мобиле.
    let allCities = [];

    // Добавляет новый дата-атрибут с названием региона где есть склад.
    newData.forEach((el) => {
      const store = map.querySelector(`[data-code="${el.code}"]`);
      if (store) {
        store.setAttribute('data-region', el.title);

        // Заполянем массив со всеми городами.
        allCities = [...allCities, ...el.cities];

        // Это города только для выбранного региона.
        const cities = el.cities.join(', ');
        store.setAttribute('data-cities', cities);
      }
    });

    const clearRegion = () => {
      const activeRegions = map.querySelectorAll('.active');
      activeRegions.forEach((activeRegion) => {
        activeRegion.classList.remove('active');
      });
    };

    const clearCitiesList = () => {
      document.querySelector('.warehouses-map__cities').textContent = '';
      if (citiesSlider) {
        citiesSlider.destroy();
        citiesSlider = undefined;
      }
      clearRegion();
    };

    const citiesSliderInit = (info) => {
      const sliderContainer = '<div class="swiper warehouses-map__slider"><div class="swiper-wrapper warehouses-map__list"></div></div><div class="warehouses-map__slider-footer"><button class="warehouses-map__slider-button warehouses-map__slider-button--prev" type="button" aria-label="Предыдущий слайд.">←</button><button class="warehouses-map__slider-button warehouses-map__slider-button--next" type="button" aria-label="Следующий слайд.">→</button><button class="warehouses-map__slider-reset" type="button" aria-label="Все города."><svg><use href="#icon-update"></use></svg><span>Сбросить города</span></button></div>';

      if (info.length > 0) {
        citiesContainer.innerHTML = sliderContainer;
        let citiesOnSlide = 7;

        if (window.innerWidth < 1261) {
          citiesOnSlide = 4;
        }

        window.addEventListener('resize', () => {
          if (window.innerWidth < 1261) {
            citiesOnSlide = 4;
          }
        });

        const totalSlides = Math.ceil(info.length / citiesOnSlide);
        for (let i = 0; i < totalSlides; i += 1) {
          const start = i * citiesOnSlide;
          const end = start + citiesOnSlide;
          const names = info.slice(start, end);

          const swiperSlide = document.createElement('div');
          swiperSlide.classList.add('swiper-slide', 'warehouses-map__item');

          for (let j = 0; j < names.length; j += 1) {
            const item = document.createElement('div');
            item.classList.add('warehouses-map__city');
            item.textContent = names[j];
            swiperSlide.appendChild(item);
          }

          map.querySelector('.warehouses-map__list').appendChild(swiperSlide);
        }

        citiesSlider = new Swiper('.warehouses-map__slider', {
          modules: [Navigation],
          slidesPerView: 2,
          spaceBetween: 10,
          loop: false,
          // Navigation arrows
          navigation: {
            prevEl: '.warehouses-map__slider-button--prev',
            nextEl: '.warehouses-map__slider-button--next',
            disabledClass: 'warehouses-map__slider-button--disabled',
          },
        });

        // Сброс выбора региона.
        const resetButton = map.querySelector('.warehouses-map__slider-reset');
        resetButton.addEventListener('click', (evt) => {
          clearCitiesList();
          citiesSliderInit(allCities);
        });
      }
    };

    // Выводим все города при старте.
    clearCitiesList();
    citiesSliderInit(allCities);

    // Логика для отрисовки новых городов при выборе региона.
    stores.forEach((store) => {
      store.addEventListener('mouseenter', () => {
        if (store.dataset.region) {
          hint.textContent = store.dataset.region;
          // getCitiesList(store.dataset.cities);
        } else {
          hint.textContent = 'Скоро';
        }
        const left = store.getBoundingClientRect().left + (store.getBoundingClientRect().width / 2);
        const top = store.getBoundingClientRect().top + (store.getBoundingClientRect().height / 2);
        hint.style.top = `${top}px`;
        hint.style.left = `${left}px`;
        body.appendChild(hint);
      });

      store.addEventListener('mouseleave', () => {
        hint.remove();
      });

      store.addEventListener('click', () => {
        if (store.dataset.region) {
          clearCitiesList();
          const list = store.dataset.cities.split(',');
          citiesSliderInit(list);
          store.classList.add('active');
        }
      });
    });
  }
};

export default warehousesMapInit;
