import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Carousel } from "react-bootstrap";
import img1 from "../../pict/nadstresnice/1.jpg";
import img2 from "../../pict/nadstresnice/2.jpg";
import img3 from "../../pict/nadstresnice/3.jpg";
import img4 from "../../pict/nadstresnice/4.jpg";
import img5 from "../../pict/nadstresnice/5.jpg";
import img6 from "../../pict/nadstresnice/6.jpg";
import img7 from "../../pict/nadstresnice/7.jpg";
import img8 from "../../pict/nadstresnice/8.jpg";
import img9 from "../../pict/nadstresnice/9.jpg";
import img10 from "../../pict/nadstresnice/10.jpg";
import img11 from "../../pict/nadstresnice/11.jpg";
import img12 from "../../pict/nadstresnice/12.jpg";

function Nadstresnice({ lang }) {
  const [lgShow, setLgShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imgs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
          <h3 className="text-center text-light m12">{lang.nadstresnice}</h3>
          <Row className="mt-4">
            {imgs.map((el, i) => (
              <Col md={{ span: 6 }} className="mt-4" key={i}>
                <Image
                  onClick={() => {
                    setLgShow(true);
                    setIndex(i);
                  }}
                  className="objFit kontaktIkonice"
                  src={el}
                  alt={el}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-xl"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          touch={true}
          fade={true}
          prevIcon={
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon carouselControl"
            />
          }
          nextIcon={
            <span
              aria-hidden="true"
              className="carousel-control-next-icon carouselControl"
            />
          }
        >
          {imgs.map((el) => (
            <Carousel.Item key={el}>
              <Container>
                <Row>
                  <Col>
                    <Image
                      className="d-block w-100 carModal"
                      src={el}
                      alt={el}
                    />
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal>
    </Container>
  );
}

export default Nadstresnice;
