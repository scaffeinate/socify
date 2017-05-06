/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './variables.css';
import Socify from '../components/containers/Socify';

document.addEventListener('DOMContentLoaded', () => {
  const mountNode = document.getElementById('socify');
  ReactDOM.render(
    <Socify />, mountNode
  );
});
