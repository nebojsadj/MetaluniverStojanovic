import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../pict/slajder/3.jpg";
import img2 from "../pict/slajder/1.jpg";
import img3 from "../pict/slajder/10.jpg";
import { Carousel } from "react-bootstrap";
import Onama from "./Onama";

function Pocetna({ lang }) {
  const carousel = [img1, img3, img2];
  return (
    <Container>
      <h2 className="text-center mt-4 text-light mNsl">
        Metaluniver Stojanovic
      </h2>
      <Row>
        <Col>
          <h4 className="text-center text-light m1">{lang.podnaslov}</h4>
        </Col>
      </Row>
      <Row className="mt-3 mb-4">
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 12, offset: 0 }}>
          <Carousel>
            {carousel.map((item) => (
              <Carousel.Item interval={1000} key={item + "sl"}>
                <Image className="d-block w-100 carImg" src={item} alt={item} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Onama lang={lang} />
      <Row className="mb-5">
        <Col md={{ span: 4, offset: 4 }} xs={{ span: 6, offset: 3 }}>
          <Link
            to="/proizvodi"
            className="btn btn-dark mt-4 form-control kontHov"
          >
            <h5 className="kontaktBtn">{lang.nasiProizvodi}</h5>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Pocetna;
