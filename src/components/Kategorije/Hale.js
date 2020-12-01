import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Carousel } from "react-bootstrap";
import img1 from "../../pict/hale/1.jpg";
import img2 from "../../pict/hale/2.jpg";
import img3 from "../../pict/hale/3.jpg";
import img4 from "../../pict/hale/4.jpg";
import img5 from "../../pict/hale/5.jpg";
import img6 from "../../pict/hale/6.jpg";
import img7 from "../../pict/hale/7.jpg";
import img8 from "../../pict/hale/8.jpg";
import img9 from "../../pict/hale/9.jpg";
import img10 from "../../pict/hale/10.jpg";
import img11 from "../../pict/hale/11.jpg";
import img12 from "../../pict/hale/12.jpg";
import img13 from "../../pict/hale/13.jpg";
import img14 from "../../pict/hale/14.jpg";
import img15 from "../../pict/hale/15.jpg";
import img16 from "../../pict/hale/16.jpg";
import img17 from "../../pict/hale/17.jpg";
import img18 from "../../pict/hale/18.jpg";

function Hale({ lang }) {
  const [lgShow, setLgShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imgs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
  ];

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="text-center text-light">{lang.hale}</h3>
          <div className="row mt-4">
            {imgs.map((el, i) => (
              <div className="col-6 mt-4" key={i}>
                <img
                  onClick={() => {
                    setLgShow(true);
                    setIndex(i);
                  }}
                  className="objFit kontaktIkonice"
                  src={el}
                  alt={el}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-xl"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          touch={true}
          fade={true}
          prevIcon={
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon carouselControl"
            />
          }
          nextIcon={
            <span
              aria-hidden="true"
              className="carousel-control-next-icon carouselControl"
            />
          }
        >
          {imgs.map((el) => (
            <Carousel.Item key={el}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <img className="d-block w-100 carousel" src={el} alt={el} />
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
}

export default Hale;
