import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Carousel } from "react-bootstrap";
import img1 from "../../pict/gelenderi/1.jpg";
import img2 from "../../pict/gelenderi/2.jpg";
import img3 from "../../pict/gelenderi/3.jpg";
import img4 from "../../pict/gelenderi/4.jpg";
import img5 from "../../pict/gelenderi/5.jpg";
import img6 from "../../pict/gelenderi/6.jpg";
import img7 from "../../pict/gelenderi/7.jpg";
import img8 from "../../pict/gelenderi/8.jpg";
import img9 from "../../pict/gelenderi/9.jpg";
import img10 from "../../pict/gelenderi/10.jpg";
import img11 from "../../pict/gelenderi/11.jpg";
import img12 from "../../pict/gelenderi/12.jpg";
import img13 from "../../pict/gelenderi/13.jpg";
import img14 from "../../pict/gelenderi/14.jpg";
import img15 from "../../pict/gelenderi/15.JPG";
import img16 from "../../pict/gelenderi/16.jpg";
import img17 from "../../pict/gelenderi/17.jpg";
import img18 from "../../pict/gelenderi/18.jpg";
import img19 from "../../pict/gelenderi/19.jpg";
import img20 from "../../pict/gelenderi/20.jpg";
import img21 from "../../pict/gelenderi/21.jpg";
import img22 from "../../pict/gelenderi/22.jpg";
import img23 from "../../pict/gelenderi/23.jpg";
import img24 from "../../pict/gelenderi/24.jpg";
import img25 from "../../pict/gelenderi/25.jpg";

function Gelenderi({ lang }) {
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
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
  ];

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="text-center text-light">{lang.gelenderi}</h3>
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

export default Gelenderi;
