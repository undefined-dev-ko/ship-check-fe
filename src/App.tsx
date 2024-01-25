import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./App.css";
import React from "react";
import Layout from "./containers/Layout";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout>content</Layout>
    </React.Fragment>
  );
}

export default App;
