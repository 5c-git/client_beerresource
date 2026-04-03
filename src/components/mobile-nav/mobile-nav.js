import './mobile-nav.scss';

const buttons = document.querySelectorAll('.mobile-nav__sub-toggle');
buttons.forEach((button) => {
  const parent = button.parentElement;
  const container = button.nextElementSibling;
  button.addEventListener('click', () => {
    if (!parent.classList.contains('mobile-nav__item--active')) {
      parent.classList.add('mobile-nav__item--active');
      container.style.maxHeight = `${container.scrollHeight}px`;
    } else {
      parent.classList.remove('mobile-nav__item--active');
      container.style.maxHeight = null;
    }
  });
});
