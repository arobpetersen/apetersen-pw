import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import Home from './components/Home/home.jsx';
import ContactApp from './components/ContactApp/contactapp.jsx'
import headlogo from './img/headlogo.png';
//import  {enterbutton}  from './components/enter-button.jsx';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div className="NavBar">
            <ul className="header">
                <li><NavLink to="/ContactApp" activeStyle={{
                    backgroundColor: "gray"
                }}>
                    Contact Me</NavLink></li>
                <li><NavLink to="/App" activeStyle={{
                    backgroundColor: "gray"
                }}>
                    More Info</NavLink></li>
                <li><NavLink exact to="/" activeStyle={{
                    backgroundColor: "gray"
                }}>
                    Home</NavLink></li>
                <img src={headlogo} id="App-logo-header" alt="logo-header" />
            </ul>
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/App" component={App}/>
                <Route path="/ContactApp" component={ContactApp} />
            </div>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


