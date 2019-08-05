import React from 'react';
import './home.css';

//Packages
import Particles from 'react-particles-js';

//Components
import { BuiltWith } from '../BuiltWith/builtwith.jsx';
import { Intro } from '../Intro/intro.jsx';
import { Self } from '../SelfPicture/self.jsx';

const particlesOpt = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 10,
            "random": true
        },
        "move": {
            "direction": "bottom",
            "out_mode": "out"
        },
        "line_linked": {
            "enable": false
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "remove"
            }
        },
        "modes": {
            "remove": {
                "particles_nb": 10
            }
        }
    }
}

let particleStyle = {
	position: 'fixed',
	top: 100,
	zIndex: -2
}

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="row">
                    <Intro />
                    <Self />
                </div>
                <BuiltWith />
                <Particles
                    params={particlesOpt} 
                    style={particleStyle}/>
            </div>
        );
    }
}

export default Home;