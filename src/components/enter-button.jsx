import React from "react";
import './enter-button.css';

export class Home extends React.Component {
    render() {
        return  (
        <button id="button-enter" style={{ textDecoration: 'none', color: '#282c34' }}>
        Click to Enter
        </button>
        );
            
        
    }
}

export default Home;