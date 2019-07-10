import React from 'react';
import './contactform.css';
import github from './img/github.png';
import email from './img/email.png';
import linkedin from './img/linkedin.png';
import phone from './img/phone.png';

export class ContactForm extends React.Component {
    render() {
        return (
            <div className="form">
                <h4 id="call">Call</h4>
                <h2 id="phonenumber">+1 (330) 631-8548</h2>
                <img src={phone} className="contact-phone" alt="Phone" />
                <h4 id="email">Email</h4>
                <address>
                    <a href="mailto:arobpetersen@gmail.com">
                        <img src={email} className="contact-email" alt="Email" title="Email" />
                    </a>
                </address>
                <h4 id="linkedin">LinkedIn</h4>
                <a
                    href="https://www.linkedin.com/in/andrew-petersen-1a4767188"
                    target="_blank"
                    title="Linkedin"
                    rel="noopener noreferrer">
                    <img src={linkedin} className="contact-linkedin" alt="Linkedin" />
                </a>
                <h4 id="github">Github</h4>
                <a
                    href="https://github.com/arobpetersen"
                    target="_blank"
                    title="GitHub"
                    rel="noopener noreferrer">
                    <img src={github} className="contact-github" alt="Github" />
                </a>
            </div>
        );
    }
}