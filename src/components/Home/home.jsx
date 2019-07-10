import React from 'react';
import './home.css';
import { BuiltWith } from '../BuiltWith/builtwith.jsx';
import { Intro } from '../Intro/intro.jsx';
//import { Self } from '../SelfPicture/self.jsx';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Intro />
                <BuiltWith />
            </div>
        );
    }
}
export default Home;