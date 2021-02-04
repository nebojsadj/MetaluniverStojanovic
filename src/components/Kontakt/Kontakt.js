import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import KontaktForma from "./KontaktForma";
import Mapa from "../Mapa";
import KontaktIconice from "./KontaktIconice";
import KontaktLista from "./KontaktLista";

function Kontakt({ lang }) {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 12, offset: 0 }}>
          <Row>
            <KontaktLista lang={lang} />
            <KontaktIconice />
          </Row>
          <Row>
            <Mapa />
          </Row>
          <Row>
            <Col
              md={{ span: 8, offset: 2 }}
              xs={{ span: 12, offset: 0 }}
              className="mt-5 text-light text-center"
            >
              <h5 className="mt-3 text-uppercase m5">{lang.unikat}</h5>
              <h5 className=" text-uppercase mt-5 m5">{lang._kontakt}</h5>
              <hr />
            </Col>
          </Row>
          <Row>
            <KontaktForma lang={lang} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Kontakt;
