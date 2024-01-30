import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './App.css';
import React from 'react';
import Layout from './containers/Layout';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */

  body {
  margin: 0;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 20px;
  font-weight: 500;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  header {
    font-family: Inter;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

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
