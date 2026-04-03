import axios from "axios";
import { ENV } from "../env";

export const fetchAddresses = (setIsLoading, setAddresses) => {
  axios
    .get(`${window.routes5.addresses.requests.getAddresses[`url${ENV}`]}`)
    .then((response) => {
      if (response.status === 200) {
        setIsLoading(false);
        setAddresses(response.data);
      }
    });
};

export const sendUpdatedAddresses = (
  addresses,
  setAddresses,
  setShow,
  setAddress,
  action
) => {
  axios
    .post(
      `${window.routes5.addresses.requests.updateAddresses[`url${ENV}`]}`,
      addresses
    )
    .then((response) => {
      setAddresses(response.data);
      setShow(false);
      setAddress("");
      window.Corners5ProjectLayout.summonAlert("#alert--save");
      window.location.reload();
      // if (action === "update") {
      //   window.Corners5ProjectLayout.summonAlert("#alert--save");
      // }
    });
};
