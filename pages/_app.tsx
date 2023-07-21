// These styles apply to every route in the application
import '/styles/globals.css';
import '/styles/types.css';
import type { AppProps } from 'next/app';

import Header from "../components/Header";
import Panel from "../components/Panel";
import PokedexMenu from "../components/PokedexMenu";
import Footer from "../components/Footer";

 
export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className="divide-y-2">
    <Header />
    <div className="flex">
      <Panel>
        <PokedexMenu />
      </Panel>
      <Component {...pageProps} />
    </div>
    <Footer />
   </div>
  )
}