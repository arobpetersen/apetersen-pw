import React from 'react';
import './App.css';
//import { Footer } from './Footer/footer';
import { Education } from '../components/Education/education';
import { Interests } from '../components/Interests/interests';
import { WorkExperience } from './WorkExperience/workexperience.jsx';
import { DevExperience } from './DevExperience/devexperience.jsx';
//import { Test } from './test/test.jsx';
//import { ParallaxProvider } from 'react-scroll-parallax';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
          <DevExperience />
          <WorkExperience />
          <Education />
          <Interests />
        
      </div>
    );
  }
}
export default App;
