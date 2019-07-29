import React from 'react';
import './builtwith.css';

//Images
import react from './img/logo.svg';
import reactrouter from './img/reactrouter.png';
import javascript from './img/javascript.png';
import html from './img/html.png';
import css from './img/css.png';

export class BuiltWith extends React.Component {
    render() {
        return (
            <div id="test">
                <div className="builtwith">
                    <h3>Built Using:</h3>
                    <div id="reactzoom">
                        <img src={react} className="builtwith-react" alt="React" title="React" />
                    </div>
                    <img src={reactrouter} className="builtwith-reactrouter" alt="React Router" title="React Router V4" />
                    <img src={javascript} className="builtwith-javascript" alt="JavaScript" title="JavaScript" />
                    <img src={html} className="builtwith-html" alt="HTML" title="HTML" />
                    <img src={css} className="builtwith-css" alt="CSS" title="CSS" />
                </div>
            </div >
        );
    }
} 