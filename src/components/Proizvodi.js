import React from "react";
import { Link } from "react-router-dom";
import kapije from "../pict/naslovne/3.jpg";
import vrata from "../pict/naslovne/2.png";
import navozi from "../pict/naslovne/1.png";
import stepenista from "../pict/naslovne/12.jpg";
import nadstresnice from "../pict/naslovne/10.jpg";
import gelenderi from "../pict/naslovne/6.jpg";
import hale from "../pict/naslovne/13.jpg";
import resetke from "../pict/naslovne/7.png";
import kVrata from "../pict/naslovne/5.jpg";
import galanterija from "../pict/naslovne/9.jpg";
import dProgram from "../pict/naslovne/11.jpg";
import palete from "../pict/naslovne/4.jpg";
import sahte from "../pict/naslovne/8.jpg";
import boksevi from "../pict/naslovne/14.jpg";
import { Col, Container, Row, Image } from "react-bootstrap";

function Proizvodi({ lang }) {
  const proizvodi = [
    { name: "/ogradeIkapije", lang: lang.ogradeKapije, img: kapije },
    { name: "/garaznaVrata", lang: lang.garaznaVrata, img: vrata },
    { name: "/stepenista", lang: lang.stepenista, img: stepenista },
    { name: "/nadstresnice", lang: lang.nadstresnice, img: nadstresnice },
    { name: "/gelenderi", lang: lang.gelenderi, img: gelenderi },
    { name: "/hale", lang: lang.hale, img: hale },
    { name: "/zastitneResetke", lang: lang.zastitneResetke, img: resetke },
    { name: "/visecaKliznaVrata", lang: lang.visecaKliznaVrata, img: kVrata },
    { name: "/galanterija", lang: lang.galanterija, img: galanterija },
    { name: "/decijiProgram", lang: lang.decijiProgram, img: dProgram },
    { name: "/palete", lang: lang.palete, img: palete },
    { name: "/navoziRampe", lang: lang.navoziRampe, img: navozi },
    { name: "/sahte", lang: lang.sahte, img: sahte },
    { name: "/bokseviZaPse", lang: lang.boksevi, img: boksevi },
  ];
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }} xs={{ span: 12 }}>
          <h3 className="text-center text-light m1">{lang.kategorije}</h3>
          <Row className="mt-4">
            {proizvodi.map((el) => (
              <Link
                to={el.name}
                className="col-6 mt-4 hover prLink"
                key={el.img}
              >
                <h4 className="text-light text-center m9">{el.lang}</h4>
                <Image className="objFit" src={el.img} alt={el.img} />
              </Link>
            ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }} xs={{ span: 6, offset: 3 }}>
          <Link
            to="/kontakt"
            className="btn btn-dark mt-4 form-control kontHov"
          >
            <h5 className="kontaktBtn">{lang.kontaktirajteNas}</h5>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Proizvodi;
