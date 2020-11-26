import React from "react";
import img1 from "../../pict/visecaKliznaVrata/1.jpg";
import img2 from "../../pict/visecaKliznaVrata/2.jpg";
import img3 from "../../pict/visecaKliznaVrata/3.jpg";
import img4 from "../../pict/visecaKliznaVrata/4.jpg";
import img5 from "../../pict/visecaKliznaVrata/5.png";
import img6 from "../../pict/visecaKliznaVrata/6.jpg";
import img7 from "../../pict/visecaKliznaVrata/7.jpg";
import img8 from "../../pict/visecaKliznaVrata/8.jpg";

function VisecaKliznaVrata({ lang }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="text-center text-light">{lang.visecaKliznaVrata}</h3>
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

export default VisecaKliznaVrata;
