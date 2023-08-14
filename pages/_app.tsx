import React, { useState } from "react";
// These styles apply to every route in the application
import '/styles/globals.css';
import '/styles/types.css';
import type { AppProps } from 'next/app';

import Header from "../components/Header";
import Main from "../components/Main";
import Panel from "../components/Panel";
import GenerationMenu from "../components/GenerationMenu";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="
        grid grid-rows-6 grid-cols-5
        bg-background text-blue-dark h-screen
        dark:bg-background-dark dark:text-blue-lightest
      ">
        <Header mode={darkMode} setMode={setDarkMode}/>
          <Panel>
            <GenerationMenu />
          </Panel>
          <Main>
            <Component {...pageProps} />
          </Main>
        <Footer />
      </div>
    </div>
  )
}