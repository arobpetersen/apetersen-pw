import React from 'react';
import './NavBar.css';

export class NavBar extends React.Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className='navlinks'><a href="index.js">Introduction</a></li>
          <li className='navlinks'>Interests</li>
          <li className='navlinks'>Experience</li>
          <li className='navlinks'>Education</li>
          <li className='navlinks'>Contact</li>
        </ul>
      </header>
    )
  }
}
