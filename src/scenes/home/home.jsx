import { Carousel, Row, Col } from "antd";
import React from "react";
import R1 from "./img/R-1.png";
import R2 from "./img/R-2.png";
import S1 from "./img/S-1.jpg";
import D1 from "./img/D-1.jpg";
import STD1 from "./img/STD-1.jpg";

import "./home.scss";

export const NRIHome = () => {
  return (
    <Row type="flex" justify="center" className="NRIHome">
      <Col xs={24} sm={24} lg={24}>
        <Carousel
          autoplay
          swipeToSlide={true}
          dotPosition={"right"}
          effect="fade"
        >
          <div>
            <img className="carouselImg" alt="reception-1" src={R1}></img>
          </div>
          <div>
            <img className="carouselImg" alt="reception-2" src={R2}></img>
          </div>
          <div>
            <img className="carouselImg" alt="Suit-1" src={S1}></img>
          </div>
          <div>
            <img className="carouselImg" alt="Delux-1" src={D1}></img>
          </div>
          <div>
            <img className="carouselImg" alt="Std-1" src={STD1}></img>
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};
