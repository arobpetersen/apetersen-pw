import React from 'react';
import './home.css';
import { Header } from '../Header/header';
import { BuiltWith } from '../BuiltWith/builtwith.jsx';
import { ContactMe } from '../ContactMe/contactme.jsx';
import { Intro } from '../Intro/intro.jsx';
import { Button } from '../EnterButton/enter-button.jsx';
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Header />
                <body>
                <Intro />
                <BuiltWith />
                <ContactMe />
                <Button />
                </body>
            </div>
        );
    }
}

export default Home;