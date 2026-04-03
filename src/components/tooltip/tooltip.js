import './tooltip.scss';

import tippy from 'tippy.js';

tippy('[data-tippy-content]', {
  allowHTML: true,
  arrow: false,
  maxWidth: 287,
  animation: 'scale-subtle',
});

// const tooltip = document.querySelector('.tooltip--question');
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
