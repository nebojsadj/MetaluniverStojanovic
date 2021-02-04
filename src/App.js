import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pocetna from "./components/Pocetna";
import Proizvodi from "./components/Proizvodi";
import Kontakt from "./components/Kontakt/Kontakt";
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
import SkrolujNaVrh from "./components/SkrolujNaVrh";
import { Col, Container, Row, Button } from "react-bootstrap";

function App() {
  const [language, setLanguage] = useState(langSR);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <SkrolujNaVrh />
      <Container fluid className="bg-dark">
        <Row>
          <Col className="mb-1">
            <Button
              variant="outline-light"
              onClick={() => changeLanguage(langFR)}
              className="btn-sm mt-3 ml-2 float-right btns"
            >
              FR
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => changeLanguage(langEN)}
              className="btn-sm mt-3 ml-2 float-right btns"
            >
              EN
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => changeLanguage(langSR)}
              className="btn-sm mt-3 ml-2 float-right btns"
            >
              SR
            </Button>
          </Col>
        </Row>
      </Container>
      <Header lang={language} />
      <Switch>
        <Route path="/" exact>
          <Pocetna lang={language} />
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
      </Switch>
      <Footer lang={language} />
    </>
  );
}

export default App;
