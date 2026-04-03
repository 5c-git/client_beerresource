import './watched.scss';

import Swiper, {
  Navigation, Pagination, Scrollbar,
} from 'swiper/swiper.esm';

const watched = document.querySelectorAll('.watched');
if (watched) {
  const watchedNolint = new Swiper('.watched__slider', {
    modules: [Navigation, Pagination, Scrollbar],
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    // Navigation arrows
    navigation: {
      prevEl: '.watched__slider-button--prev',
      nextEl: '.watched__slider-button--next',
      disabledClass: 'watched__slider-button--disabled',
    },
    // Scrollbar
    scrollbar: {
      el: '.watched__scrollbar',
      dragClass: 'watched__scrollbar-drag',
      draggable: true,
    },
  });
}
