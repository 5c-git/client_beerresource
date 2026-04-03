import './payment.scss';

const payment = document.querySelector('.payment');

const changeText = (text) => {
  if (window.innerWidth < 992 && text.textContent === 'Оплата по QR коду') {
    text.textContent = 'Оплата через СБП';
  } else if (window.innerWidth > 991 && text.textContent === 'Оплата через СБП') {
    text.textContent = 'Оплата по QR коду';
  }
};
if (payment) {
  const qr = payment.querySelector('.payment__qr');
  if (qr) {
    const text = payment.querySelector('.payment__text');
    changeText(text);

    window.addEventListener('resize', () => {
      changeText(text);
    });
  }
}
