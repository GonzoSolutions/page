//
// main.tsx
//

import React from 'react';
import ReactDOMClient from 'react-dom/client';

//
//

import * as Emotion from '@emotion/react';
import * as Material from '@mui/material';

//
//

import * as Styles from '@mui/material/styles'

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

const themes = { 
  dark: Styles.createTheme(
    {
      palette: { mode: 'dark' }
    }
  )
};

function App() {
  
  return (
    <Emotion.ThemeProvider theme={themes.dark}>
      <Banner />
      <Menu />
      <Desc />
      <Team />
      <Form />
    </Emotion.ThemeProvider>
  )
};

//
//

ReactDOMClient.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);