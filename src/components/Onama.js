import React from "react";
import { Row, Col, Accordion, Card, Button } from "react-bootstrap";

function Onama({ lang }) {
  const proizvodi = [
    lang.li_1,
    lang.li_2,
    lang.li_3,
    lang.li_4,
    lang.li_5,
    lang.li_6,
    lang.li_7,
    lang.li_8,
    lang.li_9,
    lang.li_10,
    lang.li_11,
    lang.li_12,
  ];
  return (
    <Row>
      <h3 className="text-center text-light">{lang.navOnama}</h3>
      <Col md={{ span: 8, offset: 2 }} xs={{ span: 12, offset: 0 }}>
        <p className="text-light">
          <span className="ml-5 text-light pSize"></span>
          <span className="ml-1 pSize">{lang.tekstOnama}</span>
        </p>
      </Col>
      <Col md={{ span: 8, offset: 2 }} xs={{ span: 12, offset: 0 }}>
        <Accordion>
          <Card>
            <Card.Header
              style={{ backgroundColor: "rgba(41, 71, 116, 0.863)" }}
            >
              <Accordion.Toggle
                as={Button}
                variant="dark"
                style={{ backgroundColor: "#292b2c" }}
                className="btnAccordion"
                eventKey="0"
                size="lg"
                block
              >
                {lang.oNama}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body
                style={{ backgroundColor: "rgba(41, 71, 116, 0.863)" }}
              >
                <ul className="list-group list-group-flush text-center">
                  {proizvodi.map((item) => (
                    <li className="list-group-item" key={item}>
                      <h5 className="m5">{item}</h5>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
      <h5 className="text-light text-center mt-4 m6">
        {lang.proizvodiPoZelji}
      </h5>
    </Row>
  );
}

export default Onama;
