import "./AddAddressPopUpProvider.scss";
import "react-dadata/dist/react-dadata.css";
import { createRoot } from "react-dom/client";
import { AddressSuggestions } from "react-dadata";
import { useState, useEffect } from "react";
import Modal from "react/components/Modal/Modal";
import Address from "react/components/Address/Address";
import { getPaddingFromBody, getPaddingOnBody } from "utils/utils";
import { fetchOrganizations } from "api/OrganizationsApi";
import { ENV } from "env";

import { fetchAddresses, sendUpdatedAddresses } from "api/AddressApi";

const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true,
});

const AddAddressPopUpProvider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  const [show, setShow] = useState(false);
  const [address, setAddress] = useState({ value: "" });

  useEffect(() => {
    if (isLoading && addresses.length === 0) {
      fetchAddresses(setIsLoading, setAddresses);
      fetchOrganizations(setIsLoading, setOrganizations);
    }
  });

  useEffect(() => {
    if (show) {
      getPaddingOnBody();
    } else {
      getPaddingFromBody();
    }
  }, [show]);

  window.AddAddressPopUpProvider = { setShow };

  return (
    <section className="AddAddressPopUpProvider">
      {show ? (
        <Modal
          className="Modal--address AddAddressPopUpProvider__modal AddAddressPopUpProvider__modal--nooverflow"
          closeModal={() => {
            setShow(false);
            setAddress({ value: "" });
          }}
          closeEvent={placeholderEvent}
        >
          <section className="AddAddressPopUpProvider__form">
            <p className="AddAddressPopUpProvider__header">Адрес</p>

            <p className="AddAddressPopUpProvider__text">
              Введите адрес в свободной форме
            </p>

            <div className="AddAddressPopUpProvider__field-container">
              <AddressSuggestions
                className="AddAddressPopUpProvider__field"
                token="14ae5e2d4d50c72272527cc24f93b32fa6650307"
                defaultQuery={address.value}
                onChange={setAddress}
                inputProps={{ placeholder: "Введите адрес" }}
                delay={1000}
                count={5}
              />
            </div>

            {address.data ? (
              <div className="AddressProvider__buttons">
                <button
                  className="button button--transparent AddressProvider__button AddressProvider__cancel"
                  onClick={() => {
                    setShow(false);
                    setAddress("");
                  }}
                >
                  ✗ Отменить
                </button>

                <button
                  className="button AddressProvider__button"
                  type="button"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Далее
                </button>
              </div>
            ) : null}
          </section>
        </Modal>
      ) : null}
      {show === false && address.data ? (
        <Modal
          className="Modal--address AddAddressPopUpProvider__modal"
          closeModal={() => {
            setShow(false);
            setAddress({ value: "" });
            // Селект не трогаем: выбор уже возвращён к прежнему адресу (или к плейсхолдеру)
            // в момент клика по "+ Добавить ещё адрес" — см. order_ajax_ext.js. Сбрасывать
            // его здесь в "" значило бы терять адрес, выбранный до открытия модалки.
          }}
          closeEvent={placeholderEvent}
        >
          <Address
            address={address}
            organizations={organizations}
            cancelHandler={() => {
              setShow(true);
            }}
            submitHandler={async (val) => {
              const request = await fetch(
                `${window.routes5.addresses.requests.updateAddresses[`url${ENV}`]}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(val),
                },
              );
              if (request.status === 200) {
                // Строку адреса собирает БЭК из всех полей формы (дом, квартира, подъезд,
                // домофон, этаж) и в ответ на POST отдаёт актуальный список
                // [{name, addresses: {ID: "полный адрес"}}]. Берём оттуда только что
                // созданный (максимальный ID — HL отдаёт ID DESC, автоинкремент) и строим
                // опцию 1:1 как серверная: value = LAT|LON|NAME|ID_ADDRESS (4 сегмента).
                // Самому клеить ярлык нельзя: он уходит в #locationNew → ORDER_PROP ADDRESS
                // (обрезанный адрес в заказе), а без ID_ADDRESS checkPosition.php не считает
                // зону доставки для свежего адреса.
                const addresses = await request.json();

                const [id, name] = addresses
                  .flatMap((group) => Object.entries(group.addresses ?? {}))
                  .sort((a, b) => Number(b[0]) - Number(a[0]))[0] ?? [];

                if (!id) {
                  // Адрес сохранён, но список не распознан — не подсовываем в селект
                  // самодельную опцию (см. выше), просто закрываем: после перезагрузки
                  // страницы адрес придёт с сервера штатной опцией.
                  console.error("[addresses] неожиданный ответ:", addresses);
                  setAddress({ value: "" });
                  window.AddAddressPopUpProvider.setShow(false);
                  return;
                }

                const optionValue = `${val.lat}|${val.lon}|${name}|${id}`;

                //забираем инстанс choices.js из глобального window и берем из него список опций
                const currentOptions =
                  window.addressPopUpSelectInstance.config.choices;

                //добавляем в массив на предпоследнее место последнюю организацию из списка, который мы загрузили с сервера
                currentOptions.splice(currentOptions.length - 1, 0, {
                  value: optionValue,
                  label: name,
                  disabled: false,
                });

                //тут обновляем список
                window.addressPopUpSelectInstance.clearChoices();
                window.addressPopUpSelectInstance.setChoices(currentOptions);
                window.addressPopUpSelectInstance.setChoiceByValue(optionValue);

                // Choices на ПРОГРАММНЫЙ выбор шлёт только addItem, но не change — а вся
                // логика заказа (locationNew/locationNewtwo, addressSet, checkPosition,
                // пересчёт доставки) висит на change. Без этого только что добавленный адрес
                // выглядит выбранным, но для формы его нет: заказ уходит без адреса, а блок
                // региона остаётся невалидным (красная рамка). Дёргаем change руками.
                const selectNode =
                  window.addressPopUpSelectInstance.passedElement?.element;

                if (selectNode) {
                  selectNode.dispatchEvent(new Event("change", { bubbles: true }));
                }

                setAddress({ value: "" });
                window.AddAddressPopUpProvider.setShow(false);
              }

              // sendUpdatedAddresses(val, setAddresses, setShow, setAddress);
            }}
          />
        </Modal>
      ) : null}
    </section>
  );
};

const AddressProviderContainer = document.querySelector(
  "#AddAddressPopUpProvider",
);

if (AddressProviderContainer) {
  createRoot(AddressProviderContainer).render(<AddAddressPopUpProvider />);
}
