import React from "react";
import './enter-button.css';

export class Button extends React.Component {
    render() {
        return  (
        <button id="button-enter" style={{ textDecoration: 'none', color: '#282c34' }}>
        Click To Enter
        </button>
        );
    }
}

export default Button;