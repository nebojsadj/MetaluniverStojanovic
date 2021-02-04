import React, { useState } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import img1 from "../../pict/decijiProgram/1.jpg";
import img2 from "../../pict/decijiProgram/2.jpg";
import img3 from "../../pict/decijiProgram/3.jpg";
import img4 from "../../pict/decijiProgram/4.jpg";
import img5 from "../../pict/decijiProgram/5.jpg";
import img6 from "../../pict/decijiProgram/6.jpg";
import img7 from "../../pict/decijiProgram/7.jpg";
import img8 from "../../pict/decijiProgram/8.jpg";

function DecijiProgram({ lang }) {
  const [lgShow, setLgShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
          <h3 className="text-center text-light m12">{lang.decijiProgram}</h3>
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

export default DecijiProgram;
