//
// main.tsx
//

import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Routes } from 'react-router-dom';

//
//

//import LogoImage from "./assets/logo.svg";

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
import Footer from "./components/footer.tsx";

//
//

//import Menu from "./menu.tsx";
import Desc from "./desc.tsx";
import Team from "./team.tsx";

//
//

//import TeamPage from "./pages/team.tsx";
//import ResearchPage from "./pages/research.tsx";

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
  const [ mode, setMode ] = React.useState('dark');

  const toggleMode = () => {
    setMode((previous) => (previous === 'dark') ? 'light' : 'dark');
  }

  const theme = React.useMemo(
    () => {
      return (mode === 'dark') ? themes.dark : themes.light;
    }, [mode]
  );

  return (
    <Emotion.ThemeProvider theme={theme}>
      <Material.CssBaseline />
      <Material.Button style={{ display: 'none' }} onClick={toggleMode} />
      <Banner />
      <Desc text="Systems fail because they forget people. At Gonzo Solutions, we understand that there is no one-size-fits-all when it comes to addressing the human factor in an organization. Every organization is unique. Our secret sauce is the lessons learned from many years of solving technical and human problems in both industry and academia. We understand technology. We understand system integration. We understand security. We understand humans. The Gonzo approach is polished when it counts and unapologetic when it matters. No more patch jobs on soul-level issues; we put humans back in the loop." />
      <Team />
      <BrowserRouter>
        <Material.Container>
          <Routes>
          </Routes>
        </Material.Container>
      </BrowserRouter>

      <Footer copyright="GraveValley Design" />
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