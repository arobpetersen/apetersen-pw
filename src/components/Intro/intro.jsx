import React from 'react';
import './intro.css';
import TextLoop from 'react-text-loop';

export class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <h1 id="welcome">Welcome!</h1>
                <div className="body">
                    <h2 id="name">My name is <h2 id="ap">Andrew Petersen</h2><br /><br />and I am a&nbsp;
                        <TextLoop interval={2000} className="textscroll" springConfig={{ stiffness: 30, damping: 10 }}>
                            <span>Software Engineer.</span>
                            <span>Climber.</span>
                            <span>Gamer.</span>
                            <span>Creator.</span>
                            <span>Outdoorsman.</span>
                            <span>Leader.</span>
                        </TextLoop></h2>
                    <p className="para">
                        I am currently attending and will be graduating from the University of Cincinnati
                        in the Spring of 2020 with a degree in Software Engineering. I grew up in Cleveland, OH
                        but have recently moved to Phoenix, AZ. I enjoy building dynamic webpages that optimize both 
                        functionality and an enhanced user experience. 
                    </p>
                </div>
            </div>
        );
    }
}