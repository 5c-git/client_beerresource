import './categories.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = document.querySelector('.categories');
if (categories) {
  const columns = categories.querySelectorAll('.categories__block');
  const tabs = categories.querySelectorAll('.categories__nav-item');
  const bars = categories.querySelectorAll('.categories__progress-bar');
  const links = categories.querySelectorAll('.categories__nav-name');

  links.forEach((link) => {
    link.addEventListener('click', (evt) => {
      if (window.innerWidth < 992) {
        evt.preventDefault();
      }
    });
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        const activeTab = document.querySelector('.categories__nav-item--active');
        const activeTabContainer = document.querySelector('.categories__block--active');
        if (!tab.classList.contains('categories__nav-item--active')) {
          activeTab.classList.remove('categories__nav-item--active');
          activeTabContainer.classList.remove('categories__block--active');

          tab.classList.add('categories__nav-item--active');
          columns[index].classList.add('categories__block--active');
        }
      }
    });
  });

  columns.forEach((column, i) => {
    const cards = column.querySelectorAll('.item-card');
    const evenCards = Array.from(cards).filter((elem, k) => k % 2 !== 0);
    const oddCards = Array.from(cards).filter((elem, k) => k % 2 === 0);

    ScrollTrigger.saveStyles(column);
    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 992px)': function () {
        gsap.to(column, {
          scrollTrigger: {
            trigger: column,
            start: '-60px 30%',
            // end: () => `+=${column.offsetHeight}`,
            end: 'bottom 30%',
            scrub: true,
            onEnter: () => {
              // console.log('onEnter on ' + column);
              tabs[i].classList.add('categories__nav-item--active');
            },
            onLeave: () => {
              // console.log('onLeave from ' + column);
              tabs[i].classList.remove('categories__nav-item--active');
            },
            onEnterBack: () => {
              // console.log('onEnterBack on ' + column);
              tabs[i].classList.add('categories__nav-item--active');
            },
            onLeaveBack: () => {
              // console.log('onLeaveBack from ' + column);
              tabs[i].classList.remove('categories__nav-item--active');
            },
            onUpdate: (self) => {
              // console.log('onUpdate ', self.progress.toFixed(2));
              bars[i].style.width = `${self.progress.toFixed(2) * 100}%`;
            },
            // markers: true,
          },
        });

        evenCards.forEach((evenCard) => {
          gsap.to(evenCard, {
            scrollTrigger: {
              trigger: column,
              start: 'top bottom',
              end: '80% top',
              scrub: 2,
            },
            y: 30,
          });
        });

        oddCards.forEach((oddCard) => {
          gsap.to(oddCard, {
            scrollTrigger: {
              trigger: column,
              start: 'top bottom',
              end: '80% top',
              scrub: 2,
            },
            y: -30,
          });
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

  // tabs.forEach((tab, i) => {
  //   const tabPositionY = columns[i].getBoundingClientRect().y - 150;
  //   console.log(tabPositionY);
  //   tab.addEventListener('click', () => {
  //     window.scrollTo(0, tabPositionY);
  //   });
  // });
}
