import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import Home from './components/Home/home.jsx';
import ContactApp from './components/ContactApp/contactapp.jsx'
import headlogo from './img/headlogo.png';
import { BrowserRouter as Router, Route, NavLink, Switch, BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <BrowserRouter basename={process.env.PUBLIC_URL}>>
        <div className="NavBar">
                <ul className="header">
                    <li><NavLink to="/ContactApp" activeStyle={{
                        backgroundColor: "gray"
                    }}>
                        Contact Me</NavLink></li>
                    <li><NavLink to="/App" activeStyle={{
                        backgroundColor: "#gray"
                    }}>
                        More Info</NavLink></li>
                    <li><NavLink exact to="/" activeStyle={{
                        backgroundColor: "gray"
                    }}>
                        Home</NavLink></li>
                </ul>
                <img src={headlogo} id="App-logo-header" alt="logo-header" />
                <div className="content">
                    <Route render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={350}
                                classNames="fade"
                            >
                                <Switch location={location}>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/App" component={App} />
                                    <Route path="/ContactApp" component={ContactApp} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                </div>
            </div>
        </BrowserRouter>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


