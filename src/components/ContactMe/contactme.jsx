import React from 'react';
import './contactme.css';
import github from './img/github.png';
import email from './img/email.png';
import linkedin from './img/linkedin.png';

export class ContactMe extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact Me: </h1>
                <div className="contactme">
                    <a
                        href="https://github.com/arobpetersen"
                        target="_blank"
                        title="GitHub"
                        rel="noopener noreferrer">
                        <img src={github} className="contact-github" alt="Github" />
                    </a>
                    <img src={email} className="contact-email" alt="Email" title="Email" />
                    <a
                        href="https://www.linkedin.com/in/andrew-petersen-1a4767188"
                        target="_blank"
                        title="Linkedin"
                        rel="noopener noreferrer">
                        <img src={linkedin} className="contact-linkedin" alt="Linkedin" />
                    </a>
                </div>
            </div>
        );
    }
}