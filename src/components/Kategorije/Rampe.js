import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Carousel } from "react-bootstrap";
import img1 from "../../pict/navoziRampe/1.png";
import img2 from "../../pict/navoziRampe/2.png";
import img3 from "../../pict/navoziRampe/3.png";
import img4 from "../../pict/navoziRampe/4.png";
import img5 from "../../pict/navoziRampe/5.png";
import img6 from "../../pict/navoziRampe/6.JPG";
import img7 from "../../pict/navoziRampe/7.JPG";
import img8 from "../../pict/navoziRampe/8.JPG";
import img9 from "../../pict/navoziRampe/9.png";

function Rampe({ lang }) {
  const [lgShow, setLgShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="text-center text-light">{lang.navoziRampe}</h3>
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

export default Rampe;
