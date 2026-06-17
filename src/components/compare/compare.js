import './compare.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Swiper from 'swiper';
import {
  Navigation, Pagination,
} from 'swiper/modules';

const breakPoints = {
  320: {
    allowTouchMove: true,
    slidesPerView: 2,
    spaceBetween: 10,
  },
  439: {
    allowTouchMove: true,
    slidesPerView: 2,
    spaceBetween: 10,
  },
  440: {
    allowTouchMove: true,
    slidesPerView: 3,
    spaceBetween: 10,
  },
  767: {
    allowTouchMove: true,
    slidesPerView: 3,
    spaceBetween: 10,
  },
  768: {
    allowTouchMove: false,
    slidesPerView: 3,
    spaceBetween: 20,
  },
  931: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  932: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1199: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
};

const compareLogicInit = (func) => {
  const compare = document.querySelector('.compare');
  // Слайдер с описанием.
  let compareScoringSlider;
  let compareFloatSlider;
  let compareProductSlider;
  compareScoringSlider = new Swiper('.compare__scoring-block', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    allowTouchMove: false,
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      439: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      440: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      931: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      932: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  // Слайдер с мелкими карточками товаров.
  compareFloatSlider = new Swiper('.compare__float-slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
      prevEl: '.compare__float .compare__slider-button--prev',
      nextEl: '.compare__float .compare__slider-button--next',
      disabledClass: 'compare__slider-button--disabled',
    },
    on: {
      slideChange: () => {
        compareScoringSlider.forEach((slider) => {
          slider.slideTo(compareFloatSlider.activeIndex, 0, false);
        });
        compareProductSlider.slideTo(compareFloatSlider.activeIndex, 0, false);
      },
    },
    // Responsive breakpoints
    breakpoints: breakPoints,
  });

  // Слайдер с карточкой товара.
  compareProductSlider = new Swiper('.compare__products-slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
      prevEl: '.compare__nav .compare__slider-button--prev',
      nextEl: '.compare__nav .compare__slider-button--next',
      disabledClass: 'compare__slider-button--disabled',
    },
    on: {
      slideChange: () => {
        compareScoringSlider.forEach((slider) => {
          slider.slideTo(compareProductSlider.activeIndex, 0, false);
        });
        compareFloatSlider.slideTo(compareProductSlider.activeIndex, 0, false);
      },
    },
    // Responsive breakpoints
    breakpoints: breakPoints,
  });

  // Функция чтобы найти одинаковые значения в описании.
  const checkEquality = (array) => array.every((e, i, a) => e === a[0]);

  const hide = () => {
    const scoringBlock = compare.querySelectorAll('.compare__scoring-block');
    scoringBlock.forEach((block) => {
      const cells = block.querySelectorAll('.compare__scoring-item p');
      const values = [];
      cells.forEach((cell) => {
        values.push(cell.textContent);
      });
      if (checkEquality(values)) {
        block.classList.add('compare__scoring-block--hide');
      } else {
        block.classList.remove('compare__scoring-block--hide');
      }
    });
  };

  const show = () => {
    compare.querySelectorAll('.compare__scoring-block--hide').forEach((el) => {
      el.classList.remove('compare__scoring-block--hide');
    });
  };

  const all = compare.querySelector('.compare__filter-button--all');
  const diff = compare.querySelector('.compare__filter-button--diff');

  all.addEventListener('click', () => {
    if (!all.classList.contains('compare__filter-button--active')) {
      compare.querySelectorAll('.compare__filter-button--active').forEach((el) => {
        el.classList.remove('compare__filter-button--active');
      });
      all.classList.add('compare__filter-button--active');

      show();
    }
  });

  diff.addEventListener('click', () => {
    if (!diff.classList.contains('compare__filter-button--active')) {
      compare.querySelectorAll('.compare__filter-button--active').forEach((el) => {
        el.classList.remove('compare__filter-button--active');
      });
      diff.classList.add('compare__filter-button--active');

      hide();
    }
  });

  const productsSliderList = compare.querySelector('.compare__products-list');
  const productsSliderItems = productsSliderList.children;

  const floatSliderList = compare.querySelector('.compare__float-list');
  const floatSliderItems = floatSliderList.children;

  const scoringSliderLists = compare.querySelectorAll('.compare__scoring-list');

  for (let i = 0; i < productsSliderItems.length; i += 1) {
    const productsItem = productsSliderItems[i];
    const floatItem = floatSliderItems[i];

    // Создаём массив и заполняем его элементами по вертикали.
    const croringItems = [];
    scoringSliderLists.forEach((scoringSliderList) => {
      const scoringSliderItems = scoringSliderList.children;
      croringItems.push(scoringSliderItems[i]);
    });
    const deleteButton = productsItem.querySelector('.compare__slider-delete');
    deleteButton.addEventListener('click', () => {
      func(); // Функция кодера.

      productsItem.remove();
      compareProductSlider.update();

      floatItem.remove();
      compareFloatSlider.update();

      croringItems.forEach((croringItem) => {
        croringItem.remove();
      });
    });
  }
};

gsap.registerPlugin(ScrollTrigger);
const products = document.querySelector('.compare__products');
const float = document.querySelector('.compare__float');
if (products && float) {
  ScrollTrigger.create({
    trigger: products,
    duration: 2,
    onEnter: () => {
      float.classList.remove('compare__float--fixed');
    },
    onEnterBack: () => {
      float.classList.remove('compare__float--fixed');
    },
    onLeave: () => {
      float.classList.add('compare__float--fixed');
    },
    onLeaveBack: () => {
      float.classList.add('compare__float--fixed');
    },
  });
}

export default compareLogicInit;
