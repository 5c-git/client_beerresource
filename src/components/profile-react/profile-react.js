import './profile-react.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import AddOrganization from '../react/Add-Organization/Add-Organization';
import FormPersonalData from '../react/Form-Personal-Data/Form-Personal-Data';

const personalData = document.querySelector('#personal-data');
const addOrganization = document.querySelector('#add-organization');

if (personalData) {
  ReactDOM.render(<FormPersonalData />, personalData);
}

if (addOrganization) {
  ReactDOM.render(<AddOrganization />, addOrganization);
}
