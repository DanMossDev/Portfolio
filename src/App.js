import './App.css';
import headshot from './images/headshot.png'
import tindie from './images/tindie.jpg'
import allaboard from './images/allaboard.JPG'
import spotyou from './images/spotyou.jpg'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Landing from './components/Landing';
import About from './components/About';
import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [currentProject, setCurrentProject] = useState()
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = headshot
    img.onload = () => setImageLoaded(true)
  }, [])


  return imageLoaded ? <>
    <Navbar />
    <main className="main">
    <Landing/>
    <About />
    <section id="projects" className="projects">
      <Project setCurrentProject={setCurrentProject} title="Tindie" liveURL="https://danmossdev.github.io/Tindie/" gitURL="https://github.com/DanMossDev/Tindie" imgURL={tindie} bio="Match with your perfect indie game"/>
      <Project setCurrentProject={setCurrentProject} title="Spot|You" liveURL="https://danmossdev.github.io/ill-spot-you-bro/" gitURL="https://github.com/DanMossDev/ill-spot-you-bro/" imgURL={spotyou} bio="Transfer from Spotify to YouTube"/>
      <Project setCurrentProject={setCurrentProject} title="All A-Board" liveURL="https://danmossdev.github.io/all-a-board/" gitURL="https://github.com/DanMossDev/all-a-board" imgURL={allaboard} bio="Social media for bored-board gamers"/>
    </section>
    <ProjectDetails currentProject={currentProject} setCurrentProject={setCurrentProject}/>
    </main>
  </> : <main className="loading-parent">
    <div class="wrapper">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <span>Loading</span>
      </div>
  </main>
}

export default App;
