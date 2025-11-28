
'use client'
import { ThemeProvider } from "styled-components";
import Home from "./pages/home/page";
import { GlobalStyle } from "../styles/global";
import { defaultTheme } from "../styles/themes/theme";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <div id="clouds">
          <div className="cloud c1"></div>
          <div className="cloud c2"></div>
          <div className="cloud c3"></div>
          <div className="cloud c4"></div>
          <div className="cloud c5"></div>
          <div className="cloud c6"></div>
          <div className="cloud c7"></div>
          <div className="cloud c8"></div>
          <div className="cloud c9"></div>
          <div className="cloud c10"></div>
          <div className="cloud c11"></div>
          <div className="cloud c12"></div>
          <div className="cloud c13"></div>
          <div className="cloud c14"></div>
          <div className="cloud c15"></div>
          <div className="cloud c16"></div>
          <div className="cloud c17"></div>

        </div>
        <Home />
    </ThemeProvider>
  );
}
