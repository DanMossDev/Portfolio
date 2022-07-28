import './App.css';
import tindie from './images/tindie.jpg'
import allaboard from './images/allaboard.JPG'
import spotyou from './images/spotyou.jpg'
import { useState } from 'react';
import Navbar from './components/Navbar'
import Landing from './components/Landing';
import About from './components/About';
import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [currentProject, setCurrentProject] = useState()

  return <>
    <Navbar />
    <div className="main">
    <Landing />
    <About />
    <section id="projects" className="projects">
      <Project setCurrentProject={setCurrentProject} title="Tindie" liveURL="https://danmossdev.github.io/Tindie/" gitURL="https://github.com/DanMossDev/Tindie" imgURL={tindie} bio="Match with your perfect indie game"/>
      <Project setCurrentProject={setCurrentProject} title="Spot|You" liveURL="https://danmossdev.github.io/ill-spot-you-bro/" gitURL="https://github.com/DanMossDev/ill-spot-you-bro/" imgURL={spotyou} bio="Transfer from Spotify to YouTube"/>
      <Project setCurrentProject={setCurrentProject} title="All A-Board" liveURL="https://danmossdev.github.io/all-a-board/" gitURL="https://github.com/DanMossDev/all-a-board" imgURL={allaboard} bio="Social media for bored-board gamers"/>
    </section>
    <ProjectDetails currentProject={currentProject} setCurrentProject={setCurrentProject}/>
    </div>
  </>
}

export default App;
