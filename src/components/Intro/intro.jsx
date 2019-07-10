import React from 'react';
import './intro.css';

export class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <h1 id="welcome">Welcome!</h1>
                <br />
                <div className="body">
                    <h2 id="name">My name is <h2 id="ap">Andrew Petersen</h2><br /><br/>and I am a Software Engineer.</h2><br /><br /><br />
                <p className="para">
                    I am currently attending and will be graduating from the University of Cincinnati
                    in the Spring of 2020 with a degree in Software Engineering. I grew up in Cleveland, OH 
                    but have recently moved to Phoenix, AZ.
                </p>
                </div>
            </div>
        );
    }
}