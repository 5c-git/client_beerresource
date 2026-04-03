import './accordion.scss';

const accordions = document.querySelectorAll('.accordion');
if (accordions) {
  accordions.forEach((accordion) => {
    const header = document.querySelector('header');
    const accordionPosition = accordion.getBoundingClientRect();
    const accordionPositionY = accordionPosition.y;
    const button = accordion.querySelector('.accordion__header');
    const inner = accordion.querySelector('.accordion__inner');

    const getHeaderHeight = () => {
      if (header) {
        return header.offsetHeight;
      }
      return '0';
    };

    const scroll = accordionPositionY - getHeaderHeight();

    button.addEventListener('click', () => {
      // Проверяем открыт ли блок, по которому кликнули.
      if (accordion.classList.contains('accordion--active')) {
        accordion.classList.remove('accordion--active');
        inner.style.maxHeight = '';
      } else {
        // Находим все открытые блоки чтобы скрыть их.
        document.querySelectorAll('.accordion--active').forEach((item) => {
          const activeAccordion = item;
          activeAccordion.classList.remove('accordion--active');
          item.querySelector('.accordion__inner').style.maxHeight = '';
        });

        accordion.classList.add('accordion--active');
        inner.style.maxHeight = `${inner.scrollHeight}px`;
        window.scrollTo(0, scroll);
      }
    });
  });
}

window.addEventListener('load', () => {
  const activeAccordions = document.querySelectorAll('.accordion--active');
  if (activeAccordions) {
    activeAccordions.forEach((accordion) => {
      const inner = accordion.querySelector('.accordion__inner');
      inner.style.maxHeight = `${inner.scrollHeight}px`;
    });
  }
});
