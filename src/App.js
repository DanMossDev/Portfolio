import './App.css';
import tindie from './images/tindie.jpg'
import worldle from './images/worldle.jpg'
import { useState } from 'react';
import Navbar from './components/Navbar'
import Landing from './components/Landing';
import About from './components/About';
import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [currentProject, setCurrentProject] = useState()

  return ( <>
    <Navbar />
    <div className="main">
    <Landing />
    <About />
    <section id="projects" className="projects">
      <Project setCurrentProject={setCurrentProject} title="Tindie" liveURL="https://danmossdev.github.io/Tindie/" gitURL="https://github.com/DanMossDev/Tindie" imgURL={tindie} bio="Match with your perfect indie game"/>
      <Project setCurrentProject={setCurrentProject} title="Worldle" liveURL="https://danmossdev.github.io/Worldle/" gitURL="https://github.com/DanMossDev/Worldle" imgURL={worldle} bio="A geography game to boggle the mind"/>
    </section>
    <ProjectDetails currentProject={currentProject} setCurrentProject={setCurrentProject}/>
    </div>
  </>
  );
}

export default App;
