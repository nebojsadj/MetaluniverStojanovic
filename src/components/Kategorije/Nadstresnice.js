import React from "react";
import img1 from "../../pict/nadstresnice/1.jpg";
import img2 from "../../pict/nadstresnice/2.jpg";
import img3 from "../../pict/nadstresnice/3.jpg";
import img4 from "../../pict/nadstresnice/4.jpg";
import img5 from "../../pict/nadstresnice/5.jpg";
import img6 from "../../pict/nadstresnice/6.jpg";
import img7 from "../../pict/nadstresnice/7.jpg";
import img8 from "../../pict/nadstresnice/8.jpg";
import img9 from "../../pict/nadstresnice/9.jpg";
import img10 from "../../pict/nadstresnice/10.jpg";
import img11 from "../../pict/nadstresnice/11.jpg";
import img12 from "../../pict/nadstresnice/12.jpg";

function Nadstresnice({ lang }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="text-center text-light">{lang.nadstresnice}</h3>
          <div className="row mt-4">
            <div className="col-6 mt-4">
              <img className="objFit" src={img1} alt="img1" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img2} alt="img2" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img3} alt="img3" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img4} alt="img4" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img5} alt="img5" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img6} alt="img6" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img7} alt="img7" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img8} alt="img8" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img9} alt="img9" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img10} alt="img10" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img11} alt="img11" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img12} alt="img12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nadstresnice;
