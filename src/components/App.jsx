import React from 'react';
import './App.css';
import { Footer } from './Footer/footer';
import { Education } from '../components/Education/education';
import { Interests } from '../components/Interests/interests';
import { WorkExperience } from './WorkExperience/workexperience.jsx';
import { DevExperience } from './DevExperience/devexperience.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DevExperience />
        <WorkExperience />
        <Education />
        <Interests />
        <Footer />
      </div>
    );
  }
}
export default App;
