import './banner.scss';

import Swiper from 'swiper';
import {
  Navigation, Pagination, EffectFade, Autoplay,
} from 'swiper/modules';

// Слайдер.
const banner = document.querySelector('.banner');
if (banner) {
  const swiperBannerNolint = new Swiper('.banner__slider', {
    modules: [EffectFade, Navigation, Pagination, Autoplay],
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    // If we need navigation
    navigation: {
      nextEl: '.banner__slider-button--next',
      prevEl: '.banner__slider-button--prev',
    },

    // If we need pagination
    pagination: {
      clickable: true,
      el: '.banner__slider-pagination',
      bulletClass: 'banner__slider-bullet',
      bulletActiveClass: 'banner__slider-bullet--active',
      type: 'bullets',
    },
  });
}
