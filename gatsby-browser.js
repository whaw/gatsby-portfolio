import React from 'react';
import 'jquery/dist/jquery.slim.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';

export const wrapPageElement = ({ element }) => {
  return <BrowserRouter>{element}</BrowserRouter>;
}
