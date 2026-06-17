import React from 'react';
import { createRoot } from "react-dom/client";
import FormPersonalData from 'react/components/Form-Personal-Data/Form-Personal-Data';

const personalData = document.querySelector('#personal-data');

if (personalData) {
  createRoot(personalData).render(<FormPersonalData />);
}
