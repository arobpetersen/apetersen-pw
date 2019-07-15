import React from 'react';
import './workexperience.css';
import accenture from './img/accenture.png';
import honeywell from './img/honeywell.png';

export class WorkExperience extends React.Component {
    render() {
        return (
            <div className="workexperience">
                <h1>Work Experience</h1>
                <div className="xp">
                    <div className="accenture">
                        <img src={accenture} id="accentureid" alt="accenture" title="Accenture" />
                        <h3>Advanced App Engineering Analyst (6/19 - 8/19)</h3>
                        <p>
                            <ul>
                                <li>Using Agile methodoligies and LeanXP (Paired Programming and TDD), devlop applicatons
                                to solve the problem presented by the client</li>
                            </ul>
                        </p>
                    </div>
                    <div className="honeywell">
                        <img src={honeywell} id="honeywellid" alt="honeywell" title="Intelligrated Honeywell" />
                        <h3>Software Engineering | Application Development & Service Pro Team | Remote (9/18 - 1/19)</h3>
                        <p>
                            <ul>
                                <li>Continue responsibilities as defined when working Onsite for Honeywell-Intelligrated</li>
                                <li>Monitor Service Pro Application for employee issues and forward it to relevant party or perform the fix myself</li>
                                <li>Create and Update documentation for defining and correcting Application setup and common employee issues to the new Honeywell standard</li>
                            </ul>
                            <h3>Software Engineering | Application Development Team | Onsite (8/17 - 8/18)</h3>
                            <ul>
                                <li>Perform Quality Assurance for new and updated systems and record findings in SharePoint</li>
                                <li>Correct the logical errors found within Oracle Configurator and the Development Codebase</li>
                                <li>Write system rules for new products as outlined by the Business Team</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}