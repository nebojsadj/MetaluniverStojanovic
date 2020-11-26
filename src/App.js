import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pocetna from "./components/Pocetna";
import Onama from "./components/Onama";
import Proizvodi from "./components/Proizvodi";
import Kontakt from "./components/Kontakt";
import Ograde from "./components/Kategorije/Ograde";
import Vrata from "./components/Kategorije/Vrata";
import Stepenista from "./components/Kategorije/Stepenista";
import Rampe from "./components/Kategorije/Rampe";
import Nadstresnice from "./components/Kategorije/Nadstresnice";
import Resetke from "./components/Kategorije/Resetke";
import Boksevi from "./components/Kategorije/Boksevi";
import Gelenderi from "./components/Kategorije/Gelenderi";
import Hale from "./components/Kategorije/Hale";
import VisecaKliznaVrata from "./components/Kategorije/VisecaKliznaVrata";
import Galanterija from "./components/Kategorije/Galanterija";
import DecijiProgram from "./components/Kategorije/DecijiProgram";
import PaleteZaTransport from "./components/Kategorije/PaleteZaTransport";
import Sahte from "./components/Kategorije/Sahte";
import { langSR } from "./components/Jezici";
import { langEN } from "./components/Jezici";
import { langFR } from "./components/Jezici";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [language, setLanguage] = useState(langSR);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <ScrollToTop />
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-12">
            <button
              onClick={() => changeLanguage(langFR)}
              className="btn btn-outline-light btn-sm mt-3 ml-2 float-right btns"
            >
              FR
            </button>
            <button
              onClick={() => changeLanguage(langEN)}
              className="btn btn-outline-primary btn-sm mt-3 ml-2 float-right btns"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage(langSR)}
              className="btn btn-outline-danger btn-sm mt-3 ml-2 float-right btns"
            >
              SR
            </button>
          </div>
        </div>
      </div>
      <Header lang={language} />
      <Route path="/" exact>
        <Pocetna lang={language} />
      </Route>
      <Route path="/onama">
        <Onama lang={language} />
      </Route>
      <Route path="/proizvodi">
        <Proizvodi lang={language} />
      </Route>
      <Route path="/kontakt">
        <Kontakt lang={language} />
      </Route>
      <Route path="/ogradeIkapije">
        <Ograde lang={language} />
      </Route>
      <Route path="/garaznaVrata">
        <Vrata lang={language} />
      </Route>
      <Route path="/stepenista">
        <Stepenista lang={language} />
      </Route>
      <Route path="/gelenderi">
        <Gelenderi lang={language} />
      </Route>
      <Route path="/hale">
        <Hale lang={language} />
      </Route>
      <Route path="/visecaKliznaVrata">
        <VisecaKliznaVrata lang={language} />
      </Route>
      <Route path="/galanterija">
        <Galanterija lang={language} />
      </Route>
      <Route path="/decijiProgram">
        <DecijiProgram lang={language} />
      </Route>
      <Route path="/navoziRampe">
        <Rampe lang={language} />
      </Route>
      <Route path="/palete">
        <PaleteZaTransport lang={language} />
      </Route>
      <Route path="/nadstresnice">
        <Nadstresnice lang={language} />
      </Route>
      <Route path="/zastitneResetke">
        <Resetke lang={language} />
      </Route>
      <Route path="/sahte">
        <Sahte lang={language} />
      </Route>
      <Route path="/bokseviZaPse">
        <Boksevi lang={language} />
      </Route>
      <Footer lang={language} />
    </>
  );
}

export default App;
