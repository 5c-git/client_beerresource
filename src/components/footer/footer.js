import './footer.scss';
import { validateForm } from '../validator/validator';

const subscribe = document.querySelector('.footer__subscribe');
if (subscribe) {
  validateForm('.footer__subscribe');
}
