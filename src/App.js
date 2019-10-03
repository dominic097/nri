import React from 'react';
import logo from './logo.svg';
import { Layout } from 'antd';

import './App.scss';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
        <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
     
    </div>
  );
}

export default App;
