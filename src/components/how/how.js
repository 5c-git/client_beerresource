import './how.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const columns = document.querySelectorAll('.how__card-item');
const translateY = [0, 60, 120, 180];

columns.forEach((column, i) => {
  const translate = translateY[i];

  ScrollTrigger.saveStyles(column);
  ScrollTrigger.matchMedia({
    // desktop
    '(min-width: 992px)': function () {
      gsap.from(column, {
        scrollTrigger: {
          trigger: column,
          start: 'top 80%',
          end: 'bottom 50%',
        },
        y: translate,
        duration: 1.5,
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
