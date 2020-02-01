import { Layout } from "antd";
import React from "react";
import "./App.scss";
import { AppHeader } from "./component";
import AppRoutes from "./AppRoutes";
import { withRouter } from "react-router-dom";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <AppHeader></AppHeader>
        </Header>
        <Content>{AppRoutes}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default withRouter(App);
