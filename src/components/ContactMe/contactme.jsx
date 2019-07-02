import React from 'react';
import './contactme.css';
import github from './img/github.png';
import email from './img/email.png';
import linkedin from './img/linkedin.png';

export class ContactMe extends React.Component {
    render() {
        return (
            <div className="contactme">
                <h3>Contact Me: </h3>
                <a
                    href="https://github.com/arobpetersen"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={github} className="contact-github" alt="Github" />
                </a>
                <img src={email} className="contact-email" alt="Email" />
                <a
                    href="https://www.linkedin.com/in/andrew-petersen-1a4767188"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={linkedin} className="contact-linkedin" alt="Linkedin" />
                </a>
            </div>
        );

    }
}