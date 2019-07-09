import React from 'react';
import './contactapp.css';
//import { ContactMe } from '../ContactMe/contactme.jsx';
import { ContactForm } from '../ContactForm/contactform.jsx';

class ContactApp extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="contact-app">
                    <ContactForm />
                </div>
            </div>
        );
    }
}
export default ContactApp;