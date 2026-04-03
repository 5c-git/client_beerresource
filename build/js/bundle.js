/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony import */ var aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choices_js_src_styles_choices_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83);
/* harmony import */ var choices_js_src_styles_choices_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choices_js_src_styles_choices_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_modules_effect_fade_effect_fade_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87);
/* harmony import */ var swiper_modules_effect_fade_effect_fade_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_modules_effect_fade_effect_fade_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_modules_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89);
/* harmony import */ var swiper_modules_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_modules_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_modules_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91);
/* harmony import */ var swiper_modules_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_modules_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_modules_scrollbar_scrollbar_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93);
/* harmony import */ var swiper_modules_scrollbar_scrollbar_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_modules_scrollbar_scrollbar_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97);
/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_widget_widget_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99);
/* harmony import */ var _components_window_window_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(102);
/* harmony import */ var _components_form_form_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(109);
/* harmony import */ var _components_popUp_popUp_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(112);
/* harmony import */ var _components_cookie_cookie_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(262);
/* harmony import */ var _components_validator_validator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(103);
/* harmony import */ var _components_up_up_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(265);
/* harmony import */ var _components_button_button_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(268);
/* harmony import */ var _components_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(271);
/* harmony import */ var _components_outdated_browsers_outdated_browsers_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(274);
/* harmony import */ var _components_video_video_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(115);
/* harmony import */ var _components_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(277);
/* harmony import */ var _components_swiper_swiper_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(280);
/* harmony import */ var _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(239);
/* harmony import */ var _components_bx_filter_bx_filter_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(283);
/* harmony import */ var _components_bx_soa_order_bx_soa_order_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(259);
/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(286);
/* harmony import */ var _components_header_search_header_search_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(289);
/* harmony import */ var _components_footer_footer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(292);
/* harmony import */ var _components_breadcrumbs_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(295);
/* harmony import */ var _components_title_title_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(298);
/* harmony import */ var _components_alert_alert_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(118);
/* harmony import */ var _components_alert_wrapper_alert_wrapper_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(301);
/* harmony import */ var _components_map_map_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(304);
/* harmony import */ var _components_header_padding_header_padding_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(307);
/* harmony import */ var _components_header_dropdown_header_dropdown_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(310);
/* harmony import */ var _components_socials_socials_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(313);
/* harmony import */ var _components_mobile_nav_mobile_nav_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(316);
/* harmony import */ var _components_marker_marker_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(319);
/* harmony import */ var _components_promo_promo_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(322);
/* harmony import */ var _components_about_about_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(325);
/* harmony import */ var _components_products_products_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(329);
/* harmony import */ var _components_how_how_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(332);
/* harmony import */ var _components_warehouses_warehouses_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(335);
/* harmony import */ var _components_warehouses_map_warehouses_map_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(233);
/* harmony import */ var _components_categories_categories_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(338);
/* harmony import */ var _components_suggest_suggest_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(341);
/* harmony import */ var _components_packaging_packaging_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(344);
/* harmony import */ var _components_catalog_nav_catalog_nav_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(347);
/* harmony import */ var _components_layout_layout_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(350);
/* harmony import */ var _components_layout_header_layout_header_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(353);
/* harmony import */ var _components_watched_watched_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(356);
/* harmony import */ var _components_line_line_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(359);
/* harmony import */ var _components_seo_seo_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(362);
/* harmony import */ var _components_banner_banner_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(365);
/* harmony import */ var _components_catalog_catalog_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(368);
/* harmony import */ var _components_back_back_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(371);
/* harmony import */ var _components_clear_clear_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(374);
/* harmony import */ var _components_top_filters_top_filters_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(377);
/* harmony import */ var _components_product_product_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(380);
/* harmony import */ var _components_tooltip_tooltip_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(383);
/* harmony import */ var _components_product_main_product_main_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(445);
/* harmony import */ var _components_double_slider_double_slider_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(448);
/* harmony import */ var _components_product_info_product_info_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(451);
/* harmony import */ var _components_product_highlights_product_highlights_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(454);
/* harmony import */ var _components_packaging_table_packaging_table_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(457);
/* harmony import */ var _components_packaging_amount_packaging_amount_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(460);
/* harmony import */ var _components_product_specification_product_specification_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(463);
/* harmony import */ var _components_product_description_product_description_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(466);
/* harmony import */ var _components_product_documents_product_documents_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(469);
/* harmony import */ var _components_product_analogues_product_analogues_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(472);
/* harmony import */ var _components_product_questions_product_questions_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(475);
/* harmony import */ var _components_sidebar_nav_sidebar_nav_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(478);
/* harmony import */ var _components_search_search_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(481);
/* harmony import */ var _components_empty_empty_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(484);
/* harmony import */ var _components_back_nav_back_nav_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(487);
/* harmony import */ var _components_tabs_tabs_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(490);
/* harmony import */ var _components_tags_tags_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(493);
/* harmony import */ var _components_post_title_post_title_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(496);
/* harmony import */ var _components_profile_react_profile_react_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(499);
/* harmony import */ var _components_politics_politics_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(1261);
/* harmony import */ var _components_not_found_not_found_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(1264);
/* harmony import */ var _components_site_nav_site_nav_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(1267);
/* harmony import */ var _components_question_question_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(1270);
/* harmony import */ var _components_form_lk_form_lk_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(1273);
/* harmony import */ var _components_share_share_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(1276);
/* harmony import */ var _components_services_services_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(1279);
/* harmony import */ var _components_article_article_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(1282);
/* harmony import */ var _components_background_background_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(1285);
/* harmony import */ var _components_novelties_novelties_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(1288);
/* harmony import */ var _components_advantages_advantages_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(1291);
/* harmony import */ var _components_about_nav_about_nav_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(1294);
/* harmony import */ var _components_team_team_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(1297);
/* harmony import */ var _components_projects_projects_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(1300);
/* harmony import */ var _components_contacts_contacts_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(1303);
/* harmony import */ var _components_offer_offer_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(1306);
/* harmony import */ var _components_payment_payment_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(1309);
/* harmony import */ var _components_cart_cart_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(1312);
/* harmony import */ var _components_cart_amount_cart_amount_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(1315);
/* harmony import */ var _components_cart_block_cart_block_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(1318);
/* harmony import */ var _components_cart_missed_cart_missed_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(1321);
/* harmony import */ var _components_partners_partners_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(1324);
/* harmony import */ var _components_notice_notice_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(1327);
/* harmony import */ var _components_compare_compare_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(251);
/* harmony import */ var _components_profile_page_profile_page_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(1330);
/* harmony import */ var _components_profile_nav_profile_nav_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(1333);
/* harmony import */ var _components_profile_center_profile_center_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(236);
/* harmony import */ var _components_profile_subscribes_profile_subscribes_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(1336);
/* harmony import */ var _components_offer_details_offer_details_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(1339);
/* harmony import */ var _components_select_city_select_city_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(248);
/* harmony import */ var _components_qr_code_qr_code_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(1342);
/* harmony import */ var _components_calculator_calculator_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(1346);
/* harmony import */ var _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(1349);
/* harmony import */ var _components_how_card_how_card_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(1352);
/* harmony import */ var _components_item_card_item_card_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(125);
/* harmony import */ var _components_catalog_card_catalog_card_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(1355);
/* harmony import */ var _components_article_card_article_card_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(1358);
/* harmony import */ var _components_document_card_document_card_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(1361);
/* harmony import */ var _components_question_card_question_card_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(128);
/* harmony import */ var _components_promotion_card_promotion_card_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(1364);
/* harmony import */ var _components_service_card_service_card_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(1367);
/* harmony import */ var _components_category_card_category_card_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(1370);
/* harmony import */ var _components_advantage_card_advantage_card_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(1373);
/* harmony import */ var _components_team_card_team_card_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(1376);
/* harmony import */ var _components_cart_card_cart_card_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(1379);
/* harmony import */ var _components_offer_card_offer_card_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(1382);
/* harmony import */ var _components_offer_detail_card_offer_detail_card_js__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(1385);
/* harmony import */ var _components_promotion_alert_promotion_alert_js__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(242);
/* harmony import */ var _components_news_card_news_card__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(1388);
/* harmony import */ var _components_react_Form_Personal_Data_Form_Personal_Data_js__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(1247);
/* harmony import */ var _components_react_Form_Name_Form_Name_js__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(1248);
/* harmony import */ var _components_react_Form_Email_Form_Email_js__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(1249);
/* harmony import */ var _components_react_Form_Phone_Form_Phone_js__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(1250);
/* harmony import */ var _components_react_Form_Add_Organization_1_Form_Add_Organization_1_js__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(543);
/* harmony import */ var _components_react_Form_Add_Organization_2_Form_Add_Organization_2_js__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(1246);
/* harmony import */ var _components_react_Add_Organization_Add_Organization_js__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(511);
/* harmony import */ var _providers_pages_product_RequestProductProvider_RequestProductProvider__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(1391);
/* harmony import */ var _providers_pages_search_1_RequestSearchProvider_RequestSearchProvider__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(1414);
/* harmony import */ var _providers_pages_service_RequestServiceProvider_RequestServiceProvider__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(1427);
/* harmony import */ var _providers_pages_cooperation_RequestCooperationProvider_RequestCooperationProvider__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(1434);
/* harmony import */ var _providers_pages_contacts_RequestContactsProvider_RequestContactsProvider__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(1441);
/* harmony import */ var _providers_pages_lk_my_organization_OrganizationProvider_OrganizationProvider__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(1448);
/* harmony import */ var _providers_pages_lk_addresses_AddressProvider_AddressProvider__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(1832);
/* harmony import */ var _providers_pages_main_RequestSuggestProvider_RequestSuggestProvider__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(1860);
/* harmony import */ var _providers_common_LoginProvider_LoginProvider__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(1867);
/* harmony import */ var _providers_common_SubscribeProvider_SubscribeProvider__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(1878);
/* harmony import */ var _providers_common_AddOrganizationPopUpProvider_AddOrganizationPopUpProvider__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(1885);
/* harmony import */ var _providers_common_AddAddressPopUpProvider_AddAddressPopUpProvider__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(1887);
/* harmony import */ var _providers_common_FooterSubscribeProvider_FooterSubscribeProvider__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(1890);
// SvgSprite compiler
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__(2)); // UTILS

 // LIBS SCSS


 // import 'flatpickr/dist/themes/light.scss'







 //------------------------------------------------------------
// LIBS JS
// import fslightbox from 'fslightbox';
//------------------------------------------------------------
//------------------------------------------------------------
// 100vh hack for mobile-browsers
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit

let vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}); // usage in css
// height: calc(var(--vh, 1vh) * 100);
// 100vh hack for mobile-browsers
//------------------------------------------------------------
// Удалить перед передачей кодеру.

 // обязательный функционал для каждого проекта
// Core components









 // Core components
// наработанный полезный функционал(необязательный для каждого проекта)
//Functional components




 // Bitrix components


 //компоненты необходимые практически на каждом проекте
//Basic components








 //Basic components















































































 //Project cards
















 //react components






















/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icon-5corners.svg": 3,
	"./icon-alert.svg": 7,
	"./icon-book.svg": 8,
	"./icon-building.svg": 9,
	"./icon-button-card.svg": 10,
	"./icon-calculator.svg": 11,
	"./icon-cancel.svg": 12,
	"./icon-canceled.svg": 13,
	"./icon-cart.svg": 14,
	"./icon-clear.svg": 15,
	"./icon-clip.svg": 16,
	"./icon-closer.svg": 17,
	"./icon-compare.svg": 18,
	"./icon-completed.svg": 19,
	"./icon-contacts-mail.svg": 20,
	"./icon-contacts-phone.svg": 21,
	"./icon-contacts-telegram.svg": 22,
	"./icon-contacts-whatsup.svg": 23,
	"./icon-cross.svg": 24,
	"./icon-delete.svg": 25,
	"./icon-document-arrow.svg": 26,
	"./icon-document.svg": 27,
	"./icon-download.svg": 28,
	"./icon-dropdown-cart.svg": 29,
	"./icon-dropdown-compare.svg": 30,
	"./icon-dropdown-favorites.svg": 31,
	"./icon-eye.svg": 32,
	"./icon-fb--black.svg": 33,
	"./icon-fb--white.svg": 34,
	"./icon-fb.svg": 35,
	"./icon-filter.svg": 36,
	"./icon-geopin.svg": 37,
	"./icon-head.svg": 38,
	"./icon-header-cart.svg": 39,
	"./icon-header-search.svg": 40,
	"./icon-header-user.svg": 41,
	"./icon-insta--black.svg": 42,
	"./icon-insta--white.svg": 43,
	"./icon-insta.svg": 44,
	"./icon-like.svg": 45,
	"./icon-liked.svg": 46,
	"./icon-lk-cart.svg": 47,
	"./icon-location.svg": 48,
	"./icon-navgoogle.svg": 49,
	"./icon-navshare.svg": 50,
	"./icon-navyandex.svg": 51,
	"./icon-orders.svg": 52,
	"./icon-pencil.svg": 53,
	"./icon-print.svg": 54,
	"./icon-question.svg": 55,
	"./icon-repeat.svg": 56,
	"./icon-row-view.svg": 57,
	"./icon-share.svg": 58,
	"./icon-tele--black.svg": 59,
	"./icon-telega.svg": 60,
	"./icon-tile-view.svg": 61,
	"./icon-trash.svg": 62,
	"./icon-update.svg": 63,
	"./icon-user-dropdown.svg": 64,
	"./icon-user.svg": 65,
	"./icon-vk--black.svg": 66,
	"./icon-vk--white.svg": 67,
	"./icon-vk.svg": 68,
	"./icon-whats.svg": 69,
	"./icon-you--black.svg": 70,
	"./icon-you--white.svg": 71,
	"./icon-you.svg": 72
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
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-5corners",
  "use": "icon-5corners-usage",
  "viewBox": "0 0 80 16",
  "content": "<symbol viewBox=\"0 0 80 16\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-5corners\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.55361 13.2927L6.53124 13.2483L0 9.14286L2.3262 7.45631L4.24978 0L6.57597 1.68655L14.3374 1.19834L13.4427 3.90569L16.3057 11.0735H13.4204L13.398 11.0957L7.42593 16L6.55361 13.2927ZM6.55554 13.2251V13.2694L11.0737 11.0503L11.9237 11.0725H13.3999H13.4223L13.3328 10.4068L12.7065 6.12382L13.4446 3.92687H13.4223L13.3552 3.90468L8.47912 3.0614L6.5779 1.68553V1.70773L5.99635 2.77291L4.22934 6.10162L2.41759 7.41092L2.32812 7.47749L5.83978 11.0503L6.55554 13.2251Z\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M23.4375 13.3657V11.8275C24.1273 12.2712 24.817 12.4783 25.5068 12.4783C26.2279 12.4783 26.7923 12.3008 27.1998 11.9754C27.6388 11.65 27.8582 11.1767 27.8582 10.6146C27.8582 10.0526 27.6388 9.63844 27.1998 9.31304C26.7609 8.98765 26.1338 8.83974 25.3187 8.83974C25.0365 8.83974 24.5035 8.86932 23.751 8.92848V3.78129H29.1124V5.14204H25.256V7.59731C25.5695 7.56773 25.8517 7.56773 26.1338 7.56773C27.2312 7.56773 28.0777 7.83396 28.7048 8.36643C29.3005 8.8989 29.614 9.63844 29.614 10.5555C29.614 11.5317 29.2691 12.3008 28.5794 12.8924C27.8896 13.484 26.949 13.7799 25.7263 13.7799C24.723 13.7799 23.9705 13.632 23.4689 13.3657H23.4375ZM43.4406 3.78129L40.2113 10.585C39.6156 11.8275 39.0199 12.6558 38.4869 13.0995C37.9225 13.5432 37.3268 13.7799 36.6684 13.7799C36.1354 13.7799 35.6965 13.7207 35.3516 13.5728V12.005C35.7592 12.2416 36.1667 12.3599 36.5743 12.3599C36.9192 12.3599 37.2327 12.2416 37.5149 12.005C37.7971 11.7683 38.1106 11.3246 38.4555 10.7034L34.9753 3.81087H36.9506L39.0826 8.45518C39.1139 8.54392 39.208 8.78057 39.3334 9.16513C39.3334 9.10597 39.4274 8.86932 39.6156 8.45518L41.6535 3.81087H43.472L43.4406 3.78129ZM50.4323 5.23079H46.3878V13.632H44.6634V3.81087H50.4323V5.23079ZM59.117 13.632V3.81087H53.4422C53.1286 6.14782 52.8151 8.01145 52.5643 9.37221C52.2821 10.733 52.0313 11.5908 51.7805 11.9162C51.5296 12.2416 51.2475 12.3895 50.9653 12.3895C50.6831 12.3895 50.4323 12.3304 50.1815 12.212V13.6024C50.495 13.7207 50.8712 13.7503 51.2788 13.7503C51.7805 13.7503 52.2194 13.632 52.5643 13.3953C52.9092 13.1586 53.1913 12.8332 53.4108 12.3599C53.6303 11.8866 53.8184 11.1767 54.0379 10.2005C54.226 9.2243 54.5082 7.53815 54.8844 5.17162H57.424V13.5728H59.1484L59.117 13.632ZM66.0146 13.7503C64.5097 13.7503 63.3183 13.3066 62.4091 12.3599C61.4998 11.4429 61.0609 10.2597 61.0609 8.78057C61.0609 7.21275 61.5312 5.94074 62.4404 4.99413C63.3497 4.04752 64.6038 3.57422 66.1714 3.57422C67.645 3.57422 68.805 4.01794 69.7143 4.93497C70.5922 5.852 71.0625 7.03526 71.0625 8.51434C71.0625 10.1117 70.5922 11.3838 69.6829 12.3008C68.7737 13.2178 67.5509 13.7503 66.0146 13.7503ZM66.1087 4.99413C65.1681 4.99413 64.3843 5.31953 63.7886 5.99991C63.1929 6.68028 62.8794 7.56773 62.8794 8.66225C62.8794 9.75677 63.1615 10.6442 63.7572 11.295C64.3216 11.9754 65.1054 12.3008 66.046 12.3008C67.0493 12.3008 67.8331 11.9754 68.3975 11.3542C68.9618 10.733 69.2753 9.84551 69.2753 8.69183C69.2753 7.50857 68.9932 6.62112 68.4288 5.97033C67.8645 5.31953 67.112 5.02372 66.1087 5.02372V4.99413ZM72.975 13.5728V3.75171H76.267C77.2703 3.75171 78.0541 3.95878 78.6498 4.37292C79.2455 4.78706 79.5277 5.31953 79.5277 5.99991C79.5277 6.56196 79.3709 7.03526 79.0261 7.4494C78.6812 7.86355 78.2422 8.15936 77.6465 8.33685V8.36643C78.3677 8.45518 78.932 8.69183 79.371 9.10597C79.8099 9.52011 79.998 10.0822 79.998 10.7625C79.998 11.5908 79.6531 12.2712 78.9634 12.8037C78.2736 13.3361 77.3644 13.5728 76.2984 13.5728H72.975ZM74.6994 5.0533V7.83396H75.8281C76.4238 7.83396 76.8941 7.68606 77.239 7.41982C77.5838 7.15359 77.7406 6.76903 77.7406 6.29572C77.7406 5.46744 77.1449 5.02372 75.9535 5.02372H74.6994V5.0533ZM74.6994 9.13555V12.2416H76.173C76.8 12.2416 77.3017 12.0937 77.6779 11.8275C78.0228 11.5612 78.2109 11.1471 78.2109 10.6738C78.2109 9.66802 77.4584 9.13555 75.9848 9.13555H74.7307H74.6994Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-alert",
  "use": "icon-alert-usage",
  "viewBox": "0 0 15 15",
  "content": "<symbol viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-alert\">\r\n<circle cx=\"7.5\" cy=\"7.5\" r=\"7.5\" fill=\"#E45945\" />\r\n<path d=\"M8.18892 3.72656L8.07173 8.86151H6.92827L6.81463 3.72656H8.18892ZM7.5 11.0774C7.28456 11.0774 7.09991 11.0017 6.94602 10.8501C6.79451 10.6986 6.71875 10.514 6.71875 10.2962C6.71875 10.0831 6.79451 9.9008 6.94602 9.74929C7.09991 9.59777 7.28456 9.52202 7.5 9.52202C7.7107 9.52202 7.89299 9.59777 8.04688 9.74929C8.20312 9.9008 8.28125 10.0831 8.28125 10.2962C8.28125 10.4406 8.24455 10.572 8.17116 10.6903C8.10014 10.8087 8.00545 10.9034 7.88707 10.9744C7.77107 11.0431 7.64205 11.0774 7.5 11.0774Z\" fill=\"white\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-book",
  "use": "icon-book-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-book\">\r\n<path d=\"M3.5 22.1665C5.0962 21.2449 6.90686 20.7598 8.75 20.7598C10.5931 20.7598 12.4038 21.2449 14 22.1665C15.5962 21.2449 17.4069 20.7598 19.25 20.7598C21.0931 20.7598 22.9038 21.2449 24.5 22.1665\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M3.5 7.00048C5.0962 6.07892 6.90686 5.59375 8.75 5.59375C10.5931 5.59375 12.4038 6.07892 14 7.00048C15.5962 6.07892 17.4069 5.59375 19.25 5.59375C21.0931 5.59375 22.9038 6.07892 24.5 7.00048\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M3.5 7V22.1667\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14 7V22.1667\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M24.5 7V22.1667\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-building",
  "use": "icon-building-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-building\">\r\n<path d=\"M10.5 11.6667V4.66667C10.5 4.35725 10.6229 4.0605 10.8417 3.84171C11.0605 3.62292 11.3572 3.5 11.6667 3.5H23.3333C23.6428 3.5 23.9395 3.62292 24.1583 3.84171C24.3771 4.0605 24.5 4.35725 24.5 4.66667V24.5H15.1667M9.33333 10.5L15.1667 16.3333V24.5H9.33333V19.8333V10.5ZM9.33333 24.5H3.5V16.3333L9.33333 10.5V24.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M15.168 8.16797V8.17964\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 8.16797V8.17964\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 12.832V12.8437\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 17.5V17.5117\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-button-card",
  "use": "icon-button-card-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-button-card\">\r\n<path d=\"M6.81972 15.503C6.81972 16.1962 6.25889 16.758 5.56708 16.758C4.87528 16.758 4.31445 16.1962 4.31445 15.503C4.31445 14.8099 4.87528 14.248 5.56708 14.248C6.25889 14.248 6.81972 14.8099 6.81972 15.503Z\" stroke=\"none\" />\r\n<path d=\"M14.3353 15.503C14.3353 16.1962 13.7745 16.758 13.0827 16.758C12.3909 16.758 11.8301 16.1962 11.8301 15.503C11.8301 14.8099 12.3909 14.248 13.0827 14.248C13.7745 14.248 14.3353 14.8099 14.3353 15.503Z\" stroke=\"none\" />\r\n<path d=\"M4 3.29883L6.50526 11.7988L13.3826 10.4654C14.8464 10.1816 15.9 8.93575 15.9 7.48869V5.12025H4.53684\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-calculator",
  "use": "icon-calculator-usage",
  "viewBox": "0 0 34 34",
  "content": "<symbol viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-calculator\">\n<path d=\"M25.25 3H8.75H6V6V27V30H8.75H25.25H28V27V6V3H25.25Z\" stroke-width=\"2.4\" />\n<path d=\"M21.5 9H12.5H11V10.6667V12.3333V14H12.5H21.5H23V12.3333V10.6667V9H21.5Z\" stroke-width=\"2.4\" />\n<path d=\"M11.333 19.8335V19.847\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M17 19.8335V19.847\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M22.667 19.8335V19.847\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M11.333 24.0835V24.097\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M17 24.0835V24.097\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M22.667 24.0835V24.097\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-cancel",
  "use": "icon-cancel-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-cancel\">\n<path d=\"M7 7L21.0007 21.0007\" stroke-width=\"2\" stroke-linecap=\"round\" />\n<path d=\"M7 21L21.0007 6.99934\" stroke-width=\"2\" stroke-linecap=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-canceled",
  "use": "icon-canceled-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-canceled\">\r\n<path d=\"M5.83333 4.66797H10.5L14 8.16797H22.1667C22.7855 8.16797 23.379 8.4138 23.8166 8.85139C24.2542 9.28897 24.5 9.88246 24.5 10.5013V19.8346C24.5 20.4535 24.2542 21.047 23.8166 21.4845C23.379 21.9221 22.7855 22.168 22.1667 22.168H5.83333C5.21449 22.168 4.621 21.9221 4.18342 21.4845C3.74583 21.047 3.5 20.4535 3.5 19.8346V7.0013C3.5 6.38246 3.74583 5.78897 4.18342 5.35139C4.621 4.9138 5.21449 4.66797 5.83333 4.66797\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12 13L16 17\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" />\r\n<path d=\"M16 13L12 17\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-cart",
  "use": "icon-cart-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-cart\">\n<path d=\"M4.8705 14.255C4.8705 14.9481 4.30968 15.51 3.61787 15.51C2.92606 15.51 2.36523 14.9481 2.36523 14.255C2.36523 13.5619 2.92606 13 3.61787 13C4.30968 13 4.8705 13.5619 4.8705 14.255Z\" fill=\"#FAFAFA\" />\n<path d=\"M12.3861 14.255C12.3861 14.9481 11.8253 15.51 11.1335 15.51C10.4417 15.51 9.88086 14.9481 9.88086 14.255C9.88086 13.5619 10.4417 13 11.1335 13C11.8253 13 12.3861 13.5619 12.3861 14.255Z\" fill=\"#FAFAFA\" />\n<path d=\"M2.05078 2.05078L4.55604 10.5507L11.4334 9.21739C12.8971 8.93359 13.9508 7.6877 13.9508 6.24064V3.8722H2.58762\" stroke=\"#FAFAFA\" stroke-width=\"2.4\" stroke-linecap=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-clear",
  "use": "icon-clear-usage",
  "viewBox": "0 0 34 34",
  "content": "<symbol viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-clear\">\r\n<path d=\"M5.66797 9.91602H28.3346\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14.168 15.584V24.084\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 15.582V24.082\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.08203 9.91797L8.4987 26.918C8.4987 27.6694 8.79721 28.3901 9.32856 28.9214C9.85992 29.4528 10.5806 29.7513 11.332 29.7513H22.6654C23.4168 29.7513 24.1375 29.4528 24.6688 28.9214C25.2002 28.3901 25.4987 27.6694 25.4987 26.918L26.9154 9.91797\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12.75 9.91667V5.66667C12.75 5.29094 12.8993 4.93061 13.1649 4.66493C13.4306 4.39926 13.7909 4.25 14.1667 4.25H19.8333C20.2091 4.25 20.5694 4.39926 20.8351 4.66493C21.1007 4.93061 21.25 5.29094 21.25 5.66667V9.91667\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-clip",
  "use": "icon-clip-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-clip\">\r\n<path d=\"M11.6649 15.8108L15.6649 8.88255C16.7695 6.96938 16.114 4.52301 14.2008 3.41845V3.41845C12.2877 2.31388 9.84129 2.96938 8.73672 4.88255L4.53672 12.1572C3.76352 13.4964 4.22237 15.2088 5.56159 15.982V15.982C6.90081 16.7552 8.61326 16.2964 9.38646 14.9572L13.1865 8.37537C13.6283 7.6101 13.3661 6.63155 12.6008 6.18973V6.18973C11.8356 5.7479 10.857 6.0101 10.4152 6.77537L6.81518 13.0107\" stroke-width=\"1.5\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-closer",
  "use": "icon-closer-usage",
  "viewBox": "0 0 12 12",
  "content": "<symbol viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-closer\">\r\n<path d=\"M1 1L11.0005 11.0005\" stroke-linecap=\"round\" />\r\n<path d=\"M1 11L11.0005 0.99953\" stroke-linecap=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-compare",
  "use": "icon-compare-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-compare\">\n<path d=\"M2.05078 0.850781C1.38804 0.850781 0.850781 1.38804 0.850781 2.05078C0.850781 2.71352 1.38804 3.25078 2.05078 3.25078V0.850781ZM13.9508 3.25078C14.6135 3.25078 15.1508 2.71352 15.1508 2.05078C15.1508 1.38804 14.6135 0.850781 13.9508 0.850781V3.25078ZM2.05078 3.25078H13.9508V0.850781H2.05078V3.25078Z\" />\n<path d=\"M2.05078 5.95039C1.38804 5.95039 0.850781 6.48765 0.850781 7.15039C0.850781 7.81313 1.38804 8.35039 2.05078 8.35039V5.95039ZM13.9508 8.35039C14.6135 8.35039 15.1508 7.81313 15.1508 7.15039C15.1508 6.48765 14.6135 5.95039 13.9508 5.95039V8.35039ZM2.05078 8.35039H13.9508V5.95039H2.05078V8.35039Z\" />\n<path d=\"M2.05078 11.05C1.38804 11.05 0.850781 11.5873 0.850781 12.25C0.850781 12.9127 1.38804 13.45 2.05078 13.45V11.05ZM7.15078 13.45C7.81352 13.45 8.35078 12.9127 8.35078 12.25C8.35078 11.5873 7.81352 11.05 7.15078 11.05V13.45ZM2.05078 13.45H7.15078V11.05H2.05078V13.45Z\" />\n<path d=\"M10.5508 11.05C9.88804 11.05 9.35078 11.5873 9.35078 12.25C9.35078 12.9127 9.88804 13.45 10.5508 13.45V11.05ZM13.9508 13.45C14.6135 13.45 15.1508 12.9127 15.1508 12.25C15.1508 11.5873 14.6135 11.05 13.9508 11.05V13.45ZM10.5508 13.45H13.9508V11.05H10.5508V13.45Z\" />\n<path d=\"M13.45 10.5508C13.45 9.88804 12.9127 9.35078 12.25 9.35078C11.5873 9.35078 11.05 9.88804 11.05 10.5508L13.45 10.5508ZM11.05 13.9508C11.05 14.6135 11.5873 15.1508 12.25 15.1508C12.9127 15.1508 13.45 14.6135 13.45 13.9508L11.05 13.9508ZM11.05 10.5508L11.05 13.9508L13.45 13.9508L13.45 10.5508L11.05 10.5508Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-completed",
  "use": "icon-completed-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-completed\">\r\n<path d=\"M5.83333 4.66797H10.5L14 8.16797H22.1667C22.7855 8.16797 23.379 8.4138 23.8166 8.85139C24.2542 9.28897 24.5 9.88246 24.5 10.5013V19.8346C24.5 20.4535 24.2542 21.047 23.8166 21.4845C23.379 21.9221 22.7855 22.168 22.1667 22.168H5.83333C5.21449 22.168 4.621 21.9221 4.18342 21.4845C3.74583 21.047 3.5 20.4535 3.5 19.8346V7.0013C3.5 6.38246 3.74583 5.78897 4.18342 5.35139C4.621 4.9138 5.21449 4.66797 5.83333 4.66797\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M11 14.5L13 17L17 12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-contacts-mail",
  "use": "icon-contacts-mail-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-contacts-mail\">\n<path d=\"M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M3 7L12 13L21 7\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-contacts-phone",
  "use": "icon-contacts-phone-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-contacts-phone\">\n<path d=\"M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-contacts-telegram",
  "use": "icon-contacts-telegram-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-contacts-telegram\">\n<path d=\"M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-contacts-whatsup",
  "use": "icon-contacts-whatsup-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-contacts-whatsup\">\n<path d=\"M3 20.9988L4.65 17.1988C3.38766 15.4068 2.82267 13.2158 3.06104 11.0369C3.29942 8.85793 4.32479 6.84089 5.94471 5.36427C7.56463 3.88765 9.66775 3.05296 11.8594 3.01685C14.051 2.98073 16.1805 3.74568 17.8482 5.16812C19.5159 6.59057 20.6071 8.57273 20.9172 10.7426C21.2272 12.9125 20.7347 15.121 19.5321 16.9535C18.3295 18.7861 16.4994 20.1168 14.3854 20.6959C12.2713 21.275 10.0186 21.0626 8.05 20.0988L3 20.9988\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M9 10C9 10.1326 9.05268 10.2598 9.14645 10.3536C9.24021 10.4473 9.36739 10.5 9.5 10.5C9.63261 10.5 9.75979 10.4473 9.85355 10.3536C9.94732 10.2598 10 10.1326 10 10V9C10 8.86739 9.94732 8.74021 9.85355 8.64645C9.75979 8.55268 9.63261 8.5 9.5 8.5C9.36739 8.5 9.24021 8.55268 9.14645 8.64645C9.05268 8.74021 9 8.86739 9 9V10ZM9 10C9 11.3261 9.52678 12.5979 10.4645 13.5355C11.4021 14.4732 12.6739 15 14 15H15C15.1326 15 15.2598 14.9473 15.3536 14.8536C15.4473 14.7598 15.5 14.6326 15.5 14.5C15.5 14.3674 15.4473 14.2402 15.3536 14.1464C15.2598 14.0527 15.1326 14 15 14H14C13.8674 14 13.7402 14.0527 13.6464 14.1464C13.5527 14.2402 13.5 14.3674 13.5 14.5C13.5 14.6326 13.5527 14.7598 13.6464 14.8536C13.7402 14.9473 13.8674 15 14 15\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-cross",
  "use": "icon-cross-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-cross\">\n<path d=\"M5 5L15.0005 15.0005\" stroke-width=\"2\" stroke-linecap=\"round\" />\n<path d=\"M5 15L15.0005 4.99953\" stroke-width=\"2\" stroke-linecap=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-delete",
  "use": "icon-delete-usage",
  "viewBox": "0 0 34 34",
  "content": "<symbol viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-delete\">\r\n<path d=\"M5.66797 9.91602H28.3346\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14.168 15.584V24.084\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19.832 15.582V24.082\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.08203 9.91797L8.4987 26.918C8.4987 27.6694 8.79721 28.3901 9.32856 28.9214C9.85992 29.4528 10.5806 29.7513 11.332 29.7513H22.6654C23.4168 29.7513 24.1375 29.4528 24.6688 28.9214C25.2002 28.3901 25.4987 27.6694 25.4987 26.918L26.9154 9.91797\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12.75 9.91667V5.66667C12.75 5.29094 12.8993 4.93061 13.1649 4.66493C13.4306 4.39926 13.7909 4.25 14.1667 4.25H19.8333C20.2091 4.25 20.5694 4.39926 20.8351 4.66493C21.1007 4.93061 21.25 5.29094 21.25 5.66667V9.91667\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-document-arrow",
  "use": "icon-document-arrow-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-document-arrow\">\r\n<path d=\"M19.668 18.332V28.332\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14.668 23.332L19.668 28.332L24.668 23.332\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-document",
  "use": "icon-document-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-document\">\r\n<path d=\"M23 5V11.6667C23 12.1087 23.1756 12.5326 23.4882 12.8452C23.8007 13.1577 24.2246 13.3333 24.6667 13.3333H31.3333\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M28 35H11.3333C10.4493 35 9.60143 34.6488 8.97631 34.0237C8.35119 33.3986 8 32.5507 8 31.6667V8.33333C8 7.44928 8.35119 6.60143 8.97631 5.97631C9.60143 5.35119 10.4493 5 11.3333 5H23L31.3333 13.3333V31.6667C31.3333 32.5507 30.9821 33.3986 30.357 34.0237C29.7319 34.6488 28.8841 35 28 35Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-download",
  "use": "icon-download-usage",
  "viewBox": "0 0 25 25",
  "content": "<symbol viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-download\">\r\n<path d=\"M4.16797 17.709V19.7923C4.16797 20.3449 4.38746 20.8748 4.77816 21.2655C5.16886 21.6562 5.69877 21.8757 6.2513 21.8757H18.7513C19.3038 21.8757 19.8337 21.6562 20.2244 21.2655C20.6151 20.8748 20.8346 20.3449 20.8346 19.7923V17.709\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.29297 11.459L12.5013 16.6673L17.7096 11.459\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12.5 4.16797V16.668\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-dropdown-cart",
  "use": "icon-dropdown-cart-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-dropdown-cart\">\r\n<path d=\"M10 22C10 22.8284 9.32843 23.5 8.5 23.5C7.67157 23.5 7 22.8284 7 22C7 21.1716 7.67157 20.5 8.5 20.5C9.32843 20.5 10 21.1716 10 22Z\" stroke=\"none\" />\r\n<path d=\"M20 22C20 22.8284 19.3284 23.5 18.5 23.5C17.6716 23.5 17 22.8284 17 22C17 21.1716 17.6716 20.5 18.5 20.5C19.3284 20.5 20 21.1716 20 22Z\" stroke=\"none\" />\r\n<path d=\"M5.25 4.5L8.93421 17L19.0479 15.0392C21.2005 14.6218 22.75 12.7896 22.75 10.6616V7.17857H6.03947\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-dropdown-compare",
  "use": "icon-dropdown-compare-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-dropdown-compare\">\r\n<path d=\"M7.75 24H20.25\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.125 7.75L14 6.5L20.875 7.75\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M14 4V24\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M10.25 14.4167L7.125 7.75L4 14.4167C4 15.3007 4.32924 16.1486 4.91529 16.7737C5.50134 17.3988 6.2962 17.75 7.125 17.75C7.9538 17.75 8.74866 17.3988 9.33471 16.7737C9.92076 16.1486 10.25 15.3007 10.25 14.4167Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M24 14.4167L20.875 7.75L17.75 14.4167C17.75 15.3007 18.0792 16.1486 18.6653 16.7737C19.2513 17.3988 20.0462 17.75 20.875 17.75C21.7038 17.75 22.4987 17.3988 23.0847 16.7737C23.6708 16.1486 24 15.3007 24 14.4167Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-dropdown-favorites",
  "use": "icon-dropdown-favorites-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-dropdown-favorites\">\r\n<path d=\"M12.7208 5.42192C13.1234 4.19269 14.8766 4.19269 15.2792 5.42192L16.7178 9.81388C16.8979 10.3636 17.4143 10.7358 17.997 10.7358H22.6524C23.9554 10.7358 24.4971 12.3897 23.443 13.1494L19.6767 15.8638C19.2053 16.2035 19.008 16.8058 19.1881 17.3555L20.6267 21.7474C21.0293 22.9767 19.611 23.9988 18.5569 23.2391L14.7906 20.5248C14.3192 20.185 13.6808 20.185 13.2094 20.5248L9.44311 23.2391C8.389 23.9988 6.97069 22.9767 7.37333 21.7474L8.81193 17.3555C8.99199 16.8058 8.79473 16.2035 8.32332 15.8638L4.55702 13.1494C3.5029 12.3897 4.04465 10.7358 5.3476 10.7358H10.003C10.5857 10.7358 11.1021 10.3636 11.2822 9.81388L12.7208 5.42192Z\" stroke-width=\"2\" fill=\"none\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-eye",
  "use": "icon-eye-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-eye\">\r\n<path d=\"M14.0013 16.3346C15.29 16.3346 16.3346 15.29 16.3346 14.0013C16.3346 12.7126 15.29 11.668 14.0013 11.668C12.7126 11.668 11.668 12.7126 11.668 14.0013C11.668 15.29 12.7126 16.3346 14.0013 16.3346Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M25.6654 13.9987C22.5539 19.4435 18.6654 22.1654 13.9987 22.1654C9.33203 22.1654 5.44353 19.4435 2.33203 13.9987C5.44353 8.55386 9.33203 5.83203 13.9987 5.83203C18.6654 5.83203 22.5539 8.55386 25.6654 13.9987Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-fb--black",
  "use": "icon-fb--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-fb--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.1226 28.6673V19.9996H23.4017L23.7037 17.0127H21.1226L21.1265 15.5177C21.1265 14.7387 21.197 14.3213 22.2628 14.3213H23.6876V11.334H21.4082C18.6703 11.334 17.7066 12.783 17.7066 15.2197V17.013H16V20H17.7066V28.6673H21.1226Z\" fill=\"white\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-fb--white",
  "use": "icon-fb--white-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-fb--white\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.1226 28.6673V19.9996H23.4017L23.7037 17.0127H21.1226L21.1265 15.5177C21.1265 14.7387 21.197 14.3213 22.2628 14.3213H23.6876V11.334H21.4082C18.6703 11.334 17.7066 12.783 17.7066 15.2197V17.013H16V20H17.7066V28.6673H21.1226Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-fb",
  "use": "icon-fb-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-fb\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.1226 28.6673V19.9996H23.4017L23.7037 17.0127H21.1226L21.1265 15.5177C21.1265 14.7387 21.197 14.3213 22.2628 14.3213H23.6876V11.334H21.4082C18.6703 11.334 17.7066 12.783 17.7066 15.2197V17.013H16V20H17.7066V28.6673H21.1226Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-filter",
  "use": "icon-filter-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-filter\">\r\n<path d=\"M14 8C15.1046 8 16 7.10457 16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6C12 7.10457 12.8954 8 14 8Z\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M4 6H12\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M16 6H20\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M4 12H6\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M10 12H20\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M4 18H15\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M19 18H20\" stroke=\"#212F4E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-geopin",
  "use": "icon-geopin-usage",
  "viewBox": "0 0 25 35",
  "content": "<symbol viewBox=\"0 0 25 35\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-geopin\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.1254 34.4403C15.6557 32.1067 25 22.7919 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 22.7919 9.3443 32.1067 11.8746 34.4403C12.2342 34.7719 12.7658 34.7719 13.1254 34.4403ZM12.498 20C16.6402 20 19.998 16.6421 19.998 12.5C19.998 8.35786 16.6402 5 12.498 5C8.35591 5 4.99805 8.35786 4.99805 12.5C4.99805 16.6421 8.35591 20 12.498 20Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-head",
  "use": "icon-head-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-head\">\r\n<path d=\"M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M10.5 11.668H10.5117\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M17.5 11.668H17.5117\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M11.082 17.5C11.4622 17.888 11.916 18.1963 12.4168 18.4067C12.9177 18.6172 13.4555 18.7256 13.9987 18.7256C14.5419 18.7256 15.0797 18.6172 15.5805 18.4067C16.0814 18.1963 16.5352 17.888 16.9154 17.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-header-cart",
  "use": "icon-header-cart-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-header-cart\">\r\n<path d=\"M16 28.5C16 29.3284 15.3284 30 14.5 30C13.6716 30 13 29.3284 13 28.5C13 27.6716 13.6716 27 14.5 27C15.3284 27 16 27.6716 16 28.5Z\" stroke=\"none\" />\r\n<path d=\"M27 28.5C27 29.3284 26.3284 30 25.5 30C24.6716 30 24 29.3284 24 28.5C24 27.6716 24.6716 27 25.5 27C26.3284 27 27 27.6716 27 28.5Z\" stroke=\"none\" />\r\n<path d=\"M11 10L14.7895 23L25.1921 20.9607C27.4062 20.5267 29 18.6212 29 16.4081V12.7857H11.812\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-header-search",
  "use": "icon-header-search-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-header-search\">\n<path d=\"M23.7974 22.8092L30 29M23.7974 22.8092C25.1581 21.4515 26 19.5741 26 17.5C26 13.3579 22.6421 10 18.5 10C14.3579 10 11 13.3579 11 17.5C11 21.6421 14.3579 25 18.5 25C20.5681 25 22.4407 24.163 23.7974 22.8092Z\" stroke-width=\"2\" stroke-linecap=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-header-user",
  "use": "icon-header-user-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-header-user\">\n<path d=\"M20 21C22.7614 21 25 18.7614 25 16C25 13.2386 22.7614 11 20 11C17.2386 11 15 13.2386 15 16C15 18.7614 17.2386 21 20 21Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M10.5 29.9895C10.9031 28.5468 11.728 27.2823 12.8522 26.3835C13.9764 25.4847 15.3401 24.9996 16.741 25H23.2557C24.6584 24.9995 26.0238 25.4858 27.1488 26.3867C28.2739 27.2875 29.0985 28.5548 29.5 30\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-insta--black",
  "use": "icon-insta--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-insta--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.0034 11.334C17.6497 11.334 17.3543 11.3443 16.4298 11.3863C15.5072 11.4286 14.8774 11.5747 14.3263 11.789C13.7563 12.0103 13.2728 12.3065 12.791 12.7884C12.309 13.2701 12.0128 13.7536 11.7908 14.3234C11.5759 14.8747 11.4296 15.5046 11.3881 16.4269C11.3468 17.3514 11.3359 17.6469 11.3359 20.0007C11.3359 22.3544 11.3464 22.6489 11.3883 23.5733C11.4307 24.4959 11.5768 25.1257 11.7909 25.6768C12.0125 26.2468 12.3086 26.7303 12.7905 27.212C13.2721 27.6941 13.7556 27.991 14.3252 28.2123C14.8767 28.4266 15.5066 28.5727 16.4291 28.615C17.3536 28.657 17.6488 28.6673 20.0023 28.6673C22.3563 28.6673 22.6507 28.657 23.5752 28.615C24.4979 28.5727 25.1284 28.4266 25.6798 28.2123C26.2496 27.991 26.7324 27.6941 27.214 27.212C27.6961 26.7303 27.9922 26.2468 28.2143 25.677C28.4273 25.1257 28.5736 24.4958 28.6169 23.5735C28.6584 22.649 28.6693 22.3544 28.6693 20.0007C28.6693 17.6469 28.6584 17.3515 28.6169 16.4271C28.5736 15.5045 28.4273 14.8747 28.2143 14.3236C27.9922 13.7536 27.6961 13.2701 27.214 12.7884C26.7319 12.3063 26.2498 12.0102 25.6792 11.789C25.1267 11.5747 24.4966 11.4286 23.5739 11.3863C22.6495 11.3443 22.3552 11.334 20.0007 11.334H20.0034ZM19.2259 12.8967C19.4566 12.8963 19.7141 12.8967 20.0034 12.8967C22.3174 12.8967 22.5917 12.905 23.5055 12.9465C24.3505 12.9852 24.8091 13.1264 25.1146 13.245C25.519 13.4021 25.8074 13.5899 26.1105 13.8932C26.4139 14.1965 26.6017 14.4854 26.7591 14.8899C26.8777 15.195 27.0191 15.6536 27.0576 16.4986C27.0991 17.4122 27.1081 17.6867 27.1081 19.9996C27.1081 22.3125 27.0991 22.5869 27.0576 23.5005C27.0189 24.3455 26.8777 24.8042 26.7591 25.1093C26.602 25.5137 26.4139 25.8017 26.1105 26.1049C25.8072 26.4082 25.5192 26.596 25.1146 26.7531C24.8095 26.8722 24.3505 27.0131 23.5055 27.0517C22.5918 27.0932 22.3174 27.1023 20.0034 27.1023C17.6892 27.1023 17.4149 27.0932 16.5013 27.0517C15.6563 27.0127 15.1977 26.8715 14.892 26.7529C14.4875 26.5958 14.1986 26.408 13.8953 26.1047C13.592 25.8014 13.4042 25.5132 13.2467 25.1086C13.1281 24.8034 12.9867 24.3448 12.9483 23.4998C12.9067 22.5862 12.8984 22.3118 12.8984 19.9974C12.8984 17.683 12.9067 17.41 12.9483 16.4964C12.9869 15.6514 13.1281 15.1928 13.2467 14.8873C13.4038 14.4829 13.592 14.194 13.8953 13.8907C14.1986 13.5873 14.4875 13.3995 14.892 13.2421C15.1975 13.1229 15.6563 12.9821 16.5013 12.9433C17.3008 12.9072 17.6106 12.8963 19.2259 12.8945V12.8967ZM24.6299 14.3324C24.0557 14.3324 23.5898 14.7977 23.5898 15.372C23.5898 15.9462 24.0557 16.412 24.6299 16.412C25.204 16.412 25.6699 15.9462 25.6699 15.372C25.6699 14.7979 25.204 14.332 24.6299 14.332V14.3324ZM20.0015 15.5508C17.5436 15.5508 15.5508 17.5436 15.5508 20.0015C15.5508 22.4594 17.5436 24.4513 20.0015 24.4513C22.4594 24.4513 24.4515 22.4594 24.4515 20.0015C24.4515 17.5436 22.4593 15.5508 20.0013 15.5508H20.0015ZM20.0022 17.1113C21.5976 17.1113 22.8911 18.4046 22.8911 20.0002C22.8911 21.5956 21.5976 22.8891 20.0022 22.8891C18.4066 22.8891 17.1133 21.5956 17.1133 20.0002C17.1133 18.4046 18.4066 17.1113 20.0022 17.1113V17.1113Z\" fill=\"white\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-insta--white",
  "use": "icon-insta--white-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-insta--white\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.6014 9.39648C16.7392 9.3447 17.1028 9.33203 19.9997 9.33203H19.9964C22.8942 9.33203 23.2564 9.3447 24.3942 9.39648C25.5298 9.44848 26.3053 9.62826 26.9853 9.89204C27.6876 10.1643 28.2809 10.5287 28.8742 11.1221C29.4676 11.7149 29.832 12.3101 30.1054 13.0116C30.3676 13.6899 30.5476 14.465 30.6009 15.6005C30.652 16.7383 30.6654 17.1019 30.6654 19.9988C30.6654 22.8957 30.652 23.2584 30.6009 24.3962C30.5476 25.5313 30.3676 26.3067 30.1054 26.9851C29.832 27.6864 29.4676 28.2816 28.8742 28.8745C28.2816 29.4678 27.6873 29.8331 26.986 30.1056C26.3073 30.3694 25.5313 30.5491 24.3957 30.6011C23.258 30.6529 22.8955 30.6656 19.9984 30.6656C17.1017 30.6656 16.7383 30.6529 15.6005 30.6011C14.4652 30.5491 13.6899 30.3694 13.0112 30.1056C12.3101 29.8331 11.7149 29.4678 11.1223 28.8745C10.5292 28.2816 10.1647 27.6864 9.89204 26.9849C9.62848 26.3067 9.4487 25.5315 9.39648 24.396C9.34492 23.2582 9.33203 22.8957 9.33203 19.9988C9.33203 17.1019 9.34536 16.7381 9.39625 15.6003C9.44737 14.4652 9.62737 13.6899 9.89181 13.0114C10.1652 12.3101 10.5296 11.7149 11.1229 11.1221C11.7158 10.5289 12.311 10.1645 13.0125 9.89204C13.6907 9.62826 14.4659 9.44848 15.6014 9.39648ZM19.6468 11.2526C19.4311 11.2525 19.2313 11.2524 19.0454 11.2527V11.25C17.0574 11.2522 16.6761 11.2656 15.6921 11.31C14.6521 11.3578 14.0874 11.5311 13.7114 11.6778C13.2136 11.8716 12.8581 12.1027 12.4847 12.476C12.1114 12.8493 11.8798 13.2049 11.6865 13.7027C11.5405 14.0787 11.3667 14.6431 11.3191 15.6832C11.268 16.8076 11.2578 17.1436 11.2578 19.9921C11.2578 22.8406 11.268 23.1783 11.3191 24.3028C11.3665 25.3428 11.5405 25.9073 11.6865 26.2828C11.8803 26.7808 12.1114 27.1355 12.4847 27.5088C12.8581 27.8822 13.2136 28.1133 13.7114 28.3066C14.0876 28.4526 14.6521 28.6264 15.6921 28.6744C16.8165 28.7255 17.1541 28.7366 20.0023 28.7366C22.8504 28.7366 23.1882 28.7255 24.3126 28.6744C25.3526 28.6268 25.9175 28.4535 26.2931 28.3068C26.7911 28.1135 27.1455 27.8824 27.5189 27.5091C27.8922 27.1359 28.1238 26.7815 28.3171 26.2837C28.4631 25.9082 28.6369 25.3437 28.6844 24.3037C28.7355 23.1792 28.7467 22.8415 28.7467 19.9948C28.7467 17.1481 28.7355 16.8103 28.6844 15.6858C28.6371 14.6458 28.4631 14.0814 28.3171 13.7058C28.1233 13.208 27.8922 12.8525 27.5189 12.4791C27.1458 12.1058 26.7909 11.8747 26.2931 11.6813C25.9171 11.5353 25.3526 11.3616 24.3126 11.314C23.1879 11.2629 22.8504 11.2527 20.0023 11.2527C19.8793 11.2527 19.7608 11.2526 19.6468 11.2526Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.696 13.0258C24.9894 13.0258 24.416 13.5985 24.416 14.3054C24.416 15.0121 24.9894 15.5854 25.696 15.5854C26.4027 15.5854 26.976 15.0121 26.976 14.3054C26.976 13.5987 26.4027 13.0254 25.696 13.0254V13.0258Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.5234 19.9993C14.5234 16.9742 16.9761 14.5215 20.0013 14.5215H20.0011C23.0262 14.5215 25.4782 16.9742 25.4782 19.9993C25.4782 23.0245 23.0264 25.476 20.0013 25.476C16.9761 25.476 14.5234 23.0245 14.5234 19.9993ZM23.5565 20.0009C23.5565 18.0371 21.9645 16.4453 20.0009 16.4453C18.0371 16.4453 16.4453 18.0371 16.4453 20.0009C16.4453 21.9645 18.0371 23.5565 20.0009 23.5565C21.9645 23.5565 23.5565 21.9645 23.5565 20.0009Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-insta",
  "use": "icon-insta-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-insta\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.6014 9.39648C16.7392 9.3447 17.1028 9.33203 19.9997 9.33203H19.9964C22.8942 9.33203 23.2564 9.3447 24.3942 9.39648C25.5298 9.44848 26.3053 9.62826 26.9853 9.89204C27.6876 10.1643 28.2809 10.5287 28.8742 11.1221C29.4676 11.7149 29.832 12.3101 30.1054 13.0116C30.3676 13.6899 30.5476 14.465 30.6009 15.6005C30.652 16.7383 30.6654 17.1019 30.6654 19.9988C30.6654 22.8957 30.652 23.2584 30.6009 24.3962C30.5476 25.5313 30.3676 26.3067 30.1054 26.9851C29.832 27.6864 29.4676 28.2816 28.8742 28.8745C28.2816 29.4678 27.6873 29.8331 26.986 30.1056C26.3073 30.3694 25.5313 30.5491 24.3957 30.6011C23.258 30.6529 22.8955 30.6656 19.9984 30.6656C17.1017 30.6656 16.7383 30.6529 15.6005 30.6011C14.4652 30.5491 13.6899 30.3694 13.0112 30.1056C12.3101 29.8331 11.7149 29.4678 11.1223 28.8745C10.5292 28.2816 10.1647 27.6864 9.89204 26.9849C9.62848 26.3067 9.4487 25.5315 9.39648 24.396C9.34492 23.2582 9.33203 22.8957 9.33203 19.9988C9.33203 17.1019 9.34536 16.7381 9.39625 15.6003C9.44737 14.4652 9.62737 13.6899 9.89181 13.0114C10.1652 12.3101 10.5296 11.7149 11.1229 11.1221C11.7158 10.5289 12.311 10.1645 13.0125 9.89204C13.6907 9.62826 14.4659 9.44848 15.6014 9.39648ZM19.6468 11.2526C19.4311 11.2525 19.2313 11.2524 19.0454 11.2527V11.25C17.0574 11.2522 16.6761 11.2656 15.6921 11.31C14.6521 11.3578 14.0874 11.5311 13.7114 11.6778C13.2136 11.8716 12.8581 12.1027 12.4847 12.476C12.1114 12.8493 11.8798 13.2049 11.6865 13.7027C11.5405 14.0787 11.3667 14.6431 11.3191 15.6832C11.268 16.8076 11.2578 17.1436 11.2578 19.9921C11.2578 22.8406 11.268 23.1783 11.3191 24.3028C11.3665 25.3428 11.5405 25.9073 11.6865 26.2828C11.8803 26.7808 12.1114 27.1355 12.4847 27.5088C12.8581 27.8822 13.2136 28.1133 13.7114 28.3066C14.0876 28.4526 14.6521 28.6264 15.6921 28.6744C16.8165 28.7255 17.1541 28.7366 20.0023 28.7366C22.8504 28.7366 23.1882 28.7255 24.3126 28.6744C25.3526 28.6268 25.9175 28.4535 26.2931 28.3068C26.7911 28.1135 27.1455 27.8824 27.5189 27.5091C27.8922 27.1359 28.1238 26.7815 28.3171 26.2837C28.4631 25.9082 28.6369 25.3437 28.6844 24.3037C28.7355 23.1792 28.7467 22.8415 28.7467 19.9948C28.7467 17.1481 28.7355 16.8103 28.6844 15.6858C28.6371 14.6458 28.4631 14.0814 28.3171 13.7058C28.1233 13.208 27.8922 12.8525 27.5189 12.4791C27.1458 12.1058 26.7909 11.8747 26.2931 11.6813C25.9171 11.5353 25.3526 11.3616 24.3126 11.314C23.1879 11.2629 22.8504 11.2527 20.0023 11.2527C19.8793 11.2527 19.7608 11.2526 19.6468 11.2526Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.696 13.0258C24.9894 13.0258 24.416 13.5985 24.416 14.3054C24.416 15.0121 24.9894 15.5854 25.696 15.5854C26.4027 15.5854 26.976 15.0121 26.976 14.3054C26.976 13.5987 26.4027 13.0254 25.696 13.0254V13.0258Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.5234 19.9993C14.5234 16.9742 16.9761 14.5215 20.0013 14.5215H20.0011C23.0262 14.5215 25.4782 16.9742 25.4782 19.9993C25.4782 23.0245 23.0264 25.476 20.0013 25.476C16.9761 25.476 14.5234 23.0245 14.5234 19.9993ZM23.5565 20.0009C23.5565 18.0371 21.9645 16.4453 20.0009 16.4453C18.0371 16.4453 16.4453 18.0371 16.4453 20.0009C16.4453 21.9645 18.0371 23.5565 20.0009 23.5565C21.9645 23.5565 23.5565 21.9645 23.5565 20.0009Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-like",
  "use": "icon-like-usage",
  "viewBox": "0 0 16 14",
  "content": "<symbol viewBox=\"0 0 16 14\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-like\">\n<path d=\"M8.00078 12.1004L7.44955 13.1663C7.79529 13.3451 8.20627 13.3451 8.55201 13.1663L8.00078 12.1004ZM8.00078 3.81962L6.93723 4.37536C7.14416 4.77137 7.55397 5.01962 8.00078 5.01962C8.4476 5.01962 8.85741 4.77137 9.06434 4.37536L8.00078 3.81962ZM12.7508 5.11337C12.7508 6.49119 11.6575 7.92501 10.2009 9.15686C9.51265 9.73891 8.8184 10.2126 8.29325 10.5417C8.03192 10.7054 7.81557 10.8315 7.66687 10.9154C7.5926 10.9573 7.53542 10.9885 7.4982 11.0086C7.47959 11.0186 7.466 11.0258 7.45776 11.0302C7.45365 11.0323 7.45088 11.0338 7.44949 11.0345C7.4488 11.0349 7.44846 11.0351 7.44846 11.0351C7.44847 11.035 7.44856 11.035 7.44874 11.0349C7.44883 11.0349 7.44903 11.0348 7.44908 11.0347C7.4493 11.0346 7.44955 11.0345 8.00078 12.1004C8.55201 13.1663 8.5523 13.1661 8.55262 13.166C8.55276 13.1659 8.55309 13.1657 8.55337 13.1656C8.55391 13.1653 8.55454 13.165 8.55527 13.1646C8.55672 13.1638 8.55853 13.1629 8.5607 13.1618C8.56503 13.1595 8.57079 13.1565 8.57794 13.1527C8.59222 13.1452 8.61203 13.1346 8.63701 13.1212C8.68694 13.0943 8.7576 13.0556 8.84602 13.0057C9.02271 12.906 9.2712 12.7611 9.56769 12.5753C10.1582 12.2053 10.9514 11.6653 11.7507 10.9894C13.2691 9.70522 15.1508 7.64553 15.1508 5.11337H12.7508ZM8.00078 12.1004C8.55201 11.0345 8.55226 11.0346 8.55249 11.0347C8.55253 11.0348 8.55274 11.0349 8.55283 11.0349C8.55301 11.035 8.5531 11.0351 8.5531 11.0351C8.55311 11.0351 8.55277 11.0349 8.55207 11.0345C8.55069 11.0338 8.54792 11.0323 8.5438 11.0302C8.53557 11.0258 8.52197 11.0186 8.50337 11.0086C8.46615 10.9885 8.40897 10.9573 8.33469 10.9154C8.186 10.8315 7.96964 10.7054 7.70832 10.5417C7.18317 10.2126 6.48891 9.73891 5.80068 9.15686C4.3441 7.92499 3.25078 6.49117 3.25078 5.11335H0.850781C0.850781 7.64551 2.73246 9.70521 4.25088 10.9894C5.05015 11.6653 5.8434 12.2053 6.43387 12.5753C6.73036 12.7611 6.97885 12.906 7.15554 13.0057C7.24396 13.0556 7.31462 13.0943 7.36455 13.1212C7.38953 13.1346 7.40934 13.1452 7.42362 13.1527C7.43077 13.1565 7.43653 13.1595 7.44087 13.1618C7.44303 13.1629 7.44484 13.1638 7.44629 13.1646C7.44702 13.165 7.44765 13.1653 7.44819 13.1656C7.44847 13.1657 7.44881 13.1659 7.44894 13.166C7.44926 13.1661 7.44955 13.1663 8.00078 12.1004ZM3.25078 5.11335C3.25078 4.36983 3.45902 3.90899 3.69104 3.63213C3.92554 3.35229 4.25339 3.17693 4.64177 3.12008C5.44523 3.00247 6.43285 3.41011 6.93723 4.37536L9.06434 3.26387C8.08122 1.38243 6.09384 0.481949 4.29416 0.745387C3.38098 0.879059 2.50024 1.31652 1.85154 2.09061C1.20036 2.86768 0.850781 3.90189 0.850781 5.11335H3.25078ZM9.06434 4.37536C9.56872 3.41011 10.5563 3.00247 11.3598 3.12009C11.7482 3.17694 12.076 3.3523 12.3105 3.63214C12.5425 3.90901 12.7508 4.36984 12.7508 5.11337H15.1508C15.1508 3.90191 14.8012 2.86769 14.15 2.09063C13.5013 1.31653 12.6206 0.879068 11.7074 0.745394C9.90773 0.481951 7.92035 1.38243 6.93723 3.26387L9.06434 4.37536Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-liked",
  "use": "icon-liked-usage",
  "viewBox": "0 0 34 34",
  "content": "<symbol viewBox=\"0 0 34 34\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-liked\">\n<path d=\"M0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17Z\" fill=\"#EEEFF0\" />\n<path d=\"M22.9508 15.1134C22.9508 19.0234 17.0008 22.1004 17.0008 22.1004C17.0008 22.1004 11.0508 19.0233 11.0508 15.1134C11.0508 11.2034 15.5133 10.9729 17.0008 13.8196C18.4883 10.9729 22.9508 11.2034 22.9508 15.1134Z\" />\n<path d=\"M17.0008 22.1004L16.4495 23.1663C16.7953 23.3451 17.2063 23.3451 17.552 23.1663L17.0008 22.1004ZM17.0008 13.8196L15.9372 14.3754C16.1442 14.7714 16.554 15.0196 17.0008 15.0196C17.4476 15.0196 17.8574 14.7714 18.0643 14.3754L17.0008 13.8196ZM21.7508 15.1134C21.7508 16.4912 20.6575 17.925 19.2009 19.1569C18.5127 19.7389 17.8184 20.2126 17.2932 20.5417C17.0319 20.7054 16.8156 20.8315 16.6669 20.9154C16.5926 20.9573 16.5354 20.9885 16.4982 21.0086C16.4796 21.0186 16.466 21.0258 16.4578 21.0302C16.4536 21.0323 16.4509 21.0338 16.4495 21.0345C16.4488 21.0349 16.4485 21.0351 16.4485 21.0351C16.4485 21.035 16.4486 21.035 16.4487 21.0349C16.4488 21.0349 16.449 21.0348 16.4491 21.0347C16.4493 21.0346 16.4496 21.0345 17.0008 22.1004C17.552 23.1663 17.5523 23.1661 17.5526 23.166C17.5528 23.1659 17.5531 23.1657 17.5534 23.1656C17.5539 23.1653 17.5545 23.165 17.5553 23.1646C17.5567 23.1638 17.5585 23.1629 17.5607 23.1618C17.565 23.1595 17.5708 23.1565 17.5779 23.1527C17.5922 23.1452 17.612 23.1346 17.637 23.1212C17.6869 23.0943 17.7576 23.0556 17.846 23.0057C18.0227 22.906 18.2712 22.7611 18.5677 22.5753C19.1582 22.2053 19.9514 21.6653 20.7507 20.9894C22.2691 19.7052 24.1508 17.6455 24.1508 15.1134H21.7508ZM17.0008 22.1004C17.552 21.0345 17.5523 21.0346 17.5525 21.0347C17.5525 21.0348 17.5527 21.0349 17.5528 21.0349C17.553 21.035 17.5531 21.0351 17.5531 21.0351C17.5531 21.0351 17.5528 21.0349 17.5521 21.0345C17.5507 21.0338 17.5479 21.0323 17.5438 21.0302C17.5356 21.0258 17.522 21.0186 17.5034 21.0086C17.4661 20.9885 17.409 20.9573 17.3347 20.9154C17.186 20.8315 16.9696 20.7054 16.7083 20.5417C16.1832 20.2126 15.4889 19.7389 14.8007 19.1569C13.3441 17.925 12.2508 16.4912 12.2508 15.1134H9.85078C9.85078 17.6455 11.7325 19.7052 13.2509 20.9894C14.0501 21.6653 14.8434 22.2053 15.4339 22.5753C15.7304 22.7611 15.9788 22.906 16.1555 23.0057C16.244 23.0556 16.3146 23.0943 16.3646 23.1212C16.3895 23.1346 16.4093 23.1452 16.4236 23.1527C16.4308 23.1565 16.4365 23.1595 16.4409 23.1618C16.443 23.1629 16.4448 23.1638 16.4463 23.1646C16.447 23.165 16.4477 23.1653 16.4482 23.1656C16.4485 23.1657 16.4488 23.1659 16.4489 23.166C16.4493 23.1661 16.4495 23.1663 17.0008 22.1004ZM12.2508 15.1134C12.2508 14.3698 12.459 13.909 12.691 13.6321C12.9255 13.3523 13.2534 13.1769 13.6418 13.1201C14.4452 13.0025 15.4328 13.4101 15.9372 14.3754L18.0643 13.2639C17.0812 11.3824 15.0938 10.4819 13.2942 10.7454C12.381 10.8791 11.5002 11.3165 10.8515 12.0906C10.2004 12.8677 9.85078 13.9019 9.85078 15.1134H12.2508ZM18.0643 14.3754C18.5687 13.4101 19.5563 13.0025 20.3598 13.1201C20.7482 13.1769 21.076 13.3523 21.3105 13.6321C21.5425 13.909 21.7508 14.3698 21.7508 15.1134H24.1508C24.1508 13.9019 23.8012 12.8677 23.15 12.0906C22.5013 11.3165 21.6206 10.8791 20.7074 10.7454C18.9077 10.482 16.9203 11.3824 15.9372 13.2639L18.0643 14.3754Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-lk-cart",
  "use": "icon-lk-cart-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-lk-cart\">\r\n<path d=\"M3.33398 5.83398H16.6673\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n<path d=\"M8.33398 9.16602V14.166\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n<path d=\"M11.666 9.16602V14.166\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n<path d=\"M4.16602 5.83398L4.99935 15.834C4.99935 16.276 5.17494 16.6999 5.4875 17.0125C5.80007 17.3251 6.22399 17.5007 6.66602 17.5007H13.3327C13.7747 17.5007 14.1986 17.3251 14.5112 17.0125C14.8238 16.6999 14.9994 16.276 14.9994 15.834L15.8327 5.83398\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n<path d=\"M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-location",
  "use": "icon-location-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-location\">\r\n<path d=\"M21 7V7.01167\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M20.9987 15.1655L16.9154 9.33216C16.5223 8.6217 16.3214 7.82097 16.3325 7.00909C16.3436 6.1972 16.5663 5.40227 16.9787 4.70283C17.3911 4.00338 17.9788 3.42364 18.6838 3.02087C19.3888 2.6181 20.1867 2.40625 20.9987 2.40625C21.8107 2.40625 22.6086 2.6181 23.3136 3.02087C24.0186 3.42364 24.6063 4.00338 25.0187 4.70283C25.4311 5.40227 25.6538 6.1972 25.6649 7.00909C25.676 7.82097 25.4751 8.6217 25.082 9.33216L20.9987 15.1655Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M12.25 5.54297L10.5 4.66797L3.5 8.16797V23.3346L10.5 19.8346L17.5 23.3346L24.5 19.8346V17.5013\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M10.5 4.66797V19.8346\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M17.5 17.5V23.3333\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-navgoogle",
  "use": "icon-navgoogle-usage",
  "viewBox": "0 0 17 24",
  "content": "<symbol viewBox=\"0 0 17 24\" fill=\"none\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-navgoogle\">\n<path d=\"M4.63281 17.7831C5.37789 18.7102 6.13377 19.8718 6.53114 20.5752C7.0149 21.4894 7.21359 22.1068 7.57425 23.2081C7.78589 23.8147 7.98458 23.9997 8.40571 23.9997C8.86571 23.9997 9.0752 23.69 9.23717 23.2081C9.57192 22.1691 9.83324 21.3797 10.2414 20.6247C11.047 19.1791 12.0663 17.8928 13.0576 16.6581C13.3297 16.3118 15.0682 14.2725 15.85 12.6549C15.85 12.6549 16.8046 10.8867 16.8046 8.41516C16.8046 6.1049 15.8608 4.49805 15.8608 4.49805L13.131 5.22726L11.4681 9.57674L11.0578 10.1704L10.9714 10.2823L10.8591 10.4178L10.6733 10.6394L10.4012 10.9104L8.92402 12.1086L5.23967 14.2338L4.63281 17.7831Z\" fill=\"#34A853\" />\n<path d=\"M0.820312 12.3578C1.7252 14.4099 3.45076 16.2018 4.62992 17.7828L10.8713 10.4175C10.8713 10.4175 9.99016 11.5662 8.40282 11.5662C6.62759 11.5662 5.18927 10.1573 5.18927 8.37831C5.18927 7.15435 5.92139 6.31543 5.92139 6.31543L1.68849 7.44044L0.820312 12.3578Z\" fill=\"#FBBC04\" />\n<path d=\"M10.9474 0.382812C13.0185 1.04965 14.7937 2.4457 15.8606 4.51073L10.8718 10.4305C10.8718 10.4305 11.6039 9.57867 11.6039 8.36761C11.6039 6.54995 10.0662 5.17971 8.40331 5.17971C6.82677 5.17971 5.92188 6.31763 5.92188 6.31763V2.58336L10.9474 0.382812Z\" fill=\"#4285F4\" />\n<path d=\"M1.95312 2.99C3.19276 1.51866 5.36536 0 8.36727 0C9.81855 0 10.9221 0.382892 10.9221 0.382892L5.91175 6.31556H2.36346L1.95312 2.99Z\" fill=\"#1A73E8\" />\n<path d=\"M0.818506 12.358C0.818506 12.358 0 10.7382 0 8.40428C0 6.19298 0.868177 4.26346 1.97175 3.00293L5.93038 6.32634L0.818506 12.358Z\" fill=\"#EA4335\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-navshare",
  "use": "icon-navshare-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-navshare\">\n<path d=\"M18 8H10C8.89543 8 8 8.89543 8 10V18C8 19.1046 8.89543 20 10 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M16 8V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-navyandex",
  "use": "icon-navyandex-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-navyandex\">\n<path d=\"M24 0L0 9.7534L10.5023 13.5038L14.2526 24L24 0Z\" fill=\"url(#icon-navyandex_paint0_linear_5436_98532)\" />\n<path d=\"M23.9972 0L10.125 13.8782L14.2498 24L23.9972 0Z\" fill=\"#FFCC00\" />\n<path d=\"M9.7534 14.2522L14.2526 23.9995L12.7489 11.2507L0 9.75293L9.7534 14.2522Z\" fill=\"#ECA704\" />\n<defs>\n<linearGradient id=\"icon-navyandex_paint0_linear_5436_98532\" x1=\"9.79942e-05\" y1=\"23.9995\" x2=\"24.0011\" y2=\"-0.0014742\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#FFCC00\" />\n<stop offset=\"1\" stop-color=\"#FFE992\" />\n</linearGradient>\n</defs>\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-orders",
  "use": "icon-orders-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-orders\">\r\n<path d=\"M5.83333 4.66797H10.5L14 8.16797H22.1667C22.7855 8.16797 23.379 8.4138 23.8166 8.85139C24.2542 9.28897 24.5 9.88246 24.5 10.5013V19.8346C24.5 20.4535 24.2542 21.047 23.8166 21.4845C23.379 21.9221 22.7855 22.168 22.1667 22.168H5.83333C5.21449 22.168 4.621 21.9221 4.18342 21.4845C3.74583 21.047 3.5 20.4535 3.5 19.8346V7.0013C3.5 6.38246 3.74583 5.78897 4.18342 5.35139C4.621 4.9138 5.21449 4.66797 5.83333 4.66797\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-pencil",
  "use": "icon-pencil-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-pencil\">\r\n<path d=\"M3.33398 16.6663H6.66732L15.4173 7.91627C15.8593 7.47424 16.1077 6.87472 16.1077 6.2496C16.1077 5.62448 15.8593 5.02496 15.4173 4.58293C14.9753 4.14091 14.3758 3.89258 13.7507 3.89258C13.1255 3.89258 12.526 4.14091 12.084 4.58293L3.33398 13.3329V16.6663Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M11.25 5.41602L14.5833 8.74935\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-print",
  "use": "icon-print-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-print\">\n<path d=\"M19.8333 19.8333H22.1667C22.7855 19.8333 23.379 19.5875 23.8166 19.1499C24.2542 18.7123 24.5 18.1188 24.5 17.5V12.8333C24.5 12.2145 24.2542 11.621 23.8166 11.1834C23.379 10.7458 22.7855 10.5 22.1667 10.5H5.83333C5.21449 10.5 4.621 10.7458 4.18342 11.1834C3.74583 11.621 3.5 12.2145 3.5 12.8333V17.5C3.5 18.1188 3.74583 18.7123 4.18342 19.1499C4.621 19.5875 5.21449 19.8333 5.83333 19.8333H8.16667\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M19.8346 10.5V5.83333C19.8346 5.21449 19.5888 4.621 19.1512 4.18342C18.7136 3.74583 18.1201 3.5 17.5013 3.5H10.5013C9.88246 3.5 9.28897 3.74583 8.85139 4.18342C8.4138 4.621 8.16797 5.21449 8.16797 5.83333V10.5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M17.5013 15.168H10.5013C9.21264 15.168 8.16797 16.2126 8.16797 17.5013V22.168C8.16797 23.4566 9.21264 24.5013 10.5013 24.5013H17.5013C18.79 24.5013 19.8346 23.4566 19.8346 22.168V17.5013C19.8346 16.2126 18.79 15.168 17.5013 15.168Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-question",
  "use": "icon-question-usage",
  "viewBox": "0 0 60 60",
  "content": "<symbol viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-question\">\r\n<circle cx=\"30\" cy=\"30\" r=\"30\" fill=\"#CEDDF0\" />\r\n<path d=\"M23.1953 22.8196C23.1953 21.4482 23.8309 20.1328 24.9624 19.163C26.0938 18.1933 27.6283 17.6484 29.2284 17.6484H30.9521C32.5522 17.6484 34.0867 18.1933 35.2181 19.163C36.3496 20.1328 36.9852 21.4482 36.9852 22.8196C37.0487 23.9388 36.7468 25.0482 36.125 25.9809C35.5032 26.9136 34.5952 27.619 33.5377 27.9908C32.4803 28.4866 31.5722 29.4272 30.9505 30.6707C30.3287 31.9143 30.0268 33.3936 30.0903 34.8858\" stroke=\"#1F617F\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M30.0898 41.7812V41.7985\" stroke=\"#1F617F\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-repeat",
  "use": "icon-repeat-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-repeat\">\n<path d=\"M4.72656 12.8332C5.02159 10.5824 6.12682 8.51628 7.83535 7.02159C9.54389 5.52691 11.7386 4.70614 14.0086 4.71293C16.2787 4.71972 18.4684 5.5536 20.168 7.05847C21.8676 8.56334 22.9604 10.636 23.242 12.8886C23.5236 15.1411 22.9745 17.419 21.6977 19.2959C20.4209 21.1729 18.5037 22.5201 16.3052 23.0855C14.1067 23.6508 11.7775 23.3956 9.75358 22.3674C7.7297 21.3393 6.14989 19.6088 5.3099 17.4999M4.72656 23.3332V17.4999H10.5599\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-row-view",
  "use": "icon-row-view-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-row-view\">\r\n<rect x=\"10\" y=\"10\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<rect x=\"10\" y=\"22\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<path d=\"M22 12H30\" stroke-width=\"2\" />\r\n<path d=\"M22 24H30\" stroke-width=\"2\" />\r\n<path d=\"M22 16H27\" stroke-width=\"2\" />\r\n<path d=\"M22 28H27\" stroke-width=\"2\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-share",
  "use": "icon-share-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-share\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path d=\"M27.5911 12.4074C25.9801 10.7965 23.3684 10.7965 21.7574 12.4074L18.3098 15.855C16.6435 17.5214 16.7977 20.1766 18.3098 21.6887C18.563 21.9419 18.8432 22.1484 19.139 22.3179L19.7682 21.6887C20.1809 21.2759 20.0357 20.7934 20.0282 20.4452C19.9377 20.381 19.8496 20.3116 19.7682 20.2303C18.9923 19.4544 18.9574 18.1243 19.7682 17.3134C19.8886 17.193 23.1427 13.939 23.2158 13.8659C24.0201 13.0615 25.3283 13.0615 26.1326 13.8659C26.937 14.6702 26.937 15.9784 26.1326 16.7827L23.8538 19.0615C23.9197 19.4262 24.3152 20.2899 24.1117 21.7147C24.1217 21.7049 24.1336 21.6986 24.1435 21.6887L27.5911 18.2411C29.202 16.6302 29.202 14.0184 27.5911 12.4074Z\" fill=\"#212F4E\" />\n<path d=\"M21.9558 18.0433C21.7026 17.7901 21.4224 17.5836 21.1267 17.4141L20.4974 18.0433C20.0847 18.456 20.2299 18.9385 20.2374 19.2867C20.328 19.3509 20.4161 19.4203 20.4974 19.5017C21.2734 20.2776 21.3083 21.6077 20.4974 22.4185C20.3768 22.5392 16.8532 26.0628 16.7827 26.1333C15.9783 26.9376 14.6702 26.9376 13.8658 26.1333C13.0615 25.3289 13.0615 24.0208 13.8658 23.2165L16.4119 20.6704C16.346 20.3058 15.9505 19.4421 16.1539 18.0173C16.144 18.027 16.132 18.0334 16.1221 18.0433L12.4074 21.7581C10.7965 23.369 10.7965 25.9808 12.4074 27.5918C14.0183 29.2026 16.6301 29.2026 18.241 27.5918L21.9558 23.877C23.5912 22.2415 23.5019 19.5893 21.9558 18.0433Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-tele--black",
  "use": "icon-tele--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-tele--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.7012 26.0256C18.0521 26.0256 18.2071 25.8652 18.403 25.6747L20.2744 23.855L17.94 22.4473\" fill=\"#7F8899\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.9404 22.4485L23.597 26.6276C24.2424 26.9838 24.7083 26.7994 24.8691 26.0283L27.1716 15.1781C27.4073 14.233 26.8113 13.8043 26.1938 14.0847L12.6736 19.298C11.7507 19.6682 11.7561 20.1831 12.5054 20.4125L15.975 21.4954L24.0075 16.4278C24.3866 16.1979 24.7347 16.3215 24.449 16.575\" fill=\"#EFF6FF\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-telega",
  "use": "icon-telega-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-telega\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.334 29.1672C16.834 29.1672 17.0549 28.9385 17.334 28.6672L20.0007 26.0742L16.6743 24.0684\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.6745 24.0676L24.7345 30.0224C25.6543 30.5299 26.3181 30.2672 26.5472 29.1685L29.828 13.708C30.1639 12.3613 29.3147 11.7505 28.4348 12.15L9.16977 19.5785C7.85475 20.1059 7.86242 20.8396 8.93007 21.1665L13.8739 22.7095L25.3194 15.4887C25.8597 15.161 26.3556 15.3372 25.9486 15.6984\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-tile-view",
  "use": "icon-tile-view-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-tile-view\">\r\n<rect x=\"10\" y=\"10\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<rect x=\"10\" y=\"22\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<rect x=\"22\" y=\"10\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n<rect x=\"22\" y=\"22\" width=\"8\" height=\"8\" stroke-width=\"2\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-trash",
  "use": "icon-trash-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-trash\">\r\n<path d=\"M3.33594 5.83398H16.6693\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M8.33594 9.16602V14.166\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M11.668 9.16602V14.166\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M4.16797 5.83398L5.0013 15.834C5.0013 16.276 5.1769 16.6999 5.48946 17.0125C5.80202 17.3251 6.22594 17.5007 6.66797 17.5007H13.3346C13.7767 17.5007 14.2006 17.3251 14.5131 17.0125C14.8257 16.6999 15.0013 16.276 15.0013 15.834L15.8346 5.83398\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n<path d=\"M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-update",
  "use": "icon-update-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-update\">\n<path d=\"M4.05078 10.9993C4.30367 9.07007 5.251 7.29911 6.71546 6.01795C8.17992 4.7368 10.0611 4.03328 12.0068 4.0391C13.9526 4.04492 15.8295 4.75967 17.2863 6.04956C18.7431 7.33945 19.6798 9.11605 19.9212 11.0468C20.1625 12.9775 19.6919 14.93 18.5975 16.5388C17.503 18.1476 15.8598 19.3024 13.9753 19.787C12.0909 20.2716 10.0944 20.0528 8.35966 19.1715C6.6249 18.2903 5.27078 16.807 4.55078 14.9993M4.05078 19.9993V14.9993H9.05078\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-user-dropdown",
  "use": "icon-user-dropdown-usage",
  "viewBox": "0 0 28 28",
  "content": "<symbol viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-user-dropdown\">\n<path d=\"M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M14 15.168C15.933 15.168 17.5 13.601 17.5 11.668C17.5 9.73497 15.933 8.16797 14 8.16797C12.067 8.16797 10.5 9.73497 10.5 11.668C10.5 13.601 12.067 15.168 14 15.168Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M7.19531 21.9918C7.48407 21.0307 8.07494 20.1883 8.88027 19.5896C9.68559 18.9909 10.6625 18.6677 11.666 18.668H16.3326C17.3374 18.6676 18.3155 18.9916 19.1214 19.5917C19.9273 20.1918 20.518 21.036 20.8056 21.9988\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-user",
  "use": "icon-user-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-user\">\n<path d=\"M20 21C22.7614 21 25 18.7614 25 16C25 13.2386 22.7614 11 20 11C17.2386 11 15 13.2386 15 16C15 18.7614 17.2386 21 20 21Z\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M10.5 29.9895C10.9031 28.5468 11.728 27.2823 12.8522 26.3835C13.9764 25.4847 15.3401 24.9996 16.741 25H23.2557C24.6584 24.9995 26.0238 25.4858 27.1488 26.3867C28.2739 27.2875 29.0985 28.5548 29.5 30\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-vk--black",
  "use": "icon-vk--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-vk--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4777 25.5738C20.4777 25.5738 20.7905 25.5399 20.9507 25.3723C21.0974 25.2188 21.0923 24.929 21.0923 24.929C21.0923 24.929 21.0728 23.5759 21.7179 23.3761C22.3538 23.1796 23.1702 24.6846 24.0366 25.2633C24.6911 25.7009 25.1879 25.6051 25.1879 25.6051L27.5032 25.5738C27.5032 25.5738 28.7138 25.5011 28.1398 24.574C28.0924 24.498 27.805 23.8879 26.4189 22.6347C24.9666 21.3229 25.1616 21.5351 26.9097 19.2656C27.9745 17.8836 28.4001 17.0399 28.267 16.6791C28.1407 16.334 27.3573 16.4256 27.3573 16.4256L24.7513 16.4413C24.7513 16.4413 24.558 16.4157 24.4147 16.4991C24.2748 16.5808 24.1841 16.7716 24.1841 16.7716C24.1841 16.7716 23.7721 17.8407 23.2219 18.7504C22.0613 20.6691 21.5976 20.7706 21.4077 20.6517C20.966 20.3735 21.0762 19.5356 21.0762 18.9403C21.0762 17.0803 21.3661 16.3051 20.5124 16.1045C20.2293 16.0376 20.0207 15.9939 19.2959 15.9864C18.3659 15.9774 17.5791 15.9897 17.1332 16.2019C16.8365 16.3431 16.6076 16.6585 16.7475 16.6766C16.9195 16.6989 17.3095 16.779 17.5164 17.0531C17.7834 17.4072 17.7741 18.2014 17.7741 18.2014C17.7741 18.2014 17.9276 20.3908 17.4155 20.6625C17.0645 20.849 16.583 20.4684 15.5479 18.7273C15.018 17.8357 14.6178 16.85 14.6178 16.85C14.6178 16.85 14.5407 16.6659 14.4025 16.5668C14.2355 16.4471 14.0024 16.41 14.0024 16.41L11.526 16.4256C11.526 16.4256 11.1538 16.4355 11.0173 16.5932C10.8961 16.7328 11.008 17.0225 11.008 17.0225C11.008 17.0225 12.9469 21.4401 15.1426 23.6667C17.1561 25.7075 19.4417 25.5738 19.4417 25.5738H20.4777Z\" fill=\"white\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-vk--white",
  "use": "icon-vk--white-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-vk--white\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4796 25.5738C20.4796 25.5738 20.7924 25.5399 20.9527 25.3723C21.0993 25.2188 21.0942 24.929 21.0942 24.929C21.0942 24.929 21.0747 23.5759 21.7199 23.3761C22.3557 23.1796 23.1721 24.6846 24.0386 25.2633C24.693 25.7009 25.1898 25.6051 25.1898 25.6051L27.5051 25.5738C27.5051 25.5738 28.7157 25.5011 28.1418 24.574C28.0943 24.498 27.8069 23.8879 26.4208 22.6347C24.9686 21.3229 25.1636 21.5351 26.9117 19.2656C27.9765 17.8836 28.4021 17.0399 28.269 16.6791C28.1426 16.334 27.3593 16.4256 27.3593 16.4256L24.7532 16.4413C24.7532 16.4413 24.5599 16.4157 24.4167 16.4991C24.2768 16.5808 24.1861 16.7716 24.1861 16.7716C24.1861 16.7716 23.7741 17.8407 23.2239 18.7504C22.0633 20.6691 21.5995 20.7706 21.4096 20.6517C20.9679 20.3735 21.0781 19.5356 21.0781 18.9403C21.0781 17.0803 21.3681 16.3051 20.5144 16.1045C20.2312 16.0376 20.0227 15.9939 19.2978 15.9864C18.3678 15.9774 17.5811 15.9897 17.1351 16.2019C16.8384 16.3431 16.6095 16.6585 16.7494 16.6766C16.9215 16.6989 17.3115 16.779 17.5183 17.0531C17.7854 17.4072 17.7761 18.2014 17.7761 18.2014C17.7761 18.2014 17.9295 20.3908 17.4175 20.6625C17.0665 20.849 16.5849 20.4684 15.5498 18.7273C15.0199 17.8357 14.6198 16.85 14.6198 16.85C14.6198 16.85 14.5426 16.6659 14.4045 16.5668C14.2375 16.4471 14.0043 16.41 14.0043 16.41L11.528 16.4256C11.528 16.4256 11.1558 16.4355 11.0193 16.5932C10.8981 16.7328 11.01 17.0225 11.01 17.0225C11.01 17.0225 12.9488 21.4401 15.1446 23.6667C17.158 25.7075 19.4436 25.5738 19.4436 25.5738H20.4796Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-vk",
  "use": "icon-vk-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-vk\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4796 25.5738C20.4796 25.5738 20.7924 25.5399 20.9527 25.3723C21.0993 25.2188 21.0942 24.929 21.0942 24.929C21.0942 24.929 21.0747 23.5759 21.7199 23.3761C22.3557 23.1796 23.1721 24.6846 24.0386 25.2633C24.693 25.7009 25.1898 25.6051 25.1898 25.6051L27.5051 25.5738C27.5051 25.5738 28.7157 25.5011 28.1418 24.574C28.0943 24.498 27.8069 23.8879 26.4208 22.6347C24.9686 21.3229 25.1636 21.5351 26.9117 19.2656C27.9765 17.8836 28.4021 17.0399 28.269 16.6791C28.1426 16.334 27.3593 16.4256 27.3593 16.4256L24.7532 16.4413C24.7532 16.4413 24.5599 16.4157 24.4167 16.4991C24.2768 16.5808 24.1861 16.7716 24.1861 16.7716C24.1861 16.7716 23.7741 17.8407 23.2239 18.7504C22.0633 20.6691 21.5995 20.7706 21.4096 20.6517C20.9679 20.3735 21.0781 19.5356 21.0781 18.9403C21.0781 17.0803 21.3681 16.3051 20.5144 16.1045C20.2312 16.0376 20.0227 15.9939 19.2978 15.9864C18.3678 15.9774 17.5811 15.9897 17.1351 16.2019C16.8384 16.3431 16.6095 16.6585 16.7494 16.6766C16.9215 16.6989 17.3115 16.779 17.5183 17.0531C17.7854 17.4072 17.7761 18.2014 17.7761 18.2014C17.7761 18.2014 17.9295 20.3908 17.4175 20.6625C17.0665 20.849 16.5849 20.4684 15.5498 18.7273C15.0199 17.8357 14.6198 16.85 14.6198 16.85C14.6198 16.85 14.5426 16.6659 14.4045 16.5668C14.2375 16.4471 14.0043 16.41 14.0043 16.41L11.528 16.4256C11.528 16.4256 11.1558 16.4355 11.0193 16.5932C10.8981 16.7328 11.01 17.0225 11.01 17.0225C11.01 17.0225 12.9488 21.4401 15.1446 23.6667C17.158 25.7075 19.4436 25.5738 19.4436 25.5738H20.4796Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-whats",
  "use": "icon-whats-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-whats\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.6586 31.1278H20.6537C18.6633 31.1271 16.7075 30.6277 14.9705 29.6802L8.66602 31.334L10.3532 25.1714C9.31246 23.3678 8.76483 21.3219 8.76572 19.2259C8.76833 12.6687 14.1034 7.33398 20.6585 7.33398C23.8399 7.33536 26.8259 8.57387 29.0712 10.8218C31.3165 13.0697 32.5524 16.0576 32.5511 19.2352C32.5485 25.7909 27.2156 31.1251 20.6586 31.1278Z\" fill=\"#212F4E\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.2623 27.5263L15.6233 27.7406C17.1409 28.6412 18.8806 29.1177 20.6543 29.1184H20.6584C26.1065 29.1184 30.5407 24.684 30.5429 19.2337C30.5439 16.5924 29.5168 14.109 27.6505 12.2406C25.7843 10.3722 23.3024 9.34271 20.6622 9.3418C15.2099 9.3418 10.7756 13.7757 10.7734 19.2257C10.7727 21.0934 11.2953 22.9124 12.2847 24.4861L12.5198 24.8601L11.5212 28.5077L15.2623 27.5263Z\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.6496 22.0619C26.5754 21.9379 26.3773 21.8636 26.0801 21.7148C25.783 21.5661 24.322 20.8473 24.0496 20.748C23.7773 20.6489 23.5791 20.5993 23.381 20.8967C23.1829 21.1942 22.6135 21.8636 22.4401 22.0619C22.2668 22.2602 22.0934 22.2851 21.7964 22.1363C21.4992 21.9875 20.5417 21.6738 19.4067 20.6614C18.5233 19.8734 17.9269 18.9003 17.7536 18.6028C17.5802 18.3053 17.7351 18.1446 17.8839 17.9964C18.0175 17.8632 18.181 17.6492 18.3296 17.4758C18.4782 17.3023 18.5277 17.1783 18.6267 16.9801C18.7258 16.7817 18.6763 16.6082 18.602 16.4595C18.5277 16.3107 17.9334 14.848 17.6858 14.253C17.4446 13.6736 17.1996 13.7521 17.0172 13.7429C16.8441 13.7343 16.6458 13.7324 16.4477 13.7324C16.2496 13.7324 15.9276 13.8068 15.6553 14.1043C15.3829 14.4018 14.6152 15.1207 14.6152 16.5833C14.6152 18.0459 15.68 19.459 15.8286 19.6572C15.9772 19.8557 17.924 22.857 20.9049 24.1442C21.6139 24.4504 22.1673 24.6332 22.5989 24.7701C23.3108 24.9964 23.9586 24.9644 24.4705 24.8879C25.0415 24.8026 26.2287 24.1691 26.4764 23.475C26.7239 22.7808 26.7239 22.1858 26.6496 22.0619Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-you--black",
  "use": "icon-you--black-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-you--black\">\n<rect width=\"40\" height=\"40\" rx=\"8\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.7745 14.3737C27.5203 14.5794 28.1077 15.1853 28.307 15.9548C28.6693 17.3494 28.6693 20.2593 28.6693 20.2593C28.6693 20.2593 28.6693 23.169 28.307 24.5637C28.1077 25.3332 27.5203 25.9391 26.7745 26.1449C25.4229 26.5185 20.0026 26.5185 20.0026 26.5185C20.0026 26.5185 14.5823 26.5185 13.2306 26.1449C12.4848 25.9391 11.8974 25.3332 11.6981 24.5637C11.3359 23.169 11.3359 20.2593 11.3359 20.2593C11.3359 20.2593 11.3359 17.3494 11.6981 15.9548C11.8974 15.1853 12.4848 14.5794 13.2306 14.3737C14.5823 14 20.0026 14 20.0026 14C20.0026 14 25.4229 14 26.7745 14.3737ZM18.3766 17.8102V23.253L22.7099 20.5317L18.3766 17.8102Z\" fill=\"white\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-you--white",
  "use": "icon-you--white-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-you--white\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.7726 14.3737C27.5184 14.5794 28.1058 15.1853 28.3051 15.9548C28.6673 17.3494 28.6673 20.2593 28.6673 20.2593C28.6673 20.2593 28.6673 23.169 28.3051 24.5637C28.1058 25.3332 27.5184 25.9391 26.7726 26.1449C25.421 26.5185 20.0007 26.5185 20.0007 26.5185C20.0007 26.5185 14.5803 26.5185 13.2286 26.1449C12.4828 25.9391 11.8954 25.3332 11.6961 24.5637C11.334 23.169 11.334 20.2593 11.334 20.2593C11.334 20.2593 11.334 17.3494 11.6961 15.9548C11.8954 15.1853 12.4828 14.5794 13.2286 14.3737C14.5803 14 20.0007 14 20.0007 14C20.0007 14 25.421 14 26.7726 14.3737ZM18.3746 17.8102V23.253L22.7079 20.5317L18.3746 17.8102Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-you",
  "use": "icon-you-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-you\">\n<rect width=\"40\" height=\"40\" rx=\"8\" fill=\"#EEEFF0\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.7726 14.3737C27.5184 14.5794 28.1058 15.1853 28.3051 15.9548C28.6673 17.3494 28.6673 20.2593 28.6673 20.2593C28.6673 20.2593 28.6673 23.169 28.3051 24.5637C28.1058 25.3332 27.5184 25.9391 26.7726 26.1449C25.421 26.5185 20.0007 26.5185 20.0007 26.5185C20.0007 26.5185 14.5803 26.5185 13.2286 26.1449C12.4828 25.9391 11.8954 25.3332 11.6961 24.5637C11.334 23.169 11.334 20.2593 11.334 20.2593C11.334 20.2593 11.334 17.3494 11.6961 15.9548C11.8954 15.1853 12.4828 14.5794 13.2286 14.3737C14.5803 14 20.0007 14 20.0007 14C20.0007 14 25.421 14 26.7726 14.3737ZM18.3746 17.8102V23.253L22.7079 20.5317L18.3746 17.8102Z\" fill=\"#212F4E\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaddingOnBody", function() { return getPaddingOnBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaddingFromBody", function() { return getPaddingFromBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return getScrollbarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneRegExp", function() { return phoneRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormData", function() { return createFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACTS", function() { return CONTACTS; });
/* harmony import */ var _utils_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _utils_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var _fonts_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fonts_scss__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable */



/* eslint-enable */
// const phoneRegExp = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/; // Находим ширину скролбара и узнаем на сколько добавлять отступ справа у body.

const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

let checker = false; // Функция чтобы блочить экран и давать отступ.

const getPaddingOnBody = () => {
  if (!checker) {
    const body = document.querySelector('body');
    const header = document.querySelector('.header__fixed');
    const dropdown = document.querySelector('.header__dropdown');
    const promoFixed = document.querySelector('.promo__fixed');
    const Modal = document.querySelector('.Modal');
    const popUps = document.querySelectorAll('.popUp');
    const alertWrapper = document.querySelector('.alert-wrapper');
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
      popUps.forEach(popUp => {
        popUp.style.paddingRight = `${getScrollbarWidth()}px`;
      });
    }

    body.classList.add('static');
    checker = true;
  }
}; // Функция чтобы снимать блокировку экрана и убирать отступ.


const getPaddingFromBody = () => {
  if (checker) {
    const body = document.querySelector('body');
    const header = document.querySelector('.header__fixed');
    const dropdown = document.querySelector('.header__dropdown');
    const promoFixed = document.querySelector('.promo__fixed');
    const Modal = document.querySelector('.Modal');
    const popUps = document.querySelectorAll('.popUp');
    const alertWrapper = document.querySelector('.alert-wrapper');
    body.style.paddingRight = '';

    if (header) {
      header.style.paddingRight = '';
    }

    if (dropdown) {
      dropdown.style.paddingRight = '';
    }

    if (promoFixed) {
      promoFixed.style.paddingRight = '';
    }

    if (Modal) {
      Modal.style.paddingRight = '';
    }

    if (alertWrapper) {
      alertWrapper.style.paddingRight = '';
    }

    if (popUps.length > 0) {
      popUps.forEach(popUp => {
        popUp.style.paddingRight = '';
      });
    }

    body.classList.remove('static');
    checker = false;
  }
};

const isObject = object => {
  const type = typeof object;
  return type === 'function' || type === 'object';
};

const createFormData = values => {
  const data = new FormData(); // eslint-disable-next-line no-restricted-syntax

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

document.addEventListener('click', evt => {
  const button = evt.target.closest('.request-login');
  if (!button) return;
  evt.preventDefault();
  window.LoginProvider.setOpenPhone(true);
});
const CONTACTS = {
  phones: [{
    name: '+7(812)725-00-88',
    link: '+78127250088'
  }, {
    name: '+7(921)588-60-80',
    link: '+79215886080'
  }],
  mails: [{
    name: 'sales@resource.beer',
    link: 'sales@resource.beer'
  }] // whatsapps: [
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


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(76);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(78);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(80);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widget_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _widget_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_widget_scss__WEBPACK_IMPORTED_MODULE_0__);

const widget = document.querySelector('.widget');

if (widget) {
  const widgetClose = widget.querySelector('.widget__close');
  const widgetOverlay = widget.querySelector('.widget__overlay');
  const body = document.querySelector('body');

  const getWidgetWork = () => {
    const isActive = widget.classList.contains('widget--active');

    if (!isActive) {
      widget.classList.add('widget--active');
      widgetClose.classList.add('widget__close--active');
      body.classList.add('fixed');
    } else {
      widget.classList.remove('widget--active');
      widgetClose.classList.remove('widget__close--active');
      body.classList.remove('fixed');
    }
  };

  widgetClose.addEventListener('click', () => {
    getWidgetWork();
  });
  widgetOverlay.addEventListener('click', () => {
    getWidgetWork();
  });
  const currentPage = window.location.pathname.split('/').pop();
  const links = widget.querySelectorAll('li a');
  links.forEach(link => {
    const page = link.href.split('/').pop();

    if (page === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(101);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(109);
/* harmony import */ var _popUp_popUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(112);
/* harmony import */ var _video_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(115);
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(118);
/* harmony import */ var _find_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(121);
/* harmony import */ var _item_card_item_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(125);
/* harmony import */ var _question_card_question_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(128);
/* harmony import */ var _warehouses_map_warehouses_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(233);
/* harmony import */ var _profile_center_profile_center__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(236);
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(239);
/* harmony import */ var _promotion_alert_promotion_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(242);
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(245);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73);
/* harmony import */ var _select_city_select_city__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(248);
/* harmony import */ var _compare_compare__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(251);
/* harmony import */ var _bx_soa_order_bx_soa_order__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(259);

















window.Corners5ProjectLayout = {
  getFormMessage: _form_form__WEBPACK_IMPORTED_MODULE_1__["getFormMessage"],
  setTextareaAutoHeight: _form_form__WEBPACK_IMPORTED_MODULE_1__["setTextareaAutoHeight"],
  summonPopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_2__["summonPopUp"],
  removePopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_2__["removePopUp"],
  findVideos: _video_video__WEBPACK_IMPORTED_MODULE_3__["default"],
  summonAlert: _alert_alert__WEBPACK_IMPORTED_MODULE_4__["summonAlert"],
  removeAlert: _alert_alert__WEBPACK_IMPORTED_MODULE_4__["removeAlert"],
  multiMapInit: _find_find__WEBPACK_IMPORTED_MODULE_5__["default"],
  activateItemCards: _item_card_item_card__WEBPACK_IMPORTED_MODULE_6__["default"],
  questionSliderInit: _question_card_question_card__WEBPACK_IMPORTED_MODULE_7__["default"],
  warehousesMapInit: _warehouses_map_warehouses_map__WEBPACK_IMPORTED_MODULE_8__["default"],
  initProfileSelect: _profile_center_profile_center__WEBPACK_IMPORTED_MODULE_9__["default"],
  initCitySelect: _modal_modal__WEBPACK_IMPORTED_MODULE_10__["default"],
  validation: {
    validateForm: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["validateForm"],
    maskSimplePhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["maskSimplePhone"],
    maskNumber: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["maskNumber"],
    maskPhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["maskPhone"],
    maskInternationalPhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["maskInternationalPhone"],
    initPasswordEye: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["initPasswordEye"],
    initAgreeCheckbox: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["initAgreeCheckbox"],
    initFileLoadInput: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["initFileLoadInput"],
    focusFirstInput: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["focusFirstInput"],
    initSelectValidation: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["initSelectValidation"],
    initChoicesValidation: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["initChoicesValidation"]
  },
  summonPromotionAlert: _promotion_alert_promotion_alert__WEBPACK_IMPORTED_MODULE_11__["summonPromotionAlert"],
  removePromotionAlert: _promotion_alert_promotion_alert__WEBPACK_IMPORTED_MODULE_11__["removePromotionAlert"],
  getPaddingOnBody: _utils_utils__WEBPACK_IMPORTED_MODULE_13__["getPaddingOnBody"],
  getPaddingFromBody: _utils_utils__WEBPACK_IMPORTED_MODULE_13__["getPaddingFromBody"],
  getScrollbarWidth: _utils_utils__WEBPACK_IMPORTED_MODULE_13__["getScrollbarWidth"],
  createFormData: _utils_utils__WEBPACK_IMPORTED_MODULE_13__["createFormData"],
  addLoading: _loading_loading__WEBPACK_IMPORTED_MODULE_12__["addLoading"],
  removeLoading: _loading_loading__WEBPACK_IMPORTED_MODULE_12__["removeLoading"],
  selectCityInit: _select_city_select_city__WEBPACK_IMPORTED_MODULE_14__["default"],
  compareLogicInit: _compare_compare__WEBPACK_IMPORTED_MODULE_15__["default"],
  initBxSoaOrderSelect: _bx_soa_order_bx_soa_order__WEBPACK_IMPORTED_MODULE_16__["default"]
};

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateForm", function() { return validateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskNumber", function() { return maskNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskSimplePhone", function() { return maskSimplePhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskPhone", function() { return maskPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskInternationalPhone", function() { return maskInternationalPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPasswordEye", function() { return initPasswordEye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAgreeCheckbox", function() { return initAgreeCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFileLoadInput", function() { return initFileLoadInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusFirstInput", function() { return focusFirstInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSelectValidation", function() { return initSelectValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initChoicesValidation", function() { return initChoicesValidation; });
/* harmony import */ var _validator_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _validator_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_validator_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(106);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(107);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formbouncerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var choices_js_src_styles_choices_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var choices_js_src_styles_choices_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(choices_js_src_styles_choices_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(108);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_4__);






const validateForm = form => {
  const forma = document.querySelector(`${form}`);
  let validator = new formbouncerjs__WEBPACK_IMPORTED_MODULE_2___default.a(form, {
    fieldClass: 'validator__input--error',
    errorClass: 'validator__error',
    disableSubmit: true,
    emitEvents: true,
    // messageAfterField: false,
    customValidations: {
      required(field) {
        const selector = field.classList.contains('validator__required');
        if (!selector) return false;
        const description = field.parentElement.querySelector('.validator__description');
        const cuttedSpacesValue = field.value.replace(/\s\s+/g, ' ');
        const trimmedValue = cuttedSpacesValue.trim();
        field.value = trimmedValue;

        if (field.value !== '') {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      text(field) {
        const selector = field.classList.contains('validator__text');
        if (!selector) return false;
        const description = field.parentElement.querySelector('.validator__description');
        const cuttedSpacesValue = field.value.replace(/\s\s+/g, ' ');
        const trimmedValue = cuttedSpacesValue.trim();
        field.value = trimmedValue; // Разрешены только буквы и тире

        const textRegexp = new RegExp(/^([a-zA-ZА-Яа-яЁё.-]+\s?)*$/);

        if (field.value.match(textRegexp) && field.value.length >= 2 && field.value.length <= 225) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      textarea(field) {
        const selector = field.classList.contains('validator__textarea');
        if (!selector) return false;
        const description = field.parentElement.querySelector('.validator__description');
        const cuttedSpacesValue = field.value.replace(/\s\s+/g, ' ');
        const trimmedValue = cuttedSpacesValue.trim();
        field.value = trimmedValue; // Разрешены буквы, цифры, спец.симболы

        const textRegexp = new RegExp(/^([a-zA-ZА-Яа-яЁё0-9-!$%^&amp;*()_+|~=`{}[\]:;;&lt;&gt;?",.@#№'&quot;„;“;“;”;‘;’;(?!…)«;»;/|/\\/]+\s?)*$/);

        if (field.value.match(textRegexp) && field.value.length >= 4 && field.value.length <= 225) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      select(field) {
        const selector = field.classList.contains('validator__select');
        if (!selector) return false;

        if (field.options[field.selectedIndex].value !== '') {
          field.parentElement.classList.remove('validator__input--error');
          return false;
        }

        field.parentElement.classList.add('validator__input--error');
        return true;
      },

      choices(field) {
        const selector = field.classList.contains('validator__choices');
        if (!selector) return false;
        const description = field.parentElement.parentElement.parentElement.querySelector('.validator__description');
        const select = field.parentElement;

        if (field.options[field.selectedIndex].value !== '') {
          select.classList.remove('validator__input--error');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        select.classList.add('validator__input--error');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      number(field) {
        const selector = field.classList.contains('validator__number');
        if (!selector) return false;
        const description = field.parentElement.querySelector('.validator__description');

        if (field.value.length >= 1 && field.value.length <= 225) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      minmax(field) {
        const selector = field.classList.contains('validator__minmax');
        const min = field.getAttribute('minlength');
        const max = field.getAttribute('minlength');
        if (!selector) return false;
        const description = field.parentElement.querySelector('.validator__description');

        if (field.value.length >= min && field.value.length <= max) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      email(field) {
        const selector = field.classList.contains('validator__mail');
        if (!selector) return false;
        const description = field.parentElement.querySelector('.validator__description'); // const cuttedSpacesValue = field.value.replace(/\s+/g, '');

        const trimmedValue = field.value.trim();
        field.value = '';
        field.value = trimmedValue;
        const regexp = new RegExp(/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/);

        if (field.value.match(regexp)) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      ruPhone(field) {
        const selector = field.classList.contains('validator__phone');
        if (!selector) return false;
        const description = field.parentElement.querySelector('.validator__description');

        if (field.value.length === 10) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      intPhone(field) {
        const selector = field.classList.contains('validator__country-phone');
        if (!selector) return false;
        const description = field.parentElement.querySelector('.validator__description');

        if (field.value.length === field.getAttribute('data-mask').length) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      password(field) {
        const selector = field.classList.contains('validator__password');
        if (!selector) return false;
        const description = field.parentElement.querySelector('.validator__description');
        field.value.replace(/\s/g, '');

        if (field.value.length >= 6 && field.value.length <= 225) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      passwordMatch(field) {
        const selector = field.getAttribute('data-bouncer-match');
        if (!selector) return false;
        field.value = field.value.replace(/\s/g, '');
        const otherField = field.form.querySelector(selector);
        if (!otherField) return false;
        return otherField.value !== field.value;
      }

    },
    messages: {
      missingValue: {
        default: 'Поле обязательно для заполнения!'
      },
      patternMismatch: {
        default: 'Значение поля не удовлетворяет требованиям!'
      },
      wrongLength: {
        over: 'wrongLength over',
        under: 'wrongLength under'
      },
      outOfRange: {
        over: 'outOfRange over',
        under: 'outOfRange under'
      },
      text: 'Неправильно!',
      textarea: 'Неправильно!',
      number: 'Допускаются только цифры!',
      ruPhone: 'Введи телефон!',
      intPhone: 'Выбери и введи междонародный телефон!',
      password: 'Минимум 6 символов',
      passwordMatch: 'Значения полей не совпадают!'
    }
  });
  forma.addEventListener('reset', () => {
    validator.destroy();
    validator = validateForm(form);
    forma.querySelectorAll('.validator__description').forEach(description => {
      description.classList.remove('validator__description--error');
      description.classList.remove('validator__description--valid');
    });
    forma.querySelectorAll('.validator__input--valid').forEach(input => {
      input.classList.remove('validator__input--valid');
    });
    forma.querySelectorAll('.validator__input--error').forEach(input => {
      input.classList.remove('validator__input--error');
    });
  }, {
    once: true
  });
  return validator;
};

const maskNumber = (form, maxNumber) => {
  const numberMask = new inputmask__WEBPACK_IMPORTED_MODULE_1___default.a(`9{0,${maxNumber}}`, {
    autoUnmask: true,
    showMaskOnHover: false
  });
  const inputsContainer = document.querySelector(`${form}`);
  const inputs = inputsContainer.querySelectorAll('.validator__number');
  inputs.forEach(field => {
    numberMask.mask(field);
  });
};

const maskSimplePhone = form => {
  /* eslint-disable */
  const mask = function () {
    let matrix = '+7 (___) ___ ____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
  };
  /* eslint-enable */


  const phonesContainer = document.querySelector(`${form}`);
  const inputs = phonesContainer.querySelectorAll('.validator__simple-phone');
  inputs.forEach(phone => {
    phone.addEventListener('input', mask);
  });
};

const maskPhone = form => {
  const phoneMask = new inputmask__WEBPACK_IMPORTED_MODULE_1___default.a('+7 [(999) 999-99-99]', {
    autoUnmask: true,
    showMaskOnHover: false
  });
  const phonesContainer = document.querySelector(`${form}`);
  const inputs = phonesContainer.querySelectorAll('.validator__phone');
  inputs.forEach(phone => {
    phoneMask.mask(phone); // phone.addEventListener('paste', (evt) => {
    //   evt.preventDefault();
    //   const initialValue = (evt.clipboardData || window.clipboardData).getData('text');
    //   let serializedValue = initialValue.replace(/[^-0-9]/gim, '');
    //   if (Number(serializedValue.charAt(0)) === 7) {
    //     serializedValue = serializedValue.slice(1);
    //   } if (Number(serializedValue.charAt(0)) === 8) {
    //     serializedValue = serializedValue.slice(1);
    //   }
    //   phone.value = Number(serializedValue);
    // });
  });
};

const maskInternationalPhone = form => {
  const hashContainer = document.querySelector(`${form}`);
  const countryPhone = hashContainer.querySelector('.validator__country-phone');
  const firstPhoneMask = hashContainer.querySelector('.validator__country-mask').getAttribute('data-mask');
  countryPhone.setAttribute('data-mask', firstPhoneMask.replace(/[^9]/g, ''));
  let phoneMask = new inputmask__WEBPACK_IMPORTED_MODULE_1___default.a(firstPhoneMask, {
    autoUnmask: true
  });
  phoneMask.mask(countryPhone);
  const options = [];
  const optionsData = hashContainer.querySelectorAll('.validator__country-mask');
  optionsData.forEach((option, index) => {
    options.push({
      value: option.getAttribute('data-value'),
      label: option.getAttribute('data-country'),
      id: index + 1,
      customProperties: {
        mask: option.getAttribute('data-mask'),
        flag: option.getAttribute('data-flag')
      }
    });
  });
  const choicesSelect = hashContainer.querySelector('.validator__country-select');
  const choicesNolint = new choices_js__WEBPACK_IMPORTED_MODULE_4___default.a(choicesSelect, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    choices: options,
    // searchEnabled: true,
    classNames: {
      containerOuter: 'choices validator__countries'
    },

    callbackOnCreateTemplates(template) {
      return {
        item(classNames, data) {
          return template(`
            <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable} 
            ${data.placeholder ? classNames.placeholder : ''}" 
            data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''} 
            ${data.disabled ? 'aria-disabled="true"' : ''}> 
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
            ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} 
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
  choicesSelect.addEventListener('choice', evt => {
    countryPhone.setAttribute('data-mask', evt.detail.choice.customProperties.mask.replace(/[^9]/g, ''));
    countryPhone.inputmask.remove();
    countryPhone.value = '';
    countryPhone.focus();
    countryPhone.blur();
    phoneMask = new inputmask__WEBPACK_IMPORTED_MODULE_1___default.a(evt.detail.choice.customProperties.mask, {
      autoUnmask: true
    });
    phoneMask.mask(countryPhone);
  });
};

const initPasswordEye = form => {
  const eyeContainer = document.querySelector(`${form}`);
  const eyes = eyeContainer.querySelectorAll('.validator__eye');
  const passwords = eyeContainer.querySelectorAll('.validator__password');
  eyes.forEach((eye, index) => {
    eye.addEventListener('click', () => {
      eye.classList.toggle('validator__eye--open');

      if (passwords[index].type === 'password') {
        passwords[index].type = 'text';
      } else {
        passwords[index].type = 'password';
      }
    });
  });
};

const initFileLoadInput = (form, template) => {
  const FILE_TYPES = ['jpg', 'jpeg', 'gif', 'png'];
  const filesForm = document.querySelector(`${form}`);
  const filesContainer = filesForm.querySelector('.validator__file-container');
  const loadInput = filesContainer.querySelector('.validator__file-input');
  const sizeWarning = filesContainer.querySelector('.validator__size-warning');
  const loadedFilesContainer = filesForm.querySelector('.validator__loaded-files');
  const cleaner = filesForm.querySelector('.validator__cleaner');
  const submitButton = filesForm.querySelector('button[type="submit"]');
  cleaner.style.display = 'none';
  filesForm.addEventListener('reset', () => {
    filesContainer.innerHTML = '';
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = '';
    initFileLoadInput(`${form}`, template);
  }, {
    once: true
  });
  cleaner.addEventListener('click', () => {
    filesContainer.innerHTML = '';
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = '';
    initFileLoadInput(`${form}`, template);
    submitButton.classList.remove('validator__submit--disabled');
    submitButton.disabled = false;
  });
  loadInput.addEventListener('change', () => {
    const files = Object.values(loadInput.files);
    loadedFilesContainer.innerHTML = '';
    let totalSize = 0;
    files.forEach(file => {
      totalSize += file.size;
    });

    if (totalSize > 0) {
      cleaner.style.display = 'grid';
    } else {
      cleaner.style.display = 'none';
    }

    for (let i = 0; i < files.length; i += 1) {
      const fileName = files[i].name.toLowerCase();

      if (!FILE_TYPES.some(type => fileName.endsWith(type))) {
        submitButton.classList.add('validator__submit--disabled');
        submitButton.disabled = true;
        sizeWarning.classList.add('validator__size-warning--exeeded');
        sizeWarning.textContent = 'Недопустимый тип файлов!';
        return;
      }
    }

    if (totalSize < 10485760 && files.length <= 3) {
      sizeWarning.classList.remove('validator__size-warning--exeeded');
      sizeWarning.textContent = 'Допускается не более 3-х файлов в формате .jpeg, .gif, .png. Размер не более 10 MB.';
      files.forEach(file => {
        let str = file.size;
        str = str.toString();
        str = Math.ceil(str / 1024);
        const fileTemplate = `
          <div class="validator__file">
            <p class="validator__file-name">${file.name}</p>
            <p class='validator__size'>${str}&nbsp;КБ</p>
          </div>
          `;
        loadedFilesContainer.insertAdjacentHTML('beforeend', fileTemplate);
      });
      submitButton.classList.remove('validator__submit--disabled');
      submitButton.disabled = false;
    } else if (totalSize > 10241440) {
      submitButton.classList.add('validator__submit--disabled');
      submitButton.disabled = true;
      sizeWarning.classList.add('validator__size-warning--exeeded');
      sizeWarning.textContent = 'Размер файлов не должен превышать 10 МБ!';
    } else if (files.length > 3) {
      submitButton.classList.add('validator__submit--disabled');
      submitButton.disabled = true;
      sizeWarning.classList.add('validator__size-warning--exeeded');
      sizeWarning.textContent = 'Превышен лимит количества файлов!';
    }
  });
};

const initSelectValidation = form => {
  const formContainer = document.querySelector(`${form}`);
  const nativeSelects = formContainer.querySelectorAll('.validator__select');
  nativeSelects.forEach(select => {
    select.addEventListener('change', () => {
      if (select.parentElement.classList.contains('validator__input--error')) {
        select.parentElement.classList.remove('validator__input--error');
      }
    });
  });
};

const initChoicesValidation = form => {
  const formContainer = document.querySelector(`${form}`);
  const nativeSelects = formContainer.querySelectorAll('.validator__choices');
  nativeSelects.forEach(select => {
    const field = select.parentElement.parentElement.parentElement;
    const description = field.querySelector('.validator__description');
    const customSelect = field.querySelector('.choices__inner');
    select.addEventListener('change', () => {
      if (customSelect.classList.contains('validator__input--error')) {
        customSelect.classList.remove('validator__input--error');
        description.classList.remove('validator__description--error');
      }
    });
  });
};

const focusFirstInput = form => {
  const formContainer = document.querySelector(`${form}`);
  const input = formContainer.querySelector('input');
  input.focus();
};

const initAgreeCheckbox = form => {
  const checkboxContainer = document.querySelector(`${form}`);
  const checkboxLabel = checkboxContainer.querySelector('.validator__legal');
  const checkbox = checkboxContainer.querySelector('.validator__agree');
  const submitButton = checkboxContainer.querySelector('button[type="submit"]');
  checkboxLabel.addEventListener('click', () => {
    const isExeeded = checkboxContainer.querySelector('.validator__size-warning--exeeded');

    if (isExeeded) {
      submitButton.classList.add('validator__submit--disabled');
      submitButton.disabled = true;

      if (checkbox.checked === true) {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
    } else if (checkbox.checked === true) {
      submitButton.classList.add('validator__submit--disabled');
      submitButton.disabled = true;
      checkbox.setAttribute('checked', false);
    } else {
      submitButton.classList.remove('validator__submit--disabled');
      submitButton.disabled = false;
      checkbox.setAttribute('checked', true);
    }
  });
};



/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(105);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormMessage", function() { return getFormMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTextareaAutoHeight", function() { return setTextareaAutoHeight; });
/* harmony import */ var _form_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _form_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_scss__WEBPACK_IMPORTED_MODULE_0__);
 // автоматическая высота для textarea

function OnInput() {
  this.style.height = 'auto';
  this.style.height = `${this.scrollHeight}px`;
}

const setTextareaAutoHeight = area => {
  const textareas = document.querySelectorAll(`${area}`);
  textareas.forEach(element => {
    element.setAttribute('style', `height:${element.scrollHeight}px; overflow-y:hidden;`);
    element.addEventListener('input', OnInput);
  });
};

const getBackForm = evt => {
  if (evt.target.classList.contains('form__reset')) {
    const content = evt.currentTarget.querySelector('.form__content');
    const message = evt.currentTarget.querySelector('.form__fail');
    const form = evt.currentTarget.querySelector('form');
    const submitButton = evt.currentTarget.querySelector('button[type="submit"]');
    form.reset();
    submitButton.removeAttribute('disabled');
    content.classList.remove('form__content--hidden');
    message.classList.remove('form__visible');
    evt.currentTarget.removeEventListener('click', getBackForm);
  }
};

const getFormMessage = (form, bollean) => {
  const template = document.querySelector(form);
  const content = template.querySelector('.form__content');
  content.classList.add('form__content--hidden');

  if (bollean === true) {
    const message = template.querySelector('.form__greetings');
    message.classList.add('form__visible');
  } else {
    const message = template.querySelector('.form__fail');
    message.classList.add('form__visible');
    template.addEventListener('click', getBackForm);
  }
};



/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(111);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summonPopUp", function() { return summonPopUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePopUp", function() { return removePopUp; });
/* harmony import */ var _popUp_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _popUp_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_popUp_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);


const body = document.querySelector('body');
const activePopUps = [];

const summonPopUp = (template, fixer) => {
  const popUpName = template.slice(1);
  const templateContent = document.querySelector(`#${popUpName}`).content.cloneNode(true);
  const popup = templateContent.querySelector(`.${popUpName}`);
  const closes = popup.querySelectorAll('.popUp__close');
  activePopUps.push(popup);

  if (fixer === true) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingOnBody"])();
    popup.querySelector('.popUp__overlay').addEventListener('click', () => {
      popup.remove();
      activePopUps.pop();
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingFromBody"])();
    });
  }

  if (closes.length > 0) {
    closes.forEach(close => {
      close.addEventListener('click', () => {
        popup.remove();
        activePopUps.pop();

        if (fixer === true) {
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingFromBody"])();
        }
      });
    });
  }

  body.append(templateContent);
};

const removePopUp = (template, fixer) => {
  const templateContent = document.querySelector(`${template}`);

  if (fixer === true) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingFromBody"])();
  }

  templateContent.remove();
};

document.addEventListener('keydown', evt => {
  if (evt.code === 'Escape') {
    const lastActivePopUp = activePopUps.pop();

    if (lastActivePopUp !== undefined) {
      lastActivePopUp.remove();
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingFromBody"])();
    }
  }
});


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(114);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);
/* harmony import */ var _video_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_video_scss__WEBPACK_IMPORTED_MODULE_0__);


const generateURL = id => {
  const query = '?rel=0&showinfo=0&autoplay=1';
  return `https://www.youtube.com/embed/${id}${query}`;
};

const createIframe = id => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');
  return iframe;
};

const parseMediaURL = video => {
  const regexp = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/i;
  const url = video.href;
  const match = url.match(regexp);
  return match[1];
};

const setupVideo = video => {
  const link = video.querySelector('.video__link');
  const button = video.querySelector('.video__button');
  const source = video.querySelector('source');
  const media = video.querySelector('.video__media');
  const id = parseMediaURL(link);
  source.setAttribute('srcset', `https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`);
  media.setAttribute('src', `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  video.addEventListener('click', () => {
    const iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
  link.removeAttribute('href');
  video.classList.add('video--enabled');
};

const findVideos = () => {
  document.querySelectorAll('.video__wrapper').forEach(el => {
    setupVideo(el);
  });
};

findVideos();
/* harmony default export */ __webpack_exports__["default"] = (findVideos);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(117);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summonAlert", function() { return summonAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAlert", function() { return removeAlert; });
/* harmony import */ var _alert_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _alert_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alert_scss__WEBPACK_IMPORTED_MODULE_0__);
 // Логика для отрисовки инф.сообщений

const body = document.querySelector('.alert-wrapper');

const removeAllAlert = () => {
  const currentAlert = body.querySelectorAll('.alert');
  currentAlert.forEach(el => {
    el.remove();
  });
};

const removeAlert = template => {
  const templateContent = document.querySelector(`${template}`);
  templateContent.remove();
};

const summonAlert = template => {
  const alertName = template.slice(1);
  const templateContent = document.querySelector(`#${alertName}`).content.cloneNode(true);
  const alert = templateContent.querySelector(`.${alertName}`);
  const close = alert.querySelector('.alert__close');

  const hideAlert = () => {
    alert.classList.add('alert--back-bounce');
  };

  const closeAlert = () => {
    alert.remove();
  };

  if (close) {
    close.addEventListener('click', () => {
      closeAlert();
    });
  }

  removeAllAlert(); // Перед тем как показать новое сообщение, закрываем последнее.

  body.append(templateContent);
  alert.classList.add('alert--bounce');
  let h;
  let c;
  const hideAlertTimeout = setTimeout(() => {
    hideAlert();
  }, 10000);
  const closeAlertTimeout = setTimeout(() => {
    closeAlert();
  }, 12500);
  alert.addEventListener('mouseleave', () => {
    h = setTimeout(() => {
      hideAlert();
    }, 3000);
    c = setTimeout(() => {
      closeAlert();
    }, 5500);
  });
  alert.addEventListener('mouseenter', () => {
    clearTimeout(hideAlertTimeout);
    clearTimeout(closeAlertTimeout);
    clearTimeout(h);
    clearTimeout(c);
    alert.classList.remove('alert--back-bounce');
  });
};



/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(120);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _find_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _find_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_find_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(124);




const multiMapInit = data => {
  const find = document.querySelector('.find');

  if (find) {
    const select = document.querySelector('.find__select');
    const mapList = [];
    data.forEach((item, index) => {
      const map = {
        value: item.region,
        label: item.region,
        selected: false,
        disabled: false,
        customProperties: {
          id: index
        }
      };
      mapList.push(map);
    });
    const choicesNolint = new choices_js__WEBPACK_IMPORTED_MODULE_1___default.a(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      choices: mapList,
      classNames: {
        containerOuter: 'choices find__choices'
      }
    }); // Инициализация яндекс карт по классу ".find__map".

    const map = document.querySelector('.find__map');
    const tag = document.createElement('script');
    tag.src = 'https://api-maps.yandex.ru/2.1/?load=package.full&lang=ru-RU';
    const firstScriptTag = document.querySelector('script');
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    if (tag) {
      // Ждём пока скрипт полностью загрузится и только потом инициализируем карты
      tag.addEventListener('load', () => {
        const ymap = map.querySelector('.find__ymap');
        const locationList = find.querySelector('.find__location-list');
        /* eslint-disable */

        ymaps.ready(() => {
          const myMap = new ymaps.Map(ymap, {
            center: [40, 30],
            zoom: 13,
            controls: ['zoomControl']
          }, {
            balloonAutoPanMargin: 50
          });
          myMap.behaviors.disable('scrollZoom'); // Создание макета содержимого балуна.

          let placemark;
          let MyBalloonLayout;
          let MyBalloonContentLayout; // Макет создается с помощью фабрики макетов с помощью текстового шаблона.

          MyBalloonLayout = ymaps.templateLayoutFactory.createClass('<div class="find__balloon">' + '<a class="find__balloon-close" href="#"><span></span></a>' + '<div class="find__balloon-arrow"></div>' + '<div class="find__balloon-inner">' + '$[[options.contentLayout observeSize minWidth=235 maxWidth=300 maxHeight=350]]' + '</div>' + '</div>', {
            /**
             * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
             * @function
             * @name build
             */
            build: function () {
              this.constructor.superclass.build.call(this);
              this._$element = $('.find__balloon', this.getParentElement());
              this.applyElementOffset();

              this._$element.find('.find__balloon-close').on('click', $.proxy(this.onCloseClick, this));
            },

            /**
             * Удаляет содержимое макета из DOM.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
             * @function
             * @name clear
             */
            clear: function () {
              this._$element.find('.find__balloon-close').off('click');

              this.constructor.superclass.clear.call(this);
            },

            /**
             * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
             * @function
             * @name onSublayoutSizeChange
             */
            onSublayoutSizeChange: function () {
              MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

              if (!this._isElement(this._$element)) {
                return;
              }

              this.applyElementOffset();
              this.events.fire('shapechange');
            },

            /**
             * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
             * @function
             * @name applyElementOffset
             */
            applyElementOffset: function () {
              this._$element.css({
                left: -(this._$element[0].offsetWidth / 2),
                top: -(this._$element[0].offsetHeight + 20 + this._$element.find('.find__balloon-arrow')[0].offsetHeight)
              });
            },

            /**
             * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
             * @function
             * @name onCloseClick
             */
            onCloseClick: function (e) {
              e.preventDefault();
              this.events.fire('userclose');
            },
            onSubmitClick: function (e) {
              e.preventDefault();
              window.Corners5ProjectLayout.summonPopUp('#modal--contact', true);
              validatedForm = window.Corners5ProjectLayout.validation.validateForm('#where-2');
              window.Corners5ProjectLayout.validation.maskPhone('#where-2');
              window.Corners5ProjectLayout.setTextareaAutoHeight('#where-2 textarea.validator__texarea');
              const form = document.querySelector('#where-2');
              form.addEventListener('bouncerFormValid', () => {
                func();
                validatedForm.destroy();
                validatedForm = undefined;
              });
              this.events.fire('userclose');
            },

            /**
             * Используется для автопозиционирования (balloonAutoPan).
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
             * @function
             * @name getClientBounds
             * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
             */
            getShape: function () {
              if (!this._isElement(this._$element)) {
                return MyBalloonLayout.superclass.getShape.call(this);
              }

              var position = this._$element.position();

              return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[position.left, position.top], [position.left + this._$element[0].offsetWidth, position.top + this._$element[0].offsetHeight + this._$element.find('.find__balloon-arrow')[0].offsetHeight]]));
            },

            /**
             * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
             * @function
             * @private
             * @name _isElement
             * @param {jQuery} [element] Элемент.
             * @returns {Boolean} Флаг наличия.
             */
            _isElement: function (element) {
              return element && element[0] && element.find('.find__balloon-arrow')[0];
            }
          }); // Создание вложенного макета содержимого балуна.

          MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass('<p class="find__balloon-title">$[properties.balloonHeader]</p>' + '<div class="find__balloon-content">$[properties.balloonContent]</div>');
          let myGeoObjects;

          if (window.innerWidth >= 768) {
            myGeoObjects = new ymaps.GeoObjectCollection({}, {
              iconLayout: 'default#image',
              iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_2__["ENV"]}`]}map-pin.svg`,
              iconImageSize: [25, 35],
              iconImageOffset: [-13, -18]
            });
          } else {
            myGeoObjects = new ymaps.GeoObjectCollection({}, {
              iconLayout: 'default#image',
              iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_2__["ENV"]}`]}map-pin.svg`,
              iconImageSize: [18, 25],
              iconImageOffset: [-9, -13]
            });
          } // Функция создания списка городов.


          const renderCities = object => {
            locationList.innerHTML = '';

            for (let i = 0; i < object.length; i++) {
              const countPins = object[i].crd.length;
              const li = document.createElement('li'); // Проверка что город важен.

              const big = object[i].big;

              const checkBig = () => {
                if (big) {
                  return `find__location-link--big`;
                } else {
                  return ``;
                }
              }; // Проверка что город первый в списке.


              const setActive = () => {
                if (i === 0) {
                  return `find__location-link--active`;
                } else {
                  return ``;
                }
              };

              li.innerHTML = `<li class="find__location-item"><a href="#" class="find__location-link ${checkBig()} ${setActive()}">${object[i].city}<sup>${countPins}</sup></a></li>`;
              const itemMenu = locationList.appendChild(li.firstChild).querySelector('a'); // При клике на пункт из списка перерисовывает метки.

              itemMenu.addEventListener('click', evt => {
                evt.preventDefault();
                const activeCity = document.querySelector('.find__location-link--active');

                if (!itemMenu.classList.contains('find__location-link--active')) {
                  activeCity.classList.remove('find__location-link--active');
                  itemMenu.classList.add('find__location-link--active');
                  myGeoObjects.removeAll();
                  renderMarker(object[i]);
                } else {
                  return false;
                }
              });
            }
          }; // Функция создания метки и таблички с текстом.


          const renderMarker = object => {
            object.crd.forEach(el => {
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
                  balloonContentLayout: MyBalloonContentLayout // balloonPanelMaxMapArea: 0,

                });
              } else {
                placemark = new ymaps.Placemark([coorinateX, coorinateY], {
                  balloonHeader: `${mapName}`,
                  balloonContent: `${content}`
                }, {
                  balloonContentLayout: MyBalloonContentLayout // balloonPanelMaxMapArea: 0,

                });
              }

              myGeoObjects.add(placemark);
            }); // Добавление коллекции на карту.

            myMap.geoObjects.add(myGeoObjects); // Определяем сколько маркеров будет на карте.

            const count = object.crd.length;

            if (count > 1) {
              // Установка центра и масштаба карты таким образом, чтобы вся коллекция была видна.
              myMap.setBounds(myGeoObjects.getBounds()); // myMap.setZoom(13);
            } else {
              const coorinateX = object.crd[0].x;
              const coorinateY = object.crd[0].y;
              myMap.setCenter([`${coorinateX}`, `${coorinateY}`]);
              myMap.setZoom(16);
            }
          }; // Логика чтобы менять картинки шишки при наведении и клике.


          myGeoObjects.events.add('balloonopen', evt => {
            // При открытии балуна, задаём новую картинку для метки.
            evt.get('target').options.set('preset', {
              iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_2__["ENV"]}`]}map-pin--active.svg`
            });
          }).add('balloonclose', evt => {
            // При закрытии балуна, задаём старую картинку для метки.
            evt.get('target').options.unset('preset');
          }); // Рисуем первый объект из массива по умолчанию.

          renderMarker(data[0].location[0]); // Рисуем список городов из региона по умолчанию.

          renderCities(data[0].location); // Проходим по массиву и собираем всё в коллекцию.

          for (let i = 0; i < data[0].location.length; i++) {}

          select.addEventListener('addItem', event => {
            const indx = event.detail.customProperties.id;
            myGeoObjects.removeAll(); // Рисуем выбранный объект из массива по умолчанию.

            renderMarker(data[indx].location[0]); // Рисуем список городов из выбранного региона.

            renderCities(data[indx].location);
          });
        });
        /* eslint-enable */
      });
    }

    return choicesNolint;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (multiMapInit);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(123);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV", function() { return ENV; });
const ENV = window.location.origin.includes("192.168") || window.location.origin.includes("localhost") || window.location.origin.includes("html.5corners") ? "Local" : "Remote";

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _item_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_item_card_scss__WEBPACK_IMPORTED_MODULE_0__);
 // onkeypress='return event.charCode >= 48 && event.charCode <= 57'

const activateItemCards = () => {
  const cards = document.querySelectorAll('.item-card:not(.item-card--js)');
  cards.forEach(card => {
    if (!card.classList.contains('item-card--js')) {
      card.classList.add('item-card--js');
      const cartButton = card.querySelector('.item-card__cart');

      if (cartButton) {
        cartButton.addEventListener('click', () => {
          window.Corners5ProjectLayout.summonAlert('#alert--cart');
        });
      }

      const typeCountersCard = card.querySelectorAll('.packaging__count-buttons');
      typeCountersCard.forEach(typeCounter => {
        const plus = typeCounter.querySelector('.packaging__count-button--plus');
        const minus = typeCounter.querySelector('.packaging__count-button--minus');
        const input = typeCounter.querySelector('.packaging__count-input');
        const maxValue = parseInt(typeCounter.dataset.max, 10);
        let currentValue = parseInt(input.value, 10);

        const getBlockMinus = () => {
          if (input.value <= 1) {
            input.value = 1;
            currentValue = parseInt(input.value, 10);
            minus.setAttribute('disabled', 'disabled');
          } else {
            minus.removeAttribute('disabled');
          }
        };

        const getBlockPlus = () => {
          if (maxValue) {
            if (input.value >= maxValue) {
              input.value = maxValue;
              currentValue = parseInt(input.value, 10);
              plus.setAttribute('disabled', 'disabled');
            } else {
              plus.removeAttribute('disabled');
            }
          }
        };

        getBlockMinus();
        getBlockPlus();
        const changeCountInItemCardEvent = new CustomEvent('changeCountInItemCard', {
          bubbles: true,
          detail: {
            input
          }
        });
        plus.addEventListener('click', () => {
          currentValue += 1;
          input.value = currentValue;
          minus.removeAttribute('disabled');
          getBlockPlus();
          input.dispatchEvent(changeCountInItemCardEvent);
        });
        minus.addEventListener('click', () => {
          currentValue -= 1;
          input.value = currentValue;
          plus.removeAttribute('disabled');
          getBlockMinus();
          input.dispatchEvent(changeCountInItemCardEvent);
        });
        input.addEventListener('change', () => {
          currentValue = parseInt(input.value, 10);
          getBlockMinus();
          getBlockPlus();
          input.dispatchEvent(changeCountInItemCardEvent);
        });
      });
      const content = card.querySelector('.item-card__content');
      const type = content.querySelector('.packaging__type');

      if (type) {
        const typeHead = type.querySelector('.packaging__type-input');
        const typeItems = type.querySelectorAll('.packaging__type-item'); // const typeCounters = content.querySelectorAll('.packaging__count-item');
        // Скрывать выпадающий список когда убрали мышку.

        content.addEventListener('mouseleave', () => {
          type.classList.remove('packaging__type--active');
        }); // Показывать\скрывать выпадющий список по клику.

        typeHead.addEventListener('click', () => {
          type.classList.toggle('packaging__type--active');
        }); // Логика действий при выборе нового пункта из списка.

        typeItems.forEach((typeItem, index) => {
          typeItem.addEventListener('click', () => {
            const activeType = card.querySelector('.packaging__type-item--hide');

            if (activeType) {
              activeType.classList.remove('packaging__type-item--hide');
            }

            typeHead.textContent = typeItem.textContent;
            typeItem.classList.add('packaging__type-item--hide');
            type.classList.remove('packaging__type--active'); // const activeCounter = card.querySelector('.packaging__count-item--active');
            // if (activeCounter) {
            //   activeCounter.classList.remove('packaging__count-item--active');
            // }
            // typeCounters[index].classList.add('packaging__count-item--active');
          });
        });
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (activateItemCards);

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(127);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _question_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _question_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_question_card_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);



const questionSliderInit = () => {
  const questions = document.querySelectorAll('.question-card');
  questions.forEach((question, i) => {
    if (!question.classList.contains('question-card--js')) {
      question.classList.add('question-card--js');
      question.id = `question-card-${i}`;
      const id = `question-card-${i}`;
      const slider = question.querySelector('.question-card__slider .swiper');
      const questionSliderNolint = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["default"](slider, {
        modules: [swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Navigation"]],
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: false,
        // If we need navigation
        navigation: {
          nextEl: `#${id} .question-card__slider-button--next`,
          prevEl: `#${id} .question-card__slider-button--prev`,
          disabledClass: 'question-card__slider-button--disabled'
        }
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (questionSliderInit);

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(130);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warehouses_map_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(234);
/* harmony import */ var _warehouses_map_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_warehouses_map_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);



const warehousesMapInit = data => {
  const map = document.querySelector('.warehouses-map');

  if (map) {
    const body = document.querySelector('body');
    const citiesContainer = map.querySelector('.warehouses-map__cities');
    const stores = map.querySelectorAll('[data-code]');
    let citiesSlider; // Создаём подсказку.

    const hint = document.createElement('div');
    hint.classList.add('warehouses-map__hint'); // Получаем новый массив где будут регионы только со складами.

    const newData = data.filter(elem => elem.cities); // Объявляем массив куда будем собирать вообще все города для вывода на мобиле.

    let allCities = []; // Добавляет новый дата-атрибут с названием региона где есть склад.

    newData.forEach(el => {
      const store = map.querySelector(`[data-code="${el.code}"]`);

      if (store) {
        store.setAttribute('data-region', el.title); // Заполянем массив со всеми городами.

        allCities = [...allCities, ...el.cities]; // Это города только для выбранного региона.

        const cities = el.cities.join(', ');
        store.setAttribute('data-cities', cities);
      }
    });

    const clearRegion = () => {
      const activeRegions = map.querySelectorAll('.active');
      activeRegions.forEach(activeRegion => {
        activeRegion.classList.remove('active');
      });
    };

    const clearCitiesList = () => {
      document.querySelector('.warehouses-map__cities').textContent = '';

      if (citiesSlider) {
        citiesSlider.destroy();
        citiesSlider = undefined;
      }

      clearRegion();
    };

    const citiesSliderInit = info => {
      const sliderContainer = '<div class="swiper warehouses-map__slider"><div class="swiper-wrapper warehouses-map__list"></div></div><div class="warehouses-map__slider-footer"><button class="warehouses-map__slider-button warehouses-map__slider-button--prev" type="button" aria-label="Предыдущий слайд.">←</button><button class="warehouses-map__slider-button warehouses-map__slider-button--next" type="button" aria-label="Следующий слайд.">→</button><button class="warehouses-map__slider-reset" type="button" aria-label="Все города."><svg><use href="#icon-update"></use></svg><span>Сбросить города</span></button></div>';

      if (info.length > 0) {
        citiesContainer.innerHTML = sliderContainer;
        let citiesOnSlide = 7;

        if (window.innerWidth < 1261) {
          citiesOnSlide = 4;
        }

        window.addEventListener('resize', () => {
          if (window.innerWidth < 1261) {
            citiesOnSlide = 4;
          }
        });
        const totalSlides = Math.ceil(info.length / citiesOnSlide);

        for (let i = 0; i < totalSlides; i += 1) {
          const start = i * citiesOnSlide;
          const end = start + citiesOnSlide;
          const names = info.slice(start, end);
          const swiperSlide = document.createElement('div');
          swiperSlide.classList.add('swiper-slide', 'warehouses-map__item');

          for (let j = 0; j < names.length; j += 1) {
            const item = document.createElement('div');
            item.classList.add('warehouses-map__city');
            item.textContent = names[j];
            swiperSlide.appendChild(item);
          }

          map.querySelector('.warehouses-map__list').appendChild(swiperSlide);
        }

        citiesSlider = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["default"]('.warehouses-map__slider', {
          modules: [swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Navigation"]],
          slidesPerView: 2,
          spaceBetween: 10,
          loop: false,
          // Navigation arrows
          navigation: {
            prevEl: '.warehouses-map__slider-button--prev',
            nextEl: '.warehouses-map__slider-button--next',
            disabledClass: 'warehouses-map__slider-button--disabled'
          }
        }); // Сброс выбора региона.

        const resetButton = map.querySelector('.warehouses-map__slider-reset');
        resetButton.addEventListener('click', evt => {
          clearCitiesList();
          citiesSliderInit(allCities);
        });
      }
    }; // Выводим все города при старте.


    clearCitiesList();
    citiesSliderInit(allCities); // Логика для отрисовки новых городов при выборе региона.

    stores.forEach(store => {
      store.addEventListener('mouseenter', () => {
        if (store.dataset.region) {
          hint.textContent = store.dataset.region; // getCitiesList(store.dataset.cities);
        } else {
          hint.textContent = 'Скоро';
        }

        const left = store.getBoundingClientRect().left + store.getBoundingClientRect().width / 2;
        const top = store.getBoundingClientRect().top + store.getBoundingClientRect().height / 2;
        hint.style.top = `${top}px`;
        hint.style.left = `${left}px`;
        body.appendChild(hint);
      });
      store.addEventListener('mouseleave', () => {
        hint.remove();
      });
      store.addEventListener('click', () => {
        if (store.dataset.region) {
          clearCitiesList();
          const list = store.dataset.cities.split(',');
          citiesSliderInit(list);
          store.classList.add('active');
        }
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (warehousesMapInit);

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(235);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_center_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(237);
/* harmony import */ var _profile_center_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_profile_center_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_1__);



const initProfileSelect = func => {
  const select = document.querySelector('.profile-center__select');
  let choicesNolint;

  if (select) {
    choicesNolint = new choices_js__WEBPACK_IMPORTED_MODULE_1___default.a(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      classNames: {
        containerOuter: 'choices profile-center__choices'
      }
    });
    select.addEventListener('addItem', event => {
      func(event);
    });
  }

  return choicesNolint;
};

/* harmony default export */ __webpack_exports__["default"] = (initProfileSelect);

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(238);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modal_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_1__);



const initCitySelect = func => {
  const select = document.querySelector('.modal__select');
  let choicesNolint;

  if (select) {
    choicesNolint = new choices_js__WEBPACK_IMPORTED_MODULE_1___default.a(select, {
      searchEnabled: true,
      itemSelectText: '',
      shouldSort: false,
      loadingText: 'Loading...',
      noResultsText: 'Ничего не найдено',
      noChoicesText: 'Ничего не выбрано',
      classNames: {
        containerOuter: 'choices modal__choices'
      }
    });
    select.addEventListener('addItem', event => {
      func(event);
    });
  }

  return choicesNolint;
};

/* harmony default export */ __webpack_exports__["default"] = (initCitySelect);

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(241);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summonPromotionAlert", function() { return summonPromotionAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePromotionAlert", function() { return removePromotionAlert; });
/* harmony import */ var _promotion_alert_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(243);
/* harmony import */ var _promotion_alert_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_promotion_alert_scss__WEBPACK_IMPORTED_MODULE_0__);
 // Логика для отрисовки инф.сообщений

const body = document.querySelector('.alert-wrapper');

const removePromotionAlert = template => {
  const templateContent = document.querySelector(`${template}`);
  templateContent.remove();
};

const summonPromotionAlert = template => {
  const alertName = template.slice(1);
  const templateContent = document.querySelector(`#${alertName}`).content.cloneNode(true);
  const alert = templateContent.querySelector(`.${alertName}`);
  const close = alert.querySelector('.promotion-alert__close');

  const closeAlert = () => {
    alert.remove();
  };

  if (close) {
    close.addEventListener('click', () => {
      closeAlert();
    });
  }

  body.append(templateContent);
  alert.classList.add('promotion-alert--bounce');
};



/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(244);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLoading", function() { return addLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLoading", function() { return removeLoading; });
/* harmony import */ var _loading_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(246);
/* harmony import */ var _loading_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loading_scss__WEBPACK_IMPORTED_MODULE_0__);


const addLoading = container => {
  const template = '<div class="loading"><div class="loading__spin"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="#EEEFF0"/><path d="M22.8949 13.9986C22.6536 12.262 21.848 10.6529 20.6022 9.41917C19.3563 8.18546 17.7394 7.39558 16.0005 7.1712C14.2616 6.94683 12.4972 7.30041 10.979 8.17748C9.46084 9.05455 8.27315 10.4064 7.59889 12.0249M7.10547 8.07757V12.0249H11.0528" stroke="#7F8899" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.10547 15.9727C7.34681 17.7093 8.15244 19.3184 9.39826 20.5521C10.6441 21.7858 12.261 22.5757 13.9999 22.8001C15.7388 23.0244 17.5032 22.6709 19.0214 21.7938C20.5396 20.9167 21.7273 19.5648 22.4015 17.9463M22.8949 21.8937V17.9463H18.9476" stroke="#7F8899" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>';
  const div = document.createElement('div');
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
  document.querySelectorAll('.loading').forEach(el => {
    el.remove();
  });
};



/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(247);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_city_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(249);
/* harmony import */ var _select_city_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_select_city_scss__WEBPACK_IMPORTED_MODULE_0__);


const selectCityInit = () => {
  const selectCity = document.querySelector('.select-city');

  if (selectCity) {
    const geolocationText = document.querySelector('.header__geolocation-text');
    const geolocationTextMobile = document.querySelector('.mobile-nav__geolocation-text');
    const list = selectCity.querySelector('.select-city__list');
    const items = list.children;
    const inputCity = selectCity.querySelector('.select-city__input');
    inputCity.addEventListener('input', () => {
      const value = inputCity.value.toLowerCase();

      for (let i = 0; i < items.length; i += 1) {
        const name = items[i].querySelector('span').textContent.toLowerCase();

        if (name.includes(value)) {
          items[i].classList.remove('select-city__item--hidden');
        } else {
          items[i].classList.add('select-city__item--hidden');
        }
      }
    });
    const changeCityEvent = new CustomEvent('changeCity', {
      bubbles: true,
      detail: {
        geolocationText
      }
    });

    for (let i = 0; i < items.length; i += 1) {
      items[i].addEventListener('click', evt => {
        evt.preventDefault();
        geolocationText.textContent = items[i].querySelector('span').textContent;
        geolocationTextMobile.textContent = items[i].querySelector('span').textContent;
        window.Corners5ProjectLayout.removePopUp('.modal--city', true);
        geolocationText.dispatchEvent(changeCityEvent);
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (selectCityInit);

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(250);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compare_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(252);
/* harmony import */ var _compare_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_compare_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(254);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(257);
/* harmony import */ var swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(131);




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

const compareLogicInit = func => {
  const compare = document.querySelector('.compare'); // Слайдер с описанием.

  let compareScoringSlider;
  let compareFloatSlider;
  let compareProductSlider;
  compareScoringSlider = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_3__["default"]('.compare__scoring-block', {
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
  }); // Слайдер с мелкими карточками товаров.

  compareFloatSlider = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_3__["default"]('.compare__float-slider', {
    modules: [swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_3__["Navigation"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_3__["Pagination"]],
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
      prevEl: '.compare__float .compare__slider-button--prev',
      nextEl: '.compare__float .compare__slider-button--next',
      disabledClass: 'compare__slider-button--disabled'
    },
    on: {
      slideChange: () => {
        compareScoringSlider.forEach(slider => {
          slider.slideTo(compareFloatSlider.activeIndex, 0, false);
        });
        compareProductSlider.slideTo(compareFloatSlider.activeIndex, 0, false);
      }
    },
    // Responsive breakpoints
    breakpoints: breakPoints
  }); // Слайдер с карточкой товара.

  compareProductSlider = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_3__["default"]('.compare__products-slider', {
    modules: [swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_3__["Navigation"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_3__["Pagination"]],
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
      prevEl: '.compare__nav .compare__slider-button--prev',
      nextEl: '.compare__nav .compare__slider-button--next',
      disabledClass: 'compare__slider-button--disabled'
    },
    on: {
      slideChange: () => {
        compareScoringSlider.forEach(slider => {
          slider.slideTo(compareProductSlider.activeIndex, 0, false);
        });
        compareFloatSlider.slideTo(compareProductSlider.activeIndex, 0, false);
      }
    },
    // Responsive breakpoints
    breakpoints: breakPoints
  }); // Функция чтобы найти одинаковые значения в описании.

  const checkEquality = array => array.every((e, i, a) => e === a[0]);

  const hide = () => {
    const scoringBlock = compare.querySelectorAll('.compare__scoring-block');
    scoringBlock.forEach(block => {
      const cells = block.querySelectorAll('.compare__scoring-item p');
      const values = [];
      cells.forEach(cell => {
        values.push(cell.textContent);
      });

      if (checkEquality(values)) {
        block.classList.add('compare__scoring-block--hide');
      } else {
        block.classList.remove('compare__scoring-block--hide');
      }
    });
  };

  const show = () => {
    compare.querySelectorAll('.compare__scoring-block--hide').forEach(el => {
      el.classList.remove('compare__scoring-block--hide');
    });
  };

  const all = compare.querySelector('.compare__filter-button--all');
  const diff = compare.querySelector('.compare__filter-button--diff');
  all.addEventListener('click', () => {
    if (!all.classList.contains('compare__filter-button--active')) {
      compare.querySelectorAll('.compare__filter-button--active').forEach(el => {
        el.classList.remove('compare__filter-button--active');
      });
      all.classList.add('compare__filter-button--active');
      show();
    }
  });
  diff.addEventListener('click', () => {
    if (!diff.classList.contains('compare__filter-button--active')) {
      compare.querySelectorAll('.compare__filter-button--active').forEach(el => {
        el.classList.remove('compare__filter-button--active');
      });
      diff.classList.add('compare__filter-button--active');
      hide();
    }
  });
  const productsSliderList = compare.querySelector('.compare__products-list');
  const productsSliderItems = productsSliderList.children;
  const floatSliderList = compare.querySelector('.compare__float-list');
  const floatSliderItems = floatSliderList.children;
  const scoringSliderLists = compare.querySelectorAll('.compare__scoring-list');

  for (let i = 0; i < productsSliderItems.length; i += 1) {
    const productsItem = productsSliderItems[i];
    const floatItem = floatSliderItems[i]; // Создаём массив и заполняем его элементами по вертикали.

    const croringItems = [];
    scoringSliderLists.forEach(scoringSliderList => {
      const scoringSliderItems = scoringSliderList.children;
      croringItems.push(scoringSliderItems[i]);
    });
    const deleteButton = productsItem.querySelector('.compare__slider-delete');
    deleteButton.addEventListener('click', () => {
      func(); // Функция кодера.

      productsItem.remove();
      compareProductSlider.update();
      floatItem.remove();
      compareFloatSlider.update();
      croringItems.forEach(croringItem => {
        croringItem.remove();
      });
    });
  }
};

gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]);
const products = document.querySelector('.compare__products');
const float = document.querySelector('.compare__float');

if (products && float) {
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].create({
    trigger: products,
    duration: 2,
    onEnter: () => {
      float.classList.remove('compare__float--fixed');
    },
    onEnterBack: () => {
      float.classList.remove('compare__float--fixed');
    },
    onLeave: () => {
      float.classList.add('compare__float--fixed');
    },
    onLeaveBack: () => {
      float.classList.add('compare__float--fixed');
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (compareLogicInit);

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(253);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bx_soa_order_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _bx_soa_order_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bx_soa_order_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_1__);



const initBxSoaOrderSelect = (container, func) => {
  const select = container;
  let choicesNolint;

  if (select) {
    choicesNolint = new choices_js__WEBPACK_IMPORTED_MODULE_1___default.a(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false
    });
    select.addEventListener('addItem', event => {
      func(event);
    });
  }

  return choicesNolint;
};

/* harmony default export */ __webpack_exports__["default"] = (initBxSoaOrderSelect);

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(261);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cookie_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263);
/* harmony import */ var _cookie_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cookie_scss__WEBPACK_IMPORTED_MODULE_0__);


const setCookie = (name, value) => {
  const updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=/;max-age=31536000;`;
  document.cookie = updatedCookie;
};

const getCookie = name => {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const showMessage = () => {
  window.Corners5ProjectLayout.summonPopUp('#cookie', false);
  const closeButton = document.querySelector('.cookie__button');
  closeButton.addEventListener('click', () => {
    setCookie('agreeCookie', true);
  });
};

const cookie = () => {
  const result = getCookie('agreeCookie');

  if (result === undefined) {
    showMessage();
  }
};

cookie();

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(264);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _up_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(266);
/* harmony import */ var _up_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_up_scss__WEBPACK_IMPORTED_MODULE_0__);

const up = document.querySelector('.up');
const scrollableHeight = 300;
const changeTextHeight = document.documentElement.clientHeight;

if (up) {
  let scrollChecker;
  const textContainer = up.querySelector('.up__text');
  up.addEventListener('click', () => {
    window.scroll(0, 0);
  });

  if (window.innerWidth < 768) {
    textContainer.textContent = 'Наверх';
  }

  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= scrollableHeight) {
      up.classList.add('up--visible');
    } else {
      up.classList.remove('up--visible');
    }

    if (window.pageYOffset >= changeTextHeight && window.innerWidth > 767 && !scrollChecker) {
      textContainer.textContent = '← Наверх';
      scrollChecker = true;
    } else if (window.pageYOffset < changeTextHeight && window.innerWidth > 767 && scrollChecker) {
      textContainer.textContent = 'Скролл';
      scrollChecker = false;
    }
  });
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = winScroll / height * 100;
    document.querySelector('.up__progress-bar').style.height = `${scrolled}%`;
  });
}

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(267);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(269);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(270);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pagination_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(273);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _outdated_browsers_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(275);
/* harmony import */ var _outdated_browsers_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_outdated_browsers_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(276);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(278);
/* harmony import */ var _accordion_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_accordion_scss__WEBPACK_IMPORTED_MODULE_0__);

const accordions = document.querySelectorAll('.accordion');

if (accordions) {
  accordions.forEach(accordion => {
    const header = document.querySelector('header');
    const accordionPosition = accordion.getBoundingClientRect();
    const accordionPositionY = accordionPosition.y;
    const button = accordion.querySelector('.accordion__header');
    const inner = accordion.querySelector('.accordion__inner');

    const getHeaderHeight = () => {
      if (header) {
        return header.offsetHeight;
      }

      return '0';
    };

    const scroll = accordionPositionY - getHeaderHeight();
    button.addEventListener('click', () => {
      // Проверяем открыт ли блок, по которому кликнули.
      if (accordion.classList.contains('accordion--active')) {
        accordion.classList.remove('accordion--active');
        inner.style.maxHeight = '';
      } else {
        // Находим все открытые блоки чтобы скрыть их.
        document.querySelectorAll('.accordion--active').forEach(item => {
          const activeAccordion = item;
          activeAccordion.classList.remove('accordion--active');
          item.querySelector('.accordion__inner').style.maxHeight = '';
        });
        accordion.classList.add('accordion--active');
        inner.style.maxHeight = `${inner.scrollHeight}px`;
        window.scrollTo(0, scroll);
      }
    });
  });
}

window.addEventListener('load', () => {
  const activeAccordions = document.querySelectorAll('.accordion--active');

  if (activeAccordions) {
    activeAccordions.forEach(accordion => {
      const inner = accordion.querySelector('.accordion__inner');
      inner.style.maxHeight = `${inner.scrollHeight}px`;
    });
  }
});

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(279);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swiper_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _swiper_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_swiper_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(282);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bx_filter_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);
/* harmony import */ var _bx_filter_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bx_filter_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(285);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(287);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(103);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);



const header = document.querySelector('.header');

if (header) {
  // Скрывает шапку при скроле вниз
  const hideHeaderOnMove = () => {
    let scrollPosition = 0;
    let hideChecker = 0;
    let showChecker = 0;
    window.addEventListener('scroll', () => {
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
        header.classList.remove('header--hidden');
        hideChecker = 0;
      } else if (hideChecker >= 300) {
        header.classList.add('header--hidden');
      }
    });
  };

  hideHeaderOnMove();
  const burger = header.querySelector('.header__burger');
  const overlay = header.querySelector('.header__overlay');
  burger.addEventListener('click', () => {
    if (header.classList.contains('header--dropdown')) {
      header.classList.remove('header--dropdown');
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getPaddingFromBody"])();
    } else {
      header.classList.add('header--dropdown');
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getPaddingOnBody"])();
    }
  });
  overlay.addEventListener('click', () => {
    header.classList.remove('header--dropdown');
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getPaddingFromBody"])();
  });
}

const search = document.querySelector('.header-search');

if (search) {
  Object(_validator_validator__WEBPACK_IMPORTED_MODULE_1__["validateForm"])('.header-search__form');
}

if (header) {
  if (header.classList.contains('header--transparent')) {
    const checkHeaderColor = () => {
      if (window.pageYOffset !== 0) {
        // header.classList.remove('header--transparent');
        header.classList.add('header--white');
      } else {
        // header.classList.add('header--transparent');
        header.classList.remove('header--white');
      }
    };

    checkHeaderColor();
    window.addEventListener('scroll', () => {
      checkHeaderColor();
    }); // header.addEventListener('mouseenter', () => {
    //   if (
    //     header.classList.contains('header--transparent')
    //     && window.pageYOffset === 0
    //   ) {
    //     header.classList.remove('header--transparent');
    //   }
    // });
    // header.addEventListener('mouseleave', () => {
    //   if (window.pageYOffset === 0) {
    //     header.classList.add('header--transparent');
    //   }
    // });
  }
}

const headerProfile = document.querySelector('.header__button--profile');

if (headerProfile) {
  headerProfile.addEventListener('click', evt => {
    evt.preventDefault();
    window.LoginProvider.setOpenPhone(true);
  });
} // Визуальный шум на фоне.


const noiseCanvas = document.querySelector('.header__noise-canvas');

if (noiseCanvas) {
  const patternSize = 150;
  const patternScaleX = 1;
  const patternScaleY = 1;
  const canvas = document.querySelector('.header__noise-canvas');
  const ctx = canvas.getContext('2d');
  ctx.scale(patternScaleX, patternScaleY);
  const patternCanvas = document.createElement('canvas');
  patternCanvas.width = patternSize;
  patternCanvas.height = patternSize;
  const patternCtx = patternCanvas.getContext('2d');
  const patternData = patternCtx.createImageData(patternSize, patternSize);
  const patternPixelDataLength = patternSize * patternSize * 8; // rgba = 4

  const resize = () => {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
  };

  resize();
  window.addEventListener('resize', resize);

  const draw = () => {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height); // fill the canvas using the pattern

    ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
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

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(288);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_search_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(290);
/* harmony import */ var _header_search_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_search_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);



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
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingOnBody"])();
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 100);
    setTimeout(() => {
      header.classList.remove('header--dropdown');
    }, 300);
  };

  const closeSearch = () => {
    search.classList.remove('header__search--active');
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingFromBody"])();
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
      wrapper.style.paddingRight = `${Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getScrollbarWidth"])()}px`;
    };

    updatePadding();
    window.addEventListener('resize', updatePadding);
  }
};

initHeaderSearch();

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(291);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(293);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(103);


const subscribe = document.querySelector('.footer__subscribe');

if (subscribe) {
  Object(_validator_validator__WEBPACK_IMPORTED_MODULE_1__["validateForm"])('.footer__subscribe');
}

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(294);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breadcrumbs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296);
/* harmony import */ var _breadcrumbs_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_breadcrumbs_scss__WEBPACK_IMPORTED_MODULE_0__);

const breadcrumbs = document.querySelector('.breadcrumbs');

if (breadcrumbs) {
  breadcrumbs.querySelector('.breadcrumbs__list').scrollTo(3000, 0);
}

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(297);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _title_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(299);
/* harmony import */ var _title_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_title_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(300);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_wrapper_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(302);
/* harmony import */ var _alert_wrapper_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alert_wrapper_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(303);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(305);
/* harmony import */ var _map_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_map_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(124);

 // Инициализация яндекс карт по классу ".map".

const map = document.querySelectorAll('.map');

if (map.length > 0) {
  const tag = document.createElement('script');
  tag.src = 'https://api-maps.yandex.ru/2.1/?load=package.full&lang=ru-RU';
  const firstScriptTag = document.querySelector('script');
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  if (tag) {
    // Ждём пока скрипт полностью загрузится и только потом инициализируем карты
    tag.addEventListener('load', () => {
      map.forEach(el => {
        const coorinateX = parseFloat(el.getAttribute('data-coordinatex'));
        const coorinateY = parseFloat(el.getAttribute('data-coordinatey'));
        const mapName = el.getAttribute('data-name');
        const mapHint = el.getAttribute('data-hint');
        const ymap = el.querySelector('.map__ymap');
        /* eslint-disable */

        ymaps.ready(() => {
          const myMap = new ymaps.Map(ymap, {
            center: [coorinateX, coorinateY],
            zoom: 16,
            controls: ['zoomControl']
          }, {
            searchControlProvider: 'yandex#search'
          });
          myMap.behaviors.disable('scrollZoom'); // Создание макета содержимого балуна.
          // Макет создается с помощью фабрики макетов с помощью текстового шаблона.

          let placemark;
          let MyBalloonLayout;
          let MyBalloonContentLayout; // При ширине 488 окно с подсказкой уходит вниз и для него нужны свои обработчики.

          if (window.innerWidth >= 488) {
            MyBalloonLayout = ymaps.templateLayoutFactory.createClass('<div class="map__balloon">' + '<a class="map__balloon-close" href="#"><span></span></a>' + '<div class="map__balloon-arrow"></div>' + '<div class="map__balloon-inner">' + '$[[options.contentLayout observeSize minWidth=235 maxWidth=300 maxHeight=350]]' + '</div>' + '</div>', {
              /**
               * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
               * @function
               * @name build
               */
              build: function () {
                this.constructor.superclass.build.call(this);
                this._$element = $('.map__balloon', this.getParentElement());
                this.applyElementOffset();

                this._$element.find('.map__balloon-close').on('click', $.proxy(this.onCloseClick, this));
              },

              /**
               * Удаляет содержимое макета из DOM.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
               * @function
               * @name clear
               */
              clear: function () {
                this._$element.find('.map__balloon-close').off('click');

                this.constructor.superclass.clear.call(this);
              },

              /**
               * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
               * @function
               * @name onSublayoutSizeChange
               */
              onSublayoutSizeChange: function () {
                MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                if (!this._isElement(this._$element)) {
                  return;
                }

                this.applyElementOffset();
                this.events.fire('shapechange');
              },

              /**
               * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
               * @function
               * @name applyElementOffset
               */
              applyElementOffset: function () {
                this._$element.css({
                  left: -(this._$element[0].offsetWidth / 2),
                  top: -(this._$element[0].offsetHeight + 20 + this._$element.find('.map__balloon-arrow')[0].offsetHeight)
                });
              },

              /**
               * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
               * @function
               * @name onCloseClick
               */
              onCloseClick: function (e) {
                e.preventDefault();
                this.events.fire('userclose');
              },
              onSubmitClick: function (e) {
                e.preventDefault();
                window.Corners5ProjectLayout.summonPopUp('#modal--contact', true);
                validatedForm = window.Corners5ProjectLayout.validation.validateForm('#where-2');
                window.Corners5ProjectLayout.validation.maskPhone('#where-2');
                window.Corners5ProjectLayout.setTextareaAutoHeight('#where-2 textarea.validator__texarea');
                const form = document.querySelector('#where-2');
                form.addEventListener('bouncerFormValid', () => {
                  func();
                  validatedForm.destroy();
                  validatedForm = undefined;
                });
                this.events.fire('userclose');
              },

              /**
               * Используется для автопозиционирования (balloonAutoPan).
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
               * @function
               * @name getClientBounds
               * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
               */
              getShape: function () {
                if (!this._isElement(this._$element)) {
                  return MyBalloonLayout.superclass.getShape.call(this);
                }

                var position = this._$element.position();

                return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[position.left, position.top], [position.left + this._$element[0].offsetWidth, position.top + this._$element[0].offsetHeight + this._$element.find('.map__balloon-arrow')[0].offsetHeight]]));
              },

              /**
               * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
               * @function
               * @private
               * @name _isElement
               * @param {jQuery} [element] Элемент.
               * @returns {Boolean} Флаг наличия.
               */
              _isElement: function (element) {
                return element && element[0] && element.find('.map__balloon-arrow')[0];
              }
            }); // Создание вложенного макета содержимого балуна.

            MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass('<p class="map__balloon-title">$[properties.balloonHeader]</p>' + '<p class="map__balloon-city">$[properties.balloonContent]</p>');
          } else {
            // Создание вложенного макета содержимого балуна.
            MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass('<p class="map__balloon-title">$[properties.balloonHeader]</p>' + '<p class="map__balloon-city">$[properties.balloonContent]</p>', {});
          }

          const myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_1__["ENV"]}`]}map-pin.svg`,
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
              balloonContentLayout: MyBalloonContentLayout // balloonPanelMaxMapArea: 0,

            });
          } else {
            placemark = new ymaps.Placemark([coorinateX, coorinateY], {
              balloonHeader: `${mapName}`,
              balloonContent: `${mapHint}`
            }, {
              balloonContentLayout: MyBalloonContentLayout // balloonPanelMaxMapArea: 0,

            });
          }

          myCollection.add(placemark); // Обработчик на открытие балута, переключает селект на нужный пункт.

          placemark.events.add('balloonopen', evt => {
            // При открытии балуна, задаём новую картинку для метки.
            evt.get('target').options.set('preset', {
              iconImageHref: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_1__["ENV"]}`]}map-pin--active.svg`
            });
          });
          placemark.events.add('balloonclose', evt => {
            // При закрытии балуна, задаём старую картинку для метки.
            evt.get('target').options.unset('preset');
          }); // Добавление коллекции на карту.

          myMap.geoObjects.add(myCollection);
        });
        /* eslint-enable */
      });
    });
  }
}

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(306);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_padding_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308);
/* harmony import */ var _header_padding_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_padding_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(309);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_dropdown_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/* harmony import */ var _header_dropdown_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_dropdown_scss__WEBPACK_IMPORTED_MODULE_0__);

const header = document.querySelector('.header');
const dropdownUser = document.querySelector('.header-dropdown__user--profile');

if (dropdownUser) {
  dropdownUser.addEventListener('click', evt => {
    evt.preventDefault();
    window.LoginProvider.setOpenPhone(true);
    header.classList.remove('header--dropdown');
  });
}

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(312);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _socials_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(314);
/* harmony import */ var _socials_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_socials_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(315);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mobile_nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(317);
/* harmony import */ var _mobile_nav_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mobile_nav_scss__WEBPACK_IMPORTED_MODULE_0__);

const buttons = document.querySelectorAll('.mobile-nav__sub-toggle');
buttons.forEach(button => {
  const parent = button.parentElement;
  const container = button.nextElementSibling;
  button.addEventListener('click', () => {
    if (!parent.classList.contains('mobile-nav__item--active')) {
      parent.classList.add('mobile-nav__item--active');
      container.style.maxHeight = `${container.scrollHeight}px`;
    } else {
      parent.classList.remove('mobile-nav__item--active');
      container.style.maxHeight = null;
    }
  });
});

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(318);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _marker_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(320);
/* harmony import */ var _marker_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_marker_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(254);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(257);



gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]);
const markers = document.querySelectorAll('.marker');
markers.forEach(marker => {
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].create({
    trigger: marker,
    start: 'top 80%',
    end: 'bottom top',
    duration: 2,
    onEnter: () => {
      marker.classList.add('marker--show');
    }
  });
});

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(321);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _promo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(323);
/* harmony import */ var _promo_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_promo_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);

 // Слайдер.

const doubleSlider = document.querySelector('.promo');

if (doubleSlider) {
  // Инициализация слайдера с текстом.
  const swiperNavNolint = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["default"]('.promo__names-slider', {
    modules: [swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Navigation"]],
    loop: true,
    allowTouchMove: false,
    // spaceBetween: 50,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    slideActiveClass: 'promo__names-item--active',
    // If we need navigation
    navigation: {
      prevEl: '.promo__pictures-button--prev',
      nextEl: '.promo__pictures-button--next'
    } // Responsive breakpoints
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

  }); // Инициализация слайдера для картинок.

  const doubleSliderDesktopNolint = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["default"]('.promo__pictures-slider', {
    modules: [swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Thumbs"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["EffectFade"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Autoplay"]],
    allowTouchMove: false,
    loop: true,
    slideActiveClass: 'promo__pictures-item--active',
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true // reverseDirection: true,

    },
    // If we need navigation
    navigation: {
      prevEl: '.promo__pictures-button--prev',
      nextEl: '.promo__pictures-button--next'
    },
    thumbs: {
      swiper: swiperNavNolint
    }
  });
} // Визуальный шум на фоне.


const noiseCanvas = document.querySelector('.promo__noise-canvas');

if (noiseCanvas) {
  const patternSize = 150;
  const patternScaleX = 1;
  const patternScaleY = 1;
  const canvas = document.querySelector('.promo__noise-canvas');
  const ctx = canvas.getContext('2d');
  ctx.scale(patternScaleX, patternScaleY);
  const patternCanvas = document.createElement('canvas');
  patternCanvas.width = patternSize;
  patternCanvas.height = patternSize;
  const patternCtx = patternCanvas.getContext('2d');
  const patternData = patternCtx.createImageData(patternSize, patternSize);
  const patternPixelDataLength = patternSize * patternSize * 8; // rgba = 4

  const resize = () => {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
  };

  resize();
  window.addEventListener('resize', resize);

  const draw = () => {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height); // fill the canvas using the pattern

    ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
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

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(324);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_about_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(328);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);


aos__WEBPACK_IMPORTED_MODULE_1___default.a.init({
  once: true
});

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(327);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 328 */,
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(330);
/* harmony import */ var _products_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_products_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(254);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(257);



gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]);
const columns = document.querySelectorAll('.products__item');
const translateY = [60, -50, 20, 70, -40];
columns.forEach((column, i) => {
  const translate = translateY[i];
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].saveStyles(column);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].matchMedia({
    // desktop
    '(min-width: 992px)': function () {
      gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].to(column, {
        scrollTrigger: {
          trigger: column,
          start: 'top bottom',
          end: '80% top',
          scrub: 2
        },
        y: translate
      });
    },
    // mobile
    '(max-width: 767px)': function () {// Any ScrollTriggers created inside these functions are segregated and get
      // reverted/killed when the media query doesn't match anymore.
    },

    // all
    all() {// ScrollTriggers created here aren't associated with a particular media query,
      // so they persist.
    }

  });
}); // Функция чтобы находить элементы, определённого порядка.
// const getEvery = (arr, gap) => Array.from(
//   { length: Math.floor(arr.length / gap) },
//   (_, i) => arr[i * gap + gap - 1],
// );
// console.log(getEvery(columns, 5));

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(331);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _how_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(333);
/* harmony import */ var _how_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_how_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(254);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(257);



gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]);
const columns = document.querySelectorAll('.how__card-item');
const translateY = [0, 60, 120, 180];
columns.forEach((column, i) => {
  const translate = translateY[i];
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].saveStyles(column);
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].matchMedia({
    // desktop
    '(min-width: 992px)': function () {
      gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(column, {
        scrollTrigger: {
          trigger: column,
          start: 'top 80%',
          end: 'bottom 50%'
        },
        y: translate,
        duration: 1.5
      });
    },
    // mobile
    '(max-width: 767px)': function () {// Any ScrollTriggers created inside these functions are segregated and get
      // reverted/killed when the media query doesn't match anymore.
    },

    // all
    all() {// ScrollTriggers created here aren't associated with a particular media query,
      // so they persist.
    }

  });
});

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(334);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warehouses_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _warehouses_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_warehouses_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(337);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categories_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(339);
/* harmony import */ var _categories_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_categories_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(254);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(257);



gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]);
const categories = document.querySelector('.categories');

if (categories) {
  const columns = categories.querySelectorAll('.categories__block');
  const tabs = categories.querySelectorAll('.categories__nav-item');
  const bars = categories.querySelectorAll('.categories__progress-bar');
  const links = categories.querySelectorAll('.categories__nav-name');
  links.forEach(link => {
    link.addEventListener('click', evt => {
      if (window.innerWidth < 992) {
        evt.preventDefault();
      }
    });
  });
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        const activeTab = document.querySelector('.categories__nav-item--active');
        const activeTabContainer = document.querySelector('.categories__block--active');

        if (!tab.classList.contains('categories__nav-item--active')) {
          activeTab.classList.remove('categories__nav-item--active');
          activeTabContainer.classList.remove('categories__block--active');
          tab.classList.add('categories__nav-item--active');
          columns[index].classList.add('categories__block--active');
        }
      }
    });
  });
  columns.forEach((column, i) => {
    const cards = column.querySelectorAll('.item-card');
    const evenCards = Array.from(cards).filter((elem, k) => k % 2 !== 0);
    const oddCards = Array.from(cards).filter((elem, k) => k % 2 === 0);
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].saveStyles(column);
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].matchMedia({
      // desktop
      '(min-width: 992px)': function () {
        gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].to(column, {
          scrollTrigger: {
            trigger: column,
            start: '-60px 30%',
            // end: () => `+=${column.offsetHeight}`,
            end: 'bottom 30%',
            scrub: true,
            onEnter: () => {
              // console.log('onEnter on ' + column);
              tabs[i].classList.add('categories__nav-item--active');
            },
            onLeave: () => {
              // console.log('onLeave from ' + column);
              tabs[i].classList.remove('categories__nav-item--active');
            },
            onEnterBack: () => {
              // console.log('onEnterBack on ' + column);
              tabs[i].classList.add('categories__nav-item--active');
            },
            onLeaveBack: () => {
              // console.log('onLeaveBack from ' + column);
              tabs[i].classList.remove('categories__nav-item--active');
            },
            onUpdate: self => {
              // console.log('onUpdate ', self.progress.toFixed(2));
              bars[i].style.width = `${self.progress.toFixed(2) * 100}%`;
            } // markers: true,

          }
        });
        evenCards.forEach(evenCard => {
          gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].to(evenCard, {
            scrollTrigger: {
              trigger: column,
              start: 'top bottom',
              end: '80% top',
              scrub: 2
            },
            y: 30
          });
        });
        oddCards.forEach(oddCard => {
          gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].to(oddCard, {
            scrollTrigger: {
              trigger: column,
              start: 'top bottom',
              end: '80% top',
              scrub: 2
            },
            y: -30
          });
        });
      },
      // mobile
      '(max-width: 767px)': function () {// Any ScrollTriggers created inside these functions are segregated and get
        // reverted/killed when the media query doesn't match anymore.
      },

      // all
      all() {// ScrollTriggers created here aren't associated with a particular media query,
        // so they persist.
      }

    });
  }); // tabs.forEach((tab, i) => {
  //   const tabPositionY = columns[i].getBoundingClientRect().y - 150;
  //   console.log(tabPositionY);
  //   tab.addEventListener('click', () => {
  //     window.scrollTo(0, tabPositionY);
  //   });
  // });
}

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(340);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _suggest_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(342);
/* harmony import */ var _suggest_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_suggest_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(343);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _packaging_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(345);
/* harmony import */ var _packaging_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_packaging_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(346);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _catalog_nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(348);
/* harmony import */ var _catalog_nav_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_catalog_nav_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(349);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(351);
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);


const layoutSliders = document.querySelectorAll('.layout--slider');
layoutSliders.forEach((layoutSlider, index) => {
  layoutSlider.id = `layout-${index}`;
  const id = `layout-${index}`;
  const slider = layoutSlider.querySelector('.layout__slider');
  const layoutNolint = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["default"](slider, {
    modules: [swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"]],
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    // Pagination bullets
    pagination: {
      el: `#${id} .layout__slider-pagination`,
      type: 'bullets',
      clickable: true,
      bulletClass: 'layout__slider-bullet',
      bulletActiveClass: 'layout__slider-bullet--active'
    },
    // Navigation arrows
    navigation: {
      prevEl: `#${id} .layout__slider-button--prev`,
      nextEl: `#${id} .layout__slider-button--next`,
      disabledClass: 'layout__slider-button--disabled'
    },
    // Scrollbar
    scrollbar: {
      el: '.layout__scrollbar',
      dragClass: 'layout__scrollbar-drag',
      draggable: true
    }
  });
});

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(352);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _layout_header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layout_header_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(355);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _watched_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(357);
/* harmony import */ var _watched_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_watched_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);


const watched = document.querySelectorAll('.watched');

if (watched) {
  const watchedNolint = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["default"]('.watched__slider', {
    modules: [swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"]],
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    // Navigation arrows
    navigation: {
      prevEl: '.watched__slider-button--prev',
      nextEl: '.watched__slider-button--next',
      disabledClass: 'watched__slider-button--disabled'
    },
    // Scrollbar
    scrollbar: {
      el: '.watched__scrollbar',
      dragClass: 'watched__scrollbar-drag',
      draggable: true
    }
  });
}

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(358);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(360);
/* harmony import */ var _line_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_line_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(361);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _seo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(363);
/* harmony import */ var _seo_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_seo_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(364);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _banner_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(366);
/* harmony import */ var _banner_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_banner_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);

 // Слайдер.

const banner = document.querySelector('.banner');

if (banner) {
  const swiperBannerNolint = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["default"]('.banner__slider', {
    modules: [swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["EffectFade"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Autoplay"]],
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    // If we need navigation
    navigation: {
      nextEl: '.banner__slider-button--next',
      prevEl: '.banner__slider-button--prev'
    },
    // If we need pagination
    pagination: {
      clickable: true,
      el: '.banner__slider-pagination',
      bulletClass: 'banner__slider-bullet',
      bulletActiveClass: 'banner__slider-bullet--active',
      type: 'bullets'
    }
  });
}

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(367);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _catalog_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(369);
/* harmony import */ var _catalog_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_catalog_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);


const filter = document.querySelector('.catalog__sidebar-filter');

if (filter) {
  const filterOpenButton = filter.querySelector('.catalog__filter-open');
  const filterCloseButton = filter.querySelector('.catalog__filter-close');
  const filterContainer = filter.querySelector('.catalog__filter');
  filterOpenButton.addEventListener('click', () => {
    filterContainer.classList.add('catalog__filter--active');
    filterOpenButton.blur();
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingOnBody"])();
  });
  filterCloseButton.addEventListener('click', () => {
    filterContainer.classList.remove('catalog__filter--active');
    filterCloseButton.blur();
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingFromBody"])();
  });
}

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(370);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _back_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(372);
/* harmony import */ var _back_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_back_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(373);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clear_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(375);
/* harmony import */ var _clear_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clear_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(376);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _top_filters_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(378);
/* harmony import */ var _top_filters_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_top_filters_scss__WEBPACK_IMPORTED_MODULE_0__);

const sort = document.querySelector('.top-filters__sort');

if (sort) {
  sort.querySelectorAll('.top-filters__sort-button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('top-filters__sort-button--active')) {
        btn.classList.toggle('top-filters__sort-button--low');
      } else {
        sort.querySelectorAll('.top-filters__sort-button--active').forEach(el => {
          el.classList.remove('top-filters__sort-button--active');
        });
        sort.querySelectorAll('.top-filters__sort-button--low').forEach(el => {
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

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(379);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(381);
/* harmony import */ var _product_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_product_scss__WEBPACK_IMPORTED_MODULE_0__);

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

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(382);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltip_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var _tooltip_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tooltip_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);


Object(tippy_js__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-tippy-content]', {
  allowHTML: true,
  arrow: false,
  maxWidth: 287,
  animation: 'scale-subtle'
}); // const tooltip = document.querySelector('.tooltip--question');
// if (tooltip) {
//   tippy('.tooltip--question .tooltip__button', {
//     content(reference) {
//       const template = reference.nextElementSibling;
//       return template.innerHTML;
//     },
//     allowHTML: true,
//     animation: 'scale',
//     arrow: false,
//     maxWidth: 287,
//     inlinePositioning: true,
//     interactive: true,
//     interactiveDebounce: 75,
//   });
// }

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(385);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(446);
/* harmony import */ var _product_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_product_main_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(447);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _double_slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(449);
/* harmony import */ var _double_slider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_double_slider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);
 // import Swiper, { FreeMode } from 'swiper/swiper-bundle.min';


const doubleSlider = document.querySelector('.double-slider');

if (doubleSlider) {
  let doubleSliderMobile;
  let doubleSliderDesktop;
  let swiperNav; // Инициализация слайдера для мобилы.

  const doubleSliderMobileInit = () => {
    doubleSliderMobile = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["default"]('.double-slider__main', {
      modules: [swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Thumbs"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["EffectFade"]],
      slidesPerView: 1,
      loop: false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      // If we need pagination
      pagination: {
        el: '.double-slider__pagination',
        type: 'fraction'
      }
    });
    doubleSliderMobile.on('slideChange', swiper => {
      const currentSlide = swiper.slides[swiper.activeIndex];
      const previousSlide = swiper.slides[swiper.previousIndex];
      const currentVideo = currentSlide.querySelector('video');
      const previousVideo = previousSlide.querySelector('video');

      if (currentVideo) {
        currentVideo.play();
      }

      if (previousVideo) {
        previousVideo.pause();
      }
    });
  }; // Инициализация слайдера для десктопа.


  const doubleSliderDesktopInit = () => {
    doubleSliderDesktop = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["default"]('.double-slider__main', {
      modules: [swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Thumbs"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["EffectFade"]],
      slidesPerView: 1,
      allowTouchMove: false,
      loop: false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: swiperNav,
        slideThumbActiveClass: 'double-slider__nav-item--active'
      },
      // If we need pagination
      pagination: {
        el: '.double-slider__progress',
        type: 'progressbar',
        progressbarOpposite: true,
        progressbarFillClass: 'double-slider__progress-fill'
      }
    });
    doubleSliderDesktop.on('slideChange', swiper => {
      const currentSlide = swiper.slides[swiper.activeIndex];
      const previousSlide = swiper.slides[swiper.previousIndex];
      const currentVideo = currentSlide.querySelector('video');
      const previousVideo = previousSlide.querySelector('video');

      if (currentVideo) {
        currentVideo.play();
      }

      if (previousVideo) {
        previousVideo.pause();
      }
    });
  }; // Инициализация слайдера для навигации.


  const swiperNavInit = () => {
    swiperNav = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["default"]('.double-slider__nav', {
      modules: [swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["FreeMode"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Mousewheel"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Keyboard"]],
      spaceBetween: 5,
      slidesPerView: 'auto',
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
      direction: 'vertical',
      // If we need navigation
      navigation: {
        nextEl: '.double-slider__nav-button--next',
        prevEl: '.double-slider__nav-button--prev',
        disabledClass: 'double-slider__nav-button--disabled'
      } // Responsive breakpoints
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

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768 && !doubleSliderMobile) {
      swiperNav.destroy();
      doubleSliderDesktop.destroy();
      doubleSliderDesktop = undefined;
      doubleSliderMobileInit();
    } else if (window.innerWidth >= 768 && !doubleSliderDesktop) {
      doubleSliderMobile.destroy();
      doubleSliderMobile = undefined;
      swiperNavInit();
      doubleSliderDesktopInit();
    }
  });
}

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(450);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_info_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(452);
/* harmony import */ var _product_info_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_product_info_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(453);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 454 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_highlights_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(455);
/* harmony import */ var _product_highlights_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_product_highlights_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(456);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 457 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _packaging_table_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(458);
/* harmony import */ var _packaging_table_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_packaging_table_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);


const packaging = document.querySelector('.packaging-table');

if (packaging) {
  const type = packaging.querySelector('.packaging-table__type');
  const typeHead = type.querySelector('.packaging-table__type-input');
  const typeItems = type.querySelectorAll('.packaging-table__type-item');
  const typeCounters = packaging.querySelectorAll('.packaging-table__count-item');
  const overlay = packaging.querySelector('.packaging-table__mobile-overlay');
  const typeClose = packaging.querySelector('.packaging-table__mobile-close'); // Показывать\скрывать выпадющий список по клику.

  typeHead.addEventListener('click', () => {
    type.classList.add('packaging-table__type--active');
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingOnBody"])();
  });
  overlay.addEventListener('click', () => {
    type.classList.remove('packaging-table__type--active');
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingFromBody"])();
  });
  typeClose.addEventListener('click', () => {
    type.classList.remove('packaging-table__type--active');
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingFromBody"])();
  }); // Логика действий при выборе нового пункта из списка.

  typeItems.forEach((typeItem, index) => {
    typeItem.addEventListener('click', () => {
      const activeType = packaging.querySelector('.packaging-table__type-item--active');

      if (activeType) {
        activeType.classList.remove('packaging-table__type-item--active');
      }

      const thList = typeItem.querySelectorAll('th');
      const tdList = typeItem.querySelectorAll('td');
      const cells = [];
      thList.forEach((el, i) => {
        cells.push(`${thList[i].textContent}: ${tdList[i].textContent}`);
      });
      const inputValue = cells.join(', ');
      typeHead.textContent = inputValue;
      typeItem.classList.add('packaging-table__type-item--active');
      type.classList.remove('packaging-table__type--active');
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingFromBody"])();
      const activeCounter = packaging.querySelector('.packaging-table__count-item--active');

      if (activeCounter) {
        activeCounter.classList.remove('packaging-table__count-item--active');
      }

      typeCounters[index].classList.add('packaging-table__count-item--active');
    });
  }); // // Тестовая логика для счётчика на странице товара. Начало.
  // const typeCountersItem = document.querySelectorAll('.packaging-table__buttons');
  // typeCountersItem.forEach((typeCounter) => {
  //   const plus = typeCounter.querySelector('.packaging-table__button--plus');
  //   const minus = typeCounter.querySelector('.packaging-table__button--minus');
  //   const input = typeCounter.querySelector('.packaging-table__input');
  //   const maxValue = parseInt(typeCounter.dataset.max, 10);
  //   // let currentValue = parseInt(input.value, 10);
  //   input.setAttribute('value', input.value);
  //   const getBlockMinus = () => {
  //     if (input.value <= 0) {
  //       input.value = 0;
  //       // currentValue = parseInt(input.value, 10);
  //       minus.setAttribute('disabled', 'disabled');
  //     } else {
  //       minus.removeAttribute('disabled');
  //     }
  //   };
  //   const getBlockPlus = () => {
  //     if (input.value >= maxValue) {
  //       input.value = maxValue;
  //       // currentValue = parseInt(input.value, 10);
  //       plus.setAttribute('disabled', 'disabled');
  //     } else {
  //       plus.removeAttribute('disabled');
  //     }
  //   };
  //   getBlockMinus();
  //   getBlockPlus();
  //   const changeCountInItemPageEvent = new CustomEvent('changeCountInItemPage', {
  //     bubbles: true,
  //     detail: { input },
  //   });
  //   plus.addEventListener('click', () => {
  //     // currentValue += 1;
  //     // input.value = currentValue;
  //     input.value = parseInt(input.value, 10) + 1;
  //     minus.removeAttribute('disabled');
  //     getBlockPlus();
  //     input.dispatchEvent(changeCountInItemPageEvent);
  //   });
  //   minus.addEventListener('click', () => {
  //     // currentValue -= 1;
  //     // input.value = currentValue;
  //     input.value = parseInt(input.value, 10) - 1;
  //     plus.removeAttribute('disabled');
  //     getBlockMinus();
  //     input.dispatchEvent(changeCountInItemPageEvent);
  //   });
  //   input.addEventListener('change', (evt) => {
  //     // currentValue = parseInt(evt.target.value, 10);
  //     // input.value = currentValue;
  //     input.value = evt.target.value;
  //     getBlockMinus();
  //     getBlockPlus();
  //     input.dispatchEvent(changeCountInItemPageEvent);
  //   });
  // });

  const typeCountersItemMobile = document.querySelectorAll('.packaging-table__count-buttons');
  typeCountersItemMobile.forEach(typeCounter => {
    const plus = typeCounter.querySelector('.packaging-table__count-button--plus');
    const minus = typeCounter.querySelector('.packaging-table__count-button--minus');
    const input = typeCounter.querySelector('.packaging-table__count-input');
    const maxValue = parseInt(typeCounter.dataset.max, 10); // let currentValue = parseInt(input.value, 10);

    const getBlockMinus = () => {
      if (input.value <= 0) {
        input.value = 0;
        minus.setAttribute('disabled', 'disabled');
      } else {
        minus.removeAttribute('disabled');
      }
    };

    const getBlockPlus = () => {
      if (input.value >= maxValue) {
        input.value = maxValue;
        plus.setAttribute('disabled', 'disabled');
      } else {
        plus.removeAttribute('disabled');
      }
    };

    getBlockMinus();
    getBlockPlus();
    const changeCountInMobileItemPageEvent = new CustomEvent('changeCountInMobileItemPage', {
      bubbles: true,
      detail: {
        input
      }
    });
    plus.addEventListener('click', () => {
      // currentValue += 1;
      // input.value = currentValue;
      input.value = parseInt(input.value, 10) + 1;
      minus.removeAttribute('disabled');
      getBlockPlus();
      input.dispatchEvent(changeCountInMobileItemPageEvent);
    });
    minus.addEventListener('click', () => {
      // currentValue -= 1;
      // input.value = currentValue;
      input.value = parseInt(input.value, 10) - 1;
      plus.removeAttribute('disabled');
      getBlockMinus();
      input.dispatchEvent(changeCountInMobileItemPageEvent);
    });
    input.addEventListener('change', evt => {
      // currentValue = parseInt(input.value, 10);
      // input.value = currentValue;
      input.value = evt.target.value;
      getBlockMinus();
      getBlockPlus();
      input.dispatchEvent(changeCountInMobileItemPageEvent);
    });
  }); // Тестовая логика для счётчика в карточке товара. Конец.
}

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(459);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 460 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _packaging_amount_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(461);
/* harmony import */ var _packaging_amount_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_packaging_amount_scss__WEBPACK_IMPORTED_MODULE_0__);

const counters = document.querySelectorAll('.packaging-amount__buttons');
counters.forEach(counter => {
  var _counter$dataset$max, _input$min;

  const plus = counter.querySelector('.packaging-amount__button--plus');
  const minus = counter.querySelector('.packaging-amount__button--minus');
  const input = counter.querySelector('.packaging-amount__input');
  const packaging = counter.closest('.packaging-amount');
  const totalSpan = packaging.querySelector('.packaging-amount__total span');
  const unitType = packaging.dataset.unitType;
  const unitSize = Number(packaging.dataset.unitSize.replace(/\s/g, ''));
  const max = Number((_counter$dataset$max = counter.dataset.max) !== null && _counter$dataset$max !== void 0 ? _counter$dataset$max : Infinity);
  const min = Number((_input$min = input.min) !== null && _input$min !== void 0 ? _input$min : 0);

  const getValue = () => {
    const value = Number(input.value);
    return Number.isNaN(value) ? min : value;
  }; // Форматирование с пробелами. 


  const format = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const updateTotal = () => {
    const count = getValue();
    const rawTotal = count * unitSize;
    const total = Math.round(rawTotal * 100) / 100;
    totalSpan.textContent = `${count} * ${format.format(unitSize)} = ${format.format(total)} ${unitType}`;
  };

  const setValue = value => {
    input.value = value;
    syncState();
    updateTotal();
    dispatchChange();
  };

  const clamp = value => {
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
    input.dispatchEvent(new CustomEvent('changeCountInItemPage', {
      bubbles: true,
      detail: {
        value: getValue(),
        input
      }
    }));
  }; // --- Events ---


  plus.addEventListener('click', () => {
    const value = clamp(getValue() + 1);
    setValue(value);
  });
  minus.addEventListener('click', () => {
    const value = clamp(getValue() - 1);
    setValue(value);
  });
  input.addEventListener('change', () => {
    const value = clamp(getValue());
    setValue(value);
  }); // initial state

  setValue(clamp(getValue()));
});

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(462);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_specification_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(464);
/* harmony import */ var _product_specification_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_product_specification_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(465);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_description_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(467);
/* harmony import */ var _product_description_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_product_description_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(468);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 469 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_documents_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(470);
/* harmony import */ var _product_documents_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_product_documents_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(471);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_analogues_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(473);
/* harmony import */ var _product_analogues_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_product_analogues_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(474);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 475 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_questions_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476);
/* harmony import */ var _product_questions_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_product_questions_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(477);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 478 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(479);
/* harmony import */ var _sidebar_nav_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sidebar_nav_scss__WEBPACK_IMPORTED_MODULE_0__);

const storagesInfo = document.querySelector('.sidebar-nav');

if (storagesInfo) {
  const toggle = storagesInfo.querySelector('.sidebar-nav__header');
  document.addEventListener('click', evt => {
    if (window.innerWidth < 992) {
      if (evt.target === toggle) {
        storagesInfo.classList.toggle('sidebar-nav--active');
      } else {
        storagesInfo.classList.remove('sidebar-nav--active');
      }
    }
  });
}

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(480);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 481 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(482);
/* harmony import */ var _search_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_search_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(103);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);



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
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getPaddingOnBody"])();
      setTimeout(() => {
        searchInput.focus();
      }, 100);
    }
  });
  searchInput.addEventListener('focusout', () => {
    search.classList.remove('search--active');
  });
}

if (search) {
  Object(_validator_validator__WEBPACK_IMPORTED_MODULE_1__["validateForm"])('.search__form ');
}

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(483);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 484 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _empty_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(485);
/* harmony import */ var _empty_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_empty_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(486);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 487 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _back_nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);
/* harmony import */ var _back_nav_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_back_nav_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(489);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 490 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(491);
/* harmony import */ var _tabs_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tabs_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(492);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 493 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tags_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(494);
/* harmony import */ var _tags_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tags_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(495);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 496 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post_title_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(497);
/* harmony import */ var _post_title_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_post_title_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(498);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 499 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_react_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(500);
/* harmony import */ var _profile_react_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_profile_react_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_Add_Organization_Add_Organization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(511);
/* harmony import */ var _react_Form_Personal_Data_Form_Personal_Data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1247);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const personalData = document.querySelector('#personal-data');
const addOrganization = document.querySelector('#add-organization');

if (personalData) {
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_react_Form_Personal_Data_Form_Personal_Data__WEBPACK_IMPORTED_MODULE_4__["default"], {}), personalData);
}

if (addOrganization) {
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_react_Add_Organization_Add_Organization__WEBPACK_IMPORTED_MODULE_3__["default"], {}), addOrganization);
}

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(501);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(512);
/* harmony import */ var _Form_Add_Organization_1_Form_Add_Organization_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(543);
/* harmony import */ var _Form_Add_Organization_2_Form_Add_Organization_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1246);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const AddOrganization = () => {
  const [step, setStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("one");
  const [exist, setExist] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [formData, setFormData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    firstStep: {
      inn: "",
      mainFio: "",
      mainEmail: "",
      mainPhone: "",
      mainRole: [],
      contacts: [{
        fio: "",
        email: "",
        phone: "",
        role: []
      }]
    },
    secondStep: {
      inn: "",
      companyName: "",
      address: "",
      addressMailing: "",
      ogrn: "",
      kpp: "" // bank: "",
      // bik: "",
      // accountChecking: "",
      // accountСorrespondent: "",

    }
  });

  const fetchData = async inn => {
    const organization = await _api_api__WEBPACK_IMPORTED_MODULE_1__["dataAPI"].getOrganization(inn);
    const emptyOrganization = Object.keys(organization.data).length === 0;

    if (!emptyOrganization) {
      setFormData(prevFormData => ({ ...prevFormData,
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
          accountСorrespondent: ""
        }
      }));
      setStep("two");
      setExist(organization.isAlreadyExist);
    } else {
      setFormData(prevFormData => ({ ...prevFormData,
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
          accountСorrespondent: ""
        }
      }));
      setStep("two");
      setExist(organization.isAlreadyExist);
    }
  };

  const addNewOrganization = async newOrganization => {
    const result = await _api_api__WEBPACK_IMPORTED_MODULE_1__["organizationsApi"].addNewOrganization(newOrganization);

    if (result === "success") {
      window.Corners5ProjectLayout.summonAlert("#alert--add");
      setTimeout(() => {
        window.location.replace(`${window.location.origin}/personal/organizations/`);
      }, 3000);
    }
  };

  let component = null;

  switch (step) {
    case "one":
      component = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_Form_Add_Organization_1_Form_Add_Organization_1__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fetchData: fetchData,
        dataForm: formData,
        setDataForm: setFormData
      });
      break;

    case "two":
      component = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_Form_Add_Organization_2_Form_Add_Organization_2__WEBPACK_IMPORTED_MODULE_3__["default"], {
        dataForm: formData,
        setDataForm: setFormData,
        addNewOrganization: addNewOrganization,
        setStep: setStep,
        existFlag: exist
      });
      break;

    default:
      break;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      className: "form-lk__add-organization",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("a", {
        className: "form-lk__link",
        href: "lk-my-organization.html",
        children: "\u2190 \u041C\u043E\u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"
      })
    }), component]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AddOrganization);

/***/ }),
/* 512 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataAPI", function() { return dataAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "organizationsApi", function() { return organizationsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileApi", function() { return profileApi; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(124);


const token = "5e287fb1cee7358cb4f771eba5b1ea444a1a3535"; // 5a0749d3-9db5-40c4-9b10-c6048d5933b4

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "/local/ajax/",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5000
});
const daData = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Token ${token}`
  }
}); // запрашиваем данные по организаций с Dadata по ИНН
// export const dataAPI = {
//   getOrganization(query) {
//     return daData
//       .post(null, { query })
//       .then((response) => {
//         if (response.data.suggestions[0]) {
//           const { data } = response.data.suggestions[0];
//           return data;
//         }
//         const data = {};
//         return data;
//       })
//       .catch((error) => console.log("error", error));
//   },
// };

const dataAPI = {
  async getOrganization(query) {
    // const response = await axios.post(
    //   `https://run.mocky.io/v3/d08be300-d426-4c4d-be67-0c2ff36c48a2`,
    //   { inn: query }
    // );
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`checkCompany.php`, {
      inn: query
    });
    const daDataInfo = await daData.post(null, {
      query
    });

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

}; // отправляем данные по добавлению новой организации на сервер

const organizationsApi = {
  addNewOrganization(newOrganization) {
    return instance.post("add_organization.php", {
      newOrganization
    }).then(response => {
      if (response.status === 200 && response.data.status !== "error") {
        return "success";
      } else {
        return "Возникла ошибка, повторите попытку позже";
      }
    }).catch(error => console.log("error", error));
  }

}; // действия с профайлом, получение, обновление полей

const profileApi = {
  getProfile() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${window.routes5.profile.requests.getProfile[`url${_env__WEBPACK_IMPORTED_MODULE_1__["ENV"]}`]}`).then(response => {
      if (response.status === 200 && response.data.status !== "error") {
        return response.data;
      } else {
        return "Возникла ошибка, повторите попытку позже";
      }
    }).catch(() => "Возникла ошибка, повторите попытку позже");
  },

  updateName(name) {
    return instance.put("personal_data.php", {
      name
    }).then(response => {
      if (response.status === 200) {
        console.log("Изменения сохранены");
        window.Corners5ProjectLayout.summonAlert("#alert--fio");
      }
    }).catch(error => console.log("error", error));
  },

  updateEmail(email) {
    return instance.put("personal_data.php", {
      email
    }).then(response => {
      if (response.status === 200) {
        console.log("Изменения сохранены");
        window.Corners5ProjectLayout.summonAlert("#alert--confirm-email");
      }
    }).catch(error => console.log("error", error));
  },

  sendSMS(sms, phone, close) {
    return instance.post("personal_data.php", {
      sms,
      phone
    }).then(response => {
      if (response.data.status === "success") {
        window.Corners5ProjectLayout.summonAlert("#alert--mobileSuccess");
        close(false);
      } else if (response.data.status === "error") {
        document.querySelector("#alert--error").content.querySelector(".alert__text").textContent = response.data.text === "error";
        window.Corners5ProjectLayout.summonAlert("#alert--error");
      }
    }).catch(error => console.log("error", error));
  },

  // https://run.mocky.io/v3/1d0492b9-1ac2-47bf-96f3-37fe70592c5d
  // personal_data.php
  updatePhone(phone) {
    return instance.put("personal_data.php", {
      phone
    }).then(response => {
      if (response.status === 200 && response.data.status === "success") {
        return true;
      } else if (response.status === 200 && response.data.status === "error") {
        document.querySelector("#alert--error").content.querySelector(".alert__text").textContent = response.data.text;
        window.Corners5ProjectLayout.summonAlert("#alert--error");
        return false;
      }
    }).catch(error => console.log("error", error));
  }

};

/***/ }),
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(844);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(853);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1129);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1135);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1175);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1179);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1227);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1235);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);

















const FormAddOrganization1 = props => {
  const {
    fetchData,
    dataForm,
    setDataForm
  } = props;
  const phoneRegExp = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;
  const innRegExp = /^[0-9_]{10,12}$/;
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    inn: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().transform(value => value.replace(/[^\d]/g, "")).matches(innRegExp, "Неправильный ИНН").required("Обязательное поле!"),
    mainFio: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Обязательное поле!").max(100, "Максимум 100 символов"),
    mainEmail: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email("Неправильный email адрес").max(100, "Максимум 100 символов").required("Обязательное поле!"),
    mainPhone: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(phoneRegExp, "Неправильный телефонный номер").max(20, "Максимум 20 символов").required("Обязательное поле!"),
    mainRole: yup__WEBPACK_IMPORTED_MODULE_2__["array"]().required().required().min(1, "Обязательное поле!"),
    contacts: yup__WEBPACK_IMPORTED_MODULE_2__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
      fio: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Обязательное поле!"),
      email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email("Неправильный email адрес").required("Обязательное поле!"),
      phone: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(phoneRegExp, "Неправильный телефонный номер").required("Обязательное поле!"),
      role: yup__WEBPACK_IMPORTED_MODULE_2__["array"]().required().required().min(1, "Обязательное поле!")
    }))
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
      "& > fieldset": {
        border: "1px solid #d6dfe4"
      }
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        border: "1px solid #d6dfe4"
      }
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        border: "1px solid #d6dfe4"
      }
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
  const rolesData = ["Пивовар", "Закупщик", "Директор", "Управляющий", "Бухгалтер", "Другое"];
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])("section", {
    className: "add-organization",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("h2", {
      className: "form-lk__title",
      children: "1/2 \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: dataForm.firstStep,
      validationSchema: validationSchema,
      onSubmit: values => {
        values.inn = values.inn.replace(/[^\d]/g, "");
        fetchData(values.inn);
        setDataForm(prevDataForm => ({ ...prevDataForm,
          firstStep: values
        }));
      },
      children: ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        noValidate: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])("fieldset", {
          className: "form-lk__fieldset",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("legend", {
            className: "form-lk__legend",
            children: "\u0418\u041D\u041D \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])("div", {
            className: "form-lk__field",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("label", {
              className: errors.inn && touched.inn ? "form-lk__label error" : "form-lk__label",
              htmlFor: "inn",
              children: "\u0418\u041D\u041D \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a, {
              mask: "999999999999",
              maskPlaceholder: null,
              value: values.inn,
              onChange: handleChange,
              onBlur: handleBlur,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("input", {
                className: errors.inn && touched.inn ? "form-lk__item error" : "form-lk__item",
                id: "inn",
                name: "inn",
                type: "text",
                autoComplete: "off",
                autoCapitalize: "off",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u041D\u041D \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.inn
              })
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])("fieldset", {
          className: "form-lk__fieldset",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("legend", {
            className: "form-lk__legend",
            children: "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0437\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])("div", {
            className: "form-lk__field",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("label", {
              className: errors.mainFio && touched.mainFio ? "form-lk__label error" : "form-lk__label",
              htmlFor: "mainFio",
              children: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("input", {
              className: errors.mainFio && touched.mainFio ? "form-lk__item error" : "form-lk__item",
              id: "mainFio",
              name: "mainFio",
              type: "text",
              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.mainFio
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("label", {
            className: errors.mainEmail && touched.mainEmail ? "form-lk__label error" : "form-lk__label",
            htmlFor: "mainEmail",
            children: "E-mail"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("input", {
            className: errors.mainEmail && touched.mainEmail ? "form-lk__item error" : "form-lk__item",
            id: "mainEmail",
            name: "mainEmail",
            type: "email",
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.mainEmail
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])("div", {
            className: "form-lk__field",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("label", {
              className: errors.mainPhone && touched.mainPhone ? "form-lk__label error" : "form-lk__label",
              htmlFor: "mainPhone",
              children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a, {
              mask: "+7 (999) 999-99-99",
              maskPlaceholder: null,
              value: values.mainPhone,
              onChange: handleChange,
              onBlur: handleBlur,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("input", {
                className: errors.mainPhone && touched.mainPhone ? "form-lk__item error" : "form-lk__item",
                id: "mainPhone",
                name: "mainPhone",
                type: "phone",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
                onChange: props.onChange,
                onBlur: props.onBlur,
                value: props.values
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
            className: "form-lk__field",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
              sx: FormControlStyle,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("label", {
                className: errors.mainRole && touched.mainRole ? "form-lk__label error" : "form-lk__label",
                htmlFor: "multiple-checkbox",
                children: "\u0420\u043E\u043B\u044C"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_mui_material_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
                sx: SelectStyle,
                className: errors.mainRole && touched.mainRole ? "form-lk__item form-lk__item--select error" : "form-lk__item form-lk__item--select",
                labelId: "multiple-checkbox-label",
                id: "multiple-checkbox",
                name: "mainRole",
                multiple: true,
                IconComponent: _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11___default.a,
                value: values.mainRole,
                onChange: handleChange,
                onOpen: () => {
                  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["getPaddingOnBody"])();
                },
                onClose: () => {
                  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["getPaddingFromBody"])();
                },
                input: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
                renderValue: selected => selected.join(", "),
                MenuProps: MenuProps,
                children: rolesData.map(name => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  sx: MenuItemStyle,
                  value: name,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    sx: CheckboxStyle,
                    checked: values.mainRole.indexOf(name) > -1
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    primary: name
                  })]
                }, name))
              })]
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["FieldArray"], {
          name: "contacts",
          error: true,
          children: ({
            remove,
            push
          }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
            children: [values.contacts.map((member, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])("fieldset", {
              className: "form-lk__fieldset",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("legend", {
                className: "form-lk__legend",
                children: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])("button", {
                type: "button",
                className: "form-lk__button-delete ",
                onClick: () => remove(index),
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("svg", {
                  className: "form-lk__pencil-icon",
                  width: "20",
                  height: "20",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("use", {
                    xlinkHref: "#icon-lk-cart"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("span", {
                  children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442"
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("label", {
                className: Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(errors, `contacts[${index}].fio`) && Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(touched, `contacts[${index}].fio`) ? "form-lk__label error" : "form-lk__label",
                htmlFor: `contacts.${index}.fio`,
                children: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
                className: Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(errors, `contacts[${index}].fio`) && Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(touched, `contacts[${index}].fio`) ? "form-lk__item error" : "form-lk__item",
                name: `contacts.${index}.fio`,
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
                type: "text"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("label", {
                className: Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(errors, `contacts[${index}].email`) && Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(touched, `contacts[${index}].email`) ? "form-lk__label error" : "form-lk__label",
                htmlFor: `contacts.${index}.email`,
                children: "E-mail"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
                className: Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(errors, `contacts[${index}].email`) && Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(touched, `contacts[${index}].email`) ? "form-lk__item error" : "form-lk__item",
                name: `contacts.${index}.email`,
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",
                type: "email"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("label", {
                className: Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(errors, `contacts[${index}].phone`) && Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(touched, `contacts[${index}].phone`) ? "form-lk__label error" : "form-lk__label",
                htmlFor: `contacts.${index}.phone`,
                children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a, {
                mask: "+7 (999) 999-99-99",
                maskPlaceholder: null,
                value: values.contacts.phone,
                onChange: handleChange,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
                  className: Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(errors, `contacts[${index}].phone`) && Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(touched, `contacts[${index}].phone`) ? "form-lk__item error" : "form-lk__item",
                  name: `contacts.${index}.phone`,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
                  type: "phone"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
                className: "form-lk__field",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  sx: FormControlStyle,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("label", {
                    className: Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(errors, `contacts[${index}].role`) && Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(touched, `contacts[${index}].role`) ? "form-lk__label error" : "form-lk__label",
                    htmlFor: `contacts.${index}.role`,
                    children: "\u0420\u043E\u043B\u044C"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_mui_material_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    sx: SelectStyle,
                    className: Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(errors, `contacts[${index}].role`) && Object(formik__WEBPACK_IMPORTED_MODULE_1__["getIn"])(touched, `contacts[${index}].role`) ? "form-lk__item form-lk__item--select error" : "form-lk__item form-lk__item--select",
                    labelId: "checkbox-label",
                    id: "multiple-checkbox",
                    name: `contacts.${index}.role`,
                    multiple: true,
                    IconComponent: _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11___default.a,
                    value: values.contacts[index].role,
                    onChange: handleChange,
                    onOpen: () => {
                      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["getPaddingOnBody"])();
                    },
                    onClose: () => {
                      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["getPaddingFromBody"])();
                    },
                    input: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
                    renderValue: selected => selected.join(", "),
                    MenuProps: MenuProps,
                    children: rolesData.map(name => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      sx: MenuItemStyle,
                      value: name,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        sx: CheckboxStyle,
                        checked: values.contacts[index].role.indexOf(name) > -1
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        primary: name
                      })]
                    }, name))
                  })]
                })
              })]
            }, index)), values.contacts.length < 3 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])("div", {
              className: "form-lk__add-contact",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("button", {
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
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("p", {
                children: "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0445 \u043B\u0438\u0446, \u0434\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0438 \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0443."
              })]
            }) : null]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])("div", {
          className: "form-lk__control",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("button", {
            className: "form-lk__button-cancel button button--transparent",
            type: "button",
            onClick: () => {
              window.AddOrganizationPopUpProvider.setOpen(false);
            } // href="lk-my-organization.html"
            ,
            children: "\u2717 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("button", {
            className: "form-lk__button-forward button" // onClick={() => fetchData(values.inn)}
            ,
            type: "submit",
            children: "\u0414\u0430\u043B\u0435\u0435 \u2192"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FormAddOrganization1);

/***/ }),
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */,
/* 909 */,
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */,
/* 916 */,
/* 917 */,
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */,
/* 926 */,
/* 927 */,
/* 928 */,
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
/* 938 */,
/* 939 */,
/* 940 */,
/* 941 */,
/* 942 */,
/* 943 */,
/* 944 */,
/* 945 */,
/* 946 */,
/* 947 */,
/* 948 */,
/* 949 */,
/* 950 */,
/* 951 */,
/* 952 */,
/* 953 */,
/* 954 */,
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */,
/* 961 */,
/* 962 */,
/* 963 */,
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */,
/* 980 */,
/* 981 */,
/* 982 */,
/* 983 */,
/* 984 */,
/* 985 */,
/* 986 */,
/* 987 */,
/* 988 */,
/* 989 */,
/* 990 */,
/* 991 */,
/* 992 */,
/* 993 */,
/* 994 */,
/* 995 */,
/* 996 */,
/* 997 */,
/* 998 */,
/* 999 */,
/* 1000 */,
/* 1001 */,
/* 1002 */,
/* 1003 */,
/* 1004 */,
/* 1005 */,
/* 1006 */,
/* 1007 */,
/* 1008 */,
/* 1009 */,
/* 1010 */,
/* 1011 */,
/* 1012 */,
/* 1013 */,
/* 1014 */,
/* 1015 */,
/* 1016 */,
/* 1017 */,
/* 1018 */,
/* 1019 */,
/* 1020 */,
/* 1021 */,
/* 1022 */,
/* 1023 */,
/* 1024 */,
/* 1025 */,
/* 1026 */,
/* 1027 */,
/* 1028 */,
/* 1029 */,
/* 1030 */,
/* 1031 */,
/* 1032 */,
/* 1033 */,
/* 1034 */,
/* 1035 */,
/* 1036 */,
/* 1037 */,
/* 1038 */,
/* 1039 */,
/* 1040 */,
/* 1041 */,
/* 1042 */,
/* 1043 */,
/* 1044 */,
/* 1045 */,
/* 1046 */,
/* 1047 */,
/* 1048 */,
/* 1049 */,
/* 1050 */,
/* 1051 */,
/* 1052 */,
/* 1053 */,
/* 1054 */,
/* 1055 */,
/* 1056 */,
/* 1057 */,
/* 1058 */,
/* 1059 */,
/* 1060 */,
/* 1061 */,
/* 1062 */,
/* 1063 */,
/* 1064 */,
/* 1065 */,
/* 1066 */,
/* 1067 */,
/* 1068 */,
/* 1069 */,
/* 1070 */,
/* 1071 */,
/* 1072 */,
/* 1073 */,
/* 1074 */,
/* 1075 */,
/* 1076 */,
/* 1077 */,
/* 1078 */,
/* 1079 */,
/* 1080 */,
/* 1081 */,
/* 1082 */,
/* 1083 */,
/* 1084 */,
/* 1085 */,
/* 1086 */,
/* 1087 */,
/* 1088 */,
/* 1089 */,
/* 1090 */,
/* 1091 */,
/* 1092 */,
/* 1093 */,
/* 1094 */,
/* 1095 */,
/* 1096 */,
/* 1097 */,
/* 1098 */,
/* 1099 */,
/* 1100 */,
/* 1101 */,
/* 1102 */,
/* 1103 */,
/* 1104 */,
/* 1105 */,
/* 1106 */,
/* 1107 */,
/* 1108 */,
/* 1109 */,
/* 1110 */,
/* 1111 */,
/* 1112 */,
/* 1113 */,
/* 1114 */,
/* 1115 */,
/* 1116 */,
/* 1117 */,
/* 1118 */,
/* 1119 */,
/* 1120 */,
/* 1121 */,
/* 1122 */,
/* 1123 */,
/* 1124 */,
/* 1125 */,
/* 1126 */,
/* 1127 */,
/* 1128 */,
/* 1129 */,
/* 1130 */,
/* 1131 */,
/* 1132 */,
/* 1133 */,
/* 1134 */,
/* 1135 */,
/* 1136 */,
/* 1137 */,
/* 1138 */,
/* 1139 */,
/* 1140 */,
/* 1141 */,
/* 1142 */,
/* 1143 */,
/* 1144 */,
/* 1145 */,
/* 1146 */,
/* 1147 */,
/* 1148 */,
/* 1149 */,
/* 1150 */,
/* 1151 */,
/* 1152 */,
/* 1153 */,
/* 1154 */,
/* 1155 */,
/* 1156 */,
/* 1157 */,
/* 1158 */,
/* 1159 */,
/* 1160 */,
/* 1161 */,
/* 1162 */,
/* 1163 */,
/* 1164 */,
/* 1165 */,
/* 1166 */,
/* 1167 */,
/* 1168 */,
/* 1169 */,
/* 1170 */,
/* 1171 */,
/* 1172 */,
/* 1173 */,
/* 1174 */,
/* 1175 */,
/* 1176 */,
/* 1177 */,
/* 1178 */,
/* 1179 */,
/* 1180 */,
/* 1181 */,
/* 1182 */,
/* 1183 */,
/* 1184 */,
/* 1185 */,
/* 1186 */,
/* 1187 */,
/* 1188 */,
/* 1189 */,
/* 1190 */,
/* 1191 */,
/* 1192 */,
/* 1193 */,
/* 1194 */,
/* 1195 */,
/* 1196 */,
/* 1197 */,
/* 1198 */,
/* 1199 */,
/* 1200 */,
/* 1201 */,
/* 1202 */,
/* 1203 */,
/* 1204 */,
/* 1205 */,
/* 1206 */,
/* 1207 */,
/* 1208 */,
/* 1209 */,
/* 1210 */,
/* 1211 */,
/* 1212 */,
/* 1213 */,
/* 1214 */,
/* 1215 */,
/* 1216 */,
/* 1217 */,
/* 1218 */,
/* 1219 */,
/* 1220 */,
/* 1221 */,
/* 1222 */,
/* 1223 */,
/* 1224 */,
/* 1225 */,
/* 1226 */,
/* 1227 */,
/* 1228 */,
/* 1229 */,
/* 1230 */,
/* 1231 */,
/* 1232 */,
/* 1233 */,
/* 1234 */,
/* 1235 */,
/* 1236 */,
/* 1237 */,
/* 1238 */,
/* 1239 */,
/* 1240 */,
/* 1241 */,
/* 1242 */,
/* 1243 */,
/* 1244 */,
/* 1245 */,
/* 1246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(844);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const innRegExp = /^[0-9_]{10,12}$/;
const ogrnRegExp = /^[0-9]{15}$/;
const kppBikRegExp = /^[0-9]{9}$/;
const accountRegExp = /^[0-9]{20}$/;
const strictSchema = {
  inn: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().transform(value => value.replace(/[^\d]/g, "")).matches(innRegExp, "Неправильный ИНН").required("Обязательное поле!"),
  companyName: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Обязательное поле!"),
  address: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Обязательное поле!"),
  addressMailing: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Обязательное поле!"),
  ogrn: yup__WEBPACK_IMPORTED_MODULE_2__["string"]() // .matches(ogrnRegExp, "Неправильный ОГРН")
  .min(13, "Неправильный ОГРН").max(15, "Неправильный ОГРН").required("Обязательное поле!"),
  kpp: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(kppBikRegExp, "Неправильный КПП").notRequired() // .required("Обязательное поле!"),
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
  inn: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().transform(value => value.replace(/[^\d]/g, "")).matches(innRegExp, "Неправильный ИНН").notRequired("Обязательное поле!"),
  companyName: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().notRequired("Обязательное поле!"),
  address: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().notRequired("Обязательное поле!"),
  addressMailing: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().notRequired("Обязательное поле!"),
  ogrn: yup__WEBPACK_IMPORTED_MODULE_2__["string"]() // .matches(ogrnRegExp, "Неправильный ОГРН")
  .min(13, "Неправильный ОГРН").max(15, "Неправильный ОГРН").notRequired("Обязательное поле!"),
  kpp: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(kppBikRegExp, "Неправильный КПП").notRequired("Обязательное поле!"),
  bik: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(kppBikRegExp, "Неправильный БИК").notRequired("Обязательное поле!"),
  bank: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Обязательное поле!"),
  accountChecking: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(accountRegExp, "Неправильный Счет").notRequired("Обязательное поле!"),
  accountСorrespondent: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(accountRegExp, "Неправильный Счет").notRequired("Обязательное поле!")
};

const FormAddOrganization2 = props => {
  const {
    dataForm,
    setDataForm,
    addNewOrganization,
    setStep,
    existFlag
  } = props;
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormik"])({
    initialValues: dataForm.secondStep,
    enableReinitialize: true,
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"](existFlag === true ? freeSchema : strictSchema),
    onSubmit: values => {
      values.inn = values.inn.replace(/[^\d]/g, "");
      const data = { ...dataForm,
        secondStep: values
      };
      setDataForm(prevDataForm => ({ ...prevDataForm,
        secondStep: values
      }));
      addNewOrganization(data);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("h2", {
      className: "form-lk__title",
      children: "2/2 \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("form", {
      noValidate: true,
      className: "form-lk__form",
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("fieldset", {
        className: "form-lk__fieldset form-lk__fieldset--wide",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("legend", {
          className: "form-lk__legend",
          children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u043E\u0432"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("div", {
          className: "form-lk__container",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("div", {
            className: "form-lk__field form-lk__field--narrow",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
              className: formik.errors.inn && formik.touched.inn ? "form-lk__label error" : "form-lk__label",
              htmlFor: "inn",
              children: "\u0418\u041D\u041D"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a, {
              mask: "999999999999",
              maskPlaceholder: null,
              value: formik.values.inn,
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
              disabled: existFlag,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("input", {
                className: formik.errors.inn && formik.touched.inn ? "form-lk__item error" : "form-lk__item",
                id: "inn",
                name: "inn",
                type: "text",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u041D\u041D \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                value: formik.values.inn
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("div", {
            className: "form-lk__field form-lk__field--narrow",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
              className: formik.errors.companyName && formik.touched.companyName ? "form-lk__label error" : "form-lk__label",
              htmlFor: "companyName",
              children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("input", {
              className: formik.errors.companyName && formik.touched.companyName ? "form-lk__item error" : "form-lk__item",
              id: "companyName",
              name: "companyName",
              type: "text",
              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F",
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
              value: formik.values.companyName,
              disabled: existFlag
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
          className: formik.errors.address && formik.touched.address ? "form-lk__label error" : "form-lk__label",
          htmlFor: "address",
          children: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("input", {
          className: formik.errors.address && formik.touched.address ? "form-lk__item error" : "form-lk__item",
          id: "address",
          name: "address",
          type: "text",
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441",
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          value: formik.values.address,
          disabled: existFlag
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
          className: formik.errors.addressMailing && formik.touched.addressMailing ? "form-lk__label error" : "form-lk__label",
          htmlFor: "addressMailing",
          children: "\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("input", {
          className: formik.errors.addressMailing && formik.touched.addressMailing ? "form-lk__item error" : "form-lk__item",
          id: "addressMailing",
          name: "addressMailing",
          type: "text",
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441",
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          value: formik.values.addressMailing,
          disabled: existFlag
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("div", {
          className: "form-lk__container",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("div", {
            className: "form-lk__field form-lk__field--narrow",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
              className: formik.errors.ogrn && formik.touched.ogrn ? "form-lk__label error" : "form-lk__label",
              htmlFor: "ogrn",
              children: "\u041E\u0413\u0420\u041D"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a, {
              mask: "999999999999999",
              maskPlaceholder: null,
              value: formik.values.ogrn,
              onChange: formik.handleChange,
              onBlur: formik.handleBlur // disabled={existFlag}
              ,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("input", {
                className: formik.errors.ogrn && formik.touched.ogrn ? "form-lk__item error" : "form-lk__item",
                id: "ogrn",
                name: "ogrn",
                type: "text",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041E\u0413\u0420\u041D",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                value: formik.values.ogrn
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("div", {
            className: "form-lk__field form-lk__field--narrow",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
              className: formik.errors.kpp && formik.touched.kpp ? "form-lk__label error" : "form-lk__label",
              htmlFor: "companyName",
              children: "\u041A\u041F\u041F"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("input", {
              className: formik.errors.kpp && formik.touched.kpp ? "form-lk__item error" : "form-lk__item",
              id: "kpp",
              name: "kpp",
              type: "text",
              placeholder: "\u041A\u041F\u041F",
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
              value: formik.values.kpp,
              disabled: existFlag
            })]
          })]
        })]
      }), existFlag ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
        className: "form-lk__legend",
        children: "\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443 \u0434\u043B\u044F \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445"
      }) : null, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("div", {
        className: "form-lk__control",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("button", {
          className: "form-lk__button-back button button--transparent",
          onClick: () => setStep("one"),
          children: "\u2190 \u041D\u0430\u0437\u0430\u0434"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("a", {
          className: "form-lk__button-cancel form-lk__button-cancel--mobile button button--transparent",
          href: "lk-my-organization.html",
          children: "\u2717 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("button", {
          className: "form-lk__button-save button" // onClick={() => dataAPI.getOrganization(formik.values.inn)}
          ,
          onClick: formik.onSubmit,
          type: "submit",
          children: "\u2713 \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FormAddOrganization2);

/***/ }),
/* 1247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form_Name_Form_Name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1248);
/* harmony import */ var _Form_Email_Form_Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1249);
/* harmony import */ var _Form_Phone_Form_Phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1250);
/* harmony import */ var _react_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1251);
/* harmony import */ var _react_Code_Code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1254);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(512);
/* harmony import */ var _react_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1258);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true
});

const FormPersonalData = () => {
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [phone, setPhone] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [newPhone, setNewPhone] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [editModePhone, setEditModePhone] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [newEmail, setNewEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const link = document.querySelector("#alert--confirm-email").content.querySelector(".alert__link");
  link.textContent = `${newEmail}.`;
  link.setAttribute("href", `mailto:${newEmail}`);

  const fetchData = async () => {
    const data = await _api_api__WEBPACK_IMPORTED_MODULE_6__["profileApi"].getProfile();

    if (data.status === "success") {
      setName(data.profile.name);
      setEmail(data.profile.email);
      setPhone(data.profile.phone);
    } else {
      setError(data);
    }

    setIsLoading(false);
  };

  const updateName = async value => {
    await _api_api__WEBPACK_IMPORTED_MODULE_6__["profileApi"].updateName(value);
    setName(value);
  };

  const updateEmail = async value => {
    setNewEmail(value);
    await _api_api__WEBPACK_IMPORTED_MODULE_6__["profileApi"].updateEmail(value);
    setEmail(newEmail);
  };

  const updatePhone = async value => {
    const data = await _api_api__WEBPACK_IMPORTED_MODULE_6__["profileApi"].updatePhone(value);

    if (data !== false) {
      setShow(true);
      setNewPhone(value);
    }
  };

  const sendSMS = async sms => {
    await _api_api__WEBPACK_IMPORTED_MODULE_6__["profileApi"].sendSMS(sms, newPhone, setShow);
    setPhone(newPhone);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (show) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getPaddingOnBody"])();
    } else {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["getPaddingFromBody"])();
    }
  }, [show]);

  if (error !== null) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("h2", {
        className: "form-lk__title",
        children: "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("p", {
        className: "Organization__contact-header",
        children: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445."
      })]
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: [show && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_react_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      closeModal: () => {
        setShow(false);
      },
      className: "Modal--sms",
      closeEvent: placeholderEvent,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_react_Code_Code__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("h2", {
      className: "form-lk__title",
      children: "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"
    }), isLoading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_react_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: "#212F4E"
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_Form_Name_Form_Name__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: name,
        updateName: updateName
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_Form_Email_Form_Email__WEBPACK_IMPORTED_MODULE_2__["default"], {
        email: email,
        updateEmail: updateEmail
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_Form_Phone_Form_Phone__WEBPACK_IMPORTED_MODULE_3__["default"], {
        phone: phone,
        editModePhone: editModePhone,
        setEditModePhone: setEditModePhone,
        updatePhone: updatePhone
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FormPersonalData);

/***/ }),
/* 1248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const FormName = props => {
  const {
    name,
    updateName
  } = props;
  const [editModeName, setEditModeName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormik"])({
    initialValues: {
      name
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
      name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(2, 'Минимум 2 символа').max(100, 'Максимум 100 символов').required('Обязательное поле!')
    }),
    onSubmit: values => {
      if (name !== values.name) {
        // console.log(JSON.stringify(values, null, 2));
        updateName(values.name);
      }

      setEditModeName(true);
    }
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("form", {
    className: "form-personal-data form-lk",
    onSubmit: formik.handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("label", {
      className: formik.errors.name && formik.touched.name ? 'form-lk__label error' : 'form-lk__label',
      htmlFor: "name",
      children: ["\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
        children: "*"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", {
      className: formik.errors.name && formik.touched.name ? 'form-lk__item error' : 'form-lk__item form-lk__item--limited',
      id: "name",
      name: "name",
      type: "text",
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
      disabled: editModeName,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.name
    }), editModeName && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
      className: "form-lk__button-personal form-lk__button-personal--edit",
      onClick: () => setEditModeName(!editModeName),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("svg", {
        className: "form-lk__pencil-icon",
        width: "25",
        height: "25",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("use", {
          xlinkHref: "#icon-pencil"
        })
      })
    }), !editModeName && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("button", {
      className: "form-lk__button-personal form-lk__button-personal--save",
      disabled: !formik.isValid && !formik.dirty,
      onClick: formik.onSubmit,
      type: "submit",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
        children: "\u2713\xA0"
      }), "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FormName);

/***/ }),
/* 1249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const FormEmail = props => {
  const emailRegExp = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
  const {
    email,
    updateEmail
  } = props;
  const [editModeEmail, setEditModeEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormik"])({
    initialValues: {
      email
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
      email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(emailRegExp, 'Неправильный email адрес').max(100, 'Максимум 100 символов').required('Обязательное поле!')
    }),
    onSubmit: values => {
      if (email !== values.email) {
        updateEmail(values.email);
      }

      setEditModeEmail(true);
    }
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("form", {
      className: "form-personal-data form-lk",
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("label", {
        className: formik.errors.email && formik.touched.email ? 'form-lk__label error' : 'form-lk__label',
        htmlFor: "email",
        children: ["\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
          children: "*"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", {
        className: formik.errors.email && formik.touched.email ? 'form-lk__item error' : 'form-lk__item form-lk__item--limited',
        id: "email",
        name: "email",
        type: "email",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",
        disabled: editModeEmail,
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        value: formik.values.email
      }), editModeEmail && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
        className: "form-lk__button-personal form-lk__button-personal--edit",
        onClick: () => setEditModeEmail(!editModeEmail),
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("svg", {
          className: "form-lk__pencil-icon",
          width: "25",
          height: "25",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("use", {
            xlinkHref: "#icon-pencil"
          })
        })
      }), !editModeEmail && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("button", {
        className: "form-lk__button-personal form-lk__button-personal--save",
        disabled: !formik.isValid && !formik.dirty,
        type: "submit",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
          children: "\u2713\xA0"
        }), "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FormEmail);

/***/ }),
/* 1250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(844);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const FormPhone = props => {
  const {
    phone,
    updatePhone,
    editModePhone,
    setEditModePhone
  } = props;
  const phoneRegExp = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
    phone: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(phoneRegExp, 'Неправильный телефонный номер').max(20, 'Максимум 20 символов').required('Обязательное поле!')
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      phone
    },
    validationSchema: validationSchema,
    onSubmit: values => {
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
    }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      className: "form-personal-data form-lk",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("label", {
        className: errors.phone && touched.phone ? 'form-lk__label error' : 'form-lk__label',
        htmlFor: "phone",
        children: ["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("span", {
          children: "*"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a, {
        mask: "+7 (999) 999-99-99",
        maskPlaceholder: null,
        value: values.phone,
        onChange: handleChange,
        onBlur: handleBlur,
        disabled: editModePhone,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("input", {
          className: errors.phone && touched.phone ? 'form-lk__item error' : 'form-lk__item',
          id: "phone",
          name: "phone",
          type: "phone",
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.phone
        })
      }), editModePhone && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("button", {
        className: "form-lk__button-personal form-lk__button-personal--edit",
        onClick: () => setEditModePhone(!editModePhone),
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("svg", {
          className: "form-lk__pencil-icon",
          width: "25",
          height: "25",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("use", {
            xlinkHref: "#icon-pencil"
          })
        })
      }), !editModePhone && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("button", {
        className: "form-lk__button-personal form-lk__button-personal--save",
        disabled: !isValid && !dirty,
        type: "submit",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("span", {
          children: "\u2713\xA0"
        }), "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FormPhone);

/***/ }),
/* 1251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1252);
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Modal = ({
  children,
  closeModal,
  className,
  closeEvent
}) => {
  const onDismiss = () => {
    closeModal();
  };

  const onModalEscPress = evt => {
    if (evt.code === "Escape") {
      evt.preventDefault();
      window.dispatchEvent(closeEvent);
      onDismiss();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.addEventListener("keydown", onModalEscPress);
    return () => {
      document.removeEventListener("keydown", onModalEscPress);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("section", {
    className: `Modal${className ? ` ${className}` : ""}`,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "Modal__overlay",
      onClick: evt => {
        evt.target.dispatchEvent(closeEvent);
        closeModal();
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("section", {
      className: "Modal__container",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
        className: "Modal__close",
        onClick: evt => {
          evt.target.dispatchEvent(closeEvent);
          closeModal();
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("use", {
            href: "#icon-closer"
          })
        })
      }), children]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),
/* 1252 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1253);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1253 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Code_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1255);
/* harmony import */ var _Code_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Code_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var react_verification_code_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1257);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);



 // Хук для автоподстановки кода через WebOTP (Android)





function useWebOTP(formikRef, updateUI, CODE_LENGTH = 4) {
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!("OTPCredential" in window) || !navigator.credentials) return;
    const ac = new AbortController();
    navigator.credentials.get({
      otp: {
        transport: ["sms"]
      },
      signal: ac.signal
    }).then(otp => {
      if (!(otp !== null && otp !== void 0 && otp.code) || !formikRef.current) return; // Извлекаем цифры из сообщения вида "Код подтверждения Defa: 8561"

      const digits = otp.code.replace(/\D/g, "").slice(0, CODE_LENGTH);
      formikRef.current.setFieldValue("code", digits);
      updateUI(digits); // Обновляем ReactCodeInput визуально

      formikRef.current.submitForm();
    }).catch(err => console.warn("WebOTP не сработал:", err));
    return () => ac.abort();
  }, [formikRef, updateUI, CODE_LENGTH]);
}

const getMaskedPhone = phone => {
  if (!phone || phone.length < 18) return "";
  return `+7 (***) ***-${phone[13]}${phone[14]}-${phone[16]}${phone[17]}`;
};

const Code = ({
  phoneNumber,
  changeAction,
  sendAgain,
  sendSms
}) => {
  const [seconds, setSeconds] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(60);
  const [codeValue, setCodeValue] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""); // Для ReactCodeInput

  const formikRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null); // Таймер

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    const timer = setInterval(() => setSeconds(prev => prev > 0 ? prev - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []); // Android WebOTP

  useWebOTP(formikRef, setCodeValue, 4); // iOS Safari: скрытое поле

  const handleIOSInput = e => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (!digits) return;
    setCodeValue(digits); // Обновляем ReactCodeInput визуально

    if (formikRef.current) {
      formikRef.current.setFieldValue("code", digits);
      if (digits.length === 4) formikRef.current.submitForm();
    }
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("div", {
    className: "Code",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
      className: "Code__header",
      children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("p", {
      className: "Code__text",
      children: ["\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043D\u0430 \u043D\u043E\u043C\u0435\u0440 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("b", {
        children: getMaskedPhone(phoneNumber)
      }), "."]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("button", {
      className: "Code__button",
      type: "button",
      onClick: changeAction,
      children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      innerRef: formikRef,
      initialValues: {
        code: ""
      },
      onSubmit: values => sendSms(values.code),
      children: ({
        setFieldValue,
        submitForm
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("input", {
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
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_verification_code_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
          fields: 4,
          value: codeValue,
          onChange: value => setCodeValue(value),
          onComplete: value => {
            setFieldValue("code", value);
            submitForm();
          },
          inputProps: {
            autoComplete: "one-time-code",
            inputMode: "numeric"
          },
          className: "Code__number"
        })]
      })
    }), seconds === 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("button", {
      className: "Code__button",
      type: "button",
      onClick: () => {
        setSeconds(60);
        sendAgain();
      },
      children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u0434 \u043F\u043E SMS"
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("p", {
      className: "Code__seconds",
      children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u0434 \u043C\u043E\u0436\u043D\u043E \u0447\u0435\u0440\u0435\u0437 ", seconds, " \u0441\u0435\u043A\u0443\u043D\u0434"]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ }),
/* 1255 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1256);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1256 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1257 */,
/* 1258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1259);
/* harmony import */ var _Loader_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Loader_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const Loader = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
  className: "Loader",
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("circle", {
      cx: "15",
      cy: "15",
      r: "15",
      fill: "#EEEFF0"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
      d: "M22.8949 13.9986C22.6536 12.262 21.848 10.6529 20.6022 9.41917C19.3563 8.18546 17.7394 7.39558 16.0005 7.1712C14.2616 6.94683 12.4972 7.30041 10.979 8.17748C9.46084 9.05455 8.27315 10.4064 7.59889 12.0249M7.10547 8.07757V12.0249H11.0528",
      stroke: "#7F8899",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
      d: "M7.10547 15.9727C7.34681 17.7093 8.15244 19.3184 9.39826 20.5521C10.6441 21.7858 12.261 22.5757 13.9999 22.8001C15.7388 23.0244 17.5032 22.6709 19.0214 21.7938C20.5396 20.9167 21.7273 19.5648 22.4015 17.9463M22.8949 21.8937V17.9463H18.9476",
      stroke: "#7F8899",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),
/* 1259 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1260);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1260 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _politics_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1262);
/* harmony import */ var _politics_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_politics_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1262 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1263);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1263 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _not_found_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1265);
/* harmony import */ var _not_found_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_not_found_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1265 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1266);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1266 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site_nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1268);
/* harmony import */ var _site_nav_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_site_nav_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1268 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1269);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1269 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _question_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1271);
/* harmony import */ var _question_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_question_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1271 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1272);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1272 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormMessage", function() { return getFormMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTextareaAutoHeight", function() { return setTextareaAutoHeight; });
/* harmony import */ var _form_lk_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1274);
/* harmony import */ var _form_lk_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_lk_scss__WEBPACK_IMPORTED_MODULE_0__);
 // автоматическая высота для textarea

function OnInput() {
  this.style.height = 'auto';
  this.style.height = `${this.scrollHeight}px`;
}

const setTextareaAutoHeight = area => {
  const textareas = document.querySelectorAll(`${area}`);
  textareas.forEach(element => {
    element.setAttribute('style', `height:${element.scrollHeight}px; overflow-y:hidden;`);
    element.addEventListener('input', OnInput);
  });
};

const getBackForm = evt => {
  if (evt.target.classList.contains('form__reset')) {
    const content = evt.currentTarget.querySelector('.form__content');
    const message = evt.currentTarget.querySelector('.form__fail');
    const form = evt.currentTarget.querySelector('form');
    const submitButton = evt.currentTarget.querySelector('button[type="submit"]');
    form.reset();
    submitButton.removeAttribute('disabled');
    content.classList.remove('form__content--hidden');
    message.classList.remove('form__visible');
    evt.currentTarget.removeEventListener('click', getBackForm);
  }
};

const getFormMessage = (form, bollean) => {
  const template = document.querySelector(form);
  const content = template.querySelector('.form__content');
  content.classList.add('form__content--hidden');

  if (bollean === true) {
    const message = template.querySelector('.form__greetings');
    message.classList.add('form__visible');
  } else {
    const message = template.querySelector('.form__fail');
    message.classList.add('form__visible');
    template.addEventListener('click', getBackForm);
  }
};



/***/ }),
/* 1274 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1275);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1275 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _share_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1277);
/* harmony import */ var _share_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_share_scss__WEBPACK_IMPORTED_MODULE_0__);

const shares = document.querySelectorAll('.share');
shares.forEach(share => {
  // Логика для считывания адресса ссылки
  const copyButton = share.querySelector('.share__link--copy');
  const message = share.querySelector('.share__message');

  const showMessage = () => {
    message.classList.add('share__message--active');
    setTimeout(() => {
      message.classList.remove('share__message--active');
    }, 3000);
  };

  copyButton.onclick = () => {
    const link = window.location.href;
    const textarea = document.createElement('textarea');
    textarea.value = link;
    copyButton.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    showMessage();
  };
});

/***/ }),
/* 1277 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1278);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1278 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1280);
/* harmony import */ var _services_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_services_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1280 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1281);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1281 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1283);
/* harmony import */ var _article_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_article_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1283 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1284);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1284 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _background_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1286);
/* harmony import */ var _background_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_background_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1286 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1287);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1287 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _novelties_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1289);
/* harmony import */ var _novelties_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novelties_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);


const novelties = document.querySelectorAll('.novelties');

if (novelties) {
  const noveltiesNolint = new swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["default"]('.novelties__slider', {
    modules: [swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper_swiper_esm__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"]],
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    // Navigation arrows
    navigation: {
      prevEl: '.novelties__slider-button--prev',
      nextEl: '.novelties__slider-button--next',
      disabledClass: 'novelties__slider-button--disabled'
    },
    // Scrollbar
    scrollbar: {
      el: '.novelties__scrollbar',
      dragClass: 'novelties__scrollbar-drag',
      draggable: true
    }
  });
}

/***/ }),
/* 1289 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1290);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1290 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _advantages_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1292);
/* harmony import */ var _advantages_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_advantages_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1292 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1293);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1293 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1295);
/* harmony import */ var _about_nav_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_about_nav_scss__WEBPACK_IMPORTED_MODULE_0__);

const storagesInfo = document.querySelector('.about-nav');

if (storagesInfo) {
  const toggle = storagesInfo.querySelector('.about-nav__header');
  document.addEventListener('click', evt => {
    if (window.innerWidth < 992) {
      if (evt.target === toggle) {
        storagesInfo.classList.toggle('about-nav--active');
      } else {
        storagesInfo.classList.remove('about-nav--active');
      }
    }
  });
}

/***/ }),
/* 1295 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1296);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1296 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _team_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1298);
/* harmony import */ var _team_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_team_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1298 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1299);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1299 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1301);
/* harmony import */ var _projects_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_projects_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1301 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1302);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1302 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contacts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1304);
/* harmony import */ var _contacts_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_contacts_scss__WEBPACK_IMPORTED_MODULE_0__);

const copy = document.querySelector('.contacts__nav-link--copy');

if (copy) {
  const message = copy.nextElementSibling;

  const showMessage = () => {
    message.classList.add('contacts__message--active');
    setTimeout(() => {
      message.classList.remove('contacts__message--active');
    }, 3000);
  }; // Логика для считывания адресса ссылки


  copy.onclick = () => {
    // const { link } = copy.dataset;
    const link = window.location.href;
    const textarea = document.createElement('textarea');
    textarea.value = link;
    copy.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    showMessage();
  };
}

/***/ }),
/* 1304 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1305);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1305 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1307);
/* harmony import */ var _offer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_offer_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1307 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1308);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1308 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payment_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1310);
/* harmony import */ var _payment_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_payment_scss__WEBPACK_IMPORTED_MODULE_0__);

const payment = document.querySelector('.payment');

const changeText = text => {
  if (window.innerWidth < 992 && text.textContent === 'Оплата по QR коду') {
    text.textContent = 'Оплата через СБП';
  } else if (window.innerWidth > 991 && text.textContent === 'Оплата через СБП') {
    text.textContent = 'Оплата по QR коду';
  }
};

if (payment) {
  const qr = payment.querySelector('.payment__qr');

  if (qr) {
    const text = payment.querySelector('.payment__text');
    changeText(text);
    window.addEventListener('resize', () => {
      changeText(text);
    });
  }
}

/***/ }),
/* 1310 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1311);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1311 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);
/* harmony import */ var _cart_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cart_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1313 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1314);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1314 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_amount_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1316);
/* harmony import */ var _cart_amount_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cart_amount_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1316 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1317);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1317 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_block_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1319);
/* harmony import */ var _cart_block_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cart_block_scss__WEBPACK_IMPORTED_MODULE_0__);

const accordions = document.querySelectorAll('.cart-block');

if (accordions) {
  accordions.forEach(accordion => {
    const button = accordion.querySelector('.cart-block__header');
    const inner = accordion.querySelector('.cart-block__inner');

    const animateIn = () => {
      inner.classList.add('cart-block__inner--overflow');
      inner.removeEventListener('transitionend', animateIn);
    };

    button.addEventListener('click', () => {
      accordion.classList.toggle('cart-block--active');

      if (accordion.classList.contains('cart-block--active')) {
        inner.style.maxHeight = `${inner.scrollHeight}px`;
        inner.addEventListener('transitionend', animateIn);
      } else {
        inner.style.maxHeight = '';
        inner.classList.remove('cart-block__inner--overflow');
      }
    });
  });
}

window.addEventListener('load', () => {
  const activeAccordions = document.querySelectorAll('.cart-block--active');

  if (activeAccordions) {
    activeAccordions.forEach(accordion => {
      const inner = accordion.querySelector('.cart-block__inner');

      const animateIn = () => {
        inner.classList.add('cart-block__inner--overflow');
        inner.removeEventListener('transitionend', animateIn);
      };

      inner.style.maxHeight = `${inner.scrollHeight}px`;
      inner.addEventListener('transitionend', animateIn);
    });
  }
});

/***/ }),
/* 1319 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1320);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1320 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_missed_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1322);
/* harmony import */ var _cart_missed_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cart_missed_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1322 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1323);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1323 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partners_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1325);
/* harmony import */ var _partners_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_partners_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1325 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1326);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1326 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notice_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1328);
/* harmony import */ var _notice_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notice_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1328 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1329);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1329 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1331);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_profile_page_scss__WEBPACK_IMPORTED_MODULE_0__);

const profilePage = document.querySelector('.profile-page');

if (profilePage) {
  const profileTop = profilePage.querySelector('.profile-page__top');
  const addOrganization = document.querySelector('#add-organization');

  if (addOrganization) {
    profileTop.classList.add('profile-page__top--hidden');
  }
}

/***/ }),
/* 1331 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1332);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1332 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1334);
/* harmony import */ var _profile_nav_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_profile_nav_scss__WEBPACK_IMPORTED_MODULE_0__);

const profileNav = document.querySelector('.profile-nav');

if (profileNav) {
  const toggle = profileNav.querySelector('.profile-nav__toggle'); // toggle.addEventListener('click', () => {
  //   profileNav.classList.toggle('profile-nav--active');
  // });

  document.addEventListener('click', evt => {
    if (evt.target === toggle) {
      profileNav.classList.toggle('profile-nav--active');
    } else {
      profileNav.classList.remove('profile-nav--active');
    }
  });
}

/***/ }),
/* 1334 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1335);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1335 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_subscribes_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1337);
/* harmony import */ var _profile_subscribes_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_profile_subscribes_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1337 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1338);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1338 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offer_details_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1340);
/* harmony import */ var _offer_details_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_offer_details_scss__WEBPACK_IMPORTED_MODULE_0__);

const offerDetails = document.querySelector('.offer-details');

if (offerDetails) {
  const printButtons = offerDetails.querySelectorAll('.offer-details__print');
  printButtons.forEach(printButton => {
    printButton.addEventListener('click', () => {
      window.print();
    });
  });
}

/***/ }),
/* 1340 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1341);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1341 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _qr_code_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1343);
/* harmony import */ var _qr_code_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_qr_code_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1345);
/* harmony import */ var qartjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qartjs__WEBPACK_IMPORTED_MODULE_1__);


const codes = document.querySelectorAll('.qr-code');
codes.forEach(code => {
  const a = code.querySelector('a');
  const img = code.querySelector('img');

  if (a && img) {
    const {
      href
    } = a;
    const {
      src
    } = img;
    a.remove();
    img.remove();
    const qart = new qartjs__WEBPACK_IMPORTED_MODULE_1___default.a({
      value: href,
      imagePath: src,
      filter: 'color',
      size: 250
    }); // directly appending canvas to the document

    qart.make(code.querySelector('.qr-code__wrapper'));
  }
});

/***/ }),
/* 1343 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1344);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1344 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1345 */,
/* 1346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculator_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1347);
/* harmony import */ var _calculator_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_calculator_scss__WEBPACK_IMPORTED_MODULE_0__);

const calculator = document.querySelector('.calculator');

if (calculator) {
  const openButton = calculator.querySelector('.calculator__toggle');
  const wrapper = calculator.querySelector('.calculator__wrapper');

  if (openButton && wrapper) {
    openButton.addEventListener('click', evt => {
      evt.preventDefault();
      wrapper.classList.toggle('calculator__wrapper--active');
    });
    const result = document.querySelector('.calculator__result');
    const expression = document.querySelector('.calculator__expression');
    const num = document.querySelectorAll('.calculator__button--number');
    const operation = document.querySelectorAll('.calculator__button--operation');
    const equals = document.querySelector('.calculator__button--equals');
    const clear = document.querySelector('.calculator__button--clear');
    const ce = document.querySelector('.calculator__button--ce');
    let ex = ''; // the expression string to be eval'd

    result.innerHTML = '0';

    const checkLength = arg => {
      // if we enter a number that's too long
      if (arg.toString().length > 14) {
        expression.innerHTML = 'number too long'.toUpperCase();
        result.innerHTML = '0';
        ex = '0';
      }
    };

    const trim12 = arg => {
      // if we calculate a number that's too long
      if (arg.toString().length > 14) {
        ex = parseFloat(arg.toPrecision(12));

        if (ex.toString().length > 14) {
          ex = ex.toExponential(9);
        }

        return ex;
      }

      return arg;
    };

    const clickN = evt => {
      // when we click on a number
      if (!ex || typeof ex === 'number' || ex === '0') {
        expression.innerHTML = evt.target.dataset.number;
        ex = evt.target.dataset.number;
      } else {
        expression.innerHTML += evt.target.dataset.number;
        ex += evt.target.dataset.number;
      }

      result.innerHTML = ex.split(/\/|\*|\+|-|=/).pop();
      checkLength(result.innerHTML);
    };

    const clickO = evt => {
      // when we click on an operation
      if (!ex) {
        return;
      }

      ex = ex.toString().replace(/=/, '');

      if (ex.match(/\/|\*|\+|-|=/)) {
        ex = eval(ex).toString();
      }

      expression.innerHTML = expression.innerHTML.replace(/=/, '') + evt.target.dataset.number;
      ex += evt.target.dataset.number;
      result.innerHTML = evt.target.dataset.number;
    };

    Array.from(num).forEach(element => {
      // assign appropriate function to all numbers and operations
      element.addEventListener('click', clickN);
    });
    Array.from(operation).forEach(element => {
      element.addEventListener('click', clickO);
    }); // clear all on click

    clear.addEventListener('click', () => {
      result.innerHTML = '';
      expression.innerHTML = '';
      ex = '';
    }); // clear last entry on click

    ce.addEventListener('click', () => {
      if (!expression.innerHTML.match(/=$/)) {
        const doCE = arg => {
          const newArg = arg.split(/([\/\*\+\-\=])/g);
          newArg.splice(-1, 1);
          return newArg.join('');
        };

        expression.innerHTML = doCE(expression.innerHTML);
        ex = doCE(ex);
        result.innerHTML = 0;
      }
    }); // calculate the whole thing

    equals.addEventListener('click', () => {
      if (!ex) {
        result.innerHTML = '0';
      } else {
        ex = eval(ex);
        expression.innerHTML += '=';
        result.innerHTML = trim12(ex);
      }
    });
  }
}

/***/ }),
/* 1347 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1348);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1348 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1350);
/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1350 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1351);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1351 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _how_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1353);
/* harmony import */ var _how_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_how_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1353 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1354);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1354 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _catalog_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1356);
/* harmony import */ var _catalog_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_catalog_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1356 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1357);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1357 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1359);
/* harmony import */ var _article_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_article_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1359 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1360);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1360 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _document_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1362);
/* harmony import */ var _document_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_document_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1362 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1363);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1363 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _promotion_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1365);
/* harmony import */ var _promotion_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_promotion_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1365 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1366);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1366 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1368);
/* harmony import */ var _service_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_service_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1368 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1369);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1369 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1371);
/* harmony import */ var _category_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_category_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1371 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1372);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1372 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _advantage_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1374);
/* harmony import */ var _advantage_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_advantage_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1374 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1375);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1375 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _team_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1377);
/* harmony import */ var _team_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_team_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1377 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1378);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1378 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1380);
/* harmony import */ var _cart_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cart_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1380 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1381);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1381 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offer_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1383);
/* harmony import */ var _offer_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_offer_card_scss__WEBPACK_IMPORTED_MODULE_0__);

window.addEventListener('load', () => {
  const activeAccordions = document.querySelectorAll('.offer-card--active');

  if (activeAccordions) {
    activeAccordions.forEach(accordion => {
      const inner = accordion.querySelector('.offer-card__inner');
      inner.style.maxHeight = `${inner.scrollHeight}px`;
    });
  }
});

/***/ }),
/* 1383 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1384);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1384 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offer_detail_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1386);
/* harmony import */ var _offer_detail_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_offer_detail_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1386 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1387);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1387 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1389);
/* harmony import */ var _news_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_news_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1389 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1390);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1390 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestProductProvider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1392);
/* harmony import */ var _RequestProductProvider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_RequestProductProvider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_RequestProduct_RequestProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1394);
/* harmony import */ var _api_RequestProductApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1413);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const requestProduct = document.querySelector('#RequestProductProvider');

if (requestProduct) {
  const {
    id
  } = requestProduct.dataset;

  const RequestProductProvider = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_react_RequestProduct_RequestProduct__WEBPACK_IMPORTED_MODULE_2__["default"], {
      submitHandler: _api_RequestProductApi__WEBPACK_IMPORTED_MODULE_3__["sendRequestProduct"],
      id: id
    })
  });

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(RequestProductProvider, {}), requestProduct);
}

/***/ }),
/* 1392 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1393);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1393 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestProduct_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);
/* harmony import */ var _RequestProduct_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_RequestProduct_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(544);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1397);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(671);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1404);
/* harmony import */ var _Textarea_Textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1407);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1410);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












const RequestProduct = ({
  submitHandler,
  id
}) => {
  const MAX_SIZE = 10240000;
  const MAX_FILES = 10;
  const FILE_TYPES = ['jpg', 'jpeg', 'gif', 'png'];
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
    fio: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required(),
    email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email().required(),
    text: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required(),
    legal: yup__WEBPACK_IMPORTED_MODULE_4__["boolean"]().oneOf([true])
  });
  const [isVisibleFileLoad, setVisibleFileLoad] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [myFiles, setMyFiles] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [isMaxCountCap, setIsMaxCountCap] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [myFilesSize, setMyFilesSize] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const [isMaxSizeCap, setIsMaxSizeCap] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let totalSize = myFilesSize; // Состояния необходимые после сброса формы.

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
  }; // const letShowErrorMaxSize = () => {
  //   if (totalSize > MAX_SIZE) {
  //     setIsMaxSizeCap(true);
  //   } else {
  //     setIsMaxSizeCap(false);
  //   }
  // };


  function fileValidator(file) {
    const fileName = file.name.toLowerCase();

    if (!FILE_TYPES.some(type => fileName.endsWith(type))) {
      return {
        code: 'wrong-type',
        message: 'Недопустимый файл!'
      };
    } // if (file.size > MAX_SIZE) {
    //   return {
    //     code: 'size-too-large',
    //     message: 'Размер файлов не должен превышать 10 МБ!',
    //   };
    // }


    return null;
  }

  const dropzoneRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();

  const openDialog = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
    className: "RequestProduct",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
      className: "RequestProduct__header",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", {
        className: "RequestProduct__title",
        children: "\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
      initialValues: {
        id,
        fio: '',
        email: '',
        text: '',
        files: [],
        legal: false
      },
      validationSchema: validationSchema,
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
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        className: "RequestProduct__form",
        action: "#",
        method: "post",
        noValidate: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestProduct__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
            type: "text",
            name: "fio",
            label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
            className: errors.fio && touched.fio ? 'Input--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestProduct__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
            type: "email",
            name: "email",
            label: "E-mail",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
            className: errors.email && touched.email ? 'Input--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestProduct__field RequestProduct__field--wide",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Textarea_Textarea__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text",
            label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
            className: errors.text && touched.text ? 'Textarea--error' : null
          })
        }), !isVisibleFileLoad && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestProduct__field RequestProduct__field--wide",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
            className: "RequestProduct__file",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("button", {
              type: "button",
              className: "button button--transparent RequestProduct__file-button",
              onClick: () => setVisibleFileLoad(prevState => !prevState),
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("use", {
                  href: "#icon-clip"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("span", {
                children: "\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
              className: "RequestProduct__file-warning",
              children: "\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10-\u0438 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 .jpeg, .gif, .png. \u0420\u0430\u0437\u043C\u0435\u0440 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10 MB."
            })]
          })
        }), isVisibleFileLoad && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestProduct__field RequestProduct__field--wide",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_dropzone__WEBPACK_IMPORTED_MODULE_3__["default"], {
            ref: dropzoneRef,
            noClick: true,
            noKeyboard: true,
            validator: fileValidator,
            accept: {
              'image/jpeg': ['.png', '.jpg', '.jpeg', '.gif']
            },
            onDrop: acceptedFiles => {
              acceptedFiles.forEach(file => {
                if (myFiles.findIndex(item => item.name === file.name) === -1) {
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
              setFieldValue('files', myFiles.slice(0, MAX_FILES));
            },
            children: ({
              getRootProps,
              getInputProps,
              fileRejections
            }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                className: "RequestProduct__files",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("ul", {
                  className: "RequestProduct__files-list",
                  children: myFiles.map(file => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("li", {
                    className: "RequestProduct__files-item",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                      className: "RequestProduct__files-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
                        className: "RequestProduct__files-name",
                        children: file.path
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("p", {
                        className: "RequestProduct__files-size",
                        children: [file.size, " KB"]
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("button", {
                      type: "button",
                      className: "RequestProduct__files-delete",
                      onClick: () => {
                        totalSize -= file.size;
                        setMyFilesSize(totalSize);
                        myFiles.splice(myFiles.indexOf(file), 1);
                        setFieldValue('files', myFiles);
                        letShowErrorMaxCount();
                        setIsMaxSizeCap(false);
                      },
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("span", {})
                    })]
                  }, file.path))
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("ul", {
                  className: "RequestProduct__files-list",
                  children: fileRejections.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
                    className: "RequestProduct__files-item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                      className: "RequestProduct__files-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
                        className: "RequestProduct__files-name",
                        children: item.file.path
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("ul", {
                        className: "RequestProduct__errors",
                        children: item.errors.map(e => e.code !== 'file-invalid-type' && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
                            className: "RequestProduct__errors-text",
                            children: e.message
                          })
                        }, e.code))
                      })]
                    })
                  }, item.file.path))
                }), isMaxCountCap && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("ul", {
                  className: "RequestProduct__files-list",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
                    className: "RequestProduct__files-item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
                      className: "RequestProduct__errors-text",
                      children: "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E \u0444\u0430\u0439\u043B\u043E\u0432!"
                    })
                  })
                }), isMaxSizeCap && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("ul", {
                  className: "RequestProduct__files-list",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
                    className: "RequestProduct__files-item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
                      className: "RequestProduct__errors-text",
                      children: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u043E\u0432 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 10 \u041C\u0411!"
                    })
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", { ...getRootProps({
                  className: 'RequestProduct__dropzone'
                }),
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", { ...getInputProps()
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("p", {
                  className: "RequestProduct__dropzone-text",
                  children: ["\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u044D\u0442\u0443 \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0438\u043B\u0438 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("button", {
                    className: "RequestProduct__dropzone-button",
                    type: "button",
                    onClick: openDialog,
                    children: "\u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435"
                  }), " \u0444\u0430\u0439\u043B\u044B \u0432\u0440\u0443\u0447\u043D\u0443\u044E."]
                })]
              })]
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestProduct__field RequestProduct__field--wide",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
            className: "RequestProduct__terms",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
              className: "RequestProduct__legal",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
                type: "checkbox",
                name: "legal",
                toggle: true,
                isRequired: true,
                className: errors.legal && touched.legal ? 'Checkbox--error' : null,
                checked: values.legal
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("p", {
                children: ["\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                  href: "/about/privacy.php",
                  target: "_blank",
                  children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
                }), " \u0438 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                  href: "/about/agreement.php",
                  target: "_blank",
                  children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C"
                }), "."]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("button", {
              className: "RequestProduct__submit button",
              type: "submit",
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
            })]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RequestProduct);

/***/ }),
/* 1395 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1396);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1396 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1397 */,
/* 1398 */,
/* 1399 */,
/* 1400 */,
/* 1401 */,
/* 1402 */,
/* 1403 */,
/* 1404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1405);
/* harmony import */ var _Input_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Input_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Input = ({
  type,
  name,
  className,
  label,
  isRequired,
  isDisabled,
  placeholder
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
  className: `Input${className ? ` ${className}` : ''}`,
  children: [label ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("label", {
    className: isRequired ? 'Input__label Input__label--required' : 'Input__label',
    children: label
  }) : null, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    autoComplete: "off",
    autoCapitalize: "off",
    disabled: isDisabled,
    className: "Input__field",
    type: type,
    name: name,
    placeholder: placeholder
  })]
});

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),
/* 1405 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1406);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1406 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Textarea_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1408);
/* harmony import */ var _Textarea_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Textarea_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Textarea = ({
  name,
  className,
  label,
  isRequired,
  isDisabled,
  placeholder
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
  className: `Textarea${className ? ` ${className}` : ''}`,
  children: [label ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("label", {
    className: isRequired ? 'Textarea__label Textarea__label--required' : 'Textarea__label',
    children: label
  }) : null, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    as: "textarea",
    autoComplete: "off",
    autoCapitalize: "off",
    disabled: isDisabled,
    className: "Textarea__field",
    name: name,
    placeholder: placeholder
  })]
});

/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),
/* 1408 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1409);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1409 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1410 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1411);
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Checkbox = ({
  type,
  name,
  className,
  toggle,
  isRequired,
  isDisabled,
  placeholder
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
  className: `Checkbox${className ? ` ${className}` : ''}`,
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("label", {
    className: "Checkbox__label",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      disabled: isDisabled,
      className: toggle ? 'Checkbox__field Checkbox__field--toggle' : 'Checkbox__field',
      type: type,
      name: name,
      placeholder: placeholder
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
      className: "Checkbox__box"
    })]
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),
/* 1411 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1412);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1412 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1413 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequestProduct", function() { return sendRequestProduct; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(245);
/* harmony import */ var _components_alert_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(118);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);




const requestProductApi = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: '/local/ajax',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
});

const setStatus = status => {
  switch (status) {
    case 'success':
      return 'alert--green';

    case 'error':
      return 'alert--red';

    default:
      return '';
  }
}; // eslint-disable-next-line import/prefer-default-export


const sendRequestProduct = (values, reset, requestProductDecorator) => {
  const data = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["createFormData"])(values);
  Object(_components_loading_loading__WEBPACK_IMPORTED_MODULE_1__["addLoading"])('#RequestProductProvider');
  return requestProductApi.post('/feedback_question.php', data).then(response => {
    if (response.status === 200) {
      const alert = document.querySelector('#alert--request').content.querySelector('.alert');
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
      container.innerHTML = response.data.text;
      Object(_components_loading_loading__WEBPACK_IMPORTED_MODULE_1__["removeLoading"])();
      Object(_components_alert_alert__WEBPACK_IMPORTED_MODULE_2__["summonAlert"])('#alert--request');
      reset();
      requestProductDecorator();
    }
  }).catch(() => {
    Object(_components_loading_loading__WEBPACK_IMPORTED_MODULE_1__["removeLoading"])();
    Object(_components_alert_alert__WEBPACK_IMPORTED_MODULE_2__["summonAlert"])('#alert--error');
  });
};

/***/ }),
/* 1414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestSearchProvider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1415);
/* harmony import */ var _RequestSearchProvider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_RequestSearchProvider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_RequestSearch_RequestSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1417);
/* harmony import */ var _api_RequestSearchApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1426);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const requestSearch = document.querySelector('#RequestSearchProvider');

if (requestSearch) {
  const {
    id
  } = requestSearch.dataset;

  const RequestSearchProvider = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_react_RequestSearch_RequestSearch__WEBPACK_IMPORTED_MODULE_2__["default"], {
      submitHandler: _api_RequestSearchApi__WEBPACK_IMPORTED_MODULE_3__["sendRequestSearch"],
      id: id
    })
  });

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(RequestSearchProvider, {}), requestSearch);
}

/***/ }),
/* 1415 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1416);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1416 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestSearch_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1418);
/* harmony import */ var _RequestSearch_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_RequestSearch_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1404);
/* harmony import */ var _PhoneInput_PhoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1420);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1410);
/* harmony import */ var _FormContacts_FormContacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1423);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const RequestSearch = ({
  submitHandler,
  id
}) => {
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    fio: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required(),
    phone: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["phoneRegExp"]).required(),
    email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email().required(),
    legal: yup__WEBPACK_IMPORTED_MODULE_2__["boolean"]().oneOf([true])
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
    className: "RequestSearch",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
      className: "RequestSearch__header",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", {
        className: "RequestSearch__title",
        children: "\u041D\u0435 \u043D\u0430\u0448\u043B\u0438 \u0447\u0442\u043E \u0438\u0441\u043A\u0430\u043B\u0438?"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
        className: "RequestSearch__post-title",
        children: "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u043D\u0430\u043C, \u0438 \u043C\u044B \u0441 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435\u043C \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u043D\u0430\u0439\u0442\u0438 \u043D\u0443\u0436\u043D\u0443\u044E \u0432\u0430\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E."
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: {
        id,
        fio: '',
        phone: '',
        email: ''
      },
      validationSchema: validationSchema,
      onSubmit: (values, actions) => {
        submitHandler(values, actions.resetForm);
      },
      children: ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        className: "RequestSearch__form",
        action: "#",
        method: "post",
        noValidate: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestSearch__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "text",
            name: "fio",
            label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
            className: errors.fio && touched.fio ? 'Input--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestSearch__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_PhoneInput_PhoneInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
            name: "phone",
            label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
            value: values.phone,
            isRequired: true,
            placeholder: "+7 (999) 999-99-99",
            onChange: handleChange,
            onBlur: handleBlur,
            className: errors.phone && touched.phone ? 'PhoneInput--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestSearch__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "email",
            name: "email",
            label: "E-mail",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
            className: errors.email && touched.email ? 'Input--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestSearch__field RequestSearch__field--wide",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
            className: "RequestSearch__terms",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
              className: "RequestSearch__legal",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
                type: "checkbox",
                name: "legal",
                toggle: true,
                isRequired: true,
                className: errors.legal && touched.legal ? 'Checkbox--error' : null,
                checked: values.legal
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("p", {
                children: ["\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                  href: "/about/privacy.php",
                  target: "_blank",
                  children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
                }), " \u0438 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                  href: "/about/agreement.php",
                  target: "_blank",
                  children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C"
                }), "."]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("button", {
              className: "RequestSearch__submit button",
              type: "submit",
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441"
            })]
          })
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
      className: "RequestSearch__footer",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_FormContacts_FormContacts__WEBPACK_IMPORTED_MODULE_6__["default"], {
        contacts: _utils_utils__WEBPACK_IMPORTED_MODULE_7__["CONTACTS"]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RequestSearch);

/***/ }),
/* 1418 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1419);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1419 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhoneInput_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1421);
/* harmony import */ var _PhoneInput_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_PhoneInput_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(844);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






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
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
  className: `PhoneInput${className ? ` ${className}` : ''}`,
  children: [label ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
    className: isRequired ? 'PhoneInput__label PhoneInput__label--required' : 'PhoneInput__label',
    children: label
  }) : null, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_input_mask__WEBPACK_IMPORTED_MODULE_2___default.a, {
    mask: "+7 (999) 999-99-99",
    maskPlaceholder: null,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    disabled: isDisabled,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      minLength: "10",
      autoComplete: "off",
      autoCapitalize: "off",
      className: "PhoneInput__field",
      type: "tel",
      name: name,
      placeholder: placeholder
    })
  })]
});

/* harmony default export */ __webpack_exports__["default"] = (PhoneInput);

/***/ }),
/* 1421 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1422);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1422 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1423 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormContacts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1424);
/* harmony import */ var _FormContacts_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FormContacts_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const FormContacts = props => {
  const {
    phones,
    mails,
    whatsapps,
    telegrams
  } = props.contacts;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
    className: "FormContacts",
    children: [phones && phones.map((phone, index) => {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("a", {
        className: "FormContacts__link",
        href: `tel:${phone.link}`,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("use", {
            xlinkHref: "#icon-contacts-phone"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
          children: phone.name
        })]
      }, index);
    }), mails && mails.map((mail, index) => {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("a", {
        className: "FormContacts__link",
        href: `mailto:${mail.link}`,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("use", {
            xlinkHref: "#icon-contacts-mail"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
          children: mail.name
        })]
      }, index);
    }), whatsapps && whatsapps.map((whatsapp, index) => {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("a", {
        className: "FormContacts__link",
        href: whatsapp.link,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("use", {
            xlinkHref: "#icon-contacts-whatsup"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
          children: whatsapp.name
        })]
      }, index);
    }), telegrams && telegrams.map((telegram, index) => {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("a", {
        className: "FormContacts__link",
        href: telegram.link,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("use", {
            xlinkHref: "#icon-contacts-telegram"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
          children: telegram.name
        })]
      }, index);
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FormContacts);

/***/ }),
/* 1424 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1425);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1425 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequestSearch", function() { return sendRequestSearch; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const RequestSearchApi = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: '/local/ajax',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
});

const setStatus = status => {
  switch (status) {
    case 'success':
      return 'alert--green';

    case 'error':
      return 'alert--red';

    default:
      return '';
  }
}; // eslint-disable-next-line import/prefer-default-export


const sendRequestSearch = (values, reset) => {
  window.Corners5ProjectLayout.addLoading('#RequestSearchProvider');
  RequestSearchApi.post('/search_notfound.php', values).then(response => {
    if (response.status === 200) {
      const alert = document.querySelector('#alert--request').content.querySelector('.alert');
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
      container.innerHTML = response.data.text;
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert('#alert--request');
      reset();
    }
  }).catch(() => {
    window.Corners5ProjectLayout.removeLoading();
    window.Corners5ProjectLayout.summonAlert('#alert--error');
  });
};

/***/ }),
/* 1427 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestServiceProvider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1428);
/* harmony import */ var _RequestServiceProvider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_RequestServiceProvider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_RequestService_RequestService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1430);
/* harmony import */ var _api_RequestServiceApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1433);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const requestService = document.querySelector('#RequestServiceProvider');

if (requestService) {
  const {
    id
  } = requestService.dataset;

  const RequestServiceProvider = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_react_RequestService_RequestService__WEBPACK_IMPORTED_MODULE_2__["default"], {
      submitHandler: _api_RequestServiceApi__WEBPACK_IMPORTED_MODULE_3__["sendRequestService"],
      id: id
    })
  });

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(RequestServiceProvider, {}), requestService);
}

/***/ }),
/* 1428 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1429);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1429 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1430 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestService_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1431);
/* harmony import */ var _RequestService_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_RequestService_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1404);
/* harmony import */ var _PhoneInput_PhoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1420);
/* harmony import */ var _Textarea_Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1407);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1410);
/* harmony import */ var _FormContacts_FormContacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1423);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const RequestService = ({
  submitHandler,
  id
}) => {
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    fio: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required(),
    phone: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["phoneRegExp"]).required(),
    email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email().required(),
    text: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required(),
    legal: yup__WEBPACK_IMPORTED_MODULE_2__["boolean"]().oneOf([true])
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("div", {
    className: "RequestService",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("div", {
      className: "RequestService__header",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("h2", {
        className: "RequestService__title",
        children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("p", {
        className: "RequestService__post-title",
        children: "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u043D\u0430\u043C, \u0438 \u043C\u044B \u0441 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435\u043C \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0443\u0436\u043D\u0443\u044E \u0432\u0430\u043C \u0443\u0441\u043B\u0443\u0433\u0443."
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: {
        id,
        fio: '',
        phone: '',
        email: '',
        text: ''
      },
      validationSchema: validationSchema,
      onSubmit: (values, actions) => {
        submitHandler(values, actions.resetForm);
      },
      children: ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        className: "RequestService__form",
        action: "#",
        method: "post",
        noValidate: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
          className: "RequestService__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "text",
            name: "fio",
            label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
            className: errors.fio && touched.fio ? 'Input--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
          className: "RequestService__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_PhoneInput_PhoneInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
            name: "phone",
            label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
            value: values.phone,
            isRequired: true,
            placeholder: "+7 (999) 999-99-99",
            onChange: handleChange,
            onBlur: handleBlur,
            className: errors.phone && touched.phone ? 'PhoneInput--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
          className: "RequestService__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "email",
            name: "email",
            label: "E-mail",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
            className: errors.email && touched.email ? 'Input--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
          className: "RequestService__field RequestService__field--wide",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_Textarea_Textarea__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "text",
            label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
            className: errors.text && touched.text ? 'Textarea--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
          className: "RequestService__field RequestService__field--wide",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("div", {
            className: "RequestService__terms",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("div", {
              className: "RequestService__legal",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
                type: "checkbox",
                name: "legal",
                toggle: true,
                isRequired: true,
                className: errors.legal && touched.legal ? 'Checkbox--error' : null,
                checked: values.legal
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("p", {
                children: ["\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
                  href: "/about/privacy.php",
                  target: "_blank",
                  children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
                }), " \u0438 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
                  href: "/about/agreement.php",
                  target: "_blank",
                  children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C"
                }), "."]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("button", {
              className: "RequestService__submit button",
              type: "submit",
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
            })]
          })
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
      className: "RequestService__footer",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_FormContacts_FormContacts__WEBPACK_IMPORTED_MODULE_7__["default"], {
        contacts: _utils_utils__WEBPACK_IMPORTED_MODULE_8__["CONTACTS"]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RequestService);

/***/ }),
/* 1431 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1432);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1432 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1433 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequestService", function() { return sendRequestService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const RequestServiceApi = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: '/local/ajax',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
});

const setStatus = status => {
  switch (status) {
    case 'success':
      return 'alert--green';

    case 'error':
      return 'alert--red';

    default:
      return '';
  }
}; // eslint-disable-next-line import/prefer-default-export


const sendRequestService = (values, reset) => {
  window.Corners5ProjectLayout.addLoading('#RequestServiceProvider');
  RequestServiceApi.post('/feedback_services.php', values).then(response => {
    if (response.status === 200) {
      const alert = document.querySelector('#alert--request').content.querySelector('.alert');
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
      container.innerHTML = response.data.text;
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert('#alert--request');
      reset();
    }
  }).catch(() => {
    window.Corners5ProjectLayout.removeLoading();
    window.Corners5ProjectLayout.summonAlert('#alert--error');
  });
};

/***/ }),
/* 1434 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestCooperationProvider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1435);
/* harmony import */ var _RequestCooperationProvider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_RequestCooperationProvider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_RequestCooperation_RequestCooperation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1437);
/* harmony import */ var _api_RequestCooperationApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1440);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const requestCooperation = document.querySelector('#RequestCooperationProvider');

if (requestCooperation) {
  const {
    id
  } = requestCooperation.dataset;

  const RequestCooperationProvider = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_react_RequestCooperation_RequestCooperation__WEBPACK_IMPORTED_MODULE_2__["default"], {
      submitHandler: _api_RequestCooperationApi__WEBPACK_IMPORTED_MODULE_3__["sendRequestCooperation"],
      id: id
    })
  });

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(RequestCooperationProvider, {}), requestCooperation);
}

/***/ }),
/* 1435 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1436);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1436 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestCooperation_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1438);
/* harmony import */ var _RequestCooperation_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_RequestCooperation_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1404);
/* harmony import */ var _PhoneInput_PhoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1420);
/* harmony import */ var _Textarea_Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1407);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1410);
/* harmony import */ var _FormContacts_FormContacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1423);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const RequestCooperation = ({
  submitHandler,
  id
}) => {
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    fio: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required(),
    phone: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["phoneRegExp"]).required(),
    email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email().required(),
    text: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required(),
    legal: yup__WEBPACK_IMPORTED_MODULE_2__["boolean"]().oneOf([true])
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("div", {
    className: "RequestCooperation",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
      className: "RequestCooperation__header",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("h2", {
        className: "RequestCooperation__title",
        children: "\u0421\u0442\u0430\u0442\u044C \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u043C"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: {
        id,
        fio: '',
        phone: '',
        email: '',
        text: '',
        legal: false
      },
      validationSchema: validationSchema,
      onSubmit: (values, actions) => {
        submitHandler(values, actions.resetForm);
      },
      children: ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        className: "RequestCooperation__form",
        action: "#",
        method: "post",
        noValidate: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
          className: "RequestCooperation__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "text",
            name: "fio",
            label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
            className: errors.fio && touched.fio ? 'Input--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
          className: "RequestCooperation__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_PhoneInput_PhoneInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
            name: "phone",
            label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
            value: values.phone,
            isRequired: true,
            placeholder: "+7 (999) 999-99-99",
            onChange: handleChange,
            onBlur: handleBlur,
            className: errors.phone && touched.phone ? 'PhoneInput--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
          className: "RequestCooperation__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "email",
            name: "email",
            label: "E-mail",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
            className: errors.email && touched.email ? 'Input--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
          className: "RequestCooperation__field RequestCooperation__field--wide",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_Textarea_Textarea__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "text",
            label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
            className: errors.text && touched.text ? 'Textarea--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
          className: "RequestCooperation__field RequestCooperation__field--wide",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("div", {
            className: "RequestCooperation__terms",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("div", {
              className: "RequestCooperation__legal",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
                type: "checkbox",
                name: "legal",
                toggle: true,
                isRequired: true,
                className: errors.legal && touched.legal ? 'Checkbox--error' : null,
                checked: values.legal
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("p", {
                children: ["\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
                  href: "/about/privacy.php",
                  target: "_blank",
                  children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
                }), " \u0438 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
                  href: "/about/agreement.php",
                  target: "_blank",
                  children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C"
                }), "."]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("button", {
              className: "RequestCooperation__submit button",
              type: "submit",
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
            })]
          })
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
      className: "RequestCooperation__footer",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_FormContacts_FormContacts__WEBPACK_IMPORTED_MODULE_7__["default"], {
        contacts: _utils_utils__WEBPACK_IMPORTED_MODULE_8__["CONTACTS"]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RequestCooperation);

/***/ }),
/* 1438 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1439);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1439 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequestCooperation", function() { return sendRequestCooperation; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const RequestCooperationApi = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: '/local/ajax',
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5000
});

const setStatus = status => {
  switch (status) {
    case 'success':
      return 'alert--green';

    case 'error':
      return 'alert--red';

    default:
      return '';
  }
}; // eslint-disable-next-line import/prefer-default-export


const sendRequestCooperation = (values, reset) => {
  window.Corners5ProjectLayout.addLoading('#RequestCooperationProvider');
  RequestCooperationApi.post('/feedback_partner.php', values).then(response => {
    if (response.status === 200) {
      const alert = document.querySelector('#alert--request').content.querySelector('.alert');
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
      container.innerHTML = response.data.text;
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert('#alert--request');
      reset();
    }
  }).catch(() => {
    window.Corners5ProjectLayout.removeLoading();
    window.Corners5ProjectLayout.summonAlert('#alert--error');
  });
};

/***/ }),
/* 1441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestContactsProvider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1442);
/* harmony import */ var _RequestContactsProvider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_RequestContactsProvider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_RequestContacts_RequestContacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1444);
/* harmony import */ var _api_RequestContactsApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1447);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const requestContacts = document.querySelector('#RequestContactsProvider');

if (requestContacts) {
  const {
    id
  } = requestContacts.dataset;

  const RequestContactsProvider = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_react_RequestContacts_RequestContacts__WEBPACK_IMPORTED_MODULE_2__["default"], {
      submitHandler: _api_RequestContactsApi__WEBPACK_IMPORTED_MODULE_3__["sendRequestContacts"],
      id: id
    })
  });

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(RequestContactsProvider, {}), requestContacts);
}

/***/ }),
/* 1442 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1443);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1443 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestContacts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1445);
/* harmony import */ var _RequestContacts_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_RequestContacts_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1404);
/* harmony import */ var _PhoneInput_PhoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1420);
/* harmony import */ var _Textarea_Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1407);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1410);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const RequestContacts = ({
  submitHandler,
  id
}) => {
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    fio: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required(),
    phone: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["phoneRegExp"]).required(),
    email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email().required(),
    text: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required(),
    legal: yup__WEBPACK_IMPORTED_MODULE_2__["boolean"]().oneOf([true])
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
    className: "RequestContacts",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
      className: "RequestContacts__header",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", {
        className: "RequestContacts__title",
        children: "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: {
        id,
        fio: '',
        phone: '',
        email: '',
        text: '',
        legal: false
      },
      validationSchema: validationSchema,
      onSubmit: (values, actions) => {
        submitHandler(values, actions.resetForm);
      },
      children: ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        className: "RequestContacts__form",
        action: "#",
        method: "post",
        noValidate: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestContacts__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "text",
            name: "fio",
            label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
            className: errors.fio && touched.fio ? 'Input--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestContacts__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_PhoneInput_PhoneInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
            name: "phone",
            label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
            value: values.phone,
            isRequired: true,
            placeholder: "+7 (999) 999-99-99",
            onChange: handleChange,
            onBlur: handleBlur,
            className: errors.phone && touched.phone ? 'PhoneInput--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestContacts__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "email",
            name: "email",
            label: "E-mail",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
            className: errors.email && touched.email ? 'Input--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestContacts__field RequestContacts__field--wide",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Textarea_Textarea__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "text",
            label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
            className: errors.text && touched.text ? 'Textarea--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "RequestContacts__field RequestContacts__field--wide",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
            className: "RequestContacts__terms",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
              className: "RequestContacts__legal",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
                type: "checkbox",
                name: "legal",
                toggle: true,
                isRequired: true,
                className: errors.legal && touched.legal ? 'Checkbox--error' : null,
                checked: values.legal
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("p", {
                children: ["\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                  href: "/about/privacy.php",
                  target: "_blank",
                  children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
                }), " \u0438 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                  href: "/about/agreement.php",
                  target: "_blank",
                  children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C"
                }), "."]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("button", {
              className: "RequestContacts__submit button",
              type: "submit",
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
            })]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RequestContacts);

/***/ }),
/* 1445 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1446);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1446 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequestContacts", function() { return sendRequestContacts; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const RequestContactsApi = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: '/local/ajax',
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5000
});

const setStatus = status => {
  switch (status) {
    case 'success':
      return 'alert--green';

    case 'error':
      return 'alert--red';

    default:
      return '';
  }
}; // eslint-disable-next-line import/prefer-default-export


const sendRequestContacts = (values, reset) => {
  window.Corners5ProjectLayout.addLoading('#RequestContactsProvider');
  RequestContactsApi.post('/feedback.php', values).then(response => {
    if (response.status === 200) {
      const alert = document.querySelector('#alert--request').content.querySelector('.alert');
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
      container.innerHTML = response.data.text;
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert('#alert--request');
      reset();
    }
  }).catch(() => {
    window.Corners5ProjectLayout.removeLoading();
    window.Corners5ProjectLayout.summonAlert('#alert--error');
  });
};

/***/ }),
/* 1448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrganizationProvider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1449);
/* harmony import */ var _OrganizationProvider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_OrganizationProvider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_OrganizationsApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1451);
/* harmony import */ var _react_Warning_Warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1452);
/* harmony import */ var _react_Organization_Organization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1456);
/* harmony import */ var _react_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1251);
/* harmony import */ var _react_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1258);
/* harmony import */ var _react_Code_Code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1254);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const emptyOrganization = {
  inn: "",
  companyName: "ООО Еще одна организация",
  yuraAddress: "",
  PostAddress: "",
  ogrn: "",
  kpp: "",
  bankName: "",
  bik: "",
  checkingAccount: "",
  correspondentAccount: "",
  contacts: [{
    fio: "",
    email: "",
    phone: "",
    role: ""
  }],
  meta: {
    status: "",
    message: ""
  }
};

const OrganizationProvider = () => {
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [organizations, setOrganizations] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [warnings, setWarnings] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [organizationToDelete, setOrganizationToDelete] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isLoading && organizations.length === 0) {
      Object(_api_OrganizationsApi__WEBPACK_IMPORTED_MODULE_3__["fetchOrganizations"])(setIsLoading, setOrganizations);
    }
  }); // берем массив органицаций вставляем обновленную организацию и делаем запрос на сервер, давая обратную связь

  const replaceOldOrgWithNew = newOrganization => {
    const indexToReplace = organizations.findIndex(item => item.inn === newOrganization.inn);
    organizations[indexToReplace] = newOrganization;
    Object(_api_OrganizationsApi__WEBPACK_IMPORTED_MODULE_3__["sendUpdatedOrganizations"])(organizations, indexToReplace, setOrganizations, warnings, setWarnings);
  }; // берем массив органицаций удаляем организацию и делаем запрос на сервер, давая обратную связь


  const deleteOrganization = () => {
    const updatedArray = organizations.filter(item => item.inn !== organizationToDelete);
    Object(_api_OrganizationsApi__WEBPACK_IMPORTED_MODULE_3__["sendDeletedOrganizations"])(updatedArray, setOrganizations, setOrganizationToDelete);
  }; // меняем статус заблокированной организации на разблокированный


  const unlockOrganization = inn => {
    const updatedOrganizations = [...organizations];
    const organiztionIndexToUnlock = updatedOrganizations.findIndex(item => item.inn === inn);
    updatedOrganizations[organiztionIndexToUnlock].meta.status = "";
    setOrganizations(updatedOrganizations);
  };

  const deleteWarning = index => {
    const filteredWarnings = warnings.filter((_alert, indx) => indx !== index);
    setWarnings(filteredWarnings);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("div", {
    className: "OrganizationProvider",
    children: [organizationToDelete ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_react_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      closeModal: () => {
        setOrganizationToDelete(null);
      },
      closeEvent: placeholderEvent,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("div", {
        className: "OrganizationProvider__delete",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("svg", {
          className: "OrganizationProvider__question",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("use", {
            href: "#icon-question"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("p", {
          className: "OrganizationProvider__delete-text",
          children: ["\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E", " ", organizationToDelete.companyName, "?"]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("div", {
          className: "OrganizationProvider__delete-navigation",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("button", {
            className: "button button--transparent",
            onClick: () => {
              setOrganizationToDelete(null);
            },
            children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("button", {
            className: "button",
            onClick: () => {
              deleteOrganization();
            },
            children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
          })]
        })]
      })
    }) : null, isLoading && organizations.length === 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_react_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
      children: [organizations.length > 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        children: [warnings.length !== 0 ? warnings.map((item, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_react_Warning_Warning__WEBPACK_IMPORTED_MODULE_4__["default"], {
          index: index,
          type: item.type,
          deleteFn: deleteWarning,
          text: `Изменение данных об организации ${item.text} отправлено на проверку. Наш менеджер свяжется с вами и обсудит детали изменений.`
        }, index)) : null, organizations.map((item, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_react_Organization_Organization__WEBPACK_IMPORTED_MODULE_5__["default"], {
          organization: item,
          unlockOrg: unlockOrganization,
          sendOrg: replaceOldOrgWithNew,
          callAlert: setOrganizationToDelete
        }, index))]
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("p", {
          className: "Organization__contact-header",
          children: "\u0412 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0443 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439."
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
        className: "button OrganizationProvider__button",
        href: window.routes5.LINKS.addOrganization,
        children: "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E"
      })]
    })]
  });
};

const Organizations = document.querySelector("#OrganizationProvider");

if (Organizations) {
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(OrganizationProvider, {}), Organizations);
}

/***/ }),
/* 1449 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1450);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1450 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOrganizations", function() { return fetchOrganizations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendUpdatedOrganizations", function() { return sendUpdatedOrganizations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendDeletedOrganizations", function() { return sendDeletedOrganizations; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(124);


const fetchOrganizations = (setIsLoading, setOrganizations) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${window.routes5.organizations.requests.getOrganizations[`url${_env__WEBPACK_IMPORTED_MODULE_1__["ENV"]}`]}`).then(response => {
    if (response.status === 200 && response.data.status !== "error") {
      setIsLoading(false);
      setOrganizations(response.data);
    } else {
      setIsLoading(false);
      setOrganizations(response.data.status);
    }
  });
}; // отправляем обновлённые данные на сервер и получаем их обратно

const sendUpdatedOrganizations = (organizations, index, setOrganizations, messages, setMessage) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${window.routes5.organizations.requests.updateOrganizations[`url${_env__WEBPACK_IMPORTED_MODULE_1__["ENV"]}`]}`, organizations).then(response => {
    // oranizationsApi
    //   .post(
    //     "https://run.mocky.io/v3/590209b9-3b3a-45c2-b816-cd6d66ccb123",
    //     organizations
    //   )
    //   .then((response) => {
    const updatedMessages = [...messages];
    updatedMessages.push({
      type: "success",
      text: response.data[index].companyName
    });
    setOrganizations(response.data);
    setMessage(updatedMessages);
  });
}; // отсылаем на сервер данные после удаления

const sendDeletedOrganizations = (organizations, setOrganizations, setModal) => {
  oranizationsApi.post(`${window.routes5.organizations.requests.deleteOrganizations[`url${_env__WEBPACK_IMPORTED_MODULE_1__["ENV"]}`]}`, organizations).then(response => {
    window.Corners5ProjectLayout.summonAlert("#alert--organization-deleted");
    setModal(null);
    setOrganizations(response.data); // setMessage(updatedMessages);
  });
};

/***/ }),
/* 1452 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Warning_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1453);
/* harmony import */ var _Warning_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Warning_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1455);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const calculateType = (type, text) => {
  switch (type) {
    case 'success':
      return {
        className: 'Warning Warning--success',
        message: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
          className: "Warning__message",
          children: text
        })
      };

    case 'error':
      return {
        className: 'Warning Warning--error',
        message: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("p", {
          className: "Warning__message",
          children: ["\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0435 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430. \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0430\u0439\u0442\u0430 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
            href: "tel:+7 (123) 123 34 54",
            children: "+7 (123) 123 34 54"
          })]
        })
      };

    default:
      return {
        className: 'Warning',
        message: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
          className: "Warning__message",
          children: "\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435! \u041F\u043E\u0441\u043B\u0435 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0431 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043E\u043D\u0430 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443."
        })
      };
  }
};

const Warning = ({
  type,
  text,
  index,
  deleteFn
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("section", {
    className: calculateType(type, text).className,
    children: [type === 'success' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
      className: "Warning__close",
      type: "button",
      onClick: () => {
        deleteFn(index);
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default.a, {})
    }) : null, calculateType(type, text).message]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Warning);

/***/ }),
/* 1453 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1454);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1454 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1455 */,
/* 1456 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Organization_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1457);
/* harmony import */ var _Organization_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Organization_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(544);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1459);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(671);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(386);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1404);
/* harmony import */ var _PhoneInput_PhoneInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1420);
/* harmony import */ var _Select_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1829);
/* harmony import */ var _Warning_Warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1452);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1235);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);















const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
  inn: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  companyName: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  yuraAddress: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  PostAddress: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  ogrn: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  kpp: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  bankName: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  bik: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  checkingAccount: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  correspondentAccount: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  contacts: yup__WEBPACK_IMPORTED_MODULE_5__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
    fio: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
    email: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().email().required(),
    phone: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().matches(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["phoneRegExp"]).required(),
    role: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required()
  }))
});

const calculateStatus = (type, message) => {
  switch (type) {
    case "main":
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("p", {
        className: "Organization__status Organization__status--main",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("span", {
          children: "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F"
        })
      });

    case "fail":
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])("p", {
        className: "Organization__status Organization__status--failed",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("span", {
          children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0435 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430"
        }), " ", message]
      });

    case "checking":
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("p", {
        className: "Organization__status Organization__status--checking",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("span", {
          children: "\u041D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435"
        })
      });

    default:
      return null;
  }
};

const Organization = ({
  organization,
  unlockOrg,
  sendOrg,
  callAlert
}) => {
  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    Object(tippy_js__WEBPACK_IMPORTED_MODULE_6__["default"])("[data-tippy-content]", {
      allowHTML: true,
      arrow: false,
      maxWidth: 287,
      animation: "scale-subtle"
    });
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])("section", {
    className: `Organization${isOpen ? " Organization--opened" : ""}`,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])("section", {
      className: "Organization__constant",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("section", {
        className: "Organization__meta",
        onClick: () => {
          setIsOpen(true);
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("h3", {
          className: "Organization__header",
          children: organization.companyName
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])("p", {
        className: "Organization__who",
        children: [organization.inn, "\xA0", organization.who]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("button", {
        className: "Organization__arrow",
        type: "button",
        onClick: () => {
          setIsOpen(!isOpen);
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11___default.a, {})
      })]
    }), isOpen ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("section", {
      className: "Organization__dynamic",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
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
          contacts: organization.contacts
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: values => {
          sendOrg(values);
        },
        children: ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur
        }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
          noValidate: true,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_3__["FieldArray"], {
            name: "contacts",
            children: ({
              remove,
              push
            }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
              children: values.contacts.map((member, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])("section", {
                className: "Organization__contact",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])("section", {
                  className: "Organization__contact-navigation",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("p", {
                    className: "Organization__contact-header",
                    children: "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439"
                  }), index !== 0 && organization.meta.status !== "fail" && organization.meta.status !== "checking" ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])("button", {
                    className: "Organization__contact-delete",
                    onClick: () => {
                      remove(index);
                    },
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("svg", {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("use", {
                        href: "#icon-trash"
                      })
                    }), "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442"]
                  }) : null]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])("section", {
                  className: "Organization__member",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    type: "text",
                    name: `contacts[${index}].fio`,
                    label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F" // isRequired={true}
                    ,
                    isRequired: false,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
                    className: `Organization__input${Object(formik__WEBPACK_IMPORTED_MODULE_3__["getIn"])(errors, `contacts[${index}].fio`) && Object(formik__WEBPACK_IMPORTED_MODULE_3__["getIn"])(touched, `contacts[${index}].fio`) ? " Organization__input--error" : ""}` // isDisabled={
                    //   organization.meta.status === "fail" ||
                    //   organization.meta.status === "checking"
                    //     ? true
                    //     : null
                    // }
                    ,
                    isDisabled: true
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    type: "email",
                    name: `contacts[${index}].email`,
                    label: "E-mail" // isRequired={true}
                    ,
                    isRequired: false,
                    className: `Organization__input${Object(formik__WEBPACK_IMPORTED_MODULE_3__["getIn"])(errors, `contacts[${index}].email`) && Object(formik__WEBPACK_IMPORTED_MODULE_3__["getIn"])(touched, `contacts[${index}].email`) ? " Organization__input--error" : ""}` // isDisabled={
                    //   organization.meta.status === "fail" ||
                    //   organization.meta.status === "checking"
                    //     ? true
                    //     : null
                    // }
                    ,
                    isDisabled: true
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_PhoneInput_PhoneInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    name: `contacts[${index}].phone`,
                    onBlur: handleBlur,
                    value: values.contacts[index].phone,
                    onChange: handleChange,
                    label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D" // isRequired={true}
                    ,
                    isRequired: false,
                    className: `Organization__input${Object(formik__WEBPACK_IMPORTED_MODULE_3__["getIn"])(errors, `contacts[${index}].phone`) && Object(formik__WEBPACK_IMPORTED_MODULE_3__["getIn"])(touched, `contacts[${index}].phone`) ? " Organization__input--error" : ""}` // isDisabled={
                    //   organization.meta.status === "fail" ||
                    //   organization.meta.status === "checking"
                    //     ? true
                    //     : null
                    // }
                    ,
                    isDisabled: true
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_Select_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    value: values.contacts[index].role.toString(),
                    name: `contacts[${index}].role`,
                    fieldName: "role",
                    onChange: handleChange,
                    label: "\u0420\u043E\u043B\u044C" // isRequired={true}
                    ,
                    isRequired: false,
                    className: `Organization__input${Object(formik__WEBPACK_IMPORTED_MODULE_3__["getIn"])(errors, `contacts[${index}].role`) && Object(formik__WEBPACK_IMPORTED_MODULE_3__["getIn"])(touched, `contacts[${index}].role`) ? " Organization__input--error" : ""}` // isDisabled={
                    //   organization.meta.status === "fail" ||
                    //   organization.meta.status === "checking"
                    //     ? true
                    //     : null
                    // }
                    ,
                    isDisabled: true,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                      value: "\u041F\u043E\u0432\u0430\u0440",
                      children: "\u041F\u043E\u0432\u0430\u0440"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                      value: "\u0417\u0430\u043A\u0443\u043F\u0449\u0438\u043A",
                      children: "\u0417\u0430\u043A\u0443\u043F\u0449\u0438\u043A"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                      value: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
                      children: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                      value: "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439",
                      children: "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439"
                    })]
                  })]
                })]
              }, index))
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])("section", {
            className: "Organization__info",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])("section", {
              className: "Organization__meta Organization__meta--flex",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("h3", {
                className: "Organization__contact-header",
                children: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F"
              }), organization.meta.status === "main" ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])("div", {
                className: "tooltip Organization__tooltip",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("p", {
                  className: "Organization__tooltip-text",
                  children: "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("button", {
                  className: "tooltip__button",
                  type: "button",
                  "data-tippy-content": "\u042D\u0442\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438 \u0432\u0441\u0435 \u0446\u0435\u043D\u044B \u0438 \u0441\u043A\u0438\u0434\u043A\u0438 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u0438\u043C\u0435\u043D\u043D\u043E \u0434\u043B\u044F \u043D\u0435\u0435. \u0415\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u0443\u044E \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E, \u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 8 888 888-88-88."
                })]
              }) : null]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])("section", {
              className: "Organization__org-inputs",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
                type: "text",
                name: "inn",
                label: "\u0418\u041D\u041D" // isRequired={true}
                ,
                isRequired: false,
                className: `Organization__input${errors.inn && touched.inn ? " Organization__input--error" : ""}`,
                isDisabled: true
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
                type: "text",
                name: "companyName",
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u043B\u0438 \u0418\u041F" // isRequired={true}
                ,
                isRequired: false,
                className: `Organization__input${errors.companyName && touched.companyName ? " Organization__input--error" : ""}` // isDisabled={
                //   organization.meta.status === "fail" ||
                //   organization.meta.status === "checking"
                //     ? true
                //     : null
                // }
                ,
                isDisabled: true
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
                type: "text",
                name: "yuraAddress",
                label: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441" // isRequired={true}
                // isRequired={false}
                ,
                className: `Organization__input${errors.yuraAddress && touched.yuraAddress ? " Organization__input--error" : ""}` // isDisabled={
                //   organization.meta.status === "fail" ||
                //   organization.meta.status === "checking"
                //     ? true
                //     : null
                // }
                ,
                isDisabled: true
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
                type: "text",
                name: "PostAddress",
                label: "\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441" // isRequired={true}
                ,
                isRequired: false,
                className: `Organization__input${errors.PostAddress && touched.PostAddress ? " Organization__input--error" : ""}` // isDisabled={
                //   organization.meta.status === "fail" ||
                //   organization.meta.status === "checking"
                //     ? true
                //     : null
                // }
                ,
                isDisabled: true
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
                type: "text",
                name: "ogrn",
                label: "\u041E\u0413\u0420\u041D" // isRequired={true}
                ,
                isRequired: false,
                className: `Organization__input${errors.ogrn && touched.ogrn ? " Organization__input--error" : ""}` // isDisabled={
                //   organization.meta.status === "fail" ||
                //   organization.meta.status === "checking"
                //     ? true
                //     : null
                // }
                ,
                isDisabled: true
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
                type: "text",
                name: "kpp",
                label: "\u041A\u041F\u041F" // isRequired={true}
                ,
                isRequired: false,
                className: `Organization__input${errors.kpp && touched.kpp ? " Organization__input--error" : ""}` // isDisabled={
                //   organization.meta.status === "fail" ||
                //   organization.meta.status === "checking"
                //     ? true
                //     : null
                // }
                ,
                isDisabled: true
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
                type: "text",
                name: "bankName",
                label: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u0430\u043D\u043A\u0430" // isRequired={true}
                ,
                isRequired: false,
                className: `Organization__input${errors.bankName && touched.bankName ? " Organization__input--error" : ""}` // isDisabled={
                //   organization.meta.status === "fail" ||
                //   organization.meta.status === "checking"
                //     ? true
                //     : null
                // }
                ,
                isDisabled: true
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
                type: "text",
                name: "bik",
                label: "\u0411\u0418\u041A \u0431\u0430\u043D\u043A\u0430" // isRequired={true}
                ,
                isRequired: false,
                className: `Organization__input${errors.bik && touched.bik ? " Organization__input--error" : ""}` // isDisabled={
                //   organization.meta.status === "fail" ||
                //   organization.meta.status === "checking"
                //     ? true
                //     : null
                // }
                ,
                isDisabled: true
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
                type: "text",
                name: "checkingAccount",
                label: "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442" // isRequired={true}
                ,
                isRequired: false,
                className: `Organization__input${errors.checkingAccount && touched.checkingAccount ? " Organization__input--error" : ""}` // isDisabled={
                //   organization.meta.status === "fail" ||
                //   organization.meta.status === "checking"
                //     ? true
                //     : null
                // }
                ,
                isDisabled: true
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
                type: "text",
                name: "correspondentAccount",
                label: "\u041A\u043E\u0440. \u0441\u0447\u0435\u0442" // isRequired={true}
                ,
                isRequired: false,
                className: `Organization__input${errors.correspondentAccount && touched.correspondentAccount ? " Organization__input--error" : ""}` // isDisabled={
                //   organization.meta.status === "fail" ||
                //   organization.meta.status === "checking"
                //     ? true
                //     : null
                // }
                ,
                isDisabled: true
              })]
            })]
          })]
        })
      })
    }) : null]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Organization);

/***/ }),
/* 1457 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1458);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1458 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1459 */,
/* 1460 */,
/* 1461 */,
/* 1462 */,
/* 1463 */,
/* 1464 */,
/* 1465 */,
/* 1466 */,
/* 1467 */,
/* 1468 */,
/* 1469 */,
/* 1470 */,
/* 1471 */,
/* 1472 */,
/* 1473 */,
/* 1474 */,
/* 1475 */,
/* 1476 */,
/* 1477 */,
/* 1478 */,
/* 1479 */,
/* 1480 */,
/* 1481 */,
/* 1482 */,
/* 1483 */,
/* 1484 */,
/* 1485 */,
/* 1486 */,
/* 1487 */,
/* 1488 */,
/* 1489 */,
/* 1490 */,
/* 1491 */,
/* 1492 */,
/* 1493 */,
/* 1494 */,
/* 1495 */,
/* 1496 */,
/* 1497 */,
/* 1498 */,
/* 1499 */,
/* 1500 */,
/* 1501 */,
/* 1502 */,
/* 1503 */,
/* 1504 */,
/* 1505 */,
/* 1506 */,
/* 1507 */,
/* 1508 */,
/* 1509 */,
/* 1510 */,
/* 1511 */,
/* 1512 */,
/* 1513 */,
/* 1514 */,
/* 1515 */,
/* 1516 */,
/* 1517 */,
/* 1518 */,
/* 1519 */,
/* 1520 */,
/* 1521 */,
/* 1522 */,
/* 1523 */,
/* 1524 */,
/* 1525 */,
/* 1526 */,
/* 1527 */,
/* 1528 */,
/* 1529 */,
/* 1530 */,
/* 1531 */,
/* 1532 */,
/* 1533 */,
/* 1534 */,
/* 1535 */,
/* 1536 */,
/* 1537 */,
/* 1538 */,
/* 1539 */,
/* 1540 */,
/* 1541 */,
/* 1542 */,
/* 1543 */,
/* 1544 */,
/* 1545 */,
/* 1546 */,
/* 1547 */,
/* 1548 */,
/* 1549 */,
/* 1550 */,
/* 1551 */,
/* 1552 */,
/* 1553 */,
/* 1554 */,
/* 1555 */,
/* 1556 */,
/* 1557 */,
/* 1558 */,
/* 1559 */,
/* 1560 */,
/* 1561 */,
/* 1562 */,
/* 1563 */,
/* 1564 */,
/* 1565 */,
/* 1566 */,
/* 1567 */,
/* 1568 */,
/* 1569 */,
/* 1570 */,
/* 1571 */,
/* 1572 */,
/* 1573 */,
/* 1574 */,
/* 1575 */,
/* 1576 */,
/* 1577 */,
/* 1578 */,
/* 1579 */,
/* 1580 */,
/* 1581 */,
/* 1582 */,
/* 1583 */,
/* 1584 */,
/* 1585 */,
/* 1586 */,
/* 1587 */,
/* 1588 */,
/* 1589 */,
/* 1590 */,
/* 1591 */,
/* 1592 */,
/* 1593 */,
/* 1594 */,
/* 1595 */,
/* 1596 */,
/* 1597 */,
/* 1598 */,
/* 1599 */,
/* 1600 */,
/* 1601 */,
/* 1602 */,
/* 1603 */,
/* 1604 */,
/* 1605 */,
/* 1606 */,
/* 1607 */,
/* 1608 */,
/* 1609 */,
/* 1610 */,
/* 1611 */,
/* 1612 */,
/* 1613 */,
/* 1614 */,
/* 1615 */,
/* 1616 */,
/* 1617 */,
/* 1618 */,
/* 1619 */,
/* 1620 */,
/* 1621 */,
/* 1622 */,
/* 1623 */,
/* 1624 */,
/* 1625 */,
/* 1626 */,
/* 1627 */,
/* 1628 */,
/* 1629 */,
/* 1630 */,
/* 1631 */,
/* 1632 */,
/* 1633 */,
/* 1634 */,
/* 1635 */,
/* 1636 */,
/* 1637 */,
/* 1638 */,
/* 1639 */,
/* 1640 */,
/* 1641 */,
/* 1642 */,
/* 1643 */,
/* 1644 */,
/* 1645 */,
/* 1646 */,
/* 1647 */,
/* 1648 */,
/* 1649 */,
/* 1650 */,
/* 1651 */,
/* 1652 */,
/* 1653 */,
/* 1654 */,
/* 1655 */,
/* 1656 */,
/* 1657 */,
/* 1658 */,
/* 1659 */,
/* 1660 */,
/* 1661 */,
/* 1662 */,
/* 1663 */,
/* 1664 */,
/* 1665 */,
/* 1666 */,
/* 1667 */,
/* 1668 */,
/* 1669 */,
/* 1670 */,
/* 1671 */,
/* 1672 */,
/* 1673 */,
/* 1674 */,
/* 1675 */,
/* 1676 */,
/* 1677 */,
/* 1678 */,
/* 1679 */,
/* 1680 */,
/* 1681 */,
/* 1682 */,
/* 1683 */,
/* 1684 */,
/* 1685 */,
/* 1686 */,
/* 1687 */,
/* 1688 */,
/* 1689 */,
/* 1690 */,
/* 1691 */,
/* 1692 */,
/* 1693 */,
/* 1694 */,
/* 1695 */,
/* 1696 */,
/* 1697 */,
/* 1698 */,
/* 1699 */,
/* 1700 */,
/* 1701 */,
/* 1702 */,
/* 1703 */,
/* 1704 */,
/* 1705 */,
/* 1706 */,
/* 1707 */,
/* 1708 */,
/* 1709 */,
/* 1710 */,
/* 1711 */,
/* 1712 */,
/* 1713 */,
/* 1714 */,
/* 1715 */,
/* 1716 */,
/* 1717 */,
/* 1718 */,
/* 1719 */,
/* 1720 */,
/* 1721 */,
/* 1722 */,
/* 1723 */,
/* 1724 */,
/* 1725 */,
/* 1726 */,
/* 1727 */,
/* 1728 */,
/* 1729 */,
/* 1730 */,
/* 1731 */,
/* 1732 */,
/* 1733 */,
/* 1734 */,
/* 1735 */,
/* 1736 */,
/* 1737 */,
/* 1738 */,
/* 1739 */,
/* 1740 */,
/* 1741 */,
/* 1742 */,
/* 1743 */,
/* 1744 */,
/* 1745 */,
/* 1746 */,
/* 1747 */,
/* 1748 */,
/* 1749 */,
/* 1750 */,
/* 1751 */,
/* 1752 */,
/* 1753 */,
/* 1754 */,
/* 1755 */,
/* 1756 */,
/* 1757 */,
/* 1758 */,
/* 1759 */,
/* 1760 */,
/* 1761 */,
/* 1762 */,
/* 1763 */,
/* 1764 */,
/* 1765 */,
/* 1766 */,
/* 1767 */,
/* 1768 */,
/* 1769 */,
/* 1770 */,
/* 1771 */,
/* 1772 */,
/* 1773 */,
/* 1774 */,
/* 1775 */,
/* 1776 */,
/* 1777 */,
/* 1778 */,
/* 1779 */,
/* 1780 */,
/* 1781 */,
/* 1782 */,
/* 1783 */,
/* 1784 */,
/* 1785 */,
/* 1786 */,
/* 1787 */,
/* 1788 */,
/* 1789 */,
/* 1790 */,
/* 1791 */,
/* 1792 */,
/* 1793 */,
/* 1794 */,
/* 1795 */,
/* 1796 */,
/* 1797 */,
/* 1798 */,
/* 1799 */,
/* 1800 */,
/* 1801 */,
/* 1802 */,
/* 1803 */,
/* 1804 */,
/* 1805 */,
/* 1806 */,
/* 1807 */,
/* 1808 */,
/* 1809 */,
/* 1810 */,
/* 1811 */,
/* 1812 */,
/* 1813 */,
/* 1814 */,
/* 1815 */,
/* 1816 */,
/* 1817 */,
/* 1818 */,
/* 1819 */,
/* 1820 */,
/* 1821 */,
/* 1822 */,
/* 1823 */,
/* 1824 */,
/* 1825 */,
/* 1826 */,
/* 1827 */,
/* 1828 */,
/* 1829 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1830);
/* harmony import */ var _Select_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Select_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1179);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1235);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








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
  placeholder
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
    className: `Select${className ? ` ${className}` : ""}`,
    children: [label ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("label", {
      className: isRequired ? "Select__label Select__label--required" : "Select__label",
      children: label
    }) : null, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
      fullWidth: true,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_mui_material_Select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: value,
        name: name,
        disabled: isDisabled,
        onChange: onChange,
        onOpen: () => {
          if (!isModal) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["getPaddingOnBody"])();
          }
        },
        onClose: () => {
          if (!isModal) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["getPaddingFromBody"])();
          }
        },
        IconComponent: _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default.a,
        displayEmpty: true,
        renderValue: value => {
          if (value === "") {
            return placeholder;
          }

          return value;
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
        children: children
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),
/* 1830 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1831);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1831 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1832 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddressProvider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1833);
/* harmony import */ var _AddressProvider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AddressProvider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dadata_dist_react_dadata_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1835);
/* harmony import */ var react_dadata_dist_react_dadata_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dadata_dist_react_dadata_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1837);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(671);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(544);
/* harmony import */ var _react_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1251);
/* harmony import */ var _react_Address_Address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var _react_Editable_Editable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1856);
/* harmony import */ var _react_Loader_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1258);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73);
/* harmony import */ var _api_OrganizationsApi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1451);
/* harmony import */ var _api_AddressApi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1859);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);

















const schemaAddress = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
  address: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required()
});
const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true
});

const AddressProvider = () => {
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true);
  const [addresses, setAddresses] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]);
  const [organizations, setOrganizations] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]);
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const [addressToDelete, setAddressToDelete] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({});
  const [address, setAddress] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    value: ""
  }); // const updateAddresses = (values, index, indx, val) => {
  //   values[index].addresses[indx] = val;
  //   sendUpdatedAddresses(values, setAddresses, setShow, setAddress, "update");
  // };

  const deleteAddress = (values, index, indx) => {
    // values[index].addresses.splice(indx, 1);
    // if (values[index].addresses.length === 0) {
    //   values.splice(index, 1);
    // }
    delete values[index].addresses[indx];

    if (Object.keys(values[index].addresses).length === 0) {
      values.splice(index, 1);
    }

    Object(_api_AddressApi__WEBPACK_IMPORTED_MODULE_13__["sendUpdatedAddresses"])(values, setAddresses, setShow, setAddress);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (isLoading && addresses.length === 0) {
      Object(_api_AddressApi__WEBPACK_IMPORTED_MODULE_13__["fetchAddresses"])(setIsLoading, setAddresses);
      Object(_api_OrganizationsApi__WEBPACK_IMPORTED_MODULE_12__["fetchOrganizations"])(setIsLoading, setOrganizations);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (show || show === false && address.data) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getPaddingOnBody"])();
    } else {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getPaddingFromBody"])();
    }
  }, [show, address.data]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("section", {
    className: "AddressProvider",
    children: [show ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_react_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "Modal--address AddressProvider__modal AddressProvider__modal--nooverflow",
      closeModal: () => {
        setShow(false);
        setAddress({
          value: ""
        });
      },
      closeEvent: placeholderEvent,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("section", {
        className: "AddressProvider__form",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
          className: "AddressProvider__header",
          children: "\u0410\u0434\u0440\u0435\u0441"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
          className: "AddressProvider__text",
          children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0432 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("div", {
          className: "AddressProvider__field-container",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_dadata__WEBPACK_IMPORTED_MODULE_3__["AddressSuggestions"], {
            className: "AddressProvider__field",
            token: "14ae5e2d4d50c72272527cc24f93b32fa6650307",
            defaultQuery: address.value,
            onChange: setAddress,
            inputProps: {
              placeholder: "Введите адрес"
            },
            delay: 1000,
            count: 5
          })
        }), address.data ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
          className: "AddressProvider__buttons",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("button", {
            className: "button button--transparent AddressProvider__button AddressProvider__cancel",
            onClick: () => {
              setShow(false);
              setAddress("");
            },
            children: "\u2717 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("button", {
            className: "button AddressProvider__button",
            type: "button",
            onClick: () => {
              setShow(false);
            },
            children: "\u0414\u0430\u043B\u0435\u0435"
          })]
        }) : null]
      })
    }) : null, show === false && address.data ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_react_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "Modal--address AddressProvider__modal AddressProvider__modal--nooverflow",
      closeModal: () => {
        setShow(false);
        setAddress({
          value: ""
        });
      },
      closeEvent: placeholderEvent,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_react_Address_Address__WEBPACK_IMPORTED_MODULE_8__["default"], {
        address: address,
        organizations: organizations,
        cancelHandler: () => {
          setShow(true);
        },
        submitHandler: val => {
          Object(_api_AddressApi__WEBPACK_IMPORTED_MODULE_13__["sendUpdatedAddresses"])(val, setAddresses, setShow, setAddress);
        }
      })
    }) : null, Object.keys(addressToDelete).length !== 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_react_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "AddressProvider__delete-modal",
      closeModal: () => {
        setAddressToDelete({});
      },
      closeEvent: placeholderEvent,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
        className: "AddressProvider__delete",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("svg", {
          className: "AddressProvider__question",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("use", {
            href: "#icon-question"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("p", {
          className: "AddressProvider__delete-text",
          children: ["\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("br", {}), " \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441?"]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
          className: "AddressProvider__delete-navigation",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("button", {
            className: "button button--transparent",
            onClick: () => {
              setAddressToDelete({});
            },
            children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("button", {
            className: "button",
            onClick: () => {
              deleteAddress(addresses, addressToDelete.index, addressToDelete.indx);
              setAddressToDelete({});
            },
            children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
          })]
        })]
      })
    }) : null, isLoading && addresses.length === 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_react_Loader_Loader__WEBPACK_IMPORTED_MODULE_10__["default"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
      children: [addresses.map((item, index) => {
        const locations = Object.entries(item.addresses).map(adrs => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_react_Editable_Editable__WEBPACK_IMPORTED_MODULE_9__["default"], {
          value: adrs[1],
          onEdit: val => {
            // updateAddresses(addresses, index, indx, val);
            setShow(true);
            setAddress({
              value: val
            });
          },
          onDelete: () => {
            setAddressToDelete({
              index,
              indx: adrs[0]
            });
          }
        }, adrs[0]));
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
          className: "AddressProvider__item",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
            className: "AddressProvider__heading",
            children: item.name
          }), locations]
        }, index);
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("button", {
        className: "button AddressProvider__add",
        onClick: () => {
          setShow(true);
        },
        children: "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441"
      })]
    })]
  });
};

const AddressProviderContainer = document.querySelector("#AddressProvider");

if (AddressProviderContainer) {
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(AddressProvider, {}), AddressProviderContainer);
}

/***/ }),
/* 1833 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1834);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1834 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1835 */,
/* 1836 */,
/* 1837 */,
/* 1838 */,
/* 1839 */,
/* 1840 */,
/* 1841 */,
/* 1842 */,
/* 1843 */,
/* 1844 */,
/* 1845 */,
/* 1846 */,
/* 1847 */,
/* 1848 */,
/* 1849 */,
/* 1850 */,
/* 1851 */,
/* 1852 */,
/* 1853 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Address_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1854);
/* harmony import */ var _Address_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Address_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1459);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(671);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1404);
/* harmony import */ var _Textarea_Textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1407);
/* harmony import */ var _Select_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1829);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const schemaPersonal = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
  address: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required(),
  city: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required(),
  street: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required(),
  house: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required() // flat: Yup.string().required(),

});
const schemaYura = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
  address: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required(),
  city: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required(),
  street: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required(),
  house: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required(),
  // flat: Yup.string().required(),
  comment: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().notRequired() // organization: Yup.string().required(),

});

const Address = ({
  address,
  organizations,
  cancelHandler,
  submitHandler
}) => {
  const [initialValues, setInitialValues] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("section", {
    className: "Address",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
      className: "Address__header",
      children: "\u0410\u0434\u0440\u0435\u0441"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: initialValues,
      validationSchema: Object.prototype.hasOwnProperty.call(initialValues, "organization") ? schemaYura : schemaPersonal,
      enableReinitialize: true,
      onSubmit: values => {
        submitHandler(values);
      },
      children: ({
        initialValues,
        values,
        errors,
        touched,
        handleChange
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("section", {
        className: "Address__wrapper",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
          className: "Address__heading",
          children: "\u0422\u0438\u043F \u0430\u0434\u0440\u0435\u0441\u0430:"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
          className: "Address__toggles",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("button", {
            className: `Address__toggle ${Object.prototype.hasOwnProperty.call(initialValues, "organization") ? "" : "Address__toggle--active"}`,
            type: "button",
            onClick: () => {
              const newInitialValues = { ...initialValues
              };
              newInitialValues.address = values.address;
              delete newInitialValues.organization;
              setInitialValues(newInitialValues);
            },
            children: "\u041B\u0438\u0447\u043D\u044B\u0439"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("button", {
            className: `Address__toggle ${Object.prototype.hasOwnProperty.call(initialValues, "organization") ? "Address__toggle--active" : ""}`,
            type: "button",
            onClick: () => {
              setInitialValues({ ...initialValues,
                organization: organizations.lenght > 0 ? organizations[0].id : "empty",
                address: values.address
              });
            },
            children: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          className: "Address__form",
          noValidate: true,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
            type: "text",
            name: "city",
            label: "\u0413\u043E\u0440\u043E\u0434",
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434",
            isRequired: true,
            className: `Address__input${errors.city && touched.city ? " Address__input--error" : ""}`
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
            type: "text",
            name: "street",
            label: "\u0423\u043B\u0438\u0446\u0430",
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0443\u043B\u0438\u0446\u0443",
            isRequired: true,
            className: `Address__input${errors.street && touched.street ? " Address__input--error" : ""}`
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
            type: "text",
            name: "house",
            label: "\u0414\u043E\u043C",
            placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043C\u0430",
            isRequired: true,
            className: `Address__input${errors.house && touched.house ? " Address__input--error" : ""}`
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
            type: "text",
            name: "flat",
            label: "\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430/\u043E\u0444\u0438\u0441",
            placeholder: "\u041D\u043E\u043C\u0435\u0440 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B",
            className: `Address__input${errors.flat && touched.flat ? " Address__input--error" : ""}`
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
            className: "Address__heading",
            children: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u043A\u0443\u0440\u044C\u0435\u0440\u0430"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
            className: "Address__subgrid",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
              type: "text",
              name: "entrance",
              label: "\u041F\u043E\u0434\u044A\u0435\u0437\u0434",
              placeholder: "\u041D\u043E\u043C\u0435\u0440 \u043F\u043E\u0434\u044A\u0435\u0437\u0434\u0430",
              isRequired: false,
              className: `Address__input${errors.entrance && touched.entrance ? " Address__input--error" : ""}`
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
              type: "text",
              name: "flatNumber",
              label: "\u0414\u043E\u043C\u043E\u0444\u043E\u043D",
              placeholder: "\u041A\u043E\u0434 \u0434\u043E\u043C\u043E\u0444\u043E\u043D\u0430",
              isRequired: false,
              className: `Address__input${errors.flatNumber && touched.flatNumber ? " Address__input--error" : ""}`
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
              type: "text",
              name: "floor",
              label: "\u042D\u0442\u0430\u0436",
              placeholder: "\u041D\u043E\u043C\u0435\u0440 \u044D\u0442\u0430\u0436\u0430",
              isRequired: false,
              className: `Address__input${errors.floor && touched.floor ? " Address__input--error" : ""}`
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_Textarea_Textarea__WEBPACK_IMPORTED_MODULE_6__["default"], {
              type: "text",
              name: "comment",
              label: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
              className: `Address__input-fullwidth${errors.comment && touched.comment ? " Address__input--error" : ""}`
            }), initialValues.organization !== undefined ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_Select_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
              isModal: true,
              value: values.organization !== "empty" ? organizations.find(item => item.id === values.organization).companyName : "",
              name: "organization",
              onChange: handleChange,
              placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E",
              className: `Address__input-fullwidth${errors.organization && touched.organization ? " Address__input--error" : ""}`,
              children: [organizations.map((item, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_mui_material__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
                value: item.id,
                children: item.companyName
              }, index)), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("button", {
                className: "Address__add",
                type: "button",
                onClick: () => {
                  window.location.replace(`${window.location.origin}/personal/addorganization/`);
                },
                children: "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E"
              })]
            }) : null]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
            className: "Address__navigation",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("button", {
              className: "button button--transparent Address__button",
              type: "button",
              onClick: cancelHandler,
              children: "\u2717 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("button", {
              className: "button Address__button",
              type: "submit",
              children: "\u2713 \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Address);

/***/ }),
/* 1854 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1855);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1855 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1856 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editable_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1857);
/* harmony import */ var _Editable_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Editable_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1459);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1455);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1460);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const Editable = ({
  value,
  className,
  onEdit,
  onDelete
}) => {
  const [val, setVal] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setVal(value);
  }, [value]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
    className: `Editable${className ? ` ${className}` : ""}`,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
      multiline: true,
      type: "text",
      value: val,
      disabled: true,
      onChange: evt => {
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
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
      className: "Editable__buttons",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("button", {
        className: "Editable__edit",
        type: "button",
        onClick: () => {
          onEdit(val);
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("svg", {
          width: "20",
          height: "20",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("use", {
            href: "#icon-pencil"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("button", {
        className: "Editable__delete",
        type: "button",
        onClick: () => {
          onDelete();
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default.a, {})
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Editable);

/***/ }),
/* 1857 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1858);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1858 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1859 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAddresses", function() { return fetchAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendUpdatedAddresses", function() { return sendUpdatedAddresses; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(124);


const fetchAddresses = (setIsLoading, setAddresses) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${window.routes5.addresses.requests.getAddresses[`url${_env__WEBPACK_IMPORTED_MODULE_1__["ENV"]}`]}`).then(response => {
    if (response.status === 200) {
      setIsLoading(false);
      setAddresses(response.data);
    }
  });
};
const sendUpdatedAddresses = (addresses, setAddresses, setShow, setAddress, action) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${window.routes5.addresses.requests.updateAddresses[`url${_env__WEBPACK_IMPORTED_MODULE_1__["ENV"]}`]}`, addresses).then(response => {
    setAddresses(response.data);
    setShow(false);
    setAddress("");
    window.Corners5ProjectLayout.summonAlert("#alert--save");
    window.location.reload(); // if (action === "update") {
    //   window.Corners5ProjectLayout.summonAlert("#alert--save");
    // }
  });
};

/***/ }),
/* 1860 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestSuggestProvider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1861);
/* harmony import */ var _RequestSuggestProvider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_RequestSuggestProvider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_RequestSuggest_RequestSuggest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1863);
/* harmony import */ var _api_RequestSuggestApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1866);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const requestSuggest = document.querySelector('#RequestSuggestProvider');

if (requestSuggest) {
  const {
    id
  } = requestSuggest.dataset;

  const RequestSuggestProvider = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_react_RequestSuggest_RequestSuggest__WEBPACK_IMPORTED_MODULE_2__["default"], {
    submitHandler: _api_RequestSuggestApi__WEBPACK_IMPORTED_MODULE_3__["sendRequestSuggest"],
    id: id
  });

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(RequestSuggestProvider, {}), requestSuggest);
}

/***/ }),
/* 1861 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1862);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1862 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1863 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestSuggest_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1864);
/* harmony import */ var _RequestSuggest_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_RequestSuggest_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1404);
/* harmony import */ var _PhoneInput_PhoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1420);
/* harmony import */ var _Textarea_Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1407);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1410);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const RequestSuggest = ({
  submitHandler,
  id
}) => {
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    fio: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required(),
    email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email().required(),
    text: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required(),
    legal: yup__WEBPACK_IMPORTED_MODULE_2__["boolean"]().oneOf([true])
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("div", {
    className: "RequestSuggest",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
      className: "RequestSuggest__header",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("h2", {
        className: "RequestSuggest__title",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("em", {
          children: "\u041D\u0435 \u043D\u0430\u0448\u043B\u0438"
        }), " \u0447\u0442\u043E \u0438\u0441\u043A\u0430\u043B\u0438?"]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: {
        id,
        fio: '',
        email: '',
        text: '',
        legal: false
      },
      validationSchema: validationSchema,
      onSubmit: (values, actions) => {
        submitHandler(values, actions.resetForm);
      },
      children: ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        className: "RequestSuggest__form",
        action: "#",
        method: "post",
        noValidate: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
          className: "RequestSuggest__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "text",
            name: "fio",
            label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044E",
            className: errors.fio && touched.fio ? 'Input--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
          className: "RequestSuggest__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "email",
            name: "email",
            label: "E-mail",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
            className: errors.email && touched.email ? 'Input--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
          className: "RequestSuggest__field RequestSuggest__field--wide",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Textarea_Textarea__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "text",
            label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
            isRequired: true,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
            className: errors.text && touched.text ? 'Textarea--error' : null
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
          className: "RequestSuggest__field RequestSuggest__field--wide",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
            className: "RequestSuggest__terms",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("div", {
              className: "RequestContacts__legal",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
                type: "checkbox",
                name: "legal",
                toggle: true,
                isRequired: true,
                className: errors.legal && touched.legal ? 'Checkbox--error' : null,
                checked: values.legal
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("p", {
                children: ["\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("a", {
                  href: "/about/privacy.php",
                  target: "_blank",
                  children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
                }), " \u0438 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("a", {
                  href: "/about/agreement.php",
                  target: "_blank",
                  children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C"
                }), "."]
              })]
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
          className: "RequestSuggest__field",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("button", {
            className: "button",
            type: "submit",
            children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RequestSuggest);

/***/ }),
/* 1864 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1865);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1865 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1866 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequestSuggest", function() { return sendRequestSuggest; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const RequestSuggestApi = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: '/local/ajax',
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5000
});

const setStatus = status => {
  switch (status) {
    case 'success':
      return 'alert--green';

    case 'error':
      return 'alert--red';

    default:
      return '';
  }
}; // eslint-disable-next-line import/prefer-default-export


const sendRequestSuggest = (values, reset) => {
  window.Corners5ProjectLayout.addLoading('#RequestSuggestProvider');
  RequestSuggestApi.post('/feedback.php', values).then(response => {
    if (response.status === 200) {
      const alert = document.querySelector('#alert--request').content.querySelector('.alert');
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
      container.innerHTML = response.data.text;
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert('#alert--request');
      reset();
    }
  }).catch(() => {
    window.Corners5ProjectLayout.removeLoading();
    window.Corners5ProjectLayout.summonAlert('#alert--error');
  });
};

/***/ }),
/* 1867 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1251);
/* harmony import */ var _react_Login_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1868);
/* harmony import */ var _react_Code_Code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1254);
/* harmony import */ var _react_Registration_Registration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1874);
/* harmony import */ var _api_LoginApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1877);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










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
  const [openPhone, setOpenPhone] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [openSms, setOpenSms] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [openRegistraion, setOpenRegistration] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [phoneQuery, setPhoneQuery] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultState);
  const [smsQuery, setSmsQuery] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultState);
  const [registrationQuery, setRegistrationQuery] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultState); // хак для шапки

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (openPhone || openSms || openRegistraion) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["getPaddingOnBody"])();
    } else {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["getPaddingFromBody"])();
    }
  }, [openPhone, openSms, openRegistraion]); // показываем ошибки

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (phoneQuery.error !== "") {
      document.querySelector("#alert--error").content.querySelector(".alert__text").innerHTML = phoneQuery.error;
      window.Corners5ProjectLayout.summonAlert("#alert--error");
      setPhoneQuery({ ...phoneQuery,
        error: ""
      });
    }

    if (smsQuery.error !== "") {
      document.querySelector("#alert--error").content.querySelector(".alert__text").innerHTML = smsQuery.error;
      window.Corners5ProjectLayout.summonAlert("#alert--error");
      setSmsQuery({ ...smsQuery,
        error: ""
      });
    }

    if (registrationQuery.error !== "") {
      document.querySelector("#alert--error").content.querySelector(".alert__text").innerHTML = registrationQuery.error;
      window.Corners5ProjectLayout.summonAlert("#alert--error");
      setRegistrationQuery({ ...registrationQuery,
        error: ""
      });
    }
  }); // переход с телефона на смс

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (phoneQuery.data !== null) {
      setOpenPhone(false);
      setOpenSms(true);
    }
  }, [phoneQuery.data]); // показ успеха смс

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setOpenSms(false);

    if (smsQuery.data !== null && smsQuery.data.result.openreg === 1) {
      setOpenRegistration(true); // window.Corners5ProjectLayout.summonAlert("#alert--mobileSuccess");
    } else if (smsQuery.data !== null) {
      // window.routes5.actions.smsAction();
      window.location.reload();
    }
  }, [smsQuery.data]); // показ успеха регистрации

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (registrationQuery.data !== null) {
      setOpenRegistration(false);
      document.querySelector("#alert--confirm-email").content.querySelector(".alert__text").innerHTML = `Ссылка для подтверждения отправлена на <a class="alert__link" href='mailto:${registrationQuery.data}'>${registrationQuery.data}.</a>`;
      window.Corners5ProjectLayout.summonAlert("#alert--confirm-email");
      setPhoneQuery(defaultState);
      setSmsQuery(defaultState);
      setRegistrationQuery(defaultState);
    }
  });
  window.LoginProvider = {
    setOpenPhone,
    setOpenSms,
    setOpenRegistration
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("section", {
    className: "LoginProvider",
    children: [openPhone ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_react_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      closeModal: () => {
        setOpenPhone(false);
        setPhoneQuery(defaultState);
      },
      className: "Modal--sms",
      closeEvent: closeEvent,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_react_Login_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
        submitHandler: phone => {
          Object(_api_LoginApi__WEBPACK_IMPORTED_MODULE_6__["sendPhone"])(phone, setPhoneQuery);
        }
      })
    }) : null, openSms ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_react_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      closeModal: () => {
        setOpenSms(false);
        setSmsQuery(defaultState);
      },
      className: "Modal--sms",
      closeEvent: placeholderEvent,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_react_Code_Code__WEBPACK_IMPORTED_MODULE_4__["default"], {
        phoneNumber: phoneQuery.data,
        changeAction: () => {
          setOpenSms(false);
          setOpenPhone(true);
        },
        sendAgain: () => {
          Object(_api_LoginApi__WEBPACK_IMPORTED_MODULE_6__["sendPhone"])(phoneQuery.data, setPhoneQuery);
        },
        sendSms: sms => {
          Object(_api_LoginApi__WEBPACK_IMPORTED_MODULE_6__["sendCode"])({
            phone: phoneQuery.data,
            sms: sms
          }, setSmsQuery);
        }
      })
    }) : null, openRegistraion ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_react_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      closeModal: () => {
        setOpenRegistration(false);
        setRegistrationQuery(defaultState);
      },
      className: "Modal--sms",
      closeEvent: placeholderEvent,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_react_Registration_Registration__WEBPACK_IMPORTED_MODULE_5__["default"], {
        submitHandler: values => {
          Object(_api_LoginApi__WEBPACK_IMPORTED_MODULE_6__["sendRegistration"])({
            phone: phoneQuery.data,
            fio: values.fio,
            email: values.email
          }, setRegistrationQuery);
        }
      })
    }) : null]
  });
};

const LoginProviderContainer = document.querySelector("#LoginProvider");

if (LoginProvider) {
  react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(LoginProvider, {}), LoginProviderContainer);
}

/***/ }),
/* 1868 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1869);
/* harmony import */ var _Login_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Login_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(671);
/* harmony import */ var _InputPhoneInternational_InputPhoneInternational__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1871);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1410);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  phone: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().matches(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["phoneRegExp"]).required(),
  legal: yup__WEBPACK_IMPORTED_MODULE_3__["boolean"]().oneOf([true])
});

const Login = ({
  submitHandler
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("section", {
    className: "Login",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
      className: "Login__header",
      children: "\u0412\u0445\u043E\u0434 \u0438\u043B\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: {
        phone: '',
        legal: false
      },
      validationSchema: validationSchema,
      onSubmit: values => {
        submitHandler(values.phone);
      },
      children: ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleReset
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        noValidate: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_InputPhoneInternational_InputPhoneInternational__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: "phone",
          onBlur: handleBlur,
          value: values.phone,
          onChange: handleChange,
          onReset: handleReset,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
          className: `Login__input${errors.phone && touched.phone ? " Login__input--error" : ""}`
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("button", {
          className: "button Login__button",
          type: "submit",
          children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u0434"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
          className: "Login__legal",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
            type: "checkbox",
            name: "legal",
            toggle: true,
            isRequired: true,
            className: errors.legal && touched.legal ? 'Checkbox--error' : null,
            checked: values.legal
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("p", {
            children: ["\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
              href: "/about/privacy.php",
              target: "_blank",
              children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
            }), " \u0438 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
              href: "/about/agreement.php",
              target: "_blank",
              children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C"
            }), "."]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),
/* 1869 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1870);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1870 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1871 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputPhoneInternational_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1872);
/* harmony import */ var _InputPhoneInternational_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_InputPhoneInternational_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(844);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(124);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1459);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const masks = [{
  country: "Россия",
  code: "+7",
  mask: "+7 (999) 999-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ru.png`
}, {
  country: "Беларусь",
  code: "+375",
  mask: "+375 (99) 999-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/by_.png`
}, {
  country: "Киргизия",
  code: "+996",
  mask: "+\\9\\96 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/kg.png`
}, {
  country: "Казахстан",
  code: "+7",
  mask: "+7 (999) 999-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/kz.png`
}, {
  country: "Узбекистан",
  code: "+998",
  mask: "+\\9\\98 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/uz.png`
}, {
  country: "Армения",
  code: "+374",
  mask: "+374 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/am.png`
}, {
  country: "Азербайджан",
  code: "+994",
  mask: "+\\9\\94 99-999-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/az.png`
}, {
  country: "Абхазия",
  code: "+7",
  mask: "+7 (999) 999-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ab.png`
}, {
  country: "Украина",
  code: "+380",
  mask: "+380 (99) 999-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ua.png`
}, {
  country: "США",
  code: "+1",
  mask: "+1 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/us.png`
}, {
  country: "Великобритания",
  code: "+44",
  mask: "+44 99999 999999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/uk.png`
}, {
  country: "Андорра",
  code: "+376",
  mask: "+376 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ad.png`
}, {
  country: "Объединенные Арабские эмираты",
  code: "+971",
  mask: "+\\971 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ae.png`
}, {
  country: "Афганистан",
  code: "+93",
  mask: "+\\93 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/af.png`
}, {
  country: "Антигуа и Барбуда",
  code: "+1268",
  mask: "+1268 999-9999]",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ag.png`
}, {
  country: "Ангилья",
  code: "+1264",
  mask: "+1264 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ai.png`
}, {
  country: "Албания",
  code: "+355",
  mask: "+355 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/al.png`
}, {
  country: "Нидерландские Антильские острова",
  code: "+599",
  mask: "+5\\9\\9 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/an.png`
}, {
  country: "Ангола",
  code: "+244",
  mask: "+244 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ao.png`
}, {
  country: "Австралийская антарктическая база",
  code: "+6721",
  mask: "+6721 99-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/aq.png`
}, {
  country: "Аргентина",
  code: "+54",
  mask: "+54 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ar.png`
}, {
  country: "Американское Самоа",
  code: "+1684",
  mask: "+1684 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/as.png`
}, {
  country: "Австрия",
  code: "+43",
  mask: "+43 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/at.png`
}, {
  country: "Австралия",
  code: "+61",
  mask: "+61 (9-9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/au.png`
}, {
  country: "Аруба",
  code: "+297",
  mask: "+2\\97 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/aw.png`
}, {
  country: "Босния и Герцеговина",
  code: "+387",
  mask: "+387 99-99999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ba.png`
}, {
  country: "Барбадос",
  code: "+1246",
  mask: "+1246 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/bb.png`
}, {
  country: "Бангладеш",
  code: "+880",
  mask: "+880 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/bd.png`
}, {
  country: "Бельгия",
  code: "+32",
  mask: "+32 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/be.png`
}, {
  country: "Буркина Фасо",
  code: "+226",
  mask: "+226 99-99-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/bf.png`
}, {
  country: "Болгария",
  code: "+359",
  mask: "+35\\9 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/bg.png`
}, {
  country: "Бахрейн",
  code: "+973",
  mask: "+\\973 9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/bh.png`
}, {
  country: "Бурунди",
  code: "+257",
  mask: "+257 99-99-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/bi.png`
}, {
  country: "Бенин",
  code: "+229",
  mask: "+22\\9 99-99-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/bj.png`
}, {
  country: "Бермудские острова",
  code: "+1441",
  mask: "+1441 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/bm.png`
}, {
  country: "Бруней-Даруссалам",
  code: "+673",
  mask: "+673 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/bn.png`
}, {
  country: "Боливия",
  code: "+591",
  mask: "+5\\91 9-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/bo.png`
}, {
  country: "Бразилия",
  code: "+55",
  mask: "+55 (99) 9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/br.png`
}, {
  country: "Багамские Острова",
  code: "+1242",
  mask: "+1242 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/bs.png`
}, {
  country: "Ботсвана",
  code: "+267",
  mask: "+267 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/bw.png`
}, {
  country: "Белиз",
  code: "+501",
  mask: "+501 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/bz.png`
}, {
  country: "Канада",
  code: "+1",
  mask: "+1 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ca.png`
}, {
  country: "Дем. Респ. Конго",
  code: "+243",
  mask: "+243 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/cd.png`
}, {
  country: "Центроафриканская Республика",
  code: "+236",
  mask: "+236 99-99-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/cf.png`
}, {
  country: "Конго (Браззавиль)",
  code: "+242",
  mask: "+242 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/cg.png`
}, {
  country: "Швейцария",
  code: "+41",
  mask: "+41 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ch.png`
}, {
  country: "Кот-д'Ивуар",
  code: "+225",
  mask: "+225 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ci.png`
}, {
  country: "Острова Кука",
  code: "+682",
  mask: "+682 99-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ck.png`
}, {
  country: "Чили",
  code: "+56",
  mask: "+56 9-9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/cl.png`
}, {
  country: "Камерун",
  code: "+237",
  mask: "+237 9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/cm.png`
}, {
  country: "КНР",
  code: "+86",
  mask: "+86 (999)9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/cn.png`
}, {
  country: "Колумбия",
  code: "+57",
  mask: "+57 (999)999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/co.png`
}, {
  country: "Коста-Рика",
  code: "+506",
  mask: "+506 9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/cr.png`
}, {
  country: "Куба",
  code: "+53",
  mask: "+53 9-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/cu.png`
}, {
  country: "Кабо-Верде",
  code: "+238",
  mask: "+238 (999) 99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/cv.png`
}, {
  country: "Кюрасао",
  code: "+599",
  mask: "+5\\9\\9 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/cw.png`
}, {
  country: "Кипр",
  code: "+357",
  mask: "+357 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/cy.png`
}, {
  country: "Чехия",
  code: "+420",
  mask: "+420 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/cz.png`
}, {
  country: "Германия",
  code: "+49",
  mask: "+4\\9 (999) 999-99999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/de.png`
}, {
  country: "Джибути",
  code: "+253",
  mask: "+253 99-99-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/dj.png`
}, {
  country: "Дания",
  code: "+45",
  mask: "+45 99-99-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/dk.png`
}, {
  country: "Доминика",
  code: "+1767",
  mask: "+1767 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/dm.png`
}, {
  country: "Доминиканская Республика",
  code: "+18",
  mask: "+18 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/do.png`
}, {
  country: "Алжир",
  code: "+213",
  mask: "+213 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/dz.png`
}, {
  country: "Эквадор",
  code: "+593",
  mask: "+5\\93 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ec.png`
}, {
  country: "Эстония",
  code: "+372",
  mask: "+372 9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ee.png`
}, {
  country: "Египет",
  code: "+20",
  mask: "+20 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/eg.png`
}, {
  country: "Эритрея",
  code: "+291",
  mask: "+2\\91 9-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/er.png`
}, {
  country: "Испания",
  code: "+34",
  mask: "+34 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/es.png`
}, {
  country: "Эфиопия",
  code: "+251",
  mask: "+251 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/et.png`
}, {
  country: "Финляндия",
  code: "+358",
  mask: "+358 (999) 999-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/fi.png`
}, {
  country: "Фиджи",
  code: "+679",
  mask: "+67\\9 99-99999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/fj.png`
}, {
  country: "Фолклендские острова",
  code: "+500",
  mask: "+500 99999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/fk.png`
}, {
  country: "Ф.Ш. Микронезии",
  code: "+691",
  mask: "+6\\91 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/fm.png`
}, {
  country: "Фарерские острова",
  code: "+298",
  mask: "+2\\98 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/fo.png`
}, {
  country: "Франция",
  code: "+33",
  mask: "+33 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/fr.png`
}, {
  country: "Габон",
  code: "+241",
  mask: "+241 9-99-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ga.png`
}, {
  country: "Гренада",
  code: "+1473",
  mask: "+1473 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/gd.png`
}, {
  country: "Грузия",
  code: "+995",
  mask: "+\\9\\95 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ge.png`
}, {
  country: "Фр. Гвиана",
  code: "+594",
  mask: "+5\\94 99999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/gf.png`
}, {
  country: "Гана",
  code: "+233",
  mask: "+233 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/gh.png`
}, {
  country: "Гибралтар",
  code: "+350",
  mask: "+350 999-99999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/gi.png`
}, {
  country: "Гренландия",
  code: "+299",
  mask: "+2\\9\\9 99-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/gl.png`
}, {
  country: "Гамбия",
  code: "+220",
  mask: "+220 (999) 99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/gm.png`
}, {
  country: "Гвинея",
  code: "+224",
  mask: "+224 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/gn.png`
}, {
  country: "Экваториальная Гвинея",
  code: "+240",
  mask: "+240 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/gq.png`
}, {
  country: "Греция",
  code: "+30",
  mask: "+30 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/gr.png`
}, {
  country: "Гватемала",
  code: "+502",
  mask: "+502 9-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/gt.png`
}, {
  country: "Гуам",
  code: "+1671",
  mask: "+1671 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/gu.png`
}, {
  country: "Гвинея-Бисау",
  code: "+245",
  mask: "+245 9-999999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/gw.png`
}, {
  country: "Гайана",
  code: "+592",
  mask: "+5\\92 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/gy.png`
}, {
  country: "Гонконг",
  code: "+852",
  mask: "+852 9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/hk.png`
}, {
  country: "Гондурас",
  code: "+504",
  mask: "+504 9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/hn.png`
}, {
  country: "Хорватия",
  code: "+385",
  mask: "+385 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/hr.png`
}, {
  country: "Гаити",
  code: "+509",
  mask: "+50\\9 99-99-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ht.png`
}, {
  country: "Венгрия",
  code: "+36",
  mask: "+36 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/hu.png`
}, {
  country: "Индонезия",
  code: "+62",
  mask: "+62 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/id.png`
}, {
  country: "Ирландия",
  code: "+353",
  mask: "+353 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ie.png`
}, {
  country: "Израиль",
  code: "+972",
  mask: "+\\972 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/il.png`
}, {
  country: "Индия",
  code: "+91",
  mask: "+\\91 (9999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/in.png`
}, {
  country: "Диего-Гарсия",
  code: "+246",
  mask: "+246 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/io.png`
}, {
  country: "Ирак",
  code: "+964",
  mask: "+\\964 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/iq.png`
}, {
  country: "Иран",
  code: "+98",
  mask: "+\\98 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ir.png`
}, {
  country: "Исландия",
  code: "+354",
  mask: "+354 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/is.png`
}, {
  country: "Италия",
  code: "+39",
  mask: "+3\\9 (999) 9999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/it.png`
}, {
  country: "Ямайка",
  code: "+1876",
  mask: "+1876 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/jm.png`
}, {
  country: "Иордания",
  code: "+962",
  mask: "+\\962 9-9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/jo.png`
}, {
  country: "Япония",
  code: "+81",
  mask: "+81 99-9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/jp.png`
}, {
  country: "Кения",
  code: "+254",
  mask: "+254 999-999999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ke.png`
}, {
  country: "Камбоджа",
  code: "+855",
  mask: "+855 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/kh.png`
}, {
  country: "Кирибати",
  code: "+686",
  mask: "+686 99-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ki.png`
}, {
  country: "Коморы",
  code: "+269",
  mask: "+26\\9 99-99999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/km.png`
}, {
  country: "Сент-Китс и Невис",
  code: "+1869",
  mask: "+186\\9 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/kn.png`
}, {
  country: "Кувейт",
  code: "+965",
  mask: "+\\965 9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/kw.png`
}, {
  country: "Каймановы острова",
  code: "+1345",
  mask: "+1345 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ky.png`
}, {
  country: "Лаос",
  code: "+856",
  mask: "+856 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/la.png`
}, {
  country: "Ливан",
  code: "+961",
  mask: "+\\961 99-999-999]",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/lb.png`
}, {
  country: "Сент-Люсия",
  code: "+1758",
  mask: "+1758 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/lc.png`
}, {
  country: "Лихтенштейн",
  code: "+423",
  mask: "+423 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/li.png`
}, {
  country: "Шри-Ланка",
  code: "+94",
  mask: "+\\94 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/lk.png`
}, {
  country: "Либерия",
  code: "+231",
  mask: "+231 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/lr.png`
}, {
  country: "Лесото",
  code: "+266",
  mask: "+266 9-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ls.png`
}, {
  country: "Литва",
  code: "+370",
  mask: "+370 (999) 99-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/lt.png`
}, {
  country: "Люксембург",
  code: "+352",
  mask: "+352 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/lu.png`
}, {
  country: "Латвия",
  code: "+371",
  mask: "+371 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/lv.png`
}, {
  country: "Ливия",
  code: "+218",
  mask: "+218 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ly.png`
}, {
  country: "Марокко",
  code: "+212",
  mask: "+212 99-9999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ma.png`
}, {
  country: "Монако",
  code: "+377",
  mask: "+377 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mc.png`
}, {
  country: "Молдова",
  code: "+373",
  mask: "+373 9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/md.png`
}, {
  country: "Черногория",
  code: "+382",
  mask: "+382 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/me.png`
}, {
  country: "Мадагаскар",
  code: "+261",
  mask: "+261 99-99-99999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mg.png`
}, {
  country: "Маршалловы Острова",
  code: "+692",
  mask: "+6\\92 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mh.png`
}, {
  country: "Респ. Македония",
  code: "+389",
  mask: "+38\\9 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mk.png`
}, {
  country: "Мали",
  code: "+223",
  mask: "+223 99-99-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ml.png`
}, {
  country: "Бирма (Мьянма)",
  code: "+95",
  mask: "+\\95 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mm.png`
}, {
  country: "Монголия",
  code: "+976",
  mask: "+\\976 99-99-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mn.png`
}, {
  country: "Макао",
  code: "+853",
  mask: "+853 9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mo.png`
}, {
  country: "Северные Марианские острова Сайпан",
  code: "+1670",
  mask: "+1670 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mp.png`
}, {
  country: "Мартиника",
  code: "+596",
  mask: "+5\\96 (999) 99-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mq.png`
}, {
  country: "Мавритания",
  code: "+222",
  mask: "+222 99-99-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mr.png`
}, {
  country: "Монтсеррат",
  code: "+1664",
  mask: "+1664 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ms.png`
}, {
  country: "Мальта",
  code: "+356",
  mask: "+356 9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mt.png`
}, {
  country: "Маврикий",
  code: "+230",
  mask: "+230 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mu.png`
}, {
  country: "Мальдивские острова",
  code: "+960",
  mask: "+\\960 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mv.png`
}, {
  country: "Малави",
  code: "+265",
  mask: "+265 9-9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mw.png`
}, {
  country: "Мексика",
  code: "+52",
  mask: "+52 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mx.png`
}, {
  country: "Малайзия",
  code: "+60",
  mask: "+60 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/my.png`
}, {
  country: "Мозамбик",
  code: "+258",
  mask: "+258 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/mz.png`
}, {
  country: "Намибия",
  code: "+264",
  mask: "+264 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/na.png`
}, {
  country: "Нигер",
  code: "+227",
  mask: "+227 99-99-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ne.png`
}, {
  country: "Норфолк (остров)",
  code: "+6723",
  mask: "+6723 99-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/nf.png`
}, {
  country: "Нигерия",
  code: "+234",
  mask: "+234 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ng.png`
}, {
  country: "Никарагуа",
  code: "+505",
  mask: "+505 9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ni.png`
}, {
  country: "Нидерланды",
  code: "+31",
  mask: "+31 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/nl.png`
}, {
  country: "Норвегия",
  code: "+47",
  mask: "+47 (999) 99-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/no.png`
}, {
  country: "Непал",
  code: "+977",
  mask: "+\\977 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/np.png`
}, {
  country: "Науру",
  code: "+674",
  mask: "+674 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/nr.png`
}, {
  country: "Ниуэ",
  code: "+683",
  mask: "+683 9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/nu.png`
}, {
  country: "Новая Зеландия",
  code: "+64",
  mask: "+64 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/nz.png`
}, {
  country: "Оман",
  code: "+968",
  mask: "+\\968 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/om.png`
}, {
  country: "Панама",
  code: "+507",
  mask: "+507 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/pa.png`
}, {
  country: "Перу",
  code: "+51",
  mask: "+51 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/pe.png`
}, {
  country: "Папуа-Новая Гвинея",
  code: "+675",
  mask: "+675 (999) 99-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/pg.png`
}, {
  country: "Филиппины",
  code: "+63",
  mask: "+63 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ph.png`
}, {
  country: "Пакистан",
  code: "+92",
  mask: "+\\92 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/pk.png`
}, {
  country: "Польша",
  code: "+48",
  mask: "+48 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/pl.png`
}, {
  country: "Палестина",
  code: "+970",
  mask: "+\\970 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ps.png`
}, {
  country: "Португалия",
  code: "+351",
  mask: "+351 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/pt.png`
}, {
  country: "Палау",
  code: "+680",
  mask: "+680 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/pw.png`
}, {
  country: "Парагвай",
  code: "+595",
  mask: "+5\\95 (999)999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/py.png`
}, {
  country: "Катар",
  code: "+974",
  mask: "+\\974 9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/qa.png`
}, {
  country: "Реюньон",
  code: "+262",
  mask: "+262 99999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/re.png`
}, {
  country: "Румыния",
  code: "+40",
  mask: "+40 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ro.png`
}, {
  country: "Сербия",
  code: "+381",
  mask: "+381 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/rs.png`
}, {
  country: "Руанда",
  code: "+250",
  mask: "+250 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/rw.png`
}, {
  country: "Саудовская Аравия",
  code: "+966",
  mask: "+\\966 9-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sa.png`
}, {
  country: "Соломоновы Острова",
  code: "+677",
  mask: "+677 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sb.png`
}, {
  country: "Сейшелы",
  code: "+248",
  mask: "+248 9-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sc.png`
}, {
  country: "Судан",
  code: "+249",
  mask: "+24\\9 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sd.png`
}, {
  country: "Швеция",
  code: "+46",
  mask: "+46 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/se.png`
}, {
  country: "Сингапур",
  code: "+6565",
  mask: "+6565 9999999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sg.png`
}, {
  country: "Остров Святой Елены",
  code: "+290",
  mask: "+2\\90 9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sh.png`
}, {
  country: "Словения",
  code: "+386",
  mask: "+386 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/si.png`
}, {
  country: "Словакия",
  code: "+421",
  mask: "+421 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sk.png`
}, {
  country: "Сьерра-Леоне",
  code: "+232",
  mask: "+232 99-999999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sl.png`
}, {
  country: "Сан-Марино",
  code: "+378",
  mask: "+378 9999-999999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sm.png`
}, {
  country: "Сенегал",
  code: "+221",
  mask: "+221 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sn.png`
}, {
  country: "Сомали",
  code: "+252",
  mask: "+252 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/so.png`
}, {
  country: "Суринам",
  code: "+597",
  mask: "+5\\97 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sr.png`
}, {
  country: "Южный Судан",
  code: "+211",
  mask: "+211 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ss.png`
}, {
  country: "Сан-Томе и Принсипи",
  code: "+239",
  mask: "+23\\9 99-99999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/st.png`
}, {
  country: "Сальвадор",
  code: "+503",
  mask: "+503 99-99-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sv.png`
}, {
  country: "Сирия (Сирийская арабская республика)",
  code: "+963",
  mask: "+\\963 99-9999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sy.png`
}, {
  country: "Свазиленд",
  code: "+268",
  mask: "+268 99-99-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/sz.png`
}, {
  country: "Тёркс и Кайкос",
  code: "+1649",
  mask: "+164\\9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/tc.png`
}, {
  country: "Чад",
  code: "+235",
  mask: "+235 99-99-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/td.png`
}, {
  country: "Того",
  code: "+228",
  mask: "+228 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/tg.png`
}, {
  country: "Таиланд",
  code: "+66",
  mask: "+66 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/th.png`
}, {
  country: "Таджикистан",
  code: "+992",
  mask: "+\\9\\92 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/tj.png`
}, {
  country: "Токелау",
  code: "+690",
  mask: "+6\\90 9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/tk.png`
}, {
  country: "Восточный Тимор",
  code: "+670",
  mask: "+670 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/tl.png`
}, {
  country: "Туркменистан",
  code: "+993",
  mask: "+\\9\\93 9-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/tm.png`
}, {
  country: "Тунис",
  code: "+216",
  mask: "+216 99-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/tn.png`
}, {
  country: "Тонга",
  code: "+676",
  mask: "+676 99999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/to.png`
}, {
  country: "Турция",
  code: "+90",
  mask: "+\\90 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/tr.png`
}, {
  country: "Тринидад и Тобаго",
  code: "+1868",
  mask: "+1868 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/tt.png`
}, {
  country: "Тувалу",
  code: "+6882",
  mask: "+6882 9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/tv.png`
}, {
  country: "Тайвань",
  code: "+886",
  mask: "+886 9-9999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/tw.png`
}, {
  country: "Танзания",
  code: "+255",
  mask: "+255 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/tz.png`
}, {
  country: "Уганда",
  code: "+256",
  mask: "+256 (999) 999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ug.png`
}, {
  country: "Уругвай",
  code: "+598",
  mask: "+5\\98 9-999-99-99",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/uy.png`
}, {
  country: "Ватикан",
  code: "+396698",
  mask: "+3\\966\\98 99999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/va.png`
}, {
  country: "Сент-Винсент и Гренадины",
  code: "+1784",
  mask: "+1784 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/vc.png`
}, {
  country: "Венесуэла",
  code: "+58",
  mask: "+58 (999) 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ve.png`
}, {
  country: "Британские Виргинские острова",
  code: "+1284",
  mask: "+1284 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/vg.png`
}, {
  country: "Американские Виргинские острова",
  code: "+1340",
  mask: "+1340 999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/vi.png`
}, {
  country: "Вьетнам",
  code: "+84",
  mask: "+84 (999) 9999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/vn.png`
}, {
  country: "Вануату",
  code: "+678",
  mask: "+678 99-99999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/vu.png`
}, {
  country: "Уоллис и Футуна",
  code: "+681",
  mask: "+681 99-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/wf.png`
}, {
  country: "Самоа",
  code: "+685",
  mask: "+685 99-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ws.png`
}, {
  country: "Йемен",
  code: "+967",
  mask: "+\\967 999-999-999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/ye.png`
}, {
  country: "Южно-Африканская Респ.",
  code: "+27",
  mask: "+27 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/za.png`
}, {
  country: "Замбия",
  code: "+260",
  mask: "+260 99-999-9999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/zm.png`
}, {
  country: "Зимбабве",
  code: "+263",
  mask: "+263 9-999999",
  img: `${window.routes5.Media[`url${_env__WEBPACK_IMPORTED_MODULE_3__["ENV"]}`]}flags/zw.png`
}];

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
  const [country, setCountry] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(masks[0]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
    className: `InputPhoneInternational${className ? ` ${className}` : ""}`,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      onChange: evt => {
        setCountry(evt.target.value);
        onReset();
      },
      value: country,
      renderValue: val => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("img", {
        className: "InputPhoneInternational__image",
        src: val.img
      }),
      children: masks.map(maskObj => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
        value: maskObj,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
          className: "InputPhoneInternational__country",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("img", {
            src: maskObj.img,
            className: "InputPhoneInternational__image"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
            className: "InputPhoneInternational__country",
            children: maskObj.country
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
            className: "InputPhoneInternational__flag",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("b", {
              children: maskObj.code
            })
          })]
        })
      }, maskObj.country))
    }), label ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("label", {
      className: isRequired ? "InputPhoneInternational__label InputPhoneInternational__label--required" : "InputPhoneInternational__label",
      children: label
    }) : null, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_input_mask__WEBPACK_IMPORTED_MODULE_2___default.a, {
      mask: country.mask,
      maskPlaceholder: null,
      value: value,
      onChange: onChange,
      onBlur: onBlur,
      disabled: isDisabled,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        minLength: "10",
        autoComplete: "off",
        autoCapitalize: "off",
        className: "InputPhoneInternational__field",
        type: "tel",
        name: name,
        placeholder: placeholder
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (InputPhoneInternational);

/***/ }),
/* 1872 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1873);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1873 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1874 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registration_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1875);
/* harmony import */ var _Registration_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Registration_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1404);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
  fio: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required(),
  email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email().required()
});

const Registration = ({
  submitHandler
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("section", {
  className: "Registration",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    className: "Registration__header",
    children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      fio: '',
      email: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      submitHandler(values);
    },
    children: ({
      errors,
      touched
    }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      noValidate: true,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "text",
        name: "fio",
        label: "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
        isRequired: false,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0430\u043C\u0438\u043B\u0438\u044E \u0418\u043C\u044F",
        className: `Registration__input${errors.fio && touched.fio ? ' Registration__input--error' : ''}`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "email",
        name: "email",
        label: "E-mail",
        isRequired: false,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
        className: `Registration__input${errors.email && touched.email ? ' Registration__input--error' : ''}`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("button", {
        className: "button Registration__button",
        type: "submit",
        children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
      })]
    })
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("p", {
    className: "Registration__link",
    children: ["\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F\xBB, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("a", {
      href: "/about/privacy.php",
      target: "_blank",
      children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
    }), " \u0438 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("a", {
      href: "/about/agreement.php",
      target: "_blank",
      children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C"
    }), "."]
  })]
});

/* harmony default export */ __webpack_exports__["default"] = (Registration);

/***/ }),
/* 1875 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1876);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1876 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1877 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendPhone", function() { return sendPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCode", function() { return sendCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRegistration", function() { return sendRegistration; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(124);


const sendPhone = async (phone, returnData) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${window.routes5.login.requests.sendPhone[`url${_env__WEBPACK_IMPORTED_MODULE_1__["ENV"]}`]}`, {
      phone
    });

    if (response.data.status === "success") {
      returnData({
        data: phone,
        error: "",
        isLoading: false
      });
    } else if (response.data.status === "error") {
      returnData({
        data: null,
        error: response.data.text,
        isLoading: false
      });
    }
  } catch (error) {
    if (error.response) {
      returnData({
        data: null,
        error: "Произошла непредвиденная ошибка!",
        isLoading: false
      });
    } else if (error.request) {
      returnData({
        data: null,
        error: "Произошла непредвиденная ошибка!",
        isLoading: false
      });
    }
  }
};
const sendCode = async (data, returnData) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${window.routes5.login.requests.sendCode[`url${_env__WEBPACK_IMPORTED_MODULE_1__["ENV"]}`]}`, {
      phone: data.phone,
      sms: data.sms
    });

    if (response.data.status === "success") {
      returnData({
        data: {
          sms: data.sms,
          result: response.data.result
        },
        error: "",
        isLoading: false
      });
    } else if (response.data.status === "error") {
      returnData({
        data: null,
        error: response.data.text,
        isLoading: false
      });
    }
  } catch (error) {
    if (error.response) {
      returnData({
        data: null,
        error: "Произошла непредвиденная ошибка!",
        isLoading: false
      });
    } else if (error.request) {
      returnData({
        data: null,
        error: "Произошла непредвиденная ошибка!",
        isLoading: false
      });
    }
  }
};
const sendRegistration = async (data, returnData) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${window.routes5.login.requests.sendRegistration[`url${_env__WEBPACK_IMPORTED_MODULE_1__["ENV"]}`]}`, {
      phone: data.phone,
      fio: data.fio,
      email: data.email
    });

    if (response.data.status === "success") {
      returnData({
        data: data.email,
        error: "",
        isLoading: false
      });
    } else if (response.data.status === "error") {
      returnData({
        data: null,
        error: response.data.text,
        isLoading: false
      });
    }
  } catch (error) {
    if (error.response) {
      returnData({
        data: null,
        error: "Произошла непредвиденная ошибка!",
        isLoading: false
      });
    } else if (error.request) {
      returnData({
        data: null,
        error: "Произошла непредвиденная ошибка!",
        isLoading: false
      });
    }
  }
};

/***/ }),
/* 1878 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubscribeProvider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1879);
/* harmony import */ var _SubscribeProvider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SubscribeProvider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_Subscribe_Subscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1881);
/* harmony import */ var _api_SubscribeApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1884);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const subscribeProvider = document.querySelector('#SubscribeProvider');

if (subscribeProvider) {
  const {
    id
  } = subscribeProvider.dataset;

  const SubscribeProvider = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_react_Subscribe_Subscribe__WEBPACK_IMPORTED_MODULE_2__["default"], {
      submitHandler: _api_SubscribeApi__WEBPACK_IMPORTED_MODULE_3__["sendSubscribe"],
      id: id
    })
  });

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(SubscribeProvider, {}), subscribeProvider);
}

/***/ }),
/* 1879 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1880);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1880 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1881 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Subscribe_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1882);
/* harmony import */ var _Subscribe_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Subscribe_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1404);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1410);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const Subscribe = ({
  submitHandler,
  id
}) => {
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email().required(),
    legal: yup__WEBPACK_IMPORTED_MODULE_2__["boolean"]().oneOf([true])
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
    className: "Subscribe",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      className: "Subscribe__header",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h2", {
        className: "Subscribe__title",
        children: "\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430\xA0\u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443! "
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: {
        id,
        email: '',
        legal: false
      },
      validationSchema: validationSchema,
      onSubmit: (values, actions) => {
        submitHandler(values, actions.resetForm);
      },
      children: ({
        values,
        errors,
        touched
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        className: "Subscribe__form",
        id: "Subscribe-form",
        action: "#",
        method: "post",
        noValidate: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
          className: "Subscribe__fields",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
            className: "Subscribe__post-title",
            children: "\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430\xA0\u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438\xA0\u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0441\u0430\u043C\u044B\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u0438\xA0\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043E\u0442\xA0\u043D\u0430\u0448\u0438\u0445 \u043F\u0438\u0432\u043E\u0432\u0430\u0440\u043E\u0432!"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
            className: "Subscribe__field",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
              type: "email",
              name: "email",
              label: "E-mail",
              isRequired: true,
              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
              className: errors.email && touched.email ? 'Input--error' : null
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
          className: "Subscribe__terms",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
            className: "Subscribe__legal",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
              type: "checkbox",
              name: "legal",
              toggle: true,
              isRequired: true,
              className: errors.legal && touched.legal ? 'Checkbox--error' : null,
              checked: values.legal
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("p", {
              children: ["\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
                href: "/about/privacy.php",
                target: "_blank",
                children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
              }), " \u0438 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
                href: "/about/agreement.php",
                target: "_blank",
                children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C"
              }), "."]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("button", {
            className: "Subscribe__submit button",
            type: "submit",
            children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ }),
/* 1882 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1883);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1883 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1884 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSubscribe", function() { return sendSubscribe; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const SubscribeApi = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: '/local/ajax',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
}); // eslint-disable-next-line import/prefer-default-export

const sendSubscribe = (values, reset) => {
  window.Corners5ProjectLayout.addLoading('#SubscribeProvider');
  SubscribeApi.post('/subscribe.php', values).then(response => {
    if (response.status === 200) {
      window.Corners5ProjectLayout.removeLoading();
      window.Corners5ProjectLayout.summonAlert('#alert--subscribe');
      reset();
    }
  }).catch(() => {
    window.Corners5ProjectLayout.removeLoading();
    window.Corners5ProjectLayout.summonAlert('#alert--subscribe');
  });
};

/***/ }),
/* 1885 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_react_Add_Organization_PopUp_Add_Organization_PopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1886);
/* harmony import */ var _react_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1251);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true
});

const AddOrganizationPopUpProvider = () => {
  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // хак для шапки

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (open) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["getPaddingOnBody"])();
    } else {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["getPaddingFromBody"])();
    }
  }, [open]);
  window.AddOrganizationPopUpProvider = {
    setOpen
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("section", {
    className: "AddOrganizationPopUpProvider",
    children: open ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_react_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      closeModal: () => {
        setOpen(false);
        window.organizationPopUpSelectInstance.setChoiceByValue("");
      },
      className: "Modal--add-organization-popup",
      closeEvent: placeholderEvent,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_react_Add_Organization_PopUp_Add_Organization_PopUp__WEBPACK_IMPORTED_MODULE_2__["default"], {})
    }) : null
  });
};

const AddOrganizationPopUpContainer = document.querySelector("#AddOrganizationPopUpProvider");

if (AddOrganizationPopUpContainer) {
  react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(AddOrganizationPopUpProvider, {}), AddOrganizationPopUpContainer);
}

/***/ }),
/* 1886 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(512);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(124);
/* harmony import */ var _Form_Add_Organization_1_Form_Add_Organization_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(543);
/* harmony import */ var _Form_Add_Organization_2_Form_Add_Organization_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1246);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









const AddOrganizationPopUp = () => {
  const [step, setStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("one");
  const [exist, setExist] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [formData, setFormData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    firstStep: {
      inn: "",
      mainFio: "",
      mainEmail: "",
      mainPhone: "",
      mainRole: [],
      contacts: [{
        fio: "",
        email: "",
        phone: "",
        role: []
      }]
    },
    secondStep: {
      inn: "",
      companyName: "",
      address: "",
      addressMailing: "",
      ogrn: "",
      kpp: "" // bank: "",
      // bik: "",
      // accountChecking: "",
      // accountСorrespondent: "",

    }
  });

  const fetchData = async inn => {
    const organization = await _api_api__WEBPACK_IMPORTED_MODULE_1__["dataAPI"].getOrganization(inn);
    const emptyOrganization = Object.keys(organization.data).length === 0;

    if (!emptyOrganization) {
      setFormData(prevFormData => ({ ...prevFormData,
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
          accountСorrespondent: ""
        }
      }));
      setStep("two");
      setExist(organization.isAlreadyExist);
    } else {
      setFormData(prevFormData => ({ ...prevFormData,
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
          accountСorrespondent: ""
        }
      }));
      setStep("two");
      setExist(organization.isAlreadyExist);
    }
  };

  const addNewOrganization = async newOrganization => {
    //добавляем новую организацию на сервер
    const result = await _api_api__WEBPACK_IMPORTED_MODULE_1__["organizationsApi"].addNewOrganization(newOrganization); // если успешно добавилось
    // - запрашиваем все организации
    // - берем последнюю
    // - обноавляем инстанс choices.js
    // - закрываем попап с добавлением органиций
    //

    const allOrganizationsRequest = await fetch(`${window.routes5.organizations.requests.getOrganizations[`url${_env__WEBPACK_IMPORTED_MODULE_2__["ENV"]}`]}`);
    const allOrganizationsResponse = await allOrganizationsRequest.json();

    if (allOrganizationsRequest.status === 200) {
      const lastOrganization = allOrganizationsResponse[allOrganizationsResponse.length - 1]; //забираем инстанс choices.js из глобального window и берем из него список опций

      const currentOptions = window.organizationPopUpSelectInstance.config.choices; //добавляем в массив на предпоследнее место последнюю организацию из списка, который мы загрузили с сервера

      currentOptions.splice(currentOptions.length - 1, 0, {
        value: lastOrganization.id,
        label: lastOrganization.companyName,
        disabled: false
      }); //тут обновляем список

      window.organizationPopUpSelectInstance.clearChoices();
      window.organizationPopUpSelectInstance.setChoices(currentOptions);
      window.organizationPopUpSelectInstance.setChoiceByValue(lastOrganization.id); // закрываем всплывающее окно

      window.AddOrganizationPopUpProvider.setOpen(false); // setTimeout(() => {}, 3000);
    }
  };

  let component = null;

  switch (step) {
    case "one":
      component = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_Form_Add_Organization_1_Form_Add_Organization_1__WEBPACK_IMPORTED_MODULE_3__["default"], {
        fetchData: fetchData,
        dataForm: formData,
        setDataForm: setFormData
      });
      break;

    case "two":
      component = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_Form_Add_Organization_2_Form_Add_Organization_2__WEBPACK_IMPORTED_MODULE_4__["default"], {
        dataForm: formData,
        setDataForm: setFormData,
        addNewOrganization: addNewOrganization,
        setStep: setStep,
        existFlag: exist
      });
      break;

    default:
      break;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      className: "form-lk__add-organization",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
        className: "form-lk__link",
        href: "lk-my-organization.html",
        children: "\u2190 \u041C\u043E\u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"
      })
    }), component]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AddOrganizationPopUp);

/***/ }),
/* 1887 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddAddressPopUpProvider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1888);
/* harmony import */ var _AddAddressPopUpProvider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AddAddressPopUpProvider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dadata_dist_react_dadata_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1835);
/* harmony import */ var react_dadata_dist_react_dadata_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dadata_dist_react_dadata_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1837);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1251);
/* harmony import */ var _react_Address_Address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);
/* harmony import */ var _api_OrganizationsApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1451);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(124);
/* harmony import */ var _api_AddressApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1859);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true
});

const AddAddressPopUpProvider = () => {
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true);
  const [addresses, setAddresses] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const [organizations, setOrganizations] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const [address, setAddress] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    value: ""
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (isLoading && addresses.length === 0) {
      Object(_api_AddressApi__WEBPACK_IMPORTED_MODULE_10__["fetchAddresses"])(setIsLoading, setAddresses);
      Object(_api_OrganizationsApi__WEBPACK_IMPORTED_MODULE_8__["fetchOrganizations"])(setIsLoading, setOrganizations);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (show) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["getPaddingOnBody"])();
    } else {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["getPaddingFromBody"])();
    }
  }, [show]);
  window.AddAddressPopUpProvider = {
    setShow
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])("section", {
    className: "AddAddressPopUpProvider",
    children: [show ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_react_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "Modal--address AddAddressPopUpProvider__modal AddAddressPopUpProvider__modal--nooverflow",
      closeModal: () => {
        setShow(false);
        setAddress({
          value: ""
        });
      },
      closeEvent: placeholderEvent,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])("section", {
        className: "AddAddressPopUpProvider__form",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("p", {
          className: "AddAddressPopUpProvider__header",
          children: "\u0410\u0434\u0440\u0435\u0441"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("p", {
          className: "AddAddressPopUpProvider__text",
          children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0432 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
          className: "AddAddressPopUpProvider__field-container",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_dadata__WEBPACK_IMPORTED_MODULE_3__["AddressSuggestions"], {
            className: "AddAddressPopUpProvider__field",
            token: "14ae5e2d4d50c72272527cc24f93b32fa6650307",
            defaultQuery: address.value,
            onChange: setAddress,
            inputProps: {
              placeholder: "Введите адрес"
            },
            delay: 1000,
            count: 5
          })
        }), address.data ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])("div", {
          className: "AddressProvider__buttons",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("button", {
            className: "button button--transparent AddressProvider__button AddressProvider__cancel",
            onClick: () => {
              setShow(false);
              setAddress("");
            },
            children: "\u2717 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("button", {
            className: "button AddressProvider__button",
            type: "button",
            onClick: () => {
              setShow(false);
            },
            children: "\u0414\u0430\u043B\u0435\u0435"
          })]
        }) : null]
      })
    }) : null, show === false && address.data ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_react_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "Modal--address AddAddressPopUpProvider__modal",
      closeModal: () => {
        setShow(false);
        setAddress({
          value: ""
        });
        window.addressPopUpSelectInstance.setChoiceByValue("");
      },
      closeEvent: placeholderEvent,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_react_Address_Address__WEBPACK_IMPORTED_MODULE_6__["default"], {
        address: address,
        organizations: organizations,
        cancelHandler: () => {
          setShow(true);
        },
        submitHandler: async val => {
          const request = await fetch(`${window.routes5.addresses.requests.updateAddresses[`url${_env__WEBPACK_IMPORTED_MODULE_9__["ENV"]}`]}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(val)
          });

          if (request.status === 200) {
            //забираем инстанс choices.js из глобального window и берем из него список опций
            const currentOptions = window.addressPopUpSelectInstance.config.choices; //добавляем в массив на предпоследнее место последнюю организацию из списка, который мы загрузили с сервера

            currentOptions.splice(currentOptions.length - 1, 0, {
              value: `${val.lat}|${val.lon}|${val.address} ${val.street} ${val.house}`,
              label: `${val.address} ${val.street} ${val.house}`,
              disabled: false
            }); //тут обновляем список

            window.addressPopUpSelectInstance.clearChoices();
            window.addressPopUpSelectInstance.setChoices(currentOptions);
            window.addressPopUpSelectInstance.setChoiceByValue(`${val.lat}|${val.lon}|${val.address} ${val.street} ${val.house}`);
            setAddress({
              value: ""
            });
            window.AddAddressPopUpProvider.setShow(false);
          } // sendUpdatedAddresses(val, setAddresses, setShow, setAddress);

        }
      })
    }) : null]
  });
};

const AddressProviderContainer = document.querySelector("#AddAddressPopUpProvider");

if (AddressProviderContainer) {
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(AddAddressPopUpProvider, {}), AddressProviderContainer);
}

/***/ }),
/* 1888 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1889);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1889 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1890 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_FooterSubscribe_FooterSubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1891);
/* harmony import */ var _api_FooterSubscribeApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1894);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const footerSubscribe = document.querySelector('#FooterSubscribeProvider');

if (footerSubscribe) {
  const {
    id
  } = footerSubscribe.dataset;

  const FooterSubscribeProvider = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_react_FooterSubscribe_FooterSubscribe__WEBPACK_IMPORTED_MODULE_1__["default"], {
    submitHandler: _api_FooterSubscribeApi__WEBPACK_IMPORTED_MODULE_2__["sendFooterSubscribe"],
    id: id
  });

  react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(FooterSubscribeProvider, {}), footerSubscribe);
}

/***/ }),
/* 1891 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterSubscribe_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1892);
/* harmony import */ var _FooterSubscribe_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FooterSubscribe_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(505);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(544);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(671);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1404);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1410);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const FooterSubscribe = ({
  submitHandler,
  id
}) => {
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().email().required(),
    legal: yup__WEBPACK_IMPORTED_MODULE_3__["boolean"]().oneOf([true])
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      id,
      email: '',
      legal: false
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      submitHandler(values, actions.resetForm);
    },
    children: ({
      values,
      errors,
      touched
    }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      className: "FooterSubscribe",
      action: "#",
      method: "post",
      noValidate: true,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
        className: "FooterSubscribe__title",
        children: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
        className: "FooterSubscribe__field",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Input_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "email",
          name: "email",
          isRequired: true,
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",
          className: errors.email && touched.email ? 'Input--error' : null
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("button", {
          className: "FooterSubscribe__submit",
          type: "submit",
          "aria-label": "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0438",
          children: "\u2192"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
        className: "FooterSubscribe__field",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
          className: "FooterSubscribe__terms",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
            className: "FooterSubscribe__legal",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
              type: "checkbox",
              name: "legal",
              toggle: true,
              isRequired: true,
              className: errors.legal && touched.legal ? 'Checkbox--error' : null,
              checked: values.legal
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("p", {
              children: ["\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
                href: "/about/privacy.php",
                target: "_blank",
                children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
              }), " \u0438 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
                href: "/about/agreement.php",
                target: "_blank",
                children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C"
              }), "."]
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FooterSubscribe);

/***/ }),
/* 1892 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(75);
            var content = __webpack_require__(1893);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1893 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1894 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendFooterSubscribe", function() { return sendFooterSubscribe; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const FooterSubscribeApi = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: '/local/ajax',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
}); // eslint-disable-next-line import/prefer-default-export

const sendFooterSubscribe = (values, reset) => {
  const buttonSubmit = document.querySelector('.FooterSubscribe__submit');
  buttonSubmit.disabled = true;
  FooterSubscribeApi.post('/subscribe.php', values).then(response => {
    if (response.status === 200) {
      window.Corners5ProjectLayout.summonAlert('#alert--subscribe');
      reset();
      setTimeout(() => {
        buttonSubmit.disabled = false;
      }, 1000);
    }
  }).catch(() => {
    window.Corners5ProjectLayout.summonAlert('#alert--error');
    setTimeout(() => {
      buttonSubmit.disabled = false;
    }, 1000);
  });
};

/***/ })
/******/ ]);