import './App.css';
import headshot from './images/headshot.png'
import tindie from './images/tindie.jpg'
import allaboard from './images/allaboard.JPG'
import spotyou from './images/spotyou.jpg'
import outofwater from './images/fits_thumb.png'
import justintime from './images/JiT_SS.png'
import soulsiphon from './images/SS_SS.png'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Landing from './components/Landing';
import About from './components/About';
import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails';
import Game from './components/Game';

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
    <section id="games" className="games">
      <h4 className="projectsection">Click image to get live version</h4>
      <Game setCurrentProject={setCurrentProject} title="Out of Water: Plenty More Fish in the Sea" liveURL="https://purplepuffer.itch.io/out-of-water" gitURL="https://github.com/DanMossDev/game-off-22" imgURL={outofwater} bio="Fast paced physics based platformer"/>
      <Game setCurrentProject={setCurrentProject} title="Just in Time" liveURL="https://purplepuffer.itch.io/just-in-time" gitURL="https://github.com/DanMossDev/just-in-time" imgURL={justintime} bio="Megacorp warehouse worker simulator"/>
      <Game setCurrentProject={setCurrentProject} title="Soul Siphon" liveURL="https://purplepuffer.itch.io/soul-siphon" gitURL="https://github.com/DanMossDev/SoulSiphon" imgURL={soulsiphon} bio="Steal your enemies' magical powers, but at what cost..."/>
    </section>
    <section id="projects" className="projects">
      <Project setCurrentProject={setCurrentProject} title="Tindie" liveURL="https://danmossdev.github.io/Tindie/" gitURL="https://github.com/DanMossDev/Tindie" imgURL={tindie} bio="Match with your perfect indie game"/>
      <Project setCurrentProject={setCurrentProject} title="Spot|You" liveURL="https://danmossdev.github.io/ill-spot-you-bro/" gitURL="https://github.com/DanMossDev/ill-spot-you-bro/" imgURL={spotyou} bio="Transfer from Spotify to YouTube"/>
      <Project setCurrentProject={setCurrentProject} title="All A-Board" liveURL="https://danmossdev.github.io/all-a-board/" gitURL="https://github.com/DanMossDev/all-a-board" imgURL={allaboard} bio="Social media for bored-board gamers"/>
    </section>
    <ProjectDetails currentProject={currentProject} setCurrentProject={setCurrentProject}/>
    </main>
  </> : <main className="loading-parent">
    <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <span>Loading</span>
      </div>
  </main>
}

export default App;
