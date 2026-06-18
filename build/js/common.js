// Куки уже вшиты в bundle.js

// Скролим страницу при обновлении наверх.
// window.scrollTo({
//   top: 0,
//   behavior: "instant",
// });

const body = document.querySelector("body");
const header = document.querySelector(".header");

// Инициализации логики для работы карточек товаров. При подгрузке новых карточек просто вызвать повторно.
window.Corners5ProjectLayout.activateItemCards();

// Инициализации логики для слайдера во вкладке вопросы у товара. При подгрузке новых карточек просто вызвать повторно.
window.Corners5ProjectLayout.questionSliderInit();

// Анимация для отрисовки карточек по классу.
// window.Corners5ProjectLayout.aosInit('.item-card');

// Тестовый показ поиска из шапки.
if (header) {
  const search = header.querySelector(".header-search");

  if (search) {
    const searchInput = search.querySelector(".header-search__input");
    const searchClear = search.querySelector(".header-search__clear");

    // Удалить при внедрении. Начало.
    // Блок для истории поиска '.header-search__history', результаты выводить в блоках '.header-search__block'
    // Блок для результата поиска '.header-search__result', результаты выводить в блоках '.header-search__block'
    const searchHistory = search.querySelector(".header-search__history");
    const searchResult = search.querySelector(".header-search__result");

    const getSearchBlocks = () => {
      if (searchInput.value !== "") {
        searchHistory
          .querySelectorAll(".header-search__block")
          .forEach((block) => {
            block.style.display = "none";
          });
        searchResult
          .querySelectorAll(".header-search__block")
          .forEach((block) => {
            block.style.display = "";
          });
      } else {
        searchHistory
          .querySelectorAll(".header-search__block")
          .forEach((block) => {
            block.style.display = "";
          });
        searchResult
          .querySelectorAll(".header-search__block")
          .forEach((block) => {
            block.style.display = "none";
          });
      }
    };
    getSearchBlocks();

    searchInput.addEventListener("input", () => {
      getSearchBlocks();
    });
    searchClear.addEventListener("click", () => {
      getSearchBlocks();
    });
    // Удалить при внедрении. Конец.
  }
}

// Тестовый показ поиска на странице поиска.
const search = document.querySelector(".search");
if (search) {
  const searchInput = search.querySelector(".search__input");
  const searchClear = search.querySelector(".search__clear");

  searchInput.addEventListener("input", () => {
    if (searchInput.value !== "") {
      searchClear.classList.add("search__clear--active");
    }
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchClear.classList.remove("search__clear--active");
  });
}


// Логика для подписки на уведомление о товаре на странице товара.
const notify = document.querySelector(".product-info__button--notify");
if (notify) {
  notify.addEventListener("click", () => {
    window.Corners5ProjectLayout.summonPopUp("#modal--notify", true);

    const modal = document.querySelector(".modal--notify");
    const validatedForm =
      window.Corners5ProjectLayout.validation.validateForm("#notify-form");

    const closeButtons = modal.querySelectorAll(".popUp__close");
    closeButtons.forEach((close) => {
      close.addEventListener("click", () => {
        validatedForm.destroy();
      });
    });

    const overlay = modal.querySelector(".modal__overlay");
    overlay.addEventListener("click", () => {
      validatedForm.destroy();
    });

    const form = modal.querySelector("#notify-form");
    form.addEventListener("bouncerFormValid", () => {
      validatedForm.destroy();
      window.Corners5ProjectLayout.removePopUp(".modal--notify", true);
      window.Corners5ProjectLayout.summonAlert("#alert--notify");
    });
  });
}

const suggestForm = document.querySelector(".suggest__form");
if (suggestForm) {
  const form = document.querySelector(".suggest__form");
  form.addEventListener("bouncerFormValid", () => {
    window.Corners5ProjectLayout.summonAlert("#alert--request");
    form.reset();
  });
}

// Тестовая логика для формы подписаться в подвале.
const footerSubscribe = document.querySelector(".footer__subscribe");
if (footerSubscribe) {
  const form = document.querySelector(".footer__subscribe");
  form.addEventListener("bouncerFormValid", () => {
    window.Corners5ProjectLayout.summonAlert("#alert--subscribe");
    form.reset();
  });
}

// Тестовая логика для формы подписаться в блоке '.subscribe'.
const subscribe = document.querySelector(".subscribe");
if (subscribe) {
  const form = document.querySelector("#subscribe-form");
  form.addEventListener("bouncerFormValid", () => {
    window.Corners5ProjectLayout.summonAlert("#alert--subscribe");
    form.reset();
  });
}

// Тестовая логика Добавить в избранное для страницы товара.
const addLike = document.querySelector(".product-info__like");
if (addLike) {
  const text = addLike.querySelector('span');
  addLike.addEventListener("click", () => {
    if (addLike.classList.contains("product-info__like--add")) {
      addLike.classList.remove("product-info__like--add");
      text.textContent = 'В избранное';
      window.Corners5ProjectLayout.summonAlert("#alert--dislike");
    } else {
      addLike.classList.add("product-info__like--add");
      text.textContent = 'В избранном';
      window.Corners5ProjectLayout.summonAlert("#alert--like");
    }
  });
}

// Тестовая логика Добавить в сравнение для страницы товара.
const addToCompare = document.querySelector(".product-info__compare");
if (addToCompare) {
  const text = addToCompare.querySelector('span');
  addToCompare.addEventListener("click", () => {
    if (addToCompare.classList.contains("product-info__compare--add")) {
      addToCompare.classList.remove("product-info__compare--add");
      text.textContent = 'Сравнить';
      window.Corners5ProjectLayout.summonAlert("#alert--discompare");
    } else {
      addToCompare.classList.add("product-info__compare--add");
      text.textContent = 'В сравнении';
      window.Corners5ProjectLayout.summonAlert("#alert--compare");
    }
  });
}


// Тестовая логика для кнопок очистить на страницах Сравнения\Избранное\Корзины.
const clearCompare = document.querySelector(".clear__button--compare");
if (clearCompare) {
  clearCompare.addEventListener("click", () => {
    window.Corners5ProjectLayout.summonPopUp("#modal--discompare", true);

    const modal = document.querySelector(".modal--discompare");
    const accept = modal.querySelector(".modal__submit");
    const cancel = modal.querySelector(".modal__cancel");

    cancel.addEventListener("click", () => {
      window.Corners5ProjectLayout.removePopUp(".modal--discompare", true);
    });

    accept.addEventListener("click", () => {
      // Тут кодеру надо прописать свою логику и при успехе удалить все карточки.

      window.Corners5ProjectLayout.removePopUp(".modal--discompare", true);
    });
  });
}

const clearFavorites = document.querySelector(".clear__button--favorites");
if (clearFavorites) {
  clearFavorites.addEventListener("click", () => {
    window.Corners5ProjectLayout.summonPopUp("#modal--dislike", true);

    const modal = document.querySelector(".modal--dislike");
    const accept = modal.querySelector(".modal__submit");
    const cancel = modal.querySelector(".modal__cancel");

    cancel.addEventListener("click", () => {
      window.Corners5ProjectLayout.removePopUp(".modal--dislike", true);
    });

    accept.addEventListener("click", () => {
      // Тут кодеру надо прописать свою логику и при успехе удалить все карточки.

      window.Corners5ProjectLayout.removePopUp(".modal--dislike", true);
    });
  });
}

const clearCart = document.querySelector(".clear__button--cart");
if (clearCart) {
  clearCart.addEventListener("click", () => {
    window.Corners5ProjectLayout.summonPopUp("#modal--discart", true);

    const modal = document.querySelector(".modal--discart");
    const accept = modal.querySelector(".modal__submit");
    const cancel = modal.querySelector(".modal__cancel");

    cancel.addEventListener("click", () => {
      window.Corners5ProjectLayout.removePopUp(".modal--discart", true);
    });

    accept.addEventListener("click", () => {
      // Тут кодеру надо прописать свою логику и при успехе удалить все карточки.

      window.Corners5ProjectLayout.removePopUp(".modal--discart", true);
    });
  });
}

// Логика удаления товара из корзины (Убрали так как есть вот такой функционал https://skr.sh/sFR8wwTjrf1).
// const cartCards = document.querySelectorAll(".item-card--cart");
// cartCards.forEach((cartCard) => {
//   const deleteButton = cartCard.querySelector(".item-card__delete");
//   deleteButton.addEventListener("click", () => {
//     window.Corners5ProjectLayout.summonPopUp("#modal--discart", true);

//     const modal = document.querySelector(".modal--discart");
//     const accept = modal.querySelector(".modal__submit");
//     const cancel = modal.querySelector(".modal__cancel");

//     cancel.addEventListener("click", () => {
//       window.Corners5ProjectLayout.removePopUp(".modal--discart", true);
//     });

//     accept.addEventListener("click", () => {
//       // Тут кодеру надо прописать свою логику и при успехе удалить все карточки.

//       window.Corners5ProjectLayout.removePopUp(".modal--discart", true);

//       // Тут кодеру надо прописать свою логику и при успехе заменить карточку cartCard.
//     });
//   });
// });

// Логика для страницы Избранное и списка Акций на детальной странице Акции. Если потребуется обновлять список без перезагрузки страницы. В противном случае удалить этот код.
const sidebarNav = document.querySelector(".sidebar-nav");
if (sidebarNav) {
  const tabs = sidebarNav.querySelectorAll(".sidebar-nav__item");
  const title = sidebarNav.querySelector(".sidebar-nav__header");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const activeTab = document.querySelector(".sidebar-nav__item--active");
      if (!tab.classList.contains("sidebar-nav__item--active")) {
        // Тут кодеру надо будет сделать запрос аякса к новым данным и при успехе выполнить код ниже.
        activeTab.classList.remove("sidebar-nav__item--active");
        tab.classList.add("sidebar-nav__item--active");
        title.innerHTML = tab.querySelector(".sidebar-nav__button").innerHTML;
      }
    });
  });
}

// Логика для селекте в личком кабинете рядом с заголовком.
const profileSelect = document.querySelector(".profile-center__select");
// Вызов инициализации фильтра и передаёт в него функцию, которую укажет кодер.
if (profileSelect) {
  const select = window.Corners5ProjectLayout.initProfileSelect((event) => {
    console.log("id = " + event.detail.id);
    console.log("value = " + event.detail.value);
    console.log("label = " + event.detail.label);
  });

  // Для select можно использовать методы и события из библиотеки: https://github.com/Choices-js/Choices
  select.setChoiceByValue("2"); // Выбирает в селекте пункт со значением '2'.
  console.log(select.getValue()); // Получаем данные по выбранному пункту.
}

// Логика для выбора города в шапке на десктопе.
const headerGeolocationButton = document.querySelector(
  ".header__geolocation-button"
);
if (headerGeolocationButton) {
  headerGeolocationButton.addEventListener("click", () => {
    window.Corners5ProjectLayout.summonPopUp("#modal--city", true);

    window.Corners5ProjectLayout.selectCityInit();
    header.classList.remove('header--dropdown');
  });

  // Событие для получения выбранного города в Геолокации.
  window.addEventListener('changeCity', (evt) => {
    console.log(evt.detail.geolocationText.textContent);
  });
}

// Логика для выбора города в шапке на мобиле.
const mobileGeolocationButton = document.querySelector(
  ".mobile-nav__geolocation-button"
);
if (mobileGeolocationButton) {
  mobileGeolocationButton.addEventListener("click", () => {
    window.Corners5ProjectLayout.summonPopUp("#modal--city", true);

    window.Corners5ProjectLayout.selectCityInit();
  });
}

// Тестовая логика по работе с заказами из Личного кабинета.
const offerCardInit = () => {
  const accordions = document.querySelectorAll('.offer-card:not(.offer-card--js)');

  accordions.forEach((accordion) => {
    if (!accordion.classList.contains('item-card--js')) {
      accordion.classList.add('offer-card--js');

      const button = accordion.querySelector('.offer-card__header');
      const inner = accordion.querySelector('.offer-card__inner');

      button.addEventListener('click', () => {
        accordion.classList.toggle('offer-card--active');

        if (accordion.classList.contains('offer-card--active')) {
          inner.style.maxHeight = `${inner.scrollHeight}px`;
        } else {
          inner.style.maxHeight = '';
        }
      });

      const offerCard = accordion;

      // Отменить заказ.
      const cancelButton = offerCard.querySelector('.offer-card__cancel');
      if (cancelButton) {
        cancelButton.addEventListener('click', (evt) => {
          evt.preventDefault();

          // Передаём номер заказа
          const { id } = cancelButton.dataset;
          const text = `Отмена заказа №${id}.`;

          // Подставляем новый текст в template
          document
            .querySelector('#modal--cancel')
            .content.querySelector('.modal__title').textContent = text;

          window.Corners5ProjectLayout.summonPopUp('#modal--cancel', true);
        });
      }

      // Повторить заказ.
      const repeatPayButton = offerCard.querySelector('.offer-card__repeat');
      if (repeatPayButton) {
        repeatPayButton.addEventListener('click', (evt) => {
          evt.preventDefault();

          // Передаём номер заказа
          const { id } = repeatPayButton.dataset;
          const text = `Товары из заказа №${id} добавлены в корзину.`;

          // Подставляем новый текст в template
          document
            .querySelector('#alert--repeat')
            .content.querySelector('.alert__text').textContent = text;

          // Вызываем сообщение с новым номером.
          window.Corners5ProjectLayout.summonAlert('#alert--repeat');
        });
      }

      // Изменить способ оплаты.
      const changePayButton = offerCard.querySelector('.offer-card__change-pay');
      if (changePayButton) {
        changePayButton.addEventListener('click', (evt) => {
          evt.preventDefault();
          window.Corners5ProjectLayout.summonPopUp('#modal--change', true);

          const modal = document.querySelector('.modal--change');
          const form = modal.querySelector('#change-form');
          form.addEventListener('submit', () => {
            evt.preventDefault();

            window.Corners5ProjectLayout.removePopUp('.modal--change', true);
            window.Corners5ProjectLayout.summonAlert('#alert--save');
          });
        });
      }
    }
  });
};

offerCardInit();

// Тестовая логика по сохранению данных в Личном кабинете блока Подписки.
const profileSubscribes = document.querySelector(".profile-subscribes");
if (profileSubscribes) {
  const form = profileSubscribes.querySelector("#profile-subscribes-form");
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    window.Corners5ProjectLayout.summonAlert("#alert--save");
  });
}

// MAPS Это массив объектов из файла libsJQ/map-pins.js
// Передаём в функцию массив объектов с адрессами, структуру можно посмотреть по адресу выше.
const findSelect = window.Corners5ProjectLayout.multiMapInit(MAPS);
if (findSelect) {
  console.log(findSelect);
  console.log(findSelect.getValue());
  findSelect.setChoiceByValue('Южный округ');
}

// STORE Это массив объектов из файла libsJQ/warehouses.js
window.Corners5ProjectLayout.warehousesMapInit(STORE);

// // Тестовый вызов окна с важным уведомлением.
// window.Corners5ProjectLayout.summonPopUp('#notice', false);

// // Тестовый вызов системного сообщения.
// window.Corners5ProjectLayout.summonAlert('#alert--notify');

// // Тестовый вызов карточки акции.
window.Corners5ProjectLayout.summonPromotionAlert('#promotion-alert');

// Тестовое добавление в избранное. Удалить при внедрении.
const testCards = document.querySelectorAll(".item-card");
testCards.forEach((testCard) => {
  const likeButton = testCard.querySelector(".item-card__like");
  if (likeButton) {
    likeButton.addEventListener("click", () => {
      if (likeButton.classList.contains("item-card__like--add")) {
        likeButton.classList.remove("item-card__like--add");
        window.Corners5ProjectLayout.summonAlert("#alert--dislike");
      } else {
        likeButton.classList.add("item-card__like--add");
        window.Corners5ProjectLayout.summonAlert("#alert--like");
      }
    });
  }
});

const compare = document.querySelector('.compare');
if (compare) {
  window.Corners5ProjectLayout.compareLogicInit(() => {
    console.log('Сюда кодеру надо передать какую-то функцию, которая будет выполнять при удалении 1 позиции в списке сравнения.');
    // Тестовая крутилка.
    window.Corners5ProjectLayout.addLoading(".compare");
    setTimeout(() => {
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert('#alert--discompare');
    }, 3000);
  });
}

// Вызываем крутилку поверх блока, который передаём в функцию.
window.Corners5ProjectLayout.addLoading("#RequestProductProvider");
// Убираем все крутилку с сайта.
window.Corners5ProjectLayout.removeLoading();



// Событие для получения значения кол-ва в карточке товара.
window.addEventListener('changeCountInItemCard', (evt) => {
  console.log(evt.detail.input.value);
});

// Событие для получения значения кол-ва на странице товара.
window.addEventListener('changeCountInItemPage', (evt) => {
  console.log(evt.detail.input.value);
});

// Событие для получения значения кол-ва на странице товара в мобиле.
window.addEventListener('changeCountInMobileItemPage', (evt) => {
  console.log(evt.detail.input.value);
});


// Тестовая логика для добавить в корзину на странице товара.
const productInfo = document.querySelector('.product-info');
if (productInfo) {
  const button = document.querySelector('.product-info__button');
  button.addEventListener('click', (evt) => {
    const inputs = document.querySelectorAll('.packaging-table__input');
    const inputs2 = document.querySelectorAll('.packaging-table__count-input');

    inputs.forEach((input) => {
      input.value = 0;
    });

    inputs2.forEach((input) => {
      input.value = 0;
    });

    document.querySelectorAll('.packaging-table__button--minus').forEach((minus) => {
      minus.setAttribute('disabled', 'disabled');
    });
    document.querySelectorAll('.packaging-table__count-button--minus').forEach((minus) => {
      minus.setAttribute('disabled', 'disabled');
    });

    document.querySelectorAll('.packaging-table__button--plus').forEach((plus) => {
      plus.removeAttribute('disabled');
    });
    document.querySelectorAll('.packaging-table__count-button--plus').forEach((plus) => {
      plus.removeAttribute('disabled');
    });
  });
}

// Тестовые пример прослушивания события для закрытия модалки с авторизацией.
window.addEventListener('ModalLoginClosed', (evt) => {
  console.log(evt.bubbles);
});
