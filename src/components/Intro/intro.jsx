import React from 'react';
import './intro.css';

export class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <h1>Welcome!</h1>
                <p>
                    My name is Andrew Petersen, and I am a Software Engineer.
                </p>
            </div>
        );
    }
}