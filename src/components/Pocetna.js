import React from "react";
import img1 from "../pict/slajder/3.jpg";
import img2 from "../pict/slajder/1.jpg";
import img3 from "../pict/slajder/10.jpg";
import { Carousel } from "react-bootstrap";

function Pocetna({ lang }) {
  return (
    <div className="container-fluid mt-4">
      <h1 className="text-center text-light">Metaluniver Stojanovic</h1>
      <div className="row">
        <div className="col-10 offset-1">
          <h2 className="text-center text-light m1">{lang.podnaslov}</h2>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-10 offset-1">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={img1} alt="kapije" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={img3} alt="rukohvati" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="hale" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Pocetna;
