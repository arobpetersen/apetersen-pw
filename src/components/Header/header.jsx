import React from "react";
import './header.css';
import headlogo from './img/headlogo.png';

export class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={headlogo} className="App-logo-header" alt="logo-header" />
      </header>
    );
  }
}