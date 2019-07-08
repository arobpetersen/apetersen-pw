import React from 'react';
import './contactapp.css';
import { ContactMe } from '../ContactMe/contactme.jsx';

class ContactApp extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="contact-app">
                    <ContactMe />
                </div>
            </div>
        );
    }
}
export default ContactApp;