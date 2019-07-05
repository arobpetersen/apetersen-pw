import React from 'react';
import './App.css';
//import { Header } from '../components/Header/header';
import { Footer } from './Footer/footer';
//import { NavBar } from '../components/NavBar/NavBar';
import { Education } from '../components/Education/education';
import { Interests } from '../components/Interests/interests';
import { Experience } from '../components/Experience/experience';
//import { ContactApp } from './ContactApp/contactapp';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Experience />
        <Education />
        <Interests />
        <Footer />
      </div>
    );
  }
}

export default App;
