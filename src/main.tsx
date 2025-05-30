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
import Desc from "./desc.tsx";
import Team from "./team.tsx";
import Form from "./form.tsx";

//
//

const App = () => {
  return (
    <>
      <Banner />
      <Menu />
      <Desc />
      <Team />
      <Form />
    </>
  )
};

//
//

ReactDOMClient.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);