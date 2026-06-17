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

// Компоненты (pug/jQuery) — авто-агрегатор, window.js грузится первым
import "./components/components.js";

// React-провайдеры (common + pages) — авто-агрегатор маунтеров
import "./react/providers/providers";
