import axios from "axios";
import { ENV } from "../env";

export const sendPhone = async (phone, returnData) => {
  try {
    const response = await axios.post(
      `${window.routes5.login.requests.sendPhone[`url${ENV}`]}`,
      { phone }
    );

    if (response.data.status === "success") {
      returnData({ data: phone, error: "", isLoading: false });
    } else if (response.data.status === "error") {
      returnData({ data: null, error: response.data.text, isLoading: false });
    }
  } catch (error) {
    if (error.response) {
      returnData({
        data: null,
        error: "Произошла непредвиденная ошибка!",
        isLoading: false,
      });
    } else if (error.request) {
      returnData({
        data: null,
        error: "Произошла непредвиденная ошибка!",
        isLoading: false,
      });
    }
  }
};

export const sendCode = async (data, returnData) => {
  try {
    const response = await axios.post(
      `${window.routes5.login.requests.sendCode[`url${ENV}`]}`,
      { phone: data.phone, sms: data.sms }
    );
    if (response.data.status === "success") {
      returnData({
        data: { sms: data.sms, result: response.data.result },
        error: "",
        isLoading: false,
      });
    } else if (response.data.status === "error") {
      returnData({ data: null, error: response.data.text, isLoading: false });
    }
  } catch (error) {
    if (error.response) {
      returnData({
        data: null,
        error: "Произошла непредвиденная ошибка!",
        isLoading: false,
      });
    } else if (error.request) {
      returnData({
        data: null,
        error: "Произошла непредвиденная ошибка!",
        isLoading: false,
      });
    }
  }
};

export const sendRegistration = async (data, returnData) => {
  try {
    const response = await axios.post(
      `${window.routes5.login.requests.sendRegistration[`url${ENV}`]}`,
      { phone: data.phone, fio: data.fio, email: data.email }
    );
    if (response.data.status === "success") {
      returnData({ data: data.email, error: "", isLoading: false });
    } else if (response.data.status === "error") {
      returnData({ data: null, error: response.data.text, isLoading: false });
    }
  } catch (error) {
    if (error.response) {
      returnData({
        data: null,
        error: "Произошла непредвиденная ошибка!",
        isLoading: false,
      });
    } else if (error.request) {
      returnData({
        data: null,
        error: "Произошла непредвиденная ошибка!",
        isLoading: false,
      });
    }
  }
};
