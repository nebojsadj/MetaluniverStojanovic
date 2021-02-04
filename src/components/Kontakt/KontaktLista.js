import React from "react";
import { Col } from "react-bootstrap";

function KontaktLista({ lang }) {
  const lista = [lang._adresa, lang._mob, lang._tel, lang._email];
  return (
    <Col
      md={{ span: 8, offset: 2 }}
      xs={{ span: 12, offset: 0 }}
      className="text-light text-center m1"
    >
      <h3 className="m2">{lang.kontaktirajteNas}</h3>
      <h5 className="mt-4 text text-uppercase m5">{lang.odgovoriti}</h5>
      <hr />
      <ul className="list-group list-group-flush text-center mt-5 pSize">
        {lista.map((item) => (
          <li className="list-group-item bg" key={item}>
            <h5 className="m8">{item}</h5>
          </li>
        ))}
      </ul>
    </Col>
  );
}

export default KontaktLista;
