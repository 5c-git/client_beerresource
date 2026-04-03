import './zoom.scss';

const zoom = document.querySelectorAll('.zoom');
zoom.forEach((picture) => {
  picture.addEventListener('mouseenter', () => {
    if (window.innerWidth > 991) {
      const largeUrl = picture.querySelector('.zoom__big').dataset.link;
      if (largeUrl) {
        const div = document.createElement('div');
        div.innerHTML = `<div class="zoom__container"><img src="${largeUrl}"/></div>`;
        picture.appendChild(div.firstChild);
      }
    }
  });
  picture.addEventListener('mouseleave', (evt) => {
    if (window.innerWidth > 991) {
      picture.querySelector('.zoom__container').remove();
      evt.preventDefault();
    }
  });

  picture.addEventListener('mousemove', (evt) => {
    if (window.innerWidth > 991) {
      const viewWidth = picture.offsetWidth;
      const viewHeight = picture.offsetHeight;
      const viewOffset = picture.getBoundingClientRect();
      const largeWidth = picture.querySelector('.zoom__container').offsetWidth;
      const largeHeight = picture.querySelector('.zoom__container').offsetHeight;
      const relativeXPosition = evt.pageX - viewOffset.x;
      const relativeYPosition = evt.pageY - viewOffset.y;
      const moveX = Math.floor((relativeXPosition * (viewWidth - largeWidth)) / viewWidth);
      const moveY = Math.floor((relativeYPosition * (viewHeight - largeHeight)) / viewHeight);

      picture.querySelector('.zoom__container').style.left = `${moveX}px`;
      picture.querySelector('.zoom__container').style.top = `${moveY}px`;
    }
  });
});
