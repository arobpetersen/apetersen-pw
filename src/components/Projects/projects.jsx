import React from 'react';
import './projects.css';

//Images
import dripdrop from './img/dripdrop.PNG';
import github from './img/github.png';
import react from './img/logo.svg';
import ec2 from './img/ec2.svg';
import dynamodb from './img/dynamodb.svg';
import d3 from './img/d3.png';

export class Projects extends React.Component {
    render() {
        return (
            <div className="projectsContainer">
                <h1>Projects</h1>
                <div className="projects">
                    <div className="projects-body">
                        <img src={dripdrop} id="dripdrop" alt="dripdrop" title="DripDrop" />
                        <div className="rowOne">
                            <div className="head">
                            <h2>DripDrop</h2>
                            <a
                            href="https://github.com/arobpetersen/DripDrop"
                            target="_blank"
                            title="DripDrop Repository"
                            rel="noopener noreferrer">
                            <img src={github} className="projects-github" alt="Github" />
                        </a>
                        </div>
                            <ul>
                                <li>
                                    This project was created for and won the Accenture Summer Analyst
                                    Hackathon where all Technology Summer Analysts from across the country
                                    competed.
                            </li>
                                <li>
                                    The theme of project was sustainibiity. So we created an application to track water
                                    usage and promote conservation.
                            </li>
                            </ul>
                            <h3>Project Theory</h3>
                            <p>Using an IoT sensor that is integrated into your water using devices, it will collect data which
                                is then imported into AWS DynamoDB. Then using an EC2 instance, a Time Series, and D3 we can display
                                usage analytics, preditive analytics for future usage, and tips for conservation based off usage habits.
                        </p>
                        </div>
                    </div>
                    <div className="icons">
                        <h3>Technology Used</h3>
                        <div className="techused">
                            <img src={react} className="react" alt="React" title="React" />
                            <img src={ec2} className="ec2" alt="Amazon EC2" title="Amazon EC2" />
                            <img src={dynamodb} className="techstack" alt="Amazon DynamoDB" title="Amazon DynamoDB" />
                            <img src={d3} className="techstack" alt="D3" title="D3" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}