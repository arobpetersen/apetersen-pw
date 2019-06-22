import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <button id="button-enter">
                <Link to="/app" style={{ textDecoration: 'none', color: '#282c34' }}>Click to Enter</Link>
            </button>
            <Route path="/app" component={App} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();