import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import Home from './components/Home/home.jsx';
import ContactApp from './components/ContactApp/contactapp.jsx'
import headlogo from './img/headlogo.png';
//import  {enterbutton}  from './components/enter-button.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div className="NavBar">
            <ul className="header">
                <li><Link to="/ContactApp">Contact Me</Link></li>
                <li><Link to="/App">More Info</Link></li>
                <li><Link to="/">Home</Link></li>
                <img src={headlogo} id="App-logo-header" alt="logo-header" />
            </ul>
            <div className="content">
                <Route path="/" exact component={Home} />
                <Route path="/App" component={App} />
                <Route path="/ContactMe" component={ContactApp} />
            </div>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


