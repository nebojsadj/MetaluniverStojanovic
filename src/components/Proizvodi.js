import React from "react";
import { Link } from "react-router-dom";
import kapije from "../pict/naslovne/3.jpg";
import vrata from "../pict/naslovne/2.png";
import navozi from "../pict/naslovne/1.png";
import stepenista from "../pict/naslovne/12.jpg";
import nadstresnice from "../pict/naslovne/10.jpg";
import gelenderi from "../pict/naslovne/6.jpg";
import hale from "../pict/naslovne/13.jpg";
import resetke from "../pict/naslovne/7.png";
import kVrata from "../pict/naslovne/5.jpg";
import galanterija from "../pict/naslovne/9.jpg";
import dProgram from "../pict/naslovne/11.jpg";
import palete from "../pict/naslovne/4.jpg";
import sahte from "../pict/naslovne/8.jpg";
import boksevi from "../pict/naslovne/14.jpg";

function Proizvodi({ lang }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h2 className="text-center text-light m1">{lang.kategorije}</h2>
          <div className="row mt-4">
            <Link to="/ogradeIkapije" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">{lang.ogradeKapije}</h4>
              <img className="objFit" src={kapije} alt="kapije" />
            </Link>
            <Link to="/garaznaVrata" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">
                {lang.garaznaVrata}{" "}
              </h4>
              <img className="objFit" src={vrata} alt="vrata" />
            </Link>
            <Link to="/stepenista" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">{lang.stepenista}</h4>
              <img className="objFit" src={stepenista} alt="stepenista" />
            </Link>
            <Link to="/nadstresnice" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">{lang.nadstresnice}</h4>
              <img className="objFit" src={nadstresnice} alt="nadstresnice" />
            </Link>
            <Link to="/gelenderi" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">{lang.gelenderi}</h4>
              <img className="objFit" src={gelenderi} alt="gelenderi" />
            </Link>
            <Link to="/hale" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">{lang.hale}</h4>
              <img className="objFit" src={hale} alt="hale" />
            </Link>
            <Link to="/zastitneResetke" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">
                {lang.zastitneResetke}
              </h4>
              <img className="objFit" src={resetke} alt="zastitneResetke" />
            </Link>
            <Link to="/visecaKliznaVrata" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">
                {lang.visecaKliznaVrata}
              </h4>
              <img className="objFit" src={kVrata} alt="vrata" />
            </Link>
            <Link to="/galanterija" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">{lang.galanterija}</h4>
              <img className="objFit" src={galanterija} alt="galanterija" />
            </Link>
            <Link to="/decijiProgram" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">
                {lang.decijiProgram}
              </h4>
              <img className="objFit" src={dProgram} alt="decijiProgram" />
            </Link>
            <Link to="/palete" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">{lang.palete}</h4>
              <img className="objFit" src={palete} alt="paleteZaTransport" />
            </Link>
            <Link to="/navoziRampe" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">{lang.navoziRampe}</h4>
              <img className="objFit" src={navozi} alt="navoziRampe" />
            </Link>
            <Link to="/sahte" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">{lang.sahte}</h4>
              <img className="objFit" src={sahte} alt="sahte" />
            </Link>
            <Link to="/bokseviZaPse" className="col-6 mt-4 hover prLink">
              <h4 className="text-light text-center m9">{lang.boksevi}</h4>
              <img className="objFit" src={boksevi} alt="boksevi" />
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-3">
          <Link
            to="/kontakt"
            className="btn btn-dark mt-4 form-control kontHov"
          >
            <h5 className="kontaktBtn">{lang.kontaktirajteNas}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Proizvodi;
