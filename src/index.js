import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import Home from './components/Home/home.jsx';
import headlogo from './img/headlogo.png';
//import  {enterbutton}  from './components/enter-button.jsx';
import { BrowserRouter as Router, Route, BrowserRouter, Switch, Link } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div className="NavBar">
            <img src={headlogo} id="App-logo-header" alt="logo-header" />
            <ul className="header">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/App">App</Link></li>
            </ul>
            <div className="content">
                <Route path="/" exact component={Home} />
                <Route path="/App" component={App} />
            </div>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


