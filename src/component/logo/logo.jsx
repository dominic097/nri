import React from "react";
import { Row, Col, Icon } from "antd";
import logoSVG from "./logoSVG";

import "./logo.scss";

export const NRILogo = () => {
  return (
    <Row type="flex" justify="start" align="middle">
      <Col span={12}>
        <Icon
          className="logoAntIcon"
          width={32}
          height={32}
          component={logoSVG}
        ></Icon>
        <span className="logo-title">New Royal Inn</span>
      </Col>
    </Row>
  );
};
