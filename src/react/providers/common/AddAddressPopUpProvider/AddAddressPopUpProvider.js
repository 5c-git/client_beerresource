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
            window.addressPopUpSelectInstance.setChoiceByValue("");
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
                //забираем инстанс choices.js из глобального window и берем из него список опций
                const currentOptions =
                  window.addressPopUpSelectInstance.config.choices;

                //добавляем в массив на предпоследнее место последнюю организацию из списка, который мы загрузили с сервера
                currentOptions.splice(currentOptions.length - 1, 0, {
                  value: `${val.lat}|${val.lon}|${val.address} ${val.street} ${val.house}`,
                  label: `${val.address} ${val.street} ${val.house}`,
                  disabled: false,
                });

                //тут обновляем список
                window.addressPopUpSelectInstance.clearChoices();
                window.addressPopUpSelectInstance.setChoices(currentOptions);
                window.addressPopUpSelectInstance.setChoiceByValue(
                  `${val.lat}|${val.lon}|${val.address} ${val.street} ${val.house}`,
                );

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
