import React from "react";
import { Row, Col } from "antd";
import { NRILogo } from "../index";
import { NRIMenu } from "../menu/menu";

export const AppHeader = () => {
  return (
    <section className="app-header">
      <Row
        type="flex"
        style={{ "align-items": "center" }}
        justify="start"
        align="middle"
      >
        <Col xs={24} sm={24} md={10} lg={10}>
          <NRILogo></NRILogo>
        </Col>
        <Col xs={24} sm={24} md={14} lg={14}>
          <NRIMenu></NRIMenu>
        </Col>
      </Row>
    </section>
  );
};
