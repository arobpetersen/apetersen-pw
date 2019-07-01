import React from 'react';
import './NavBar.css';

export class NavBar extends React.Component {
  render() {
    return (
      <header className='headerButtons'>
        <ul>
          <li className='navlinks'><a>Introduction</a></li>
          <li className='navlinks'><a>Interests</a></li>
          <li className='navlinks'><a>Experience</a></li>
          <li className='navlinks'><a>Education</a></li>
          <li className='navlinks'><a>Contact</a></li>
        </ul>
      </header>
    )
  }
}
