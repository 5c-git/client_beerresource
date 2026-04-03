import './up.scss';

const up = document.querySelector('.up');
const scrollableHeight = 300;
const changeTextHeight = document.documentElement.clientHeight;

if (up) {
  let scrollChecker;
  const textContainer = up.querySelector('.up__text');
  up.addEventListener('click', () => {
    window.scroll(0, 0);
  });

  if (window.innerWidth < 768) {
    textContainer.textContent = 'Наверх';
  }

  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= scrollableHeight) {
      up.classList.add('up--visible');
    } else {
      up.classList.remove('up--visible');
    }

    if (window.pageYOffset >= changeTextHeight && window.innerWidth > 767 && !scrollChecker) {
      textContainer.textContent = '← Наверх';
      scrollChecker = true;
    } else if (window.pageYOffset < changeTextHeight && window.innerWidth > 767 && scrollChecker) {
      textContainer.textContent = 'Скролл';
      scrollChecker = false;
    }
  });

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.up__progress-bar').style.height = `${scrolled}%`;
  });
}
