import './qr-code.scss';
import QArt from 'qartjs';

const codes = document.querySelectorAll('.qr-code');
codes.forEach((code) => {
  const a = code.querySelector('a');
  const img = code.querySelector('img');
  if (a && img) {
    const { href } = a;
    const { src } = img;
    a.remove();
    img.remove();

    const qart = new QArt({
      value: href,
      imagePath: src,
      filter: 'color',
      size: 250,
    });

    // directly appending canvas to the document
    qart.make(code.querySelector('.qr-code__wrapper'));
  }
});
