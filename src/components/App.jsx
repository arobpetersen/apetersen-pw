import React from 'react';
import './App.css';
import { Header } from '../components/Header/header';
import { Footer } from './Footer/footer';
//import { Button } from '../components/enter-button';
import { NavBar } from '../components/NavBar/NavBar';
import { Intro } from '../components/Intro/intro';
import { ContactMe } from './ContactMe/contactme';
import { Education } from '../components/Education/education';
import { BuiltWith } from '../components/BuiltWith/builtwith';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Intro />
        <BuiltWith />
        <ContactMe />
        {/* <Button /> */}
        <Education />
        <Footer />
      </div>
    );
  }
}

export default App;
