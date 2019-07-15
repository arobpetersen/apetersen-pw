import React from 'react';
import './education.css';
import uc from './img/uc.png';

export class Education extends React.Component {
    render() {
        return (
            <div className="education">
                <h1>Education</h1>
                <div className="edbody">
                <h2>University of Cincinnati</h2>
                <h3>Bachelor of Science, Information Technology (IT)</h3>
                <h3>Concentration: Software Engineering</h3>
                </div>
            </div>
        );
    }
}