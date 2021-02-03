import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import img1 from "../pict/slajder/3.jpg";
import img2 from "../pict/slajder/1.jpg";
import img3 from "../pict/slajder/10.jpg";
import { Carousel } from "react-bootstrap";

function Pocetna({ lang }) {
  return (
    <Container>
      <h1 className="text-center mt-4 text-light mNsl">
        Metaluniver Stojanovic
      </h1>
      <Row>
        <Col>
          <h2 className="text-center text-light m1">{lang.podnaslov}</h2>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 12, offset: 0 }}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <Image className="d-block w-100 carImg" src={img1} alt="kapije" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <Image
                className="d-block w-100 carImg"
                src={img3}
                alt="rukohvati"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image className="d-block w-100 carImg" src={img2} alt="hale" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Pocetna;
