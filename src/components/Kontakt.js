import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaEnvelope, FaViber, FaInstagram } from "react-icons/fa";
import KontaktForma from "./KontaktForma";
import Mapa from "./Mapa";

function Kontakt({ lang }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            <div className="col-8 offset-2 text-light text-center">
              <h2>{lang.kontaktirajteNas}</h2>
              <h4 className="mt-4 text text-uppercase">{lang.odgovoriti}</h4>
              <hr />
              <ul className="list-group list-group-flush text-center mt-5 pSize">
                <li className="list-group-item bg">{lang._adresa}</li>
                <li className="list-group-item bg">
                  Mob: (+381) 064/24-87-845
                </li>
                <li className="list-group-item bg">{lang._tel}</li>
                <li className="list-group-item bg">{lang._email}</li>
              </ul>
            </div>
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
                  href="https://www.metaluniverstojanovic@gmail.com"
                  target="blanc"
                >
                  <FaEnvelope size="2.8em" color="white" />
                </a>
              </span>
            </div>
            <hr />
          </div>
          <div className="row mt-4">
            <Mapa />
          </div>
          <div className="row">
            <div className="col-8 offset-2 mt-5 text-light text-center">
              <h3 className="mt-3 text-uppercase">{lang.unikat}</h3>
              <h3 className=" text-uppercase mt-5">{lang._kontakt}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <KontaktForma lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
