import React from "react";
import img1 from "../../pict/navoziRampe/1.png";
import img2 from "../../pict/navoziRampe/2.png";
import img3 from "../../pict/navoziRampe/3.png";
import img4 from "../../pict/navoziRampe/4.png";
import img5 from "../../pict/navoziRampe/5.png";
import img6 from "../../pict/navoziRampe/6.JPG";
import img7 from "../../pict/navoziRampe/7.JPG";
import img8 from "../../pict/navoziRampe/8.JPG";
import img9 from "../../pict/navoziRampe/9.png";

function Rampe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="text-center text-light">Navozi i rampe</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rampe;
