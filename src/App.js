import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";

import MainMenu from "./components/MainMenu";
import Element from "./components/Element";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Header>
            <MainMenu />
          </Header>

          <Content>
            <Element />
          </Content>

          <Footer>Footer</Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
