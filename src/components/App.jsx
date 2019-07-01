import React from 'react';
import './App.css';
import { Header } from '../components/Header/header';
import { Footer } from './Footer/footer';
//import { Button } from '../components/enter-button';
import { NavBar } from '../components/NavBar/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        {/* <Button /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
