import React from "react";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Header>Header</Header>

        <Content>Content</Content>

        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
