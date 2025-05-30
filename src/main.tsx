//
// main.tsx
//

import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client'

//
//

import "./fonts.css";
import "./main.css";

//
//

import Banner from "./banner.tsx";
import Menu from "./menu.tsx";

//
//

const element = document.querySelector('#root');
const root = ReactDOMClient.createRoot(element!);
root.render(
  <React.StrictMode>
    <Banner />
    <Menu />
  </React.StrictMode>
);