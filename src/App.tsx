import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./App.css";
import React from "react";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div>hello typed react world</div>
    </React.Fragment>
  );
}

export default App;
