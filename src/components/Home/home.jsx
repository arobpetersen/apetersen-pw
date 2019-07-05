import React from 'react';
import './home.css';
//import { Header } from '../Header/header';
import { BuiltWith } from '../BuiltWith/builtwith.jsx';
import { Intro } from '../Intro/intro.jsx';
//import { NavBar } from '../NavBar/NavBar.jsx';
//import { Button } from '../EnterButton/enter-button.jsx';
import { Self } from '../SelfPicture/self.jsx';
import { Footer } from '../Footer/footer.jsx';

class Home extends React.Component {
    render() {
        return (
            <div id="home">
               <body>
                <Intro />
                <Self />
                <BuiltWith /> 
                <Footer />
                </body>
            </div>
        );
    }
}
export default Home;