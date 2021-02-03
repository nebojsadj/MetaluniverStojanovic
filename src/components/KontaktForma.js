import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Col, Container, Row } from "react-bootstrap";

function KontaktForma({ lang }) {
  const [valid, setValid] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = valid;
  const [check, setCheck] = useState("check");
  const [success, setSuccess] = useState("");

  const timeOut = () => {
    setTimeout(function () {
      setSuccess(lang.poslato);
    }, 500);

    setTimeout(function () {
      setSuccess("");
    }, 6000);
  };

  const onSubmit = () => {
    setCheck("");
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mqfd034",
        "template_3vi6y28",
        e.target,
        "user_314rORGVVhuPBe01Kdt4J"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    timeOut();
  }

  return (
    <Container className="mb-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
          <form className="contact-form" onSubmit={sendEmail}>
            <input
              autoComplete="off"
              onChange={(e) => setValid({ ...valid, name: e.target.value })}
              className={
                (name === check && "form-control red") || "form-control"
              }
              type="text"
              name="name"
              placeholder={lang.vaseIme}
              required
            />
            <br />
            <input
              autoComplete="off"
              onChange={(e) => setValid({ ...valid, email: e.target.value })}
              className={
                (email === check && "form-control red") || "form-control"
              }
              type="email"
              name="email"
              placeholder={lang.vasEmail}
              required
            />
            <br />
            <textarea
              onChange={(e) => setValid({ ...valid, message: e.target.value })}
              className={
                (message === check && "form-control red") || "form-control"
              }
              type="mesage"
              name="message"
              placeholder={lang.vasaPoruka}
              required
            />
            <br />
            <input
              onClick={onSubmit}
              className="btn btn-dark form-control"
              value={lang.posaljite}
              type="submit"
            />
            <br />
          </form>
          <h3 className="text-white text-center mt-3">{success}</h3>
        </Col>
      </Row>
    </Container>
  );
}
export default KontaktForma;
