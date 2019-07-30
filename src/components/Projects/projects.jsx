import React from 'react';
import './projects.css';

//Images
import dripdrop from './img/dripdrop.PNG';

export class Projects extends React.Component {
    render() {
        return (
            <div className="projectsContainer">
                <h1>Projects</h1>
                <div className="projects">
                    <img src={dripdrop} id="dripdrop" alt="dripdrop" title="DripDrop" />
                </div>
            </div>
        );
    }
}