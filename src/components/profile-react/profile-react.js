import './profile-react.scss';
import React from 'react';
import { createRoot } from "react-dom/client";
import AddOrganization from '../react/Add-Organization/Add-Organization';
import FormPersonalData from '../react/Form-Personal-Data/Form-Personal-Data';

const personalData = document.querySelector('#personal-data');
const addOrganization = document.querySelector('#add-organization');

if (personalData) {
  createRoot(personalData).render(<FormPersonalData />);
}

if (addOrganization) {
  createRoot(addOrganization).render(<AddOrganization />);
}
