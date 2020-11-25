import React from "react";
import emailjs from "emailjs-com";

function KontaktForma({ lang }) {
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
  }

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <br />
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder={lang.vaseIme}
            />
            <br />
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder={lang.vasEmail}
              required
            />
            <br />
            <textarea
              className="form-control"
              name="message"
              placeholder={lang.vasaPoruka}
            />
            <br />
            <input
              className="btn btn-dark form-control"
              type="submit"
              value={lang.posaljite}
            />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
export default KontaktForma;
