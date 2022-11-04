// console.log('hello');

import React from "react";
import ReactDom from "react-dom";
// import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const appContainer = document.querySelector('#app');

ReactDom.render(
  <div>
    <h1>Hello React</h1>
  </div>,
  appContainer
)