import './offer-details.scss';

const offerDetails = document.querySelector('.offer-details');
if (offerDetails) {
  const printButtons = offerDetails.querySelectorAll('.offer-details__print');
  printButtons.forEach((printButton) => {
    printButton.addEventListener('click', () => {
      window.print();
    });
  });
}
