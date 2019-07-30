import React from 'react';
import './App.css';

//Packages
//import { ParallaxProvider } from 'react-scroll-parallax';

//Components
//import { Footer } from './Footer/footer';
import { Education } from '../components/Education/education';
import { Interests } from '../components/Interests/interests';
import { WorkExperience } from './WorkExperience/workexperience.jsx';
import { DevExperience } from './DevExperience/devexperience.jsx';
import { Projects } from './Projects/projects.jsx';
//import { Test } from './test/test.jsx';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        
          <DevExperience />
          <WorkExperience />
          <Projects />
          <Education />
          <Interests />
        
      </div>
    );
  }
}
export default App;
