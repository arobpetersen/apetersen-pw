import React from 'react';
import './NavBar.css';
import App from '../App.jsx';
import Home from '../Home/home.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <div className="NavBar">
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
    );
  }
}
