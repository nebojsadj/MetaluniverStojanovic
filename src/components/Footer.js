import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { FaEnvelope, FaViber, FaInstagram } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

function Footer({ lang }) {
  return (
    <Container fluid className="mt-4 bg-dark">
      <Row>
        <Col className="d-flex justify-content-center">
          <ul className="footer mt-2">
            <li className="mt-4">
              <FiPhoneCall size="1.4em" color="cornflowerblue" />
              <span className="ml-2 m7">(+381) 64/24-87-845</span>
            </li>
            <li className="mt-2">
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="blanc"
              >
                <FaEnvelope
                  className="social"
                  size="1.4em"
                  color="cornflowerblue"
                />
              </a>
              <span className="ml-2 m7">{lang.email}</span>
            </li>
            <li className="mt-2">
              <FaViber size="1.5em" color="cornflowerblue" />
              <span className="ml-2 m7">{lang.viber}</span>
            </li>
            <li className="mt-2">
              <a href="https://www.facebook.com/Metaluniver" target="blanc">
                <AiFillFacebook
                  className="social"
                  size="1.5em"
                  color="cornflowerblue"
                />
              </a>
              <span className="ml-2 m7">{lang.fejsbuk}</span>
            </li>
            <li className="mt-2">
              <a
                href="https://www.instagram.com/metaluniver_stojanovic"
                target="blanc"
              >
                <FaInstagram
                  className="social"
                  size="1.5em"
                  color="cornflowerblue"
                />
              </a>
              <span className="ml-2 m7">{lang.instagram}</span>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
          <hr />
          <p className="text-light copy m11">
            <span>&copy;</span> <span>{new Date().getFullYear()}</span>{" "}
            <span>Metaluniver Stojanovic</span>
          </p>
          <p className="text-light copy m11">
            Design and development by DjordjevicN
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
