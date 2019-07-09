import React from 'react';
import './home.css';
import { BuiltWith } from '../BuiltWith/builtwith.jsx';
import { Intro } from '../Intro/intro.jsx';
//import { Self } from '../SelfPicture/self.jsx';
//import { Footer } from '../Footer/footer.jsx';

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <Intro />
                <BuiltWith />
            </div>
        );
    }
}
export default Home;