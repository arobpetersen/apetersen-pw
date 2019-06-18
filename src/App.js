import React from 'react';
import logo from './img/logo.svg';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </header>
      <body>
        <p>How is the Header Designed?</p>
      </body>
      <footer className="App-footer">
        <img src={github} className="App-github-footer" alt="logo-github" />
        <img src={logo} className="App-logo-footer" alt="logo-react" />
        <img src={linkedin} className="App-linkedin-footer" alt="logo-linkedin"/>
        </footer>
    </div>
  );
}

export default App;
