import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaEnvelope, FaViber, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Onama({ lang }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2 mt-4">
          <h2 className="text-center text-light">Metaluniver Stojanovic</h2>
          <h4 className="text-center text-light">{lang.podnaslov}</h4>
          <h5 className="tel">(+381) 064/24-87-845</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 text-light text-center mt-4">
          <span className="kontaktIkonice">
            <a href="https://www.facebook.com/Metaluniver" target="blanc">
              <AiFillFacebook size="3em" color="white" />
            </a>
          </span>
          <span className="ml-3">
            <FaViber size="2.7em" color="white" />
          </span>
          <span className="kontaktIkonice ml-3">
            <a
              href="https://www.instagram.com/metaluniver_stojanovic"
              target="blanc"
            >
              <FaInstagram size="2.8em" color="white" />
            </a>
          </span>
          <span className="kontaktIkonice ml-3">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMScbVRMHWRzThKtZqRxgtgNNhSrNctkkxQDcwpFPtxPQPhhsvXKXpXTrcQJqmfwWrLVfsq"
              target="blanc"
            >
              <FaEnvelope size="2.8em" color="white" />
            </a>
          </span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-8 offset-2">
          <p className="text-light">
            <span className="ml-5 text-light pSize"></span>
            <span className="ml-1 pSize">{lang.tekstOnama}</span>
          </p>
          <ul className="list-group list-group-flush text-center">
            <li className="text-light list-group-item bg">
              <h4>{lang.li_1}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4>{lang.li_2}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4>{lang.li_3}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4>{lang.li_4}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4>{lang.li_5}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4>{lang.li_6}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4>{lang.li_7}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4>{lang.li_8}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4>{lang.li_9}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4>{lang.li_10}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4>{lang.li_11}</h4>
            </li>
            <li className="text-light list-group-item bg">
              <h4>{lang.li_12}</h4>
            </li>
          </ul>
          <h3 className="text-light text-center mt-4">
            {lang.proizvodiPoZelji}
          </h3>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-6 offset-3">
          <Link to="/kontakt" className="btn btn-dark mt-4 form-control">
            <h5>{lang.kontaktirajteNas}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Onama;
