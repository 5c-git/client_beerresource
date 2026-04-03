import './header.scss';
import { validateForm } from '../validator/validator';
import { getPaddingOnBody, getPaddingFromBody } from '../../utils/utils';

const header = document.querySelector('.header');

if (header) {
  // Скрывает шапку при скроле вниз
  const hideHeaderOnMove = () => {
    let scrollPosition = 0;
    let hideChecker = 0;
    let showChecker = 0;
    window.addEventListener('scroll', () => {
      if (
        window.pageYOffset >= scrollPosition
        && window.pageYOffset >= header.offsetHeight
      ) {
        showChecker = 0;
        hideChecker += window.pageYOffset - scrollPosition;
        scrollPosition = window.pageYOffset;
      } else {
        showChecker += scrollPosition - window.pageYOffset;
        hideChecker = 0;
        scrollPosition = window.pageYOffset;
      }

      if (showChecker >= 300) {
        header.classList.remove('header--hidden');
        hideChecker = 0;
      } else if (hideChecker >= 300) {
        header.classList.add('header--hidden');
      }
    });
  };

  hideHeaderOnMove();
  const burger = header.querySelector('.header__burger');
  const overlay = header.querySelector('.header__overlay');
  burger.addEventListener('click', () => {
    if (header.classList.contains('header--dropdown')) {
      header.classList.remove('header--dropdown');
      getPaddingFromBody();
    } else {
      header.classList.add('header--dropdown');
      getPaddingOnBody();
    }
  });

  overlay.addEventListener('click', () => {
    header.classList.remove('header--dropdown');
    getPaddingFromBody();
  });
}

const search = document.querySelector('.header-search');
if (search) {
  validateForm('.header-search__form');
}

if (header) {
  if (header.classList.contains('header--transparent')) {
    const checkHeaderColor = () => {
      if (window.pageYOffset !== 0) {
        // header.classList.remove('header--transparent');
        header.classList.add('header--white');
      } else {
        // header.classList.add('header--transparent');
        header.classList.remove('header--white');
      }
    };

    checkHeaderColor();

    window.addEventListener('scroll', () => {
      checkHeaderColor();
    });

    // header.addEventListener('mouseenter', () => {
    //   if (
    //     header.classList.contains('header--transparent')
    //     && window.pageYOffset === 0
    //   ) {
    //     header.classList.remove('header--transparent');
    //   }
    // });
    // header.addEventListener('mouseleave', () => {
    //   if (window.pageYOffset === 0) {
    //     header.classList.add('header--transparent');
    //   }
    // });
  }
}

const headerProfile = document.querySelector('.header__button--profile');
if (headerProfile) {
  headerProfile.addEventListener('click', (evt) => {
    evt.preventDefault();
    window.LoginProvider.setOpenPhone(true);
  });
}

// Визуальный шум на фоне.
const noiseCanvas = document.querySelector('.header__noise-canvas');
if (noiseCanvas) {
  const patternSize = 150;
  const patternScaleX = 1;
  const patternScaleY = 1;

  const canvas = document.querySelector('.header__noise-canvas');
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
