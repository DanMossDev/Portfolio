import './App.css';
import headshot from './images/headshot.png'
import tindie from './images/tindie.jpg'
import worldle from './images/worldle.jpg'
import React, { useEffect, useState } from 'react';


function Navbar() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <nav id="navbar" className={offset >= window.innerHeight - 50 ? "sticky" : ""}>
  <ul>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#projects">Projects</a>
    </li>
  </ul>
</nav>
}

function Landing() {
  return <section id="home" className="frontpage">
  <img
    src={headshot}
    alt="A headshot of Daniel"
    className="headshot"
  /> 
  <span className="title">
    <span className="title1">Hi there! I'm</span>
    <br />
    <span className="name">Daniel Moss</span>
  </span>
</section>
}

function About() {
  return <section id="about" className="about">
  <p className="p1 loaded fade">
    I'm a software developer from the North West with experience in
    JavaScript (including Node.JS and React), HTML/CSS, PostgreSQL, and C#.
    <br />
    <br />
    I have a huge passion for creating interesting user experiences. One of
    the first things I did as a developer was create "Tindie", which can
    pretty much be summed up as "Tinder for video games". Building out the
    app in vanilla JS, PSQL, HTML and CSS was a challenge for sure - but one 
    that felt all the more satisfying as features began to work and the
    experience began to flesh out more and more.
    <br />
    <br />
    I first got into programming while playing around in Unity - I realised
    that while designing the whole game was indeed fun, the stuff I really
    enjoyed was working on scripts. For me, the satisfaction from finally 
    cracking a difficult problem is second to none!
    <br />
  </p>
</section>
}



function Project({title, liveURL, gitURL, imgURL, bio}) {

  return <div className={"container loaded fade"}>
        <a href={liveURL} target="_blank" rel="noreferrer">
          <img
            src={imgURL}
            alt={`A shot of the project ${title}`}
            className="projectimg"
          />
        </a>
        <h4 className="projecttitle">
          <b>{title}</b>
        </h4>
        <p className="projecttitle">
          {bio}
        </p>
        <button className="clickme">
          <a href={gitURL} target="_blank" rel="noreferrer">
            View Source Code
          </a>
        </button>
      </div>
}


function App() {
  return ( <>
    <Navbar />
  <div className="main">
    <Landing />
    <About />
    <section id="projects" className="projects">
      <Project title="Tindie" liveURL="https://danmossdev.github.io/Tindie/" gitURL="https://github.com/DanMossDev/Tindie" imgURL={tindie} bio="Swipe to match with your perfect indie game"/>
      <Project title="Worldle" liveURL="https://danmossdev.github.io/Worldle/" gitURL="https://github.com/DanMossDev/Worldle" imgURL={worldle} bio="A geography game to boggle the mind"/>
    </section>
  </div>
  </>
  );
}

export default App;
