import React from 'react';
import { createRoot } from "react-dom/client";
import AddOrganization from 'react/components/Add-Organization/Add-Organization';

const addOrganization = document.querySelector('#add-organization');

if (addOrganization) {
  createRoot(addOrganization).render(<AddOrganization />);
}
