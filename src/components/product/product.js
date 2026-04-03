import './product.scss';

const tabs = document.querySelectorAll('.product__nav-item');
const tabsContainer = document.querySelectorAll('.product__block');
const request = document.querySelector('.RequestProductProvider');

tabs.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const activeTab = document.querySelector('.product__nav-item--active');
    const activeTabContainer = document.querySelector('.product__block--active');
    if (!btn.classList.contains('product__nav-item--active')) {
      activeTab.classList.remove('product__nav-item--active');
      activeTabContainer.classList.remove('product__block--active');

      btn.classList.add('product__nav-item--active');
      tabsContainer[index].classList.add('product__block--active');
    }

    if (btn.textContent === 'Вопросы') {
      request.classList.remove('RequestProductProvider--hidden');
    } else {
      request.classList.add('RequestProductProvider--hidden');
    }
  });
});
