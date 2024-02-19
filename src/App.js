import './App.css';
import headshot from './images/headshot.png'
import laika from './images/Laika.avif'
import hellboy from './images/Hellboy.jpg'
import pinehearts from './images/pine_hearts.png'
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
      <Game 
        setCurrentProject={setCurrentProject} 
        title="Laika: Aged Through Blood" 
        liveURL="https://store.steampowered.com/app/1796220/Laika_Aged_Through_Blood/" 
        imgURL={laika} 
        bio="Primary programmer responsible for bringing the title to all modern consoles"
      />
      <Game 
        setCurrentProject={setCurrentProject} 
        title="Pine Hearts" 
        liveURL="https://store.steampowered.com/app/1781010/Pine_Hearts/" 
        imgURL={pinehearts} 
        bio="Assisted in porting project to Nintendo Switch, including implementation of motion gesture controls"
      />
      <Game 
        setCurrentProject={setCurrentProject} 
        title="Hellboy Web of Wyrd" 
        liveURL="https://store.steampowered.com/app/2160480/Hellboy_Web_of_Wyrd/" 
        imgURL={hellboy} 
        bio="Assisted in porting project to all modern consoles"
      />
    </section>
    <section id="projects" className="projects">
      <Project 
        setCurrentProject={setCurrentProject} 
        title="Out of Water" 
        liveURL="https://purplepuffer.itch.io/out-of-water" 
        gitURL="https://github.com/DanMossDev/game-off-22" 
        imgURL={outofwater} 
        bio="Fast paced physics based platformer"
      />
      <Project 
        setCurrentProject={setCurrentProject} 
        title="Just in Time" 
        liveURL="https://purplepuffer.itch.io/just-in-time" 
        gitURL="https://github.com/DanMossDev/just-in-time" 
        imgURL={justintime} bio="Megacorp warehouse worker simulator"
      />
      <Project 
        setCurrentProject={setCurrentProject} 
        title="Soul Siphon" 
        liveURL="https://purplepuffer.itch.io/soul-siphon" 
        gitURL="https://github.com/DanMossDev/SoulSiphon" 
        imgURL={soulsiphon} bio="Metroidvania where you absorb your enemies' powers"
      />
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
