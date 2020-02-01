import { Carousel, Row } from "antd";
import React from "react";
import "./img/R-1.png";

import "./home.scss";

export const NRIHome = () => {
  return (
    <Row className="NRIHome">
      <Carousel autoplay dotPosition={"right"} effect="fade">
        <div>
          <img alt="reception-1" src={"./img/R-1.png"}></img>
        </div>
        <div>
          <img alt="reception-2" src={"../../../public/img/R-2.png"}></img>
        </div>
        <div>
          <img alt="Suit-1" src={"../../../public/img/S-1.jpg"}></img>
        </div>
        <div>
          <img alt="Delux-1" src={"../../../public/img/D-1.jpg"}></img>
        </div>
        <div>
          <img alt="Std-1" src={"../../../public/img/STD-1.jpg"}></img>
        </div>
      </Carousel>
    </Row>
  );
};
