import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { FaEnvelope, FaViber, FaInstagram } from "react-icons/fa";

function Footer({ lang }) {
  return (
    <div className="container-fluid mt-4 bg-dark">
      <div className="row">
        <div className="footerLista">
          <ul className="footer">
            <li className="mt-4">
              <FiPhoneCall size="1.4em" color="cornflowerblue" />
              <span className="ml-2">(+381) 64/24-87-845</span>
            </li>
            <li className="mt-2">
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMScbVRMHWRzThKtZqRxgtgNNhSrNctkkxQDcwpFPtxPQPhhsvXKXpXTrcQJqmfwWrLVfsq"
                target="blanc"
              >
                <FaEnvelope
                  className="social"
                  size="1.4em"
                  color="cornflowerblue"
                />
              </a>
              <span className="ml-2">{lang.email}</span>
            </li>
            <li className="mt-2">
              <FaViber size="1.5em" color="cornflowerblue" />

              <span className="ml-2">{lang.viber}</span>
            </li>
            <li className="mt-2">
              <a href="https://www.facebook.com/Metaluniver" target="blanc">
                <AiFillFacebook
                  className="social"
                  size="1.5em"
                  color="cornflowerblue"
                />
              </a>
              <span className="ml-2">{lang.fejsbuk}</span>
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
              <span className="ml-2">{lang.instagram}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1">
          <hr />
          <p className="text-light copy">
            <span>&copy;</span> <span>{new Date().getFullYear()}</span>{" "}
            <span>Metaluniver Stojanovic</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
