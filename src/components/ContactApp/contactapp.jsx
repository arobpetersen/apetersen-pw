import React from 'react';
import './contactapp.css';
import { ContactMe } from '../ContactMe/contactme.jsx';

class ContactApp extends React.Component {
    render() {
        return (
            <div className="contact-app">
                <ContactMe />
            </div>
        );
    }
}
export default ContactApp;