/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5392
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ sendUpdatedAddresses),
/* harmony export */   l: () => (/* binding */ fetchAddresses)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4166);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);


const fetchAddresses = (setIsLoading, setAddresses) => {
  axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(`${window.routes5.addresses.requests.getAddresses[`url${_env__WEBPACK_IMPORTED_MODULE_1__/* .ENV */ .K}`]}`).then((response) => {
    if (response.status === 200) {
      setIsLoading(false);
      setAddresses(response.data);
    }
  });
};
const sendUpdatedAddresses = (addresses, setAddresses, setShow, setAddress, action) => {
  axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(
    `${window.routes5.addresses.requests.updateAddresses[`url${_env__WEBPACK_IMPORTED_MODULE_1__/* .ENV */ .K}`]}`,
    addresses
  ).then((response) => {
    setAddresses(response.data);
    setShow(false);
    setAddress("");
    window.Corners5ProjectLayout.summonAlert("#alert--save");
    window.location.reload();
  });
};


/***/ },

/***/ 2972
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OF: () => (/* binding */ sendUpdatedOrganizations),
/* harmony export */   fV: () => (/* binding */ fetchOrganizations),
/* harmony export */   uy: () => (/* binding */ sendDeletedOrganizations)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4166);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);


const fetchOrganizations = (setIsLoading, setOrganizations) => {
  axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(
    `${window.routes5.organizations.requests.getOrganizations[`url${_env__WEBPACK_IMPORTED_MODULE_1__/* .ENV */ .K}`]}`
  ).then((response) => {
    if (response.status === 200 && response.data.status !== "error") {
      setIsLoading(false);
      setOrganizations(response.data);
    } else {
      setIsLoading(false);
      setOrganizations(response.data.status);
    }
  });
};
const sendUpdatedOrganizations = (organizations, index, setOrganizations, messages, setMessage) => {
  axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(
    `${window.routes5.organizations.requests.updateOrganizations[`url${_env__WEBPACK_IMPORTED_MODULE_1__/* .ENV */ .K}`]}`,
    organizations
  ).then((response) => {
    const updatedMessages = [...messages];
    updatedMessages.push({
      type: "success",
      text: response.data[index].companyName
    });
    setOrganizations(response.data);
    setMessage(updatedMessages);
  });
};
const sendDeletedOrganizations = (organizations, setOrganizations, setModal) => {
  axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(
    `${window.routes5.organizations.requests.deleteOrganizations[`url${_env__WEBPACK_IMPORTED_MODULE_1__/* .ENV */ .K}`]}`,
    organizations
  ).then((response) => {
    window.Corners5ProjectLayout.summonAlert("#alert--organization-deleted");
    setModal(null);
    setOrganizations(response.data);
  });
};


/***/ },

/***/ 3786
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xp: () => (/* binding */ organizationsApi),
/* harmony export */   gu: () => (/* binding */ profileApi),
/* harmony export */   p5: () => (/* binding */ dataAPI)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4166);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);


const token = "5e287fb1cee7358cb4f771eba5b1ea444a1a3535";
const instance = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.create({
  baseURL: "/local/ajax/",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5e3
});
const daData = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.create({
  baseURL: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Token ${token}`
  }
});
const dataAPI = {
  async getOrganization(query) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post(`checkCompany.php`, { inn: query });
    const daDataInfo = await daData.post(null, { query });
    if (daDataInfo.data.suggestions[0]) {
      return {
        isAlreadyExist: response.data.result ? true : false,
        data: daDataInfo.data.suggestions[0]
      };
    }
    return {
      isAlreadyExist: response.data.result ? true : false,
      data: {}
    };
  }
};
const organizationsApi = {
  addNewOrganization(newOrganization) {
    return instance.post("add_organization.php", { newOrganization }).then((response) => {
      if (response.status === 200 && response.data.status !== "error") {
        return "success";
      } else {
        return "\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043F\u043E\u0437\u0436\u0435";
      }
    }).catch((error) => console.log("error", error));
  }
};
const profileApi = {
  getProfile() {
    return axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(`${window.routes5.profile.requests.getProfile[`url${_env__WEBPACK_IMPORTED_MODULE_1__/* .ENV */ .K}`]}`).then((response) => {
      if (response.status === 200 && response.data.status !== "error") {
        return response.data;
      } else {
        return "\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043F\u043E\u0437\u0436\u0435";
      }
    }).catch(() => "\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043F\u043E\u0437\u0436\u0435");
  },
  updateName(name) {
    return instance.put("personal_data.php", { name }).then((response) => {
      if (response.status === 200) {
        console.log("\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B");
        window.Corners5ProjectLayout.summonAlert("#alert--fio");
      }
    }).catch((error) => console.log("error", error));
  },
  updateEmail(email) {
    return instance.put("personal_data.php", { email }).then((response) => {
      if (response.status === 200) {
        console.log("\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B");
        window.Corners5ProjectLayout.summonAlert("#alert--confirm-email");
      }
    }).catch((error) => console.log("error", error));
  },
  sendSMS(sms, phone, close) {
    return instance.post("personal_data.php", { sms, phone }).then((response) => {
      if (response.data.status === "success") {
        window.Corners5ProjectLayout.summonAlert("#alert--mobileSuccess");
        close(false);
      } else if (response.data.status === "error") {
        document.querySelector("#alert--error").content.querySelector(".alert__text").textContent = response.data.text === "error";
        window.Corners5ProjectLayout.summonAlert("#alert--error");
      }
    }).catch((error) => console.log("error", error));
  },
  // https://run.mocky.io/v3/1d0492b9-1ac2-47bf-96f3-37fe70592c5d
  // personal_data.php
  updatePhone(phone) {
    return instance.put("personal_data.php", {
      phone
    }).then((response) => {
      if (response.status === 200 && response.data.status === "success") {
        return true;
      } else if (response.status === 200 && response.data.status === "error") {
        document.querySelector("#alert--error").content.querySelector(".alert__text").textContent = response.data.text;
        window.Corners5ProjectLayout.summonAlert("#alert--error");
        return false;
      }
    }).catch((error) => console.log("error", error));
  }
};


/***/ },

/***/ 7169
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const storagesInfo = document.querySelector(".about-nav");
if (storagesInfo) {
  const toggle = storagesInfo.querySelector(".about-nav__header");
  document.addEventListener("click", (evt) => {
    if (window.innerWidth < 992) {
      if (evt.target === toggle) {
        storagesInfo.classList.toggle("about-nav--active");
      } else {
        storagesInfo.classList.remove("about-nav--active");
      }
    }
  });
}


/***/ },

/***/ 7465
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4042);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);


aos__WEBPACK_IMPORTED_MODULE_0___default().init({
  once: true
});


/***/ },

/***/ 5097
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const accordions = document.querySelectorAll(".accordion");
if (accordions) {
  accordions.forEach((accordion) => {
    const header = document.querySelector("header");
    const accordionPosition = accordion.getBoundingClientRect();
    const accordionPositionY = accordionPosition.y;
    const button = accordion.querySelector(".accordion__header");
    const inner = accordion.querySelector(".accordion__inner");
    const getHeaderHeight = () => {
      if (header) {
        return header.offsetHeight;
      }
      return "0";
    };
    const scroll = accordionPositionY - getHeaderHeight();
    button.addEventListener("click", () => {
      if (accordion.classList.contains("accordion--active")) {
        accordion.classList.remove("accordion--active");
        inner.style.maxHeight = "";
      } else {
        document.querySelectorAll(".accordion--active").forEach((item) => {
          const activeAccordion = item;
          activeAccordion.classList.remove("accordion--active");
          item.querySelector(".accordion__inner").style.maxHeight = "";
        });
        accordion.classList.add("accordion--active");
        inner.style.maxHeight = `${inner.scrollHeight}px`;
        window.scrollTo(0, scroll);
      }
    });
  });
}
window.addEventListener("load", () => {
  const activeAccordions = document.querySelectorAll(".accordion--active");
  if (activeAccordions) {
    activeAccordions.forEach((accordion) => {
      const inner = accordion.querySelector(".accordion__inner");
      inner.style.maxHeight = `${inner.scrollHeight}px`;
    });
  }
});


/***/ },

/***/ 75
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9907
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3937
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4009
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeAlert: () => (/* binding */ removeAlert),
/* harmony export */   summonAlert: () => (/* binding */ summonAlert)
/* harmony export */ });

const body = document.querySelector(".alert-wrapper");
const removeAllAlert = () => {
  const currentAlert = body.querySelectorAll(".alert");
  currentAlert.forEach((el) => {
    el.remove();
  });
};
const removeAlert = (template) => {
  const templateContent = document.querySelector(`${template}`);
  templateContent.remove();
};
const summonAlert = (template) => {
  const alertName = template.slice(1);
  const templateContent = document.querySelector(`#${alertName}`).content.cloneNode(true);
  const alert = templateContent.querySelector(`.${alertName}`);
  const close = alert.querySelector(".alert__close");
  const hideAlert = () => {
    alert.classList.add("alert--back-bounce");
  };
  const closeAlert = () => {
    alert.remove();
  };
  if (close) {
    close.addEventListener("click", () => {
      closeAlert();
    });
  }
  removeAllAlert();
  body.append(templateContent);
  alert.classList.add("alert--bounce");
  let h;
  let c;
  const hideAlertTimeout = setTimeout(() => {
    hideAlert();
  }, 1e4);
  const closeAlertTimeout = setTimeout(() => {
    closeAlert();
  }, 12500);
  alert.addEventListener("mouseleave", () => {
    h = setTimeout(() => {
      hideAlert();
    }, 3e3);
    c = setTimeout(() => {
      closeAlert();
    }, 5500);
  });
  alert.addEventListener("mouseenter", () => {
    clearTimeout(hideAlertTimeout);
    clearTimeout(closeAlertTimeout);
    clearTimeout(h);
    clearTimeout(c);
    alert.classList.remove("alert--back-bounce");
  });
};



/***/ },

/***/ 8661
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1217
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4745
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2137
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 6387
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1179
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3385);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7083);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8832);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2890);



const banner = document.querySelector(".banner");
if (banner) {
  const swiperBannerNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(".banner__slider", {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A],
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5e3,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    // If we need navigation
    navigation: {
      nextEl: ".banner__slider-button--next",
      prevEl: ".banner__slider-button--prev"
    },
    // If we need pagination
    pagination: {
      clickable: true,
      el: ".banner__slider-pagination",
      bulletClass: "banner__slider-bullet",
      bulletActiveClass: "banner__slider-bullet--active",
      type: "bullets"
    }
  });
}


/***/ },

/***/ 4073
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const breadcrumbs = document.querySelector(".breadcrumbs");
if (breadcrumbs) {
  breadcrumbs.querySelector(".breadcrumbs__list").scrollTo(3e3, 0);
}


/***/ },

/***/ 2271
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 6529
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7797
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);


const initBxSoaOrderSelect = (container, func) => {
  const select = container;
  if (!select) {
    return void 0;
  }
  if (select.choicesInstance) {
    return select.choicesInstance;
  }
  const choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
    searchEnabled: false,
    itemSelectText: "",
    shouldSort: false
  });
  select.addEventListener("addItem", (event) => {
    func(event);
  });
  select.choicesInstance = choicesNolint;
  return choicesNolint;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initBxSoaOrderSelect);


/***/ },

/***/ 5795
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const calculator = document.querySelector(".calculator");
if (calculator) {
  const openButton = calculator.querySelector(".calculator__toggle");
  const wrapper = calculator.querySelector(".calculator__wrapper");
  if (openButton && wrapper) {
    openButton.addEventListener("click", (evt2) => {
      evt2.preventDefault();
      wrapper.classList.toggle("calculator__wrapper--active");
    });
    const result = document.querySelector(".calculator__result");
    const expression = document.querySelector(".calculator__expression");
    const num = document.querySelectorAll(".calculator__button--number");
    const operation = document.querySelectorAll(".calculator__button--operation");
    const equals = document.querySelector(".calculator__button--equals");
    const clear = document.querySelector(".calculator__button--clear");
    const ce = document.querySelector(".calculator__button--ce");
    let ex = "";
    result.innerHTML = "0";
    const checkLength = (arg) => {
      if (arg.toString().length > 14) {
        expression.innerHTML = "number too long".toUpperCase();
        result.innerHTML = "0";
        ex = "0";
      }
    };
    const trim12 = (arg) => {
      if (arg.toString().length > 14) {
        ex = parseFloat(arg.toPrecision(12));
        if (ex.toString().length > 14) {
          ex = ex.toExponential(9);
        }
        return ex;
      }
      return arg;
    };
    const clickN = (evt2) => {
      if (!ex || typeof ex === "number" || ex === "0") {
        expression.innerHTML = evt2.target.dataset.number;
        ex = evt2.target.dataset.number;
      } else {
        expression.innerHTML += evt2.target.dataset.number;
        ex += evt2.target.dataset.number;
      }
      result.innerHTML = ex.split(/\/|\*|\+|-|=/).pop();
      checkLength(result.innerHTML);
    };
    const clickO = (evt) => {
      if (!ex) {
        return;
      }
      ex = ex.toString().replace(/=/, "");
      if (ex.match(/\/|\*|\+|-|=/)) {
        ex = eval(ex).toString();
      }
      expression.innerHTML = expression.innerHTML.replace(/=/, "") + evt.target.dataset.number;
      ex += evt.target.dataset.number;
      result.innerHTML = evt.target.dataset.number;
    };
    Array.from(num).forEach((element) => {
      element.addEventListener("click", clickN);
    });
    Array.from(operation).forEach((element) => {
      element.addEventListener("click", clickO);
    });
    clear.addEventListener("click", () => {
      result.innerHTML = "";
      expression.innerHTML = "";
      ex = "";
    });
    ce.addEventListener("click", () => {
      if (!expression.innerHTML.match(/=$/)) {
        const doCE = (arg) => {
          const newArg = arg.split(/([\/\*\+\-\=])/g);
          newArg.splice(-1, 1);
          return newArg.join("");
        };
        expression.innerHTML = doCE(expression.innerHTML);
        ex = doCE(ex);
        result.innerHTML = 0;
      }
    });
    equals.addEventListener("click", () => {
      if (!ex) {
        result.innerHTML = "0";
      } else {
        ex = eval(ex);
        expression.innerHTML += "=";
        result.innerHTML = trim12(ex);
      }
    });
  }
}


/***/ },

/***/ 5801
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 6583
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const accordions = document.querySelectorAll(".cart-block");
if (accordions) {
  accordions.forEach((accordion) => {
    const button = accordion.querySelector(".cart-block__header");
    const inner = accordion.querySelector(".cart-block__inner");
    const animateIn = () => {
      inner.classList.add("cart-block__inner--overflow");
      inner.removeEventListener("transitionend", animateIn);
    };
    button.addEventListener("click", () => {
      accordion.classList.toggle("cart-block--active");
      if (accordion.classList.contains("cart-block--active")) {
        inner.style.maxHeight = `${inner.scrollHeight}px`;
        inner.addEventListener("transitionend", animateIn);
      } else {
        inner.style.maxHeight = "";
        inner.classList.remove("cart-block__inner--overflow");
      }
    });
  });
}
window.addEventListener("load", () => {
  const activeAccordions = document.querySelectorAll(".cart-block--active");
  if (activeAccordions) {
    activeAccordions.forEach((accordion) => {
      const inner = accordion.querySelector(".cart-block__inner");
      const animateIn = () => {
        inner.classList.add("cart-block__inner--overflow");
        inner.removeEventListener("transitionend", animateIn);
      };
      inner.style.maxHeight = `${inner.scrollHeight}px`;
      inner.addEventListener("transitionend", animateIn);
    });
  }
});


/***/ },

/***/ 1409
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1085
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9819
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 727
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7057
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 6433
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);


const filter = document.querySelector(".catalog__sidebar-filter");
if (filter) {
  const filterOpenButton = filter.querySelector(".catalog__filter-open");
  const filterCloseButton = filter.querySelector(".catalog__filter-close");
  const filterContainer = filter.querySelector(".catalog__filter");
  filterOpenButton.addEventListener("click", () => {
    filterContainer.classList.add("catalog__filter--active");
    filterOpenButton.blur();
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingOnBody */ .rP)();
  });
  filterCloseButton.addEventListener("click", () => {
    filterContainer.classList.remove("catalog__filter--active");
    filterCloseButton.blur();
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
  });
}


/***/ },

/***/ 8907
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5880);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6575);



gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u);
const categories = document.querySelector(".categories");
if (categories) {
  const columns = categories.querySelectorAll(".categories__block");
  const tabs = categories.querySelectorAll(".categories__nav-item");
  const bars = categories.querySelectorAll(".categories__progress-bar");
  const links = categories.querySelectorAll(".categories__nav-name");
  links.forEach((link) => {
    link.addEventListener("click", (evt) => {
      if (window.innerWidth < 992) {
        evt.preventDefault();
      }
    });
  });
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        const activeTab = document.querySelector(".categories__nav-item--active");
        const activeTabContainer = document.querySelector(".categories__block--active");
        if (!tab.classList.contains("categories__nav-item--active")) {
          activeTab.classList.remove("categories__nav-item--active");
          activeTabContainer.classList.remove("categories__block--active");
          tab.classList.add("categories__nav-item--active");
          columns[index].classList.add("categories__block--active");
        }
      }
    });
  });
  columns.forEach((column, i) => {
    const cards = column.querySelectorAll(".item-card");
    const evenCards = Array.from(cards).filter((elem, k) => k % 2 !== 0);
    const oddCards = Array.from(cards).filter((elem, k) => k % 2 === 0);
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.saveStyles(column);
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.matchMedia({
      // desktop
      "(min-width: 992px)": function() {
        gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.to(column, {
          scrollTrigger: {
            trigger: column,
            start: "-60px 30%",
            // end: () => `+=${column.offsetHeight}`,
            end: "bottom 30%",
            scrub: true,
            onEnter: () => {
              tabs[i].classList.add("categories__nav-item--active");
            },
            onLeave: () => {
              tabs[i].classList.remove("categories__nav-item--active");
            },
            onEnterBack: () => {
              tabs[i].classList.add("categories__nav-item--active");
            },
            onLeaveBack: () => {
              tabs[i].classList.remove("categories__nav-item--active");
            },
            onUpdate: (self) => {
              bars[i].style.width = `${self.progress.toFixed(2) * 100}%`;
            }
            // markers: true,
          }
        });
        evenCards.forEach((evenCard) => {
          gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.to(evenCard, {
            scrollTrigger: {
              trigger: column,
              start: "top bottom",
              end: "80% top",
              scrub: 2
            },
            y: 30
          });
        });
        oddCards.forEach((oddCard) => {
          gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.to(oddCard, {
            scrollTrigger: {
              trigger: column,
              start: "top bottom",
              end: "80% top",
              scrub: 2
            },
            y: -30
          });
        });
      },
      // mobile
      "(max-width: 767px)": function() {
      },
      // all
      all() {
      }
    });
  });
}


/***/ },

/***/ 8729
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7945
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8881
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4201
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5880);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6575);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3385);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7083);





const breakPoints = {
  320: {
    allowTouchMove: true,
    slidesPerView: 2,
    spaceBetween: 10
  },
  439: {
    allowTouchMove: true,
    slidesPerView: 2,
    spaceBetween: 10
  },
  440: {
    allowTouchMove: true,
    slidesPerView: 3,
    spaceBetween: 10
  },
  767: {
    allowTouchMove: true,
    slidesPerView: 3,
    spaceBetween: 10
  },
  768: {
    allowTouchMove: false,
    slidesPerView: 3,
    spaceBetween: 20
  },
  931: {
    slidesPerView: 3,
    spaceBetween: 20
  },
  932: {
    slidesPerView: 4,
    spaceBetween: 20
  },
  1199: {
    slidesPerView: 4,
    spaceBetween: 20
  },
  1200: {
    slidesPerView: 5,
    spaceBetween: 20
  }
};
const compareLogicInit = (func) => {
  const compare = document.querySelector(".compare");
  let compareScoringSlider;
  let compareFloatSlider;
  let compareProductSlider;
  compareScoringSlider = new swiper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(".compare__scoring-block", {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    allowTouchMove: false,
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      439: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      440: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      931: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      932: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });
  compareFloatSlider = new swiper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(".compare__float-slider", {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A],
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
      prevEl: ".compare__float .compare__slider-button--prev",
      nextEl: ".compare__float .compare__slider-button--next",
      disabledClass: "compare__slider-button--disabled"
    },
    on: {
      slideChange: () => {
        compareScoringSlider.forEach((slider) => {
          slider.slideTo(compareFloatSlider.activeIndex, 0, false);
        });
        compareProductSlider.slideTo(compareFloatSlider.activeIndex, 0, false);
      }
    },
    // Responsive breakpoints
    breakpoints: breakPoints
  });
  compareProductSlider = new swiper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(".compare__products-slider", {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A],
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
      prevEl: ".compare__nav .compare__slider-button--prev",
      nextEl: ".compare__nav .compare__slider-button--next",
      disabledClass: "compare__slider-button--disabled"
    },
    on: {
      slideChange: () => {
        compareScoringSlider.forEach((slider) => {
          slider.slideTo(compareProductSlider.activeIndex, 0, false);
        });
        compareFloatSlider.slideTo(compareProductSlider.activeIndex, 0, false);
      }
    },
    // Responsive breakpoints
    breakpoints: breakPoints
  });
  const checkEquality = (array) => array.every((e, i, a) => e === a[0]);
  const hide = () => {
    const scoringBlock = compare.querySelectorAll(".compare__scoring-block");
    scoringBlock.forEach((block) => {
      const cells = block.querySelectorAll(".compare__scoring-item p");
      const values = [];
      cells.forEach((cell) => {
        values.push(cell.textContent);
      });
      if (checkEquality(values)) {
        block.classList.add("compare__scoring-block--hide");
      } else {
        block.classList.remove("compare__scoring-block--hide");
      }
    });
  };
  const show = () => {
    compare.querySelectorAll(".compare__scoring-block--hide").forEach((el) => {
      el.classList.remove("compare__scoring-block--hide");
    });
  };
  const all = compare.querySelector(".compare__filter-button--all");
  const diff = compare.querySelector(".compare__filter-button--diff");
  all.addEventListener("click", () => {
    if (!all.classList.contains("compare__filter-button--active")) {
      compare.querySelectorAll(".compare__filter-button--active").forEach((el) => {
        el.classList.remove("compare__filter-button--active");
      });
      all.classList.add("compare__filter-button--active");
      show();
    }
  });
  diff.addEventListener("click", () => {
    if (!diff.classList.contains("compare__filter-button--active")) {
      compare.querySelectorAll(".compare__filter-button--active").forEach((el) => {
        el.classList.remove("compare__filter-button--active");
      });
      diff.classList.add("compare__filter-button--active");
      hide();
    }
  });
  const productsSliderList = compare.querySelector(".compare__products-list");
  const productsSliderItems = productsSliderList.children;
  const floatSliderList = compare.querySelector(".compare__float-list");
  const floatSliderItems = floatSliderList.children;
  const scoringSliderLists = compare.querySelectorAll(".compare__scoring-list");
  for (let i = 0; i < productsSliderItems.length; i += 1) {
    const productsItem = productsSliderItems[i];
    const floatItem = floatSliderItems[i];
    const croringItems = [];
    scoringSliderLists.forEach((scoringSliderList) => {
      const scoringSliderItems = scoringSliderList.children;
      croringItems.push(scoringSliderItems[i]);
    });
    const deleteButton = productsItem.querySelector(".compare__slider-delete");
    deleteButton.addEventListener("click", () => {
      func();
      productsItem.remove();
      compareProductSlider.update();
      floatItem.remove();
      compareFloatSlider.update();
      croringItems.forEach((croringItem) => {
        croringItem.remove();
      });
    });
  }
};
gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u);
const products = document.querySelector(".compare__products");
const float = document.querySelector(".compare__float");
if (products && float) {
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.create({
    trigger: products,
    duration: 2,
    onEnter: () => {
      float.classList.remove("compare__float--fixed");
    },
    onEnterBack: () => {
      float.classList.remove("compare__float--fixed");
    },
    onLeave: () => {
      float.classList.add("compare__float--fixed");
    },
    onLeaveBack: () => {
      float.classList.add("compare__float--fixed");
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareLogicInit);


/***/ },

/***/ 2820
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

function importAll(r) {
  const keys = r.keys();
  const firstFile = "./window/window.js";
  const rest = keys.filter((k) => k !== firstFile && k !== "./components.js").sort();
  if (keys.includes(firstFile)) {
    r(firstFile);
  }
  rest.forEach(r);
}
importAll(__webpack_require__(147));


/***/ },

/***/ 9961
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const copy = document.querySelector(".contacts__nav-link--copy");
if (copy) {
  const message = copy.nextElementSibling;
  const showMessage = () => {
    message.classList.add("contacts__message--active");
    setTimeout(() => {
      message.classList.remove("contacts__message--active");
    }, 3e3);
  };
  copy.onclick = () => {
    const link = window.location.href;
    const textarea = document.createElement("textarea");
    textarea.value = link;
    copy.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showMessage();
  };
}


/***/ },

/***/ 11
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const setCookie = (name, value) => {
  const updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=/;max-age=31536000;`;
  document.cookie = updatedCookie;
};
const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1")}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : void 0;
};
const showMessage = () => {
  window.Corners5ProjectLayout.summonPopUp("#cookie", false);
  const closeButton = document.querySelector(".cookie__button");
  closeButton.addEventListener("click", () => {
    setCookie("agreeCookie", true);
  });
};
const cookie = () => {
  const result = getCookie("agreeCookie");
  if (result === void 0) {
    showMessage();
  }
};
cookie();


/***/ },

/***/ 7126
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7721
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7936);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1193);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3385);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7083);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3484);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7555);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2890);



const doubleSlider = document.querySelector(".double-slider");
if (doubleSlider) {
  let doubleSliderMobile;
  let doubleSliderDesktop;
  let swiperNav;
  const doubleSliderMobileInit = () => {
    doubleSliderMobile = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(".double-slider__main", {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A],
      slidesPerView: 1,
      loop: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      // If we need pagination
      pagination: {
        el: ".double-slider__pagination",
        type: "fraction"
      }
    });
    doubleSliderMobile.on("slideChange", (swiper) => {
      const currentSlide = swiper.slides[swiper.activeIndex];
      const previousSlide = swiper.slides[swiper.previousIndex];
      const currentVideo = currentSlide.querySelector("video");
      const previousVideo = previousSlide.querySelector("video");
      if (currentVideo) {
        currentVideo.play();
      }
      if (previousVideo) {
        previousVideo.pause();
      }
    });
  };
  const doubleSliderDesktopInit = () => {
    doubleSliderDesktop = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(".double-slider__main", {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A],
      slidesPerView: 1,
      allowTouchMove: false,
      loop: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: swiperNav,
        slideThumbActiveClass: "double-slider__nav-item--active"
      },
      // If we need pagination
      pagination: {
        el: ".double-slider__progress",
        type: "progressbar",
        progressbarOpposite: true,
        progressbarFillClass: "double-slider__progress-fill"
      }
    });
    doubleSliderDesktop.on("slideChange", (swiper) => {
      const currentSlide = swiper.slides[swiper.activeIndex];
      const previousSlide = swiper.slides[swiper.previousIndex];
      const currentVideo = currentSlide.querySelector("video");
      const previousVideo = previousSlide.querySelector("video");
      if (currentVideo) {
        currentVideo.play();
      }
      if (previousVideo) {
        previousVideo.pause();
      }
    });
  };
  const swiperNavInit = () => {
    swiperNav = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(".double-slider__nav", {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A],
      spaceBetween: 5,
      slidesPerView: "auto",
      mousewheel: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      freeMode: {
        enabled: true,
        minimumVelocity: 0.2,
        momentum: false,
        sticky: true
      },
      watchSlidesProgress: true,
      direction: "vertical",
      // If we need navigation
      navigation: {
        nextEl: ".double-slider__nav-button--next",
        prevEl: ".double-slider__nav-button--prev",
        disabledClass: "double-slider__nav-button--disabled"
      }
      // Responsive breakpoints
      // breakpoints: {
      //   768: {
      //     slidesPerView: 6,
      //     spaceBetween: 12,
      //   },
      //   1179: {
      //     slidesPerView: 6,
      //     spaceBetween: 12,
      //   },
      //   1180: {
      //     slidesPerView: 7,
      //     spaceBetween: 12,
      //   },
      // },
    });
  };
  if (window.innerWidth < 768) {
    doubleSliderMobileInit();
  } else {
    swiperNavInit();
    doubleSliderDesktopInit();
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768 && !doubleSliderMobile) {
      swiperNav.destroy();
      doubleSliderDesktop.destroy();
      doubleSliderDesktop = void 0;
      doubleSliderMobileInit();
    } else if (window.innerWidth >= 768 && !doubleSliderDesktop) {
      doubleSliderMobile.destroy();
      doubleSliderMobile = void 0;
      swiperNavInit();
      doubleSliderDesktopInit();
    }
  });
}


/***/ },

/***/ 1865
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8877
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);



const multiMapInit = (data) => {
  const find = document.querySelector(".find");
  if (find) {
    const select = document.querySelector(".find__select");
    const mapList = [];
    data.forEach((item, index) => {
      const map2 = {
        value: item.region,
        label: item.region,
        selected: false,
        disabled: false,
        customProperties: {
          id: index
        }
      };
      mapList.push(map2);
    });
    const choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
      searchEnabled: false,
      itemSelectText: "",
      shouldSort: false,
      choices: mapList,
      classNames: {
        containerOuter: "choices find__choices"
      }
    });
    const map = document.querySelector(".find__map");
    const tag = document.createElement("script");
    tag.src = "https://api-maps.yandex.ru/2.1/?load=package.full&lang=ru-RU";
    const firstScriptTag = document.querySelector("script");
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    if (tag) {
      tag.addEventListener("load", () => {
        const ymap = map.querySelector(".find__ymap");
        const locationList = find.querySelector(".find__location-list");
        ymaps.ready(() => {
          const myMap = new ymaps.Map(ymap, {
            center: [40, 30],
            zoom: 13,
            controls: ["zoomControl"]
          }, {
            balloonAutoPanMargin: 50
          });
          myMap.behaviors.disable("scrollZoom");
          let placemark;
          let MyBalloonLayout;
          let MyBalloonContentLayout;
          MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="find__balloon"><a class="find__balloon-close" href="#"><span></span></a><div class="find__balloon-arrow"></div><div class="find__balloon-inner">$[[options.contentLayout observeSize minWidth=235 maxWidth=300 maxHeight=350]]</div></div>',
            {
              /**
               * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
               * @function
               * @name build
               */
              build: function() {
                this.constructor.superclass.build.call(this);
                this._$element = $(".find__balloon", this.getParentElement());
                this.applyElementOffset();
                this._$element.find(".find__balloon-close").on("click", $.proxy(this.onCloseClick, this));
              },
              /**
               * Удаляет содержимое макета из DOM.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
               * @function
               * @name clear
               */
              clear: function() {
                this._$element.find(".find__balloon-close").off("click");
                this.constructor.superclass.clear.call(this);
              },
              /**
               * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
               * @function
               * @name onSublayoutSizeChange
               */
              onSublayoutSizeChange: function() {
                MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
                if (!this._isElement(this._$element)) {
                  return;
                }
                this.applyElementOffset();
                this.events.fire("shapechange");
              },
              /**
               * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
               * @function
               * @name applyElementOffset
               */
              applyElementOffset: function() {
                this._$element.css({
                  left: -(this._$element[0].offsetWidth / 2),
                  top: -(this._$element[0].offsetHeight + 20 + this._$element.find(".find__balloon-arrow")[0].offsetHeight)
                });
              },
              /**
               * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
               * @function
               * @name onCloseClick
               */
              onCloseClick: function(e) {
                e.preventDefault();
                this.events.fire("userclose");
              },
              onSubmitClick: function(e) {
                e.preventDefault();
                window.Corners5ProjectLayout.summonPopUp("#modal--contact", true);
                validatedForm = window.Corners5ProjectLayout.validation.validateForm("#where-2");
                window.Corners5ProjectLayout.validation.maskPhone("#where-2");
                window.Corners5ProjectLayout.setTextareaAutoHeight("#where-2 textarea.validator__texarea");
                const form = document.querySelector("#where-2");
                form.addEventListener("bouncerFormValid", () => {
                  func();
                  validatedForm.destroy();
                  validatedForm = void 0;
                });
                this.events.fire("userclose");
              },
              /**
               * Используется для автопозиционирования (balloonAutoPan).
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
               * @function
               * @name getClientBounds
               * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
               */
              getShape: function() {
                if (!this._isElement(this._$element)) {
                  return MyBalloonLayout.superclass.getShape.call(this);
                }
                var position = this._$element.position();
                return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                  [position.left, position.top],
                  [
                    position.left + this._$element[0].offsetWidth,
                    position.top + this._$element[0].offsetHeight + this._$element.find(".find__balloon-arrow")[0].offsetHeight
                  ]
                ]));
              },
              /**
               * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
               * @function
               * @private
               * @name _isElement
               * @param {jQuery} [element] Элемент.
               * @returns {Boolean} Флаг наличия.
               */
              _isElement: function(element) {
                return element && element[0] && element.find(".find__balloon-arrow")[0];
              }
            }
          );
          MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<p class="find__balloon-title">$[properties.balloonHeader]</p><div class="find__balloon-content">$[properties.balloonContent]</div>'
          );
          let myGeoObjects;
          if (window.innerWidth >= 768) {
            myGeoObjects = new ymaps.GeoObjectCollection({}, {
              iconLayout: "default#image",
              iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_1__/* .ENV */ .K}`]}map-pin.svg`,
              iconImageSize: [25, 35],
              iconImageOffset: [-13, -18]
            });
          } else {
            myGeoObjects = new ymaps.GeoObjectCollection({}, {
              iconLayout: "default#image",
              iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_1__/* .ENV */ .K}`]}map-pin.svg`,
              iconImageSize: [18, 25],
              iconImageOffset: [-9, -13]
            });
          }
          const renderCities = (object) => {
            locationList.innerHTML = "";
            for (let i = 0; i < object.length; i++) {
              const countPins = object[i].crd.length;
              const li = document.createElement("li");
              const big = object[i].big;
              const checkBig = () => {
                if (big) {
                  return `find__location-link--big`;
                } else {
                  return ``;
                }
              };
              const setActive = () => {
                if (i === 0) {
                  return `find__location-link--active`;
                } else {
                  return ``;
                }
              };
              li.innerHTML = `<li class="find__location-item"><a href="#" class="find__location-link ${checkBig()} ${setActive()}">${object[i].city}<sup>${countPins}</sup></a></li>`;
              const itemMenu = locationList.appendChild(li.firstChild).querySelector("a");
              itemMenu.addEventListener("click", (evt) => {
                evt.preventDefault();
                const activeCity = document.querySelector(".find__location-link--active");
                if (!itemMenu.classList.contains("find__location-link--active")) {
                  activeCity.classList.remove("find__location-link--active");
                  itemMenu.classList.add("find__location-link--active");
                  myGeoObjects.removeAll();
                  renderMarker(object[i]);
                } else {
                  return false;
                }
              });
            }
          };
          const renderMarker = (object) => {
            object.crd.forEach((el) => {
              const mapName = el.name;
              const coorinateX = el.x;
              const coorinateY = el.y;
              const mapAddress = el.address;
              const mapTel = el.tel;
              const mapHint = el.hint;
              const checkAddress = () => {
                if (mapAddress) {
                  return `<p>${mapAddress}</p>`;
                } else {
                  return ``;
                }
              };
              const checkTel = () => {
                if (mapTel) {
                  return `<p><a href='tel:${mapTel}'>${mapTel}</a></p>`;
                } else {
                  return ``;
                }
              };
              const checkHint = () => {
                if (mapHint) {
                  return `<p>${mapHint}</p>`;
                } else {
                  return ``;
                }
              };
              const content = checkAddress() + checkTel() + checkHint();
              if (window.innerWidth >= 488) {
                placemark = new ymaps.Placemark([coorinateX, coorinateY], {
                  balloonHeader: `${mapName}`,
                  balloonContent: `${content}`
                }, {
                  balloonShadow: false,
                  balloonLayout: MyBalloonLayout,
                  balloonContentLayout: MyBalloonContentLayout
                  // balloonPanelMaxMapArea: 0,
                });
              } else {
                placemark = new ymaps.Placemark([coorinateX, coorinateY], {
                  balloonHeader: `${mapName}`,
                  balloonContent: `${content}`
                }, {
                  balloonContentLayout: MyBalloonContentLayout
                  // balloonPanelMaxMapArea: 0,
                });
              }
              myGeoObjects.add(placemark);
            });
            myMap.geoObjects.add(myGeoObjects);
            const count = object.crd.length;
            if (count > 1) {
              myMap.setBounds(myGeoObjects.getBounds());
            } else {
              const coorinateX = object.crd[0].x;
              const coorinateY = object.crd[0].y;
              myMap.setCenter([`${coorinateX}`, `${coorinateY}`]);
              myMap.setZoom(16);
            }
          };
          myGeoObjects.events.add("balloonopen", (evt) => {
            evt.get("target").options.set("preset", {
              iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_1__/* .ENV */ .K}`]}map-pin--active.svg`
            });
          }).add("balloonclose", (evt) => {
            evt.get("target").options.unset("preset");
          });
          renderMarker(data[0].location[0]);
          renderCities(data[0].location);
          for (let i = 0; i < data[0].location.length; i++) {
          }
          select.addEventListener("addItem", (event) => {
            const indx = event.detail.customProperties.id;
            myGeoObjects.removeAll();
            renderMarker(data[indx].location[0]);
            renderCities(data[indx].location);
          });
        });
      });
    }
    return choicesNolint;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (multiMapInit);


/***/ },

/***/ 8413
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4489);


const subscribe = document.querySelector(".footer__subscribe");
if (subscribe) {
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm)(".footer__subscribe");
}


/***/ },

/***/ 1493
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFormMessage: () => (/* binding */ getFormMessage),
/* harmony export */   setTextareaAutoHeight: () => (/* binding */ setTextareaAutoHeight)
/* harmony export */ });

function OnInput() {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
}
const setTextareaAutoHeight = (area) => {
  const textareas = document.querySelectorAll(`${area}`);
  textareas.forEach((element) => {
    element.setAttribute("style", `height:${element.scrollHeight}px; overflow-y:hidden;`);
    element.addEventListener("input", OnInput);
  });
};
const getBackForm = (evt) => {
  if (evt.target.classList.contains("form__reset")) {
    const content = evt.currentTarget.querySelector(".form__content");
    const message = evt.currentTarget.querySelector(".form__fail");
    const form = evt.currentTarget.querySelector("form");
    const submitButton = evt.currentTarget.querySelector('button[type="submit"]');
    form.reset();
    submitButton.removeAttribute("disabled");
    content.classList.remove("form__content--hidden");
    message.classList.remove("form__visible");
    evt.currentTarget.removeEventListener("click", getBackForm);
  }
};
const getFormMessage = (form, bollean) => {
  const template = document.querySelector(form);
  const content = template.querySelector(".form__content");
  content.classList.add("form__content--hidden");
  if (bollean === true) {
    const message = template.querySelector(".form__greetings");
    message.classList.add("form__visible");
  } else {
    const message = template.querySelector(".form__fail");
    message.classList.add("form__visible");
    template.addEventListener("click", getBackForm);
  }
};



/***/ },

/***/ 1979
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFormMessage: () => (/* binding */ getFormMessage),
/* harmony export */   setTextareaAutoHeight: () => (/* binding */ setTextareaAutoHeight)
/* harmony export */ });

function OnInput() {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
}
const setTextareaAutoHeight = (area) => {
  const textareas = document.querySelectorAll(`${area}`);
  textareas.forEach((element) => {
    element.setAttribute("style", `height:${element.scrollHeight}px; overflow-y:hidden;`);
    element.addEventListener("input", OnInput);
  });
};
const getBackForm = (evt) => {
  if (evt.target.classList.contains("form__reset")) {
    const content = evt.currentTarget.querySelector(".form__content");
    const message = evt.currentTarget.querySelector(".form__fail");
    const form = evt.currentTarget.querySelector("form");
    const submitButton = evt.currentTarget.querySelector('button[type="submit"]');
    form.reset();
    submitButton.removeAttribute("disabled");
    content.classList.remove("form__content--hidden");
    message.classList.remove("form__visible");
    evt.currentTarget.removeEventListener("click", getBackForm);
  }
};
const getFormMessage = (form, bollean) => {
  const template = document.querySelector(form);
  const content = template.querySelector(".form__content");
  content.classList.add("form__content--hidden");
  if (bollean === true) {
    const message = template.querySelector(".form__greetings");
    message.classList.add("form__visible");
  } else {
    const message = template.querySelector(".form__fail");
    message.classList.add("form__visible");
    template.addEventListener("click", getBackForm);
  }
};



/***/ },

/***/ 7025
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const header = document.querySelector(".header");
const dropdownUser = document.querySelector(".header-dropdown__user--profile");
if (dropdownUser) {
  dropdownUser.addEventListener("click", (evt) => {
    evt.preventDefault();
    window.LoginProvider.setOpenPhone(true);
    header.classList.remove("header--dropdown");
  });
}


/***/ },

/***/ 2705
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3357
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);


const initHeaderSearch = () => {
  const header = document.querySelector("header");
  if (!header) return;
  const search = header.querySelector(".header__search");
  if (!search) return;
  const searchOpenButton = header.querySelector(".header__button--search");
  const searchCloseButton = header.querySelector(".header-search__close");
  const searchOverlay = header.querySelector(".header-search__overlay");
  const searchInput = search.querySelector(".header-search__input");
  const searchClear = search.querySelector(".header-search__clear");
  const wrapper = document.querySelector(".header-search__wrapper");
  const openSearch = () => {
    search.classList.add("header__search--active");
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingOnBody */ .rP)();
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 100);
    setTimeout(() => {
      header.classList.remove("header--dropdown");
    }, 300);
  };
  const closeSearch = () => {
    search.classList.remove("header__search--active");
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
    if (searchInput) searchInput.value = "";
    if (searchClear) searchClear.classList.remove("header-search__clear--active");
  };
  if (searchOpenButton) searchOpenButton.addEventListener("click", openSearch);
  if (searchCloseButton) searchCloseButton.addEventListener("click", closeSearch);
  if (searchOverlay) searchOverlay.addEventListener("click", closeSearch);
  if (searchInput && searchClear) {
    searchInput.addEventListener("input", () => {
      if (searchInput.value !== "") {
        searchClear.classList.add("header-search__clear--active");
      } else {
        searchClear.classList.remove("header-search__clear--active");
      }
    });
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      searchClear.classList.remove("header-search__clear--active");
    });
  }
  if (wrapper) {
    const updatePadding = () => {
      wrapper.style.paddingRight = `${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getScrollbarWidth */ .XJ)()}px`;
    };
    updatePadding();
    window.addEventListener("resize", updatePadding);
  }
};
initHeaderSearch();


/***/ },

/***/ 6689
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4489);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3670);



const header = document.querySelector(".header");
if (header) {
  const hideHeaderOnMove = () => {
    let scrollPosition = 0;
    let hideChecker = 0;
    let showChecker = 0;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= scrollPosition && window.pageYOffset >= header.offsetHeight) {
        showChecker = 0;
        hideChecker += window.pageYOffset - scrollPosition;
        scrollPosition = window.pageYOffset;
      } else {
        showChecker += scrollPosition - window.pageYOffset;
        hideChecker = 0;
        scrollPosition = window.pageYOffset;
      }
      if (showChecker >= 300) {
        header.classList.remove("header--hidden");
        hideChecker = 0;
      } else if (hideChecker >= 300) {
        header.classList.add("header--hidden");
      }
    });
  };
  hideHeaderOnMove();
  const burger = header.querySelector(".header__burger");
  const overlay = header.querySelector(".header__overlay");
  burger.addEventListener("click", () => {
    if (header.classList.contains("header--dropdown")) {
      header.classList.remove("header--dropdown");
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingFromBody */ .iW)();
    } else {
      header.classList.add("header--dropdown");
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingOnBody */ .rP)();
    }
  });
  overlay.addEventListener("click", () => {
    header.classList.remove("header--dropdown");
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingFromBody */ .iW)();
  });
}
const search = document.querySelector(".header-search");
if (search) {
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm)(".header-search__form");
}
if (header) {
  if (header.classList.contains("header--transparent")) {
    const checkHeaderColor = () => {
      if (window.pageYOffset !== 0) {
        header.classList.add("header--white");
      } else {
        header.classList.remove("header--white");
      }
    };
    checkHeaderColor();
    window.addEventListener("scroll", () => {
      checkHeaderColor();
    });
  }
}
const headerProfile = document.querySelector(".header__button--profile");
if (headerProfile) {
  headerProfile.addEventListener("click", (evt) => {
    evt.preventDefault();
    window.LoginProvider.setOpenPhone(true);
  });
}
const noiseCanvas = document.querySelector(".header__noise-canvas");
if (noiseCanvas) {
  const patternSize = 150;
  const patternScaleX = 1;
  const patternScaleY = 1;
  const canvas = document.querySelector(".header__noise-canvas");
  const ctx = canvas.getContext("2d");
  ctx.scale(patternScaleX, patternScaleY);
  const patternCanvas = document.createElement("canvas");
  patternCanvas.width = patternSize;
  patternCanvas.height = patternSize;
  const patternCtx = patternCanvas.getContext("2d");
  const patternData = patternCtx.createImageData(patternSize, patternSize);
  const patternPixelDataLength = patternSize * patternSize * 8;
  const resize = () => {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
  };
  resize();
  window.addEventListener("resize", resize);
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = ctx.createPattern(patternCanvas, "repeat");
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
  const update = () => {
    for (let i = 0; i < patternPixelDataLength; i += 4) {
      const color = Math.random() * 255;
      patternData.data[i] = color;
      patternData.data[i + 1] = color;
      patternData.data[i + 2] = color;
      patternData.data[i + 3] = 255;
    }
    patternCtx.putImageData(patternData, 0, 0);
  };
  const render = () => {
    update();
    draw();
    requestAnimationFrame(render);
  };
  render();
}


/***/ },

/***/ 3549
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2865
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5880);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6575);



gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u);
const columns = document.querySelectorAll(".how__card-item");
const translateY = [0, 60, 120, 180];
columns.forEach((column, i) => {
  const translate = translateY[i];
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.saveStyles(column);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.matchMedia({
    // desktop
    "(min-width: 992px)": function() {
      gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.from(column, {
        scrollTrigger: {
          trigger: column,
          start: "top 80%",
          end: "bottom 50%"
        },
        y: translate,
        duration: 1.5
      });
    },
    // mobile
    "(max-width: 767px)": function() {
    },
    // all
    all() {
    }
  });
});


/***/ },

/***/ 8697
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const activateItemCards = () => {
  const cards = document.querySelectorAll(".item-card:not(.item-card--js)");
  cards.forEach((card) => {
    if (!card.classList.contains("item-card--js")) {
      card.classList.add("item-card--js");
      const cartButton = card.querySelector(".item-card__cart");
      if (cartButton) {
        cartButton.addEventListener("click", () => {
          window.Corners5ProjectLayout.summonAlert("#alert--cart");
        });
      }
      const typeCountersCard = card.querySelectorAll(".packaging__count-buttons");
      typeCountersCard.forEach((typeCounter) => {
        const plus = typeCounter.querySelector(".packaging__count-button--plus");
        const minus = typeCounter.querySelector(".packaging__count-button--minus");
        const input = typeCounter.querySelector(".packaging__count-input");
        const maxValue = parseInt(typeCounter.dataset.max, 10);
        let currentValue = parseInt(input.value, 10);
        const getBlockMinus = () => {
          if (input.value <= 1) {
            input.value = 1;
            currentValue = parseInt(input.value, 10);
            minus.setAttribute("disabled", "disabled");
          } else {
            minus.removeAttribute("disabled");
          }
        };
        const getBlockPlus = () => {
          if (maxValue) {
            if (input.value >= maxValue) {
              input.value = maxValue;
              currentValue = parseInt(input.value, 10);
              plus.setAttribute("disabled", "disabled");
            } else {
              plus.removeAttribute("disabled");
            }
          }
        };
        getBlockMinus();
        getBlockPlus();
        const changeCountInItemCardEvent = new CustomEvent("changeCountInItemCard", {
          bubbles: true,
          detail: { input }
        });
        plus.addEventListener("click", () => {
          currentValue += 1;
          input.value = currentValue;
          minus.removeAttribute("disabled");
          getBlockPlus();
          input.dispatchEvent(changeCountInItemCardEvent);
        });
        minus.addEventListener("click", () => {
          currentValue -= 1;
          input.value = currentValue;
          plus.removeAttribute("disabled");
          getBlockMinus();
          input.dispatchEvent(changeCountInItemCardEvent);
        });
        input.addEventListener("change", () => {
          currentValue = parseInt(input.value, 10);
          getBlockMinus();
          getBlockPlus();
          input.dispatchEvent(changeCountInItemCardEvent);
        });
      });
      const content = card.querySelector(".item-card__content");
      const type = content.querySelector(".packaging__type");
      if (type) {
        const typeHead = type.querySelector(".packaging__type-input");
        const typeItems = type.querySelectorAll(".packaging__type-item");
        content.addEventListener("mouseleave", () => {
          type.classList.remove("packaging__type--active");
        });
        typeHead.addEventListener("click", () => {
          type.classList.toggle("packaging__type--active");
        });
        typeItems.forEach((typeItem, index) => {
          typeItem.addEventListener("click", () => {
            const activeType = card.querySelector(".packaging__type-item--hide");
            if (activeType) {
              activeType.classList.remove("packaging__type-item--hide");
            }
            typeHead.textContent = typeItem.textContent;
            typeItem.classList.add("packaging__type-item--hide");
            type.classList.remove("packaging__type--active");
          });
        });
      }
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateItemCards);


/***/ },

/***/ 5853
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1995
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3385);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7083);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5639);



const layoutSliders = document.querySelectorAll(".layout--slider");
layoutSliders.forEach((layoutSlider, index) => {
  layoutSlider.id = `layout-${index}`;
  const id = `layout-${index}`;
  const slider = layoutSlider.querySelector(".layout__slider");
  const layoutNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(slider, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A],
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: false,
    // Pagination bullets
    pagination: {
      el: `#${id} .layout__slider-pagination`,
      type: "bullets",
      clickable: true,
      bulletClass: "layout__slider-bullet",
      bulletActiveClass: "layout__slider-bullet--active"
    },
    // Navigation arrows
    navigation: {
      prevEl: `#${id} .layout__slider-button--prev`,
      nextEl: `#${id} .layout__slider-button--next`,
      disabledClass: "layout__slider-button--disabled"
    },
    // Scrollbar
    scrollbar: {
      el: ".layout__scrollbar",
      dragClass: "layout__scrollbar-drag",
      draggable: true
    }
  });
});


/***/ },

/***/ 6743
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3037
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLoading: () => (/* binding */ addLoading),
/* harmony export */   removeLoading: () => (/* binding */ removeLoading)
/* harmony export */ });

const addLoading = (container) => {
  const template = '<div class="loading"><div class="loading__spin"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="#EEEFF0"/><path d="M22.8949 13.9986C22.6536 12.262 21.848 10.6529 20.6022 9.41917C19.3563 8.18546 17.7394 7.39558 16.0005 7.1712C14.2616 6.94683 12.4972 7.30041 10.979 8.17748C9.46084 9.05455 8.27315 10.4064 7.59889 12.0249M7.10547 8.07757V12.0249H11.0528" stroke="#7F8899" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.10547 15.9727C7.34681 17.7093 8.15244 19.3184 9.39826 20.5521C10.6441 21.7858 12.261 22.5757 13.9999 22.8001C15.7388 23.0244 17.5032 22.6709 19.0214 21.7938C20.5396 20.9167 21.7273 19.5648 22.4015 17.9463M22.8949 21.8937V17.9463H18.9476" stroke="#7F8899" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>';
  const div = document.createElement("div");
  div.innerHTML = template;
  const block = document.querySelector(container);
  if (block) {
    block.appendChild(div.firstChild);
    const button = block.querySelector('button[type="submit"]');
    if (button) {
      button.focus();
      button.blur();
    }
  }
};
const removeLoading = () => {
  document.querySelectorAll(".loading").forEach((el) => {
    el.remove();
  });
};



/***/ },

/***/ 1413
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9838);


const map = document.querySelectorAll(".map");
if (map.length > 0) {
  const tag = document.createElement("script");
  tag.src = "https://api-maps.yandex.ru/2.1/?load=package.full&lang=ru-RU";
  const firstScriptTag = document.querySelector("script");
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  if (tag) {
    tag.addEventListener("load", () => {
      map.forEach((el) => {
        const coorinateX = parseFloat(el.getAttribute("data-coordinatex"));
        const coorinateY = parseFloat(el.getAttribute("data-coordinatey"));
        const mapName = el.getAttribute("data-name");
        const mapHint = el.getAttribute("data-hint");
        const ymap = el.querySelector(".map__ymap");
        ymaps.ready(() => {
          const myMap = new ymaps.Map(ymap, {
            center: [coorinateX, coorinateY],
            zoom: 16,
            controls: ["zoomControl"]
          }, {
            searchControlProvider: "yandex#search"
          });
          myMap.behaviors.disable("scrollZoom");
          let placemark;
          let MyBalloonLayout;
          let MyBalloonContentLayout;
          if (window.innerWidth >= 488) {
            MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
              '<div class="map__balloon"><a class="map__balloon-close" href="#"><span></span></a><div class="map__balloon-arrow"></div><div class="map__balloon-inner">$[[options.contentLayout observeSize minWidth=235 maxWidth=300 maxHeight=350]]</div></div>',
              {
                /**
                 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                 * @function
                 * @name build
                 */
                build: function() {
                  this.constructor.superclass.build.call(this);
                  this._$element = $(".map__balloon", this.getParentElement());
                  this.applyElementOffset();
                  this._$element.find(".map__balloon-close").on("click", $.proxy(this.onCloseClick, this));
                },
                /**
                 * Удаляет содержимое макета из DOM.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                 * @function
                 * @name clear
                 */
                clear: function() {
                  this._$element.find(".map__balloon-close").off("click");
                  this.constructor.superclass.clear.call(this);
                },
                /**
                 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onSublayoutSizeChange
                 */
                onSublayoutSizeChange: function() {
                  MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
                  if (!this._isElement(this._$element)) {
                    return;
                  }
                  this.applyElementOffset();
                  this.events.fire("shapechange");
                },
                /**
                 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name applyElementOffset
                 */
                applyElementOffset: function() {
                  this._$element.css({
                    left: -(this._$element[0].offsetWidth / 2),
                    top: -(this._$element[0].offsetHeight + 20 + this._$element.find(".map__balloon-arrow")[0].offsetHeight)
                  });
                },
                /**
                 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onCloseClick
                 */
                onCloseClick: function(e) {
                  e.preventDefault();
                  this.events.fire("userclose");
                },
                onSubmitClick: function(e) {
                  e.preventDefault();
                  window.Corners5ProjectLayout.summonPopUp("#modal--contact", true);
                  validatedForm = window.Corners5ProjectLayout.validation.validateForm("#where-2");
                  window.Corners5ProjectLayout.validation.maskPhone("#where-2");
                  window.Corners5ProjectLayout.setTextareaAutoHeight("#where-2 textarea.validator__texarea");
                  const form = document.querySelector("#where-2");
                  form.addEventListener("bouncerFormValid", () => {
                    func();
                    validatedForm.destroy();
                    validatedForm = void 0;
                  });
                  this.events.fire("userclose");
                },
                /**
                 * Используется для автопозиционирования (balloonAutoPan).
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                 * @function
                 * @name getClientBounds
                 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                 */
                getShape: function() {
                  if (!this._isElement(this._$element)) {
                    return MyBalloonLayout.superclass.getShape.call(this);
                  }
                  var position = this._$element.position();
                  return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                    [position.left, position.top],
                    [
                      position.left + this._$element[0].offsetWidth,
                      position.top + this._$element[0].offsetHeight + this._$element.find(".map__balloon-arrow")[0].offsetHeight
                    ]
                  ]));
                },
                /**
                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                 * @function
                 * @private
                 * @name _isElement
                 * @param {jQuery} [element] Элемент.
                 * @returns {Boolean} Флаг наличия.
                 */
                _isElement: function(element) {
                  return element && element[0] && element.find(".map__balloon-arrow")[0];
                }
              }
            );
            MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
              '<p class="map__balloon-title">$[properties.balloonHeader]</p><p class="map__balloon-city">$[properties.balloonContent]</p>'
            );
          } else {
            MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
              '<p class="map__balloon-title">$[properties.balloonHeader]</p><p class="map__balloon-city">$[properties.balloonContent]</p>',
              {}
            );
          }
          const myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: "default#image",
            iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_0__/* .ENV */ .K}`]}map-pin.svg`,
            iconImageSize: [40, 56],
            iconImageOffset: [-20, -28]
          });
          if (window.innerWidth >= 488) {
            placemark = new ymaps.Placemark([coorinateX, coorinateY], {
              balloonHeader: `${mapName}`,
              balloonContent: `${mapHint}`
            }, {
              balloonShadow: false,
              balloonLayout: MyBalloonLayout,
              balloonContentLayout: MyBalloonContentLayout
              // balloonPanelMaxMapArea: 0,
            });
          } else {
            placemark = new ymaps.Placemark([coorinateX, coorinateY], {
              balloonHeader: `${mapName}`,
              balloonContent: `${mapHint}`
            }, {
              balloonContentLayout: MyBalloonContentLayout
              // balloonPanelMaxMapArea: 0,
            });
          }
          myCollection.add(placemark);
          placemark.events.add("balloonopen", (evt) => {
            evt.get("target").options.set("preset", {
              iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_0__/* .ENV */ .K}`]}map-pin--active.svg`
            });
          });
          placemark.events.add("balloonclose", (evt) => {
            evt.get("target").options.unset("preset");
          });
          myMap.geoObjects.add(myCollection);
        });
      });
    });
  }
}


/***/ },

/***/ 5079
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5880);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6575);



gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u);
const markers = document.querySelectorAll(".marker");
markers.forEach((marker) => {
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.create({
    trigger: marker,
    start: "top 80%",
    end: "bottom top",
    duration: 2,
    onEnter: () => {
      marker.classList.add("marker--show");
    }
  });
});


/***/ },

/***/ 9143
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const buttons = document.querySelectorAll(".mobile-nav__sub-toggle");
buttons.forEach((button) => {
  const parent = button.parentElement;
  const container = button.nextElementSibling;
  button.addEventListener("click", () => {
    if (!parent.classList.contains("mobile-nav__item--active")) {
      parent.classList.add("mobile-nav__item--active");
      container.style.maxHeight = `${container.scrollHeight}px`;
    } else {
      parent.classList.remove("mobile-nav__item--active");
      container.style.maxHeight = null;
    }
  });
});


/***/ },

/***/ 1421
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);


const initCitySelect = (func) => {
  const select = document.querySelector(".modal__select");
  let choicesNolint;
  if (select) {
    choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
      searchEnabled: true,
      itemSelectText: "",
      shouldSort: false,
      loadingText: "Loading...",
      noResultsText: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      noChoicesText: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E",
      classNames: {
        containerOuter: "choices modal__choices"
      }
    });
    select.addEventListener("addItem", (event) => {
      func(event);
    });
  }
  return choicesNolint;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCitySelect);


/***/ },

/***/ 5401
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 265
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2415
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7897
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3385);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7083);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5639);



const novelties = document.querySelectorAll(".novelties");
if (novelties) {
  const noveltiesNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(".novelties__slider", {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A],
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: false,
    // Navigation arrows
    navigation: {
      prevEl: ".novelties__slider-button--prev",
      nextEl: ".novelties__slider-button--next",
      disabledClass: "novelties__slider-button--disabled"
    },
    // Scrollbar
    scrollbar: {
      el: ".novelties__scrollbar",
      dragClass: "novelties__scrollbar-drag",
      draggable: true
    }
  });
}


/***/ },

/***/ 3709
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

window.addEventListener("load", () => {
  const activeAccordions = document.querySelectorAll(".offer-card--active");
  if (activeAccordions) {
    activeAccordions.forEach((accordion) => {
      const inner = accordion.querySelector(".offer-card__inner");
      inner.style.maxHeight = `${inner.scrollHeight}px`;
    });
  }
});


/***/ },

/***/ 6009
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3789
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const offerDetails = document.querySelector(".offer-details");
if (offerDetails) {
  const printButtons = offerDetails.querySelectorAll(".offer-details__print");
  printButtons.forEach((printButton) => {
    printButton.addEventListener("click", () => {
      window.print();
    });
  });
}


/***/ },

/***/ 5137
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9453
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9363
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const counters = document.querySelectorAll(".packaging-amount__buttons");
counters.forEach((counter) => {
  var _a, _b;
  const plus = counter.querySelector(".packaging-amount__button--plus");
  const minus = counter.querySelector(".packaging-amount__button--minus");
  const input = counter.querySelector(".packaging-amount__input");
  const packaging = counter.closest(".packaging-amount");
  const totalSpan = packaging.querySelector(".packaging-amount__total span");
  const unitType = packaging.dataset.unitType;
  const unitSize = Number(
    packaging.dataset.unitSize.replace(/\s/g, "")
  );
  const max = Number((_a = counter.dataset.max) != null ? _a : Infinity);
  const min = Number((_b = input.min) != null ? _b : 0);
  const getValue = () => {
    const value = Number(input.value);
    return Number.isNaN(value) ? min : value;
  };
  const format = new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  const updateTotal = () => {
    const count = getValue();
    const rawTotal = count * unitSize;
    const total = Math.round(rawTotal * 100) / 100;
    totalSpan.textContent = `${count} * ${format.format(unitSize)} = ${format.format(total)} ${unitType}`;
  };
  const setValue = (value) => {
    input.value = value;
    syncState();
    updateTotal();
    dispatchChange();
  };
  const clamp = (value) => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
  };
  const syncState = () => {
    const value = getValue();
    minus.disabled = value <= min;
    plus.disabled = value >= max;
  };
  const dispatchChange = () => {
    input.dispatchEvent(
      new CustomEvent("changeCountInItemPage", {
        bubbles: true,
        detail: { value: getValue(), input }
      })
    );
  };
  plus.addEventListener("click", () => {
    const value = clamp(getValue() + 1);
    setValue(value);
  });
  minus.addEventListener("click", () => {
    const value = clamp(getValue() - 1);
    setValue(value);
  });
  input.addEventListener("change", () => {
    const value = clamp(getValue());
    setValue(value);
  });
  setValue(clamp(getValue()));
});


/***/ },

/***/ 6913
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);


const packaging = document.querySelector(".packaging-table");
if (packaging) {
  const type = packaging.querySelector(".packaging-table__type");
  const typeHead = type.querySelector(".packaging-table__type-input");
  const typeItems = type.querySelectorAll(".packaging-table__type-item");
  const typeCounters = packaging.querySelectorAll(".packaging-table__count-item");
  const overlay = packaging.querySelector(".packaging-table__mobile-overlay");
  const typeClose = packaging.querySelector(".packaging-table__mobile-close");
  typeHead.addEventListener("click", () => {
    type.classList.add("packaging-table__type--active");
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingOnBody */ .rP)();
  });
  overlay.addEventListener("click", () => {
    type.classList.remove("packaging-table__type--active");
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
  });
  typeClose.addEventListener("click", () => {
    type.classList.remove("packaging-table__type--active");
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
  });
  typeItems.forEach((typeItem, index) => {
    typeItem.addEventListener("click", () => {
      const activeType = packaging.querySelector(".packaging-table__type-item--active");
      if (activeType) {
        activeType.classList.remove("packaging-table__type-item--active");
      }
      const thList = typeItem.querySelectorAll("th");
      const tdList = typeItem.querySelectorAll("td");
      const cells = [];
      thList.forEach((el, i) => {
        cells.push(`${thList[i].textContent}: ${tdList[i].textContent}`);
      });
      const inputValue = cells.join(", ");
      typeHead.textContent = inputValue;
      typeItem.classList.add("packaging-table__type-item--active");
      type.classList.remove("packaging-table__type--active");
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
      const activeCounter = packaging.querySelector(".packaging-table__count-item--active");
      if (activeCounter) {
        activeCounter.classList.remove("packaging-table__count-item--active");
      }
      typeCounters[index].classList.add("packaging-table__count-item--active");
    });
  });
  const typeCountersItemMobile = document.querySelectorAll(".packaging-table__count-buttons");
  typeCountersItemMobile.forEach((typeCounter) => {
    const plus = typeCounter.querySelector(".packaging-table__count-button--plus");
    const minus = typeCounter.querySelector(".packaging-table__count-button--minus");
    const input = typeCounter.querySelector(".packaging-table__count-input");
    const maxValue = parseInt(typeCounter.dataset.max, 10);
    const getBlockMinus = () => {
      if (input.value <= 0) {
        input.value = 0;
        minus.setAttribute("disabled", "disabled");
      } else {
        minus.removeAttribute("disabled");
      }
    };
    const getBlockPlus = () => {
      if (input.value >= maxValue) {
        input.value = maxValue;
        plus.setAttribute("disabled", "disabled");
      } else {
        plus.removeAttribute("disabled");
      }
    };
    getBlockMinus();
    getBlockPlus();
    const changeCountInMobileItemPageEvent = new CustomEvent("changeCountInMobileItemPage", {
      bubbles: true,
      detail: { input }
    });
    plus.addEventListener("click", () => {
      input.value = parseInt(input.value, 10) + 1;
      minus.removeAttribute("disabled");
      getBlockPlus();
      input.dispatchEvent(changeCountInMobileItemPageEvent);
    });
    minus.addEventListener("click", () => {
      input.value = parseInt(input.value, 10) - 1;
      plus.removeAttribute("disabled");
      getBlockMinus();
      input.dispatchEvent(changeCountInMobileItemPageEvent);
    });
    input.addEventListener("change", (evt) => {
      input.value = evt.target.value;
      getBlockMinus();
      getBlockPlus();
      input.dispatchEvent(changeCountInMobileItemPageEvent);
    });
  });
}


/***/ },

/***/ 4377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1015
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 6165
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1561
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const payment = document.querySelector(".payment");
const changeText = (text) => {
  if (window.innerWidth < 992 && text.textContent === "\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u043E QR \u043A\u043E\u0434\u0443") {
    text.textContent = "\u041E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0421\u0411\u041F";
  } else if (window.innerWidth > 991 && text.textContent === "\u041E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0421\u0411\u041F") {
    text.textContent = "\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u043E QR \u043A\u043E\u0434\u0443";
  }
};
if (payment) {
  const qr = payment.querySelector(".payment__qr");
  if (qr) {
    const text = payment.querySelector(".payment__text");
    changeText(text);
    window.addEventListener("resize", () => {
      changeText(text);
    });
  }
}


/***/ },

/***/ 5569
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9417
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removePopUp: () => (/* binding */ removePopUp),
/* harmony export */   summonPopUp: () => (/* binding */ summonPopUp)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);


const body = document.querySelector("body");
const activePopUps = [];
const summonPopUp = (template, fixer) => {
  const popUpName = template.slice(1);
  const templateContent = document.querySelector(`#${popUpName}`).content.cloneNode(true);
  const popup = templateContent.querySelector(`.${popUpName}`);
  const closes = popup.querySelectorAll(".popUp__close");
  activePopUps.push(popup);
  if (fixer === true) {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingOnBody */ .rP)();
    popup.querySelector(".popUp__overlay").addEventListener("click", () => {
      popup.remove();
      activePopUps.pop();
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
    });
  }
  if (closes.length > 0) {
    closes.forEach((close) => {
      close.addEventListener("click", () => {
        popup.remove();
        activePopUps.pop();
        if (fixer === true) {
          (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
        }
      });
    });
  }
  body.append(templateContent);
};
const removePopUp = (template, fixer) => {
  const templateContent = document.querySelector(`${template}`);
  if (fixer === true) {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
  }
  templateContent.remove();
};
document.addEventListener("keydown", (evt) => {
  if (evt.code === "Escape") {
    const lastActivePopUp = activePopUps.pop();
    if (lastActivePopUp !== void 0) {
      lastActivePopUp.remove();
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
    }
  }
});



/***/ },

/***/ 5169
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9025
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8133
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7473
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8521
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8085
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9027
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7933
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 6129
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3217
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 6657
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const tabs = document.querySelectorAll(".product__nav-item");
const tabsContainer = document.querySelectorAll(".product__block");
const request = document.querySelector(".RequestProductProvider");
tabs.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const activeTab = document.querySelector(".product__nav-item--active");
    const activeTabContainer = document.querySelector(".product__block--active");
    if (!btn.classList.contains("product__nav-item--active")) {
      activeTab.classList.remove("product__nav-item--active");
      activeTabContainer.classList.remove("product__block--active");
      btn.classList.add("product__nav-item--active");
      tabsContainer[index].classList.add("product__block--active");
    }
    if (btn.textContent === "\u0412\u043E\u043F\u0440\u043E\u0441\u044B") {
      request.classList.remove("RequestProductProvider--hidden");
    } else {
      request.classList.add("RequestProductProvider--hidden");
    }
  });
});


/***/ },

/***/ 2775
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5880);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6575);



gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u);
const columns = document.querySelectorAll(".products__item");
const translateY = [60, -50, 20, 70, -40];
columns.forEach((column, i) => {
  const translate = translateY[i];
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.saveStyles(column);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.matchMedia({
    // desktop
    "(min-width: 992px)": function() {
      gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.to(column, {
        scrollTrigger: {
          trigger: column,
          start: "top bottom",
          end: "80% top",
          scrub: 2
        },
        y: translate
      });
    },
    // mobile
    "(max-width: 767px)": function() {
    },
    // all
    all() {
    }
  });
});


/***/ },

/***/ 4817
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);


const initProfileSelect = (func) => {
  const select = document.querySelector(".profile-center__select");
  let choicesNolint;
  if (select) {
    choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
      searchEnabled: false,
      itemSelectText: "",
      shouldSort: false,
      classNames: {
        containerOuter: "choices profile-center__choices"
      }
    });
    select.addEventListener("addItem", (event) => {
      func(event);
    });
  }
  return choicesNolint;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initProfileSelect);


/***/ },

/***/ 1053
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const profileNav = document.querySelector(".profile-nav");
if (profileNav) {
  const toggle = profileNav.querySelector(".profile-nav__toggle");
  document.addEventListener("click", (evt) => {
    if (evt.target === toggle) {
      profileNav.classList.toggle("profile-nav--active");
    } else {
      profileNav.classList.remove("profile-nav--active");
    }
  });
}


/***/ },

/***/ 7349
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const profilePage = document.querySelector(".profile-page");
if (profilePage) {
  const profileTop = profilePage.querySelector(".profile-page__top");
  const addOrganization = document.querySelector("#add-organization");
  if (addOrganization) {
    profileTop.classList.add("profile-page__top--hidden");
  }
}


/***/ },

/***/ 5265
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9575
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2945
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3385);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7083);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8832);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3484);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2890);



const doubleSlider = document.querySelector(".promo");
if (doubleSlider) {
  const swiperNavNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(".promo__names-slider", {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A],
    loop: true,
    allowTouchMove: false,
    // spaceBetween: 50,
    slidesPerView: "auto",
    watchSlidesProgress: true,
    slideActiveClass: "promo__names-item--active",
    // If we need navigation
    navigation: {
      prevEl: ".promo__pictures-button--prev",
      nextEl: ".promo__pictures-button--next"
    }
    // Responsive breakpoints
    // breakpoints: {
    //   320: {
    //     spaceBetween: 10,
    //   },
    //   767: {
    //     spaceBetween: 10,
    //   },
    //   768: {
    //     spaceBetween: 50,
    //   },
    // },
  });
  const doubleSliderDesktopNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(".promo__pictures-slider", {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A],
    allowTouchMove: false,
    loop: true,
    slideActiveClass: "promo__pictures-item--active",
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5e3,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
      // reverseDirection: true,
    },
    // If we need navigation
    navigation: {
      prevEl: ".promo__pictures-button--prev",
      nextEl: ".promo__pictures-button--next"
    },
    thumbs: {
      swiper: swiperNavNolint
    }
  });
}
const noiseCanvas = document.querySelector(".promo__noise-canvas");
if (noiseCanvas) {
  const patternSize = 150;
  const patternScaleX = 1;
  const patternScaleY = 1;
  const canvas = document.querySelector(".promo__noise-canvas");
  const ctx = canvas.getContext("2d");
  ctx.scale(patternScaleX, patternScaleY);
  const patternCanvas = document.createElement("canvas");
  patternCanvas.width = patternSize;
  patternCanvas.height = patternSize;
  const patternCtx = patternCanvas.getContext("2d");
  const patternData = patternCtx.createImageData(patternSize, patternSize);
  const patternPixelDataLength = patternSize * patternSize * 8;
  const resize = () => {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
  };
  resize();
  window.addEventListener("resize", resize);
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = ctx.createPattern(patternCanvas, "repeat");
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
  const update = () => {
    for (let i = 0; i < patternPixelDataLength; i += 4) {
      const color = Math.random() * 255;
      patternData.data[i] = color;
      patternData.data[i + 1] = color;
      patternData.data[i + 2] = color;
      patternData.data[i + 3] = 255;
    }
    patternCtx.putImageData(patternData, 0, 0);
  };
  const render = () => {
    update();
    draw();
    requestAnimationFrame(render);
  };
  render();
}


/***/ },

/***/ 1006
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removePromotionAlert: () => (/* binding */ removePromotionAlert),
/* harmony export */   summonPromotionAlert: () => (/* binding */ summonPromotionAlert)
/* harmony export */ });

const body = document.querySelector(".alert-wrapper");
const removePromotionAlert = (template) => {
  const templateContent = document.querySelector(`${template}`);
  templateContent.remove();
};
const summonPromotionAlert = (template) => {
  const alertName = template.slice(1);
  const templateContent = document.querySelector(`#${alertName}`).content.cloneNode(true);
  const alert = templateContent.querySelector(`.${alertName}`);
  const close = alert.querySelector(".promotion-alert__close");
  const closeAlert = () => {
    alert.remove();
  };
  if (close) {
    close.addEventListener("click", () => {
      closeAlert();
    });
  }
  body.append(templateContent);
  alert.classList.add("promotion-alert--bounce");
};



/***/ },

/***/ 5279
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3598
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var qr_code_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7283);
/* harmony import */ var qr_code_styling__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qr_code_styling__WEBPACK_IMPORTED_MODULE_0__);


const codes = document.querySelectorAll(".qr-code");
codes.forEach((code) => {
  const a = code.querySelector("a");
  const img = code.querySelector("img");
  const wrapper = code.querySelector(".qr-code__wrapper");
  if (a && img && wrapper) {
    const { href } = a;
    const { src } = img;
    a.remove();
    img.remove();
    const qr = new (qr_code_styling__WEBPACK_IMPORTED_MODULE_0___default())({
      width: 250,
      height: 250,
      data: href,
      image: src,
      dotsOptions: { color: "#000000", type: "square" },
      backgroundOptions: { color: "#ffffff" },
      imageOptions: { crossOrigin: "anonymous", margin: 5, imageSize: 0.3 }
    });
    qr.append(wrapper);
  }
});


/***/ },

/***/ 2069
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3385);



const questionSliderInit = () => {
  const questions = document.querySelectorAll(".question-card");
  questions.forEach((question, i) => {
    if (!question.classList.contains("question-card--js")) {
      question.classList.add("question-card--js");
      question.id = `question-card-${i}`;
      const id = `question-card-${i}`;
      const slider = question.querySelector(".question-card__slider .swiper");
      const questionSliderNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(slider, {
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A],
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: false,
        // If we need navigation
        navigation: {
          nextEl: `#${id} .question-card__slider-button--next`,
          prevEl: `#${id} .question-card__slider-button--prev`,
          disabledClass: "question-card__slider-button--disabled"
        }
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questionSliderInit);


/***/ },

/***/ 4227
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2503
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4489);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3670);



const search = document.querySelector(".search");
if (search) {
  const headerSearch = document.querySelector(".header__search");
  const searchInput = search.querySelector(".search__input");
  const searchClear = search.querySelector(".search__clear");
  searchInput.addEventListener("input", () => {
    if (searchInput.value !== "") {
      searchClear.classList.add("search__clear--active");
    } else {
      searchClear.classList.remove("search__clear--active");
    }
  });
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchClear.classList.remove("search__clear--active");
  });
  searchInput.addEventListener("focus", () => {
    if (window.innerWidth > 991) {
      search.classList.add("search--active");
    } else {
      headerSearch.classList.add("header__search--active");
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingOnBody */ .rP)();
      setTimeout(() => {
        searchInput.focus();
      }, 100);
    }
  });
  searchInput.addEventListener("focusout", () => {
    search.classList.remove("search--active");
  });
}
if (search) {
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm)(".search__form ");
}


/***/ },

/***/ 4961
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const selectCityInit = () => {
  const selectCity = document.querySelector(".select-city");
  if (selectCity) {
    const geolocationText = document.querySelector(".header__geolocation-text");
    const geolocationTextMobile = document.querySelector(".mobile-nav__geolocation-text");
    const list = selectCity.querySelector(".select-city__list");
    const items = list.children;
    const inputCity = selectCity.querySelector(".select-city__input");
    inputCity.addEventListener("input", () => {
      const value = inputCity.value.toLowerCase();
      for (let i = 0; i < items.length; i += 1) {
        const name = items[i].querySelector("span").textContent.toLowerCase();
        if (name.includes(value)) {
          items[i].classList.remove("select-city__item--hidden");
        } else {
          items[i].classList.add("select-city__item--hidden");
        }
      }
    });
    const changeCityEvent = new CustomEvent("changeCity", {
      bubbles: true,
      detail: { geolocationText }
    });
    for (let i = 0; i < items.length; i += 1) {
      items[i].addEventListener("click", (evt) => {
        evt.preventDefault();
        geolocationText.textContent = items[i].querySelector("span").textContent;
        geolocationTextMobile.textContent = items[i].querySelector("span").textContent;
        window.Corners5ProjectLayout.removePopUp(".modal--city", true);
        geolocationText.dispatchEvent(changeCityEvent);
      });
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectCityInit);


/***/ },

/***/ 569
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8043
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1335
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5273
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const shares = document.querySelectorAll(".share");
shares.forEach((share) => {
  const copyButton = share.querySelector(".share__link--copy");
  const message = share.querySelector(".share__message");
  const showMessage = () => {
    message.classList.add("share__message--active");
    setTimeout(() => {
      message.classList.remove("share__message--active");
    }, 3e3);
  };
  copyButton.onclick = () => {
    const link = window.location.href;
    const textarea = document.createElement("textarea");
    textarea.value = link;
    copyButton.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showMessage();
  };
});


/***/ },

/***/ 5141
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const storagesInfo = document.querySelector(".sidebar-nav");
if (storagesInfo) {
  const toggle = storagesInfo.querySelector(".sidebar-nav__header");
  document.addEventListener("click", (evt) => {
    if (window.innerWidth < 992) {
      if (evt.target === toggle) {
        storagesInfo.classList.toggle("sidebar-nav--active");
      } else {
        storagesInfo.classList.remove("sidebar-nav--active");
      }
    }
  });
}


/***/ },

/***/ 8761
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4741
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7477
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1660);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4489);



const subscribeForm = document.querySelector(".subscribe__form");
if (subscribeForm) {
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_1__.validateForm)(".subscribe__form");
}


/***/ },

/***/ 5573
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7955
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3519
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2961
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9469
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4385
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 61
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 281
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9244);


(0,tippy_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)("[data-tippy-content]", {
  allowHTML: true,
  arrow: false,
  maxWidth: 287,
  animation: "scale-subtle"
});


/***/ },

/***/ 1729
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const sort = document.querySelector(".top-filters__sort");
if (sort) {
  sort.querySelectorAll(".top-filters__sort-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("top-filters__sort-button--active")) {
        btn.classList.toggle("top-filters__sort-button--low");
      } else {
        sort.querySelectorAll(".top-filters__sort-button--active").forEach((el) => {
          el.classList.remove("top-filters__sort-button--active");
        });
        sort.querySelectorAll(".top-filters__sort-button--low").forEach((el) => {
          el.classList.remove("top-filters__sort-button--low");
        });
        btn.classList.add("top-filters__sort-button--active");
      }
    });
  });
}
const view = document.querySelector(".top-filters__view");
if (view) {
  const rowViewButton = document.querySelector(".top-filters__view-button--row-view");
  const tileViewButton = document.querySelector(".top-filters__view-button--tile-view");
  const catalogList = document.querySelector(".catalog__list");
  rowViewButton.addEventListener("click", () => {
    rowViewButton.classList.add("top-filters__view-button--active");
    tileViewButton.classList.remove("top-filters__view-button--active");
    catalogList.classList.add("catalog__list--row");
  });
  tileViewButton.addEventListener("click", () => {
    rowViewButton.classList.remove("top-filters__view-button--active");
    tileViewButton.classList.add("top-filters__view-button--active");
    catalogList.classList.remove("catalog__list--row");
  });
}


/***/ },

/***/ 5057
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const up = document.querySelector(".up");
const scrollableHeight = 300;
const changeTextHeight = document.documentElement.clientHeight;
if (up) {
  let scrollChecker;
  const textContainer = up.querySelector(".up__text");
  up.addEventListener("click", () => {
    window.scroll(0, 0);
  });
  if (window.innerWidth < 768) {
    textContainer.textContent = "\u041D\u0430\u0432\u0435\u0440\u0445";
  }
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= scrollableHeight) {
      up.classList.add("up--visible");
    } else {
      up.classList.remove("up--visible");
    }
    if (window.pageYOffset >= changeTextHeight && window.innerWidth > 767 && !scrollChecker) {
      textContainer.textContent = "\u2190 \u041D\u0430\u0432\u0435\u0440\u0445";
      scrollChecker = true;
    } else if (window.pageYOffset < changeTextHeight && window.innerWidth > 767 && scrollChecker) {
      textContainer.textContent = "\u0421\u043A\u0440\u043E\u043B\u043B";
      scrollChecker = false;
    }
  });
  window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = winScroll / height * 100;
    document.querySelector(".up__progress-bar").style.height = `${scrolled}%`;
  });
}


/***/ },

/***/ 4489
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusFirstInput: () => (/* binding */ focusFirstInput),
/* harmony export */   initAgreeCheckbox: () => (/* binding */ initAgreeCheckbox),
/* harmony export */   initChoicesValidation: () => (/* binding */ initChoicesValidation),
/* harmony export */   initFileLoadInput: () => (/* binding */ initFileLoadInput),
/* harmony export */   initPasswordEye: () => (/* binding */ initPasswordEye),
/* harmony export */   initSelectValidation: () => (/* binding */ initSelectValidation),
/* harmony export */   maskInternationalPhone: () => (/* binding */ maskInternationalPhone),
/* harmony export */   maskNumber: () => (/* binding */ maskNumber),
/* harmony export */   maskPhone: () => (/* binding */ maskPhone),
/* harmony export */   maskSimplePhone: () => (/* binding */ maskSimplePhone),
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1660);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4891);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formbouncerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_2__);





const validateForm = (form) => {
  const forma = document.querySelector(`${form}`);
  let validator = new (formbouncerjs__WEBPACK_IMPORTED_MODULE_1___default())(form, {
    fieldClass: "validator__input--error",
    errorClass: "validator__error",
    disableSubmit: true,
    emitEvents: true,
    // messageAfterField: false,
    customValidations: {
      required(field) {
        const selector = field.classList.contains("validator__required");
        if (!selector) return false;
        const description = field.parentElement.querySelector(".validator__description");
        const cuttedSpacesValue = field.value.replace(/\s\s+/g, " ");
        const trimmedValue = cuttedSpacesValue.trim();
        field.value = trimmedValue;
        if (field.value !== "") {
          field.classList.add("validator__input--valid");
          description.classList.remove("validator__description--error");
          description.classList.add("validator__description--valid");
          return false;
        }
        field.classList.remove("validator__input--valid");
        description.classList.add("validator__description--error");
        description.classList.remove("validator__description--valid");
        return true;
      },
      text(field) {
        const selector = field.classList.contains("validator__text");
        if (!selector) return false;
        const description = field.parentElement.querySelector(".validator__description");
        const cuttedSpacesValue = field.value.replace(/\s\s+/g, " ");
        const trimmedValue = cuttedSpacesValue.trim();
        field.value = trimmedValue;
        const textRegexp = new RegExp(/^([a-zA-ZА-Яа-яЁё.-]+\s?)*$/);
        if (field.value.match(textRegexp) && field.value.length >= 2 && field.value.length <= 225) {
          field.classList.add("validator__input--valid");
          description.classList.remove("validator__description--error");
          description.classList.add("validator__description--valid");
          return false;
        }
        field.classList.remove("validator__input--valid");
        description.classList.add("validator__description--error");
        description.classList.remove("validator__description--valid");
        return true;
      },
      textarea(field) {
        const selector = field.classList.contains("validator__textarea");
        if (!selector) return false;
        const description = field.parentElement.querySelector(".validator__description");
        const cuttedSpacesValue = field.value.replace(/\s\s+/g, " ");
        const trimmedValue = cuttedSpacesValue.trim();
        field.value = trimmedValue;
        const textRegexp = new RegExp(/^([a-zA-ZА-Яа-яЁё0-9-!$%^&amp;*()_+|~=`{}[\]:;;&lt;&gt;?",.@#№'&quot;„;“;“;”;‘;’;(?!…)«;»;/|/\\/]+\s?)*$/);
        if (field.value.match(textRegexp) && field.value.length >= 4 && field.value.length <= 225) {
          field.classList.add("validator__input--valid");
          description.classList.remove("validator__description--error");
          description.classList.add("validator__description--valid");
          return false;
        }
        field.classList.remove("validator__input--valid");
        description.classList.add("validator__description--error");
        description.classList.remove("validator__description--valid");
        return true;
      },
      select(field) {
        const selector = field.classList.contains("validator__select");
        if (!selector) return false;
        if (field.options[field.selectedIndex].value !== "") {
          field.parentElement.classList.remove("validator__input--error");
          return false;
        }
        field.parentElement.classList.add("validator__input--error");
        return true;
      },
      choices(field) {
        const selector = field.classList.contains("validator__choices");
        if (!selector) return false;
        const description = field.parentElement.parentElement.parentElement.querySelector(".validator__description");
        const select = field.parentElement;
        if (field.options[field.selectedIndex].value !== "") {
          select.classList.remove("validator__input--error");
          description.classList.remove("validator__description--error");
          description.classList.add("validator__description--valid");
          return false;
        }
        select.classList.add("validator__input--error");
        description.classList.add("validator__description--error");
        description.classList.remove("validator__description--valid");
        return true;
      },
      number(field) {
        const selector = field.classList.contains("validator__number");
        if (!selector) return false;
        const description = field.parentElement.querySelector(".validator__description");
        if (field.value.length >= 1 && field.value.length <= 225) {
          field.classList.add("validator__input--valid");
          description.classList.remove("validator__description--error");
          description.classList.add("validator__description--valid");
          return false;
        }
        field.classList.remove("validator__input--valid");
        description.classList.add("validator__description--error");
        description.classList.remove("validator__description--valid");
        return true;
      },
      minmax(field) {
        const selector = field.classList.contains("validator__minmax");
        const min = field.getAttribute("minlength");
        const max = field.getAttribute("minlength");
        if (!selector) return false;
        const description = field.parentElement.querySelector(".validator__description");
        if (field.value.length >= min && field.value.length <= max) {
          field.classList.add("validator__input--valid");
          description.classList.remove("validator__description--error");
          description.classList.add("validator__description--valid");
          return false;
        }
        field.classList.remove("validator__input--valid");
        description.classList.add("validator__description--error");
        description.classList.remove("validator__description--valid");
        return true;
      },
      email(field) {
        const selector = field.classList.contains("validator__mail");
        if (!selector) return false;
        const description = field.parentElement.querySelector(".validator__description");
        const trimmedValue = field.value.trim();
        field.value = "";
        field.value = trimmedValue;
        const regexp = new RegExp(/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/);
        if (field.value.match(regexp)) {
          field.classList.add("validator__input--valid");
          description.classList.remove("validator__description--error");
          description.classList.add("validator__description--valid");
          return false;
        }
        field.classList.remove("validator__input--valid");
        description.classList.add("validator__description--error");
        description.classList.remove("validator__description--valid");
        return true;
      },
      ruPhone(field) {
        const selector = field.classList.contains("validator__phone");
        if (!selector) return false;
        const description = field.parentElement.querySelector(".validator__description");
        if (field.value.length === 10) {
          field.classList.add("validator__input--valid");
          description.classList.remove("validator__description--error");
          description.classList.add("validator__description--valid");
          return false;
        }
        field.classList.remove("validator__input--valid");
        description.classList.add("validator__description--error");
        description.classList.remove("validator__description--valid");
        return true;
      },
      intPhone(field) {
        const selector = field.classList.contains("validator__country-phone");
        if (!selector) return false;
        const description = field.parentElement.querySelector(".validator__description");
        if (field.value.length === field.getAttribute("data-mask").length) {
          field.classList.add("validator__input--valid");
          description.classList.remove("validator__description--error");
          description.classList.add("validator__description--valid");
          return false;
        }
        field.classList.remove("validator__input--valid");
        description.classList.add("validator__description--error");
        description.classList.remove("validator__description--valid");
        return true;
      },
      password(field) {
        const selector = field.classList.contains("validator__password");
        if (!selector) return false;
        const description = field.parentElement.querySelector(".validator__description");
        field.value.replace(/\s/g, "");
        if (field.value.length >= 6 && field.value.length <= 225) {
          field.classList.add("validator__input--valid");
          description.classList.remove("validator__description--error");
          description.classList.add("validator__description--valid");
          return false;
        }
        field.classList.remove("validator__input--valid");
        description.classList.add("validator__description--error");
        description.classList.remove("validator__description--valid");
        return true;
      },
      passwordMatch(field) {
        const selector = field.getAttribute("data-bouncer-match");
        if (!selector) return false;
        field.value = field.value.replace(/\s/g, "");
        const otherField = field.form.querySelector(selector);
        if (!otherField) return false;
        return otherField.value !== field.value;
      }
    },
    messages: {
      missingValue: {
        default: "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F!"
      },
      patternMismatch: {
        default: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u043D\u0435 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u044F\u0435\u0442 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C!"
      },
      wrongLength: {
        over: "wrongLength over",
        under: "wrongLength under"
      },
      outOfRange: {
        over: "outOfRange over",
        under: "outOfRange under"
      },
      text: "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E!",
      textarea: "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E!",
      number: "\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B!",
      ruPhone: "\u0412\u0432\u0435\u0434\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D!",
      intPhone: "\u0412\u044B\u0431\u0435\u0440\u0438 \u0438 \u0432\u0432\u0435\u0434\u0438 \u043C\u0435\u0436\u0434\u043E\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D!",
      password: "\u041C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
      passwordMatch: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u0435\u0439 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442!"
    }
  });
  forma.addEventListener("reset", () => {
    validator.destroy();
    validator = validateForm(form);
    forma.querySelectorAll(".validator__description").forEach((description) => {
      description.classList.remove("validator__description--error");
      description.classList.remove("validator__description--valid");
    });
    forma.querySelectorAll(".validator__input--valid").forEach((input) => {
      input.classList.remove("validator__input--valid");
    });
    forma.querySelectorAll(".validator__input--error").forEach((input) => {
      input.classList.remove("validator__input--error");
    });
  }, { once: true });
  return validator;
};
const maskNumber = (form, maxNumber) => {
  const numberMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())(`9{0,${maxNumber}}`, {
    autoUnmask: true,
    showMaskOnHover: false
  });
  const inputsContainer = document.querySelector(`${form}`);
  const inputs = inputsContainer.querySelectorAll(".validator__number");
  inputs.forEach((field) => {
    numberMask.mask(field);
  });
};
const maskSimplePhone = (form) => {
  const mask = function() {
    let matrix = "+7 (___) ___ ____", i = 0, def = matrix.replace(/\D/g, ""), val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
  };
  const phonesContainer = document.querySelector(`${form}`);
  const inputs = phonesContainer.querySelectorAll(".validator__simple-phone");
  inputs.forEach((phone) => {
    phone.addEventListener("input", mask);
  });
};
const maskPhone = (form) => {
  const phoneMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())("+7 [(999) 999-99-99]", {
    autoUnmask: true,
    showMaskOnHover: false
  });
  const phonesContainer = document.querySelector(`${form}`);
  const inputs = phonesContainer.querySelectorAll(".validator__phone");
  inputs.forEach((phone) => {
    phoneMask.mask(phone);
  });
};
const maskInternationalPhone = (form) => {
  const hashContainer = document.querySelector(`${form}`);
  const countryPhone = hashContainer.querySelector(".validator__country-phone");
  const firstPhoneMask = hashContainer.querySelector(".validator__country-mask").getAttribute("data-mask");
  countryPhone.setAttribute("data-mask", firstPhoneMask.replace(/[^9]/g, ""));
  let phoneMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())(firstPhoneMask, {
    autoUnmask: true
  });
  phoneMask.mask(countryPhone);
  const options = [];
  const optionsData = hashContainer.querySelectorAll(".validator__country-mask");
  optionsData.forEach((option, index) => {
    options.push({
      value: option.getAttribute("data-value"),
      label: option.getAttribute("data-country"),
      id: index + 1,
      customProperties: {
        mask: option.getAttribute("data-mask"),
        flag: option.getAttribute("data-flag")
      }
    });
  });
  const choicesSelect = hashContainer.querySelector(".validator__country-select");
  const choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_2___default())(choicesSelect, {
    searchEnabled: false,
    itemSelectText: "",
    shouldSort: false,
    choices: options,
    // searchEnabled: true,
    classNames: {
      containerOuter: "choices validator__countries"
    },
    callbackOnCreateTemplates(template) {
      return {
        item(classNames, data) {
          return template(`
            <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable} 
            ${data.placeholder ? classNames.placeholder : ""}" 
            data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ""} 
            ${data.disabled ? 'aria-disabled="true"' : ""}> 
            <p class='choices__flag' style='background-image: url(${options[data.choiceId - 1].customProperties.flag})'></p>
            ${data.label}
            </div>
          `);
        },
        choice(classNames, data) {
          return template(`
            <div class="${classNames.item} ${classNames.itemChoice} 
            ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}"
            data-select-text="${this.config.itemSelectText}" data-choice 
            ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable"} 
            data-id="${data.id}" data-value="${data.value}" 
            ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
            <p class='choices__flag' style='background-image: url(${options[data.id - 1].customProperties.flag})'></p>
            ${data.label}
            </div>
          `);
        }
      };
    }
  });
  choicesSelect.addEventListener("choice", (evt) => {
    countryPhone.setAttribute("data-mask", evt.detail.choice.customProperties.mask.replace(/[^9]/g, ""));
    countryPhone.inputmask.remove();
    countryPhone.value = "";
    countryPhone.focus();
    countryPhone.blur();
    phoneMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())(evt.detail.choice.customProperties.mask, {
      autoUnmask: true
    });
    phoneMask.mask(countryPhone);
  });
};
const initPasswordEye = (form) => {
  const eyeContainer = document.querySelector(`${form}`);
  const eyes = eyeContainer.querySelectorAll(".validator__eye");
  const passwords = eyeContainer.querySelectorAll(".validator__password");
  eyes.forEach((eye, index) => {
    eye.addEventListener("click", () => {
      eye.classList.toggle("validator__eye--open");
      if (passwords[index].type === "password") {
        passwords[index].type = "text";
      } else {
        passwords[index].type = "password";
      }
    });
  });
};
const initFileLoadInput = (form, template) => {
  const FILE_TYPES = ["jpg", "jpeg", "gif", "png"];
  const filesForm = document.querySelector(`${form}`);
  const filesContainer = filesForm.querySelector(".validator__file-container");
  const loadInput = filesContainer.querySelector(".validator__file-input");
  const sizeWarning = filesContainer.querySelector(".validator__size-warning");
  const loadedFilesContainer = filesForm.querySelector(".validator__loaded-files");
  const cleaner = filesForm.querySelector(".validator__cleaner");
  const submitButton = filesForm.querySelector('button[type="submit"]');
  cleaner.style.display = "none";
  filesForm.addEventListener("reset", () => {
    filesContainer.innerHTML = "";
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = "";
    initFileLoadInput(`${form}`, template);
  }, { once: true });
  cleaner.addEventListener("click", () => {
    filesContainer.innerHTML = "";
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = "";
    initFileLoadInput(`${form}`, template);
    submitButton.classList.remove("validator__submit--disabled");
    submitButton.disabled = false;
  });
  loadInput.addEventListener("change", () => {
    const files = Object.values(loadInput.files);
    loadedFilesContainer.innerHTML = "";
    let totalSize = 0;
    files.forEach((file) => {
      totalSize += file.size;
    });
    if (totalSize > 0) {
      cleaner.style.display = "grid";
    } else {
      cleaner.style.display = "none";
    }
    for (let i = 0; i < files.length; i += 1) {
      const fileName = files[i].name.toLowerCase();
      if (!FILE_TYPES.some((type) => fileName.endsWith(type))) {
        submitButton.classList.add("validator__submit--disabled");
        submitButton.disabled = true;
        sizeWarning.classList.add("validator__size-warning--exeeded");
        sizeWarning.textContent = "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0442\u0438\u043F \u0444\u0430\u0439\u043B\u043E\u0432!";
        return;
      }
    }
    if (totalSize < 10485760 && files.length <= 3) {
      sizeWarning.classList.remove("validator__size-warning--exeeded");
      sizeWarning.textContent = "\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 3-\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 .jpeg, .gif, .png. \u0420\u0430\u0437\u043C\u0435\u0440 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10 MB.";
      files.forEach((file) => {
        let str = file.size;
        str = str.toString();
        str = Math.ceil(str / 1024);
        const fileTemplate = `
          <div class="validator__file">
            <p class="validator__file-name">${file.name}</p>
            <p class='validator__size'>${str}&nbsp;\u041A\u0411</p>
          </div>
          `;
        loadedFilesContainer.insertAdjacentHTML("beforeend", fileTemplate);
      });
      submitButton.classList.remove("validator__submit--disabled");
      submitButton.disabled = false;
    } else if (totalSize > 10241440) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      sizeWarning.classList.add("validator__size-warning--exeeded");
      sizeWarning.textContent = "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u043E\u0432 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 10 \u041C\u0411!";
    } else if (files.length > 3) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      sizeWarning.classList.add("validator__size-warning--exeeded");
      sizeWarning.textContent = "\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D \u043B\u0438\u043C\u0438\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0444\u0430\u0439\u043B\u043E\u0432!";
    }
  });
};
const initSelectValidation = (form) => {
  const formContainer = document.querySelector(`${form}`);
  const nativeSelects = formContainer.querySelectorAll(".validator__select");
  nativeSelects.forEach((select) => {
    select.addEventListener("change", () => {
      if (select.parentElement.classList.contains("validator__input--error")) {
        select.parentElement.classList.remove("validator__input--error");
      }
    });
  });
};
const initChoicesValidation = (form) => {
  const formContainer = document.querySelector(`${form}`);
  const nativeSelects = formContainer.querySelectorAll(".validator__choices");
  nativeSelects.forEach((select) => {
    const field = select.parentElement.parentElement.parentElement;
    const description = field.querySelector(".validator__description");
    const customSelect = field.querySelector(".choices__inner");
    select.addEventListener("change", () => {
      if (customSelect.classList.contains("validator__input--error")) {
        customSelect.classList.remove("validator__input--error");
        description.classList.remove("validator__description--error");
      }
    });
  });
};
const focusFirstInput = (form) => {
  const formContainer = document.querySelector(`${form}`);
  const input = formContainer.querySelector("input");
  input.focus();
};
const initAgreeCheckbox = (form) => {
  const checkboxContainer = document.querySelector(`${form}`);
  const checkboxLabel = checkboxContainer.querySelector(".validator__legal");
  const checkbox = checkboxContainer.querySelector(".validator__agree");
  const submitButton = checkboxContainer.querySelector('button[type="submit"]');
  checkboxLabel.addEventListener("click", () => {
    const isExeeded = checkboxContainer.querySelector(".validator__size-warning--exeeded");
    if (isExeeded) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      if (checkbox.checked === true) {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
    } else if (checkbox.checked === true) {
      submitButton.classList.add("validator__submit--disabled");
      submitButton.disabled = true;
      checkbox.setAttribute("checked", false);
    } else {
      submitButton.classList.remove("validator__submit--disabled");
      submitButton.disabled = false;
      checkbox.setAttribute("checked", true);
    }
  });
};



/***/ },

/***/ 2305
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const generateURL = (id) => {
  const query = "?rel=0&showinfo=0&autoplay=1";
  return `https://www.youtube.com/embed/${id}${query}`;
};
const createIframe = (id) => {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("video__media");
  return iframe;
};
const parseMediaURL = (video) => {
  const regexp = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/i;
  const url = video.href;
  const match = url.match(regexp);
  return match[1];
};
const setupVideo = (video) => {
  const link = video.querySelector(".video__link");
  const button = video.querySelector(".video__button");
  const source = video.querySelector("source");
  const media = video.querySelector(".video__media");
  const id = parseMediaURL(link);
  source.setAttribute("srcset", `https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`);
  media.setAttribute("src", `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  video.addEventListener("click", () => {
    const iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
  link.removeAttribute("href");
  video.classList.add("video--enabled");
};
const findVideos = () => {
  document.querySelectorAll(".video__wrapper").forEach((el) => {
    setupVideo(el);
  });
};
findVideos();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findVideos);


/***/ },

/***/ 8641
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3385);



const warehousesMapInit = (data) => {
  const map = document.querySelector(".warehouses-map");
  if (map) {
    const body = document.querySelector("body");
    const citiesContainer = map.querySelector(".warehouses-map__cities");
    const stores = map.querySelectorAll("[data-code]");
    let citiesSlider;
    const hint = document.createElement("div");
    hint.classList.add("warehouses-map__hint");
    const newData = data.filter((elem) => elem.cities);
    let allCities = [];
    newData.forEach((el) => {
      const store = map.querySelector(`[data-code="${el.code}"]`);
      if (store) {
        store.setAttribute("data-region", el.title);
        allCities = [...allCities, ...el.cities];
        const cities = el.cities.join(", ");
        store.setAttribute("data-cities", cities);
      }
    });
    const clearRegion = () => {
      const activeRegions = map.querySelectorAll(".active");
      activeRegions.forEach((activeRegion) => {
        activeRegion.classList.remove("active");
      });
    };
    const clearCitiesList = () => {
      document.querySelector(".warehouses-map__cities").textContent = "";
      if (citiesSlider) {
        citiesSlider.destroy();
        citiesSlider = void 0;
      }
      clearRegion();
    };
    const citiesSliderInit = (info) => {
      const sliderContainer = '<div class="swiper warehouses-map__slider"><div class="swiper-wrapper warehouses-map__list"></div></div><div class="warehouses-map__slider-footer"><button class="warehouses-map__slider-button warehouses-map__slider-button--prev" type="button" aria-label="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0441\u043B\u0430\u0439\u0434.">\u2190</button><button class="warehouses-map__slider-button warehouses-map__slider-button--next" type="button" aria-label="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0441\u043B\u0430\u0439\u0434.">\u2192</button><button class="warehouses-map__slider-reset" type="button" aria-label="\u0412\u0441\u0435 \u0433\u043E\u0440\u043E\u0434\u0430."><svg><use href="#icon-update"></use></svg><span>\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0433\u043E\u0440\u043E\u0434\u0430</span></button></div>';
      if (info.length > 0) {
        citiesContainer.innerHTML = sliderContainer;
        let citiesOnSlide = 7;
        if (window.innerWidth < 1261) {
          citiesOnSlide = 4;
        }
        window.addEventListener("resize", () => {
          if (window.innerWidth < 1261) {
            citiesOnSlide = 4;
          }
        });
        const totalSlides = Math.ceil(info.length / citiesOnSlide);
        for (let i = 0; i < totalSlides; i += 1) {
          const start = i * citiesOnSlide;
          const end = start + citiesOnSlide;
          const names = info.slice(start, end);
          const swiperSlide = document.createElement("div");
          swiperSlide.classList.add("swiper-slide", "warehouses-map__item");
          for (let j = 0; j < names.length; j += 1) {
            const item = document.createElement("div");
            item.classList.add("warehouses-map__city");
            item.textContent = names[j];
            swiperSlide.appendChild(item);
          }
          map.querySelector(".warehouses-map__list").appendChild(swiperSlide);
        }
        citiesSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(".warehouses-map__slider", {
          modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A],
          slidesPerView: 2,
          spaceBetween: 10,
          loop: false,
          // Navigation arrows
          navigation: {
            prevEl: ".warehouses-map__slider-button--prev",
            nextEl: ".warehouses-map__slider-button--next",
            disabledClass: "warehouses-map__slider-button--disabled"
          }
        });
        const resetButton = map.querySelector(".warehouses-map__slider-reset");
        resetButton.addEventListener("click", (evt) => {
          clearCitiesList();
          citiesSliderInit(allCities);
        });
      }
    };
    clearCitiesList();
    citiesSliderInit(allCities);
    stores.forEach((store) => {
      store.addEventListener("mouseenter", () => {
        if (store.dataset.region) {
          hint.textContent = store.dataset.region;
        } else {
          hint.textContent = "\u0421\u043A\u043E\u0440\u043E";
        }
        const left = store.getBoundingClientRect().left + store.getBoundingClientRect().width / 2;
        const top = store.getBoundingClientRect().top + store.getBoundingClientRect().height / 2;
        hint.style.top = `${top}px`;
        hint.style.left = `${left}px`;
        body.appendChild(hint);
      });
      store.addEventListener("mouseleave", () => {
        hint.remove();
      });
      store.addEventListener("click", () => {
        if (store.dataset.region) {
          clearCitiesList();
          const list = store.dataset.cities.split(",");
          citiesSliderInit(list);
          store.classList.add("active");
        }
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warehousesMapInit);


/***/ },

/***/ 2095
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1161
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3385);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7083);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5639);



const watched = document.querySelectorAll(".watched");
if (watched) {
  const watchedNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(".watched__slider", {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A],
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: false,
    // Navigation arrows
    navigation: {
      prevEl: ".watched__slider-button--prev",
      nextEl: ".watched__slider-button--next",
      disabledClass: "watched__slider-button--disabled"
    },
    // Scrollbar
    scrollbar: {
      el: ".watched__scrollbar",
      dragClass: "watched__scrollbar-drag",
      draggable: true
    }
  });
}


/***/ },

/***/ 2079
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const widget = document.querySelector(".widget");
if (widget) {
  const widgetClose = widget.querySelector(".widget__close");
  const widgetOverlay = widget.querySelector(".widget__overlay");
  const body = document.querySelector("body");
  const getWidgetWork = () => {
    const isActive = widget.classList.contains("widget--active");
    if (!isActive) {
      widget.classList.add("widget--active");
      widgetClose.classList.add("widget__close--active");
      body.classList.add("fixed");
    } else {
      widget.classList.remove("widget--active");
      widgetClose.classList.remove("widget__close--active");
      body.classList.remove("fixed");
    }
  };
  widgetClose.addEventListener("click", () => {
    getWidgetWork();
  });
  widgetOverlay.addEventListener("click", () => {
    getWidgetWork();
  });
  const currentPage = window.location.pathname.split("/").pop();
  const links = widget.querySelectorAll("li a");
  links.forEach((link) => {
    const page = link.href.split("/").pop();
    if (page === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}


/***/ },

/***/ 6919
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4489);
/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1979);
/* harmony import */ var _popUp_popUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9417);
/* harmony import */ var _video_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2305);
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4009);
/* harmony import */ var _find_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8877);
/* harmony import */ var _item_card_item_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8697);
/* harmony import */ var _question_card_question_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2069);
/* harmony import */ var _warehouses_map_warehouses_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8641);
/* harmony import */ var _profile_center_profile_center__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4817);
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1421);
/* harmony import */ var _promotion_alert_promotion_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1006);
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3037);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3670);
/* harmony import */ var _select_city_select_city__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4961);
/* harmony import */ var _compare_compare__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4201);
/* harmony import */ var _bx_soa_order_bx_soa_order__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7797);

















window.Corners5ProjectLayout = {
  getFormMessage: _form_form__WEBPACK_IMPORTED_MODULE_1__.getFormMessage,
  setTextareaAutoHeight: _form_form__WEBPACK_IMPORTED_MODULE_1__.setTextareaAutoHeight,
  summonPopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_2__.summonPopUp,
  removePopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_2__.removePopUp,
  findVideos: _video_video__WEBPACK_IMPORTED_MODULE_3__["default"],
  summonAlert: _alert_alert__WEBPACK_IMPORTED_MODULE_4__.summonAlert,
  removeAlert: _alert_alert__WEBPACK_IMPORTED_MODULE_4__.removeAlert,
  multiMapInit: _find_find__WEBPACK_IMPORTED_MODULE_5__["default"],
  activateItemCards: _item_card_item_card__WEBPACK_IMPORTED_MODULE_6__["default"],
  questionSliderInit: _question_card_question_card__WEBPACK_IMPORTED_MODULE_7__["default"],
  warehousesMapInit: _warehouses_map_warehouses_map__WEBPACK_IMPORTED_MODULE_8__["default"],
  initProfileSelect: _profile_center_profile_center__WEBPACK_IMPORTED_MODULE_9__["default"],
  initCitySelect: _modal_modal__WEBPACK_IMPORTED_MODULE_10__["default"],
  validation: {
    validateForm: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm,
    maskSimplePhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.maskSimplePhone,
    maskNumber: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.maskNumber,
    maskPhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.maskPhone,
    maskInternationalPhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.maskInternationalPhone,
    initPasswordEye: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initPasswordEye,
    initAgreeCheckbox: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initAgreeCheckbox,
    initFileLoadInput: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initFileLoadInput,
    focusFirstInput: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.focusFirstInput,
    initSelectValidation: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initSelectValidation,
    initChoicesValidation: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initChoicesValidation
  },
  summonPromotionAlert: _promotion_alert_promotion_alert__WEBPACK_IMPORTED_MODULE_11__.summonPromotionAlert,
  removePromotionAlert: _promotion_alert_promotion_alert__WEBPACK_IMPORTED_MODULE_11__.removePromotionAlert,
  getPaddingOnBody: _utils_utils__WEBPACK_IMPORTED_MODULE_13__/* .getPaddingOnBody */ .rP,
  getPaddingFromBody: _utils_utils__WEBPACK_IMPORTED_MODULE_13__/* .getPaddingFromBody */ .iW,
  getScrollbarWidth: _utils_utils__WEBPACK_IMPORTED_MODULE_13__/* .getScrollbarWidth */ .XJ,
  createFormData: _utils_utils__WEBPACK_IMPORTED_MODULE_13__/* .createFormData */ .$W,
  addLoading: _loading_loading__WEBPACK_IMPORTED_MODULE_12__.addLoading,
  removeLoading: _loading_loading__WEBPACK_IMPORTED_MODULE_12__.removeLoading,
  selectCityInit: _select_city_select_city__WEBPACK_IMPORTED_MODULE_14__["default"],
  compareLogicInit: _compare_compare__WEBPACK_IMPORTED_MODULE_15__["default"],
  initBxSoaOrderSelect: _bx_soa_order_bx_soa_order__WEBPACK_IMPORTED_MODULE_16__["default"]
};


/***/ },

/***/ 6577
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const zoom = document.querySelectorAll(".zoom");
zoom.forEach((picture) => {
  picture.addEventListener("mouseenter", () => {
    if (window.innerWidth > 991) {
      const largeUrl = picture.querySelector(".zoom__big").dataset.link;
      if (largeUrl) {
        const div = document.createElement("div");
        div.innerHTML = `<div class="zoom__container"><img src="${largeUrl}"/></div>`;
        picture.appendChild(div.firstChild);
      }
    }
  });
  picture.addEventListener("mouseleave", (evt) => {
    if (window.innerWidth > 991) {
      picture.querySelector(".zoom__container").remove();
      evt.preventDefault();
    }
  });
  picture.addEventListener("mousemove", (evt) => {
    if (window.innerWidth > 991) {
      const viewWidth = picture.offsetWidth;
      const viewHeight = picture.offsetHeight;
      const viewOffset = picture.getBoundingClientRect();
      const largeWidth = picture.querySelector(".zoom__container").offsetWidth;
      const largeHeight = picture.querySelector(".zoom__container").offsetHeight;
      const relativeXPosition = evt.pageX - viewOffset.x;
      const relativeYPosition = evt.pageY - viewOffset.y;
      const moveX = Math.floor(relativeXPosition * (viewWidth - largeWidth) / viewWidth);
      const moveY = Math.floor(relativeYPosition * (viewHeight - largeHeight) / viewHeight);
      picture.querySelector(".zoom__container").style.left = `${moveX}px`;
      picture.querySelector(".zoom__container").style.top = `${moveY}px`;
    }
  });
});


/***/ },

/***/ 9838
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ ENV)
/* harmony export */ });
const ENV = window.location.origin.includes("192.168") || window.location.origin.includes("localhost") || window.location.origin.includes("html.5corners") ? "Local" : "Remote";


/***/ },

/***/ 8625
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(3670);
// EXTERNAL MODULE: ./node_modules/tippy.js/dist/tippy.css
var tippy = __webpack_require__(4947);
// EXTERNAL MODULE: ./node_modules/tippy.js/animations/scale-subtle.css
var scale_subtle = __webpack_require__(814);
// EXTERNAL MODULE: ./src/components/components.js
var components = __webpack_require__(2820);
// EXTERNAL MODULE: ./src/env.js
var env = __webpack_require__(9838);
;// ./src/mocks/start-msw.js

const useMsw = env/* ENV */.K === "Local";
const isProductionBundle = "production" === "production";
const getProductionWorkerUrl = () => new URL("mockServiceWorker.js", window.location.href).href;
console.log("[MSW]", {
  ENV: env/* ENV */.K,
  NODE_ENV: "production",
  useMsw,
  staticSwUrl: isProductionBundle ? getProductionWorkerUrl() : null
});
const startMocking = () => {
  if (!useMsw) {
    console.log("[MSW] \u043F\u0440\u043E\u043F\u0443\u0441\u043A: ENV=Remote \u2014 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u0430 \u043C\u043E\u043A\u043E\u0432");
    return Promise.resolve();
  }
  return Promise.all(/* import() | msw-mocks */[__webpack_require__.e(96), __webpack_require__.e(480)]).then(__webpack_require__.bind(__webpack_require__, 651)).then(({ worker }) => {
    const options = {
      onUnhandledRequest(request) {
        console.warn("[MSW] unhandled request:", request.method, request.url);
      }
    };
    if (isProductionBundle) {
      options.serviceWorker = {
        url: getProductionWorkerUrl()
      };
    }
    return worker.start(options);
  }).then(() => {
    console.log("[MSW] \u0437\u0430\u043F\u0443\u0449\u0435\u043D, \u043F\u0435\u0440\u0435\u0445\u0432\u0430\u0442 \u043C\u043E\u043A\u043E\u0432 \u0430\u043A\u0442\u0438\u0432\u0435\u043D");
  }).catch((err) => {
    console.error("[MSW] failed to start", err);
  });
};
const workerStartPromise = startMocking();

// EXTERNAL MODULE: ./src/react/providers/providers.js
var providers = __webpack_require__(5910);
;// ./src/index.js
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(__webpack_require__(4078));






let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});





/***/ },

/***/ 5353
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6540);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5865);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2664);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4541);
/* harmony import */ var _Textarea_Textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(455);
/* harmony import */ var _Select_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4919);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));









const schemaPersonal = yup__WEBPACK_IMPORTED_MODULE_4__/* .object */ .Ik().shape({
  address: yup__WEBPACK_IMPORTED_MODULE_4__/* .string */ .Yj().required(),
  city: yup__WEBPACK_IMPORTED_MODULE_4__/* .string */ .Yj().required(),
  street: yup__WEBPACK_IMPORTED_MODULE_4__/* .string */ .Yj().required(),
  house: yup__WEBPACK_IMPORTED_MODULE_4__/* .string */ .Yj().required()
  // flat: Yup.string().required(),
});
const schemaYura = yup__WEBPACK_IMPORTED_MODULE_4__/* .object */ .Ik().shape({
  address: yup__WEBPACK_IMPORTED_MODULE_4__/* .string */ .Yj().required(),
  city: yup__WEBPACK_IMPORTED_MODULE_4__/* .string */ .Yj().required(),
  street: yup__WEBPACK_IMPORTED_MODULE_4__/* .string */ .Yj().required(),
  house: yup__WEBPACK_IMPORTED_MODULE_4__/* .string */ .Yj().required(),
  // flat: Yup.string().required(),
  comment: yup__WEBPACK_IMPORTED_MODULE_4__/* .string */ .Yj().notRequired()
  // organization: Yup.string().required(),
});
const Address = ({ address, organizations, cancelHandler, submitHandler }) => {
  const [initialValues, setInitialValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    address: address.value ? address.value : "",
    city: address.data.city ? address.data.city : "",
    street: address.data.street_with_type ? address.data.street_with_type : "",
    house: address.data.house ? address.data.house : "",
    // Строение/корпус: у DaData это отдельные поля (block = "15", blockType = "стр"/"к"),
    // в дом они не входят. Своего инпута в форме нет — тащим как есть из подсказки,
    // иначе «д 84 стр 15» превращается в «д 84».
    block: address.data.block ? address.data.block : "",
    blockType: address.data.block_type ? address.data.block_type : "",
    flat: address.data.flat ? address.data.flat : "",
    lat: address.data.geo_lat ? address.data.geo_lat : "",
    lon: address.data.geo_lon ? address.data.geo_lon : "",
    entrance: "",
    flatNumber: "",
    floor: "",
    comment: ""
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: "Address", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "Address__header", children: "\u0410\u0434\u0440\u0435\u0441" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_1__/* .Formik */ .l1,
      {
        initialValues,
        validationSchema: Object.prototype.hasOwnProperty.call(initialValues, "organization") ? schemaYura : schemaPersonal,
        enableReinitialize: true,
        onSubmit: (values) => {
          submitHandler(values);
        },
        children: ({ initialValues: initialValues2, values, errors, touched, handleChange }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: "Address__wrapper", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "Address__heading", children: "\u0422\u0438\u043F \u0430\u0434\u0440\u0435\u0441\u0430:" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "Address__toggles", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "button",
              {
                className: `Address__toggle ${Object.prototype.hasOwnProperty.call(
                  initialValues2,
                  "organization"
                ) ? "" : "Address__toggle--active"}`,
                type: "button",
                onClick: () => {
                  const newInitialValues = __spreadValues({}, initialValues2);
                  newInitialValues.address = values.address;
                  delete newInitialValues.organization;
                  setInitialValues(newInitialValues);
                },
                children: "\u041B\u0438\u0447\u043D\u044B\u0439"
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "button",
              {
                className: `Address__toggle ${Object.prototype.hasOwnProperty.call(
                  initialValues2,
                  "organization"
                ) ? "Address__toggle--active" : ""}`,
                type: "button",
                onClick: () => {
                  setInitialValues(__spreadProps(__spreadValues({}, initialValues2), {
                    organization: organizations.lenght > 0 ? organizations[0].id : "empty",
                    address: values.address
                  }));
                },
                children: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F"
              }
            )
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__/* .Form */ .lV, { className: "Address__form", noValidate: true, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _Input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
              {
                type: "text",
                name: "city",
                label: "\u0413\u043E\u0440\u043E\u0434",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434",
                isRequired: true,
                className: `Address__input${errors.city && touched.city ? " Address__input--error" : ""}`
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _Input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
              {
                type: "text",
                name: "street",
                label: "\u0423\u043B\u0438\u0446\u0430",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0443\u043B\u0438\u0446\u0443",
                isRequired: true,
                className: `Address__input${errors.street && touched.street ? " Address__input--error" : ""}`
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _Input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
              {
                type: "text",
                name: "house",
                label: "\u0414\u043E\u043C",
                placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043C\u0430",
                isRequired: true,
                className: `Address__input${errors.house && touched.house ? " Address__input--error" : ""}`
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _Input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
              {
                type: "text",
                name: "flat",
                label: "\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430/\u043E\u0444\u0438\u0441",
                placeholder: "\u041D\u043E\u043C\u0435\u0440 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B",
                className: `Address__input${errors.flat && touched.flat ? " Address__input--error" : ""}`
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "Address__heading", children: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u043A\u0443\u0440\u044C\u0435\u0440\u0430" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "Address__subgrid", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _Input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
                {
                  type: "text",
                  name: "entrance",
                  label: "\u041F\u043E\u0434\u044A\u0435\u0437\u0434",
                  placeholder: "\u041D\u043E\u043C\u0435\u0440 \u043F\u043E\u0434\u044A\u0435\u0437\u0434\u0430",
                  isRequired: false,
                  className: `Address__input${errors.entrance && touched.entrance ? " Address__input--error" : ""}`
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _Input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
                {
                  type: "text",
                  name: "flatNumber",
                  label: "\u0414\u043E\u043C\u043E\u0444\u043E\u043D",
                  placeholder: "\u041A\u043E\u0434 \u0434\u043E\u043C\u043E\u0444\u043E\u043D\u0430",
                  isRequired: false,
                  className: `Address__input${errors.flatNumber && touched.flatNumber ? " Address__input--error" : ""}`
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _Input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
                {
                  type: "text",
                  name: "floor",
                  label: "\u042D\u0442\u0430\u0436",
                  placeholder: "\u041D\u043E\u043C\u0435\u0440 \u044D\u0442\u0430\u0436\u0430",
                  isRequired: false,
                  className: `Address__input${errors.floor && touched.floor ? " Address__input--error" : ""}`
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _Textarea_Textarea__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
                {
                  type: "text",
                  name: "comment",
                  label: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                  className: `Address__input-fullwidth${errors.comment && touched.comment ? " Address__input--error" : ""}`
                }
              ),
              initialValues2.organization !== void 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _Select_Select__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
                {
                  isModal: true,
                  value: values.organization !== "empty" ? organizations.find(
                    (item) => item.id === values.organization
                  ).companyName : "",
                  name: "organization",
                  onChange: handleChange,
                  placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E",
                  className: `Address__input-fullwidth${errors.organization && touched.organization ? " Address__input--error" : ""}`,
                  children: [
                    organizations.map((item, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, { value: item.id, children: item.companyName }, index)),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      "button",
                      {
                        className: "Address__add",
                        type: "button",
                        onClick: () => {
                          window.location.replace(
                            `${window.location.origin}/personal/addorganization/`
                          );
                        },
                        children: "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E"
                      }
                    )
                  ]
                }
              ) : null
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "Address__navigation", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "button",
                {
                  className: "button button--transparent Address__button",
                  type: "button",
                  onClick: cancelHandler,
                  children: "\u2717 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "button Address__button", type: "submit", children: "\u2713 \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" })
            ] })
          ] })
        ] })
      }
    )
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Address);


/***/ },

/***/ 8181
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);



const Checkbox = ({
  type,
  name,
  className,
  toggle,
  isRequired,
  isDisabled,
  placeholder
}) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `Checkbox${className ? ` ${className}` : ""}`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { className: "Checkbox__label", children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    formik__WEBPACK_IMPORTED_MODULE_1__/* .Field */ .D0,
    {
      disabled: isDisabled,
      className: toggle ? "Checkbox__field Checkbox__field--toggle" : "Checkbox__field",
      type,
      name,
      placeholder
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "Checkbox__box" })
] }) });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);


/***/ },

/***/ 5485
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6540);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};




const CodeInput = ({
  fields = 4,
  value = "",
  onChange = () => {
  },
  onComplete = () => {
  },
  inputProps = {},
  className = ""
}) => {
  const inputsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);
  const digits = Array.from({ length: fields }, (_, i) => value[i] || "");
  const emit = (next) => {
    const joined = next.join("").slice(0, fields);
    onChange(joined);
    if (joined.length === fields && next.every((d) => d !== "")) {
      onComplete(joined);
    }
  };
  const focusInput = (i) => {
    const el = inputsRef.current[i];
    if (el) el.focus();
  };
  const handleChange = (i, raw) => {
    const onlyDigits = raw.replace(/\D/g, "");
    const next = [...digits];
    if (!onlyDigits) {
      next[i] = "";
      emit(next);
      return;
    }
    let pos = i;
    for (const ch of onlyDigits.split("")) {
      if (pos >= fields) break;
      next[pos] = ch;
      pos += 1;
    }
    emit(next);
    focusInput(Math.min(pos, fields - 1));
  };
  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace") {
      const next = [...digits];
      if (digits[i]) {
        next[i] = "";
        emit(next);
      } else if (i > 0) {
        next[i - 1] = "";
        emit(next);
        focusInput(i - 1);
        e.preventDefault();
      }
    } else if (e.key === "ArrowLeft" && i > 0) {
      focusInput(i - 1);
    } else if (e.key === "ArrowRight" && i < fields - 1) {
      focusInput(i + 1);
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = (e.clipboardData.getData("text") || "").replace(/\D/g, "");
    if (pasted) handleChange(0, pasted.slice(0, fields));
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className, children: digits.map((digit, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "input",
    __spreadValues({
      ref: (el) => {
        inputsRef.current[i] = el;
      },
      type: "text",
      inputMode: "numeric",
      value: digit,
      onChange: (e) => handleChange(i, e.target.value),
      onKeyDown: (e) => handleKeyDown(i, e),
      onPaste: handlePaste,
      onFocus: (e) => e.target.select()
    }, inputProps),
    i
  )) });
};
function useWebOTP(formikRef, updateUI, CODE_LENGTH = 4) {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!("OTPCredential" in window) || !navigator.credentials) return;
    const ac = new AbortController();
    navigator.credentials.get({
      otp: { transport: ["sms"] },
      signal: ac.signal
    }).then((otp) => {
      if (!(otp == null ? void 0 : otp.code) || !formikRef.current) return;
      const digits = otp.code.replace(/\D/g, "").slice(0, CODE_LENGTH);
      formikRef.current.setFieldValue("code", digits);
      updateUI(digits);
      formikRef.current.submitForm();
    }).catch((err) => console.warn("WebOTP \u043D\u0435 \u0441\u0440\u0430\u0431\u043E\u0442\u0430\u043B:", err));
    return () => ac.abort();
  }, [formikRef, updateUI, CODE_LENGTH]);
}
const getMaskedPhone = (phone) => {
  if (!phone || phone.length < 18) return "";
  return `+7 (***) ***-${phone[13]}${phone[14]}-${phone[16]}${phone[17]}`;
};
const Code = ({ phoneNumber, changeAction, sendAgain, sendSms }) => {
  const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(60);
  const [codeValue, setCodeValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const formikRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const timer = setInterval(() => setSeconds((prev) => prev > 0 ? prev - 1 : 0), 1e3);
    return () => clearInterval(timer);
  }, []);
  useWebOTP(formikRef, setCodeValue, 4);
  const handleIOSInput = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (!digits) return;
    setCodeValue(digits);
    if (formikRef.current) {
      formikRef.current.setFieldValue("code", digits);
      if (digits.length === 4) formikRef.current.submitForm();
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "Code", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "Code__header", children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { className: "Code__text", children: [
      "\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043D\u0430 \u043D\u043E\u043C\u0435\u0440 ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: getMaskedPhone(phoneNumber) }),
      "."
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "Code__button", type: "button", onClick: changeAction, children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_1__/* .Formik */ .l1,
      {
        innerRef: formikRef,
        initialValues: { code: "" },
        onSubmit: (values) => sendSms(values.code),
        children: ({ setFieldValue, submitForm }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "input",
            {
              type: "text",
              autoComplete: "one-time-code",
              inputMode: "numeric",
              style: {
                position: "absolute",
                opacity: 0,
                pointerEvents: "none",
                width: 0,
                height: 0
              },
              onInput: handleIOSInput
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            CodeInput,
            {
              fields: 4,
              value: codeValue,
              onChange: (value) => setCodeValue(value),
              onComplete: (value) => {
                setFieldValue("code", value);
                submitForm();
              },
              inputProps: {
                autoComplete: "one-time-code",
                inputMode: "numeric"
              },
              className: "Code__number"
            }
          )
        ] })
      }
    ),
    seconds === 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "button",
      {
        className: "Code__button",
        type: "button",
        onClick: () => {
          setSeconds(60);
          sendAgain();
        },
        children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u0434 \u043F\u043E SMS"
      }
    ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { className: "Code__seconds", children: [
      "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u0434 \u043C\u043E\u0436\u043D\u043E \u0447\u0435\u0440\u0435\u0437 ",
      seconds,
      " \u0441\u0435\u043A\u0443\u043D\u0434"
    ] })
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Code);


/***/ },

/***/ 5393
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6540);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7425);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2664);
/* harmony import */ var _react_input_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4971);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7118);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5865);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7821);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9447);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(980);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1812);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3670);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));














const FormAddOrganization1 = (props) => {
  const { fetchData, dataForm, setDataForm, onCancel } = props;
  const phoneRegExp = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;
  const innRegExp = /^[0-9_]{10,12}$/;
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__/* .object */ .Ik().shape({
    inn: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().transform((value) => value.replace(/[^\d]/g, "")).matches(innRegExp, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0418\u041D\u041D").required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
    mainFio: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!").max(100, "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C 100 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),
    mainEmail: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().email("\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 email \u0430\u0434\u0440\u0435\u0441").max(100, "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C 100 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432").required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
    mainPhone: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().matches(phoneRegExp, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440").max(20, "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C 20 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432").required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
    mainRole: yup__WEBPACK_IMPORTED_MODULE_3__/* .array */ .YO().required().required().min(1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
    contacts: yup__WEBPACK_IMPORTED_MODULE_3__/* .array */ .YO().of(
      yup__WEBPACK_IMPORTED_MODULE_3__/* .object */ .Ik().shape({
        fio: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
        email: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().email("\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 email \u0430\u0434\u0440\u0435\u0441").required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
        phone: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().matches(phoneRegExp, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440").required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
        role: yup__WEBPACK_IMPORTED_MODULE_3__/* .array */ .YO().required().required().min(1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!")
      })
    )
  });
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        width: 250,
        borderRadius: 8
      }
    }
  };
  const MenuItemStyle = {
    padding: 0,
    paddingLeft: "5px",
    "& .MuiTypography-root": {
      color: "#212f4e"
    }
  };
  const CheckboxStyle = {
    "& .MuiSvgIcon-root": {
      color: "#1f617f"
    }
  };
  const FormControlStyle = {
    margin: 0,
    font: "inherit",
    display: "block",
    boxSizing: "border-box",
    minWidth: "100%",
    width: "auto",
    "& .MuiInputLabel-root": {
      color: "#212f4e",
      "&.Mui-focused": {
        color: "#212f4e"
      }
    },
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { border: "1px solid #d6dfe4" }
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": { border: "1px solid #d6dfe4" }
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": { border: "1px solid #d6dfe4" }
    }
  };
  const SelectStyle = {
    borderRadius: 2,
    boxSizing: "border-box",
    display: "flex",
    minWidth: "460px",
    maxWidth: "460px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "@media (max-width: 768px)": {
      maxWidth: "100%",
      minWidth: "100%"
    },
    margin: "5px 0 20px",
    "& .MuiOutlinedInput-input": {
      padding: "13px 14px 12px",
      backgroundColor: "white",
      color: "#212f4e",
      "@media (max-width: 768px)": {
        padding: "11px 14px 11px"
      }
    },
    "& .MuiSvgIcon-root": {
      fill: "#212f4e"
    }
  };
  const rolesData = [
    "\u041F\u0438\u0432\u043E\u0432\u0430\u0440",
    "\u0417\u0430\u043A\u0443\u043F\u0449\u0438\u043A",
    "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
    "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439",
    "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440",
    "\u0414\u0440\u0443\u0433\u043E\u0435"
  ];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: "add-organization", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "form-lk__title", children: "1/2 \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_2__/* .Formik */ .l1,
      {
        initialValues: dataForm.firstStep,
        validationSchema,
        onSubmit: (values) => {
          values.inn = values.inn.replace(/[^\d]/g, "");
          fetchData(values.inn);
          setDataForm((prevDataForm) => __spreadProps(__spreadValues({}, prevDataForm), {
            firstStep: values
          }));
        },
        children: ({ values, errors, touched, handleChange, handleBlur }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .lV, { noValidate: true, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", { className: "form-lk__fieldset", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("legend", { className: "form-lk__legend", children: "\u0418\u041D\u041D \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "form-lk__field", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "label",
                {
                  className: errors.inn && touched.inn ? "form-lk__label error" : "form-lk__label",
                  htmlFor: "inn",
                  children: "\u0418\u041D\u041D \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F"
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _react_input_mask__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
                {
                  mask: "____________",
                  replacement: { _: /\d/ },
                  className: errors.inn && touched.inn ? "form-lk__item error" : "form-lk__item",
                  id: "inn",
                  name: "inn",
                  type: "text",
                  autoComplete: "off",
                  autoCapitalize: "off",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u041D\u041D \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F",
                  value: values.inn,
                  onChange: handleChange,
                  onBlur: handleBlur
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", { className: "form-lk__fieldset", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("legend", { className: "form-lk__legend", children: "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0437\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "form-lk__field", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "label",
                {
                  className: errors.mainFio && touched.mainFio ? "form-lk__label error" : "form-lk__label",
                  htmlFor: "mainFio",
                  children: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F"
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "input",
                {
                  className: errors.mainFio && touched.mainFio ? "form-lk__item error" : "form-lk__item",
                  id: "mainFio",
                  name: "mainFio",
                  type: "text",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
                  onChange: handleChange,
                  onBlur: handleBlur,
                  value: values.mainFio
                }
              )
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "label",
              {
                className: errors.mainEmail && touched.mainEmail ? "form-lk__label error" : "form-lk__label",
                htmlFor: "mainEmail",
                children: "E-mail"
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "input",
              {
                className: errors.mainEmail && touched.mainEmail ? "form-lk__item error" : "form-lk__item",
                id: "mainEmail",
                name: "mainEmail",
                type: "email",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.mainEmail
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "form-lk__field", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "label",
                {
                  className: errors.mainPhone && touched.mainPhone ? "form-lk__label error" : "form-lk__label",
                  htmlFor: "mainPhone",
                  children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _react_input_mask__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
                {
                  mask: "+7 (___) ___-__-__",
                  replacement: { _: /\d/ },
                  className: errors.mainPhone && touched.mainPhone ? "form-lk__item error" : "form-lk__item",
                  id: "mainPhone",
                  name: "mainPhone",
                  type: "phone",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
                  value: values.mainPhone,
                  onChange: handleChange,
                  onBlur: handleBlur
                }
              )
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "form-lk__field", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, { sx: FormControlStyle, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "label",
                {
                  className: errors.mainRole && touched.mainRole ? "form-lk__label error" : "form-lk__label",
                  htmlFor: "multiple-checkbox",
                  children: "\u0420\u043E\u043B\u044C"
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _mui_material_Select__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,
                {
                  sx: SelectStyle,
                  className: errors.mainRole && touched.mainRole ? "form-lk__item form-lk__item--select error" : "form-lk__item form-lk__item--select",
                  labelId: "multiple-checkbox-label",
                  id: "multiple-checkbox",
                  name: "mainRole",
                  multiple: true,
                  IconComponent: _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,
                  value: values.mainRole,
                  onChange: handleChange,
                  onOpen: () => {
                    (0,utils_utils__WEBPACK_IMPORTED_MODULE_12__/* .getPaddingOnBody */ .rP)();
                  },
                  onClose: () => {
                    (0,utils_utils__WEBPACK_IMPORTED_MODULE_12__/* .getPaddingFromBody */ .iW)();
                  },
                  input: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {}),
                  renderValue: (selected) => selected.join(", "),
                  MenuProps,
                  children: rolesData.map((name) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, { sx: MenuItemStyle, value: name, children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,
                      {
                        sx: CheckboxStyle,
                        checked: values.mainRole.indexOf(name) > -1
                      }
                    ),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { primary: name })
                  ] }, name))
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_2__/* .FieldArray */ .ED, { name: "contacts", error: true, children: ({ remove, push }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            values.contacts.map((member, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", { className: "form-lk__fieldset", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("legend", { className: "form-lk__legend", children: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442" }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                "button",
                {
                  type: "button",
                  className: "form-lk__button-delete ",
                  onClick: () => remove(index),
                  children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      "svg",
                      {
                        className: "form-lk__pencil-icon",
                        width: "20",
                        height: "20",
                        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: "#icon-lk-cart" })
                      }
                    ),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442" })
                  ]
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "label",
                {
                  className: (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(errors, `contacts[${index}].fio`) && (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(touched, `contacts[${index}].fio`) ? "form-lk__label error" : "form-lk__label",
                  htmlFor: `contacts.${index}.fio`,
                  children: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F"
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                formik__WEBPACK_IMPORTED_MODULE_2__/* .Field */ .D0,
                {
                  className: (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(errors, `contacts[${index}].fio`) && (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(touched, `contacts[${index}].fio`) ? "form-lk__item error" : "form-lk__item",
                  name: `contacts.${index}.fio`,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
                  type: "text"
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "label",
                {
                  className: (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(errors, `contacts[${index}].email`) && (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(touched, `contacts[${index}].email`) ? "form-lk__label error" : "form-lk__label",
                  htmlFor: `contacts.${index}.email`,
                  children: "E-mail"
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                formik__WEBPACK_IMPORTED_MODULE_2__/* .Field */ .D0,
                {
                  className: (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(errors, `contacts[${index}].email`) && (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(touched, `contacts[${index}].email`) ? "form-lk__item error" : "form-lk__item",
                  name: `contacts.${index}.email`,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",
                  type: "email"
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "label",
                {
                  className: (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(errors, `contacts[${index}].phone`) && (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(touched, `contacts[${index}].phone`) ? "form-lk__label error" : "form-lk__label",
                  htmlFor: `contacts.${index}.phone`,
                  children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _react_input_mask__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
                {
                  mask: "+7 (___) ___-__-__",
                  replacement: { _: /\d/ },
                  className: (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(errors, `contacts[${index}].phone`) && (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(touched, `contacts[${index}].phone`) ? "form-lk__item error" : "form-lk__item",
                  name: `contacts.${index}.phone`,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
                  type: "phone",
                  value: (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(values, `contacts[${index}].phone`),
                  onChange: handleChange,
                  onBlur: handleBlur
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "form-lk__field", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, { sx: FormControlStyle, children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  "label",
                  {
                    className: (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(errors, `contacts[${index}].role`) && (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(touched, `contacts[${index}].role`) ? "form-lk__label error" : "form-lk__label",
                    htmlFor: `contacts.${index}.role`,
                    children: "\u0420\u043E\u043B\u044C"
                  }
                ),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _mui_material_Select__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,
                  {
                    sx: SelectStyle,
                    className: (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(errors, `contacts[${index}].role`) && (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .getIn */ .O6)(touched, `contacts[${index}].role`) ? "form-lk__item form-lk__item--select error" : "form-lk__item form-lk__item--select",
                    labelId: "checkbox-label",
                    id: "multiple-checkbox",
                    name: `contacts.${index}.role`,
                    multiple: true,
                    IconComponent: _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,
                    value: values.contacts[index].role,
                    onChange: handleChange,
                    onOpen: () => {
                      (0,utils_utils__WEBPACK_IMPORTED_MODULE_12__/* .getPaddingOnBody */ .rP)();
                    },
                    onClose: () => {
                      (0,utils_utils__WEBPACK_IMPORTED_MODULE_12__/* .getPaddingFromBody */ .iW)();
                    },
                    input: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {}),
                    renderValue: (selected) => selected.join(", "),
                    MenuProps,
                    children: rolesData.map((name) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
                      {
                        sx: MenuItemStyle,
                        value: name,
                        children: [
                          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,
                            {
                              sx: CheckboxStyle,
                              checked: values.contacts[index].role.indexOf(name) > -1
                            }
                          ),
                          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { primary: name })
                        ]
                      },
                      name
                    ))
                  }
                )
              ] }) })
            ] }, index)),
            values.contacts.length < 3 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "form-lk__add-contact", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "button",
                {
                  type: "button",
                  className: "form-lk__button-add button",
                  onClick: () => {
                    push({
                      fio: "",
                      email: "",
                      phone: "",
                      role: []
                    });
                  },
                  children: "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442"
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0445 \u043B\u0438\u0446, \u0434\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0438 \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0443." })
            ] }) : null
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "form-lk__control", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "button",
              {
                className: "form-lk__button-cancel button button--transparent",
                type: "button",
                onClick: () => {
                  onCancel == null ? void 0 : onCancel();
                },
                children: "\u2717 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "button",
              {
                className: "form-lk__button-forward button",
                type: "submit",
                children: "\u0414\u0430\u043B\u0435\u0435 \u2192"
              }
            )
          ] })
        ] })
      }
    )
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormAddOrganization1);


/***/ },

/***/ 6845
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6540);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7425);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2664);
/* harmony import */ var _react_input_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4971);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));





const innRegExp = /^[0-9_]{10,12}$/;
const ogrnRegExp = /^[0-9]{15}$/;
const kppBikRegExp = /^[0-9]{9}$/;
const accountRegExp = /^[0-9]{20}$/;
const strictSchema = {
  inn: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().transform((value) => value.replace(/[^\d]/g, "")).matches(innRegExp, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0418\u041D\u041D").required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  companyName: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  address: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  addressMailing: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  ogrn: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().min(13, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u041E\u0413\u0420\u041D").max(15, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u041E\u0413\u0420\u041D").required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  kpp: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().matches(kppBikRegExp, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u041A\u041F\u041F").notRequired()
  // .required("Обязательное поле!"),
  // bik: Yup.string()
  //   .matches(kppBikRegExp, "Неправильный БИК")
  //   .required("Обязательное поле!"),
  // bank: Yup.string().required("Обязательное поле!"),
  // accountChecking: Yup.string()
  //   .matches(accountRegExp, "Неправильный Счет")
  //   .required("Обязательное поле!"),
  // accountСorrespondent: Yup.string()
  //   .matches(accountRegExp, "Неправильный Счет")
  //   .required("Обязательное поле!"),
};
const freeSchema = {
  inn: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().transform((value) => value.replace(/[^\d]/g, "")).matches(innRegExp, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0418\u041D\u041D").notRequired("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  companyName: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().notRequired("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  address: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().notRequired("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  addressMailing: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().notRequired("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  ogrn: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().min(13, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u041E\u0413\u0420\u041D").max(15, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u041E\u0413\u0420\u041D").notRequired("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  kpp: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().matches(kppBikRegExp, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u041A\u041F\u041F").notRequired("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  bik: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().matches(kppBikRegExp, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0411\u0418\u041A").notRequired("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  bank: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  accountChecking: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().matches(accountRegExp, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0421\u0447\u0435\u0442").notRequired("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"),
  account\u0421orrespondent: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().matches(accountRegExp, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0421\u0447\u0435\u0442").notRequired("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!")
};
const FormAddOrganization2 = (props) => {
  const { dataForm, setDataForm, addNewOrganization, setStep, existFlag } = props;
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__/* .useFormik */ .Wx)({
    initialValues: dataForm.secondStep,
    enableReinitialize: true,
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__/* .object */ .Ik(
      existFlag === true ? freeSchema : strictSchema
    ),
    onSubmit: (values) => {
      values.inn = values.inn.replace(/[^\d]/g, "");
      const data = __spreadProps(__spreadValues({}, dataForm), { secondStep: values });
      setDataForm((prevDataForm) => __spreadProps(__spreadValues({}, prevDataForm), {
        secondStep: values
      }));
      addNewOrganization(data);
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "form-lk__title", children: "2/2 \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { noValidate: true, className: "form-lk__form", onSubmit: formik.handleSubmit, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", { className: "form-lk__fieldset form-lk__fieldset--wide", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("legend", { className: "form-lk__legend", children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u043E\u0432" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "form-lk__container", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "form-lk__field form-lk__field--narrow", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "label",
              {
                className: formik.errors.inn && formik.touched.inn ? "form-lk__label error" : "form-lk__label",
                htmlFor: "inn",
                children: "\u0418\u041D\u041D"
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _react_input_mask__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
              {
                mask: "____________",
                replacement: { _: /\d/ },
                className: formik.errors.inn && formik.touched.inn ? "form-lk__item error" : "form-lk__item",
                id: "inn",
                name: "inn",
                type: "text",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u041D\u041D \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F",
                value: formik.values.inn,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                disabled: existFlag
              }
            )
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "form-lk__field form-lk__field--narrow", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "label",
              {
                className: formik.errors.companyName && formik.touched.companyName ? "form-lk__label error" : "form-lk__label",
                htmlFor: "companyName",
                children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F"
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "input",
              {
                className: formik.errors.companyName && formik.touched.companyName ? "form-lk__item error" : "form-lk__item",
                id: "companyName",
                name: "companyName",
                type: "text",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                value: formik.values.companyName,
                disabled: existFlag
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "label",
          {
            className: formik.errors.address && formik.touched.address ? "form-lk__label error" : "form-lk__label",
            htmlFor: "address",
            children: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441"
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "input",
          {
            className: formik.errors.address && formik.touched.address ? "form-lk__item error" : "form-lk__item",
            id: "address",
            name: "address",
            type: "text",
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441",
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            value: formik.values.address,
            disabled: existFlag
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "label",
          {
            className: formik.errors.addressMailing && formik.touched.addressMailing ? "form-lk__label error" : "form-lk__label",
            htmlFor: "addressMailing",
            children: "\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441"
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "input",
          {
            className: formik.errors.addressMailing && formik.touched.addressMailing ? "form-lk__item error" : "form-lk__item",
            id: "addressMailing",
            name: "addressMailing",
            type: "text",
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441",
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            value: formik.values.addressMailing,
            disabled: existFlag
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "form-lk__container", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "form-lk__field form-lk__field--narrow", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "label",
              {
                className: formik.errors.ogrn && formik.touched.ogrn ? "form-lk__label error" : "form-lk__label",
                htmlFor: "ogrn",
                children: "\u041E\u0413\u0420\u041D"
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _react_input_mask__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
              {
                mask: "_______________",
                replacement: { _: /\d/ },
                className: formik.errors.ogrn && formik.touched.ogrn ? "form-lk__item error" : "form-lk__item",
                id: "ogrn",
                name: "ogrn",
                type: "text",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041E\u0413\u0420\u041D",
                value: formik.values.ogrn,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur
              }
            )
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "form-lk__field form-lk__field--narrow", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "label",
              {
                className: formik.errors.kpp && formik.touched.kpp ? "form-lk__label error" : "form-lk__label",
                htmlFor: "companyName",
                children: "\u041A\u041F\u041F"
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "input",
              {
                className: formik.errors.kpp && formik.touched.kpp ? "form-lk__item error" : "form-lk__item",
                id: "kpp",
                name: "kpp",
                type: "text",
                placeholder: "\u041A\u041F\u041F",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                value: formik.values.kpp,
                disabled: existFlag
              }
            )
          ] })
        ] })
      ] }),
      existFlag ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "form-lk__legend", children: "\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443 \u0434\u043B\u044F \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445" }) : null,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "form-lk__control", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "button",
          {
            className: "form-lk__button-back button button--transparent",
            onClick: () => setStep("one"),
            children: "\u2190 \u041D\u0430\u0437\u0430\u0434"
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "a",
          {
            className: "form-lk__button-cancel form-lk__button-cancel--mobile button button--transparent",
            href: "/personal/organizations/",
            children: "\u2717 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "button",
          {
            className: "form-lk__button-save button",
            onClick: formik.onSubmit,
            type: "submit",
            children: "\u2713 \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
          }
        )
      ] })
    ] })
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormAddOrganization2);


/***/ },

/***/ 4569
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);


const FormContacts = (props) => {
  const {
    phones,
    mails,
    whatsapps,
    telegrams
  } = props.contacts;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "FormContacts", children: [
    phones && phones.map((phone, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", { className: "FormContacts__link", href: `tel:${phone.link}`, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: "#icon-contacts-phone" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: phone.name })
      ] }, index);
    }),
    mails && mails.map((mail, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", { className: "FormContacts__link", href: `mailto:${mail.link}`, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: "#icon-contacts-mail" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: mail.name })
      ] }, index);
    }),
    whatsapps && whatsapps.map((whatsapp, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", { className: "FormContacts__link", href: whatsapp.link, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: "#icon-contacts-whatsup" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: whatsapp.name })
      ] }, index);
    }),
    telegrams && telegrams.map((telegram, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", { className: "FormContacts__link", href: telegram.link, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: "#icon-contacts-telegram" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: telegram.name })
      ] }, index);
    })
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormContacts);


/***/ },

/***/ 4541
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);



const Input = ({
  type,
  name,
  className,
  label,
  isRequired,
  isDisabled,
  placeholder
}) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `Input${className ? ` ${className}` : ""}`, children: [
  label ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: isRequired ? "Input__label Input__label--required" : "Input__label", children: label }) : null,
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    formik__WEBPACK_IMPORTED_MODULE_1__/* .Field */ .D0,
    {
      autoComplete: "off",
      autoCapitalize: "off",
      disabled: isDisabled,
      className: "Input__field",
      type,
      name,
      placeholder
    }
  )
] });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ },

/***/ 289
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);


const Loader = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "Loader", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width: "30", height: "30", viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "15", cy: "15", r: "15", fill: "#EEEFF0" }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M22.8949 13.9986C22.6536 12.262 21.848 10.6529 20.6022 9.41917C19.3563 8.18546 17.7394 7.39558 16.0005 7.1712C14.2616 6.94683 12.4972 7.30041 10.979 8.17748C9.46084 9.05455 8.27315 10.4064 7.59889 12.0249M7.10547 8.07757V12.0249H11.0528", stroke: "#7F8899", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M7.10547 15.9727C7.34681 17.7093 8.15244 19.3184 9.39826 20.5521C10.6441 21.7858 12.261 22.5757 13.9999 22.8001C15.7388 23.0244 17.5032 22.6709 19.0214 21.7938C20.5396 20.9167 21.7273 19.5648 22.4015 17.9463M22.8949 21.8937V17.9463H18.9476", stroke: "#7F8899", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
] }) });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ },

/***/ 5593
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6540);



const Modal = ({ children, closeModal, className, closeEvent }) => {
  const onDismiss = () => {
    closeModal();
  };
  const onModalEscPress = (evt) => {
    if (evt.code === "Escape") {
      evt.preventDefault();
      window.dispatchEvent(closeEvent);
      onDismiss();
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    document.addEventListener("keydown", onModalEscPress);
    return () => {
      document.removeEventListener("keydown", onModalEscPress);
    };
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: `Modal${className ? ` ${className}` : ""}`, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        className: "Modal__overlay",
        onClick: (evt) => {
          evt.target.dispatchEvent(closeEvent);
          closeModal();
        }
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: "Modal__container", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        "button",
        {
          className: "Modal__close",
          onClick: (evt) => {
            evt.target.dispatchEvent(closeEvent);
            closeModal();
          },
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { href: "#icon-closer" }) })
        }
      ),
      children
    ] })
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ },

/***/ 4395
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var _react_input_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4971);



const PhoneInput = ({
  name,
  value,
  onChange,
  onBlur,
  className,
  label,
  placeholder,
  isRequired,
  isDisabled
}) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `PhoneInput${className ? ` ${className}` : ""}`, children: [
  label ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: isRequired ? "PhoneInput__label PhoneInput__label--required" : "PhoneInput__label", children: label }) : null,
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _react_input_mask__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      mask: "+7 (___) ___-__-__",
      replacement: { _: /\d/ },
      minLength: "10",
      autoComplete: "off",
      autoCapitalize: "off",
      className: "PhoneInput__field",
      type: "tel",
      name,
      placeholder,
      value,
      onChange,
      onBlur,
      disabled: isDisabled
    }
  )
] });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneInput);


/***/ },

/***/ 4919
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7821);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1812);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3670);






const Select = ({
  children,
  isModal,
  value,
  name,
  onChange,
  label,
  isRequired,
  isDisabled,
  className,
  placeholder,
  multiple
}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `Select${className ? ` ${className}` : ""}`, children: [
    label ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "label",
      {
        className: isRequired ? "Select__label Select__label--required" : "Select__label",
        children: label
      }
    ) : null,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { fullWidth: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _mui_material_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
      {
        multiple,
        value,
        name,
        disabled: isDisabled,
        onChange,
        onOpen: () => {
          if (!isModal) {
            (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .getPaddingOnBody */ .rP)();
          }
        },
        onClose: () => {
          if (!isModal) {
            (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .getPaddingFromBody */ .iW)();
          }
        },
        IconComponent: _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
        displayEmpty: true,
        renderValue: (value2) => {
          if (value2 === "" || Array.isArray(value2) && value2.length === 0) {
            return placeholder;
          }
          return Array.isArray(value2) ? value2.join(", ") : value2;
        },
        sx: {
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "25px",
          backgroundColor: "transparent",
          "@media (max-width: 767px)": {
            fontSize: "14px",
            lineHeight: "20px"
          },
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#d1d5db"
            }
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            borderWidth: "0"
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            borderWidth: "0"
          },
          "& .MuiOutlinedInput-input": {
            paddingTop: "13px",
            paddingRight: "12px",
            paddingBottom: "14px",
            paddingLeft: "15px",
            "&.MuiSelect-select": {
              position: "relative",
              whiteSpace: "break-spaces",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              "&.Mui-disabled": {
                color: "#7F8899",
                backgroundColor: "#EEEFF0"
              },
              "&:before": {
                position: "absolute",
                top: "0",
                left: "0",
                width: "calc(100% - 2px)",
                height: "calc(100% - 2px)",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                content: '""'
              },
              '&[aria-expanded="true"]': {
                borderRadius: "8px 8px 0 0",
                "&:before": {
                  borderRadius: "8px 8px 0 0"
                }
              }
            }
          },
          "& .MuiSelect-icon": {
            top: "24%",
            width: "25px",
            height: "25px",
            fill: "#212F4E",
            "&.Mui-disabled": {
              fill: "#7F8899"
            }
          }
        },
        MenuProps: {
          disableScrollLock: true,
          PaperProps: {
            sx: {
              borderRadius: "0 0 8px 8px",
              borderRight: "1px solid #D6DFE4",
              borderBottom: "1px solid #D6DFE4",
              borderLeft: "1px solid #D6DFE4",
              backgroundColor: "#ffffff",
              boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.1)",
              "& .MuiMenu-list": {
                paddingTop: "4px",
                paddingRight: "5px",
                paddingBottom: "5px",
                paddingLeft: "5px",
                "& .MuiButtonBase-root": {
                  paddingTop: "12px",
                  paddingRight: "10px",
                  paddingBottom: "12px",
                  paddingLeft: "10px",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "25px",
                  color: "#212F4E",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#EEEFF0",
                    color: "#1F617F"
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#ffffff",
                    color: "#212F4E"
                  }
                }
              }
            }
          }
        },
        children
      }
    ) })
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ },

/***/ 455
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);



const Textarea = ({
  name,
  className,
  label,
  isRequired,
  isDisabled,
  placeholder
}) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `Textarea${className ? ` ${className}` : ""}`, children: [
  label ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: isRequired ? "Textarea__label Textarea__label--required" : "Textarea__label", children: label }) : null,
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    formik__WEBPACK_IMPORTED_MODULE_1__/* .Field */ .D0,
    {
      as: "textarea",
      autoComplete: "off",
      autoCapitalize: "off",
      disabled: isDisabled,
      className: "Textarea__field",
      name,
      placeholder
    }
  )
] });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);


/***/ },

/***/ 4151
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5338);
/* harmony import */ var react_dadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6540);
/* harmony import */ var react_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5593);
/* harmony import */ var react_components_Address_Address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5353);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3670);
/* harmony import */ var api_OrganizationsApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2972);
/* harmony import */ var env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9838);
/* harmony import */ var api_AddressApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5392);












const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true
});
const AddAddressPopUpProvider = () => {
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const [addresses, setAddresses] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [organizations, setOrganizations] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({ value: "" });
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (isLoading && addresses.length === 0) {
      (0,api_AddressApi__WEBPACK_IMPORTED_MODULE_9__/* .fetchAddresses */ .l)(setIsLoading, setAddresses);
      (0,api_OrganizationsApi__WEBPACK_IMPORTED_MODULE_7__/* .fetchOrganizations */ .fV)(setIsLoading, setOrganizations);
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (show) {
      (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .getPaddingOnBody */ .rP)();
    } else {
      (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .getPaddingFromBody */ .iW)();
    }
  }, [show]);
  window.AddAddressPopUpProvider = { setShow };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: "AddAddressPopUpProvider", children: [
    show ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
      {
        className: "Modal--address AddAddressPopUpProvider__modal AddAddressPopUpProvider__modal--nooverflow",
        closeModal: () => {
          setShow(false);
          setAddress({ value: "" });
        },
        closeEvent: placeholderEvent,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: "AddAddressPopUpProvider__form", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "AddAddressPopUpProvider__header", children: "\u0410\u0434\u0440\u0435\u0441" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "AddAddressPopUpProvider__text", children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0432 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "AddAddressPopUpProvider__field-container", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            react_dadata__WEBPACK_IMPORTED_MODULE_2__/* .AddressSuggestions */ .OO,
            {
              className: "AddAddressPopUpProvider__field",
              token: "14ae5e2d4d50c72272527cc24f93b32fa6650307",
              defaultQuery: address.value,
              onChange: setAddress,
              inputProps: { placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441" },
              delay: 1e3,
              count: 5
            }
          ) }),
          address.data ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "AddressProvider__buttons", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "button",
              {
                className: "button button--transparent AddressProvider__button AddressProvider__cancel",
                onClick: () => {
                  setShow(false);
                  setAddress("");
                },
                children: "\u2717 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "button",
              {
                className: "button AddressProvider__button",
                type: "button",
                onClick: () => {
                  setShow(false);
                },
                children: "\u0414\u0430\u043B\u0435\u0435"
              }
            )
          ] }) : null
        ] })
      }
    ) : null,
    show === false && address.data ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
      {
        className: "Modal--address AddAddressPopUpProvider__modal",
        closeModal: () => {
          setShow(false);
          setAddress({ value: "" });
        },
        closeEvent: placeholderEvent,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_components_Address_Address__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
          {
            address,
            organizations,
            cancelHandler: () => {
              setShow(true);
            },
            submitHandler: async (val) => {
              var _a, _b;
              const request = await fetch(
                `${window.routes5.addresses.requests.updateAddresses[`url${env__WEBPACK_IMPORTED_MODULE_8__/* .ENV */ .K}`]}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(val)
                }
              );
              if (request.status === 200) {
                const addresses2 = await request.json();
                const [id, name] = (_a = addresses2.flatMap((group) => {
                  var _a2;
                  return Object.entries((_a2 = group.addresses) != null ? _a2 : {});
                }).sort((a, b) => Number(b[0]) - Number(a[0]))[0]) != null ? _a : [];
                if (!id) {
                  console.error("[addresses] \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442:", addresses2);
                  setAddress({ value: "" });
                  window.AddAddressPopUpProvider.setShow(false);
                  return;
                }
                const optionValue = `${val.lat}|${val.lon}|${name}|${id}`;
                const currentOptions = window.addressPopUpSelectInstance.config.choices;
                currentOptions.splice(currentOptions.length - 1, 0, {
                  value: optionValue,
                  label: name,
                  disabled: false
                });
                window.addressPopUpSelectInstance.clearChoices();
                window.addressPopUpSelectInstance.setChoices(currentOptions);
                window.addressPopUpSelectInstance.setChoiceByValue(optionValue);
                const selectNode = (_b = window.addressPopUpSelectInstance.passedElement) == null ? void 0 : _b.element;
                if (selectNode) {
                  selectNode.dispatchEvent(new Event("change", { bubbles: true }));
                }
                setAddress({ value: "" });
                window.AddAddressPopUpProvider.setShow(false);
              }
            }
          }
        )
      }
    ) : null
  ] });
};
const AddressProviderContainer = document.querySelector(
  "#AddAddressPopUpProvider"
);
if (AddressProviderContainer) {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(AddressProviderContainer).render(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AddAddressPopUpProvider, {}));
}


/***/ },

/***/ 624
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__(3786);
// EXTERNAL MODULE: ./src/env.js
var env = __webpack_require__(9838);
// EXTERNAL MODULE: ./src/react/components/Form-Add-Organization-1/Form-Add-Organization-1.js
var Form_Add_Organization_1 = __webpack_require__(5393);
// EXTERNAL MODULE: ./src/react/components/Form-Add-Organization-2/Form-Add-Organization-2.js
var Form_Add_Organization_2 = __webpack_require__(6845);
;// ./src/react/components/Add-Organization-PopUp/Add-Organization-PopUp.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));






const AddOrganizationPopUp = () => {
  const [step, setStep] = (0,react.useState)("one");
  const [exist, setExist] = (0,react.useState)(false);
  const [formData, setFormData] = (0,react.useState)({
    firstStep: {
      inn: "",
      mainFio: "",
      mainEmail: "",
      mainPhone: "",
      mainRole: [],
      contacts: [
        {
          fio: "",
          email: "",
          phone: "",
          role: []
        }
      ]
    },
    secondStep: {
      inn: "",
      companyName: "",
      address: "",
      addressMailing: "",
      ogrn: "",
      kpp: ""
      // bank: "",
      // bik: "",
      // accountChecking: "",
      // accountСorrespondent: "",
    }
  });
  const fetchData = async (inn) => {
    const organization = await api/* dataAPI */.p5.getOrganization(inn);
    const emptyOrganization = Object.keys(organization.data).length === 0;
    if (!emptyOrganization) {
      setFormData((prevFormData) => __spreadProps(__spreadValues({}, prevFormData), {
        secondStep: {
          inn: organization.data.data.inn,
          companyName: organization.data.data.name.short_with_opf,
          address: organization.data.data.address.unrestricted_value,
          addressMailing: organization.data.data.address.unrestricted_value,
          ogrn: organization.data.data.ogrn,
          kpp: organization.data.data.kpp,
          bank: "",
          bik: "",
          accountChecking: "",
          account\u0421orrespondent: ""
        }
      }));
      setStep("two");
      setExist(organization.isAlreadyExist);
    } else {
      setFormData((prevFormData) => __spreadProps(__spreadValues({}, prevFormData), {
        secondStep: {
          inn: prevFormData.firstStep.inn,
          companyName: "",
          address: "",
          addressMailing: "",
          ogrn: "",
          kpp: "",
          bank: "",
          bik: "",
          accountChecking: "",
          account\u0421orrespondent: ""
        }
      }));
      setStep("two");
      setExist(organization.isAlreadyExist);
    }
  };
  const addNewOrganization = async (newOrganization) => {
    const result = await api/* organizationsApi */.Xp.addNewOrganization(newOrganization);
    const allOrganizationsRequest = await fetch(
      `${window.routes5.organizations.requests.getOrganizations[`url${env/* ENV */.K}`]}`
    );
    const allOrganizationsResponse = await allOrganizationsRequest.json();
    if (allOrganizationsRequest.status === 200) {
      const lastOrganization = allOrganizationsResponse[allOrganizationsResponse.length - 1];
      const currentOptions = window.organizationPopUpSelectInstance.config.choices;
      currentOptions.splice(currentOptions.length - 1, 0, {
        value: lastOrganization.id,
        label: lastOrganization.companyName,
        disabled: false
      });
      window.organizationPopUpSelectInstance.clearChoices();
      window.organizationPopUpSelectInstance.setChoices(currentOptions);
      window.organizationPopUpSelectInstance.setChoiceByValue(
        lastOrganization.id
      );
      window.AddOrganizationPopUpProvider.setOpen(false);
    }
  };
  let component = null;
  switch (step) {
    case "one":
      component = /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Form_Add_Organization_1/* default */.A,
        {
          fetchData,
          dataForm: formData,
          setDataForm: setFormData,
          onCancel: () => {
            window.AddOrganizationPopUpProvider.setOpen(false);
          }
        }
      );
      break;
    case "two":
      component = /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Form_Add_Organization_2/* default */.A,
        {
          dataForm: formData,
          setDataForm: setFormData,
          addNewOrganization,
          setStep,
          existFlag: exist
        }
      );
      break;
    default:
      break;
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "form-lk__add-organization", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { className: "form-lk__link", href: "/personal/organizations/", children: "\u2190 \u041C\u043E\u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438" }) }),
    component
  ] });
};
/* harmony default export */ const Add_Organization_PopUp = (AddOrganizationPopUp);

// EXTERNAL MODULE: ./src/react/components/Modal/Modal.js
var Modal = __webpack_require__(5593);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(3670);
;// ./src/react/providers/common/AddOrganizationPopUpProvider/AddOrganizationPopUpProvider.js







const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true
});
const AddOrganizationPopUpProvider = () => {
  const [open, setOpen] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (open) {
      (0,utils/* getPaddingOnBody */.rP)();
    } else {
      (0,utils/* getPaddingFromBody */.iW)();
    }
  }, [open]);
  window.AddOrganizationPopUpProvider = { setOpen };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("section", { className: "AddOrganizationPopUpProvider", children: open ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Modal/* default */.A,
    {
      closeModal: () => {
        setOpen(false);
        window.organizationPopUpSelectInstance.setChoiceByValue("");
      },
      className: "Modal--add-organization-popup",
      closeEvent: placeholderEvent,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Add_Organization_PopUp, {})
    }
  ) : null });
};
const AddOrganizationPopUpContainer = document.querySelector(
  "#AddOrganizationPopUpProvider"
);
if (AddOrganizationPopUpContainer) {
  (0,client.createRoot)(AddOrganizationPopUpContainer).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(AddOrganizationPopUpProvider, {}));
}


/***/ },

/***/ 7995
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
// EXTERNAL MODULE: ./src/react/components/Input/Input.js
var Input = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/react/components/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(8181);
;// ./src/react/components/FooterSubscribe/FooterSubscribe.js







const FooterSubscribe = ({ submitHandler, id }) => {
  const validationSchema = index_esm/* object */.Ik().shape({
    email: index_esm/* string */.Yj().email().required(),
    legal: index_esm/* boolean */.zM().oneOf([true])
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    formik_esm/* Formik */.l1,
    {
      initialValues: {
        id,
        email: "",
        legal: false
      },
      validationSchema,
      onSubmit: (values, actions) => {
        submitHandler(values, actions.resetForm);
      },
      children: ({
        values,
        errors,
        touched
      }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
        formik_esm/* Form */.lV,
        {
          className: "FooterSubscribe",
          action: "#",
          method: "post",
          noValidate: true,
          children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "FooterSubscribe__title", children: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443" }),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "FooterSubscribe__field", children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "email",
                  name: "email",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
                  className: errors.email && touched.email ? "Input--error" : null
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "FooterSubscribe__submit", type: "submit", "aria-label": "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0438", children: "\u2192" })
            ] }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "FooterSubscribe__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "FooterSubscribe__terms", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "FooterSubscribe__legal", children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Checkbox/* default */.A,
                {
                  type: "checkbox",
                  name: "legal",
                  toggle: true,
                  isRequired: true,
                  className: errors.legal && touched.legal ? "Checkbox--error" : null,
                  checked: values.legal
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { children: [
                "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ",
                /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/privacy.php", target: "_blank", children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" }),
                " \u0438 ",
                /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/agreement.php", target: "_blank", children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C" }),
                "."
              ] })
            ] }) }) })
          ]
        }
      )
    }
  );
};
/* harmony default export */ const FooterSubscribe_FooterSubscribe = (FooterSubscribe);

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 50 modules
var axios = __webpack_require__(4166);
;// ./src/api/FooterSubscribeApi.js

const FooterSubscribeApi = axios/* default */.A.create({
  baseURL: "/local/ajax",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5e3
});
const sendFooterSubscribe = (values, reset) => {
  const buttonSubmit = document.querySelector(".FooterSubscribe__submit");
  buttonSubmit.disabled = true;
  FooterSubscribeApi.post("/subscribe.php", values).then((response) => {
    if (response.status === 200) {
      window.Corners5ProjectLayout.summonAlert("#alert--subscribe");
      reset();
      setTimeout(() => {
        buttonSubmit.disabled = false;
      }, 1e3);
    }
  }).catch(() => {
    window.Corners5ProjectLayout.summonAlert("#alert--error");
    setTimeout(() => {
      buttonSubmit.disabled = false;
    }, 1e3);
  });
};

;// ./src/react/providers/common/FooterSubscribeProvider/FooterSubscribeProvider.js




const footerSubscribe = document.querySelector("#FooterSubscribeProvider");
if (footerSubscribe) {
  const { id } = footerSubscribe.dataset;
  const FooterSubscribeProvider = () => /* @__PURE__ */ (0,jsx_runtime.jsx)(FooterSubscribe_FooterSubscribe, { submitHandler: sendFooterSubscribe, id });
  (0,client.createRoot)(footerSubscribe).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(FooterSubscribeProvider, {}));
}


/***/ },

/***/ 4589
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./src/react/components/Modal/Modal.js
var Modal = __webpack_require__(5593);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(3670);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
// EXTERNAL MODULE: ./node_modules/@react-input/mask/module/InputMask.js + 8 modules
var InputMask = __webpack_require__(4971);
// EXTERNAL MODULE: ./src/env.js
var env = __webpack_require__(9838);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Select/Select.js + 44 modules
var Select = __webpack_require__(94);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/MenuItem/MenuItem.js + 3 modules
var MenuItem = __webpack_require__(5865);
;// ./src/react/components/InputPhoneInternational/InputPhoneInternational.js






const toMask = (m) => m.replace(/\\(.)|9/g, (_m, esc) => esc !== void 0 ? esc : "_");
const masks = [
  {
    country: "\u0420\u043E\u0441\u0441\u0438\u044F",
    code: "+7",
    mask: "+7 (999) 999-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ru.png`
  },
  {
    country: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C",
    code: "+375",
    mask: "+375 (99) 999-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/by_.png`
  },
  {
    country: "\u041A\u0438\u0440\u0433\u0438\u0437\u0438\u044F",
    code: "+996",
    mask: "+\\9\\96 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/kg.png`
  },
  {
    country: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D",
    code: "+7",
    mask: "+7 (999) 999-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/kz.png`
  },
  {
    country: "\u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D",
    code: "+998",
    mask: "+\\9\\98 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/uz.png`
  },
  {
    country: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F",
    code: "+374",
    mask: "+374 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/am.png`
  },
  {
    country: "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D",
    code: "+994",
    mask: "+\\9\\94 99-999-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/az.png`
  },
  {
    country: "\u0410\u0431\u0445\u0430\u0437\u0438\u044F",
    code: "+7",
    mask: "+7 (999) 999-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ab.png`
  },
  {
    country: "\u0423\u043A\u0440\u0430\u0438\u043D\u0430",
    code: "+380",
    mask: "+380 (99) 999-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ua.png`
  },
  {
    country: "\u0421\u0428\u0410",
    code: "+1",
    mask: "+1 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/us.png`
  },
  {
    country: "\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F",
    code: "+44",
    mask: "+44 99999 999999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/uk.png`
  },
  {
    country: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430",
    code: "+376",
    mask: "+376 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ad.png`
  },
  {
    country: "\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u043D\u044B\u0435 \u0410\u0440\u0430\u0431\u0441\u043A\u0438\u0435 \u044D\u043C\u0438\u0440\u0430\u0442\u044B",
    code: "+971",
    mask: "+\\971 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ae.png`
  },
  {
    country: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
    code: "+93",
    mask: "+\\93 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/af.png`
  },
  {
    country: "\u0410\u043D\u0442\u0438\u0433\u0443\u0430 \u0438 \u0411\u0430\u0440\u0431\u0443\u0434\u0430",
    code: "+1268",
    mask: "+1268 999-9999]",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ag.png`
  },
  {
    country: "\u0410\u043D\u0433\u0438\u043B\u044C\u044F",
    code: "+1264",
    mask: "+1264 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ai.png`
  },
  {
    country: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F",
    code: "+355",
    mask: "+355 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/al.png`
  },
  {
    country: "\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0435 \u0410\u043D\u0442\u0438\u043B\u044C\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430",
    code: "+599",
    mask: "+5\\9\\9 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/an.png`
  },
  {
    country: "\u0410\u043D\u0433\u043E\u043B\u0430",
    code: "+244",
    mask: "+244 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ao.png`
  },
  {
    country: "\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u0439\u0441\u043A\u0430\u044F \u0430\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u0437\u0430",
    code: "+6721",
    mask: "+6721 99-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/aq.png`
  },
  {
    country: "\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430",
    code: "+54",
    mask: "+54 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ar.png`
  },
  {
    country: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0435 \u0421\u0430\u043C\u043E\u0430",
    code: "+1684",
    mask: "+1684 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/as.png`
  },
  {
    country: "\u0410\u0432\u0441\u0442\u0440\u0438\u044F",
    code: "+43",
    mask: "+43 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/at.png`
  },
  {
    country: "\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F",
    code: "+61",
    mask: "+61 (9-9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/au.png`
  },
  {
    country: "\u0410\u0440\u0443\u0431\u0430",
    code: "+297",
    mask: "+2\\97 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/aw.png`
  },
  {
    country: "\u0411\u043E\u0441\u043D\u0438\u044F \u0438 \u0413\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430",
    code: "+387",
    mask: "+387 99-99999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ba.png`
  },
  {
    country: "\u0411\u0430\u0440\u0431\u0430\u0434\u043E\u0441",
    code: "+1246",
    mask: "+1246 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/bb.png`
  },
  {
    country: "\u0411\u0430\u043D\u0433\u043B\u0430\u0434\u0435\u0448",
    code: "+880",
    mask: "+880 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/bd.png`
  },
  {
    country: "\u0411\u0435\u043B\u044C\u0433\u0438\u044F",
    code: "+32",
    mask: "+32 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/be.png`
  },
  {
    country: "\u0411\u0443\u0440\u043A\u0438\u043D\u0430 \u0424\u0430\u0441\u043E",
    code: "+226",
    mask: "+226 99-99-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/bf.png`
  },
  {
    country: "\u0411\u043E\u043B\u0433\u0430\u0440\u0438\u044F",
    code: "+359",
    mask: "+35\\9 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/bg.png`
  },
  {
    country: "\u0411\u0430\u0445\u0440\u0435\u0439\u043D",
    code: "+973",
    mask: "+\\973 9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/bh.png`
  },
  {
    country: "\u0411\u0443\u0440\u0443\u043D\u0434\u0438",
    code: "+257",
    mask: "+257 99-99-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/bi.png`
  },
  {
    country: "\u0411\u0435\u043D\u0438\u043D",
    code: "+229",
    mask: "+22\\9 99-99-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/bj.png`
  },
  {
    country: "\u0411\u0435\u0440\u043C\u0443\u0434\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430",
    code: "+1441",
    mask: "+1441 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/bm.png`
  },
  {
    country: "\u0411\u0440\u0443\u043D\u0435\u0439-\u0414\u0430\u0440\u0443\u0441\u0441\u0430\u043B\u0430\u043C",
    code: "+673",
    mask: "+673 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/bn.png`
  },
  {
    country: "\u0411\u043E\u043B\u0438\u0432\u0438\u044F",
    code: "+591",
    mask: "+5\\91 9-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/bo.png`
  },
  {
    country: "\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u044F",
    code: "+55",
    mask: "+55 (99) 9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/br.png`
  },
  {
    country: "\u0411\u0430\u0433\u0430\u043C\u0441\u043A\u0438\u0435 \u041E\u0441\u0442\u0440\u043E\u0432\u0430",
    code: "+1242",
    mask: "+1242 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/bs.png`
  },
  {
    country: "\u0411\u043E\u0442\u0441\u0432\u0430\u043D\u0430",
    code: "+267",
    mask: "+267 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/bw.png`
  },
  {
    country: "\u0411\u0435\u043B\u0438\u0437",
    code: "+501",
    mask: "+501 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/bz.png`
  },
  {
    country: "\u041A\u0430\u043D\u0430\u0434\u0430",
    code: "+1",
    mask: "+1 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ca.png`
  },
  {
    country: "\u0414\u0435\u043C. \u0420\u0435\u0441\u043F. \u041A\u043E\u043D\u0433\u043E",
    code: "+243",
    mask: "+243 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/cd.png`
  },
  {
    country: "\u0426\u0435\u043D\u0442\u0440\u043E\u0430\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430",
    code: "+236",
    mask: "+236 99-99-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/cf.png`
  },
  {
    country: "\u041A\u043E\u043D\u0433\u043E (\u0411\u0440\u0430\u0437\u0437\u0430\u0432\u0438\u043B\u044C)",
    code: "+242",
    mask: "+242 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/cg.png`
  },
  {
    country: "\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044F",
    code: "+41",
    mask: "+41 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ch.png`
  },
  {
    country: "\u041A\u043E\u0442-\u0434'\u0418\u0432\u0443\u0430\u0440",
    code: "+225",
    mask: "+225 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ci.png`
  },
  {
    country: "\u041E\u0441\u0442\u0440\u043E\u0432\u0430 \u041A\u0443\u043A\u0430",
    code: "+682",
    mask: "+682 99-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ck.png`
  },
  {
    country: "\u0427\u0438\u043B\u0438",
    code: "+56",
    mask: "+56 9-9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/cl.png`
  },
  {
    country: "\u041A\u0430\u043C\u0435\u0440\u0443\u043D",
    code: "+237",
    mask: "+237 9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/cm.png`
  },
  {
    country: "\u041A\u041D\u0420",
    code: "+86",
    mask: "+86 (999)9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/cn.png`
  },
  {
    country: "\u041A\u043E\u043B\u0443\u043C\u0431\u0438\u044F",
    code: "+57",
    mask: "+57 (999)999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/co.png`
  },
  {
    country: "\u041A\u043E\u0441\u0442\u0430-\u0420\u0438\u043A\u0430",
    code: "+506",
    mask: "+506 9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/cr.png`
  },
  {
    country: "\u041A\u0443\u0431\u0430",
    code: "+53",
    mask: "+53 9-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/cu.png`
  },
  {
    country: "\u041A\u0430\u0431\u043E-\u0412\u0435\u0440\u0434\u0435",
    code: "+238",
    mask: "+238 (999) 99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/cv.png`
  },
  {
    country: "\u041A\u044E\u0440\u0430\u0441\u0430\u043E",
    code: "+599",
    mask: "+5\\9\\9 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/cw.png`
  },
  {
    country: "\u041A\u0438\u043F\u0440",
    code: "+357",
    mask: "+357 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/cy.png`
  },
  {
    country: "\u0427\u0435\u0445\u0438\u044F",
    code: "+420",
    mask: "+420 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/cz.png`
  },
  {
    country: "\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F",
    code: "+49",
    mask: "+4\\9 (999) 999-99999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/de.png`
  },
  {
    country: "\u0414\u0436\u0438\u0431\u0443\u0442\u0438",
    code: "+253",
    mask: "+253 99-99-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/dj.png`
  },
  {
    country: "\u0414\u0430\u043D\u0438\u044F",
    code: "+45",
    mask: "+45 99-99-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/dk.png`
  },
  {
    country: "\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430",
    code: "+1767",
    mask: "+1767 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/dm.png`
  },
  {
    country: "\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430",
    code: "+18",
    mask: "+18 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/do.png`
  },
  {
    country: "\u0410\u043B\u0436\u0438\u0440",
    code: "+213",
    mask: "+213 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/dz.png`
  },
  {
    country: "\u042D\u043A\u0432\u0430\u0434\u043E\u0440",
    code: "+593",
    mask: "+5\\93 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ec.png`
  },
  {
    country: "\u042D\u0441\u0442\u043E\u043D\u0438\u044F",
    code: "+372",
    mask: "+372 9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ee.png`
  },
  {
    country: "\u0415\u0433\u0438\u043F\u0435\u0442",
    code: "+20",
    mask: "+20 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/eg.png`
  },
  {
    country: "\u042D\u0440\u0438\u0442\u0440\u0435\u044F",
    code: "+291",
    mask: "+2\\91 9-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/er.png`
  },
  {
    country: "\u0418\u0441\u043F\u0430\u043D\u0438\u044F",
    code: "+34",
    mask: "+34 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/es.png`
  },
  {
    country: "\u042D\u0444\u0438\u043E\u043F\u0438\u044F",
    code: "+251",
    mask: "+251 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/et.png`
  },
  {
    country: "\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F",
    code: "+358",
    mask: "+358 (999) 999-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/fi.png`
  },
  {
    country: "\u0424\u0438\u0434\u0436\u0438",
    code: "+679",
    mask: "+67\\9 99-99999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/fj.png`
  },
  {
    country: "\u0424\u043E\u043B\u043A\u043B\u0435\u043D\u0434\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430",
    code: "+500",
    mask: "+500 99999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/fk.png`
  },
  {
    country: "\u0424.\u0428. \u041C\u0438\u043A\u0440\u043E\u043D\u0435\u0437\u0438\u0438",
    code: "+691",
    mask: "+6\\91 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/fm.png`
  },
  {
    country: "\u0424\u0430\u0440\u0435\u0440\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430",
    code: "+298",
    mask: "+2\\98 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/fo.png`
  },
  {
    country: "\u0424\u0440\u0430\u043D\u0446\u0438\u044F",
    code: "+33",
    mask: "+33 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/fr.png`
  },
  {
    country: "\u0413\u0430\u0431\u043E\u043D",
    code: "+241",
    mask: "+241 9-99-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ga.png`
  },
  {
    country: "\u0413\u0440\u0435\u043D\u0430\u0434\u0430",
    code: "+1473",
    mask: "+1473 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/gd.png`
  },
  {
    country: "\u0413\u0440\u0443\u0437\u0438\u044F",
    code: "+995",
    mask: "+\\9\\95 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ge.png`
  },
  {
    country: "\u0424\u0440. \u0413\u0432\u0438\u0430\u043D\u0430",
    code: "+594",
    mask: "+5\\94 99999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/gf.png`
  },
  {
    country: "\u0413\u0430\u043D\u0430",
    code: "+233",
    mask: "+233 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/gh.png`
  },
  {
    country: "\u0413\u0438\u0431\u0440\u0430\u043B\u0442\u0430\u0440",
    code: "+350",
    mask: "+350 999-99999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/gi.png`
  },
  {
    country: "\u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0438\u044F",
    code: "+299",
    mask: "+2\\9\\9 99-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/gl.png`
  },
  {
    country: "\u0413\u0430\u043C\u0431\u0438\u044F",
    code: "+220",
    mask: "+220 (999) 99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/gm.png`
  },
  {
    country: "\u0413\u0432\u0438\u043D\u0435\u044F",
    code: "+224",
    mask: "+224 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/gn.png`
  },
  {
    country: "\u042D\u043A\u0432\u0430\u0442\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0413\u0432\u0438\u043D\u0435\u044F",
    code: "+240",
    mask: "+240 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/gq.png`
  },
  {
    country: "\u0413\u0440\u0435\u0446\u0438\u044F",
    code: "+30",
    mask: "+30 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/gr.png`
  },
  {
    country: "\u0413\u0432\u0430\u0442\u0435\u043C\u0430\u043B\u0430",
    code: "+502",
    mask: "+502 9-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/gt.png`
  },
  {
    country: "\u0413\u0443\u0430\u043C",
    code: "+1671",
    mask: "+1671 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/gu.png`
  },
  {
    country: "\u0413\u0432\u0438\u043D\u0435\u044F-\u0411\u0438\u0441\u0430\u0443",
    code: "+245",
    mask: "+245 9-999999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/gw.png`
  },
  {
    country: "\u0413\u0430\u0439\u0430\u043D\u0430",
    code: "+592",
    mask: "+5\\92 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/gy.png`
  },
  {
    country: "\u0413\u043E\u043D\u043A\u043E\u043D\u0433",
    code: "+852",
    mask: "+852 9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/hk.png`
  },
  {
    country: "\u0413\u043E\u043D\u0434\u0443\u0440\u0430\u0441",
    code: "+504",
    mask: "+504 9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/hn.png`
  },
  {
    country: "\u0425\u043E\u0440\u0432\u0430\u0442\u0438\u044F",
    code: "+385",
    mask: "+385 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/hr.png`
  },
  {
    country: "\u0413\u0430\u0438\u0442\u0438",
    code: "+509",
    mask: "+50\\9 99-99-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ht.png`
  },
  {
    country: "\u0412\u0435\u043D\u0433\u0440\u0438\u044F",
    code: "+36",
    mask: "+36 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/hu.png`
  },
  {
    country: "\u0418\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u044F",
    code: "+62",
    mask: "+62 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/id.png`
  },
  {
    country: "\u0418\u0440\u043B\u0430\u043D\u0434\u0438\u044F",
    code: "+353",
    mask: "+353 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ie.png`
  },
  {
    country: "\u0418\u0437\u0440\u0430\u0438\u043B\u044C",
    code: "+972",
    mask: "+\\972 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/il.png`
  },
  {
    country: "\u0418\u043D\u0434\u0438\u044F",
    code: "+91",
    mask: "+\\91 (9999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/in.png`
  },
  {
    country: "\u0414\u0438\u0435\u0433\u043E-\u0413\u0430\u0440\u0441\u0438\u044F",
    code: "+246",
    mask: "+246 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/io.png`
  },
  {
    country: "\u0418\u0440\u0430\u043A",
    code: "+964",
    mask: "+\\964 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/iq.png`
  },
  {
    country: "\u0418\u0440\u0430\u043D",
    code: "+98",
    mask: "+\\98 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ir.png`
  },
  {
    country: "\u0418\u0441\u043B\u0430\u043D\u0434\u0438\u044F",
    code: "+354",
    mask: "+354 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/is.png`
  },
  {
    country: "\u0418\u0442\u0430\u043B\u0438\u044F",
    code: "+39",
    mask: "+3\\9 (999) 9999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/it.png`
  },
  {
    country: "\u042F\u043C\u0430\u0439\u043A\u0430",
    code: "+1876",
    mask: "+1876 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/jm.png`
  },
  {
    country: "\u0418\u043E\u0440\u0434\u0430\u043D\u0438\u044F",
    code: "+962",
    mask: "+\\962 9-9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/jo.png`
  },
  {
    country: "\u042F\u043F\u043E\u043D\u0438\u044F",
    code: "+81",
    mask: "+81 99-9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/jp.png`
  },
  {
    country: "\u041A\u0435\u043D\u0438\u044F",
    code: "+254",
    mask: "+254 999-999999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ke.png`
  },
  {
    country: "\u041A\u0430\u043C\u0431\u043E\u0434\u0436\u0430",
    code: "+855",
    mask: "+855 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/kh.png`
  },
  {
    country: "\u041A\u0438\u0440\u0438\u0431\u0430\u0442\u0438",
    code: "+686",
    mask: "+686 99-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ki.png`
  },
  {
    country: "\u041A\u043E\u043C\u043E\u0440\u044B",
    code: "+269",
    mask: "+26\\9 99-99999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/km.png`
  },
  {
    country: "\u0421\u0435\u043D\u0442-\u041A\u0438\u0442\u0441 \u0438 \u041D\u0435\u0432\u0438\u0441",
    code: "+1869",
    mask: "+186\\9 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/kn.png`
  },
  {
    country: "\u041A\u0443\u0432\u0435\u0439\u0442",
    code: "+965",
    mask: "+\\965 9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/kw.png`
  },
  {
    country: "\u041A\u0430\u0439\u043C\u0430\u043D\u043E\u0432\u044B \u043E\u0441\u0442\u0440\u043E\u0432\u0430",
    code: "+1345",
    mask: "+1345 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ky.png`
  },
  {
    country: "\u041B\u0430\u043E\u0441",
    code: "+856",
    mask: "+856 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/la.png`
  },
  {
    country: "\u041B\u0438\u0432\u0430\u043D",
    code: "+961",
    mask: "+\\961 99-999-999]",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/lb.png`
  },
  {
    country: "\u0421\u0435\u043D\u0442-\u041B\u044E\u0441\u0438\u044F",
    code: "+1758",
    mask: "+1758 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/lc.png`
  },
  {
    country: "\u041B\u0438\u0445\u0442\u0435\u043D\u0448\u0442\u0435\u0439\u043D",
    code: "+423",
    mask: "+423 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/li.png`
  },
  {
    country: "\u0428\u0440\u0438-\u041B\u0430\u043D\u043A\u0430",
    code: "+94",
    mask: "+\\94 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/lk.png`
  },
  {
    country: "\u041B\u0438\u0431\u0435\u0440\u0438\u044F",
    code: "+231",
    mask: "+231 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/lr.png`
  },
  {
    country: "\u041B\u0435\u0441\u043E\u0442\u043E",
    code: "+266",
    mask: "+266 9-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ls.png`
  },
  {
    country: "\u041B\u0438\u0442\u0432\u0430",
    code: "+370",
    mask: "+370 (999) 99-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/lt.png`
  },
  {
    country: "\u041B\u044E\u043A\u0441\u0435\u043C\u0431\u0443\u0440\u0433",
    code: "+352",
    mask: "+352 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/lu.png`
  },
  {
    country: "\u041B\u0430\u0442\u0432\u0438\u044F",
    code: "+371",
    mask: "+371 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/lv.png`
  },
  {
    country: "\u041B\u0438\u0432\u0438\u044F",
    code: "+218",
    mask: "+218 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ly.png`
  },
  {
    country: "\u041C\u0430\u0440\u043E\u043A\u043A\u043E",
    code: "+212",
    mask: "+212 99-9999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ma.png`
  },
  {
    country: "\u041C\u043E\u043D\u0430\u043A\u043E",
    code: "+377",
    mask: "+377 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mc.png`
  },
  {
    country: "\u041C\u043E\u043B\u0434\u043E\u0432\u0430",
    code: "+373",
    mask: "+373 9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/md.png`
  },
  {
    country: "\u0427\u0435\u0440\u043D\u043E\u0433\u043E\u0440\u0438\u044F",
    code: "+382",
    mask: "+382 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/me.png`
  },
  {
    country: "\u041C\u0430\u0434\u0430\u0433\u0430\u0441\u043A\u0430\u0440",
    code: "+261",
    mask: "+261 99-99-99999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mg.png`
  },
  {
    country: "\u041C\u0430\u0440\u0448\u0430\u043B\u043B\u043E\u0432\u044B \u041E\u0441\u0442\u0440\u043E\u0432\u0430",
    code: "+692",
    mask: "+6\\92 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mh.png`
  },
  {
    country: "\u0420\u0435\u0441\u043F. \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u044F",
    code: "+389",
    mask: "+38\\9 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mk.png`
  },
  {
    country: "\u041C\u0430\u043B\u0438",
    code: "+223",
    mask: "+223 99-99-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ml.png`
  },
  {
    country: "\u0411\u0438\u0440\u043C\u0430 (\u041C\u044C\u044F\u043D\u043C\u0430)",
    code: "+95",
    mask: "+\\95 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mm.png`
  },
  {
    country: "\u041C\u043E\u043D\u0433\u043E\u043B\u0438\u044F",
    code: "+976",
    mask: "+\\976 99-99-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mn.png`
  },
  {
    country: "\u041C\u0430\u043A\u0430\u043E",
    code: "+853",
    mask: "+853 9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mo.png`
  },
  {
    country: "\u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u041C\u0430\u0440\u0438\u0430\u043D\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 \u0421\u0430\u0439\u043F\u0430\u043D",
    code: "+1670",
    mask: "+1670 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mp.png`
  },
  {
    country: "\u041C\u0430\u0440\u0442\u0438\u043D\u0438\u043A\u0430",
    code: "+596",
    mask: "+5\\96 (999) 99-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mq.png`
  },
  {
    country: "\u041C\u0430\u0432\u0440\u0438\u0442\u0430\u043D\u0438\u044F",
    code: "+222",
    mask: "+222 99-99-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mr.png`
  },
  {
    country: "\u041C\u043E\u043D\u0442\u0441\u0435\u0440\u0440\u0430\u0442",
    code: "+1664",
    mask: "+1664 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ms.png`
  },
  {
    country: "\u041C\u0430\u043B\u044C\u0442\u0430",
    code: "+356",
    mask: "+356 9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mt.png`
  },
  {
    country: "\u041C\u0430\u0432\u0440\u0438\u043A\u0438\u0439",
    code: "+230",
    mask: "+230 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mu.png`
  },
  {
    country: "\u041C\u0430\u043B\u044C\u0434\u0438\u0432\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430",
    code: "+960",
    mask: "+\\960 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mv.png`
  },
  {
    country: "\u041C\u0430\u043B\u0430\u0432\u0438",
    code: "+265",
    mask: "+265 9-9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mw.png`
  },
  {
    country: "\u041C\u0435\u043A\u0441\u0438\u043A\u0430",
    code: "+52",
    mask: "+52 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mx.png`
  },
  {
    country: "\u041C\u0430\u043B\u0430\u0439\u0437\u0438\u044F",
    code: "+60",
    mask: "+60 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/my.png`
  },
  {
    country: "\u041C\u043E\u0437\u0430\u043C\u0431\u0438\u043A",
    code: "+258",
    mask: "+258 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/mz.png`
  },
  {
    country: "\u041D\u0430\u043C\u0438\u0431\u0438\u044F",
    code: "+264",
    mask: "+264 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/na.png`
  },
  {
    country: "\u041D\u0438\u0433\u0435\u0440",
    code: "+227",
    mask: "+227 99-99-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ne.png`
  },
  {
    country: "\u041D\u043E\u0440\u0444\u043E\u043B\u043A (\u043E\u0441\u0442\u0440\u043E\u0432)",
    code: "+6723",
    mask: "+6723 99-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/nf.png`
  },
  {
    country: "\u041D\u0438\u0433\u0435\u0440\u0438\u044F",
    code: "+234",
    mask: "+234 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ng.png`
  },
  {
    country: "\u041D\u0438\u043A\u0430\u0440\u0430\u0433\u0443\u0430",
    code: "+505",
    mask: "+505 9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ni.png`
  },
  {
    country: "\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B",
    code: "+31",
    mask: "+31 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/nl.png`
  },
  {
    country: "\u041D\u043E\u0440\u0432\u0435\u0433\u0438\u044F",
    code: "+47",
    mask: "+47 (999) 99-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/no.png`
  },
  {
    country: "\u041D\u0435\u043F\u0430\u043B",
    code: "+977",
    mask: "+\\977 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/np.png`
  },
  {
    country: "\u041D\u0430\u0443\u0440\u0443",
    code: "+674",
    mask: "+674 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/nr.png`
  },
  {
    country: "\u041D\u0438\u0443\u044D",
    code: "+683",
    mask: "+683 9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/nu.png`
  },
  {
    country: "\u041D\u043E\u0432\u0430\u044F \u0417\u0435\u043B\u0430\u043D\u0434\u0438\u044F",
    code: "+64",
    mask: "+64 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/nz.png`
  },
  {
    country: "\u041E\u043C\u0430\u043D",
    code: "+968",
    mask: "+\\968 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/om.png`
  },
  {
    country: "\u041F\u0430\u043D\u0430\u043C\u0430",
    code: "+507",
    mask: "+507 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/pa.png`
  },
  {
    country: "\u041F\u0435\u0440\u0443",
    code: "+51",
    mask: "+51 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/pe.png`
  },
  {
    country: "\u041F\u0430\u043F\u0443\u0430-\u041D\u043E\u0432\u0430\u044F \u0413\u0432\u0438\u043D\u0435\u044F",
    code: "+675",
    mask: "+675 (999) 99-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/pg.png`
  },
  {
    country: "\u0424\u0438\u043B\u0438\u043F\u043F\u0438\u043D\u044B",
    code: "+63",
    mask: "+63 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ph.png`
  },
  {
    country: "\u041F\u0430\u043A\u0438\u0441\u0442\u0430\u043D",
    code: "+92",
    mask: "+\\92 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/pk.png`
  },
  {
    country: "\u041F\u043E\u043B\u044C\u0448\u0430",
    code: "+48",
    mask: "+48 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/pl.png`
  },
  {
    country: "\u041F\u0430\u043B\u0435\u0441\u0442\u0438\u043D\u0430",
    code: "+970",
    mask: "+\\970 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ps.png`
  },
  {
    country: "\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0438\u044F",
    code: "+351",
    mask: "+351 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/pt.png`
  },
  {
    country: "\u041F\u0430\u043B\u0430\u0443",
    code: "+680",
    mask: "+680 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/pw.png`
  },
  {
    country: "\u041F\u0430\u0440\u0430\u0433\u0432\u0430\u0439",
    code: "+595",
    mask: "+5\\95 (999)999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/py.png`
  },
  {
    country: "\u041A\u0430\u0442\u0430\u0440",
    code: "+974",
    mask: "+\\974 9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/qa.png`
  },
  {
    country: "\u0420\u0435\u044E\u043D\u044C\u043E\u043D",
    code: "+262",
    mask: "+262 99999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/re.png`
  },
  {
    country: "\u0420\u0443\u043C\u044B\u043D\u0438\u044F",
    code: "+40",
    mask: "+40 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ro.png`
  },
  {
    country: "\u0421\u0435\u0440\u0431\u0438\u044F",
    code: "+381",
    mask: "+381 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/rs.png`
  },
  {
    country: "\u0420\u0443\u0430\u043D\u0434\u0430",
    code: "+250",
    mask: "+250 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/rw.png`
  },
  {
    country: "\u0421\u0430\u0443\u0434\u043E\u0432\u0441\u043A\u0430\u044F \u0410\u0440\u0430\u0432\u0438\u044F",
    code: "+966",
    mask: "+\\966 9-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sa.png`
  },
  {
    country: "\u0421\u043E\u043B\u043E\u043C\u043E\u043D\u043E\u0432\u044B \u041E\u0441\u0442\u0440\u043E\u0432\u0430",
    code: "+677",
    mask: "+677 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sb.png`
  },
  {
    country: "\u0421\u0435\u0439\u0448\u0435\u043B\u044B",
    code: "+248",
    mask: "+248 9-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sc.png`
  },
  {
    country: "\u0421\u0443\u0434\u0430\u043D",
    code: "+249",
    mask: "+24\\9 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sd.png`
  },
  {
    country: "\u0428\u0432\u0435\u0446\u0438\u044F",
    code: "+46",
    mask: "+46 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/se.png`
  },
  {
    country: "\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440",
    code: "+6565",
    mask: "+6565 9999999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sg.png`
  },
  {
    country: "\u041E\u0441\u0442\u0440\u043E\u0432 \u0421\u0432\u044F\u0442\u043E\u0439 \u0415\u043B\u0435\u043D\u044B",
    code: "+290",
    mask: "+2\\90 9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sh.png`
  },
  {
    country: "\u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F",
    code: "+386",
    mask: "+386 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/si.png`
  },
  {
    country: "\u0421\u043B\u043E\u0432\u0430\u043A\u0438\u044F",
    code: "+421",
    mask: "+421 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sk.png`
  },
  {
    country: "\u0421\u044C\u0435\u0440\u0440\u0430-\u041B\u0435\u043E\u043D\u0435",
    code: "+232",
    mask: "+232 99-999999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sl.png`
  },
  {
    country: "\u0421\u0430\u043D-\u041C\u0430\u0440\u0438\u043D\u043E",
    code: "+378",
    mask: "+378 9999-999999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sm.png`
  },
  {
    country: "\u0421\u0435\u043D\u0435\u0433\u0430\u043B",
    code: "+221",
    mask: "+221 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sn.png`
  },
  {
    country: "\u0421\u043E\u043C\u0430\u043B\u0438",
    code: "+252",
    mask: "+252 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/so.png`
  },
  {
    country: "\u0421\u0443\u0440\u0438\u043D\u0430\u043C",
    code: "+597",
    mask: "+5\\97 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sr.png`
  },
  {
    country: "\u042E\u0436\u043D\u044B\u0439 \u0421\u0443\u0434\u0430\u043D",
    code: "+211",
    mask: "+211 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ss.png`
  },
  {
    country: "\u0421\u0430\u043D-\u0422\u043E\u043C\u0435 \u0438 \u041F\u0440\u0438\u043D\u0441\u0438\u043F\u0438",
    code: "+239",
    mask: "+23\\9 99-99999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/st.png`
  },
  {
    country: "\u0421\u0430\u043B\u044C\u0432\u0430\u0434\u043E\u0440",
    code: "+503",
    mask: "+503 99-99-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sv.png`
  },
  {
    country: "\u0421\u0438\u0440\u0438\u044F (\u0421\u0438\u0440\u0438\u0439\u0441\u043A\u0430\u044F \u0430\u0440\u0430\u0431\u0441\u043A\u0430\u044F \u0440\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430)",
    code: "+963",
    mask: "+\\963 99-9999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sy.png`
  },
  {
    country: "\u0421\u0432\u0430\u0437\u0438\u043B\u0435\u043D\u0434",
    code: "+268",
    mask: "+268 99-99-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/sz.png`
  },
  {
    country: "\u0422\u0451\u0440\u043A\u0441 \u0438 \u041A\u0430\u0439\u043A\u043E\u0441",
    code: "+1649",
    mask: "+164\\9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/tc.png`
  },
  {
    country: "\u0427\u0430\u0434",
    code: "+235",
    mask: "+235 99-99-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/td.png`
  },
  {
    country: "\u0422\u043E\u0433\u043E",
    code: "+228",
    mask: "+228 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/tg.png`
  },
  {
    country: "\u0422\u0430\u0438\u043B\u0430\u043D\u0434",
    code: "+66",
    mask: "+66 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/th.png`
  },
  {
    country: "\u0422\u0430\u0434\u0436\u0438\u043A\u0438\u0441\u0442\u0430\u043D",
    code: "+992",
    mask: "+\\9\\92 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/tj.png`
  },
  {
    country: "\u0422\u043E\u043A\u0435\u043B\u0430\u0443",
    code: "+690",
    mask: "+6\\90 9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/tk.png`
  },
  {
    country: "\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0439 \u0422\u0438\u043C\u043E\u0440",
    code: "+670",
    mask: "+670 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/tl.png`
  },
  {
    country: "\u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0438\u0441\u0442\u0430\u043D",
    code: "+993",
    mask: "+\\9\\93 9-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/tm.png`
  },
  {
    country: "\u0422\u0443\u043D\u0438\u0441",
    code: "+216",
    mask: "+216 99-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/tn.png`
  },
  {
    country: "\u0422\u043E\u043D\u0433\u0430",
    code: "+676",
    mask: "+676 99999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/to.png`
  },
  {
    country: "\u0422\u0443\u0440\u0446\u0438\u044F",
    code: "+90",
    mask: "+\\90 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/tr.png`
  },
  {
    country: "\u0422\u0440\u0438\u043D\u0438\u0434\u0430\u0434 \u0438 \u0422\u043E\u0431\u0430\u0433\u043E",
    code: "+1868",
    mask: "+1868 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/tt.png`
  },
  {
    country: "\u0422\u0443\u0432\u0430\u043B\u0443",
    code: "+6882",
    mask: "+6882 9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/tv.png`
  },
  {
    country: "\u0422\u0430\u0439\u0432\u0430\u043D\u044C",
    code: "+886",
    mask: "+886 9-9999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/tw.png`
  },
  {
    country: "\u0422\u0430\u043D\u0437\u0430\u043D\u0438\u044F",
    code: "+255",
    mask: "+255 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/tz.png`
  },
  {
    country: "\u0423\u0433\u0430\u043D\u0434\u0430",
    code: "+256",
    mask: "+256 (999) 999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ug.png`
  },
  {
    country: "\u0423\u0440\u0443\u0433\u0432\u0430\u0439",
    code: "+598",
    mask: "+5\\98 9-999-99-99",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/uy.png`
  },
  {
    country: "\u0412\u0430\u0442\u0438\u043A\u0430\u043D",
    code: "+396698",
    mask: "+3\\966\\98 99999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/va.png`
  },
  {
    country: "\u0421\u0435\u043D\u0442-\u0412\u0438\u043D\u0441\u0435\u043D\u0442 \u0438 \u0413\u0440\u0435\u043D\u0430\u0434\u0438\u043D\u044B",
    code: "+1784",
    mask: "+1784 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/vc.png`
  },
  {
    country: "\u0412\u0435\u043D\u0435\u0441\u0443\u044D\u043B\u0430",
    code: "+58",
    mask: "+58 (999) 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ve.png`
  },
  {
    country: "\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u0438\u0435 \u0412\u0438\u0440\u0433\u0438\u043D\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430",
    code: "+1284",
    mask: "+1284 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/vg.png`
  },
  {
    country: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0435 \u0412\u0438\u0440\u0433\u0438\u043D\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430",
    code: "+1340",
    mask: "+1340 999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/vi.png`
  },
  {
    country: "\u0412\u044C\u0435\u0442\u043D\u0430\u043C",
    code: "+84",
    mask: "+84 (999) 9999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/vn.png`
  },
  {
    country: "\u0412\u0430\u043D\u0443\u0430\u0442\u0443",
    code: "+678",
    mask: "+678 99-99999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/vu.png`
  },
  {
    country: "\u0423\u043E\u043B\u043B\u0438\u0441 \u0438 \u0424\u0443\u0442\u0443\u043D\u0430",
    code: "+681",
    mask: "+681 99-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/wf.png`
  },
  {
    country: "\u0421\u0430\u043C\u043E\u0430",
    code: "+685",
    mask: "+685 99-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ws.png`
  },
  {
    country: "\u0419\u0435\u043C\u0435\u043D",
    code: "+967",
    mask: "+\\967 999-999-999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/ye.png`
  },
  {
    country: "\u042E\u0436\u043D\u043E-\u0410\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F.",
    code: "+27",
    mask: "+27 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/za.png`
  },
  {
    country: "\u0417\u0430\u043C\u0431\u0438\u044F",
    code: "+260",
    mask: "+260 99-999-9999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/zm.png`
  },
  {
    country: "\u0417\u0438\u043C\u0431\u0430\u0431\u0432\u0435",
    code: "+263",
    mask: "+263 9-999999",
    img: `${window.routes5.Media[`url${env/* ENV */.K}`]}flags/zw.png`
  }
];
const InputPhoneInternational = ({
  name,
  value,
  onChange,
  onBlur,
  onReset,
  className,
  label,
  placeholder,
  isRequired,
  isDisabled
}) => {
  const [country, setCountry] = (0,react.useState)(masks[0]);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    "div",
    {
      className: `InputPhoneInternational${className ? ` ${className}` : ""}`,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Select/* default */.A,
          {
            onChange: (evt) => {
              setCountry(evt.target.value);
              onReset();
            },
            value: country,
            renderValue: (val) => /* @__PURE__ */ (0,jsx_runtime.jsx)("img", { className: "InputPhoneInternational__image", src: val.img }),
            children: masks.map((maskObj) => /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuItem/* default */.A, { value: maskObj, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "InputPhoneInternational__country", children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                "img",
                {
                  src: maskObj.img,
                  className: "InputPhoneInternational__image"
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "InputPhoneInternational__country", children: maskObj.country }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "InputPhoneInternational__flag", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("b", { children: maskObj.code }) })
            ] }) }, maskObj.country))
          }
        ),
        label ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "label",
          {
            className: isRequired ? "InputPhoneInternational__label InputPhoneInternational__label--required" : "InputPhoneInternational__label",
            children: label
          }
        ) : null,
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          InputMask/* default */.A,
          {
            mask: toMask(country.mask),
            replacement: { _: /\d/ },
            minLength: "10",
            autoComplete: "off",
            autoCapitalize: "off",
            className: "InputPhoneInternational__field",
            type: "tel",
            name,
            placeholder,
            value,
            onChange,
            onBlur,
            disabled: isDisabled
          }
        )
      ]
    }
  );
};
/* harmony default export */ const InputPhoneInternational_InputPhoneInternational = (InputPhoneInternational);

// EXTERNAL MODULE: ./src/react/components/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(8181);
;// ./src/react/components/Login/Login.js







const validationSchema = index_esm/* object */.Ik().shape({
  phone: index_esm/* string */.Yj().matches(utils/* phoneRegExp */.Kh).required(),
  legal: index_esm/* boolean */.zM().oneOf([true])
});
const Login = ({ submitHandler }) => {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: "Login", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "Login__header", children: "\u0412\u0445\u043E\u0434 \u0438\u043B\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      formik_esm/* Formik */.l1,
      {
        initialValues: {
          phone: "",
          legal: false
        },
        validationSchema,
        onSubmit: (values) => {
          submitHandler(values.phone);
        },
        children: ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleReset
        }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(formik_esm/* Form */.lV, { noValidate: true, children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(
            InputPhoneInternational_InputPhoneInternational,
            {
              name: "phone",
              onBlur: handleBlur,
              value: values.phone,
              onChange: handleChange,
              onReset: handleReset,
              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
              className: `Login__input${errors.phone && touched.phone ? " Login__input--error" : ""}`
            }
          ),
          /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "button Login__button", type: "submit", children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u0434" }),
          /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "Login__legal", children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(
              Checkbox/* default */.A,
              {
                type: "checkbox",
                name: "legal",
                toggle: true,
                isRequired: true,
                className: errors.legal && touched.legal ? "Checkbox--error" : null,
                checked: values.legal
              }
            ),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { children: [
              "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ",
              /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/privacy.php", target: "_blank", children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" }),
              " \u0438 ",
              /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/agreement.php", target: "_blank", children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C" }),
              "."
            ] })
          ] })
        ] })
      }
    )
  ] });
};
/* harmony default export */ const Login_Login = (Login);

// EXTERNAL MODULE: ./src/react/components/Code/Code.js
var Code = __webpack_require__(5485);
// EXTERNAL MODULE: ./src/react/components/Input/Input.js
var Input = __webpack_require__(4541);
;// ./src/react/components/Registration/Registration.js





const Registration_validationSchema = index_esm/* object */.Ik().shape({
  fio: index_esm/* string */.Yj().required(),
  email: index_esm/* string */.Yj().email().required()
});
const Registration = ({ submitHandler }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: "Registration", children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "Registration__header", children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    formik_esm/* Formik */.l1,
    {
      initialValues: { fio: "", email: "" },
      validationSchema: Registration_validationSchema,
      onSubmit: (values) => {
        submitHandler(values);
      },
      children: ({ errors, touched }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(formik_esm/* Form */.lV, { noValidate: true, children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Input/* default */.A,
          {
            type: "text",
            name: "fio",
            label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
            isRequired: false,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0430\u043C\u0438\u043B\u0438\u044E \u0418\u043C\u044F",
            className: `Registration__input${errors.fio && touched.fio ? " Registration__input--error" : ""}`
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Input/* default */.A,
          {
            type: "email",
            name: "email",
            label: "E-mail",
            isRequired: false,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
            className: `Registration__input${errors.email && touched.email ? " Registration__input--error" : ""}`
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "button Registration__button", type: "submit", children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F" })
      ] })
    }
  ),
  /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { className: "Registration__link", children: [
    "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F\xBB, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 ",
    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/privacy.php", target: "_blank", children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" }),
    " \u0438 ",
    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/agreement.php", target: "_blank", children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C" }),
    "."
  ] })
] });
/* harmony default export */ const Registration_Registration = (Registration);

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 50 modules
var axios = __webpack_require__(4166);
;// ./src/api/LoginApi.js


const sendPhone = async (phone, returnData) => {
  try {
    const response = await axios/* default */.A.post(
      `${window.routes5.login.requests.sendPhone[`url${env/* ENV */.K}`]}`,
      { phone }
    );
    if (response.data.status === "success") {
      returnData({ data: phone, error: "", isLoading: false });
    } else if (response.data.status === "error") {
      returnData({ data: null, error: response.data.text, isLoading: false });
    }
  } catch (error) {
    if (error.response) {
      returnData({
        data: null,
        error: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430!",
        isLoading: false
      });
    } else if (error.request) {
      returnData({
        data: null,
        error: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430!",
        isLoading: false
      });
    }
  }
};
const sendCode = async (data, returnData) => {
  try {
    const response = await axios/* default */.A.post(
      `${window.routes5.login.requests.sendCode[`url${env/* ENV */.K}`]}`,
      { phone: data.phone, sms: data.sms }
    );
    if (response.data.status === "success") {
      returnData({
        data: { sms: data.sms, result: response.data.result },
        error: "",
        isLoading: false
      });
    } else if (response.data.status === "error") {
      returnData({ data: null, error: response.data.text, isLoading: false });
    }
  } catch (error) {
    if (error.response) {
      returnData({
        data: null,
        error: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430!",
        isLoading: false
      });
    } else if (error.request) {
      returnData({
        data: null,
        error: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430!",
        isLoading: false
      });
    }
  }
};
const sendRegistration = async (data, returnData) => {
  try {
    const response = await axios/* default */.A.post(
      `${window.routes5.login.requests.sendRegistration[`url${env/* ENV */.K}`]}`,
      { phone: data.phone, fio: data.fio, email: data.email }
    );
    if (response.data.status === "success") {
      returnData({ data: data.email, error: "", isLoading: false });
    } else if (response.data.status === "error") {
      returnData({ data: null, error: response.data.text, isLoading: false });
    }
  } catch (error) {
    if (error.response) {
      returnData({
        data: null,
        error: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430!",
        isLoading: false
      });
    } else if (error.request) {
      returnData({
        data: null,
        error: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430!",
        isLoading: false
      });
    }
  }
};

;// ./src/react/providers/common/LoginProvider/LoginProvider.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));









const defaultState = {
  data: null,
  error: "",
  isLoading: false
};
const closeEvent = new CustomEvent("ModalLoginClosed", {
  bubbles: true
});
const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true
});
const LoginProvider = () => {
  const [openPhone, setOpenPhone] = (0,react.useState)(false);
  const [openSms, setOpenSms] = (0,react.useState)(false);
  const [openRegistraion, setOpenRegistration] = (0,react.useState)(false);
  const [phoneQuery, setPhoneQuery] = (0,react.useState)(defaultState);
  const [smsQuery, setSmsQuery] = (0,react.useState)(defaultState);
  const [registrationQuery, setRegistrationQuery] = (0,react.useState)(defaultState);
  (0,react.useEffect)(() => {
    if (openPhone || openSms || openRegistraion) {
      (0,utils/* getPaddingOnBody */.rP)();
    } else {
      (0,utils/* getPaddingFromBody */.iW)();
    }
  }, [openPhone, openSms, openRegistraion]);
  (0,react.useEffect)(() => {
    if (phoneQuery.error !== "") {
      document.querySelector("#alert--error").content.querySelector(".alert__text").innerHTML = phoneQuery.error;
      window.Corners5ProjectLayout.summonAlert("#alert--error");
      setPhoneQuery(__spreadProps(__spreadValues({}, phoneQuery), { error: "" }));
    }
    if (smsQuery.error !== "") {
      document.querySelector("#alert--error").content.querySelector(".alert__text").innerHTML = smsQuery.error;
      window.Corners5ProjectLayout.summonAlert("#alert--error");
      setSmsQuery(__spreadProps(__spreadValues({}, smsQuery), { error: "" }));
    }
    if (registrationQuery.error !== "") {
      document.querySelector("#alert--error").content.querySelector(".alert__text").innerHTML = registrationQuery.error;
      window.Corners5ProjectLayout.summonAlert("#alert--error");
      setRegistrationQuery(__spreadProps(__spreadValues({}, registrationQuery), { error: "" }));
    }
  });
  (0,react.useEffect)(() => {
    if (phoneQuery.data !== null) {
      setOpenPhone(false);
      setOpenSms(true);
    }
  }, [phoneQuery.data]);
  (0,react.useEffect)(() => {
    setOpenSms(false);
    if (smsQuery.data !== null && smsQuery.data.result.openreg === 1) {
      setOpenRegistration(true);
    } else if (smsQuery.data !== null) {
      window.location.reload();
    }
  }, [smsQuery.data]);
  (0,react.useEffect)(() => {
    if (registrationQuery.data !== null) {
      setOpenRegistration(false);
      document.querySelector("#alert--confirm-email").content.querySelector(
        ".alert__text"
      ).innerHTML = `\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 \u043D\u0430\xA0<a class="alert__link" href='mailto:${registrationQuery.data}'>${registrationQuery.data}.</a>`;
      window.Corners5ProjectLayout.summonAlert("#alert--confirm-email");
      setPhoneQuery(defaultState);
      setSmsQuery(defaultState);
      setRegistrationQuery(defaultState);
    }
  });
  window.LoginProvider = { setOpenPhone, setOpenSms, setOpenRegistration };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: "LoginProvider", children: [
    openPhone ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Modal/* default */.A,
      {
        closeModal: () => {
          setOpenPhone(false);
          setPhoneQuery(defaultState);
        },
        className: "Modal--sms",
        closeEvent,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Login_Login,
          {
            submitHandler: (phone) => {
              sendPhone(phone, setPhoneQuery);
            }
          }
        )
      }
    ) : null,
    openSms ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Modal/* default */.A,
      {
        closeModal: () => {
          setOpenSms(false);
          setSmsQuery(defaultState);
        },
        className: "Modal--sms",
        closeEvent: placeholderEvent,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Code/* default */.A,
          {
            phoneNumber: phoneQuery.data,
            changeAction: () => {
              setOpenSms(false);
              setOpenPhone(true);
            },
            sendAgain: () => {
              sendPhone(phoneQuery.data, setPhoneQuery);
            },
            sendSms: (sms) => {
              sendCode({ phone: phoneQuery.data, sms }, setSmsQuery);
            }
          }
        )
      }
    ) : null,
    openRegistraion ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Modal/* default */.A,
      {
        closeModal: () => {
          setOpenRegistration(false);
          setRegistrationQuery(defaultState);
        },
        className: "Modal--sms",
        closeEvent: placeholderEvent,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Registration_Registration,
          {
            submitHandler: (values) => {
              sendRegistration(
                {
                  phone: phoneQuery.data,
                  fio: values.fio,
                  email: values.email
                },
                setRegistrationQuery
              );
            }
          }
        )
      }
    ) : null
  ] });
};
const LoginProviderContainer = document.querySelector("#LoginProvider");
if (LoginProviderContainer) {
  (0,client.createRoot)(LoginProviderContainer).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(LoginProvider, {}));
}


/***/ },

/***/ 5640
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
// EXTERNAL MODULE: ./src/react/components/Input/Input.js
var Input = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/react/components/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(8181);
;// ./src/react/components/Subscribe/Subscribe.js






const Subscribe = ({ submitHandler, id }) => {
  const validationSchema = index_esm/* object */.Ik().shape({
    email: index_esm/* string */.Yj().email().required(),
    legal: index_esm/* boolean */.zM().oneOf([true])
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "Subscribe", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "Subscribe__header", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("h2", { className: "Subscribe__title", children: "\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430\xA0\u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443! " }) }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      formik_esm/* Formik */.l1,
      {
        initialValues: {
          id,
          email: "",
          legal: false
        },
        validationSchema,
        onSubmit: (values, actions) => {
          submitHandler(values, actions.resetForm);
        },
        children: ({
          values,
          errors,
          touched
        }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
          formik_esm/* Form */.lV,
          {
            className: "Subscribe__form",
            id: "Subscribe-form",
            action: "#",
            method: "post",
            noValidate: true,
            children: [
              /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "Subscribe__fields", children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "Subscribe__post-title", children: "\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430\xA0\u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438\xA0\u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0441\u0430\u043C\u044B\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u0438\xA0\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043E\u0442\xA0\u043D\u0430\u0448\u0438\u0445 \u043F\u0438\u0432\u043E\u0432\u0430\u0440\u043E\u0432!" }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "Subscribe__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                  Input/* default */.A,
                  {
                    type: "email",
                    name: "email",
                    label: "E-mail",
                    isRequired: true,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
                    className: errors.email && touched.email ? "Input--error" : null
                  }
                ) })
              ] }),
              /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "Subscribe__terms", children: [
                /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "Subscribe__legal", children: [
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(
                    Checkbox/* default */.A,
                    {
                      type: "checkbox",
                      name: "legal",
                      toggle: true,
                      isRequired: true,
                      className: errors.legal && touched.legal ? "Checkbox--error" : null,
                      checked: values.legal
                    }
                  ),
                  /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { children: [
                    "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ",
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/privacy.php", target: "_blank", children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" }),
                    " \u0438 ",
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/agreement.php", target: "_blank", children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "Subscribe__submit button", type: "submit", children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" })
              ] })
            ]
          }
        )
      }
    )
  ] });
};
/* harmony default export */ const Subscribe_Subscribe = (Subscribe);

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 50 modules
var axios = __webpack_require__(4166);
;// ./src/api/SubscribeApi.js

const SubscribeApi = axios/* default */.A.create({
  baseURL: "/local/ajax",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5e3
});
const sendSubscribe = (values, reset) => {
  window.Corners5ProjectLayout.addLoading("#SubscribeProvider");
  SubscribeApi.post("/subscribe.php", values).then((response) => {
    if (response.status === 200) {
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert("#alert--subscribe");
      reset();
    }
  }).catch(() => {
    window.Corners5ProjectLayout.removeLoading();
    window.Corners5ProjectLayout.summonAlert("#alert--subscribe");
  });
};

;// ./src/react/providers/common/SubscribeProvider/SubscribeProvider.js





const subscribeProvider = document.querySelector("#SubscribeProvider");
if (subscribeProvider) {
  const { id } = subscribeProvider.dataset;
  const SubscribeProvider = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "container", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Subscribe_Subscribe, { submitHandler: sendSubscribe, id }) });
  (0,client.createRoot)(subscribeProvider).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(SubscribeProvider, {}));
}


/***/ },

/***/ 3045
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
// EXTERNAL MODULE: ./src/react/components/Input/Input.js
var Input = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/react/components/PhoneInput/PhoneInput.js
var PhoneInput = __webpack_require__(4395);
// EXTERNAL MODULE: ./src/react/components/Textarea/Textarea.js
var Textarea = __webpack_require__(455);
// EXTERNAL MODULE: ./src/react/components/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(8181);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(3670);
;// ./src/react/components/RequestContacts/RequestContacts.js









const RequestContacts = ({ submitHandler, id }) => {
  const validationSchema = index_esm/* object */.Ik().shape({
    fio: index_esm/* string */.Yj().required(),
    phone: index_esm/* string */.Yj().matches(utils/* phoneRegExp */.Kh).required(),
    email: index_esm/* string */.Yj().email().required(),
    text: index_esm/* string */.Yj().required(),
    legal: index_esm/* boolean */.zM().oneOf([true])
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestContacts", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestContacts__header", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("h2", { className: "RequestContacts__title", children: "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C" }) }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      formik_esm/* Formik */.l1,
      {
        initialValues: {
          id,
          fio: "",
          phone: "",
          email: "",
          text: "",
          legal: false
        },
        validationSchema,
        onSubmit: (values, actions) => {
          submitHandler(values, actions.resetForm);
        },
        children: ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur
        }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
          formik_esm/* Form */.lV,
          {
            className: "RequestContacts__form",
            action: "#",
            method: "post",
            noValidate: true,
            children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestContacts__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "fio",
                  label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
                  className: errors.fio && touched.fio ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestContacts__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                PhoneInput/* default */.A,
                {
                  name: "phone",
                  label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                  value: values.phone,
                  isRequired: true,
                  placeholder: "+7 (999) 999-99-99",
                  onChange: handleChange,
                  onBlur: handleBlur,
                  className: errors.phone && touched.phone ? "PhoneInput--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestContacts__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "email",
                  name: "email",
                  label: "E-mail",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
                  className: errors.email && touched.email ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestContacts__field RequestContacts__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Textarea/* default */.A,
                {
                  name: "text",
                  label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                  className: errors.text && touched.text ? "Textarea--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestContacts__field RequestContacts__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestContacts__terms", children: [
                /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestContacts__legal", children: [
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(
                    Checkbox/* default */.A,
                    {
                      type: "checkbox",
                      name: "legal",
                      toggle: true,
                      isRequired: true,
                      className: errors.legal && touched.legal ? "Checkbox--error" : null,
                      checked: values.legal
                    }
                  ),
                  /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { children: [
                    "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ",
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/privacy.php", target: "_blank", children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" }),
                    " \u0438 ",
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/agreement.php", target: "_blank", children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "RequestContacts__submit button", type: "submit", children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" })
              ] }) })
            ]
          }
        )
      }
    )
  ] });
};
/* harmony default export */ const RequestContacts_RequestContacts = (RequestContacts);

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 50 modules
var axios = __webpack_require__(4166);
;// ./src/api/RequestContactsApi.js

const RequestContactsApi = axios/* default */.A.create({
  baseURL: "/local/ajax",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5e3
});
const setStatus = (status) => {
  switch (status) {
    case "success":
      return "alert--green";
    case "error":
      return "alert--red";
    default:
      return "";
  }
};
const sendRequestContacts = (values, reset) => {
  window.Corners5ProjectLayout.addLoading("#RequestContactsProvider");
  RequestContactsApi.post("/feedback.php", values).then((response) => {
    if (response.status === 200) {
      const alert = document.querySelector("#alert--request").content.querySelector(".alert");
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector("#alert--request").content.querySelector(".alert__container");
      container.innerHTML = response.data.text;
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert("#alert--request");
      reset();
    }
  }).catch(() => {
    window.Corners5ProjectLayout.removeLoading();
    window.Corners5ProjectLayout.summonAlert("#alert--error");
  });
};

;// ./src/react/providers/pages/contacts/RequestContactsProvider/RequestContactsProvider.js





const requestContacts = document.querySelector("#RequestContactsProvider");
if (requestContacts) {
  const { id } = requestContacts.dataset;
  const RequestContactsProvider = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "container", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(RequestContacts_RequestContacts, { submitHandler: sendRequestContacts, id }) });
  (0,client.createRoot)(requestContacts).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(RequestContactsProvider, {}));
}


/***/ },

/***/ 7195
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
// EXTERNAL MODULE: ./src/react/components/Input/Input.js
var Input = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/react/components/PhoneInput/PhoneInput.js
var PhoneInput = __webpack_require__(4395);
// EXTERNAL MODULE: ./src/react/components/Textarea/Textarea.js
var Textarea = __webpack_require__(455);
// EXTERNAL MODULE: ./src/react/components/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(8181);
// EXTERNAL MODULE: ./src/react/components/FormContacts/FormContacts.js
var FormContacts = __webpack_require__(4569);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(3670);
;// ./src/react/components/RequestCooperation/RequestCooperation.js










const RequestCooperation = ({ submitHandler, id }) => {
  const validationSchema = index_esm/* object */.Ik().shape({
    fio: index_esm/* string */.Yj().required(),
    phone: index_esm/* string */.Yj().matches(utils/* phoneRegExp */.Kh).required(),
    email: index_esm/* string */.Yj().email().required(),
    text: index_esm/* string */.Yj().required(),
    legal: index_esm/* boolean */.zM().oneOf([true])
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestCooperation", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestCooperation__header", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("h2", { className: "RequestCooperation__title", children: "\u0421\u0442\u0430\u0442\u044C \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u043C" }) }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      formik_esm/* Formik */.l1,
      {
        initialValues: {
          id,
          fio: "",
          phone: "",
          email: "",
          text: "",
          legal: false
        },
        validationSchema,
        onSubmit: (values, actions) => {
          submitHandler(values, actions.resetForm);
        },
        children: ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur
        }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
          formik_esm/* Form */.lV,
          {
            className: "RequestCooperation__form",
            action: "#",
            method: "post",
            noValidate: true,
            children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestCooperation__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "fio",
                  label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
                  className: errors.fio && touched.fio ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestCooperation__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                PhoneInput/* default */.A,
                {
                  name: "phone",
                  label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                  value: values.phone,
                  isRequired: true,
                  placeholder: "+7 (999) 999-99-99",
                  onChange: handleChange,
                  onBlur: handleBlur,
                  className: errors.phone && touched.phone ? "PhoneInput--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestCooperation__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "email",
                  name: "email",
                  label: "E-mail",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
                  className: errors.email && touched.email ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestCooperation__field RequestCooperation__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Textarea/* default */.A,
                {
                  name: "text",
                  label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                  className: errors.text && touched.text ? "Textarea--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestCooperation__field RequestCooperation__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestCooperation__terms", children: [
                /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestCooperation__legal", children: [
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(
                    Checkbox/* default */.A,
                    {
                      type: "checkbox",
                      name: "legal",
                      toggle: true,
                      isRequired: true,
                      className: errors.legal && touched.legal ? "Checkbox--error" : null,
                      checked: values.legal
                    }
                  ),
                  /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { children: [
                    "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ",
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/privacy.php", target: "_blank", children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" }),
                    " \u0438 ",
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/agreement.php", target: "_blank", children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "RequestCooperation__submit button", type: "submit", children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" })
              ] }) })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestCooperation__footer", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FormContacts/* default */.A, { contacts: utils/* CONTACTS */.Mx }) })
  ] });
};
/* harmony default export */ const RequestCooperation_RequestCooperation = (RequestCooperation);

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 50 modules
var axios = __webpack_require__(4166);
;// ./src/api/RequestCooperationApi.js

const RequestCooperationApi = axios/* default */.A.create({
  baseURL: "/local/ajax",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5e3
});
const setStatus = (status) => {
  switch (status) {
    case "success":
      return "alert--green";
    case "error":
      return "alert--red";
    default:
      return "";
  }
};
const sendRequestCooperation = (values, reset) => {
  window.Corners5ProjectLayout.addLoading("#RequestCooperationProvider");
  RequestCooperationApi.post("/feedback_partner.php", values).then((response) => {
    if (response.status === 200) {
      const alert = document.querySelector("#alert--request").content.querySelector(".alert");
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector("#alert--request").content.querySelector(".alert__container");
      container.innerHTML = response.data.text;
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert("#alert--request");
      reset();
    }
  }).catch(() => {
    window.Corners5ProjectLayout.removeLoading();
    window.Corners5ProjectLayout.summonAlert("#alert--error");
  });
};

;// ./src/react/providers/pages/cooperation/RequestCooperationProvider/RequestCooperationProvider.js





const requestCooperation = document.querySelector("#RequestCooperationProvider");
if (requestCooperation) {
  const { id } = requestCooperation.dataset;
  const RequestCooperationProvider = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "container", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(RequestCooperation_RequestCooperation, { submitHandler: sendRequestCooperation, id }) });
  (0,client.createRoot)(requestCooperation).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(RequestCooperationProvider, {}));
}


/***/ },

/***/ 1088
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__(3786);
// EXTERNAL MODULE: ./src/react/components/Form-Add-Organization-1/Form-Add-Organization-1.js
var Form_Add_Organization_1 = __webpack_require__(5393);
// EXTERNAL MODULE: ./src/react/components/Form-Add-Organization-2/Form-Add-Organization-2.js
var Form_Add_Organization_2 = __webpack_require__(6845);
;// ./src/react/components/Add-Organization/Add-Organization.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));





const AddOrganization = () => {
  const [step, setStep] = (0,react.useState)("one");
  const [exist, setExist] = (0,react.useState)(false);
  const [formData, setFormData] = (0,react.useState)({
    firstStep: {
      inn: "",
      mainFio: "",
      mainEmail: "",
      mainPhone: "",
      mainRole: [],
      contacts: [
        {
          fio: "",
          email: "",
          phone: "",
          role: []
        }
      ]
    },
    secondStep: {
      inn: "",
      companyName: "",
      address: "",
      addressMailing: "",
      ogrn: "",
      kpp: ""
      // bank: "",
      // bik: "",
      // accountChecking: "",
      // accountСorrespondent: "",
    }
  });
  const fetchData = async (inn) => {
    const organization = await api/* dataAPI */.p5.getOrganization(inn);
    const emptyOrganization = Object.keys(organization.data).length === 0;
    if (!emptyOrganization) {
      setFormData((prevFormData) => __spreadProps(__spreadValues({}, prevFormData), {
        secondStep: {
          inn: organization.data.data.inn,
          companyName: organization.data.data.name.short_with_opf,
          address: organization.data.data.address.unrestricted_value,
          addressMailing: organization.data.data.address.unrestricted_value,
          ogrn: organization.data.data.ogrn,
          kpp: organization.data.data.kpp,
          bank: "",
          bik: "",
          accountChecking: "",
          account\u0421orrespondent: ""
        }
      }));
      setStep("two");
      setExist(organization.isAlreadyExist);
    } else {
      setFormData((prevFormData) => __spreadProps(__spreadValues({}, prevFormData), {
        secondStep: {
          inn: prevFormData.firstStep.inn,
          companyName: "",
          address: "",
          addressMailing: "",
          ogrn: "",
          kpp: "",
          bank: "",
          bik: "",
          accountChecking: "",
          account\u0421orrespondent: ""
        }
      }));
      setStep("two");
      setExist(organization.isAlreadyExist);
    }
  };
  const addNewOrganization = async (newOrganization) => {
    const result = await api/* organizationsApi */.Xp.addNewOrganization(newOrganization);
    if (result === "success") {
      window.Corners5ProjectLayout.summonAlert("#alert--add");
      setTimeout(() => {
        window.location.replace(
          `${window.location.origin}/personal/organizations/`
        );
      }, 3e3);
    }
  };
  let component = null;
  switch (step) {
    case "one":
      component = /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Form_Add_Organization_1/* default */.A,
        {
          fetchData,
          dataForm: formData,
          setDataForm: setFormData,
          onCancel: () => {
            window.location.assign(
              `${window.location.origin}/personal/organizations/`
            );
          }
        }
      );
      break;
    case "two":
      component = /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Form_Add_Organization_2/* default */.A,
        {
          dataForm: formData,
          setDataForm: setFormData,
          addNewOrganization,
          setStep,
          existFlag: exist
        }
      );
      break;
    default:
      break;
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "form-lk__add-organization", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { className: "form-lk__link", href: "/personal/organizations/", children: "\u2190 \u041C\u043E\u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438" }) }),
    component
  ] });
};
/* harmony default export */ const Add_Organization = (AddOrganization);

;// ./src/react/providers/pages/lk-add-organization/add-organization/add-organization.js




const addOrganization = document.querySelector("#add-organization");
if (addOrganization) {
  (0,client.createRoot)(addOrganization).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(Add_Organization, {}));
}


/***/ },

/***/ 8017
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react-dadata/dist/esm/index.js + 15 modules
var esm = __webpack_require__(2121);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./src/react/components/Modal/Modal.js
var Modal = __webpack_require__(5593);
// EXTERNAL MODULE: ./src/react/components/Address/Address.js
var Address = __webpack_require__(5353);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TextField/TextField.js + 7 modules
var TextField = __webpack_require__(1256);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(3518);
;// ./src/react/components/Editable/Editable.js






const Editable = ({ value, className, onEdit, onDelete }) => {
  const [val, setVal] = (0,react.useState)("");
  (0,react.useEffect)(() => {
    setVal(value);
  }, [value]);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: `Editable${className ? ` ${className}` : ""}`, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      TextField/* default */.A,
      {
        multiline: true,
        type: "text",
        value: val,
        disabled: true,
        onChange: (evt) => {
          setVal(evt.target.value);
        },
        sx: {
          width: "100%",
          "& .MuiOutlinedInput-root": {
            color: "red",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "25px",
            paddingTop: "12px",
            paddingRight: "70px",
            paddingBottom: "12px",
            paddingLeft: "20px",
            border: "1px solid #d6dfe4",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            "@media(max-Width: 767px)": {
              fontSize: "14px",
              lineHeight: "20px"
            },
            "& .MuiOutlinedInput-input": {
              "&.Mui-disabled": {
                color: "#212F4E",
                WebkitTextFillColor: "#212F4E"
              }
            },
            "& .MuiOutlinedInput-notchedOutline": {
              display: "none"
            }
          }
        }
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "Editable__buttons", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "button",
        {
          className: "Editable__edit",
          type: "button",
          onClick: () => {
            onEdit(val);
          },
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { width: "20", height: "20", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("use", { href: "#icon-pencil" }) })
        }
      ),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "button",
        {
          className: "Editable__delete",
          type: "button",
          onClick: () => {
            onDelete();
          },
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Close/* default */.A, {})
        }
      )
    ] })
  ] });
};
/* harmony default export */ const Editable_Editable = (Editable);

// EXTERNAL MODULE: ./src/react/components/Loader/Loader.js
var Loader = __webpack_require__(289);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(3670);
// EXTERNAL MODULE: ./src/api/OrganizationsApi.js
var OrganizationsApi = __webpack_require__(2972);
// EXTERNAL MODULE: ./src/api/AddressApi.js
var AddressApi = __webpack_require__(5392);
;// ./src/react/providers/pages/lk-addresses/AddressProvider/AddressProvider.js















const schemaAddress = index_esm/* object */.Ik().shape({
  address: index_esm/* string */.Yj().required()
});
const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true
});
const AddressProvider = () => {
  const [isLoading, setIsLoading] = (0,react.useState)(true);
  const [addresses, setAddresses] = (0,react.useState)([]);
  const [organizations, setOrganizations] = (0,react.useState)([]);
  const [show, setShow] = (0,react.useState)(false);
  const [addressToDelete, setAddressToDelete] = (0,react.useState)({});
  const [address, setAddress] = (0,react.useState)({ value: "" });
  const deleteAddress = (values, index, indx) => {
    delete values[index].addresses[indx];
    if (Object.keys(values[index].addresses).length === 0) {
      values.splice(index, 1);
    }
    (0,AddressApi/* sendUpdatedAddresses */.E)(values, setAddresses, setShow, setAddress);
  };
  (0,react.useEffect)(() => {
    if (isLoading && addresses.length === 0) {
      (0,AddressApi/* fetchAddresses */.l)(setIsLoading, setAddresses);
      (0,OrganizationsApi/* fetchOrganizations */.fV)(setIsLoading, setOrganizations);
    }
  });
  (0,react.useEffect)(() => {
    if (show || show === false && address.data) {
      (0,utils/* getPaddingOnBody */.rP)();
    } else {
      (0,utils/* getPaddingFromBody */.iW)();
    }
  }, [show, address.data]);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: "AddressProvider", children: [
    show ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Modal/* default */.A,
      {
        className: "Modal--address AddressProvider__modal AddressProvider__modal--nooverflow",
        closeModal: () => {
          setShow(false);
          setAddress({ value: "" });
        },
        closeEvent: placeholderEvent,
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: "AddressProvider__form", children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "AddressProvider__header", children: "\u0410\u0434\u0440\u0435\u0441" }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "AddressProvider__text", children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0432 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435" }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "AddressProvider__field-container", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
            esm/* AddressSuggestions */.OO,
            {
              className: "AddressProvider__field",
              token: "14ae5e2d4d50c72272527cc24f93b32fa6650307",
              defaultQuery: address.value,
              onChange: setAddress,
              inputProps: { placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441" },
              delay: 1e3,
              count: 5
            }
          ) }),
          address.data ? /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "AddressProvider__buttons", children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(
              "button",
              {
                className: "button button--transparent AddressProvider__button AddressProvider__cancel",
                onClick: () => {
                  setShow(false);
                  setAddress("");
                },
                children: "\u2717 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
              }
            ),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(
              "button",
              {
                className: "button AddressProvider__button",
                type: "button",
                onClick: () => {
                  setShow(false);
                },
                children: "\u0414\u0430\u043B\u0435\u0435"
              }
            )
          ] }) : null
        ] })
      }
    ) : null,
    show === false && address.data ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Modal/* default */.A,
      {
        className: "Modal--address AddressProvider__modal AddressProvider__modal--nooverflow",
        closeModal: () => {
          setShow(false);
          setAddress({ value: "" });
        },
        closeEvent: placeholderEvent,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Address/* default */.A,
          {
            address,
            organizations,
            cancelHandler: () => {
              setShow(true);
            },
            submitHandler: (val) => {
              (0,AddressApi/* sendUpdatedAddresses */.E)(val, setAddresses, setShow, setAddress);
            }
          }
        )
      }
    ) : null,
    Object.keys(addressToDelete).length !== 0 ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Modal/* default */.A,
      {
        className: "AddressProvider__delete-modal",
        closeModal: () => {
          setAddressToDelete({});
        },
        closeEvent: placeholderEvent,
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "AddressProvider__delete", children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { className: "AddressProvider__question", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("use", { href: "#icon-question" }) }),
          /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { className: "AddressProvider__delete-text", children: [
            "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E",
            /* @__PURE__ */ (0,jsx_runtime.jsx)("br", {}),
            " \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441?"
          ] }),
          /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "AddressProvider__delete-navigation", children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(
              "button",
              {
                className: "button button--transparent",
                onClick: () => {
                  setAddressToDelete({});
                },
                children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
              }
            ),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(
              "button",
              {
                className: "button",
                onClick: () => {
                  deleteAddress(
                    addresses,
                    addressToDelete.index,
                    addressToDelete.indx
                  );
                  setAddressToDelete({});
                },
                children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
              }
            )
          ] })
        ] })
      }
    ) : null,
    isLoading && addresses.length === 0 ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Loader/* default */.A, {}) : /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      addresses.map((item, index) => {
        const locations = Object.entries(item.addresses).map((adrs) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Editable_Editable,
          {
            value: adrs[1],
            onEdit: (val) => {
              setShow(true);
              setAddress({ value: val });
            },
            onDelete: () => {
              setAddressToDelete({ index, indx: adrs[0] });
            }
          },
          adrs[0]
        ));
        return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "AddressProvider__item", children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "AddressProvider__heading", children: item.name }),
          locations
        ] }, index);
      }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "button",
        {
          className: "button AddressProvider__add",
          onClick: () => {
            setShow(true);
          },
          children: "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441"
        }
      )
    ] })
  ] });
};
const AddressProviderContainer = document.querySelector("#AddressProvider");
if (AddressProviderContainer) {
  (0,client.createRoot)(AddressProviderContainer).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(AddressProvider, {}));
}


/***/ },

/***/ 5862
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./src/api/OrganizationsApi.js
var OrganizationsApi = __webpack_require__(2972);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(3518);
;// ./src/react/components/Warning/Warning.js



const calculateType = (type, text) => {
  switch (type) {
    case "success":
      return {
        className: "Warning Warning--success",
        message: /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "Warning__message", children: text })
      };
    case "error":
      return {
        className: "Warning Warning--error",
        message: /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { className: "Warning__message", children: [
          "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0435 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430. \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0430\u0439\u0442\u0430 ",
          /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "tel:+7 (123) 123 34 54", children: "+7 (123) 123 34 54" })
        ] })
      };
    default:
      return {
        className: "Warning",
        message: /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "Warning__message", children: "\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435! \u041F\u043E\u0441\u043B\u0435 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0431 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043E\u043D\u0430 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443." })
      };
  }
};
const Warning = ({ type, text, index, deleteFn }) => {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: calculateType(type, text).className, children: [
    type === "success" ? /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "Warning__close", type: "button", onClick: () => {
      deleteFn(index);
    }, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Close/* default */.A, {}) }) : null,
    calculateType(type, text).message
  ] });
};
/* harmony default export */ const Warning_Warning = (Warning);

// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(3670);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/MenuItem/MenuItem.js + 3 modules
var MenuItem = __webpack_require__(5865);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
// EXTERNAL MODULE: ./node_modules/tippy.js/dist/tippy.esm.js + 54 modules
var tippy_esm = __webpack_require__(9244);
// EXTERNAL MODULE: ./src/react/components/Input/Input.js
var Input = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/react/components/PhoneInput/PhoneInput.js
var PhoneInput = __webpack_require__(4395);
// EXTERNAL MODULE: ./src/react/components/Select/Select.js
var Select = __webpack_require__(4919);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/KeyboardArrowDown.js
var KeyboardArrowDown = __webpack_require__(1812);
;// ./src/react/components/Organization/Organization.js
/* unused harmony import specifier */ var jsx;
/* unused harmony import specifier */ var jsxs;













const validationSchema = index_esm/* object */.Ik().shape({
  inn: index_esm/* string */.Yj().required(),
  companyName: index_esm/* string */.Yj().required(),
  yuraAddress: index_esm/* string */.Yj().required(),
  PostAddress: index_esm/* string */.Yj().required(),
  ogrn: index_esm/* string */.Yj().required(),
  kpp: index_esm/* string */.Yj().required(),
  bankName: index_esm/* string */.Yj().required(),
  bik: index_esm/* string */.Yj().required(),
  checkingAccount: index_esm/* string */.Yj().required(),
  correspondentAccount: index_esm/* string */.Yj().required(),
  contacts: index_esm/* array */.YO().of(
    index_esm/* object */.Ik().shape({
      fio: index_esm/* string */.Yj().required(),
      email: index_esm/* string */.Yj().email().required(),
      phone: index_esm/* string */.Yj().matches(utils/* phoneRegExp */.Kh).required(),
      role: index_esm/* string */.Yj().required()
    })
  )
});
const calculateStatus = (type, message) => {
  switch (type) {
    case "main":
      return /* @__PURE__ */ jsx("p", { className: "Organization__status Organization__status--main", children: /* @__PURE__ */ jsx("span", { children: "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F" }) });
    case "fail":
      return /* @__PURE__ */ jsxs("p", { className: "Organization__status Organization__status--failed", children: [
        /* @__PURE__ */ jsx("span", { children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0435 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430" }),
        " ",
        message
      ] });
    case "checking":
      return /* @__PURE__ */ jsx("p", { className: "Organization__status Organization__status--checking", children: /* @__PURE__ */ jsx("span", { children: "\u041D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435" }) });
    default:
      return null;
  }
};
const Organization = ({ organization, unlockOrg, sendOrg, callAlert }) => {
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    (0,tippy_esm/* default */.Ay)("[data-tippy-content]", {
      allowHTML: true,
      arrow: false,
      maxWidth: 287,
      animation: "scale-subtle"
    });
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: `Organization${isOpen ? " Organization--opened" : ""}`, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: "Organization__constant", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "section",
        {
          className: "Organization__meta",
          onClick: () => {
            setIsOpen(true);
          },
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)("h3", { className: "Organization__header", children: organization.companyName })
        }
      ),
      /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { className: "Organization__who", children: [
        organization.inn,
        "\xA0",
        organization.who
      ] }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "button",
        {
          className: "Organization__arrow",
          type: "button",
          onClick: () => {
            setIsOpen(!isOpen);
          },
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(KeyboardArrowDown/* default */.A, {})
        }
      )
    ] }),
    isOpen ? /* @__PURE__ */ (0,jsx_runtime.jsx)("section", { className: "Organization__dynamic", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
      formik_esm/* Formik */.l1,
      {
        initialValues: {
          inn: organization.inn,
          companyName: organization.companyName,
          yuraAddress: organization.yuraAddress,
          PostAddress: organization.PostAddress,
          ogrn: organization.ogrn,
          kpp: organization.kpp,
          bankName: organization.bankName,
          bik: organization.bik,
          checkingAccount: organization.checkingAccount,
          correspondentAccount: organization.correspondentAccount,
          contacts: organization.contacts || []
        },
        enableReinitialize: true,
        validationSchema,
        onSubmit: (values) => {
          sendOrg(values);
        },
        children: ({ values, errors, touched, handleChange, handleBlur }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(formik_esm/* Form */.lV, { noValidate: true, children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(formik_esm/* FieldArray */.ED, { name: "contacts", children: ({ remove, push }) => /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: values.contacts.map((member, index) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: "Organization__contact", children: [
            /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: "Organization__contact-navigation", children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "Organization__contact-header", children: "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439" }),
              index !== 0 && organization.meta.status !== "fail" && organization.meta.status !== "checking" ? /* @__PURE__ */ (0,jsx_runtime.jsxs)(
                "button",
                {
                  className: "Organization__contact-delete",
                  onClick: () => {
                    remove(index);
                  },
                  children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { children: /* @__PURE__ */ (0,jsx_runtime.jsx)("use", { href: "#icon-trash" }) }),
                    "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442"
                  ]
                }
              ) : null
            ] }),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: "Organization__member", children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: `contacts[${index}].fio`,
                  label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
                  isRequired: false,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
                  className: `Organization__input${(0,formik_esm/* getIn */.O6)(errors, `contacts[${index}].fio`) && (0,formik_esm/* getIn */.O6)(touched, `contacts[${index}].fio`) ? " Organization__input--error" : ""}`,
                  isDisabled: true
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "email",
                  name: `contacts[${index}].email`,
                  label: "E-mail",
                  isRequired: false,
                  className: `Organization__input${(0,formik_esm/* getIn */.O6)(errors, `contacts[${index}].email`) && (0,formik_esm/* getIn */.O6)(touched, `contacts[${index}].email`) ? " Organization__input--error" : ""}`,
                  isDisabled: true
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                PhoneInput/* default */.A,
                {
                  name: `contacts[${index}].phone`,
                  onBlur: handleBlur,
                  value: values.contacts[index].phone,
                  onChange: handleChange,
                  label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
                  isRequired: false,
                  className: `Organization__input${(0,formik_esm/* getIn */.O6)(errors, `contacts[${index}].phone`) && (0,formik_esm/* getIn */.O6)(touched, `contacts[${index}].phone`) ? " Organization__input--error" : ""}`,
                  isDisabled: true
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsxs)(
                Select/* default */.A,
                {
                  multiple: true,
                  value: values.contacts[index].role || [],
                  name: `contacts[${index}].role`,
                  fieldName: "role",
                  onChange: handleChange,
                  label: "\u0420\u043E\u043B\u044C",
                  isRequired: false,
                  className: `Organization__input${(0,formik_esm/* getIn */.O6)(errors, `contacts[${index}].role`) && (0,formik_esm/* getIn */.O6)(touched, `contacts[${index}].role`) ? " Organization__input--error" : ""}`,
                  isDisabled: true,
                  children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuItem/* default */.A, { value: "\u041F\u0438\u0432\u043E\u0432\u0430\u0440", children: "\u041F\u0438\u0432\u043E\u0432\u0430\u0440" }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuItem/* default */.A, { value: "\u0417\u0430\u043A\u0443\u043F\u0449\u0438\u043A", children: "\u0417\u0430\u043A\u0443\u043F\u0449\u0438\u043A" }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuItem/* default */.A, { value: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440", children: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440" }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuItem/* default */.A, { value: "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439", children: "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439" }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuItem/* default */.A, { value: "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440", children: "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440" }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuItem/* default */.A, { value: "\u0414\u0440\u0443\u0433\u043E\u0435", children: "\u0414\u0440\u0443\u0433\u043E\u0435" })
                  ]
                }
              )
            ] })
          ] }, index)) }) }),
          /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: "Organization__info", children: [
            /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: "Organization__meta Organization__meta--flex", children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)("h3", { className: "Organization__contact-header", children: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F" }),
              organization.meta.status === "main" ? /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "tooltip Organization__tooltip", children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "Organization__tooltip-text", children: "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F" }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(
                  "button",
                  {
                    className: "tooltip__button",
                    type: "button",
                    "data-tippy-content": "\u042D\u0442\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438 \u0432\u0441\u0435 \u0446\u0435\u043D\u044B \u0438 \u0441\u043A\u0438\u0434\u043A\u0438 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u0438\u043C\u0435\u043D\u043D\u043E \u0434\u043B\u044F \u043D\u0435\u0435. \u0415\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u0443\u044E \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E, \u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 8 888 888-88-88."
                  }
                )
              ] }) : null
            ] }),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: "Organization__org-inputs", children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "inn",
                  label: "\u0418\u041D\u041D",
                  isRequired: false,
                  className: `Organization__input${errors.inn && touched.inn ? " Organization__input--error" : ""}`,
                  isDisabled: true
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "companyName",
                  label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F",
                  isRequired: false,
                  className: `Organization__input${errors.companyName && touched.companyName ? " Organization__input--error" : ""}`,
                  isDisabled: true
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "yuraAddress",
                  label: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441",
                  className: `Organization__input${errors.yuraAddress && touched.yuraAddress ? " Organization__input--error" : ""}`,
                  isDisabled: true
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "PostAddress",
                  label: "\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441",
                  isRequired: false,
                  className: `Organization__input${errors.PostAddress && touched.PostAddress ? " Organization__input--error" : ""}`,
                  isDisabled: true
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "ogrn",
                  label: "\u041E\u0413\u0420\u041D",
                  isRequired: false,
                  className: `Organization__input${errors.ogrn && touched.ogrn ? " Organization__input--error" : ""}`,
                  isDisabled: true
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "kpp",
                  label: "\u041A\u041F\u041F",
                  isRequired: false,
                  className: `Organization__input${errors.kpp && touched.kpp ? " Organization__input--error" : ""}`,
                  isDisabled: true
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "bankName",
                  label: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u0430\u043D\u043A\u0430",
                  isRequired: false,
                  className: `Organization__input${errors.bankName && touched.bankName ? " Organization__input--error" : ""}`,
                  isDisabled: true
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "bik",
                  label: "\u0411\u0418\u041A \u0431\u0430\u043D\u043A\u0430",
                  isRequired: false,
                  className: `Organization__input${errors.bik && touched.bik ? " Organization__input--error" : ""}`,
                  isDisabled: true
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "checkingAccount",
                  label: "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442",
                  isRequired: false,
                  className: `Organization__input${errors.checkingAccount && touched.checkingAccount ? " Organization__input--error" : ""}`,
                  isDisabled: true
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "correspondentAccount",
                  label: "\u041A\u043E\u0440. \u0441\u0447\u0435\u0442",
                  isRequired: false,
                  className: `Organization__input${errors.correspondentAccount && touched.correspondentAccount ? " Organization__input--error" : ""}`,
                  isDisabled: true
                }
              )
            ] })
          ] })
        ] })
      }
    ) }) : null
  ] });
};
/* harmony default export */ const Organization_Organization = (Organization);

// EXTERNAL MODULE: ./src/react/components/Modal/Modal.js
var Modal = __webpack_require__(5593);
// EXTERNAL MODULE: ./src/react/components/Loader/Loader.js
var Loader = __webpack_require__(289);
// EXTERNAL MODULE: ./src/react/components/Code/Code.js
var Code = __webpack_require__(5485);
;// ./src/react/providers/pages/lk-my-organization/OrganizationProvider/OrganizationProvider.js










const emptyOrganization = (/* unused pure expression or super */ null && ({
  inn: "",
  companyName: "\u041E\u041E\u041E \u0415\u0449\u0435 \u043E\u0434\u043D\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F",
  yuraAddress: "",
  PostAddress: "",
  ogrn: "",
  kpp: "",
  bankName: "",
  bik: "",
  checkingAccount: "",
  correspondentAccount: "",
  contacts: [
    {
      fio: "",
      email: "",
      phone: "",
      role: ""
    }
  ],
  meta: {
    status: "",
    message: ""
  }
}));
const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true
});
const OrganizationProvider = () => {
  const [isLoading, setIsLoading] = (0,react.useState)(true);
  const [organizations, setOrganizations] = (0,react.useState)([]);
  const [warnings, setWarnings] = (0,react.useState)([]);
  const [organizationToDelete, setOrganizationToDelete] = (0,react.useState)(null);
  (0,react.useEffect)(() => {
    if (isLoading && organizations.length === 0) {
      (0,OrganizationsApi/* fetchOrganizations */.fV)(setIsLoading, setOrganizations);
    }
  });
  const replaceOldOrgWithNew = (newOrganization) => {
    const indexToReplace = organizations.findIndex(
      (item) => item.inn === newOrganization.inn
    );
    organizations[indexToReplace] = newOrganization;
    (0,OrganizationsApi/* sendUpdatedOrganizations */.OF)(
      organizations,
      indexToReplace,
      setOrganizations,
      warnings,
      setWarnings
    );
  };
  const deleteOrganization = () => {
    const updatedArray = organizations.filter(
      (item) => item.inn !== organizationToDelete.inn
    );
    (0,OrganizationsApi/* sendDeletedOrganizations */.uy)(
      updatedArray,
      setOrganizations,
      setOrganizationToDelete
    );
  };
  const unlockOrganization = (inn) => {
    const updatedOrganizations = [...organizations];
    const organiztionIndexToUnlock = updatedOrganizations.findIndex(
      (item) => item.inn === inn
    );
    updatedOrganizations[organiztionIndexToUnlock].meta.status = "";
    setOrganizations(updatedOrganizations);
  };
  const deleteWarning = (index) => {
    const filteredWarnings = warnings.filter((_alert, indx) => indx !== index);
    setWarnings(filteredWarnings);
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "OrganizationProvider", children: [
    organizationToDelete ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Modal/* default */.A,
      {
        closeModal: () => {
          setOrganizationToDelete(null);
        },
        closeEvent: placeholderEvent,
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "OrganizationProvider__delete", children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { className: "OrganizationProvider__question", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("use", { href: "#icon-question" }) }),
          /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { className: "OrganizationProvider__delete-text", children: [
            "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E",
            " ",
            organizationToDelete.companyName,
            "?"
          ] }),
          /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "OrganizationProvider__delete-navigation", children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(
              "button",
              {
                className: "button button--transparent",
                onClick: () => {
                  setOrganizationToDelete(null);
                },
                children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
              }
            ),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(
              "button",
              {
                className: "button",
                onClick: () => {
                  deleteOrganization();
                },
                children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
              }
            )
          ] })
        ] })
      }
    ) : null,
    isLoading && organizations.length === 0 ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Loader/* default */.A, {}) : /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      organizations.length > 0 ? /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
        warnings.length !== 0 ? warnings.map((item, index) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Warning_Warning,
          {
            index,
            type: item.type,
            deleteFn: deleteWarning,
            text: `\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0431 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 ${item.text} \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443. \u041D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0438 \u043E\u0431\u0441\u0443\u0434\u0438\u0442 \u0434\u0435\u0442\u0430\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439.`
          },
          index
        )) : null,
        organizations.map((item, index) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Organization_Organization,
          {
            organization: item,
            unlockOrg: unlockOrganization,
            sendOrg: replaceOldOrgWithNew,
            callAlert: setOrganizationToDelete
          },
          index
        ))
      ] }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "Organization__contact-header", children: "\u0412 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0443 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439." }) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "a",
        {
          className: "button OrganizationProvider__button",
          href: window.routes5.LINKS.addOrganization,
          children: "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E"
        }
      )
    ] })
  ] });
};
const Organizations = document.querySelector("#OrganizationProvider");
if (Organizations) {
  (0,client.createRoot)(Organizations).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(OrganizationProvider, {}));
}


/***/ },

/***/ 780
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
;// ./src/react/components/Form-Name/Form-Name.js




const FormName = (props) => {
  const { name, updateName } = props;
  const [editModeName, setEditModeName] = (0,react.useState)(true);
  const formik = (0,formik_esm/* useFormik */.Wx)({
    initialValues: {
      name
    },
    validationSchema: index_esm/* object */.Ik({
      name: index_esm/* string */.Yj().min(2, "\u041C\u0438\u043D\u0438\u043C\u0443\u043C 2 \u0441\u0438\u043C\u0432\u043E\u043B\u0430").max(100, "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C 100 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432").required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!")
    }),
    onSubmit: (values) => {
      if (name !== values.name) {
        updateName(values.name);
      }
      setEditModeName(true);
    }
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("form", { className: "form-personal-data form-lk", onSubmit: formik.handleSubmit, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)("label", { className: formik.errors.name && formik.touched.name ? "form-lk__label error" : "form-lk__label", htmlFor: "name", children: [
      "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
      /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: "*" })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      "input",
      {
        className: formik.errors.name && formik.touched.name ? "form-lk__item error" : "form-lk__item form-lk__item--limited",
        id: "name",
        name: "name",
        type: "text",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
        disabled: editModeName,
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        value: formik.values.name
      }
    ),
    editModeName && /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "form-lk__button-personal form-lk__button-personal--edit", onClick: () => setEditModeName(!editModeName), children: /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { className: "form-lk__pencil-icon", width: "25", height: "25", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("use", { xlinkHref: "#icon-pencil" }) }) }),
    !editModeName && /* @__PURE__ */ (0,jsx_runtime.jsxs)(
      "button",
      {
        className: "form-lk__button-personal form-lk__button-personal--save",
        disabled: !formik.isValid && !formik.dirty,
        onClick: formik.onSubmit,
        type: "submit",
        children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: "\u2713\xA0" }),
          "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
        ]
      }
    )
  ] });
};
/* harmony default export */ const Form_Name = (FormName);

;// ./src/react/components/Form-Email/Form-Email.js




const FormEmail = (props) => {
  const emailRegExp = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
  const { email, updateEmail } = props;
  const [editModeEmail, setEditModeEmail] = (0,react.useState)(true);
  const formik = (0,formik_esm/* useFormik */.Wx)({
    initialValues: {
      email
    },
    validationSchema: index_esm/* object */.Ik({
      email: index_esm/* string */.Yj().matches(emailRegExp, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 email \u0430\u0434\u0440\u0435\u0441").max(100, "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C 100 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432").required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!")
    }),
    onSubmit: (values) => {
      if (email !== values.email) {
        updateEmail(values.email);
      }
      setEditModeEmail(true);
    }
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("form", { className: "form-personal-data form-lk", onSubmit: formik.handleSubmit, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)("label", { className: formik.errors.email && formik.touched.email ? "form-lk__label error" : "form-lk__label", htmlFor: "email", children: [
      "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
      /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: "*" })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      "input",
      {
        className: formik.errors.email && formik.touched.email ? "form-lk__item error" : "form-lk__item form-lk__item--limited",
        id: "email",
        name: "email",
        type: "email",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",
        disabled: editModeEmail,
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        value: formik.values.email
      }
    ),
    editModeEmail && /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "form-lk__button-personal form-lk__button-personal--edit", onClick: () => setEditModeEmail(!editModeEmail), children: /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { className: "form-lk__pencil-icon", width: "25", height: "25", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("use", { xlinkHref: "#icon-pencil" }) }) }),
    !editModeEmail && /* @__PURE__ */ (0,jsx_runtime.jsxs)(
      "button",
      {
        className: "form-lk__button-personal form-lk__button-personal--save",
        disabled: !formik.isValid && !formik.dirty,
        type: "submit",
        children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: "\u2713\xA0" }),
          "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
        ]
      }
    )
  ] }) });
};
/* harmony default export */ const Form_Email = (FormEmail);

// EXTERNAL MODULE: ./node_modules/@react-input/mask/module/InputMask.js + 8 modules
var InputMask = __webpack_require__(4971);
;// ./src/react/components/Form-Phone/Form-Phone.js





const FormPhone = (props) => {
  const { phone, updatePhone, editModePhone, setEditModePhone } = props;
  const phoneRegExp = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;
  const validationSchema = index_esm/* object */.Ik({
    phone: index_esm/* string */.Yj().matches(phoneRegExp, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440").max(20, "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C 20 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432").required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!")
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    formik_esm/* Formik */.l1,
    {
      initialValues: {
        phone
      },
      validationSchema,
      onSubmit: (values) => {
        if (phone !== values.phone) {
          updatePhone(values.phone);
        }
        setEditModePhone(true);
      },
      children: ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        dirty
      }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(formik_esm/* Form */.lV, { className: "form-personal-data form-lk", children: [
        /* @__PURE__ */ (0,jsx_runtime.jsxs)("label", { className: errors.phone && touched.phone ? "form-lk__label error" : "form-lk__label", htmlFor: "phone", children: [
          "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
          /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: "*" })
        ] }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          InputMask/* default */.A,
          {
            mask: "+7 (___) ___-__-__",
            replacement: { _: /\d/ },
            className: errors.phone && touched.phone ? "form-lk__item error" : "form-lk__item",
            id: "phone",
            name: "phone",
            type: "phone",
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
            value: values.phone,
            onChange: handleChange,
            onBlur: handleBlur,
            disabled: editModePhone
          }
        ),
        editModePhone && /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "form-lk__button-personal form-lk__button-personal--edit", onClick: () => setEditModePhone(!editModePhone), children: /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { className: "form-lk__pencil-icon", width: "25", height: "25", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("use", { xlinkHref: "#icon-pencil" }) }) }),
        !editModePhone && /* @__PURE__ */ (0,jsx_runtime.jsxs)(
          "button",
          {
            className: "form-lk__button-personal form-lk__button-personal--save",
            disabled: !isValid && !dirty,
            type: "submit",
            children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: "\u2713\xA0" }),
              "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
            ]
          }
        )
      ] })
    }
  );
};
/* harmony default export */ const Form_Phone = (FormPhone);

// EXTERNAL MODULE: ./src/react/components/Modal/Modal.js
var Modal = __webpack_require__(5593);
// EXTERNAL MODULE: ./src/react/components/Code/Code.js
var Code = __webpack_require__(5485);
// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__(3786);
// EXTERNAL MODULE: ./src/react/components/Loader/Loader.js
var Loader = __webpack_require__(289);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(3670);
;// ./src/react/components/Form-Personal-Data/Form-Personal-Data.js










const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true
});
const FormPersonalData = () => {
  const [show, setShow] = (0,react.useState)(false);
  const [error, setError] = (0,react.useState)(null);
  const [phone, setPhone] = (0,react.useState)("");
  const [newPhone, setNewPhone] = (0,react.useState)("");
  const [editModePhone, setEditModePhone] = (0,react.useState)(true);
  const [email, setEmail] = (0,react.useState)("");
  const [newEmail, setNewEmail] = (0,react.useState)("");
  const [name, setName] = (0,react.useState)("");
  const [isLoading, setIsLoading] = (0,react.useState)(true);
  const link = document.querySelector("#alert--confirm-email").content.querySelector(".alert__link");
  link.textContent = `${newEmail}.`;
  link.setAttribute("href", `mailto:${newEmail}`);
  const fetchData = async () => {
    const data = await api/* profileApi */.gu.getProfile();
    if (data.status === "success") {
      setName(data.profile.name);
      setEmail(data.profile.email);
      setPhone(data.profile.phone);
    } else {
      setError(data);
    }
    setIsLoading(false);
  };
  const updateName = async (value) => {
    await api/* profileApi */.gu.updateName(value);
    setName(value);
  };
  const updateEmail = async (value) => {
    setNewEmail(value);
    await api/* profileApi */.gu.updateEmail(value);
    setEmail(newEmail);
  };
  const updatePhone = async (value) => {
    const data = await api/* profileApi */.gu.updatePhone(value);
    if (data !== false) {
      setShow(true);
      setNewPhone(value);
    }
  };
  const sendSMS = async (sms) => {
    await api/* profileApi */.gu.sendSMS(sms, newPhone, setShow);
    setPhone(newPhone);
  };
  (0,react.useEffect)(() => {
    fetchData();
  }, []);
  (0,react.useEffect)(() => {
    if (show) {
      (0,utils/* getPaddingOnBody */.rP)();
    } else {
      (0,utils/* getPaddingFromBody */.iW)();
    }
  }, [show]);
  if (error !== null) {
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)("h2", { className: "form-lk__title", children: "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435" }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "Organization__contact-header", children: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445." })
    ] });
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
    show && /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Modal/* default */.A,
      {
        closeModal: () => {
          setShow(false);
        },
        className: "Modal--sms",
        closeEvent: placeholderEvent,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Code/* default */.A,
          {
            phoneNumber: newPhone,
            changeAction: () => {
              setPhone("");
              setShow(false);
              setEditModePhone(false);
            },
            sendAgain: () => {
              updatePhone(newPhone);
            },
            sendSms: sendSMS
          }
        )
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)("h2", { className: "form-lk__title", children: "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435" }),
    isLoading ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Loader/* default */.A, { color: "#212F4E" }) : /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Form_Name, { name, updateName }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Form_Email, { email, updateEmail }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Form_Phone,
        {
          phone,
          editModePhone,
          setEditModePhone,
          updatePhone
        }
      )
    ] })
  ] });
};
/* harmony default export */ const Form_Personal_Data = (FormPersonalData);

;// ./src/react/providers/pages/lk/personal-data/personal-data.js




const personalData = document.querySelector("#personal-data");
if (personalData) {
  (0,client.createRoot)(personalData).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(Form_Personal_Data, {}));
}


/***/ },

/***/ 9720
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
// EXTERNAL MODULE: ./src/react/components/Input/Input.js
var Input = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/react/components/PhoneInput/PhoneInput.js
var PhoneInput = __webpack_require__(4395);
// EXTERNAL MODULE: ./src/react/components/Textarea/Textarea.js
var Textarea = __webpack_require__(455);
// EXTERNAL MODULE: ./src/react/components/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(8181);
;// ./src/react/components/RequestSuggest/RequestSuggest.js








const RequestSuggest = ({ submitHandler, id }) => {
  const validationSchema = index_esm/* object */.Ik().shape({
    fio: index_esm/* string */.Yj().required(),
    email: index_esm/* string */.Yj().email().required(),
    text: index_esm/* string */.Yj().required(),
    legal: index_esm/* boolean */.zM().oneOf([true])
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestSuggest", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestSuggest__header", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("h2", { className: "RequestSuggest__title", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)("em", { children: "\u041D\u0435 \u043D\u0430\u0448\u043B\u0438" }),
      " \u0447\u0442\u043E \u0438\u0441\u043A\u0430\u043B\u0438?"
    ] }) }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      formik_esm/* Formik */.l1,
      {
        initialValues: {
          id,
          fio: "",
          email: "",
          text: "",
          legal: false
        },
        validationSchema,
        onSubmit: (values, actions) => {
          submitHandler(values, actions.resetForm);
        },
        children: ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur
        }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
          formik_esm/* Form */.lV,
          {
            className: "RequestSuggest__form",
            action: "#",
            method: "post",
            noValidate: true,
            children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestSuggest__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "fio",
                  label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
                  className: errors.fio && touched.fio ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestSuggest__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "email",
                  name: "email",
                  label: "E-mail",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
                  className: errors.email && touched.email ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestSuggest__field RequestSuggest__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Textarea/* default */.A,
                {
                  name: "text",
                  label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                  className: errors.text && touched.text ? "Textarea--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestSuggest__field RequestSuggest__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestSuggest__terms", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestContacts__legal", children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(
                  Checkbox/* default */.A,
                  {
                    type: "checkbox",
                    name: "legal",
                    toggle: true,
                    isRequired: true,
                    className: errors.legal && touched.legal ? "Checkbox--error" : null,
                    checked: values.legal
                  }
                ),
                /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { children: [
                  "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ",
                  /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/privacy.php", target: "_blank", children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" }),
                  " \u0438 ",
                  /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/agreement.php", target: "_blank", children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C" }),
                  "."
                ] })
              ] }) }) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestSuggest__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "button", type: "submit", children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" }) })
            ]
          }
        )
      }
    )
  ] });
};
/* harmony default export */ const RequestSuggest_RequestSuggest = (RequestSuggest);

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 50 modules
var axios = __webpack_require__(4166);
;// ./src/api/RequestSuggestApi.js

const RequestSuggestApi = axios/* default */.A.create({
  baseURL: "/local/ajax",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5e3
});
const setStatus = (status) => {
  switch (status) {
    case "success":
      return "alert--green";
    case "error":
      return "alert--red";
    default:
      return "";
  }
};
const sendRequestSuggest = (values, reset) => {
  window.Corners5ProjectLayout.addLoading("#RequestSuggestProvider");
  RequestSuggestApi.post("/feedback.php", values).then((response) => {
    if (response.status === 200) {
      const alert = document.querySelector("#alert--request").content.querySelector(".alert");
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector("#alert--request").content.querySelector(".alert__container");
      container.innerHTML = response.data.text;
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert("#alert--request");
      reset();
    }
  }).catch(() => {
    window.Corners5ProjectLayout.removeLoading();
    window.Corners5ProjectLayout.summonAlert("#alert--error");
  });
};

;// ./src/react/providers/pages/main/RequestSuggestProvider/RequestSuggestProvider.js





const requestSuggest = document.querySelector("#RequestSuggestProvider");
if (requestSuggest) {
  const { id } = requestSuggest.dataset;
  const RequestSuggestProvider = () => /* @__PURE__ */ (0,jsx_runtime.jsx)(RequestSuggest_RequestSuggest, { submitHandler: sendRequestSuggest, id });
  (0,client.createRoot)(requestSuggest).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(RequestSuggestProvider, {}));
}


/***/ },

/***/ 1387
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/react-dropzone/dist/es/index.js + 5 modules
var es = __webpack_require__(6386);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
// EXTERNAL MODULE: ./src/react/components/Input/Input.js
var Input = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/react/components/Textarea/Textarea.js
var Textarea = __webpack_require__(455);
// EXTERNAL MODULE: ./src/react/components/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(8181);
;// ./src/react/components/RequestProduct/RequestProduct.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));









const RequestProduct = ({ submitHandler, id }) => {
  const MAX_SIZE = 1024e4;
  const MAX_FILES = 10;
  const FILE_TYPES = ["jpg", "jpeg", "gif", "png"];
  const validationSchema = index_esm/* object */.Ik().shape({
    fio: index_esm/* string */.Yj().required(),
    email: index_esm/* string */.Yj().email().required(),
    text: index_esm/* string */.Yj().required(),
    legal: index_esm/* boolean */.zM().oneOf([true])
  });
  const [isVisibleFileLoad, setVisibleFileLoad] = (0,react.useState)(false);
  const [myFiles, setMyFiles] = (0,react.useState)([]);
  const [isMaxCountCap, setIsMaxCountCap] = (0,react.useState)(false);
  const [myFilesSize, setMyFilesSize] = (0,react.useState)(0);
  const [isMaxSizeCap, setIsMaxSizeCap] = (0,react.useState)(false);
  let totalSize = myFilesSize;
  const requestProductDecorator = () => {
    setVisibleFileLoad(false);
    setMyFiles([]);
    setMyFilesSize(0);
    setIsMaxSizeCap(false);
  };
  const letShowErrorMaxCount = () => {
    if (myFiles.length > MAX_FILES) {
      setIsMaxCountCap(true);
    } else {
      setIsMaxCountCap(false);
    }
  };
  function fileValidator(file) {
    const fileName = file.name.toLowerCase();
    if (!FILE_TYPES.some((type) => fileName.endsWith(type))) {
      return {
        code: "wrong-type",
        message: "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0444\u0430\u0439\u043B!"
      };
    }
    return null;
  }
  const dropzoneRef = (0,react.createRef)();
  const openDialog = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestProduct", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestProduct__header", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("h2", { className: "RequestProduct__title", children: "\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441" }) }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      formik_esm/* Formik */.l1,
      {
        initialValues: {
          id,
          fio: "",
          email: "",
          text: "",
          files: [],
          legal: false
        },
        validationSchema,
        onSubmit: (values, actions) => {
          submitHandler(values, actions.resetForm, requestProductDecorator);
          setIsMaxCountCap(false);
          setIsMaxSizeCap(false);
        },
        children: ({
          values,
          errors,
          touched,
          setFieldValue
        }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
          formik_esm/* Form */.lV,
          {
            className: "RequestProduct__form",
            action: "#",
            method: "post",
            noValidate: true,
            children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestProduct__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "fio",
                  label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
                  className: errors.fio && touched.fio ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestProduct__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "email",
                  name: "email",
                  label: "E-mail",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
                  className: errors.email && touched.email ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestProduct__field RequestProduct__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Textarea/* default */.A,
                {
                  name: "text",
                  label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                  className: errors.text && touched.text ? "Textarea--error" : null
                }
              ) }),
              !isVisibleFileLoad && /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestProduct__field RequestProduct__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestProduct__file", children: [
                /* @__PURE__ */ (0,jsx_runtime.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: "button button--transparent RequestProduct__file-button",
                    onClick: () => setVisibleFileLoad((prevState) => !prevState),
                    children: [
                      /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("use", { href: "#icon-clip" }) }),
                      /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: "\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B" })
                    ]
                  }
                ),
                /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "RequestProduct__file-warning", children: "\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10-\u0438 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 .jpeg, .gif, .png. \u0420\u0430\u0437\u043C\u0435\u0440 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10 MB." })
              ] }) }),
              isVisibleFileLoad && /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestProduct__field RequestProduct__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                es/* default */.Ay,
                {
                  ref: dropzoneRef,
                  noClick: true,
                  noKeyboard: true,
                  validator: fileValidator,
                  accept: { "image/jpeg": [".png", ".jpg", ".jpeg", ".gif"] },
                  onDrop: (acceptedFiles) => {
                    acceptedFiles.forEach((file) => {
                      if (myFiles.findIndex((item) => item.name === file.name) === -1) {
                        if (totalSize + file.size < MAX_SIZE) {
                          totalSize += file.size;
                          setMyFilesSize(totalSize);
                          myFiles.push(file);
                          setIsMaxSizeCap(false);
                        } else {
                          setIsMaxSizeCap(true);
                        }
                      }
                    });
                    letShowErrorMaxCount();
                    setMyFiles(myFiles.slice(0, MAX_FILES));
                    setFieldValue("files", myFiles.slice(0, MAX_FILES));
                  },
                  children: ({ getRootProps, getInputProps, fileRejections }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestProduct__files", children: [
                      /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: "RequestProduct__files-list", children: myFiles.map((file) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("li", { className: "RequestProduct__files-item", children: [
                        /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestProduct__files-info", children: [
                          /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "RequestProduct__files-name", children: file.path }),
                          /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { className: "RequestProduct__files-size", children: [
                            file.size,
                            " KB"
                          ] })
                        ] }),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)(
                          "button",
                          {
                            type: "button",
                            className: "RequestProduct__files-delete",
                            onClick: () => {
                              totalSize -= file.size;
                              setMyFilesSize(totalSize);
                              myFiles.splice(myFiles.indexOf(file), 1);
                              setFieldValue("files", myFiles);
                              letShowErrorMaxCount();
                              setIsMaxSizeCap(false);
                            },
                            children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {})
                          }
                        )
                      ] }, file.path)) }),
                      /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: "RequestProduct__files-list", children: fileRejections.map((item) => /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { className: "RequestProduct__files-item", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestProduct__files-info", children: [
                        /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "RequestProduct__files-name", children: item.file.path }),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: "RequestProduct__errors", children: item.errors.map((e) => e.code !== "file-invalid-type" && /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "RequestProduct__errors-text", children: e.message }) }, e.code)) })
                      ] }) }, item.file.path)) }),
                      isMaxCountCap && /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: "RequestProduct__files-list", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { className: "RequestProduct__files-item", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "RequestProduct__errors-text", children: "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E \u0444\u0430\u0439\u043B\u043E\u0432!" }) }) }),
                      isMaxSizeCap && /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: "RequestProduct__files-list", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { className: "RequestProduct__files-item", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "RequestProduct__errors-text", children: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u043E\u0432 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 10 \u041C\u0411!" }) }) })
                    ] }),
                    /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", __spreadProps(__spreadValues({}, getRootProps({ className: "RequestProduct__dropzone" })), { children: [
                      /* @__PURE__ */ (0,jsx_runtime.jsx)("input", __spreadValues({}, getInputProps())),
                      /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { className: "RequestProduct__dropzone-text", children: [
                        "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u044D\u0442\u0443 \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0438\u043B\u0438 ",
                        /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "RequestProduct__dropzone-button", type: "button", onClick: openDialog, children: "\u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435" }),
                        " \u0444\u0430\u0439\u043B\u044B \u0432\u0440\u0443\u0447\u043D\u0443\u044E."
                      ] })
                    ] }))
                  ] })
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestProduct__field RequestProduct__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestProduct__terms", children: [
                /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestProduct__legal", children: [
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(
                    Checkbox/* default */.A,
                    {
                      type: "checkbox",
                      name: "legal",
                      toggle: true,
                      isRequired: true,
                      className: errors.legal && touched.legal ? "Checkbox--error" : null,
                      checked: values.legal
                    }
                  ),
                  /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { children: [
                    "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ",
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/privacy.php", target: "_blank", children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" }),
                    " \u0438 ",
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/agreement.php", target: "_blank", children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "RequestProduct__submit button", type: "submit", children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" })
              ] }) })
            ]
          }
        )
      }
    )
  ] });
};
/* harmony default export */ const RequestProduct_RequestProduct = (RequestProduct);

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 50 modules
var axios = __webpack_require__(4166);
// EXTERNAL MODULE: ./src/components/loading/loading.js
var loading = __webpack_require__(3037);
// EXTERNAL MODULE: ./src/components/alert/alert.js
var alert_alert = __webpack_require__(4009);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(3670);
;// ./src/api/RequestProductApi.js




const requestProductApi = axios/* default */.A.create({
  baseURL: "/local/ajax",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5e3
});
const setStatus = (status) => {
  switch (status) {
    case "success":
      return "alert--green";
    case "error":
      return "alert--red";
    default:
      return "";
  }
};
const sendRequestProduct = (values, reset, requestProductDecorator) => {
  const data = (0,utils/* createFormData */.$W)(values);
  (0,loading.addLoading)("#RequestProductProvider");
  return requestProductApi.post("/feedback_question.php", data).then((response) => {
    if (response.status === 200) {
      const alert = document.querySelector("#alert--request").content.querySelector(".alert");
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector("#alert--request").content.querySelector(".alert__container");
      container.innerHTML = response.data.text;
      (0,loading.removeLoading)();
      (0,alert_alert.summonAlert)("#alert--request");
      reset();
      requestProductDecorator();
    }
  }).catch(() => {
    (0,loading.removeLoading)();
    (0,alert_alert.summonAlert)("#alert--error");
  });
};

;// ./src/react/providers/pages/product/RequestProductProvider/RequestProductProvider.js





const requestProduct = document.querySelector("#RequestProductProvider");
if (requestProduct) {
  const { id } = requestProduct.dataset;
  const RequestProductProvider = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "container", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(RequestProduct_RequestProduct, { submitHandler: sendRequestProduct, id }) });
  (0,client.createRoot)(requestProduct).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(RequestProductProvider, {}));
}


/***/ },

/***/ 9309
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
// EXTERNAL MODULE: ./src/react/components/Input/Input.js
var Input = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/react/components/PhoneInput/PhoneInput.js
var PhoneInput = __webpack_require__(4395);
// EXTERNAL MODULE: ./src/react/components/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(8181);
// EXTERNAL MODULE: ./src/react/components/FormContacts/FormContacts.js
var FormContacts = __webpack_require__(4569);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(3670);
;// ./src/react/components/RequestSearch/RequestSearch.js









const RequestSearch = ({ submitHandler, id }) => {
  const validationSchema = index_esm/* object */.Ik().shape({
    fio: index_esm/* string */.Yj().required(),
    phone: index_esm/* string */.Yj().matches(utils/* phoneRegExp */.Kh).required(),
    email: index_esm/* string */.Yj().email().required(),
    legal: index_esm/* boolean */.zM().oneOf([true])
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestSearch", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestSearch__header", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)("h2", { className: "RequestSearch__title", children: "\u041D\u0435 \u043D\u0430\u0448\u043B\u0438 \u0447\u0442\u043E \u0438\u0441\u043A\u0430\u043B\u0438?" }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "RequestSearch__post-title", children: "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u043D\u0430\u043C, \u0438 \u043C\u044B \u0441 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435\u043C \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u043D\u0430\u0439\u0442\u0438 \u043D\u0443\u0436\u043D\u0443\u044E \u0432\u0430\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E." })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      formik_esm/* Formik */.l1,
      {
        initialValues: {
          id,
          fio: "",
          phone: "",
          email: ""
        },
        validationSchema,
        onSubmit: (values, actions) => {
          submitHandler(values, actions.resetForm);
        },
        children: ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur
        }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
          formik_esm/* Form */.lV,
          {
            className: "RequestSearch__form",
            action: "#",
            method: "post",
            noValidate: true,
            children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestSearch__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "fio",
                  label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
                  className: errors.fio && touched.fio ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestSearch__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                PhoneInput/* default */.A,
                {
                  name: "phone",
                  label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                  value: values.phone,
                  isRequired: true,
                  placeholder: "+7 (999) 999-99-99",
                  onChange: handleChange,
                  onBlur: handleBlur,
                  className: errors.phone && touched.phone ? "PhoneInput--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestSearch__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "email",
                  name: "email",
                  label: "E-mail",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
                  className: errors.email && touched.email ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestSearch__field RequestSearch__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestSearch__terms", children: [
                /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestSearch__legal", children: [
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(
                    Checkbox/* default */.A,
                    {
                      type: "checkbox",
                      name: "legal",
                      toggle: true,
                      isRequired: true,
                      className: errors.legal && touched.legal ? "Checkbox--error" : null,
                      checked: values.legal
                    }
                  ),
                  /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { children: [
                    "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ",
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/privacy.php", target: "_blank", children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" }),
                    " \u0438 ",
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/agreement.php", target: "_blank", children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "RequestSearch__submit button", type: "submit", children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441" })
              ] }) })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestSearch__footer", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FormContacts/* default */.A, { contacts: utils/* CONTACTS */.Mx }) })
  ] });
};
/* harmony default export */ const RequestSearch_RequestSearch = (RequestSearch);

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 50 modules
var axios = __webpack_require__(4166);
;// ./src/api/RequestSearchApi.js

const RequestSearchApi = axios/* default */.A.create({
  baseURL: "/local/ajax",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5e3
});
const setStatus = (status) => {
  switch (status) {
    case "success":
      return "alert--green";
    case "error":
      return "alert--red";
    default:
      return "";
  }
};
const sendRequestSearch = (values, reset) => {
  window.Corners5ProjectLayout.addLoading("#RequestSearchProvider");
  RequestSearchApi.post("/search_notfound.php", values).then((response) => {
    if (response.status === 200) {
      const alert = document.querySelector("#alert--request").content.querySelector(".alert");
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector("#alert--request").content.querySelector(".alert__container");
      container.innerHTML = response.data.text;
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert("#alert--request");
      reset();
    }
  }).catch(() => {
    window.Corners5ProjectLayout.removeLoading();
    window.Corners5ProjectLayout.summonAlert("#alert--error");
  });
};

;// ./src/react/providers/pages/search-1/RequestSearchProvider/RequestSearchProvider.js





const requestSearch = document.querySelector("#RequestSearchProvider");
if (requestSearch) {
  const { id } = requestSearch.dataset;
  const RequestSearchProvider = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "container", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(RequestSearch_RequestSearch, { submitHandler: sendRequestSearch, id }) });
  (0,client.createRoot)(requestSearch).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(RequestSearchProvider, {}));
}


/***/ },

/***/ 3726
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
// EXTERNAL MODULE: ./src/react/components/Input/Input.js
var Input = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/react/components/PhoneInput/PhoneInput.js
var PhoneInput = __webpack_require__(4395);
// EXTERNAL MODULE: ./src/react/components/Textarea/Textarea.js
var Textarea = __webpack_require__(455);
// EXTERNAL MODULE: ./src/react/components/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(8181);
// EXTERNAL MODULE: ./src/react/components/FormContacts/FormContacts.js
var FormContacts = __webpack_require__(4569);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(3670);
;// ./src/react/components/RequestService/RequestService.js










const RequestService = ({ submitHandler, id }) => {
  const validationSchema = index_esm/* object */.Ik().shape({
    fio: index_esm/* string */.Yj().required(),
    phone: index_esm/* string */.Yj().matches(utils/* phoneRegExp */.Kh).required(),
    email: index_esm/* string */.Yj().email().required(),
    text: index_esm/* string */.Yj().required(),
    legal: index_esm/* boolean */.zM().oneOf([true])
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestService", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestService__header", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)("h2", { className: "RequestService__title", children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443" }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "RequestService__post-title", children: "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u043D\u0430\u043C, \u0438 \u043C\u044B \u0441 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435\u043C \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0443\u0436\u043D\u0443\u044E \u0432\u0430\u043C \u0443\u0441\u043B\u0443\u0433\u0443." })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      formik_esm/* Formik */.l1,
      {
        initialValues: {
          id,
          fio: "",
          phone: "",
          email: "",
          text: ""
        },
        validationSchema,
        onSubmit: (values, actions) => {
          submitHandler(values, actions.resetForm);
        },
        children: ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur
        }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
          formik_esm/* Form */.lV,
          {
            className: "RequestService__form",
            action: "#",
            method: "post",
            noValidate: true,
            children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestService__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "fio",
                  label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
                  className: errors.fio && touched.fio ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestService__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                PhoneInput/* default */.A,
                {
                  name: "phone",
                  label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                  value: values.phone,
                  isRequired: true,
                  placeholder: "+7 (999) 999-99-99",
                  onChange: handleChange,
                  onBlur: handleBlur,
                  className: errors.phone && touched.phone ? "PhoneInput--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestService__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "email",
                  name: "email",
                  label: "E-mail",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
                  className: errors.email && touched.email ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestService__field RequestService__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Textarea/* default */.A,
                {
                  name: "text",
                  label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                  isRequired: true,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                  className: errors.text && touched.text ? "Textarea--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestService__field RequestService__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestService__terms", children: [
                /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestService__legal", children: [
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(
                    Checkbox/* default */.A,
                    {
                      type: "checkbox",
                      name: "legal",
                      toggle: true,
                      isRequired: true,
                      className: errors.legal && touched.legal ? "Checkbox--error" : null,
                      checked: values.legal
                    }
                  ),
                  /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { children: [
                    "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ",
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/privacy.php", target: "_blank", children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" }),
                    " \u0438 ",
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/about/agreement.php", target: "_blank", children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "RequestService__submit button", type: "submit", children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" })
              ] }) })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestService__footer", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FormContacts/* default */.A, { contacts: utils/* CONTACTS */.Mx }) })
  ] });
};
/* harmony default export */ const RequestService_RequestService = (RequestService);

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 50 modules
var axios = __webpack_require__(4166);
;// ./src/api/RequestServiceApi.js

const RequestServiceApi = axios/* default */.A.create({
  baseURL: "/local/ajax",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5e3
});
const setStatus = (status) => {
  switch (status) {
    case "success":
      return "alert--green";
    case "error":
      return "alert--red";
    default:
      return "";
  }
};
const sendRequestService = (values, reset) => {
  window.Corners5ProjectLayout.addLoading("#RequestServiceProvider");
  RequestServiceApi.post("/feedback_services.php", values).then((response) => {
    if (response.status === 200) {
      const alert = document.querySelector("#alert--request").content.querySelector(".alert");
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector("#alert--request").content.querySelector(".alert__container");
      container.innerHTML = response.data.text;
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert("#alert--request");
      reset();
    }
  }).catch(() => {
    window.Corners5ProjectLayout.removeLoading();
    window.Corners5ProjectLayout.summonAlert("#alert--error");
  });
};

;// ./src/react/providers/pages/service/RequestServiceProvider/RequestServiceProvider.js





const requestService = document.querySelector("#RequestServiceProvider");
if (requestService) {
  const { id } = requestService.dataset;
  const RequestServiceProvider = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "container", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(RequestService_RequestService, { submitHandler: sendRequestService, id }) });
  (0,client.createRoot)(requestService).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(RequestServiceProvider, {}));
}


/***/ },

/***/ 5910
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

function importAll(r) {
  r.keys().forEach(r);
}
importAll(__webpack_require__(5244));
importAll(__webpack_require__(5313));


/***/ },

/***/ 3670
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $W: () => (/* binding */ createFormData),
/* harmony export */   Kh: () => (/* binding */ phoneRegExp),
/* harmony export */   Mx: () => (/* binding */ CONTACTS),
/* harmony export */   XJ: () => (/* binding */ getScrollbarWidth),
/* harmony export */   iW: () => (/* binding */ getPaddingFromBody),
/* harmony export */   rP: () => (/* binding */ getPaddingOnBody)
/* harmony export */ });


const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;
const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
let checker = false;
const getPaddingOnBody = () => {
  if (!checker) {
    const body = document.querySelector("body");
    const header = document.querySelector(".header__fixed");
    const dropdown = document.querySelector(".header__dropdown");
    const promoFixed = document.querySelector(".promo__fixed");
    const Modal = document.querySelector(".Modal");
    const popUps = document.querySelectorAll(".popUp");
    const alertWrapper = document.querySelector(".alert-wrapper");
    body.style.paddingRight = `${getScrollbarWidth()}px`;
    if (header) {
      header.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (dropdown) {
      dropdown.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (promoFixed) {
      promoFixed.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (Modal) {
      Modal.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (alertWrapper) {
      alertWrapper.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (popUps.length > 0) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = `${getScrollbarWidth()}px`;
      });
    }
    body.classList.add("static");
    checker = true;
  }
};
const getPaddingFromBody = () => {
  if (checker) {
    const body = document.querySelector("body");
    const header = document.querySelector(".header__fixed");
    const dropdown = document.querySelector(".header__dropdown");
    const promoFixed = document.querySelector(".promo__fixed");
    const Modal = document.querySelector(".Modal");
    const popUps = document.querySelectorAll(".popUp");
    const alertWrapper = document.querySelector(".alert-wrapper");
    body.style.paddingRight = "";
    if (header) {
      header.style.paddingRight = "";
    }
    if (dropdown) {
      dropdown.style.paddingRight = "";
    }
    if (promoFixed) {
      promoFixed.style.paddingRight = "";
    }
    if (Modal) {
      Modal.style.paddingRight = "";
    }
    if (alertWrapper) {
      alertWrapper.style.paddingRight = "";
    }
    if (popUps.length > 0) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = "";
      });
    }
    body.classList.remove("static");
    checker = false;
  }
};
const isObject = (object) => {
  const type = typeof object;
  return type === "function" || type === "object";
};
const createFormData = (values) => {
  const data = new FormData();
  for (const key in values) {
    if (isObject(values[key])) {
      values[key].forEach((file, index) => {
        data.append(`${key}-${index}`, file);
      });
    } else {
      data.append(key, values[key]);
    }
  }
  return data;
};
document.addEventListener("click", (evt) => {
  const button = evt.target.closest(".request-login");
  if (!button) return;
  evt.preventDefault();
  window.LoginProvider.setOpenPhone(true);
});
const CONTACTS = {
  phones: [
    {
      name: "+7(812)725-00-88",
      link: "+78127250088"
    },
    {
      name: "+7(921)588-60-80",
      link: "+79215886080"
    }
  ],
  mails: [
    {
      name: "sales@resource.beer",
      link: "sales@resource.beer"
    }
  ]
  // whatsapps: [
  //   {
  //     name: 'Написать в WhatsApp',
  //     link: 'https://wa.me/message/2T7BTTKPQ34SF1',
  //   },
  // ],
  // telegrams: [
  //   {
  //     name: 'в Telegram',
  //     link: 'https://t.me/+79215886080',
  //   },
  // ],
};



/***/ },

/***/ 2640
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-5corners",
  "use": "icon-5corners-usage",
  "viewBox": "0 0 80 16",
  "content": "<symbol viewBox=\"0 0 80 16\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-5corners\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.55361 13.2927L6.53124 13.2483L0 9.14286L2.3262 7.45631L4.24978 0L6.57597 1.68655L14.3374 1.19834L13.4427 3.90569L16.3057 11.0735H13.4204L13.398 11.0957L7.42593 16L6.55361 13.2927ZM6.55554 13.2251V13.2694L11.0737 11.0503L11.9237 11.0725H13.3999H13.4223L13.3328 10.4068L12.7065 6.12382L13.4446 3.92687H13.4223L13.3552 3.90468L8.47912 3.0614L6.5779 1.68553V1.70773L5.99635 2.77291L4.22934 6.10162L2.41759 7.41092L2.32812 7.47749L5.83978 11.0503L6.55554 13.2251Z\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M23.4375 13.3657V11.8275C24.1273 12.2712 24.817 12.4783 25.5068 12.4783C26.2279 12.4783 26.7923 12.3008 27.1998 11.9754C27.6388 11.65 27.8582 11.1767 27.8582 10.6146C27.8582 10.0526 27.6388 9.63844 27.1998 9.31304C26.7609 8.98765 26.1338 8.83974 25.3187 8.83974C25.0365 8.83974 24.5035 8.86932 23.751 8.92848V3.78129H29.1124V5.14204H25.256V7.59731C25.5695 7.56773 25.8517 7.56773 26.1338 7.56773C27.2312 7.56773 28.0777 7.83396 28.7048 8.36643C29.3005 8.8989 29.614 9.63844 29.614 10.5555C29.614 11.5317 29.2691 12.3008 28.5794 12.8924C27.8896 13.484 26.949 13.7799 25.7263 13.7799C24.723 13.7799 23.9705 13.632 23.4689 13.3657H23.4375ZM43.4406 3.78129L40.2113 10.585C39.6156 11.8275 39.0199 12.6558 38.4869 13.0995C37.9225 13.5432 37.3268 13.7799 36.6684 13.7799C36.1354 13.7799 35.6965 13.7207 35.3516 13.5728V12.005C35.7592 12.2416 36.1667 12.3599 36.5743 12.3599C36.9192 12.3599 37.2327 12.2416 37.5149 12.005C37.7971 11.7683 38.1106 11.3246 38.4555 10.7034L34.9753 3.81087H36.9506L39.0826 8.45518C39.1139 8.54392 39.208 8.78057 39.3334 9.16513C39.3334 9.10597 39.4274 8.86932 39.6156 8.45518L41.6535 3.81087H43.472L43.4406 3.78129ZM50.4323 5.23079H46.3878V13.632H44.6634V3.81087H50.4323V5.23079ZM59.117 13.632V3.81087H53.4422C53.1286 6.14782 52.8151 8.01145 52.5643 9.37221C52.2821 10.733 52.0313 11.5908 51.7805 11.9162C51.5296 12.2416 51.2475 12.3895 50.9653 12.3895C50.6831 12.3895 50.4323 12.3304 50.1815 12.212V13.6024C50.495 13.7207 50.8712 13.7503 51.2788 13.7503C51.7805 13.7503 52.2194 13.632 52.5643 13.3953C52.9092 13.1586 53.1913 12.8332 53.4108 12.3599C53.6303 11.8866 53.8184 11.1767 54.0379 10.2005C54.226 9.2243 54.5082 7.53815 54.8844 5.17162H57.424V13.5728H59.1484L59.117 13.632ZM66.0146 13.7503C64.5097 13.7503 63.3183 13.3066 62.4091 12.3599C61.4998 11.4429 61.0609 10.2597 61.0609 8.78057C61.0609 7.21275 61.5312 5.94074 62.4404 4.99413C63.3497 4.04752 64.6038 3.57422 66.1714 3.57422C67.645 3.57422 68.805 4.01794 69.7143 4.93497C70.5922 5.852 71.0625 7.03526 71.0625 8.51434C71.0625 10.1117 70.5922 11.3838 69.6829 12.3008C68.7737 13.2178 67.5509 13.7503 66.0146 13.7503ZM66.1087 4.99413C65.1681 4.99413 64.3843 5.31953 63.7886 5.99991C63.1929 6.68028 62.8794 7.56773 62.8794 8.66225C62.8794 9.75677 63.1615 10.6442 63.7572 11.295C64.3216 11.9754 65.1054 12.3008 66.046 12.3008C67.0493 12.3008 67.8331 11.9754 68.3975 11.3542C68.9618 10.733 69.2753 9.84551 69.2753 8.69183C69.2753 7.50857 68.9932 6.62112 68.4288 5.97033C67.8645 5.31953 67.112 5.02372 66.1087 5.02372V4.99413ZM72.975 13.5728V3.75171H76.267C77.2703 3.75171 78.0541 3.95878 78.6498 4.37292C79.2455 4.78706 79.5277 5.31953 79.5277 5.99991C79.5277 6.56196 79.3709 7.03526 79.0261 7.4494C78.6812 7.86355 78.2422 8.15936 77.6465 8.33685V8.36643C78.3677 8.45518 78.932 8.69183 79.371 9.10597C79.8099 9.52011 79.998 10.0822 79.998 10.7625C79.998 11.5908 79.6531 12.2712 78.9634 12.8037C78.2736 13.3361 77.3644 13.5728 76.2984 13.5728H72.975ZM74.6994 5.0533V7.83396H75.8281C76.4238 7.83396 76.8941 7.68606 77.239 7.41982C77.5838 7.15359 77.7406 6.76903 77.7406 6.29572C77.7406 5.46744 77.1449 5.02372 75.9535 5.02372H74.6994V5.0533ZM74.6994 9.13555V12.2416H76.173C76.8 12.2416 77.3017 12.0937 77.6779 11.8275C78.0228 11.5612 78.2109 11.1471 78.2109 10.6738C78.2109 9.66802 77.4584 9.13555 75.9848 9.13555H74.7307H74.6994Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4661
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-alert",
  "use": "icon-alert-usage",
  "viewBox": "0 0 15 15",
  "content": "<symbol viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-alert\">\r\n<circle cx=\"7.5\" cy=\"7.5\" r=\"7.5\" fill=\"#E45945\" />\r\n<path d=\"M8.18892 3.72656L8.07173 8.86151H6.92827L6.81463 3.72656H8.18892ZM7.5 11.0774C7.28456 11.0774 7.09991 11.0017 6.94602 10.8501C6.79451 10.6986 6.71875 10.514 6.71875 10.2962C6.71875 10.0831 6.79451 9.9008 6.94602 9.74929C7.09991 9.59777 7.28456 9.52202 7.5 9.52202C7.7107 9.52202 7.89299 9.59777 8.04688 9.74929C8.20312 9.9008 8.28125 10.0831 8.28125 10.2962C8.28125 10.4406 8.24455 10.572 8.17116 10.6903C8.10014 10.8087 8.00545 10.9034 7.88707 10.9744C7.77107 11.0431 7.64205 11.0774 7.5 11.0774Z\" fill=\"white\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5210
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-book",
  "use": "icon-book-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-book\">\r\n<path d=\"M3.5 22.1665C5.0962 21.2449 6.90686 20.7598 8.75 20.7598C10.5931 20.7598 12.4038 21.2449 14 22.1665C15.5962 21.2449 17.4069 20.7598 19.25 20.7598C21.0931 20.7598 22.9038 21.2449 24.5 22.1665\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M3.5 7.00048C5.0962 6.07892 6.90686 5.59375 8.75 5.59375C10.5931 5.59375 12.4038 6.07892 14 7.00048C15.5962 6.07892 17.4069 5.59375 19.25 5.59375C21.0931 5.59375 22.9038 6.07892 24.5 7.00048\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M3.5 7V22.1667\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14 7V22.1667\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M24.5 7V22.1667\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7109
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-building",
  "use": "icon-building-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-building\">\r\n<path d=\"M10.5 11.6667V4.66667C10.5 4.35725 10.6229 4.0605 10.8417 3.84171C11.0605 3.62292 11.3572 3.5 11.6667 3.5H23.3333C23.6428 3.5 23.9395 3.62292 24.1583 3.84171C24.3771 4.0605 24.5 4.35725 24.5 4.66667V24.5H15.1667M9.33333 10.5L15.1667 16.3333V24.5H9.33333V19.8333V10.5ZM9.33333 24.5H3.5V16.3333L9.33333 10.5V24.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M15.168 8.16797V8.17964\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 8.16797V8.17964\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 12.832V12.8437\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 17.5V17.5117\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 1448
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-button-card",
  "use": "icon-button-card-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-button-card\">\r\n<path d=\"M6.81972 15.503C6.81972 16.1962 6.25889 16.758 5.56708 16.758C4.87528 16.758 4.31445 16.1962 4.31445 15.503C4.31445 14.8099 4.87528 14.248 5.56708 14.248C6.25889 14.248 6.81972 14.8099 6.81972 15.503Z\" stroke=\"none\" />\r\n<path d=\"M14.3353 15.503C14.3353 16.1962 13.7745 16.758 13.0827 16.758C12.3909 16.758 11.8301 16.1962 11.8301 15.503C11.8301 14.8099 12.3909 14.248 13.0827 14.248C13.7745 14.248 14.3353 14.8099 14.3353 15.503Z\" stroke=\"none\" />\r\n<path d=\"M4 3.29883L6.50526 11.7988L13.3826 10.4654C14.8464 10.1816 15.9 8.93575 15.9 7.48869V5.12025H4.53684\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3225
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-calculator",
  "use": "icon-calculator-usage",
  "viewBox": "0 0 34 34",
  "content": "<symbol viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-calculator\">\n<path d=\"M25.25 3H8.75H6V6V27V30H8.75H25.25H28V27V6V3H25.25Z\" stroke-width=\"2.4\" />\n<path d=\"M21.5 9H12.5H11V10.6667V12.3333V14H12.5H21.5H23V12.3333V10.6667V9H21.5Z\" stroke-width=\"2.4\" />\n<path d=\"M11.333 19.8335V19.847\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M17 19.8335V19.847\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M22.667 19.8335V19.847\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M11.333 24.0835V24.097\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M17 24.0835V24.097\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M22.667 24.0835V24.097\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 9023
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-cancel",
  "use": "icon-cancel-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-cancel\">\n<path d=\"M7 7L21.0007 21.0007\" stroke-width=\"2\" stroke-linecap=\"round\" />\n<path d=\"M7 21L21.0007 6.99934\" stroke-width=\"2\" stroke-linecap=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3228
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-canceled",
  "use": "icon-canceled-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-canceled\">\r\n<path d=\"M5.83333 4.66797H10.5L14 8.16797H22.1667C22.7855 8.16797 23.379 8.4138 23.8166 8.85139C24.2542 9.28897 24.5 9.88246 24.5 10.5013V19.8346C24.5 20.4535 24.2542 21.047 23.8166 21.4845C23.379 21.9221 22.7855 22.168 22.1667 22.168H5.83333C5.21449 22.168 4.621 21.9221 4.18342 21.4845C3.74583 21.047 3.5 20.4535 3.5 19.8346V7.0013C3.5 6.38246 3.74583 5.78897 4.18342 5.35139C4.621 4.9138 5.21449 4.66797 5.83333 4.66797\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12 13L16 17\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" />\r\n<path d=\"M16 13L12 17\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4255
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-cart",
  "use": "icon-cart-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-cart\">\n<path d=\"M4.8705 14.255C4.8705 14.9481 4.30968 15.51 3.61787 15.51C2.92606 15.51 2.36523 14.9481 2.36523 14.255C2.36523 13.5619 2.92606 13 3.61787 13C4.30968 13 4.8705 13.5619 4.8705 14.255Z\" fill=\"#FAFAFA\" />\n<path d=\"M12.3861 14.255C12.3861 14.9481 11.8253 15.51 11.1335 15.51C10.4417 15.51 9.88086 14.9481 9.88086 14.255C9.88086 13.5619 10.4417 13 11.1335 13C11.8253 13 12.3861 13.5619 12.3861 14.255Z\" fill=\"#FAFAFA\" />\n<path d=\"M2.05078 2.05078L4.55604 10.5507L11.4334 9.21739C12.8971 8.93359 13.9508 7.6877 13.9508 6.24064V3.8722H2.58762\" stroke=\"#FAFAFA\" stroke-width=\"2.4\" stroke-linecap=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-clear",
  "use": "icon-clear-usage",
  "viewBox": "0 0 34 34",
  "content": "<symbol viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-clear\">\r\n<path d=\"M5.66797 9.91602H28.3346\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14.168 15.584V24.084\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 15.582V24.082\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.08203 9.91797L8.4987 26.918C8.4987 27.6694 8.79721 28.3901 9.32856 28.9214C9.85992 29.4528 10.5806 29.7513 11.332 29.7513H22.6654C23.4168 29.7513 24.1375 29.4528 24.6688 28.9214C25.2002 28.3901 25.4987 27.6694 25.4987 26.918L26.9154 9.91797\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12.75 9.91667V5.66667C12.75 5.29094 12.8993 4.93061 13.1649 4.66493C13.4306 4.39926 13.7909 4.25 14.1667 4.25H19.8333C20.2091 4.25 20.5694 4.39926 20.8351 4.66493C21.1007 4.93061 21.25 5.29094 21.25 5.66667V9.91667\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4447
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-clip",
  "use": "icon-clip-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-clip\">\r\n<path d=\"M11.6649 15.8108L15.6649 8.88255C16.7695 6.96938 16.114 4.52301 14.2008 3.41845V3.41845C12.2877 2.31388 9.84129 2.96938 8.73672 4.88255L4.53672 12.1572C3.76352 13.4964 4.22237 15.2088 5.56159 15.982V15.982C6.90081 16.7552 8.61326 16.2964 9.38646 14.9572L13.1865 8.37537C13.6283 7.6101 13.3661 6.63155 12.6008 6.18973V6.18973C11.8356 5.7479 10.857 6.0101 10.4152 6.77537L6.81518 13.0107\" stroke-width=\"1.5\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8971
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-closer",
  "use": "icon-closer-usage",
  "viewBox": "0 0 12 12",
  "content": "<symbol viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-closer\">\r\n<path d=\"M1 1L11.0005 11.0005\" stroke-linecap=\"round\" />\r\n<path d=\"M1 11L11.0005 0.99953\" stroke-linecap=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2238
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-compare",
  "use": "icon-compare-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-compare\">\n<path d=\"M2.05078 0.850781C1.38804 0.850781 0.850781 1.38804 0.850781 2.05078C0.850781 2.71352 1.38804 3.25078 2.05078 3.25078V0.850781ZM13.9508 3.25078C14.6135 3.25078 15.1508 2.71352 15.1508 2.05078C15.1508 1.38804 14.6135 0.850781 13.9508 0.850781V3.25078ZM2.05078 3.25078H13.9508V0.850781H2.05078V3.25078Z\" />\n<path d=\"M2.05078 5.95039C1.38804 5.95039 0.850781 6.48765 0.850781 7.15039C0.850781 7.81313 1.38804 8.35039 2.05078 8.35039V5.95039ZM13.9508 8.35039C14.6135 8.35039 15.1508 7.81313 15.1508 7.15039C15.1508 6.48765 14.6135 5.95039 13.9508 5.95039V8.35039ZM2.05078 8.35039H13.9508V5.95039H2.05078V8.35039Z\" />\n<path d=\"M2.05078 11.05C1.38804 11.05 0.850781 11.5873 0.850781 12.25C0.850781 12.9127 1.38804 13.45 2.05078 13.45V11.05ZM7.15078 13.45C7.81352 13.45 8.35078 12.9127 8.35078 12.25C8.35078 11.5873 7.81352 11.05 7.15078 11.05V13.45ZM2.05078 13.45H7.15078V11.05H2.05078V13.45Z\" />\n<path d=\"M10.5508 11.05C9.88804 11.05 9.35078 11.5873 9.35078 12.25C9.35078 12.9127 9.88804 13.45 10.5508 13.45V11.05ZM13.9508 13.45C14.6135 13.45 15.1508 12.9127 15.1508 12.25C15.1508 11.5873 14.6135 11.05 13.9508 11.05V13.45ZM10.5508 13.45H13.9508V11.05H10.5508V13.45Z\" />\n<path d=\"M13.45 10.5508C13.45 9.88804 12.9127 9.35078 12.25 9.35078C11.5873 9.35078 11.05 9.88804 11.05 10.5508L13.45 10.5508ZM11.05 13.9508C11.05 14.6135 11.5873 15.1508 12.25 15.1508C12.9127 15.1508 13.45 14.6135 13.45 13.9508L11.05 13.9508ZM11.05 10.5508L11.05 13.9508L13.45 13.9508L13.45 10.5508L11.05 10.5508Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5916
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-completed",
  "use": "icon-completed-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-completed\">\r\n<path d=\"M5.83333 4.66797H10.5L14 8.16797H22.1667C22.7855 8.16797 23.379 8.4138 23.8166 8.85139C24.2542 9.28897 24.5 9.88246 24.5 10.5013V19.8346C24.5 20.4535 24.2542 21.047 23.8166 21.4845C23.379 21.9221 22.7855 22.168 22.1667 22.168H5.83333C5.21449 22.168 4.621 21.9221 4.18342 21.4845C3.74583 21.047 3.5 20.4535 3.5 19.8346V7.0013C3.5 6.38246 3.74583 5.78897 4.18342 5.35139C4.621 4.9138 5.21449 4.66797 5.83333 4.66797\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M11 14.5L13 17L17 12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2661
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-contacts-mail",
  "use": "icon-contacts-mail-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-contacts-mail\">\n<path d=\"M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M3 7L12 13L21 7\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 9845
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-contacts-phone",
  "use": "icon-contacts-phone-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-contacts-phone\">\n<path d=\"M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 234
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-contacts-telegram",
  "use": "icon-contacts-telegram-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-contacts-telegram\">\n<path d=\"M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2539
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-contacts-whatsup",
  "use": "icon-contacts-whatsup-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-contacts-whatsup\">\n<path d=\"M3 20.9988L4.65 17.1988C3.38766 15.4068 2.82267 13.2158 3.06104 11.0369C3.29942 8.85793 4.32479 6.84089 5.94471 5.36427C7.56463 3.88765 9.66775 3.05296 11.8594 3.01685C14.051 2.98073 16.1805 3.74568 17.8482 5.16812C19.5159 6.59057 20.6071 8.57273 20.9172 10.7426C21.2272 12.9125 20.7347 15.121 19.5321 16.9535C18.3295 18.7861 16.4994 20.1168 14.3854 20.6959C12.2713 21.275 10.0186 21.0626 8.05 20.0988L3 20.9988\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M9 10C9 10.1326 9.05268 10.2598 9.14645 10.3536C9.24021 10.4473 9.36739 10.5 9.5 10.5C9.63261 10.5 9.75979 10.4473 9.85355 10.3536C9.94732 10.2598 10 10.1326 10 10V9C10 8.86739 9.94732 8.74021 9.85355 8.64645C9.75979 8.55268 9.63261 8.5 9.5 8.5C9.36739 8.5 9.24021 8.55268 9.14645 8.64645C9.05268 8.74021 9 8.86739 9 9V10ZM9 10C9 11.3261 9.52678 12.5979 10.4645 13.5355C11.4021 14.4732 12.6739 15 14 15H15C15.1326 15 15.2598 14.9473 15.3536 14.8536C15.4473 14.7598 15.5 14.6326 15.5 14.5C15.5 14.3674 15.4473 14.2402 15.3536 14.1464C15.2598 14.0527 15.1326 14 15 14H14C13.8674 14 13.7402 14.0527 13.6464 14.1464C13.5527 14.2402 13.5 14.3674 13.5 14.5C13.5 14.6326 13.5527 14.7598 13.6464 14.8536C13.7402 14.9473 13.8674 15 14 15\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5051
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-cross",
  "use": "icon-cross-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-cross\">\n<path d=\"M5 5L15.0005 15.0005\" stroke-width=\"2\" stroke-linecap=\"round\" />\n<path d=\"M5 15L15.0005 4.99953\" stroke-width=\"2\" stroke-linecap=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3792
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-delete",
  "use": "icon-delete-usage",
  "viewBox": "0 0 34 34",
  "content": "<symbol viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-delete\">\r\n<path d=\"M5.66797 9.91602H28.3346\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14.168 15.584V24.084\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 15.582V24.082\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.08203 9.91797L8.4987 26.918C8.4987 27.6694 8.79721 28.3901 9.32856 28.9214C9.85992 29.4528 10.5806 29.7513 11.332 29.7513H22.6654C23.4168 29.7513 24.1375 29.4528 24.6688 28.9214C25.2002 28.3901 25.4987 27.6694 25.4987 26.918L26.9154 9.91797\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12.75 9.91667V5.66667C12.75 5.29094 12.8993 4.93061 13.1649 4.66493C13.4306 4.39926 13.7909 4.25 14.1667 4.25H19.8333C20.2091 4.25 20.5694 4.39926 20.8351 4.66493C21.1007 4.93061 21.25 5.29094 21.25 5.66667V9.91667\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8806
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-document-arrow",
  "use": "icon-document-arrow-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-document-arrow\">\r\n<path d=\"M19.668 18.332V28.332\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14.668 23.332L19.668 28.332L24.668 23.332\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3746
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-document",
  "use": "icon-document-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-document\">\r\n<path d=\"M23 5V11.6667C23 12.1087 23.1756 12.5326 23.4882 12.8452C23.8007 13.1577 24.2246 13.3333 24.6667 13.3333H31.3333\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M28 35H11.3333C10.4493 35 9.60143 34.6488 8.97631 34.0237C8.35119 33.3986 8 32.5507 8 31.6667V8.33333C8 7.44928 8.35119 6.60143 8.97631 5.97631C9.60143 5.35119 10.4493 5 11.3333 5H23L31.3333 13.3333V31.6667C31.3333 32.5507 30.9821 33.3986 30.357 34.0237C29.7319 34.6488 28.8841 35 28 35Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 501
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-download",
  "use": "icon-download-usage",
  "viewBox": "0 0 25 25",
  "content": "<symbol viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-download\">\r\n<path d=\"M4.16797 17.709V19.7923C4.16797 20.3449 4.38746 20.8748 4.77816 21.2655C5.16886 21.6562 5.69877 21.8757 6.2513 21.8757H18.7513C19.3038 21.8757 19.8337 21.6562 20.2244 21.2655C20.6151 20.8748 20.8346 20.3449 20.8346 19.7923V17.709\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.29297 11.459L12.5013 16.6673L17.7096 11.459\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12.5 4.16797V16.668\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2597
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-dropdown-cart",
  "use": "icon-dropdown-cart-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-dropdown-cart\">\r\n<path d=\"M10 22C10 22.8284 9.32843 23.5 8.5 23.5C7.67157 23.5 7 22.8284 7 22C7 21.1716 7.67157 20.5 8.5 20.5C9.32843 20.5 10 21.1716 10 22Z\" stroke=\"none\" />\r\n<path d=\"M20 22C20 22.8284 19.3284 23.5 18.5 23.5C17.6716 23.5 17 22.8284 17 22C17 21.1716 17.6716 20.5 18.5 20.5C19.3284 20.5 20 21.1716 20 22Z\" stroke=\"none\" />\r\n<path d=\"M5.25 4.5L8.93421 17L19.0479 15.0392C21.2005 14.6218 22.75 12.7896 22.75 10.6616V7.17857H6.03947\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7660
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-dropdown-compare",
  "use": "icon-dropdown-compare-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-dropdown-compare\">\r\n<path d=\"M7.75 24H20.25\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.125 7.75L14 6.5L20.875 7.75\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14 4V24\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M10.25 14.4167L7.125 7.75L4 14.4167C4 15.3007 4.32924 16.1486 4.91529 16.7737C5.50134 17.3988 6.2962 17.75 7.125 17.75C7.9538 17.75 8.74866 17.3988 9.33471 16.7737C9.92076 16.1486 10.25 15.3007 10.25 14.4167Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M24 14.4167L20.875 7.75L17.75 14.4167C17.75 15.3007 18.0792 16.1486 18.6653 16.7737C19.2513 17.3988 20.0462 17.75 20.875 17.75C21.7038 17.75 22.4987 17.3988 23.0847 16.7737C23.6708 16.1486 24 15.3007 24 14.4167Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 9518
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-dropdown-favorites",
  "use": "icon-dropdown-favorites-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-dropdown-favorites\">\r\n<path d=\"M12.7208 5.42192C13.1234 4.19269 14.8766 4.19269 15.2792 5.42192L16.7178 9.81388C16.8979 10.3636 17.4143 10.7358 17.997 10.7358H22.6524C23.9554 10.7358 24.4971 12.3897 23.443 13.1494L19.6767 15.8638C19.2053 16.2035 19.008 16.8058 19.1881 17.3555L20.6267 21.7474C21.0293 22.9767 19.611 23.9988 18.5569 23.2391L14.7906 20.5248C14.3192 20.185 13.6808 20.185 13.2094 20.5248L9.44311 23.2391C8.389 23.9988 6.97069 22.9767 7.37333 21.7474L8.81193 17.3555C8.99199 16.8058 8.79473 16.2035 8.32332 15.8638L4.55702 13.1494C3.5029 12.3897 4.04465 10.7358 5.3476 10.7358H10.003C10.5857 10.7358 11.1021 10.3636 11.2822 9.81388L12.7208 5.42192Z\" stroke-width=\"2\" fill=\"none\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4476
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-eye",
  "use": "icon-eye-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-eye\">\r\n<path d=\"M14.0013 16.3346C15.29 16.3346 16.3346 15.29 16.3346 14.0013C16.3346 12.7126 15.29 11.668 14.0013 11.668C12.7126 11.668 11.668 12.7126 11.668 14.0013C11.668 15.29 12.7126 16.3346 14.0013 16.3346Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M25.6654 13.9987C22.5539 19.4435 18.6654 22.1654 13.9987 22.1654C9.33203 22.1654 5.44353 19.4435 2.33203 13.9987C5.44353 8.55386 9.33203 5.83203 13.9987 5.83203C18.6654 5.83203 22.5539 8.55386 25.6654 13.9987Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 9240
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-fb--black",
  "use": "icon-fb--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-fb--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.1226 28.6673V19.9996H23.4017L23.7037 17.0127H21.1226L21.1265 15.5177C21.1265 14.7387 21.197 14.3213 22.2628 14.3213H23.6876V11.334H21.4082C18.6703 11.334 17.7066 12.783 17.7066 15.2197V17.013H16V20H17.7066V28.6673H21.1226Z\" fill=\"white\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8294
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-fb--white",
  "use": "icon-fb--white-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-fb--white\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.1226 28.6673V19.9996H23.4017L23.7037 17.0127H21.1226L21.1265 15.5177C21.1265 14.7387 21.197 14.3213 22.2628 14.3213H23.6876V11.334H21.4082C18.6703 11.334 17.7066 12.783 17.7066 15.2197V17.013H16V20H17.7066V28.6673H21.1226Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8965
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-fb",
  "use": "icon-fb-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-fb\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.1226 28.6673V19.9996H23.4017L23.7037 17.0127H21.1226L21.1265 15.5177C21.1265 14.7387 21.197 14.3213 22.2628 14.3213H23.6876V11.334H21.4082C18.6703 11.334 17.7066 12.783 17.7066 15.2197V17.013H16V20H17.7066V28.6673H21.1226Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 6519
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-filter",
  "use": "icon-filter-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-filter\">\r\n<path d=\"M14 8C15.1046 8 16 7.10457 16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6C12 7.10457 12.8954 8 14 8Z\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M4 6H12\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M16 6H20\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M4 12H6\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M10 12H20\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M4 18H15\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19 18H20\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4313
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-geopin",
  "use": "icon-geopin-usage",
  "viewBox": "0 0 25 35",
  "content": "<symbol viewBox=\"0 0 25 35\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-geopin\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.1254 34.4403C15.6557 32.1067 25 22.7919 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 22.7919 9.3443 32.1067 11.8746 34.4403C12.2342 34.7719 12.7658 34.7719 13.1254 34.4403ZM12.498 20C16.6402 20 19.998 16.6421 19.998 12.5C19.998 8.35786 16.6402 5 12.498 5C8.35591 5 4.99805 8.35786 4.99805 12.5C4.99805 16.6421 8.35591 20 12.498 20Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5587
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-head",
  "use": "icon-head-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-head\">\r\n<path d=\"M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M10.5 11.668H10.5117\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M17.5 11.668H17.5117\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M11.082 17.5C11.4622 17.888 11.916 18.1963 12.4168 18.4067C12.9177 18.6172 13.4555 18.7256 13.9987 18.7256C14.5419 18.7256 15.0797 18.6172 15.5805 18.4067C16.0814 18.1963 16.5352 17.888 16.9154 17.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 885
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-header-cart",
  "use": "icon-header-cart-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-header-cart\">\r\n<path d=\"M16 28.5C16 29.3284 15.3284 30 14.5 30C13.6716 30 13 29.3284 13 28.5C13 27.6716 13.6716 27 14.5 27C15.3284 27 16 27.6716 16 28.5Z\" stroke=\"none\" />\r\n<path d=\"M27 28.5C27 29.3284 26.3284 30 25.5 30C24.6716 30 24 29.3284 24 28.5C24 27.6716 24.6716 27 25.5 27C26.3284 27 27 27.6716 27 28.5Z\" stroke=\"none\" />\r\n<path d=\"M11 10L14.7895 23L25.1921 20.9607C27.4062 20.5267 29 18.6212 29 16.4081V12.7857H11.812\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8443
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-header-search",
  "use": "icon-header-search-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-header-search\">\n<path d=\"M23.7974 22.8092L30 29M23.7974 22.8092C25.1581 21.4515 26 19.5741 26 17.5C26 13.3579 22.6421 10 18.5 10C14.3579 10 11 13.3579 11 17.5C11 21.6421 14.3579 25 18.5 25C20.5681 25 22.4407 24.163 23.7974 22.8092Z\" stroke-width=\"2\" stroke-linecap=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8470
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-header-user",
  "use": "icon-header-user-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-header-user\">\n<path d=\"M20 21C22.7614 21 25 18.7614 25 16C25 13.2386 22.7614 11 20 11C17.2386 11 15 13.2386 15 16C15 18.7614 17.2386 21 20 21Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M10.5 29.9895C10.9031 28.5468 11.728 27.2823 12.8522 26.3835C13.9764 25.4847 15.3401 24.9996 16.741 25H23.2557C24.6584 24.9995 26.0238 25.4858 27.1488 26.3867C28.2739 27.2875 29.0985 28.5548 29.5 30\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8897
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-insta--black",
  "use": "icon-insta--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-insta--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.0034 11.334C17.6497 11.334 17.3543 11.3443 16.4298 11.3863C15.5072 11.4286 14.8774 11.5747 14.3263 11.789C13.7563 12.0103 13.2728 12.3065 12.791 12.7884C12.309 13.2701 12.0128 13.7536 11.7908 14.3234C11.5759 14.8747 11.4296 15.5046 11.3881 16.4269C11.3468 17.3514 11.3359 17.6469 11.3359 20.0007C11.3359 22.3544 11.3464 22.6489 11.3883 23.5733C11.4307 24.4959 11.5768 25.1257 11.7909 25.6768C12.0125 26.2468 12.3086 26.7303 12.7905 27.212C13.2721 27.6941 13.7556 27.991 14.3252 28.2123C14.8767 28.4266 15.5066 28.5727 16.4291 28.615C17.3536 28.657 17.6488 28.6673 20.0023 28.6673C22.3563 28.6673 22.6507 28.657 23.5752 28.615C24.4979 28.5727 25.1284 28.4266 25.6798 28.2123C26.2496 27.991 26.7324 27.6941 27.214 27.212C27.6961 26.7303 27.9922 26.2468 28.2143 25.677C28.4273 25.1257 28.5736 24.4958 28.6169 23.5735C28.6584 22.649 28.6693 22.3544 28.6693 20.0007C28.6693 17.6469 28.6584 17.3515 28.6169 16.4271C28.5736 15.5045 28.4273 14.8747 28.2143 14.3236C27.9922 13.7536 27.6961 13.2701 27.214 12.7884C26.7319 12.3063 26.2498 12.0102 25.6792 11.789C25.1267 11.5747 24.4966 11.4286 23.5739 11.3863C22.6495 11.3443 22.3552 11.334 20.0007 11.334H20.0034ZM19.2259 12.8967C19.4566 12.8963 19.7141 12.8967 20.0034 12.8967C22.3174 12.8967 22.5917 12.905 23.5055 12.9465C24.3505 12.9852 24.8091 13.1264 25.1146 13.245C25.519 13.4021 25.8074 13.5899 26.1105 13.8932C26.4139 14.1965 26.6017 14.4854 26.7591 14.8899C26.8777 15.195 27.0191 15.6536 27.0576 16.4986C27.0991 17.4122 27.1081 17.6867 27.1081 19.9996C27.1081 22.3125 27.0991 22.5869 27.0576 23.5005C27.0189 24.3455 26.8777 24.8042 26.7591 25.1093C26.602 25.5137 26.4139 25.8017 26.1105 26.1049C25.8072 26.4082 25.5192 26.596 25.1146 26.7531C24.8095 26.8722 24.3505 27.0131 23.5055 27.0517C22.5918 27.0932 22.3174 27.1023 20.0034 27.1023C17.6892 27.1023 17.4149 27.0932 16.5013 27.0517C15.6563 27.0127 15.1977 26.8715 14.892 26.7529C14.4875 26.5958 14.1986 26.408 13.8953 26.1047C13.592 25.8014 13.4042 25.5132 13.2467 25.1086C13.1281 24.8034 12.9867 24.3448 12.9483 23.4998C12.9067 22.5862 12.8984 22.3118 12.8984 19.9974C12.8984 17.683 12.9067 17.41 12.9483 16.4964C12.9869 15.6514 13.1281 15.1928 13.2467 14.8873C13.4038 14.4829 13.592 14.194 13.8953 13.8907C14.1986 13.5873 14.4875 13.3995 14.892 13.2421C15.1975 13.1229 15.6563 12.9821 16.5013 12.9433C17.3008 12.9072 17.6106 12.8963 19.2259 12.8945V12.8967ZM24.6299 14.3324C24.0557 14.3324 23.5898 14.7977 23.5898 15.372C23.5898 15.9462 24.0557 16.412 24.6299 16.412C25.204 16.412 25.6699 15.9462 25.6699 15.372C25.6699 14.7979 25.204 14.332 24.6299 14.332V14.3324ZM20.0015 15.5508C17.5436 15.5508 15.5508 17.5436 15.5508 20.0015C15.5508 22.4594 17.5436 24.4513 20.0015 24.4513C22.4594 24.4513 24.4515 22.4594 24.4515 20.0015C24.4515 17.5436 22.4593 15.5508 20.0013 15.5508H20.0015ZM20.0022 17.1113C21.5976 17.1113 22.8911 18.4046 22.8911 20.0002C22.8911 21.5956 21.5976 22.8891 20.0022 22.8891C18.4066 22.8891 17.1133 21.5956 17.1133 20.0002C17.1133 18.4046 18.4066 17.1113 20.0022 17.1113V17.1113Z\" fill=\"white\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5415
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-insta--white",
  "use": "icon-insta--white-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-insta--white\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.6014 9.39648C16.7392 9.3447 17.1028 9.33203 19.9997 9.33203H19.9964C22.8942 9.33203 23.2564 9.3447 24.3942 9.39648C25.5298 9.44848 26.3053 9.62826 26.9853 9.89204C27.6876 10.1643 28.2809 10.5287 28.8742 11.1221C29.4676 11.7149 29.832 12.3101 30.1054 13.0116C30.3676 13.6899 30.5476 14.465 30.6009 15.6005C30.652 16.7383 30.6654 17.1019 30.6654 19.9988C30.6654 22.8957 30.652 23.2584 30.6009 24.3962C30.5476 25.5313 30.3676 26.3067 30.1054 26.9851C29.832 27.6864 29.4676 28.2816 28.8742 28.8745C28.2816 29.4678 27.6873 29.8331 26.986 30.1056C26.3073 30.3694 25.5313 30.5491 24.3957 30.6011C23.258 30.6529 22.8955 30.6656 19.9984 30.6656C17.1017 30.6656 16.7383 30.6529 15.6005 30.6011C14.4652 30.5491 13.6899 30.3694 13.0112 30.1056C12.3101 29.8331 11.7149 29.4678 11.1223 28.8745C10.5292 28.2816 10.1647 27.6864 9.89204 26.9849C9.62848 26.3067 9.4487 25.5315 9.39648 24.396C9.34492 23.2582 9.33203 22.8957 9.33203 19.9988C9.33203 17.1019 9.34536 16.7381 9.39625 15.6003C9.44737 14.4652 9.62737 13.6899 9.89181 13.0114C10.1652 12.3101 10.5296 11.7149 11.1229 11.1221C11.7158 10.5289 12.311 10.1645 13.0125 9.89204C13.6907 9.62826 14.4659 9.44848 15.6014 9.39648ZM19.6468 11.2526C19.4311 11.2525 19.2313 11.2524 19.0454 11.2527V11.25C17.0574 11.2522 16.6761 11.2656 15.6921 11.31C14.6521 11.3578 14.0874 11.5311 13.7114 11.6778C13.2136 11.8716 12.8581 12.1027 12.4847 12.476C12.1114 12.8493 11.8798 13.2049 11.6865 13.7027C11.5405 14.0787 11.3667 14.6431 11.3191 15.6832C11.268 16.8076 11.2578 17.1436 11.2578 19.9921C11.2578 22.8406 11.268 23.1783 11.3191 24.3028C11.3665 25.3428 11.5405 25.9073 11.6865 26.2828C11.8803 26.7808 12.1114 27.1355 12.4847 27.5088C12.8581 27.8822 13.2136 28.1133 13.7114 28.3066C14.0876 28.4526 14.6521 28.6264 15.6921 28.6744C16.8165 28.7255 17.1541 28.7366 20.0023 28.7366C22.8504 28.7366 23.1882 28.7255 24.3126 28.6744C25.3526 28.6268 25.9175 28.4535 26.2931 28.3068C26.7911 28.1135 27.1455 27.8824 27.5189 27.5091C27.8922 27.1359 28.1238 26.7815 28.3171 26.2837C28.4631 25.9082 28.6369 25.3437 28.6844 24.3037C28.7355 23.1792 28.7467 22.8415 28.7467 19.9948C28.7467 17.1481 28.7355 16.8103 28.6844 15.6858C28.6371 14.6458 28.4631 14.0814 28.3171 13.7058C28.1233 13.208 27.8922 12.8525 27.5189 12.4791C27.1458 12.1058 26.7909 11.8747 26.2931 11.6813C25.9171 11.5353 25.3526 11.3616 24.3126 11.314C23.1879 11.2629 22.8504 11.2527 20.0023 11.2527C19.8793 11.2527 19.7608 11.2526 19.6468 11.2526Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.696 13.0258C24.9894 13.0258 24.416 13.5985 24.416 14.3054C24.416 15.0121 24.9894 15.5854 25.696 15.5854C26.4027 15.5854 26.976 15.0121 26.976 14.3054C26.976 13.5987 26.4027 13.0254 25.696 13.0254V13.0258Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.5234 19.9993C14.5234 16.9742 16.9761 14.5215 20.0013 14.5215H20.0011C23.0262 14.5215 25.4782 16.9742 25.4782 19.9993C25.4782 23.0245 23.0264 25.476 20.0013 25.476C16.9761 25.476 14.5234 23.0245 14.5234 19.9993ZM23.5565 20.0009C23.5565 18.0371 21.9645 16.4453 20.0009 16.4453C18.0371 16.4453 16.4453 18.0371 16.4453 20.0009C16.4453 21.9645 18.0371 23.5565 20.0009 23.5565C21.9645 23.5565 23.5565 21.9645 23.5565 20.0009Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 1182
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-insta",
  "use": "icon-insta-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-insta\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.6014 9.39648C16.7392 9.3447 17.1028 9.33203 19.9997 9.33203H19.9964C22.8942 9.33203 23.2564 9.3447 24.3942 9.39648C25.5298 9.44848 26.3053 9.62826 26.9853 9.89204C27.6876 10.1643 28.2809 10.5287 28.8742 11.1221C29.4676 11.7149 29.832 12.3101 30.1054 13.0116C30.3676 13.6899 30.5476 14.465 30.6009 15.6005C30.652 16.7383 30.6654 17.1019 30.6654 19.9988C30.6654 22.8957 30.652 23.2584 30.6009 24.3962C30.5476 25.5313 30.3676 26.3067 30.1054 26.9851C29.832 27.6864 29.4676 28.2816 28.8742 28.8745C28.2816 29.4678 27.6873 29.8331 26.986 30.1056C26.3073 30.3694 25.5313 30.5491 24.3957 30.6011C23.258 30.6529 22.8955 30.6656 19.9984 30.6656C17.1017 30.6656 16.7383 30.6529 15.6005 30.6011C14.4652 30.5491 13.6899 30.3694 13.0112 30.1056C12.3101 29.8331 11.7149 29.4678 11.1223 28.8745C10.5292 28.2816 10.1647 27.6864 9.89204 26.9849C9.62848 26.3067 9.4487 25.5315 9.39648 24.396C9.34492 23.2582 9.33203 22.8957 9.33203 19.9988C9.33203 17.1019 9.34536 16.7381 9.39625 15.6003C9.44737 14.4652 9.62737 13.6899 9.89181 13.0114C10.1652 12.3101 10.5296 11.7149 11.1229 11.1221C11.7158 10.5289 12.311 10.1645 13.0125 9.89204C13.6907 9.62826 14.4659 9.44848 15.6014 9.39648ZM19.6468 11.2526C19.4311 11.2525 19.2313 11.2524 19.0454 11.2527V11.25C17.0574 11.2522 16.6761 11.2656 15.6921 11.31C14.6521 11.3578 14.0874 11.5311 13.7114 11.6778C13.2136 11.8716 12.8581 12.1027 12.4847 12.476C12.1114 12.8493 11.8798 13.2049 11.6865 13.7027C11.5405 14.0787 11.3667 14.6431 11.3191 15.6832C11.268 16.8076 11.2578 17.1436 11.2578 19.9921C11.2578 22.8406 11.268 23.1783 11.3191 24.3028C11.3665 25.3428 11.5405 25.9073 11.6865 26.2828C11.8803 26.7808 12.1114 27.1355 12.4847 27.5088C12.8581 27.8822 13.2136 28.1133 13.7114 28.3066C14.0876 28.4526 14.6521 28.6264 15.6921 28.6744C16.8165 28.7255 17.1541 28.7366 20.0023 28.7366C22.8504 28.7366 23.1882 28.7255 24.3126 28.6744C25.3526 28.6268 25.9175 28.4535 26.2931 28.3068C26.7911 28.1135 27.1455 27.8824 27.5189 27.5091C27.8922 27.1359 28.1238 26.7815 28.3171 26.2837C28.4631 25.9082 28.6369 25.3437 28.6844 24.3037C28.7355 23.1792 28.7467 22.8415 28.7467 19.9948C28.7467 17.1481 28.7355 16.8103 28.6844 15.6858C28.6371 14.6458 28.4631 14.0814 28.3171 13.7058C28.1233 13.208 27.8922 12.8525 27.5189 12.4791C27.1458 12.1058 26.7909 11.8747 26.2931 11.6813C25.9171 11.5353 25.3526 11.3616 24.3126 11.314C23.1879 11.2629 22.8504 11.2527 20.0023 11.2527C19.8793 11.2527 19.7608 11.2526 19.6468 11.2526Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.696 13.0258C24.9894 13.0258 24.416 13.5985 24.416 14.3054C24.416 15.0121 24.9894 15.5854 25.696 15.5854C26.4027 15.5854 26.976 15.0121 26.976 14.3054C26.976 13.5987 26.4027 13.0254 25.696 13.0254V13.0258Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.5234 19.9993C14.5234 16.9742 16.9761 14.5215 20.0013 14.5215H20.0011C23.0262 14.5215 25.4782 16.9742 25.4782 19.9993C25.4782 23.0245 23.0264 25.476 20.0013 25.476C16.9761 25.476 14.5234 23.0245 14.5234 19.9993ZM23.5565 20.0009C23.5565 18.0371 21.9645 16.4453 20.0009 16.4453C18.0371 16.4453 16.4453 18.0371 16.4453 20.0009C16.4453 21.9645 18.0371 23.5565 20.0009 23.5565C21.9645 23.5565 23.5565 21.9645 23.5565 20.0009Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4256
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-like",
  "use": "icon-like-usage",
  "viewBox": "0 0 16 14",
  "content": "<symbol viewBox=\"0 0 16 14\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-like\">\n<path d=\"M8.00078 12.1004L7.44955 13.1663C7.79529 13.3451 8.20627 13.3451 8.55201 13.1663L8.00078 12.1004ZM8.00078 3.81962L6.93723 4.37536C7.14416 4.77137 7.55397 5.01962 8.00078 5.01962C8.4476 5.01962 8.85741 4.77137 9.06434 4.37536L8.00078 3.81962ZM12.7508 5.11337C12.7508 6.49119 11.6575 7.92501 10.2009 9.15686C9.51265 9.73891 8.8184 10.2126 8.29325 10.5417C8.03192 10.7054 7.81557 10.8315 7.66687 10.9154C7.5926 10.9573 7.53542 10.9885 7.4982 11.0086C7.47959 11.0186 7.466 11.0258 7.45776 11.0302C7.45365 11.0323 7.45088 11.0338 7.44949 11.0345C7.4488 11.0349 7.44846 11.0351 7.44846 11.0351C7.44847 11.035 7.44856 11.035 7.44874 11.0349C7.44883 11.0349 7.44903 11.0348 7.44908 11.0347C7.4493 11.0346 7.44955 11.0345 8.00078 12.1004C8.55201 13.1663 8.5523 13.1661 8.55262 13.166C8.55276 13.1659 8.55309 13.1657 8.55337 13.1656C8.55391 13.1653 8.55454 13.165 8.55527 13.1646C8.55672 13.1638 8.55853 13.1629 8.5607 13.1618C8.56503 13.1595 8.57079 13.1565 8.57794 13.1527C8.59222 13.1452 8.61203 13.1346 8.63701 13.1212C8.68694 13.0943 8.7576 13.0556 8.84602 13.0057C9.02271 12.906 9.2712 12.7611 9.56769 12.5753C10.1582 12.2053 10.9514 11.6653 11.7507 10.9894C13.2691 9.70522 15.1508 7.64553 15.1508 5.11337H12.7508ZM8.00078 12.1004C8.55201 11.0345 8.55226 11.0346 8.55249 11.0347C8.55253 11.0348 8.55274 11.0349 8.55283 11.0349C8.55301 11.035 8.5531 11.0351 8.5531 11.0351C8.55311 11.0351 8.55277 11.0349 8.55207 11.0345C8.55069 11.0338 8.54792 11.0323 8.5438 11.0302C8.53557 11.0258 8.52197 11.0186 8.50337 11.0086C8.46615 10.9885 8.40897 10.9573 8.33469 10.9154C8.186 10.8315 7.96964 10.7054 7.70832 10.5417C7.18317 10.2126 6.48891 9.73891 5.80068 9.15686C4.3441 7.92499 3.25078 6.49117 3.25078 5.11335H0.850781C0.850781 7.64551 2.73246 9.70521 4.25088 10.9894C5.05015 11.6653 5.8434 12.2053 6.43387 12.5753C6.73036 12.7611 6.97885 12.906 7.15554 13.0057C7.24396 13.0556 7.31462 13.0943 7.36455 13.1212C7.38953 13.1346 7.40934 13.1452 7.42362 13.1527C7.43077 13.1565 7.43653 13.1595 7.44087 13.1618C7.44303 13.1629 7.44484 13.1638 7.44629 13.1646C7.44702 13.165 7.44765 13.1653 7.44819 13.1656C7.44847 13.1657 7.44881 13.1659 7.44894 13.166C7.44926 13.1661 7.44955 13.1663 8.00078 12.1004ZM3.25078 5.11335C3.25078 4.36983 3.45902 3.90899 3.69104 3.63213C3.92554 3.35229 4.25339 3.17693 4.64177 3.12008C5.44523 3.00247 6.43285 3.41011 6.93723 4.37536L9.06434 3.26387C8.08122 1.38243 6.09384 0.481949 4.29416 0.745387C3.38098 0.879059 2.50024 1.31652 1.85154 2.09061C1.20036 2.86768 0.850781 3.90189 0.850781 5.11335H3.25078ZM9.06434 4.37536C9.56872 3.41011 10.5563 3.00247 11.3598 3.12009C11.7482 3.17694 12.076 3.3523 12.3105 3.63214C12.5425 3.90901 12.7508 4.36984 12.7508 5.11337H15.1508C15.1508 3.90191 14.8012 2.86769 14.15 2.09063C13.5013 1.31653 12.6206 0.879068 11.7074 0.745394C9.90773 0.481951 7.92035 1.38243 6.93723 3.26387L9.06434 4.37536Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7532
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-liked",
  "use": "icon-liked-usage",
  "viewBox": "0 0 34 34",
  "content": "<symbol viewBox=\"0 0 34 34\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-liked\">\n<path d=\"M0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17Z\" fill=\"#EEEFF0\" />\n<path d=\"M22.9508 15.1134C22.9508 19.0234 17.0008 22.1004 17.0008 22.1004C17.0008 22.1004 11.0508 19.0233 11.0508 15.1134C11.0508 11.2034 15.5133 10.9729 17.0008 13.8196C18.4883 10.9729 22.9508 11.2034 22.9508 15.1134Z\" />\n<path d=\"M17.0008 22.1004L16.4495 23.1663C16.7953 23.3451 17.2063 23.3451 17.552 23.1663L17.0008 22.1004ZM17.0008 13.8196L15.9372 14.3754C16.1442 14.7714 16.554 15.0196 17.0008 15.0196C17.4476 15.0196 17.8574 14.7714 18.0643 14.3754L17.0008 13.8196ZM21.7508 15.1134C21.7508 16.4912 20.6575 17.925 19.2009 19.1569C18.5127 19.7389 17.8184 20.2126 17.2932 20.5417C17.0319 20.7054 16.8156 20.8315 16.6669 20.9154C16.5926 20.9573 16.5354 20.9885 16.4982 21.0086C16.4796 21.0186 16.466 21.0258 16.4578 21.0302C16.4536 21.0323 16.4509 21.0338 16.4495 21.0345C16.4488 21.0349 16.4485 21.0351 16.4485 21.0351C16.4485 21.035 16.4486 21.035 16.4487 21.0349C16.4488 21.0349 16.449 21.0348 16.4491 21.0347C16.4493 21.0346 16.4496 21.0345 17.0008 22.1004C17.552 23.1663 17.5523 23.1661 17.5526 23.166C17.5528 23.1659 17.5531 23.1657 17.5534 23.1656C17.5539 23.1653 17.5545 23.165 17.5553 23.1646C17.5567 23.1638 17.5585 23.1629 17.5607 23.1618C17.565 23.1595 17.5708 23.1565 17.5779 23.1527C17.5922 23.1452 17.612 23.1346 17.637 23.1212C17.6869 23.0943 17.7576 23.0556 17.846 23.0057C18.0227 22.906 18.2712 22.7611 18.5677 22.5753C19.1582 22.2053 19.9514 21.6653 20.7507 20.9894C22.2691 19.7052 24.1508 17.6455 24.1508 15.1134H21.7508ZM17.0008 22.1004C17.552 21.0345 17.5523 21.0346 17.5525 21.0347C17.5525 21.0348 17.5527 21.0349 17.5528 21.0349C17.553 21.035 17.5531 21.0351 17.5531 21.0351C17.5531 21.0351 17.5528 21.0349 17.5521 21.0345C17.5507 21.0338 17.5479 21.0323 17.5438 21.0302C17.5356 21.0258 17.522 21.0186 17.5034 21.0086C17.4661 20.9885 17.409 20.9573 17.3347 20.9154C17.186 20.8315 16.9696 20.7054 16.7083 20.5417C16.1832 20.2126 15.4889 19.7389 14.8007 19.1569C13.3441 17.925 12.2508 16.4912 12.2508 15.1134H9.85078C9.85078 17.6455 11.7325 19.7052 13.2509 20.9894C14.0501 21.6653 14.8434 22.2053 15.4339 22.5753C15.7304 22.7611 15.9788 22.906 16.1555 23.0057C16.244 23.0556 16.3146 23.0943 16.3646 23.1212C16.3895 23.1346 16.4093 23.1452 16.4236 23.1527C16.4308 23.1565 16.4365 23.1595 16.4409 23.1618C16.443 23.1629 16.4448 23.1638 16.4463 23.1646C16.447 23.165 16.4477 23.1653 16.4482 23.1656C16.4485 23.1657 16.4488 23.1659 16.4489 23.166C16.4493 23.1661 16.4495 23.1663 17.0008 22.1004ZM12.2508 15.1134C12.2508 14.3698 12.459 13.909 12.691 13.6321C12.9255 13.3523 13.2534 13.1769 13.6418 13.1201C14.4452 13.0025 15.4328 13.4101 15.9372 14.3754L18.0643 13.2639C17.0812 11.3824 15.0938 10.4819 13.2942 10.7454C12.381 10.8791 11.5002 11.3165 10.8515 12.0906C10.2004 12.8677 9.85078 13.9019 9.85078 15.1134H12.2508ZM18.0643 14.3754C18.5687 13.4101 19.5563 13.0025 20.3598 13.1201C20.7482 13.1769 21.076 13.3523 21.3105 13.6321C21.5425 13.909 21.7508 14.3698 21.7508 15.1134H24.1508C24.1508 13.9019 23.8012 12.8677 23.15 12.0906C22.5013 11.3165 21.6206 10.8791 20.7074 10.7454C18.9077 10.482 16.9203 11.3824 15.9372 13.2639L18.0643 14.3754Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5813
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-lk-cart",
  "use": "icon-lk-cart-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-lk-cart\">\r\n<path d=\"M3.33398 5.83398H16.6673\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n<path d=\"M8.33398 9.16602V14.166\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n<path d=\"M11.666 9.16602V14.166\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n<path d=\"M4.16602 5.83398L4.99935 15.834C4.99935 16.276 5.17494 16.6999 5.4875 17.0125C5.80007 17.3251 6.22399 17.5007 6.66602 17.5007H13.3327C13.7747 17.5007 14.1986 17.3251 14.5112 17.0125C14.8238 16.6999 14.9994 16.276 14.9994 15.834L15.8327 5.83398\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n<path d=\"M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2836
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-location",
  "use": "icon-location-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-location\">\r\n<path d=\"M21 7V7.01167\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M20.9987 15.1655L16.9154 9.33216C16.5223 8.6217 16.3214 7.82097 16.3325 7.00909C16.3436 6.1972 16.5663 5.40227 16.9787 4.70283C17.3911 4.00338 17.9788 3.42364 18.6838 3.02087C19.3888 2.6181 20.1867 2.40625 20.9987 2.40625C21.8107 2.40625 22.6086 2.6181 23.3136 3.02087C24.0186 3.42364 24.6063 4.00338 25.0187 4.70283C25.4311 5.40227 25.6538 6.1972 25.6649 7.00909C25.676 7.82097 25.4751 8.6217 25.082 9.33216L20.9987 15.1655Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12.25 5.54297L10.5 4.66797L3.5 8.16797V23.3346L10.5 19.8346L17.5 23.3346L24.5 19.8346V17.5013\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M10.5 4.66797V19.8346\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M17.5 17.5V23.3333\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 8489
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-navgoogle",
  "use": "icon-navgoogle-usage",
  "viewBox": "0 0 17 24",
  "content": "<symbol viewBox=\"0 0 17 24\" fill=\"none\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-navgoogle\">\n<path d=\"M4.63281 17.7831C5.37789 18.7102 6.13377 19.8718 6.53114 20.5752C7.0149 21.4894 7.21359 22.1068 7.57425 23.2081C7.78589 23.8147 7.98458 23.9997 8.40571 23.9997C8.86571 23.9997 9.0752 23.69 9.23717 23.2081C9.57192 22.1691 9.83324 21.3797 10.2414 20.6247C11.047 19.1791 12.0663 17.8928 13.0576 16.6581C13.3297 16.3118 15.0682 14.2725 15.85 12.6549C15.85 12.6549 16.8046 10.8867 16.8046 8.41516C16.8046 6.1049 15.8608 4.49805 15.8608 4.49805L13.131 5.22726L11.4681 9.57674L11.0578 10.1704L10.9714 10.2823L10.8591 10.4178L10.6733 10.6394L10.4012 10.9104L8.92402 12.1086L5.23967 14.2338L4.63281 17.7831Z\" fill=\"#34A853\" />\n<path d=\"M0.820312 12.3578C1.7252 14.4099 3.45076 16.2018 4.62992 17.7828L10.8713 10.4175C10.8713 10.4175 9.99016 11.5662 8.40282 11.5662C6.62759 11.5662 5.18927 10.1573 5.18927 8.37831C5.18927 7.15435 5.92139 6.31543 5.92139 6.31543L1.68849 7.44044L0.820312 12.3578Z\" fill=\"#FBBC04\" />\n<path d=\"M10.9474 0.382812C13.0185 1.04965 14.7937 2.4457 15.8606 4.51073L10.8718 10.4305C10.8718 10.4305 11.6039 9.57867 11.6039 8.36761C11.6039 6.54995 10.0662 5.17971 8.40331 5.17971C6.82677 5.17971 5.92188 6.31763 5.92188 6.31763V2.58336L10.9474 0.382812Z\" fill=\"#4285F4\" />\n<path d=\"M1.95312 2.99C3.19276 1.51866 5.36536 0 8.36727 0C9.81855 0 10.9221 0.382892 10.9221 0.382892L5.91175 6.31556H2.36346L1.95312 2.99Z\" fill=\"#1A73E8\" />\n<path d=\"M0.818506 12.358C0.818506 12.358 0 10.7382 0 8.40428C0 6.19298 0.868177 4.26346 1.97175 3.00293L5.93038 6.32634L0.818506 12.358Z\" fill=\"#EA4335\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 1877
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-navshare",
  "use": "icon-navshare-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-navshare\">\n<path d=\"M18 8H10C8.89543 8 8 8.89543 8 10V18C8 19.1046 8.89543 20 10 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M16 8V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 6727
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-navyandex",
  "use": "icon-navyandex-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-navyandex\">\n<path d=\"M24 0L0 9.7534L10.5023 13.5038L14.2526 24L24 0Z\" fill=\"url(#icon-navyandex_paint0_linear_5436_98532)\" />\n<path d=\"M23.9972 0L10.125 13.8782L14.2498 24L23.9972 0Z\" fill=\"#FFCC00\" />\n<path d=\"M9.7534 14.2522L14.2526 23.9995L12.7489 11.2507L0 9.75293L9.7534 14.2522Z\" fill=\"#ECA704\" />\n<defs>\n<linearGradient id=\"icon-navyandex_paint0_linear_5436_98532\" x1=\"9.79942e-05\" y1=\"23.9995\" x2=\"24.0011\" y2=\"-0.0014742\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#FFCC00\" />\n<stop offset=\"1\" stop-color=\"#FFE992\" />\n</linearGradient>\n</defs>\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2046
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-orders",
  "use": "icon-orders-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-orders\">\r\n<path d=\"M5.83333 4.66797H10.5L14 8.16797H22.1667C22.7855 8.16797 23.379 8.4138 23.8166 8.85139C24.2542 9.28897 24.5 9.88246 24.5 10.5013V19.8346C24.5 20.4535 24.2542 21.047 23.8166 21.4845C23.379 21.9221 22.7855 22.168 22.1667 22.168H5.83333C5.21449 22.168 4.621 21.9221 4.18342 21.4845C3.74583 21.047 3.5 20.4535 3.5 19.8346V7.0013C3.5 6.38246 3.74583 5.78897 4.18342 5.35139C4.621 4.9138 5.21449 4.66797 5.83333 4.66797\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7774
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-pencil",
  "use": "icon-pencil-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-pencil\">\r\n<path d=\"M3.33398 16.6663H6.66732L15.4173 7.91627C15.8593 7.47424 16.1077 6.87472 16.1077 6.2496C16.1077 5.62448 15.8593 5.02496 15.4173 4.58293C14.9753 4.14091 14.3758 3.89258 13.7507 3.89258C13.1255 3.89258 12.526 4.14091 12.084 4.58293L3.33398 13.3329V16.6663Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M11.25 5.41602L14.5833 8.74935\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4190
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-print",
  "use": "icon-print-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-print\">\n<path d=\"M19.8333 19.8333H22.1667C22.7855 19.8333 23.379 19.5875 23.8166 19.1499C24.2542 18.7123 24.5 18.1188 24.5 17.5V12.8333C24.5 12.2145 24.2542 11.621 23.8166 11.1834C23.379 10.7458 22.7855 10.5 22.1667 10.5H5.83333C5.21449 10.5 4.621 10.7458 4.18342 11.1834C3.74583 11.621 3.5 12.2145 3.5 12.8333V17.5C3.5 18.1188 3.74583 18.7123 4.18342 19.1499C4.621 19.5875 5.21449 19.8333 5.83333 19.8333H8.16667\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M19.8346 10.5V5.83333C19.8346 5.21449 19.5888 4.621 19.1512 4.18342C18.7136 3.74583 18.1201 3.5 17.5013 3.5H10.5013C9.88246 3.5 9.28897 3.74583 8.85139 4.18342C8.4138 4.621 8.16797 5.21449 8.16797 5.83333V10.5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M17.5013 15.168H10.5013C9.21264 15.168 8.16797 16.2126 8.16797 17.5013V22.168C8.16797 23.4566 9.21264 24.5013 10.5013 24.5013H17.5013C18.79 24.5013 19.8346 23.4566 19.8346 22.168V17.5013C19.8346 16.2126 18.79 15.168 17.5013 15.168Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 325
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-question",
  "use": "icon-question-usage",
  "viewBox": "0 0 60 60",
  "content": "<symbol viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-question\">\r\n<circle cx=\"30\" cy=\"30\" r=\"30\" fill=\"#CEDDF0\" />\r\n<path d=\"M23.1953 22.8196C23.1953 21.4482 23.8309 20.1328 24.9624 19.163C26.0938 18.1933 27.6283 17.6484 29.2284 17.6484H30.9521C32.5522 17.6484 34.0867 18.1933 35.2181 19.163C36.3496 20.1328 36.9852 21.4482 36.9852 22.8196C37.0487 23.9388 36.7468 25.0482 36.125 25.9809C35.5032 26.9136 34.5952 27.619 33.5377 27.9908C32.4803 28.4866 31.5722 29.4272 30.9505 30.6707C30.3287 31.9143 30.0268 33.3936 30.0903 34.8858\" stroke=\"#1F617F\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M30.0898 41.7812V41.7985\" stroke=\"#1F617F\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5556
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-repeat",
  "use": "icon-repeat-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-repeat\">\n<path d=\"M4.72656 12.8332C5.02159 10.5824 6.12682 8.51628 7.83535 7.02159C9.54389 5.52691 11.7386 4.70614 14.0086 4.71293C16.2787 4.71972 18.4684 5.5536 20.168 7.05847C21.8676 8.56334 22.9604 10.636 23.242 12.8886C23.5236 15.1411 22.9745 17.419 21.6977 19.2959C20.4209 21.1729 18.5037 22.5201 16.3052 23.0855C14.1067 23.6508 11.7775 23.3956 9.75358 22.3674C7.7297 21.3393 6.14989 19.6088 5.3099 17.4999M4.72656 23.3332V17.4999H10.5599\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 751
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-row-view",
  "use": "icon-row-view-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-row-view\">\r\n<rect x=\"10\" y=\"10\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<rect x=\"10\" y=\"22\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<path d=\"M22 12H30\" stroke-width=\"2\" />\r\n<path d=\"M22 24H30\" stroke-width=\"2\" />\r\n<path d=\"M22 16H27\" stroke-width=\"2\" />\r\n<path d=\"M22 28H27\" stroke-width=\"2\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4598
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-share",
  "use": "icon-share-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-share\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path d=\"M27.5911 12.4074C25.9801 10.7965 23.3684 10.7965 21.7574 12.4074L18.3098 15.855C16.6435 17.5214 16.7977 20.1766 18.3098 21.6887C18.563 21.9419 18.8432 22.1484 19.139 22.3179L19.7682 21.6887C20.1809 21.2759 20.0357 20.7934 20.0282 20.4452C19.9377 20.381 19.8496 20.3116 19.7682 20.2303C18.9923 19.4544 18.9574 18.1243 19.7682 17.3134C19.8886 17.193 23.1427 13.939 23.2158 13.8659C24.0201 13.0615 25.3283 13.0615 26.1326 13.8659C26.937 14.6702 26.937 15.9784 26.1326 16.7827L23.8538 19.0615C23.9197 19.4262 24.3152 20.2899 24.1117 21.7147C24.1217 21.7049 24.1336 21.6986 24.1435 21.6887L27.5911 18.2411C29.202 16.6302 29.202 14.0184 27.5911 12.4074Z\" fill=\"#212F4E\" />\n<path d=\"M21.9558 18.0433C21.7026 17.7901 21.4224 17.5836 21.1267 17.4141L20.4974 18.0433C20.0847 18.456 20.2299 18.9385 20.2374 19.2867C20.328 19.3509 20.4161 19.4203 20.4974 19.5017C21.2734 20.2776 21.3083 21.6077 20.4974 22.4185C20.3768 22.5392 16.8532 26.0628 16.7827 26.1333C15.9783 26.9376 14.6702 26.9376 13.8658 26.1333C13.0615 25.3289 13.0615 24.0208 13.8658 23.2165L16.4119 20.6704C16.346 20.3058 15.9505 19.4421 16.1539 18.0173C16.144 18.027 16.132 18.0334 16.1221 18.0433L12.4074 21.7581C10.7965 23.369 10.7965 25.9808 12.4074 27.5918C14.0183 29.2026 16.6301 29.2026 18.241 27.5918L21.9558 23.877C23.5912 22.2415 23.5019 19.5893 21.9558 18.0433Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7812
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-tele--black",
  "use": "icon-tele--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-tele--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.7012 26.0256C18.0521 26.0256 18.2071 25.8652 18.403 25.6747L20.2744 23.855L17.94 22.4473\" fill=\"#7F8899\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.9404 22.4485L23.597 26.6276C24.2424 26.9838 24.7083 26.7994 24.8691 26.0283L27.1716 15.1781C27.4073 14.233 26.8113 13.8043 26.1938 14.0847L12.6736 19.298C11.7507 19.6682 11.7561 20.1831 12.5054 20.4125L15.975 21.4954L24.0075 16.4278C24.3866 16.1979 24.7347 16.3215 24.449 16.575\" fill=\"#EFF6FF\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7157
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-telega",
  "use": "icon-telega-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-telega\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.334 29.1672C16.834 29.1672 17.0549 28.9385 17.334 28.6672L20.0007 26.0742L16.6743 24.0684\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.6745 24.0676L24.7345 30.0224C25.6543 30.5299 26.3181 30.2672 26.5472 29.1685L29.828 13.708C30.1639 12.3613 29.3147 11.7505 28.4348 12.15L9.16977 19.5785C7.85475 20.1059 7.86242 20.8396 8.93007 21.1665L13.8739 22.7095L25.3194 15.4887C25.8597 15.161 26.3556 15.3372 25.9486 15.6984\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4877
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-tile-view",
  "use": "icon-tile-view-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-tile-view\">\r\n<rect x=\"10\" y=\"10\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<rect x=\"10\" y=\"22\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<rect x=\"22\" y=\"10\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<rect x=\"22\" y=\"22\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5341
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-trash",
  "use": "icon-trash-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-trash\">\r\n<path d=\"M3.33594 5.83398H16.6693\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M8.33594 9.16602V14.166\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M11.668 9.16602V14.166\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M4.16797 5.83398L5.0013 15.834C5.0013 16.276 5.1769 16.6999 5.48946 17.0125C5.80202 17.3251 6.22594 17.5007 6.66797 17.5007H13.3346C13.7767 17.5007 14.2006 17.3251 14.5131 17.0125C14.8257 16.6999 15.0013 16.276 15.0013 15.834L15.8346 5.83398\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4206
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-update",
  "use": "icon-update-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-update\">\n<path d=\"M4.05078 10.9993C4.30367 9.07007 5.251 7.29911 6.71546 6.01795C8.17992 4.7368 10.0611 4.03328 12.0068 4.0391C13.9526 4.04492 15.8295 4.75967 17.2863 6.04956C18.7431 7.33945 19.6798 9.11605 19.9212 11.0468C20.1625 12.9775 19.6919 14.93 18.5975 16.5388C17.503 18.1476 15.8598 19.3024 13.9753 19.787C12.0909 20.2716 10.0944 20.0528 8.35966 19.1715C6.6249 18.2903 5.27078 16.807 4.55078 14.9993M4.05078 19.9993V14.9993H9.05078\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7906
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-user-dropdown",
  "use": "icon-user-dropdown-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-user-dropdown\">\n<path d=\"M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M14 15.168C15.933 15.168 17.5 13.601 17.5 11.668C17.5 9.73497 15.933 8.16797 14 8.16797C12.067 8.16797 10.5 9.73497 10.5 11.668C10.5 13.601 12.067 15.168 14 15.168Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M7.19531 21.9918C7.48407 21.0307 8.07494 20.1883 8.88027 19.5896C9.68559 18.9909 10.6625 18.6677 11.666 18.668H16.3326C17.3374 18.6676 18.3155 18.9916 19.1214 19.5917C19.9273 20.1918 20.518 21.036 20.8056 21.9988\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 976
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-user",
  "use": "icon-user-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-user\">\n<path d=\"M20 21C22.7614 21 25 18.7614 25 16C25 13.2386 22.7614 11 20 11C17.2386 11 15 13.2386 15 16C15 18.7614 17.2386 21 20 21Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M10.5 29.9895C10.9031 28.5468 11.728 27.2823 12.8522 26.3835C13.9764 25.4847 15.3401 24.9996 16.741 25H23.2557C24.6584 24.9995 26.0238 25.4858 27.1488 26.3867C28.2739 27.2875 29.0985 28.5548 29.5 30\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-vk--black",
  "use": "icon-vk--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-vk--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4777 25.5738C20.4777 25.5738 20.7905 25.5399 20.9507 25.3723C21.0974 25.2188 21.0923 24.929 21.0923 24.929C21.0923 24.929 21.0728 23.5759 21.7179 23.3761C22.3538 23.1796 23.1702 24.6846 24.0366 25.2633C24.6911 25.7009 25.1879 25.6051 25.1879 25.6051L27.5032 25.5738C27.5032 25.5738 28.7138 25.5011 28.1398 24.574C28.0924 24.498 27.805 23.8879 26.4189 22.6347C24.9666 21.3229 25.1616 21.5351 26.9097 19.2656C27.9745 17.8836 28.4001 17.0399 28.267 16.6791C28.1407 16.334 27.3573 16.4256 27.3573 16.4256L24.7513 16.4413C24.7513 16.4413 24.558 16.4157 24.4147 16.4991C24.2748 16.5808 24.1841 16.7716 24.1841 16.7716C24.1841 16.7716 23.7721 17.8407 23.2219 18.7504C22.0613 20.6691 21.5976 20.7706 21.4077 20.6517C20.966 20.3735 21.0762 19.5356 21.0762 18.9403C21.0762 17.0803 21.3661 16.3051 20.5124 16.1045C20.2293 16.0376 20.0207 15.9939 19.2959 15.9864C18.3659 15.9774 17.5791 15.9897 17.1332 16.2019C16.8365 16.3431 16.6076 16.6585 16.7475 16.6766C16.9195 16.6989 17.3095 16.779 17.5164 17.0531C17.7834 17.4072 17.7741 18.2014 17.7741 18.2014C17.7741 18.2014 17.9276 20.3908 17.4155 20.6625C17.0645 20.849 16.583 20.4684 15.5479 18.7273C15.018 17.8357 14.6178 16.85 14.6178 16.85C14.6178 16.85 14.5407 16.6659 14.4025 16.5668C14.2355 16.4471 14.0024 16.41 14.0024 16.41L11.526 16.4256C11.526 16.4256 11.1538 16.4355 11.0173 16.5932C10.8961 16.7328 11.008 17.0225 11.008 17.0225C11.008 17.0225 12.9469 21.4401 15.1426 23.6667C17.1561 25.7075 19.4417 25.5738 19.4417 25.5738H20.4777Z\" fill=\"white\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4501
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-vk--white",
  "use": "icon-vk--white-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-vk--white\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4796 25.5738C20.4796 25.5738 20.7924 25.5399 20.9527 25.3723C21.0993 25.2188 21.0942 24.929 21.0942 24.929C21.0942 24.929 21.0747 23.5759 21.7199 23.3761C22.3557 23.1796 23.1721 24.6846 24.0386 25.2633C24.693 25.7009 25.1898 25.6051 25.1898 25.6051L27.5051 25.5738C27.5051 25.5738 28.7157 25.5011 28.1418 24.574C28.0943 24.498 27.8069 23.8879 26.4208 22.6347C24.9686 21.3229 25.1636 21.5351 26.9117 19.2656C27.9765 17.8836 28.4021 17.0399 28.269 16.6791C28.1426 16.334 27.3593 16.4256 27.3593 16.4256L24.7532 16.4413C24.7532 16.4413 24.5599 16.4157 24.4167 16.4991C24.2768 16.5808 24.1861 16.7716 24.1861 16.7716C24.1861 16.7716 23.7741 17.8407 23.2239 18.7504C22.0633 20.6691 21.5995 20.7706 21.4096 20.6517C20.9679 20.3735 21.0781 19.5356 21.0781 18.9403C21.0781 17.0803 21.3681 16.3051 20.5144 16.1045C20.2312 16.0376 20.0227 15.9939 19.2978 15.9864C18.3678 15.9774 17.5811 15.9897 17.1351 16.2019C16.8384 16.3431 16.6095 16.6585 16.7494 16.6766C16.9215 16.6989 17.3115 16.779 17.5183 17.0531C17.7854 17.4072 17.7761 18.2014 17.7761 18.2014C17.7761 18.2014 17.9295 20.3908 17.4175 20.6625C17.0665 20.849 16.5849 20.4684 15.5498 18.7273C15.0199 17.8357 14.6198 16.85 14.6198 16.85C14.6198 16.85 14.5426 16.6659 14.4045 16.5668C14.2375 16.4471 14.0043 16.41 14.0043 16.41L11.528 16.4256C11.528 16.4256 11.1558 16.4355 11.0193 16.5932C10.8981 16.7328 11.01 17.0225 11.01 17.0225C11.01 17.0225 12.9488 21.4401 15.1446 23.6667C17.158 25.7075 19.4436 25.5738 19.4436 25.5738H20.4796Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 9276
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-vk",
  "use": "icon-vk-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-vk\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4796 25.5738C20.4796 25.5738 20.7924 25.5399 20.9527 25.3723C21.0993 25.2188 21.0942 24.929 21.0942 24.929C21.0942 24.929 21.0747 23.5759 21.7199 23.3761C22.3557 23.1796 23.1721 24.6846 24.0386 25.2633C24.693 25.7009 25.1898 25.6051 25.1898 25.6051L27.5051 25.5738C27.5051 25.5738 28.7157 25.5011 28.1418 24.574C28.0943 24.498 27.8069 23.8879 26.4208 22.6347C24.9686 21.3229 25.1636 21.5351 26.9117 19.2656C27.9765 17.8836 28.4021 17.0399 28.269 16.6791C28.1426 16.334 27.3593 16.4256 27.3593 16.4256L24.7532 16.4413C24.7532 16.4413 24.5599 16.4157 24.4167 16.4991C24.2768 16.5808 24.1861 16.7716 24.1861 16.7716C24.1861 16.7716 23.7741 17.8407 23.2239 18.7504C22.0633 20.6691 21.5995 20.7706 21.4096 20.6517C20.9679 20.3735 21.0781 19.5356 21.0781 18.9403C21.0781 17.0803 21.3681 16.3051 20.5144 16.1045C20.2312 16.0376 20.0227 15.9939 19.2978 15.9864C18.3678 15.9774 17.5811 15.9897 17.1351 16.2019C16.8384 16.3431 16.6095 16.6585 16.7494 16.6766C16.9215 16.6989 17.3115 16.779 17.5183 17.0531C17.7854 17.4072 17.7761 18.2014 17.7761 18.2014C17.7761 18.2014 17.9295 20.3908 17.4175 20.6625C17.0665 20.849 16.5849 20.4684 15.5498 18.7273C15.0199 17.8357 14.6198 16.85 14.6198 16.85C14.6198 16.85 14.5426 16.6659 14.4045 16.5668C14.2375 16.4471 14.0043 16.41 14.0043 16.41L11.528 16.4256C11.528 16.4256 11.1558 16.4355 11.0193 16.5932C10.8981 16.7328 11.01 17.0225 11.01 17.0225C11.01 17.0225 12.9488 21.4401 15.1446 23.6667C17.158 25.7075 19.4436 25.5738 19.4436 25.5738H20.4796Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3834
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-whats",
  "use": "icon-whats-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-whats\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.6586 31.1278H20.6537C18.6633 31.1271 16.7075 30.6277 14.9705 29.6802L8.66602 31.334L10.3532 25.1714C9.31246 23.3678 8.76483 21.3219 8.76572 19.2259C8.76833 12.6687 14.1034 7.33398 20.6585 7.33398C23.8399 7.33536 26.8259 8.57387 29.0712 10.8218C31.3165 13.0697 32.5524 16.0576 32.5511 19.2352C32.5485 25.7909 27.2156 31.1251 20.6586 31.1278Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.2623 27.5263L15.6233 27.7406C17.1409 28.6412 18.8806 29.1177 20.6543 29.1184H20.6584C26.1065 29.1184 30.5407 24.684 30.5429 19.2337C30.5439 16.5924 29.5168 14.109 27.6505 12.2406C25.7843 10.3722 23.3024 9.34271 20.6622 9.3418C15.2099 9.3418 10.7756 13.7757 10.7734 19.2257C10.7727 21.0934 11.2953 22.9124 12.2847 24.4861L12.5198 24.8601L11.5212 28.5077L15.2623 27.5263Z\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.6496 22.0619C26.5754 21.9379 26.3773 21.8636 26.0801 21.7148C25.783 21.5661 24.322 20.8473 24.0496 20.748C23.7773 20.6489 23.5791 20.5993 23.381 20.8967C23.1829 21.1942 22.6135 21.8636 22.4401 22.0619C22.2668 22.2602 22.0934 22.2851 21.7964 22.1363C21.4992 21.9875 20.5417 21.6738 19.4067 20.6614C18.5233 19.8734 17.9269 18.9003 17.7536 18.6028C17.5802 18.3053 17.7351 18.1446 17.8839 17.9964C18.0175 17.8632 18.181 17.6492 18.3296 17.4758C18.4782 17.3023 18.5277 17.1783 18.6267 16.9801C18.7258 16.7817 18.6763 16.6082 18.602 16.4595C18.5277 16.3107 17.9334 14.848 17.6858 14.253C17.4446 13.6736 17.1996 13.7521 17.0172 13.7429C16.8441 13.7343 16.6458 13.7324 16.4477 13.7324C16.2496 13.7324 15.9276 13.8068 15.6553 14.1043C15.3829 14.4018 14.6152 15.1207 14.6152 16.5833C14.6152 18.0459 15.68 19.459 15.8286 19.6572C15.9772 19.8557 17.924 22.857 20.9049 24.1442C21.6139 24.4504 22.1673 24.6332 22.5989 24.7701C23.3108 24.9964 23.9586 24.9644 24.4705 24.8879C25.0415 24.8026 26.2287 24.1691 26.4764 23.475C26.7239 22.7808 26.7239 22.1858 26.6496 22.0619Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 5041
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-you--black",
  "use": "icon-you--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-you--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.7745 14.3737C27.5203 14.5794 28.1077 15.1853 28.307 15.9548C28.6693 17.3494 28.6693 20.2593 28.6693 20.2593C28.6693 20.2593 28.6693 23.169 28.307 24.5637C28.1077 25.3332 27.5203 25.9391 26.7745 26.1449C25.4229 26.5185 20.0026 26.5185 20.0026 26.5185C20.0026 26.5185 14.5823 26.5185 13.2306 26.1449C12.4848 25.9391 11.8974 25.3332 11.6981 24.5637C11.3359 23.169 11.3359 20.2593 11.3359 20.2593C11.3359 20.2593 11.3359 17.3494 11.6981 15.9548C11.8974 15.1853 12.4848 14.5794 13.2306 14.3737C14.5823 14 20.0026 14 20.0026 14C20.0026 14 25.4229 14 26.7745 14.3737ZM18.3766 17.8102V23.253L22.7099 20.5317L18.3766 17.8102Z\" fill=\"white\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7991
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-you--white",
  "use": "icon-you--white-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-you--white\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.7726 14.3737C27.5184 14.5794 28.1058 15.1853 28.3051 15.9548C28.6673 17.3494 28.6673 20.2593 28.6673 20.2593C28.6673 20.2593 28.6673 23.169 28.3051 24.5637C28.1058 25.3332 27.5184 25.9391 26.7726 26.1449C25.421 26.5185 20.0007 26.5185 20.0007 26.5185C20.0007 26.5185 14.5803 26.5185 13.2286 26.1449C12.4828 25.9391 11.8954 25.3332 11.6961 24.5637C11.334 23.169 11.334 20.2593 11.334 20.2593C11.334 20.2593 11.334 17.3494 11.6961 15.9548C11.8954 15.1853 12.4828 14.5794 13.2286 14.3737C14.5803 14 20.0007 14 20.0007 14C20.0007 14 25.421 14 26.7726 14.3737ZM18.3746 17.8102V23.253L22.7079 20.5317L18.3746 17.8102Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7214
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-you",
  "use": "icon-you-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-you\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.7726 14.3737C27.5184 14.5794 28.1058 15.1853 28.3051 15.9548C28.6673 17.3494 28.6673 20.2593 28.6673 20.2593C28.6673 20.2593 28.6673 23.169 28.3051 24.5637C28.1058 25.3332 27.5184 25.9391 26.7726 26.1449C25.421 26.5185 20.0007 26.5185 20.0007 26.5185C20.0007 26.5185 14.5803 26.5185 13.2286 26.1449C12.4828 25.9391 11.8954 25.3332 11.6961 24.5637C11.334 23.169 11.334 20.2593 11.334 20.2593C11.334 20.2593 11.334 17.3494 11.6961 15.9548C11.8954 15.1853 12.4828 14.5794 13.2286 14.3737C14.5803 14 20.0007 14 20.0007 14C20.0007 14 25.421 14 26.7726 14.3737ZM18.3746 17.8102V23.253L22.7079 20.5317L18.3746 17.8102Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4078
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./icon-5corners.svg": 2640,
	"./icon-alert.svg": 4661,
	"./icon-book.svg": 5210,
	"./icon-building.svg": 7109,
	"./icon-button-card.svg": 1448,
	"./icon-calculator.svg": 3225,
	"./icon-cancel.svg": 9023,
	"./icon-canceled.svg": 3228,
	"./icon-cart.svg": 4255,
	"./icon-clear.svg": 3772,
	"./icon-clip.svg": 4447,
	"./icon-closer.svg": 8971,
	"./icon-compare.svg": 2238,
	"./icon-completed.svg": 5916,
	"./icon-contacts-mail.svg": 2661,
	"./icon-contacts-phone.svg": 9845,
	"./icon-contacts-telegram.svg": 234,
	"./icon-contacts-whatsup.svg": 2539,
	"./icon-cross.svg": 5051,
	"./icon-delete.svg": 3792,
	"./icon-document-arrow.svg": 8806,
	"./icon-document.svg": 3746,
	"./icon-download.svg": 501,
	"./icon-dropdown-cart.svg": 2597,
	"./icon-dropdown-compare.svg": 7660,
	"./icon-dropdown-favorites.svg": 9518,
	"./icon-eye.svg": 4476,
	"./icon-fb--black.svg": 9240,
	"./icon-fb--white.svg": 8294,
	"./icon-fb.svg": 8965,
	"./icon-filter.svg": 6519,
	"./icon-geopin.svg": 4313,
	"./icon-head.svg": 5587,
	"./icon-header-cart.svg": 885,
	"./icon-header-search.svg": 8443,
	"./icon-header-user.svg": 8470,
	"./icon-insta--black.svg": 8897,
	"./icon-insta--white.svg": 5415,
	"./icon-insta.svg": 1182,
	"./icon-like.svg": 4256,
	"./icon-liked.svg": 7532,
	"./icon-lk-cart.svg": 5813,
	"./icon-location.svg": 2836,
	"./icon-navgoogle.svg": 8489,
	"./icon-navshare.svg": 1877,
	"./icon-navyandex.svg": 6727,
	"./icon-orders.svg": 2046,
	"./icon-pencil.svg": 7774,
	"./icon-print.svg": 4190,
	"./icon-question.svg": 325,
	"./icon-repeat.svg": 5556,
	"./icon-row-view.svg": 751,
	"./icon-share.svg": 4598,
	"./icon-tele--black.svg": 7812,
	"./icon-telega.svg": 7157,
	"./icon-tile-view.svg": 4877,
	"./icon-trash.svg": 5341,
	"./icon-update.svg": 4206,
	"./icon-user-dropdown.svg": 7906,
	"./icon-user.svg": 976,
	"./icon-vk--black.svg": 3999,
	"./icon-vk--white.svg": 4501,
	"./icon-vk.svg": 9276,
	"./icon-whats.svg": 3834,
	"./icon-you--black.svg": 5041,
	"./icon-you--white.svg": 7991,
	"./icon-you.svg": 7214,
	"assets/icons/icon-5corners.svg": 2640,
	"assets/icons/icon-alert.svg": 4661,
	"assets/icons/icon-book.svg": 5210,
	"assets/icons/icon-building.svg": 7109,
	"assets/icons/icon-button-card.svg": 1448,
	"assets/icons/icon-calculator.svg": 3225,
	"assets/icons/icon-cancel.svg": 9023,
	"assets/icons/icon-canceled.svg": 3228,
	"assets/icons/icon-cart.svg": 4255,
	"assets/icons/icon-clear.svg": 3772,
	"assets/icons/icon-clip.svg": 4447,
	"assets/icons/icon-closer.svg": 8971,
	"assets/icons/icon-compare.svg": 2238,
	"assets/icons/icon-completed.svg": 5916,
	"assets/icons/icon-contacts-mail.svg": 2661,
	"assets/icons/icon-contacts-phone.svg": 9845,
	"assets/icons/icon-contacts-telegram.svg": 234,
	"assets/icons/icon-contacts-whatsup.svg": 2539,
	"assets/icons/icon-cross.svg": 5051,
	"assets/icons/icon-delete.svg": 3792,
	"assets/icons/icon-document-arrow.svg": 8806,
	"assets/icons/icon-document.svg": 3746,
	"assets/icons/icon-download.svg": 501,
	"assets/icons/icon-dropdown-cart.svg": 2597,
	"assets/icons/icon-dropdown-compare.svg": 7660,
	"assets/icons/icon-dropdown-favorites.svg": 9518,
	"assets/icons/icon-eye.svg": 4476,
	"assets/icons/icon-fb--black.svg": 9240,
	"assets/icons/icon-fb--white.svg": 8294,
	"assets/icons/icon-fb.svg": 8965,
	"assets/icons/icon-filter.svg": 6519,
	"assets/icons/icon-geopin.svg": 4313,
	"assets/icons/icon-head.svg": 5587,
	"assets/icons/icon-header-cart.svg": 885,
	"assets/icons/icon-header-search.svg": 8443,
	"assets/icons/icon-header-user.svg": 8470,
	"assets/icons/icon-insta--black.svg": 8897,
	"assets/icons/icon-insta--white.svg": 5415,
	"assets/icons/icon-insta.svg": 1182,
	"assets/icons/icon-like.svg": 4256,
	"assets/icons/icon-liked.svg": 7532,
	"assets/icons/icon-lk-cart.svg": 5813,
	"assets/icons/icon-location.svg": 2836,
	"assets/icons/icon-navgoogle.svg": 8489,
	"assets/icons/icon-navshare.svg": 1877,
	"assets/icons/icon-navyandex.svg": 6727,
	"assets/icons/icon-orders.svg": 2046,
	"assets/icons/icon-pencil.svg": 7774,
	"assets/icons/icon-print.svg": 4190,
	"assets/icons/icon-question.svg": 325,
	"assets/icons/icon-repeat.svg": 5556,
	"assets/icons/icon-row-view.svg": 751,
	"assets/icons/icon-share.svg": 4598,
	"assets/icons/icon-tele--black.svg": 7812,
	"assets/icons/icon-telega.svg": 7157,
	"assets/icons/icon-tile-view.svg": 4877,
	"assets/icons/icon-trash.svg": 5341,
	"assets/icons/icon-update.svg": 4206,
	"assets/icons/icon-user-dropdown.svg": 7906,
	"assets/icons/icon-user.svg": 976,
	"assets/icons/icon-vk--black.svg": 3999,
	"assets/icons/icon-vk--white.svg": 4501,
	"assets/icons/icon-vk.svg": 9276,
	"assets/icons/icon-whats.svg": 3834,
	"assets/icons/icon-you--black.svg": 5041,
	"assets/icons/icon-you--white.svg": 7991,
	"assets/icons/icon-you.svg": 7214
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4078;

/***/ },

/***/ 147
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./about-nav/about-nav.js": 7169,
	"./about/about.js": 7465,
	"./accordion/accordion.js": 5097,
	"./advantage-card/advantage-card.js": 75,
	"./advantages/advantages.js": 9907,
	"./alert-wrapper/alert-wrapper.js": 3937,
	"./alert/alert.js": 4009,
	"./article-card/article-card.js": 8661,
	"./article/article.js": 1217,
	"./back-nav/back-nav.js": 4745,
	"./back/back.js": 2137,
	"./background/background.js": 6387,
	"./banner/banner.js": 1179,
	"./breadcrumbs/breadcrumbs.js": 4073,
	"./button/button.js": 2271,
	"./bx-filter/bx-filter.js": 6529,
	"./bx-soa-order/bx-soa-order.js": 7797,
	"./calculator/calculator.js": 5795,
	"./cart-amount/cart-amount.js": 5801,
	"./cart-block/cart-block.js": 6583,
	"./cart-card/cart-card.js": 1409,
	"./cart-missed/cart-missed.js": 1085,
	"./cart/cart.js": 9819,
	"./catalog-card/catalog-card.js": 727,
	"./catalog-nav/catalog-nav.js": 7057,
	"./catalog/catalog.js": 6433,
	"./categories/categories.js": 8907,
	"./category-card/category-card.js": 8729,
	"./checkbox/checkbox.js": 7945,
	"./clear/clear.js": 8881,
	"./compare/compare.js": 4201,
	"./components.js": 2820,
	"./contacts/contacts.js": 9961,
	"./cookie/cookie.js": 11,
	"./document-card/document-card.js": 7126,
	"./double-slider/double-slider.js": 7721,
	"./empty/empty.js": 1865,
	"./find/find.js": 8877,
	"./footer/footer.js": 8413,
	"./form-lk/form-lk.js": 1493,
	"./form/form.js": 1979,
	"./header-dropdown/header-dropdown.js": 7025,
	"./header-padding/header-padding.js": 2705,
	"./header-search/header-search.js": 3357,
	"./header/header.js": 6689,
	"./how-card/how-card.js": 3549,
	"./how/how.js": 2865,
	"./item-card/item-card.js": 8697,
	"./layout-header/layout-header.js": 5853,
	"./layout/layout.js": 1995,
	"./line/line.js": 6743,
	"./loading/loading.js": 3037,
	"./map/map.js": 1413,
	"./marker/marker.js": 5079,
	"./mobile-nav/mobile-nav.js": 9143,
	"./modal/modal.js": 1421,
	"./news-card/news-card.js": 5401,
	"./not-found/not-found.js": 265,
	"./notice/notice.js": 2415,
	"./novelties/novelties.js": 7897,
	"./offer-card/offer-card.js": 3709,
	"./offer-detail-card/offer-detail-card.js": 6009,
	"./offer-details/offer-details.js": 3789,
	"./offer/offer.js": 5137,
	"./outdated-browsers/outdated-browsers.js": 9453,
	"./packaging-amount/packaging-amount.js": 9363,
	"./packaging-table/packaging-table.js": 6913,
	"./packaging/packaging.js": 4377,
	"./pagination/pagination.js": 1015,
	"./partners/partners.js": 6165,
	"./payment/payment.js": 1561,
	"./politics/politics.js": 5569,
	"./popUp/popUp.js": 9417,
	"./post-title/post-title.js": 5169,
	"./privacy/privacy.js": 9025,
	"./product-analogues/product-analogues.js": 8133,
	"./product-description/product-description.js": 7473,
	"./product-documents/product-documents.js": 8521,
	"./product-highlights/product-highlights.js": 8085,
	"./product-info/product-info.js": 9027,
	"./product-main/product-main.js": 7933,
	"./product-questions/product-questions.js": 6129,
	"./product-specification/product-specification.js": 3217,
	"./product/product.js": 6657,
	"./products/products.js": 2775,
	"./profile-center/profile-center.js": 4817,
	"./profile-nav/profile-nav.js": 1053,
	"./profile-page/profile-page.js": 7349,
	"./profile-subscribes/profile-subscribes.js": 5265,
	"./projects/projects.js": 9575,
	"./promo/promo.js": 2945,
	"./promotion-alert/promotion-alert.js": 1006,
	"./promotion-card/promotion-card.js": 5279,
	"./qr-code/qr-code.js": 3598,
	"./question-card/question-card.js": 2069,
	"./question/question.js": 4227,
	"./search/search.js": 2503,
	"./select-city/select-city.js": 4961,
	"./seo/seo.js": 569,
	"./service-card/service-card.js": 8043,
	"./services/services.js": 1335,
	"./share/share.js": 5273,
	"./sidebar-nav/sidebar-nav.js": 5141,
	"./site-nav/site-nav.js": 8761,
	"./socials/socials.js": 4741,
	"./subscribe/subscribe.js": 7477,
	"./suggest/suggest.js": 5573,
	"./swiper/swiper.js": 7955,
	"./tabs/tabs.js": 3519,
	"./tags/tags.js": 2961,
	"./team-card/team-card.js": 9469,
	"./team/team.js": 4385,
	"./title/title.js": 61,
	"./tooltip/tooltip.js": 281,
	"./top-filters/top-filters.js": 1729,
	"./up/up.js": 5057,
	"./validator/validator.js": 4489,
	"./video/video.js": 2305,
	"./warehouses-map/warehouses-map.js": 8641,
	"./warehouses/warehouses.js": 2095,
	"./watched/watched.js": 1161,
	"./widget/widget.js": 2079,
	"./window/window.js": 6919,
	"./zoom/zoom.js": 6577,
	"components/about-nav/about-nav.js": 7169,
	"components/about/about.js": 7465,
	"components/accordion/accordion.js": 5097,
	"components/advantage-card/advantage-card.js": 75,
	"components/advantages/advantages.js": 9907,
	"components/alert-wrapper/alert-wrapper.js": 3937,
	"components/alert/alert.js": 4009,
	"components/article-card/article-card.js": 8661,
	"components/article/article.js": 1217,
	"components/back-nav/back-nav.js": 4745,
	"components/back/back.js": 2137,
	"components/background/background.js": 6387,
	"components/banner/banner.js": 1179,
	"components/breadcrumbs/breadcrumbs.js": 4073,
	"components/button/button.js": 2271,
	"components/bx-filter/bx-filter.js": 6529,
	"components/bx-soa-order/bx-soa-order.js": 7797,
	"components/calculator/calculator.js": 5795,
	"components/cart-amount/cart-amount.js": 5801,
	"components/cart-block/cart-block.js": 6583,
	"components/cart-card/cart-card.js": 1409,
	"components/cart-missed/cart-missed.js": 1085,
	"components/cart/cart.js": 9819,
	"components/catalog-card/catalog-card.js": 727,
	"components/catalog-nav/catalog-nav.js": 7057,
	"components/catalog/catalog.js": 6433,
	"components/categories/categories.js": 8907,
	"components/category-card/category-card.js": 8729,
	"components/checkbox/checkbox.js": 7945,
	"components/clear/clear.js": 8881,
	"components/compare/compare.js": 4201,
	"components/components.js": 2820,
	"components/contacts/contacts.js": 9961,
	"components/cookie/cookie.js": 11,
	"components/document-card/document-card.js": 7126,
	"components/double-slider/double-slider.js": 7721,
	"components/empty/empty.js": 1865,
	"components/find/find.js": 8877,
	"components/footer/footer.js": 8413,
	"components/form-lk/form-lk.js": 1493,
	"components/form/form.js": 1979,
	"components/header-dropdown/header-dropdown.js": 7025,
	"components/header-padding/header-padding.js": 2705,
	"components/header-search/header-search.js": 3357,
	"components/header/header.js": 6689,
	"components/how-card/how-card.js": 3549,
	"components/how/how.js": 2865,
	"components/item-card/item-card.js": 8697,
	"components/layout-header/layout-header.js": 5853,
	"components/layout/layout.js": 1995,
	"components/line/line.js": 6743,
	"components/loading/loading.js": 3037,
	"components/map/map.js": 1413,
	"components/marker/marker.js": 5079,
	"components/mobile-nav/mobile-nav.js": 9143,
	"components/modal/modal.js": 1421,
	"components/news-card/news-card.js": 5401,
	"components/not-found/not-found.js": 265,
	"components/notice/notice.js": 2415,
	"components/novelties/novelties.js": 7897,
	"components/offer-card/offer-card.js": 3709,
	"components/offer-detail-card/offer-detail-card.js": 6009,
	"components/offer-details/offer-details.js": 3789,
	"components/offer/offer.js": 5137,
	"components/outdated-browsers/outdated-browsers.js": 9453,
	"components/packaging-amount/packaging-amount.js": 9363,
	"components/packaging-table/packaging-table.js": 6913,
	"components/packaging/packaging.js": 4377,
	"components/pagination/pagination.js": 1015,
	"components/partners/partners.js": 6165,
	"components/payment/payment.js": 1561,
	"components/politics/politics.js": 5569,
	"components/popUp/popUp.js": 9417,
	"components/post-title/post-title.js": 5169,
	"components/privacy/privacy.js": 9025,
	"components/product-analogues/product-analogues.js": 8133,
	"components/product-description/product-description.js": 7473,
	"components/product-documents/product-documents.js": 8521,
	"components/product-highlights/product-highlights.js": 8085,
	"components/product-info/product-info.js": 9027,
	"components/product-main/product-main.js": 7933,
	"components/product-questions/product-questions.js": 6129,
	"components/product-specification/product-specification.js": 3217,
	"components/product/product.js": 6657,
	"components/products/products.js": 2775,
	"components/profile-center/profile-center.js": 4817,
	"components/profile-nav/profile-nav.js": 1053,
	"components/profile-page/profile-page.js": 7349,
	"components/profile-subscribes/profile-subscribes.js": 5265,
	"components/projects/projects.js": 9575,
	"components/promo/promo.js": 2945,
	"components/promotion-alert/promotion-alert.js": 1006,
	"components/promotion-card/promotion-card.js": 5279,
	"components/qr-code/qr-code.js": 3598,
	"components/question-card/question-card.js": 2069,
	"components/question/question.js": 4227,
	"components/search/search.js": 2503,
	"components/select-city/select-city.js": 4961,
	"components/seo/seo.js": 569,
	"components/service-card/service-card.js": 8043,
	"components/services/services.js": 1335,
	"components/share/share.js": 5273,
	"components/sidebar-nav/sidebar-nav.js": 5141,
	"components/site-nav/site-nav.js": 8761,
	"components/socials/socials.js": 4741,
	"components/subscribe/subscribe.js": 7477,
	"components/suggest/suggest.js": 5573,
	"components/swiper/swiper.js": 7955,
	"components/tabs/tabs.js": 3519,
	"components/tags/tags.js": 2961,
	"components/team-card/team-card.js": 9469,
	"components/team/team.js": 4385,
	"components/title/title.js": 61,
	"components/tooltip/tooltip.js": 281,
	"components/top-filters/top-filters.js": 1729,
	"components/up/up.js": 5057,
	"components/validator/validator.js": 4489,
	"components/video/video.js": 2305,
	"components/warehouses-map/warehouses-map.js": 8641,
	"components/warehouses/warehouses.js": 2095,
	"components/watched/watched.js": 1161,
	"components/widget/widget.js": 2079,
	"components/window/window.js": 6919,
	"components/zoom/zoom.js": 6577
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 147;

/***/ },

/***/ 5244
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./AddAddressPopUpProvider/AddAddressPopUpProvider.js": 4151,
	"./AddOrganizationPopUpProvider/AddOrganizationPopUpProvider.js": 624,
	"./FooterSubscribeProvider/FooterSubscribeProvider.js": 7995,
	"./LoginProvider/LoginProvider.js": 4589,
	"./SubscribeProvider/SubscribeProvider.js": 5640,
	"react/providers/common/AddAddressPopUpProvider/AddAddressPopUpProvider.js": 4151,
	"react/providers/common/AddOrganizationPopUpProvider/AddOrganizationPopUpProvider.js": 624,
	"react/providers/common/FooterSubscribeProvider/FooterSubscribeProvider.js": 7995,
	"react/providers/common/LoginProvider/LoginProvider.js": 4589,
	"react/providers/common/SubscribeProvider/SubscribeProvider.js": 5640
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5244;

/***/ },

/***/ 5313
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./contacts/RequestContactsProvider/RequestContactsProvider.js": 3045,
	"./cooperation/RequestCooperationProvider/RequestCooperationProvider.js": 7195,
	"./lk-add-organization/add-organization/add-organization.js": 1088,
	"./lk-addresses/AddressProvider/AddressProvider.js": 8017,
	"./lk-my-organization/OrganizationProvider/OrganizationProvider.js": 5862,
	"./lk/personal-data/personal-data.js": 780,
	"./main/RequestSuggestProvider/RequestSuggestProvider.js": 9720,
	"./product/RequestProductProvider/RequestProductProvider.js": 1387,
	"./search-1/RequestSearchProvider/RequestSearchProvider.js": 9309,
	"./service/RequestServiceProvider/RequestServiceProvider.js": 3726,
	"react/providers/pages/contacts/RequestContactsProvider/RequestContactsProvider.js": 3045,
	"react/providers/pages/cooperation/RequestCooperationProvider/RequestCooperationProvider.js": 7195,
	"react/providers/pages/lk-add-organization/add-organization/add-organization.js": 1088,
	"react/providers/pages/lk-addresses/AddressProvider/AddressProvider.js": 8017,
	"react/providers/pages/lk-my-organization/OrganizationProvider/OrganizationProvider.js": 5862,
	"react/providers/pages/lk/personal-data/personal-data.js": 780,
	"react/providers/pages/main/RequestSuggestProvider/RequestSuggestProvider.js": 9720,
	"react/providers/pages/product/RequestProductProvider/RequestProductProvider.js": 1387,
	"react/providers/pages/search-1/RequestSearchProvider/RequestSearchProvider.js": 9309,
	"react/providers/pages/service/RequestServiceProvider/RequestServiceProvider.js": 3726
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5313;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + "msw-mocks" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "client_beerresource:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/set anonymous default export name */
/******/ 	(() => {
/******/ 		// set .name for anonymous default exports per ES spec
/******/ 		__webpack_require__.dn = (x) => {
/******/ 			(Object.getOwnPropertyDescriptor(x, "name") || {}).writable || Object.defineProperty(x, "name", { value: "default", configurable: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			23: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkclient_beerresource"] = self["webpackChunkclient_beerresource"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [96], () => (__webpack_require__(8625)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;