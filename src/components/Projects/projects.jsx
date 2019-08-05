import React from 'react';
import './projects.css';

//Images
import dripdrop from './img/dripdrop.PNG';
import github from './img/github.png';

export class Projects extends React.Component {
    render() {
        return (
            <div className="projectsContainer">
                <h1>Projects</h1>
                <div className="projects">
                    <img src={dripdrop} id="dripdrop" alt="dripdrop" title="DripDrop" />
                    <a
                        href="https://github.com/arobpetersen/DripDrop"
                        target="_blank"
                        title="DripDrop Repository"
                        rel="noopener noreferrer">
                        <img src={github} className="projects-github" alt="Github" />
                    </a>
                    <div className="projects-body">
                        <h2>DripDrop</h2>
                    </div>
                </div>
            </div>
        );
    }
}