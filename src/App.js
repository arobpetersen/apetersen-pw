import React from 'react';
import logo from './img/logo.svg';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Andrew  Petersen ReactJS App</h1>
      </header>
      <body>
        <p>Lex is my sexy hoe</p>
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
        <img src={linkedin} className="App-linkedin-footer" alt="logo-linkedin"/>
        </a>
        </footer>
    </div>
  );
}

export default App;
