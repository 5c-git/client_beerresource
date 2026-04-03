import axios from "axios";
import { ENV } from "../env";

export const fetchOrganizations = (setIsLoading, setOrganizations) => {
  axios
    .get(
      `${window.routes5.organizations.requests.getOrganizations[`url${ENV}`]}`
    )
    .then((response) => {
      if (response.status === 200 && response.data.status !== "error") {
        setIsLoading(false);
        setOrganizations(response.data);
      } else {
        setIsLoading(false);
        setOrganizations(response.data.status);
      }
    });
};

// отправляем обновлённые данные на сервер и получаем их обратно
export const sendUpdatedOrganizations = (
  organizations,
  index,
  setOrganizations,
  messages,
  setMessage
) => {
  axios
    .post(
      `${
        window.routes5.organizations.requests.updateOrganizations[`url${ENV}`]
      }`,
      organizations
    )
    .then((response) => {
      // oranizationsApi
      //   .post(
      //     "https://run.mocky.io/v3/590209b9-3b3a-45c2-b816-cd6d66ccb123",
      //     organizations
      //   )
      //   .then((response) => {
      const updatedMessages = [...messages];

      updatedMessages.push({
        type: "success",
        text: response.data[index].companyName,
      });

      setOrganizations(response.data);
      setMessage(updatedMessages);
    });
};

// отсылаем на сервер данные после удаления
export const sendDeletedOrganizations = (
  organizations,
  setOrganizations,
  setModal
) => {
  oranizationsApi
    .post(
      `${
        window.routes5.organizations.requests.deleteOrganizations[`url${ENV}`]
      }`,
      organizations
    )
    .then((response) => {
      window.Corners5ProjectLayout.summonAlert("#alert--organization-deleted");

      setModal(null);
      setOrganizations(response.data);
      // setMessage(updatedMessages);
    });
};
