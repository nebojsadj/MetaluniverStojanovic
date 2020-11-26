import React from "react";
import img1 from "../../pict/stepenista/1.jpg";
import img2 from "../../pict/stepenista/2.png";
import img3 from "../../pict/stepenista/3.jpg";
import img4 from "../../pict/stepenista/4.png";
import img5 from "../../pict/stepenista/5.jpg";
import img6 from "../../pict/stepenista/6.jpg";
import img7 from "../../pict/stepenista/7.jpg";
import img8 from "../../pict/stepenista/8.png";
import img9 from "../../pict/stepenista/9.jpg";
import img10 from "../../pict/stepenista/10.jpg";
import img11 from "../../pict/stepenista/11.jpg";
import img12 from "../../pict/stepenista/12.jpg";
import img13 from "../../pict/stepenista/13.jpg";
import img14 from "../../pict/stepenista/14.png";
import img15 from "../../pict/stepenista/15.jpg";
import img16 from "../../pict/stepenista/16.png";
import img17 from "../../pict/stepenista/17.jpg";
import img18 from "../../pict/stepenista/18.jpg";
import img19 from "../../pict/stepenista/19.jpg";

function Stepenista({ lang }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="text-center text-light">{lang.stepenista}</h3>
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
            <div className="col-6 mt-4">
              <img className="objFit" src={img13} alt="img13" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img14} alt="img14" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img15} alt="img15" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img16} alt="img16" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img17} alt="img17" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img18} alt="img18" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img19} alt="img19" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepenista;
