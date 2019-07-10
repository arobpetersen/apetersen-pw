import React from 'react';
import './home.scss';
import { BuiltWith } from '../BuiltWith/builtwith.jsx';
import { Intro } from '../Intro/intro.jsx';
import { Self } from '../SelfPicture/self.jsx';

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <Intro />
                <BuiltWith />
                <Self />
            </div>
        );
    }
}
export default Home;