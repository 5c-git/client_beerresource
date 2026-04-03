import './header-search.scss';
import {
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
} from '../../utils/utils';

const initHeaderSearch = () => {
  const header = document.querySelector('header');
  if (!header) return;

  const search = header.querySelector('.header__search');
  if (!search) return;

  const searchOpenButton = header.querySelector('.header__button--search');
  const searchCloseButton = header.querySelector('.header-search__close');
  const searchOverlay = header.querySelector('.header-search__overlay');
  const searchInput = search.querySelector('.header-search__input');
  const searchClear = search.querySelector('.header-search__clear');
  const wrapper = document.querySelector('.header-search__wrapper');

  const openSearch = () => {
    search.classList.add('header__search--active');
    getPaddingOnBody();
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 100);
    setTimeout(() => {
      header.classList.remove('header--dropdown');
    }, 300);
  };

  const closeSearch = () => {
    search.classList.remove('header__search--active');
    getPaddingFromBody();
    if (searchInput) searchInput.value = '';
    if (searchClear) searchClear.classList.remove('header-search__clear--active');
  };

  if (searchOpenButton) searchOpenButton.addEventListener('click', openSearch);
  if (searchCloseButton) searchCloseButton.addEventListener('click', closeSearch);
  if (searchOverlay) searchOverlay.addEventListener('click', closeSearch);

  if (searchInput && searchClear) {
    searchInput.addEventListener('input', () => {
      if (searchInput.value !== '') {
        searchClear.classList.add('header-search__clear--active');
      } else {
        searchClear.classList.remove('header-search__clear--active');
      }
    });

    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchClear.classList.remove('header-search__clear--active');
    });
  }

  if (wrapper) {
    const updatePadding = () => {
      wrapper.style.paddingRight = `${getScrollbarWidth()}px`;
    };

    updatePadding();
    window.addEventListener('resize', updatePadding);
  }
};

initHeaderSearch();
