import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { FaEnvelope, FaViber, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer({ lang }) {
  return (
    <div className="container-fluid mt-4 bg-dark">
      <div className="row">
        <div className="footerLista">
          <ul className="footer">
            <li className="mt-4">
              <FiPhoneCall size="1.4em" color="cornflowerblue" />
              <span className="ml-2">+381-64/24-87-845</span>
            </li>
            <li className="mt-2">
              <Link to="/">
                <FaEnvelope size="1.4em" color="cornflowerblue" />
              </Link>
              <span className="ml-2">{lang.email}</span>
            </li>
            <li className="mt-2">
              <Link to="/">
                <FaViber size="1.5em" color="cornflowerblue" />
              </Link>
              <span className="ml-2">{lang.viber}</span>
            </li>
            <li className="mt-2">
              <Link to="/">
                <AiFillFacebook size="1.5em" color="cornflowerblue" />
              </Link>
              <span className="ml-2">{lang.fejsbuk}</span>
            </li>
            <li className="mt-2">
              <Link to="/">
                <FaInstagram size="1.5em" color="cornflowerblue" />
              </Link>
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
