import React, { useState, useRef } from "react";
import { Col } from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { FaEnvelope, FaViber, FaInstagram } from "react-icons/fa";
import { Overlay, Tooltip } from "react-bootstrap";

function KontaktIconice() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <Col
      md={{ span: 10, offset: 1 }}
      xs={{ span: 12, offset: 0 }}
      className="text-light text-center mt-4"
    >
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
  );
}

export default KontaktIconice;
