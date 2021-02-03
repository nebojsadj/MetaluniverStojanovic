import React, { useState, useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { FaEnvelope, FaViber, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Overlay, Tooltip } from "react-bootstrap";

function Onama({ lang }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <Container>
      <Row>
        <Col className="mt-4">
          <h2 className="text-center text-light m2">Metaluniver Stojanovic</h2>
          <h4 className="text-center text-light m3">{lang.podnaslov}</h4>
        </Col>
      </Row>
      <Row>
        <Col className="text-light text-center mt-4">
          <span className="kontaktIkonice">
            <a href="https://www.facebook.com/Metaluniver" target="blanc">
              <AiFillFacebook size="3em" color="white" className="m4" />
            </a>
          </span>
          <span
            className="kontaktIkonice ml-3"
            ref={target}
            onClick={() => setShow(!show)}
          >
            <FaViber size="2.7em" color="white" className="m4" />
            <Overlay target={target.current} show={show} placement="bottom">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  (+381) 64/24-87-845
                </Tooltip>
              )}
            </Overlay>
          </span>
          <span className="kontaktIkonice ml-3">
            <a
              href="https://www.instagram.com/metaluniver_stojanovic"
              target="blanc"
            >
              <FaInstagram size="2.8em" color="white" className="m4" />
            </a>
          </span>
          <span className="kontaktIkonice ml-3">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              target="blanc"
            >
              <FaEnvelope size="2.8em" color="white" className="m4" />
            </a>
          </span>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
          <p className="text-light">
            <span className="ml-5 text-light pSize"></span>
            <span className="ml-1 pSize">{lang.tekstOnama}</span>
          </p>
          <ul className="list-group list-group-flush text-center">
            <li className="text-light list-group-item bg">
              <h4 className="m5">{lang.li_1}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4 className="m5">{lang.li_2}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4 className="m5">{lang.li_3}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4 className="m5">{lang.li_4}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4 className="m5">{lang.li_5}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4 className="m5">{lang.li_6}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4 className="m5">{lang.li_7}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4 className="m5">{lang.li_8}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4 className="m5">{lang.li_9}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4 className="m5">{lang.li_10}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4 className="m5">{lang.li_11}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4 className="m5">{lang.li_12}</h4>
            </li>
          </ul>
          <h3 className="text-light text-center mt-4 m6">
            {lang.proizvodiPoZelji}
          </h3>
        </Col>
      </Row>
      <Row className="mb-5">
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

export default Onama;
