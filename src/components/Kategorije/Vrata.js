import React from "react";
import img1 from "../../pict/garaznaVrata/1.png";
import img2 from "../../pict/garaznaVrata/2.png";
import img3 from "../../pict/garaznaVrata/3.jpg";
import img4 from "../../pict/garaznaVrata/4.jpg";
import img5 from "../../pict/garaznaVrata/5.png";
import img6 from "../../pict/garaznaVrata/6.png";

function Vrata() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="text-center text-light">Garazna vrata</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vrata;
