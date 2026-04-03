import {
  validateForm, maskNumber, maskSimplePhone, maskPhone, maskInternationalPhone,
  initPasswordEye, initAgreeCheckbox, initFileLoadInput, focusFirstInput,
  initSelectValidation, initChoicesValidation,
} from '../validator/validator';
import { getFormMessage, setTextareaAutoHeight } from '../form/form';
import { summonPopUp, removePopUp } from '../popUp/popUp';
import findVideos from '../video/video';
import { summonAlert, removeAlert } from '../alert/alert';
import multiMapInit from '../find/find';
import activateItemCards from '../item-card/item-card';
import questionSliderInit from '../question-card/question-card';
import warehousesMapInit from '../warehouses-map/warehouses-map';
import initProfileSelect from '../profile-center/profile-center';
import initCitySelect from '../modal/modal';
import { summonPromotionAlert, removePromotionAlert } from '../promotion-alert/promotion-alert';
import { addLoading, removeLoading } from '../loading/loading';
import {
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  createFormData,
} from '../../utils/utils';
import selectCityInit from '../select-city/select-city';
import compareLogicInit from '../compare/compare';
import initBxSoaOrderSelect from '../bx-soa-order/bx-soa-order';

window.Corners5ProjectLayout = {
  getFormMessage,
  setTextareaAutoHeight,
  summonPopUp,
  removePopUp,
  findVideos,
  summonAlert,
  removeAlert,
  multiMapInit,
  activateItemCards,
  questionSliderInit,
  warehousesMapInit,
  initProfileSelect,
  initCitySelect,
  validation: {
    validateForm,
    maskSimplePhone,
    maskNumber,
    maskPhone,
    maskInternationalPhone,
    initPasswordEye,
    initAgreeCheckbox,
    initFileLoadInput,
    focusFirstInput,
    initSelectValidation,
    initChoicesValidation,
  },
  summonPromotionAlert,
  removePromotionAlert,
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  createFormData,
  addLoading,
  removeLoading,
  selectCityInit,
  compareLogicInit,
  initBxSoaOrderSelect,
};
