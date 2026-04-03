import './catalog.scss';
import { getPaddingOnBody, getPaddingFromBody } from '../../utils/utils';

const filter = document.querySelector('.catalog__sidebar-filter');
if (filter) {
  const filterOpenButton = filter.querySelector('.catalog__filter-open');
  const filterCloseButton = filter.querySelector('.catalog__filter-close');
  const filterContainer = filter.querySelector('.catalog__filter');

  filterOpenButton.addEventListener('click', () => {
    filterContainer.classList.add('catalog__filter--active');
    filterOpenButton.blur();
    getPaddingOnBody();
  });

  filterCloseButton.addEventListener('click', () => {
    filterContainer.classList.remove('catalog__filter--active');
    filterCloseButton.blur();
    getPaddingFromBody();
  });
}
