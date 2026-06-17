import React, { useState } from "react";
import { dataAPI, organizationsApi } from "api/api";
import { ENV } from "env";
import FormAddOrganization1 from "../Form-Add-Organization-1/Form-Add-Organization-1";
import FormAddOrganization2 from "../Form-Add-Organization-2/Form-Add-Organization-2";

const AddOrganizationPopUp = () => {
  const [step, setStep] = useState("one");
  const [exist, setExist] = useState(false);
  const [formData, setFormData] = useState({
    firstStep: {
      inn: "",
      mainFio: "",
      mainEmail: "",
      mainPhone: "",
      mainRole: [],
      contacts: [
        {
          fio: "",
          email: "",
          phone: "",
          role: [],
        },
      ],
    },
    secondStep: {
      inn: "",
      companyName: "",
      address: "",
      addressMailing: "",
      ogrn: "",
      kpp: "",
      // bank: "",
      // bik: "",
      // accountChecking: "",
      // accountСorrespondent: "",
    },
  });

  const fetchData = async (inn) => {
    const organization = await dataAPI.getOrganization(inn);
    const emptyOrganization = Object.keys(organization.data).length === 0;
    if (!emptyOrganization) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        secondStep: {
          inn: organization.data.data.inn,
          companyName: organization.data.data.name.short_with_opf,
          address: organization.data.data.address.unrestricted_value,
          addressMailing: organization.data.data.address.unrestricted_value,
          ogrn: organization.data.data.ogrn,
          kpp: organization.data.data.kpp,
          bank: "",
          bik: "",
          accountChecking: "",
          accountСorrespondent: "",
        },
      }));
      setStep("two");
      setExist(organization.isAlreadyExist);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        secondStep: {
          inn: prevFormData.firstStep.inn,
          companyName: "",
          address: "",
          addressMailing: "",
          ogrn: "",
          kpp: "",
          bank: "",
          bik: "",
          accountChecking: "",
          accountСorrespondent: "",
        },
      }));
      setStep("two");
      setExist(organization.isAlreadyExist);
    }
  };

  const addNewOrganization = async (newOrganization) => {
    //добавляем новую организацию на сервер
    const result = await organizationsApi.addNewOrganization(newOrganization);

    // если успешно добавилось
    // - запрашиваем все организации
    // - берем последнюю
    // - обноавляем инстанс choices.js
    // - закрываем попап с добавлением органиций
    //
    const allOrganizationsRequest = await fetch(
      `${window.routes5.organizations.requests.getOrganizations[`url${ENV}`]}`,
    );
    const allOrganizationsResponse = await allOrganizationsRequest.json();

    if (allOrganizationsRequest.status === 200) {
      const lastOrganization =
        allOrganizationsResponse[allOrganizationsResponse.length - 1];

      //забираем инстанс choices.js из глобального window и берем из него список опций
      const currentOptions =
        window.organizationPopUpSelectInstance.config.choices;

      //добавляем в массив на предпоследнее место последнюю организацию из списка, который мы загрузили с сервера
      currentOptions.splice(currentOptions.length - 1, 0, {
        value: lastOrganization.id,
        label: lastOrganization.companyName,
        disabled: false,
      });

      //тут обновляем список
      window.organizationPopUpSelectInstance.clearChoices();
      window.organizationPopUpSelectInstance.setChoices(currentOptions);
      window.organizationPopUpSelectInstance.setChoiceByValue(
        lastOrganization.id,
      );

      // закрываем всплывающее окно
      window.AddOrganizationPopUpProvider.setOpen(false);

      // setTimeout(() => {}, 3000);
    }
  };

  let component = null;
  switch (step) {
    case "one":
      component = (
        <FormAddOrganization1
          fetchData={fetchData}
          dataForm={formData}
          setDataForm={setFormData}
        />
      );
      break;
    case "two":
      component = (
        <FormAddOrganization2
          dataForm={formData}
          setDataForm={setFormData}
          addNewOrganization={addNewOrganization}
          setStep={setStep}
          existFlag={exist}
        />
      );
      break;
    default:
      break;
  }

  return (
    <>
      <div className="form-lk__add-organization">
        <a className="form-lk__link" href="lk-my-organization.html">
          ← Мои организации
        </a>
      </div>
      {component}
    </>
  );
};

export default AddOrganizationPopUp;
