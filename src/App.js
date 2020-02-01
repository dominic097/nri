import { Layout } from "antd";
import React from "react";
import "./App.scss";
import { AppHeader } from "./component";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <AppHeader></AppHeader>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
