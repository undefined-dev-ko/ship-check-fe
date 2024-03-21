import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './App.css';
import React, { Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage';
import AuthGoogle from './pages/auth/google';
import AuthTest from './pages/auth/test';

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
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/auth/google" element={<AuthGoogle />} />
            <Route path="/auth/test" element={<AuthTest />} />
            <Route path="/*" element={<MainPage />} />
          </Routes>
        </Suspense>
      </Router>

      {/* {StartWithGoogleButton} */}
      {/* <button onClick={oauthSignIn}>hihihi</button> */}
    </React.Fragment>
  );
}

export default App;
