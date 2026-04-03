import './cart-block.scss';

const accordions = document.querySelectorAll('.cart-block');
if (accordions) {
  accordions.forEach((accordion) => {
    const button = accordion.querySelector('.cart-block__header');
    const inner = accordion.querySelector('.cart-block__inner');

    const animateIn = () => {
      inner.classList.add('cart-block__inner--overflow');
      inner.removeEventListener('transitionend', animateIn);
    };

    button.addEventListener('click', () => {
      accordion.classList.toggle('cart-block--active');

      if (accordion.classList.contains('cart-block--active')) {
        inner.style.maxHeight = `${inner.scrollHeight}px`;
        inner.addEventListener('transitionend', animateIn);
      } else {
        inner.style.maxHeight = '';
        inner.classList.remove('cart-block__inner--overflow');
      }
    });
  });
}

window.addEventListener('load', () => {
  const activeAccordions = document.querySelectorAll('.cart-block--active');
  if (activeAccordions) {
    activeAccordions.forEach((accordion) => {
      const inner = accordion.querySelector('.cart-block__inner');

      const animateIn = () => {
        inner.classList.add('cart-block__inner--overflow');
        inner.removeEventListener('transitionend', animateIn);
      };

      inner.style.maxHeight = `${inner.scrollHeight}px`;
      inner.addEventListener('transitionend', animateIn);
    });
  }
});
