import React from 'react';
import headlogo from '../images/headlogo.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import logo from '../images/logo.svg';
//import {enterbutton} from './components/enter-button.jsx'
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-align">
          <img src={headlogo} className="App-logo-header" alt="logo-header" />
          <h3 id="header-text">Andrew Petersen</h3>
        </div>
      </header>
      <body>
        <p>How is the Header Designed?</p>
      </body>
      <footer className="App-footer">
        <a
          href="https://github.com/arobpetersen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className="App-github-footer" alt="logo-github" />
        </a>

        <img src={logo} className="App-logo-footer" alt="logo-react" />

        <a
          href="https://www.linkedin.com/in/andrew-petersen-1a4767188"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} className="App-linkedin-footer" alt="logo-linkedin" />
        </a>
      </footer>
    </div>
  );
  }
}

export default App;
