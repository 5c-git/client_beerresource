(self["webpackChunkclient_beerresource"] = self["webpackChunkclient_beerresource"] || []).push([[910],{

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
  const { fetchData, dataForm, setDataForm } = props;
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
                  window.AddOrganizationPopUpProvider.setOpen(false);
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
          window.addressPopUpSelectInstance.setChoiceByValue("");
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
                const currentOptions = window.addressPopUpSelectInstance.config.choices;
                currentOptions.splice(currentOptions.length - 1, 0, {
                  value: `${val.lat}|${val.lon}|${val.address} ${val.street} ${val.house}`,
                  label: `${val.address} ${val.street} ${val.house}`,
                  disabled: false
                });
                window.addressPopUpSelectInstance.clearChoices();
                window.addressPopUpSelectInstance.setChoices(currentOptions);
                window.addressPopUpSelectInstance.setChoiceByValue(
                  `${val.lat}|${val.lon}|${val.address} ${val.street} ${val.house}`
                );
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
          setDataForm: setFormData
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
          setDataForm: setFormData
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

}]);