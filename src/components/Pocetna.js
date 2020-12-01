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
          <h2 className="text-center text-light">{lang.podnaslov}</h2>
          {/* <h4 className="tel">(+381) 064/24-87-845</h4> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-10 offset-1">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={img1} alt="img1" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={img3} alt="img2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="img3" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Pocetna;
