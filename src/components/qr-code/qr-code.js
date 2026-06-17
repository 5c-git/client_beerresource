import './qr-code.scss';
import QRCodeStyling from 'qr-code-styling';

// Замена qartjs (заброшен, тянул нативный canvas — не ставится на Node 22).
// qr-code-styling — browser-only, поддерживает логотип в центре.
const codes = document.querySelectorAll('.qr-code');
codes.forEach((code) => {
  const a = code.querySelector('a');
  const img = code.querySelector('img');
  const wrapper = code.querySelector('.qr-code__wrapper');
  if (a && img && wrapper) {
    const { href } = a;
    const { src } = img;
    a.remove();
    img.remove();

    const qr = new QRCodeStyling({
      width: 250,
      height: 250,
      data: href,
      image: src,
      dotsOptions: { color: '#000000', type: 'square' },
      backgroundOptions: { color: '#ffffff' },
      imageOptions: { crossOrigin: 'anonymous', margin: 5, imageSize: 0.3 },
    });

    qr.append(wrapper);
  }
});
