import React from "react";
import img1 from "../../pict/paleteZaTransport/1.jpg";
import img2 from "../../pict/paleteZaTransport/2.png";
import img3 from "../../pict/paleteZaTransport/3.jpg";

function PaleteZaTransport() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="text-center text-light">Palete za transport</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaleteZaTransport;
