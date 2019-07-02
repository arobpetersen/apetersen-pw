import React from 'react';
import './builtwith.css';
import react from './img/react.png';
import reactrouter from './img/reactrouter.png';
import javascript from './img/javascript.png';
import html from './img/html.png';
import css from './img/css.png';

export class BuiltWith extends React.Component{
    render() {
        return (
            <div className="builtwith">
                <h3>Built With:</h3>
                <img src={ react } className="builtwith-react" alt="React" title="React" />
                <img src={ reactrouter } className="builtwith-reactrouter" alt="React Router" title="React Router"/>
                <img src={ javascript} className="builtwith-javascript" alt="JavaScript" title="JavaScript"/>
                <img src={ html } className="builtwith-html" alt="HTML" title="HTML" />
                <img src={ css } className="builtwith-css" alt="CSS" title="CSS" />
            </div>
        );
    }
} 