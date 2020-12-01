import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Carousel } from "react-bootstrap";
import img1 from "../../pict/visecaKliznaVrata/1.jpg";
import img2 from "../../pict/visecaKliznaVrata/2.jpg";
import img3 from "../../pict/visecaKliznaVrata/3.jpg";
import img4 from "../../pict/visecaKliznaVrata/4.jpg";
import img5 from "../../pict/visecaKliznaVrata/5.png";
import img6 from "../../pict/visecaKliznaVrata/6.jpg";
import img7 from "../../pict/visecaKliznaVrata/7.jpg";
import img8 from "../../pict/visecaKliznaVrata/8.jpg";

function VisecaKliznaVrata({ lang }) {
  const [lgShow, setLgShow] = useState(false);
  const [index, setIndex] = useState(0);
  const handleSelect = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
      setLgShow(false);
    }
    setIndex((index) => index + 1);
  };

  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="text-center text-light">{lang.visecaKliznaVrata}</h3>
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
          prevIcon={<span aria-hidden="false" />}
        >
          {imgs.map((el) => (
            <Carousel.Item key={el}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                }}
                className="objFit kontaktIkonice"
                src={el}
                alt={el}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
}

export default VisecaKliznaVrata;
