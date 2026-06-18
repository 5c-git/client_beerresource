import "./OrganizationProvider.scss";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  fetchOrganizations,
  sendUpdatedOrganizations,
  sendDeletedOrganizations,
} from "api/OrganizationsApi";

import Warning from "react/components/Warning/Warning";
import Organization from "react/components/Organization/Organization";
import Modal from "react/components/Modal/Modal";

import Loader from "react/components/Loader/Loader";
import Code from "react/components/Code/Code";

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
  contacts: [
    {
      fio: "",
      email: "",
      phone: "",
      role: "",
    },
  ],
  meta: {
    status: "",
    message: "",
  },
};

const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true,
});

const OrganizationProvider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [organizations, setOrganizations] = useState([]);

  const [warnings, setWarnings] = useState([]);

  const [organizationToDelete, setOrganizationToDelete] = useState(null);

  useEffect(() => {
    if (isLoading && organizations.length === 0) {
      fetchOrganizations(setIsLoading, setOrganizations);
    }
  });

  // берем массив органицаций вставляем обновленную организацию и делаем запрос на сервер, давая обратную связь
  const replaceOldOrgWithNew = (newOrganization) => {
    const indexToReplace = organizations.findIndex(
      (item) => item.inn === newOrganization.inn
    );
    organizations[indexToReplace] = newOrganization;
    sendUpdatedOrganizations(
      organizations,
      indexToReplace,
      setOrganizations,
      warnings,
      setWarnings
    );
  };

  // берем массив органицаций удаляем организацию и делаем запрос на сервер, давая обратную связь
  const deleteOrganization = () => {
    const updatedArray = organizations.filter(
      (item) => item.inn !== organizationToDelete.inn
    );

    sendDeletedOrganizations(
      updatedArray,
      setOrganizations,
      setOrganizationToDelete
    );
  };

  // меняем статус заблокированной организации на разблокированный
  const unlockOrganization = (inn) => {
    const updatedOrganizations = [...organizations];
    const organiztionIndexToUnlock = updatedOrganizations.findIndex(
      (item) => item.inn === inn
    );
    updatedOrganizations[organiztionIndexToUnlock].meta.status = "";

    setOrganizations(updatedOrganizations);
  };

  const deleteWarning = (index) => {
    const filteredWarnings = warnings.filter((_alert, indx) => indx !== index);

    setWarnings(filteredWarnings);
  };

  return (
    <div className="OrganizationProvider">
      {organizationToDelete ? (
        <Modal
          closeModal={() => {
            setOrganizationToDelete(null);
          }}
          closeEvent={placeholderEvent}
        >
          <div className="OrganizationProvider__delete">
            <svg className="OrganizationProvider__question">
              <use href="#icon-question"></use>
            </svg>
            <p className="OrganizationProvider__delete-text">
              Вы действительно хотите удалить организацию{" "}
              {organizationToDelete.companyName}?
            </p>
            <div className="OrganizationProvider__delete-navigation">
              <button
                className="button button--transparent"
                onClick={() => {
                  setOrganizationToDelete(null);
                }}
              >
                Отменить
              </button>
              <button
                className="button"
                onClick={() => {
                  deleteOrganization();
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        </Modal>
      ) : null}

      {isLoading && organizations.length === 0 ? (
        <Loader />
      ) : (
        <>
          {organizations.length > 0 ? (
            <>
              {warnings.length !== 0
                ? warnings.map((item, index) => (
                    <Warning
                      key={index}
                      index={index}
                      type={item.type}
                      deleteFn={deleteWarning}
                      text={`Изменение данных об организации ${item.text} отправлено на проверку. Наш менеджер свяжется с вами и обсудит детали изменений.`}
                    />
                  ))
                : null}

              {organizations.map((item, index) => (
                <Organization
                  key={index}
                  organization={item}
                  unlockOrg={unlockOrganization}
                  sendOrg={replaceOldOrgWithNew}
                  callAlert={setOrganizationToDelete}
                />
              ))}
            </>
          ) : (
            <>
              <p className="Organization__contact-header">
                В данный момент у вас нет активных организаций.
              </p>
              {/* <Warning /> */}
            </>
          )}

          {/* <button
            className="button OrganizationProvider__button"
            type="button"
            onClick={() => {
              const updatedOrganizations = [...organizations];
              updatedOrganizations.push(emptyOrganization);
              setOrganizations(updatedOrganizations);
            }}
          >
            + Добавить организацию
          </button> */}
          <a
            className="button OrganizationProvider__button"
            href={window.routes5.LINKS.addOrganization}
          >
            + Добавить организацию
          </a>
        </>
      )}
    </div>
  );
};

const Organizations = document.querySelector("#OrganizationProvider");

if (Organizations) {
  createRoot(Organizations).render(<OrganizationProvider />);
}
