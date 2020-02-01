import { Menu, Icon } from "antd";
import React from "react";

import "./menu.scss";

const { SubMenu } = Menu;

export const NRIMenu = () => {
  return (
    <Menu
      //   onClick={this.handleClick}
      //   selectedKeys={[this.state.current]}
      theme={"dark"}
      mode="horizontal"
    >
      <Menu.Item key="call">
        <a
          className="menuItem"
          target="_blank"
          href="tel:+91-413-490-1028"
          rel="noopener noreferrer"
        >
          <Icon
            className="menuIcon"
            rotate={110}
            width={32}
            height={32}
            style={{ fontSize: "1.2em" }}
            type="phone"
          />
          Call now
        </a>
      </Menu.Item>
      <Menu.Item key="direction">
        <a
          className="menuItem"
          href="https://www.google.com/maps/dir//New+Royal+Inn/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a5366f7aa3ad1a7:0x88d1ec86c97e1a48!2m2!1d79.829185!2d11.940695999999999"
        >
          <Icon
            className="menuIcon"
            style={{ fontSize: "1.2em" }}
            width={32}
            height={32}
            type="compass"
          />
          Get directions
        </a>
      </Menu.Item>
      {/* */}
      {/* <Menu.Item key="app" disabled>
        <Icon type="appstore" />
        Navigation Two
      </Menu.Item>
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="setting" />
            Navigation Three - Submenu
          </span>
        }
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item> */}
    </Menu>
  );
};
