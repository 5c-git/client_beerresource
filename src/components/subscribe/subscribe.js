import './subscribe.scss';
import Inputmask from 'inputmask';
import { validateForm, maskPhone } from '../validator/validator';

// const setValidatorClass = (input) => {
//   if (input.classList.contains('validator__input--error')) {
//     input.parentElement.querySelector('.validator__description').classList.add('validator__description--error');
//   } else {
//     input.parentElement.querySelector('.validator__description').classList.remove('validator__description--error');
//   }
// };

const subscribeForm = document.querySelector('.subscribe__form');
if (subscribeForm) {
  validateForm('.subscribe__form');
  // maskPhone('.subscribe__form');

  // document.querySelector('.input-birthday').addEventListener('input', (evt) => {
  //   setTimeout(() => {
  //     setValidatorClass(evt.target);
  //   }, 100);
  // });

  // document.querySelector('.input-birthday').addEventListener('change', (evt) => {
  //   setTimeout(() => {
  //     setValidatorClass(evt.target);
  //   }, 100);
  // });

  // document.querySelector('.input-phone').addEventListener('input', (evt) => {
  //   setTimeout(() => {
  //     setValidatorClass(evt.target);
  //   }, 100);
  // });

  // document.querySelector('.input-phone').addEventListener('change', (evt) => {
  //   setTimeout(() => {
  //     setValidatorClass(evt.target);
  //   }, 100);
  // });
}

// const phoneMask = new Inputmask('+7 [(999) 999-99-99]', {
//   autoUnmask: true,
//   showMaskOnHover: false,
// });

// const inputs = document.querySelectorAll('.input-phone');
// inputs.forEach((phone) => {
//   phoneMask.mask(phone);
// });
