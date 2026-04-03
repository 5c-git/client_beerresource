import './products.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const columns = document.querySelectorAll('.products__item');
const translateY = [60, -50, 20, 70, -40];

columns.forEach((column, i) => {
  const translate = translateY[i];

  ScrollTrigger.saveStyles(column);
  ScrollTrigger.matchMedia({
    // desktop
    '(min-width: 992px)': function () {
      gsap.to(column, {
        scrollTrigger: {
          trigger: column,
          start: 'top bottom',
          end: '80% top',
          scrub: 2,
        },
        y: translate,
      });
    },

    // mobile
    '(max-width: 767px)': function () {
      // Any ScrollTriggers created inside these functions are segregated and get
      // reverted/killed when the media query doesn't match anymore.
    },

    // all
    all() {
      // ScrollTriggers created here aren't associated with a particular media query,
      // so they persist.
    },
  });
});

// Функция чтобы находить элементы, определённого порядка.
// const getEvery = (arr, gap) => Array.from(
//   { length: Math.floor(arr.length / gap) },
//   (_, i) => arr[i * gap + gap - 1],
// );

// console.log(getEvery(columns, 5));
