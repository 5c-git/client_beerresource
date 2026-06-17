import './double-slider.scss';
// import Swiper, { FreeMode } from 'swiper/swiper-bundle.min';
import Swiper from 'swiper';
import {
  FreeMode, Navigation, Pagination, Thumbs, EffectFade, Mousewheel, Keyboard,
} from 'swiper/modules';

const doubleSlider = document.querySelector('.double-slider');
if (doubleSlider) {
  let doubleSliderMobile;
  let doubleSliderDesktop;
  let swiperNav;

  // Инициализация слайдера для мобилы.
  const doubleSliderMobileInit = () => {
    doubleSliderMobile = new Swiper('.double-slider__main', {
      modules: [Pagination, Thumbs, EffectFade],
      slidesPerView: 1,
      loop: false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },

      // If we need pagination
      pagination: {
        el: '.double-slider__pagination',
        type: 'fraction',
      },
    });

    doubleSliderMobile.on('slideChange', (swiper) => {
      const currentSlide = swiper.slides[swiper.activeIndex];
      const previousSlide = swiper.slides[swiper.previousIndex];
      const currentVideo = currentSlide.querySelector('video');
      const previousVideo = previousSlide.querySelector('video');
      if (currentVideo) {
        currentVideo.play();
      }

      if (previousVideo) {
        previousVideo.pause();
      }
    });
  };

  // Инициализация слайдера для десктопа.
  const doubleSliderDesktopInit = () => {
    doubleSliderDesktop = new Swiper('.double-slider__main', {
      modules: [Pagination, Thumbs, EffectFade],
      slidesPerView: 1,
      allowTouchMove: false,
      loop: false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      thumbs: {
        swiper: swiperNav,
        slideThumbActiveClass: 'double-slider__nav-item--active',
      },

      // If we need pagination
      pagination: {
        el: '.double-slider__progress',
        type: 'progressbar',
        progressbarOpposite: true,
        progressbarFillClass: 'double-slider__progress-fill',
      },
    });

    doubleSliderDesktop.on('slideChange', (swiper) => {
      const currentSlide = swiper.slides[swiper.activeIndex];
      const previousSlide = swiper.slides[swiper.previousIndex];
      const currentVideo = currentSlide.querySelector('video');
      const previousVideo = previousSlide.querySelector('video');
      if (currentVideo) {
        currentVideo.play();
      }

      if (previousVideo) {
        previousVideo.pause();
      }
    });
  };

  // Инициализация слайдера для навигации.
  const swiperNavInit = () => {
    swiperNav = new Swiper('.double-slider__nav', {
      modules: [FreeMode, Navigation, Mousewheel, Keyboard],
      spaceBetween: 5,
      slidesPerView: 'auto',
      mousewheel: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      freeMode: {
        enabled: true,
        minimumVelocity: 0.2,
        momentum: false,
        sticky: true,
      },
      watchSlidesProgress: true,
      direction: 'vertical',

      // If we need navigation
      navigation: {
        nextEl: '.double-slider__nav-button--next',
        prevEl: '.double-slider__nav-button--prev',
        disabledClass: 'double-slider__nav-button--disabled',
      },

      // Responsive breakpoints
      // breakpoints: {
      //   768: {
      //     slidesPerView: 6,
      //     spaceBetween: 12,
      //   },
      //   1179: {
      //     slidesPerView: 6,
      //     spaceBetween: 12,
      //   },
      //   1180: {
      //     slidesPerView: 7,
      //     spaceBetween: 12,
      //   },
      // },
    });
  };

  if (window.innerWidth < 768) {
    doubleSliderMobileInit();
  } else {
    swiperNavInit();
    doubleSliderDesktopInit();
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768 && !doubleSliderMobile) {
      swiperNav.destroy();
      doubleSliderDesktop.destroy();
      doubleSliderDesktop = undefined;

      doubleSliderMobileInit();
    } else if (window.innerWidth >= 768 && !doubleSliderDesktop) {
      doubleSliderMobile.destroy();
      doubleSliderMobile = undefined;

      swiperNavInit();
      doubleSliderDesktopInit();
    }
  });
}
