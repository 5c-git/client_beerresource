import './offer-card.scss';

window.addEventListener('load', () => {
  const activeAccordions = document.querySelectorAll('.offer-card--active');
  if (activeAccordions) {
    activeAccordions.forEach((accordion) => {
      const inner = accordion.querySelector('.offer-card__inner');

      inner.style.maxHeight = `${inner.scrollHeight}px`;
    });
  }
});
