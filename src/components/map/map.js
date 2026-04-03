import './map.scss';
import { ENV } from '../../env';

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
      map.forEach((el) => {
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
            controls: ['zoomControl'],
          }, {
            searchControlProvider: 'yandex#search',
          });
          myMap.behaviors.disable('scrollZoom');

          // Создание макета содержимого балуна.
          // Макет создается с помощью фабрики макетов с помощью текстового шаблона.
          let placemark;
          let MyBalloonLayout;
          let MyBalloonContentLayout;

          // При ширине 488 окно с подсказкой уходит вниз и для него нужны свои обработчики.
          if (window.innerWidth >= 488) {
            MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="map__balloon">' +
              '<a class="map__balloon-close" href="#"><span></span></a>' +
              '<div class="map__balloon-arrow"></div>' +
              '<div class="map__balloon-inner">' +
              '$[[options.contentLayout observeSize minWidth=235 maxWidth=300 maxHeight=350]]' +
              '</div>' +
              '</div>', {
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
  
                  this._$element.find('.map__balloon-close')
                      .on('click', $.proxy(this.onCloseClick, this));
              },
  
              /**
               * Удаляет содержимое макета из DOM.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
               * @function
               * @name clear
               */
              clear: function () {
                  this._$element.find('.map__balloon-close')
                      .off('click');
  
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
  
                  if(!this._isElement(this._$element)) {
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
                if(!this._isElement(this._$element)) {
                  return MyBalloonLayout.superclass.getShape.call(this);
                }
  
                var position = this._$element.position();
  
                return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                  [position.left, position.top], [
                    position.left + this._$element[0].offsetWidth,
                    position.top + this._$element[0].offsetHeight + this._$element.find('.map__balloon-arrow')[0].offsetHeight
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
              _isElement: function (element) {
                  return element && element[0] && element.find('.map__balloon-arrow')[0];
              }
            });
  
            // Создание вложенного макета содержимого балуна.
            MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
              '<p class="map__balloon-title">$[properties.balloonHeader]</p>' +
              '<p class="map__balloon-city">$[properties.balloonContent]</p>'
            );
          } else {
            // Создание вложенного макета содержимого балуна.
            MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
              '<p class="map__balloon-title">$[properties.balloonHeader]</p>' +
              '<p class="map__balloon-city">$[properties.balloonContent]</p>', {
            });
          }
  
          const myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: `${window.routes5.Media[`url${ENV}`]}map-pin.svg`,
            iconImageSize: [40, 56],
            iconImageOffset: [-20, -28],
          });

          if (window.innerWidth >= 488) {
            placemark = new ymaps.Placemark([coorinateX, coorinateY], {
              balloonHeader: `${mapName}`,
              balloonContent: `${mapHint}`,
            }, {
              balloonShadow: false,
              balloonLayout: MyBalloonLayout,
              balloonContentLayout: MyBalloonContentLayout,
              // balloonPanelMaxMapArea: 0,
            });
          } else {
            placemark = new ymaps.Placemark([coorinateX, coorinateY], {
              balloonHeader: `${mapName}`,
              balloonContent: `${mapHint}`,
            }, {
              balloonContentLayout: MyBalloonContentLayout,
              // balloonPanelMaxMapArea: 0,
            });
          }

          myCollection.add(placemark);

          // Обработчик на открытие балута, переключает селект на нужный пункт.
          placemark.events.add('balloonopen', (evt) => {
            // При открытии балуна, задаём новую картинку для метки.
            evt.get('target').options.set('preset', {
              iconImageHref: `${window.routes5.Media[`url${ENV}`]}map-pin--active.svg`,
            });
          });

          placemark.events.add('balloonclose', (evt) => {
            // При закрытии балуна, задаём старую картинку для метки.
            evt.get('target').options.unset('preset');
          });
  
          // Добавление коллекции на карту.
          myMap.geoObjects.add(myCollection);
        });
        /* eslint-enable */
      });
    });
  }
}
