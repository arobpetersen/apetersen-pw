import React from 'react';
import './contactapp.css';
import { ContactMe } from '../ContactMe/contactme.jsx';

class ContactApp extends React.Component {
    render() {
        return (
            <body id="body">
            <div className="contact-app">
                <ContactMe />
            </div>
            </body>
        );
    }
}

export default ContactApp;