import React from "react";
import { Carousel } from "react-bootstrap";

function Zoom({ picture }) {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img alt="Colection" src={picture} />
          <Carousel.Caption className="color-red"></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Zoom;
