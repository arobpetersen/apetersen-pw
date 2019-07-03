import React from "react";
import './enter-button.css';
import { BrowserRouter as Router, BrowserRouter, Link } from "react-router-dom";

export class Button extends React.Component {
    render() {
        return (
            <Router>
                <Link to="/App" className="link">
                    Click To Enter
                </Link>
            </Router>
        );
    }
}
export default Button;