import './novelties.scss';

import Swiper, {
  Navigation, Pagination, Scrollbar,
} from 'swiper/swiper.esm';

const novelties = document.querySelectorAll('.novelties');
if (novelties) {
  const noveltiesNolint = new Swiper('.novelties__slider', {
    modules: [Navigation, Pagination, Scrollbar],
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    // Navigation arrows
    navigation: {
      prevEl: '.novelties__slider-button--prev',
      nextEl: '.novelties__slider-button--next',
      disabledClass: 'novelties__slider-button--disabled',
    },
    // Scrollbar
    scrollbar: {
      el: '.novelties__scrollbar',
      dragClass: 'novelties__scrollbar-drag',
      draggable: true,
    },
  });
}
