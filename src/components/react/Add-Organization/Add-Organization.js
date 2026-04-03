import React, { useState } from "react";
import { dataAPI, organizationsApi } from "../../../api/api";
import FormAddOrganization1 from "../Form-Add-Organization-1/Form-Add-Organization-1";
import FormAddOrganization2 from "../Form-Add-Organization-2/Form-Add-Organization-2";

const AddOrganization = () => {
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
    const result = await organizationsApi.addNewOrganization(newOrganization);

    if (result === "success") {
      window.Corners5ProjectLayout.summonAlert("#alert--add");

      setTimeout(() => {
        window.location.replace(
          `${window.location.origin}/personal/organizations/`,
        );
      }, 3000);
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

export default AddOrganization;
