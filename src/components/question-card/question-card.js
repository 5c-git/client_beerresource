import './question-card.scss';
import Swiper from 'swiper';
import {
  Navigation,
} from 'swiper/modules';

const questionSliderInit = () => {
  const questions = document.querySelectorAll('.question-card');
  questions.forEach((question, i) => {
    if (!question.classList.contains('question-card--js')) {
      question.classList.add('question-card--js');

      question.id = `question-card-${i}`;
      const id = `question-card-${i}`;
      const slider = question.querySelector('.question-card__slider .swiper');

      const questionSliderNolint = new Swiper(slider, {
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: false,

        // If we need navigation
        navigation: {
          nextEl: `#${id} .question-card__slider-button--next`,
          prevEl: `#${id} .question-card__slider-button--prev`,
          disabledClass: 'question-card__slider-button--disabled',
        },
      });
    }
  });
};

export default questionSliderInit;
