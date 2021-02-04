import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

function KontaktForma({ lang }) {
  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      emailjs
        .sendForm(
          "service_mqfd034",
          "template_3vi6y28",
          event.target,
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
      event.target.reset();
      setValidated(false);
      timeOut();
    }
  };

  const timeOut = () => {
    setTimeout(function () {
      setSuccess(lang.poslato);
    }, 500);

    setTimeout(function () {
      setSuccess("");
    }, 10000);
  };

  return (
    <Container className="mb-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }} xs={{ span: 12, offset: 0 }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Control
                  required
                  type="text"
                  name="name"
                  placeholder={lang.vaseIme}
                  autoComplete="off"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder={lang.vasEmail}
                  autoComplete="off"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field. Field must contain '@'.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder={lang.vasaPoruka}
                  name="message"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button className="btnForm" variant="dark" type="submit">
              {lang.posaljite}
            </Button>
          </Form>
          <h3 className="text-white text-center mt-3">{success}</h3>
        </Col>
      </Row>
    </Container>
  );
}
export default KontaktForma;
