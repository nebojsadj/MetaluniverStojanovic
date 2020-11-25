import React from "react";
import img1 from "../../pict/bokseviZaPse/1.jpg";
import img2 from "../../pict/bokseviZaPse/2.jpg";
import img3 from "../../pict/bokseviZaPse/3.jpg";
import img4 from "../../pict/bokseviZaPse/4.jpg";
import img5 from "../../pict/bokseviZaPse/5.jpg";
import img6 from "../../pict/bokseviZaPse/6.jpg";
import img7 from "../../pict/bokseviZaPse/7.jpg";
import img8 from "../../pict/bokseviZaPse/8.jpg";

function Boksevi() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="text-center text-light">Boksevi za pse</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boksevi;
