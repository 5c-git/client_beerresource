import './top-filters.scss';

const sort = document.querySelector('.top-filters__sort');
if (sort) {
  sort.querySelectorAll('.top-filters__sort-button').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('top-filters__sort-button--active')) {
        btn.classList.toggle('top-filters__sort-button--low');
      } else {
        sort.querySelectorAll('.top-filters__sort-button--active').forEach((el) => {
          el.classList.remove('top-filters__sort-button--active');
        });
        sort.querySelectorAll('.top-filters__sort-button--low').forEach((el) => {
          el.classList.remove('top-filters__sort-button--low');
        });
        btn.classList.add('top-filters__sort-button--active');
      }
    });
  });
}

const view = document.querySelector('.top-filters__view');
if (view) {
  const rowViewButton = document.querySelector('.top-filters__view-button--row-view');
  const tileViewButton = document.querySelector('.top-filters__view-button--tile-view');
  const catalogList = document.querySelector('.catalog__list');

  rowViewButton.addEventListener('click', () => {
    rowViewButton.classList.add('top-filters__view-button--active');
    tileViewButton.classList.remove('top-filters__view-button--active');
    catalogList.classList.add('catalog__list--row');
  });

  tileViewButton.addEventListener('click', () => {
    rowViewButton.classList.remove('top-filters__view-button--active');
    tileViewButton.classList.add('top-filters__view-button--active');
    catalogList.classList.remove('catalog__list--row');
  });
}
