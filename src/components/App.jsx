import React from 'react';
import './App.css';
import { Footer } from './Footer/footer';
import { Education } from '../components/Education/education';
import { Interests } from '../components/Interests/interests';
import { Experience } from '../components/Experience/experience';

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
