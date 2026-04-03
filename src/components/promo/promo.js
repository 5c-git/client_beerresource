import './promo.scss';

import Swiper, {
  Navigation, Pagination, Thumbs, EffectFade, Autoplay,
} from 'swiper/swiper.esm';

// Слайдер.
const doubleSlider = document.querySelector('.promo');
if (doubleSlider) {
  // Инициализация слайдера с текстом.
  const swiperNavNolint = new Swiper('.promo__names-slider', {
    modules: [Navigation],
    loop: true,
    allowTouchMove: false,
    // spaceBetween: 50,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    slideActiveClass: 'promo__names-item--active',

    // If we need navigation
    navigation: {
      prevEl: '.promo__pictures-button--prev',
      nextEl: '.promo__pictures-button--next',
    },

    // Responsive breakpoints
    // breakpoints: {
    //   320: {
    //     spaceBetween: 10,
    //   },
    //   767: {
    //     spaceBetween: 10,
    //   },
    //   768: {
    //     spaceBetween: 50,
    //   },
    // },
  });

  // Инициализация слайдера для картинок.
  const doubleSliderDesktopNolint = new Swiper('.promo__pictures-slider', {
    modules: [Pagination, Navigation, Thumbs, EffectFade, Autoplay],
    allowTouchMove: false,
    loop: true,
    slideActiveClass: 'promo__pictures-item--active',
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      // reverseDirection: true,
    },

    // If we need navigation
    navigation: {
      prevEl: '.promo__pictures-button--prev',
      nextEl: '.promo__pictures-button--next',
    },

    thumbs: {
      swiper: swiperNavNolint,
    },
  });
}

// Визуальный шум на фоне.
const noiseCanvas = document.querySelector('.promo__noise-canvas');
if (noiseCanvas) {
  const patternSize = 150;
  const patternScaleX = 1;
  const patternScaleY = 1;

  const canvas = document.querySelector('.promo__noise-canvas');
  const ctx = canvas.getContext('2d');
  ctx.scale(patternScaleX, patternScaleY);

  const patternCanvas = document.createElement('canvas');
  patternCanvas.width = patternSize;
  patternCanvas.height = patternSize;
  const patternCtx = patternCanvas.getContext('2d');
  const patternData = patternCtx.createImageData(patternSize, patternSize);
  const patternPixelDataLength = patternSize * patternSize * 8; // rgba = 4

  const resize = () => {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
  };

  resize();
  window.addEventListener('resize', resize);

  const draw = () => {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // fill the canvas using the pattern
    ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const update = () => {
    for (let i = 0; i < patternPixelDataLength; i += 4) {
      const color = Math.random() * 255;

      patternData.data[i] = color;
      patternData.data[i + 1] = color;
      patternData.data[i + 2] = color;
      patternData.data[i + 3] = 255;
    }
    patternCtx.putImageData(patternData, 0, 0);
  };

  const render = () => {
    update();
    draw();

    requestAnimationFrame(render);
  };

  render();
}
