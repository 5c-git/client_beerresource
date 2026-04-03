import './search.scss';
import { validateForm } from '../validator/validator';
import { getPaddingOnBody } from '../../utils/utils';

const search = document.querySelector('.search');
if (search) {
  const headerSearch = document.querySelector('.header__search');
  const searchInput = search.querySelector('.search__input');
  const searchClear = search.querySelector('.search__clear');

  searchInput.addEventListener('input', () => {
    if (searchInput.value !== '') {
      searchClear.classList.add('search__clear--active');
    } else {
      searchClear.classList.remove('search__clear--active');
    }
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.classList.remove('search__clear--active');
  });

  searchInput.addEventListener('focus', () => {

    if (window.innerWidth > 991) {
      search.classList.add('search--active');
    } else {
      headerSearch.classList.add('header__search--active');
      getPaddingOnBody();
      setTimeout(() => { searchInput.focus(); }, 100);
    }
  });

  searchInput.addEventListener('focusout', () => {
    search.classList.remove('search--active');
  });
}

if (search) {
  validateForm('.search__form ');
}
