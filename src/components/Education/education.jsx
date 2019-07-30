import React from 'react';
import './education.css';
import uc from './img/uc.png';

export class Education extends React.Component {
    render() {
        return (
            <div className="education">
                <h1>Education</h1>
                <div className="edContainer">
                    <div id="ed">
                        <img src={uc} id="uc" alt="University of Cincinnati" title="University of Cincinnati" />
                        <h3>Bachelor of Science, Information Technology (IT)</h3>
                        <h3 id="concentration">Concentration: Software Engineering</h3>
                    </div>
                </div>
            </div>
        );
    }
}