// SvgSprite compiler
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context("./assets/icons/", true, /\.svg$/));
// UTILS
import "./utils/utils.js";

// LIBS SCSS
import "aos/src/sass/aos.scss";
import "choices.js/src/styles/choices.scss";
// import 'flatpickr/dist/themes/light.scss'
import "swiper/css/bundle";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale-subtle.css";
//------------------------------------------------------------

// LIBS JS
// import fslightbox from 'fslightbox';
//------------------------------------------------------------

//------------------------------------------------------------
// 100vh hack for mobile-browsers
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
// usage in css
// height: calc(var(--vh, 1vh) * 100);
// 100vh hack for mobile-browsers
//------------------------------------------------------------

// Удалить перед передачей кодеру.
import "./components/widget/widget.js";

// обязательный функционал для каждого проекта
// Core components
import "./components/window/window.js";
import "./components/form/form.js";
import "./components/popUp/popUp.js";
import "./components/cookie/cookie.js";
import "./components/validator/validator.js";
import "./components/up/up.js";
import "./components/button/button.js";
import "./components/pagination/pagination.js";
import "./components/outdated-browsers/outdated-browsers.js";
// Core components

// наработанный полезный функционал(необязательный для каждого проекта)
//Functional components
import "./components/video/video.js";
import "./components/accordion/accordion.js";
import "./components/swiper/swiper.js";
import "./components/modal/modal.js";

// Bitrix components
import "./components/bx-filter/bx-filter.js";
import "./components/bx-soa-order/bx-soa-order.js";

//компоненты необходимые практически на каждом проекте
//Basic components
import "./components/header/header.js";
import "./components/header-search/header-search.js";
import "./components/footer/footer.js";
import "./components/breadcrumbs/breadcrumbs.js";
import "./components/title/title.js";
import "./components/alert/alert.js";
import "./components/alert-wrapper/alert-wrapper.js";
import "./components/map/map.js";

//Basic components
import "./components/header-padding/header-padding.js";
import "./components/header-dropdown/header-dropdown.js";
import "./components/socials/socials.js";
import "./components/mobile-nav/mobile-nav.js";
import "./components/marker/marker.js";
import "./components/promo/promo.js";
import "./components/about/about.js";
import "./components/products/products.js";
import "./components/how/how.js";
import "./components/warehouses/warehouses.js";
import "./components/warehouses-map/warehouses-map.js";
import "./components/categories/categories.js";
import "./components/suggest/suggest.js";
import "./components/packaging/packaging.js";
import "./components/catalog-nav/catalog-nav.js";
import "./components/layout/layout.js";
import "./components/layout-header/layout-header.js";
import "./components/watched/watched.js";
import "./components/line/line.js";
import "./components/seo/seo.js";
import "./components/banner/banner.js";
import "./components/catalog/catalog.js";
import "./components/back/back.js";
import "./components/clear/clear.js";
import "./components/top-filters/top-filters.js";
import "./components/product/product.js";
import "./components/tooltip/tooltip.js";
import "./components/product-main/product-main.js";
import "./components/double-slider/double-slider.js";
import "./components/product-info/product-info.js";
import "./components/product-highlights/product-highlights.js";
import "./components/packaging-table/packaging-table.js";
import "./components/packaging-amount/packaging-amount.js";
import "./components/product-specification/product-specification.js";
import "./components/product-description/product-description.js";
import "./components/product-documents/product-documents.js";
import "./components/product-analogues/product-analogues.js";
import "./components/product-questions/product-questions.js";
import "./components/sidebar-nav/sidebar-nav.js";
import "./components/search/search.js";
import "./components/empty/empty.js";
import "./components/back-nav/back-nav.js";
import "./components/tabs/tabs.js";
import "./components/tags/tags.js";
import "./components/post-title/post-title.js";
import "./components/profile-react/profile-react.js";
import "./components/politics/politics.js";
import "./components/not-found/not-found.js";
import "./components/site-nav/site-nav.js";
import "./components/question/question.js";
import "./components/form-lk/form-lk.js";
import "./components/share/share.js";
import "./components/services/services.js";
import "./components/article/article.js";
import "./components/background/background.js";
import "./components/novelties/novelties.js";
import "./components/advantages/advantages.js";
import "./components/about-nav/about-nav.js";
import "./components/team/team.js";
import "./components/projects/projects.js";
import "./components/contacts/contacts.js";
import "./components/offer/offer.js";
import "./components/payment/payment.js";
import "./components/cart/cart.js";
import "./components/cart-amount/cart-amount.js";
import "./components/cart-block/cart-block.js";
import "./components/cart-missed/cart-missed.js";
import "./components/partners/partners.js";
import "./components/notice/notice.js";
import "./components/compare/compare.js";
import "./components/profile-page/profile-page.js";
import "./components/profile-nav/profile-nav.js";
import "./components/profile-center/profile-center.js";
import "./components/profile-subscribes/profile-subscribes.js";
import "./components/offer-details/offer-details.js";
import "./components/select-city/select-city.js";
import "./components/qr-code/qr-code.js";
import "./components/calculator/calculator.js";
import './components/checkbox/checkbox';

//Project cards
import "./components/how-card/how-card.js";
import "./components/item-card/item-card.js";
import "./components/catalog-card/catalog-card.js";
import "./components/article-card/article-card.js";
import "./components/document-card/document-card.js";
import "./components/question-card/question-card.js";
import "./components/promotion-card/promotion-card.js";
import "./components/service-card/service-card.js";
import "./components/category-card/category-card.js";
import "./components/advantage-card/advantage-card.js";
import "./components/team-card/team-card.js";
import "./components/cart-card/cart-card.js";
import "./components/offer-card/offer-card.js";
import "./components/offer-detail-card/offer-detail-card.js";
import "./components/promotion-alert/promotion-alert.js";
import './components/news-card/news-card';

//react components
import "./components/react/Form-Personal-Data/Form-Personal-Data.js";
import "./components/react/Form-Name/Form-Name.js";
import "./components/react/Form-Email/Form-Email.js";
import "./components/react/Form-Phone/Form-Phone.js";
import "./components/react/Form-Add-Organization-1/Form-Add-Organization-1.js";
import "./components/react/Form-Add-Organization-2/Form-Add-Organization-2.js";
import "./components/react/Add-Organization/Add-Organization.js";

import "./providers/pages/product/RequestProductProvider/RequestProductProvider";
import "./providers/pages/search-1/RequestSearchProvider/RequestSearchProvider";
import "./providers/pages/service/RequestServiceProvider/RequestServiceProvider";
import "./providers/pages/cooperation/RequestCooperationProvider/RequestCooperationProvider";
import "./providers/pages/contacts/RequestContactsProvider/RequestContactsProvider";
import "./providers/pages/lk-my-organization/OrganizationProvider/OrganizationProvider";
import "./providers/pages/lk-addresses/AddressProvider/AddressProvider";
import "./providers/pages/main/RequestSuggestProvider/RequestSuggestProvider";
import "./providers/common/LoginProvider/LoginProvider";
import "./providers/common/SubscribeProvider/SubscribeProvider";
import "./providers/common/AddOrganizationPopUpProvider/AddOrganizationPopUpProvider";
import "./providers/common/AddAddressPopUpProvider/AddAddressPopUpProvider";

import "./providers/common/FooterSubscribeProvider/FooterSubscribeProvider";
