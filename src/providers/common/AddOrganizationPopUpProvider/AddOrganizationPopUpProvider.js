import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import AddOrganizationPopUp from "../../../components/react/Add-Organization-PopUp/Add-Organization-PopUp";
import Modal from "../../../react/Modal/Modal";

import { getPaddingOnBody } from "../../../utils/utils";
import { getPaddingFromBody } from "../../../utils/utils";

const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true,
});

const AddOrganizationPopUpProvider = () => {
  const [open, setOpen] = useState(false);

  // хак для шапки
  useEffect(() => {
    if (open) {
      getPaddingOnBody();
    } else {
      getPaddingFromBody();
    }
  }, [open]);

  window.AddOrganizationPopUpProvider = { setOpen };

  return (
    <section className="AddOrganizationPopUpProvider">
      {open ? (
        <Modal
          closeModal={() => {
            setOpen(false);
            window.organizationPopUpSelectInstance.setChoiceByValue("");
          }}
          className="Modal--add-organization-popup"
          closeEvent={placeholderEvent}
        >
          <AddOrganizationPopUp />
        </Modal>
      ) : null}
    </section>
  );
};

const AddOrganizationPopUpContainer = document.querySelector(
  "#AddOrganizationPopUpProvider",
);

if (AddOrganizationPopUpContainer) {
  ReactDOM.render(
    <AddOrganizationPopUpProvider />,
    AddOrganizationPopUpContainer,
  );
}
