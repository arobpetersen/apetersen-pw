import React from 'react';
import './devexperience.css';
import react from './imgdev/react.png';
import javascript from './imgdev/javascript.png';
import html from './imgdev/html.png';
import css from './imgdev/css.png';
import angular from './imgdev/angular.svg';
import csharp from './imgdev/csharp.png';
import java from './imgdev/java.png';
import sql from './imgdev/sql.png';
import node from './imgdev/node.png';
import spring from './imgdev/spring.png';
import kotlin from './imgdev/kotlin.png';

export class DevExperience extends React.Component {
    render() {
        return (
            <div className="devxp">
                <h1>Dev Experience</h1>
                <div className="language">
                    <img src={react} id="react" alt="React" title="React" />
                    <img src={javascript} id="js" alt="JavaScript" title="JavaScript" />
                    <img src={html} id="html" alt="HTML" title="HTML" />
                    <img src={css} id="css" alt="CSS" title="CSS" />
                    <img src={angular} id="angular" alt="AngularJS" title="AngularJS" />
                    <img src={csharp} id="csharp" alt="C#" title="C#" />
                    <img src={java} id="java" alt="Java" title="Java" />
                    <img src={sql} id="sql" alt="SQL" title="SQL" />
                    <img src={node} id="node" alt="NodeJS" title="NodeJS" />
                    <img src={spring} id="spring" alt="Spring Boot" title="Spring Boot" />
                    <img src={kotlin} id="spring" alt="Kotlin" title="Kotlin" />
                </div>
            </div >
        );
    }
} 