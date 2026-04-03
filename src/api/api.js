import axios from "axios";
import { ENV } from "../env";

const token = "5e287fb1cee7358cb4f771eba5b1ea444a1a3535";

// 5a0749d3-9db5-40c4-9b10-c6048d5933b4

const instance = axios.create({
  baseURL: "/local/ajax/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

const daData = axios.create({
  baseURL:
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Token ${token}`,
  },
});

// запрашиваем данные по организаций с Dadata по ИНН
// export const dataAPI = {
//   getOrganization(query) {
//     return daData
//       .post(null, { query })
//       .then((response) => {
//         if (response.data.suggestions[0]) {
//           const { data } = response.data.suggestions[0];
//           return data;
//         }
//         const data = {};
//         return data;
//       })
//       .catch((error) => console.log("error", error));
//   },
// };

export const dataAPI = {
  async getOrganization(query) {
    // const response = await axios.post(
    //   `https://run.mocky.io/v3/d08be300-d426-4c4d-be67-0c2ff36c48a2`,
    //   { inn: query }
    // );

    const response = await axios.post(`checkCompany.php`, { inn: query });

    const daDataInfo = await daData.post(null, { query });

    if (daDataInfo.data.suggestions[0]) {
      return {
        isAlreadyExist: response.data.result ? true : false,
        data: daDataInfo.data.suggestions[0],
      };
    }

    return {
      isAlreadyExist: response.data.result ? true : false,
      data: {},
    };
  },
};

// отправляем данные по добавлению новой организации на сервер
export const organizationsApi = {
  addNewOrganization(newOrganization) {
    return instance
      .post("add_organization.php", { newOrganization })
      .then((response) => {
        if (response.status === 200 && response.data.status !== "error") {
          return "success";
        } else {
          return "Возникла ошибка, повторите попытку позже";
        }
      })
      .catch((error) => console.log("error", error));
  },
};

// действия с профайлом, получение, обновление полей
export const profileApi = {
  getProfile() {
    return axios
      .get(`${window.routes5.profile.requests.getProfile[`url${ENV}`]}`)
      .then((response) => {
        if (response.status === 200 && response.data.status !== "error") {
          return response.data;
        } else {
          return "Возникла ошибка, повторите попытку позже";
        }
      })
      .catch(() => "Возникла ошибка, повторите попытку позже");
  },

  updateName(name) {
    return instance
      .put("personal_data.php", { name })
      .then((response) => {
        if (response.status === 200) {
          console.log("Изменения сохранены");
          window.Corners5ProjectLayout.summonAlert("#alert--fio");
        }
      })
      .catch((error) => console.log("error", error));
  },

  updateEmail(email) {
    return instance
      .put("personal_data.php", { email })
      .then((response) => {
        if (response.status === 200) {
          console.log("Изменения сохранены");
          window.Corners5ProjectLayout.summonAlert("#alert--confirm-email");
        }
      })
      .catch((error) => console.log("error", error));
  },

  sendSMS(sms, phone, close) {
    return instance
      .post("personal_data.php", { sms, phone })
      .then((response) => {
        if (response.data.status === "success") {
          window.Corners5ProjectLayout.summonAlert("#alert--mobileSuccess");
          close(false);
        } else if (response.data.status === "error") {
          document
            .querySelector("#alert--error")
            .content.querySelector(".alert__text").textContent =
            response.data.text === "error";
          window.Corners5ProjectLayout.summonAlert("#alert--error");
        }
      })
      .catch((error) => console.log("error", error));
  },

  // https://run.mocky.io/v3/1d0492b9-1ac2-47bf-96f3-37fe70592c5d
  // personal_data.php
  updatePhone(phone) {
    return instance
      .put("personal_data.php", {
        phone,
      })
      .then((response) => {
        if (response.status === 200 && response.data.status === "success") {
          return true;
        } else if (
          response.status === 200 &&
          response.data.status === "error"
        ) {
          document
            .querySelector("#alert--error")
            .content.querySelector(".alert__text").textContent =
            response.data.text;
          window.Corners5ProjectLayout.summonAlert("#alert--error");
          return false;
        }
      })
      .catch((error) => console.log("error", error));
  },
};
