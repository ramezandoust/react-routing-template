import React from "react";
import { Layout } from "antd";

import MainMenu from "./components/MainMenu";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <MainMenu />
        </Header>

        <Content>Content</Content>

        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
