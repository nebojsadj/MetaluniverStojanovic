import React from "react";
import img1 from "../../pict/sahte/1.jpg";
import img2 from "../../pict/sahte/2.jpg";

function Sahte({ lang }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="text-center text-light">{lang.sahte}</h3>
          <div className="row mt-4">
            <div className="col-6 mt-4">
              <img className="objFit" src={img1} alt="img1" />
            </div>
            <div className="col-6 mt-4">
              <img className="objFit" src={img2} alt="img2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sahte;
