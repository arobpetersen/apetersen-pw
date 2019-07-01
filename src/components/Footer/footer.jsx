import React from "react";
import './footer.css'
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import react from './img/logo.svg';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="App-footer">
                <a
                    href="https://github.com/arobpetersen"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={github} className="App-github-footer" alt="logo-github" />
                </a>
                <img src={react} className="App-logo-react" alt="logo-react" />
                <a
                    href="https://www.linkedin.com/in/andrew-petersen-1a4767188"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={linkedin} className="App-linkedin-footer" alt="logo-linkedin" />
                </a>
            </footer>
        );
    }
}