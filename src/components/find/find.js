import './find.scss';
import Choices from 'choices.js';
import { ENV } from '../../env';

const multiMapInit = (data) => {
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
          id: index,
        },
      };
      mapList.push(map);
    });

    const choicesNolint = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      choices: mapList,
      classNames: {
        containerOuter: 'choices find__choices',
      },
    });

    // Инициализация яндекс карт по классу ".find__map".
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
            controls: ['zoomControl'],
          }, {
            balloonAutoPanMargin: 50,
          });
          myMap.behaviors.disable('scrollZoom');

          // Создание макета содержимого балуна.
          let placemark;
          let MyBalloonLayout;
          let MyBalloonContentLayout;

          // Макет создается с помощью фабрики макетов с помощью текстового шаблона.
          MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
          '<div class="find__balloon">' +
            '<a class="find__balloon-close" href="#"><span></span></a>' +
            '<div class="find__balloon-arrow"></div>' +
            '<div class="find__balloon-inner">' +
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

                this._$element = $('.find__balloon', this.getParentElement());

                this.applyElementOffset();

                this._$element.find('.find__balloon-close')
                    .on('click', $.proxy(this.onCloseClick, this));
            },

            /**
             * Удаляет содержимое макета из DOM.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
             * @function
             * @name clear
             */
            clear: function () {
                this._$element.find('.find__balloon-close')
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
              if(!this._isElement(this._$element)) {
                return MyBalloonLayout.superclass.getShape.call(this);
              }

              var position = this._$element.position();

              return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                [position.left, position.top], [
                  position.left + this._$element[0].offsetWidth,
                  position.top + this._$element[0].offsetHeight + this._$element.find('.find__balloon-arrow')[0].offsetHeight
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
                return element && element[0] && element.find('.find__balloon-arrow')[0];
            }
          });

          // Создание вложенного макета содержимого балуна.
          MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<p class="find__balloon-title">$[properties.balloonHeader]</p>' +
            '<div class="find__balloon-content">$[properties.balloonContent]</div>'
          );

          let myGeoObjects;

          if (window.innerWidth >= 768) {
            myGeoObjects = new ymaps.GeoObjectCollection({}, {
              iconLayout: 'default#image',
              iconImageHref: `${window.routes5.Media[`url${ENV}`]}map-pin.svg`,
              iconImageSize: [25, 35],
              iconImageOffset: [-13, -18],
            });
          } else {
            myGeoObjects = new ymaps.GeoObjectCollection({}, {
              iconLayout: 'default#image',
              iconImageHref: `${window.routes5.Media[`url${ENV}`]}map-pin.svg`,
              iconImageSize: [18, 25],
              iconImageOffset: [-9, -13],
            });
          }

          // Функция создания списка городов.
          const renderCities = (object) => {
            locationList.innerHTML = '';
            for (let i = 0; i < object.length; i++) {
              const countPins = object[i].crd.length
              const li = document.createElement('li');

              // Проверка что город важен.
              const big = object[i].big;
              const checkBig = () => {
                if (big) {
                  return `find__location-link--big`;
                } else {
                  return ``;
                }
              };

              // Проверка что город первый в списке.
              const setActive = () => {
                if (i === 0) {
                  return `find__location-link--active`;
                } else {
                  return ``;
                }
              };

              li.innerHTML = `<li class="find__location-item"><a href="#" class="find__location-link ${checkBig()} ${setActive()}">${object[i].city}<sup>${countPins}</sup></a></li>`;
              const itemMenu = locationList.appendChild(li.firstChild).querySelector('a');
  
              // При клике на пункт из списка перерисовывает метки.
              itemMenu.addEventListener('click', (evt) => {
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
          };
  
          // Функция создания метки и таблички с текстом.
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
                  balloonContent: `${content}`,
                }, {
                  balloonShadow: false,
                  balloonLayout: MyBalloonLayout,
                  balloonContentLayout: MyBalloonContentLayout,
                  // balloonPanelMaxMapArea: 0,
                });
              } else {
                placemark = new ymaps.Placemark([coorinateX, coorinateY], {
                  balloonHeader: `${mapName}`,
                  balloonContent: `${content}`,
                }, {
                  balloonContentLayout: MyBalloonContentLayout,
                  // balloonPanelMaxMapArea: 0,
                });
              }

              myGeoObjects.add(placemark);
            });
  
            // Добавление коллекции на карту.
            myMap.geoObjects.add(myGeoObjects);
  
            // Определяем сколько маркеров будет на карте.
            const count = object.crd.length;
            if (count > 1) {
              // Установка центра и масштаба карты таким образом, чтобы вся коллекция была видна.
              myMap.setBounds(myGeoObjects.getBounds());
              // myMap.setZoom(13);
            } else {
              const coorinateX = object.crd[0].x;
              const coorinateY = object.crd[0].y;
              myMap.setCenter([`${coorinateX}`,`${coorinateY}`]);
              myMap.setZoom(16);
            }
          };
  
          // Логика чтобы менять картинки шишки при наведении и клике.
          myGeoObjects.events
            .add('balloonopen', (evt) => {
              // При открытии балуна, задаём новую картинку для метки.
              evt.get('target').options.set('preset', {
                iconImageHref: `${window.routes5.Media[`url${ENV}`]}map-pin--active.svg`,
              });
            })
            .add('balloonclose', (evt) => {
              // При закрытии балуна, задаём старую картинку для метки.
              evt.get('target').options.unset('preset');
            });
  
          // Рисуем первый объект из массива по умолчанию.
          renderMarker(data[0].location[0]);

          // Рисуем список городов из региона по умолчанию.
          renderCities(data[0].location);

          // Проходим по массиву и собираем всё в коллекцию.
          for (let i = 0; i < data[0].location.length; i++) {
          }
  
          
          select.addEventListener('addItem', (event) => {
            const indx = event.detail.customProperties.id;
            myGeoObjects.removeAll();
  
            // Рисуем выбранный объект из массива по умолчанию.
            renderMarker(data[indx].location[0]);

            // Рисуем список городов из выбранного региона.
            renderCities(data[indx].location);
          });
        });
        /* eslint-enable */
      });
    }

    return choicesNolint;
  }
};

export default multiMapInit;
