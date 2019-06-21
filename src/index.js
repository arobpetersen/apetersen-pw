import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Ripple from "react-material-ripple";

const routing = (
    <Router>
        <div>
            <Ripple style={{borderRadius: '25px'}}>
            <button className="button-enter">
                <Link to="/app">Click to Enter</Link>
            </button>
            </Ripple>
            <Route path="/app" component={App} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
