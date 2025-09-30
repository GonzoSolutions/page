//
// main.tsx
//

import React from 'react';
import ReactDOMClient from 'react-dom/client';

//
//

import { BrowserRouter, Routes } from 'react-router-dom';

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

import Banner from "./components/banner.tsx";
//import Feed from "./components/feed.tsx";
import Team from "./components/team.tsx";
import Footer from "./components/footer.tsx";

//
//

//import Menu from "./menu.tsx";
import Desc from "./desc.tsx";

//
//

const themes = { 
  dark: Styles.createTheme(
    {
      palette: {
        mode: 'dark', 
        primary: {
          main: '#ff2a3a', 
        }, 
        secondary: {
          main: '#f9f9f9', 
        }, 
        background: {
          default: '#090909', 
        }
      }, 
      typography: {
        fontFamily: `'Oxanium', sans-serif`,
        fontSize: 16, 
      }, 
    }
  ), 
  light: Styles.createTheme(
    {
      palette: {
        mode: 'light', 
        primary: {
          main: '#ff2a3a', 
        }, 
        secondary: {
          main: '#f9f9f9', 
        }, 
        background: {
          default: '#f9f9f9', 
        }
      }, 
      typography: {
        fontFamily: `'Oxanium', sans-serif`,
        fontSize: 16, 
      }, 
    }
  )
};

//
//

function App() {
  const name = {
    primary: 'gonzo', 
    secondary: 'solutions', 
  };
  const slogan = 'Immerse. Understand. Execute.';

  return (
    <Emotion.ThemeProvider theme={themes.dark}>
      <Material.CssBaseline />

      <Banner primary={name.primary} secondary={name.secondary} slogan={slogan} />
      <Team />

      <BrowserRouter>
        <Material.Container>
          <Routes>
          </Routes>
        </Material.Container>
      </BrowserRouter>

      <Material.Grid container size={3} spacing={2}>
        <Material.Grid size="grow">
        </Material.Grid>

        <Material.Grid container spacing={2} sx={{ margin: 0, padding: '1em' }}>
          <Material.Button variant="contained" color="primary" href="mailto:torvald.ask@proton.me">Contact</Material.Button>
        </Material.Grid>
        <Material.Grid size="grow">
        </Material.Grid>
      </Material.Grid>

    </Emotion.ThemeProvider>
  )
};
//
//

const element = document.querySelector('#root');
ReactDOMClient.createRoot(element!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);