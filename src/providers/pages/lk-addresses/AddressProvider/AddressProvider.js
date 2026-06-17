import "./AddressProvider.scss";
import "react-dadata/dist/react-dadata.css";
import { createRoot } from "react-dom/client";
import { AddressSuggestions } from "react-dadata";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Modal from "../../../../react/Modal/Modal";
import Address from "../../../../react/Address/Address";
import Editable from "../../../../react/Editable/Editable";
import Loader from "../../../../react/Loader/Loader";
import { getPaddingFromBody, getPaddingOnBody } from "../../../../utils/utils";
import { fetchOrganizations } from "../../../../api/OrganizationsApi";

import {
  fetchAddresses,
  sendUpdatedAddresses,
} from "../../../../api/AddressApi";

const schemaAddress = Yup.object().shape({
  address: Yup.string().required(),
});

const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true,
});

const AddressProvider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  const [show, setShow] = useState(false);
  const [addressToDelete, setAddressToDelete] = useState({});
  const [address, setAddress] = useState({ value: "" });

  // const updateAddresses = (values, index, indx, val) => {
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

    sendUpdatedAddresses(values, setAddresses, setShow, setAddress);
  };

  useEffect(() => {
    if (isLoading && addresses.length === 0) {
      fetchAddresses(setIsLoading, setAddresses);
      fetchOrganizations(setIsLoading, setOrganizations);
    }
  });

  useEffect(() => {
    if (show || (show === false && address.data)) {
      getPaddingOnBody();
    } else {
      getPaddingFromBody();
    }
  }, [show, address.data]);

  return (
    <section className="AddressProvider">
      {show ? (
        <Modal
          className="Modal--address AddressProvider__modal AddressProvider__modal--nooverflow"
          closeModal={() => {
            setShow(false);
            setAddress({ value: "" });
          }}
          closeEvent={placeholderEvent}
        >
          <section className="AddressProvider__form">
            <p className="AddressProvider__header">Адрес</p>

            <p className="AddressProvider__text">
              Введите адрес в свободной форме
            </p>

            <div className="AddressProvider__field-container">
              <AddressSuggestions
                className="AddressProvider__field"
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
          className="Modal--address AddressProvider__modal AddressProvider__modal--nooverflow"
          closeModal={() => {
            setShow(false);
            setAddress({ value: "" });
          }}
          closeEvent={placeholderEvent}
        >
          <Address
            address={address}
            organizations={organizations}
            cancelHandler={() => {
              setShow(true);
            }}
            submitHandler={(val) => {
              sendUpdatedAddresses(val, setAddresses, setShow, setAddress);
            }}
          />
        </Modal>
      ) : null}
      {Object.keys(addressToDelete).length !== 0 ? (
        <Modal
          className={"AddressProvider__delete-modal"}
          closeModal={() => {
            setAddressToDelete({});
          }}
          closeEvent={placeholderEvent}
        >
          <div className="AddressProvider__delete">
            <svg className="AddressProvider__question">
              <use href="#icon-question"></use>
            </svg>
            <p className="AddressProvider__delete-text">
              Вы действительно
              <br /> хотите удалить адрес?
            </p>
            <div className="AddressProvider__delete-navigation">
              <button
                className="button button--transparent"
                onClick={() => {
                  setAddressToDelete({});
                }}
              >
                Отменить
              </button>
              <button
                className="button"
                onClick={() => {
                  deleteAddress(
                    addresses,
                    addressToDelete.index,
                    addressToDelete.indx,
                  );
                  setAddressToDelete({});
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
      {isLoading && addresses.length === 0 ? (
        <Loader />
      ) : (
        <>
          {addresses.map((item, index) => {
            const locations = Object.entries(item.addresses).map((adrs) => (
              <Editable
                value={adrs[1]}
                key={adrs[0]}
                onEdit={(val) => {
                  // updateAddresses(addresses, index, indx, val);
                  setShow(true);
                  setAddress({ value: val });
                }}
                onDelete={() => {
                  setAddressToDelete({ index, indx: adrs[0] });
                }}
              />
            ));

            return (
              <div className="AddressProvider__item" key={index}>
                <p className="AddressProvider__heading">{item.name}</p>
                {locations}
              </div>
            );
          })}

          <button
            className="button AddressProvider__add"
            onClick={() => {
              setShow(true);
            }}
          >
            + Добавить адрес
          </button>
        </>
      )}
    </section>
  );
};

const AddressProviderContainer = document.querySelector("#AddressProvider");

if (AddressProviderContainer) {
  createRoot(AddressProviderContainer).render(<AddressProvider />);
}
