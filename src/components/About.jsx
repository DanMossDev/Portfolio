import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@mui/material'

export default function About() {
    return <section id="about" className="about">
      <Carousel className="carousel">
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/csharp-original.svg" alt="C#"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg" alt="C++"/>
        <img className="skill-img" src="https://i.redd.it/tu3gt6ysfxq71.png" alt="Unity"/>
        <img className="skill-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Unreal_Engine_Logo.svg/232px-Unreal_Engine_Logo.svg.png?20170602084503" alt="Unreal Engine 5"/>
        <img className="skill-img" src="https://images.opencollective.com/pixijs/f97b489/logo/256.png" alt="PixiJS"/>
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python"/>
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js"/>   
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL"/>  
      </Carousel>
      <p className="p1 loaded fade">
        I'm a software developer from the North West who loves building games in
        C# using Unity (and is just starting to pick up C++/Unreal), has professional experience creating games using C# and PixiJS,
        and developing for the web using JavaScript, React, Python, PostgreSQL, and more.
        <br />
        <br />
        I have a huge passion for creating interactive user experiences and solving
        problems. I'd consider some of my main strengths to be my analytical mind,
        my constant drive to learn new things, and my friendly nature!
        <br />
        <br />
        With a background in physics I have strong fundamentals in the mathematical side of
        programming, and a deep understanding of important concepts in 3D manipulation of objects via code,
        and I can comfortably implement mechanical equations to attain the results I want from my code.
        <br />
        <br />
        I first got into programming while playing around in Unity - from there I studied at
        Northcoders bootcamp to improve my fundamentals of coding, and since then I've been working
        as a game developer at Crucible Gaming.
        <br />
        <br />
        My current project is a top secret D&D style CRPG taking inspiration from Divinity and Fallout.
        My focus for this project is to implement high quality code through use of design patterns, and
        to create a bunch of integrated systems. So far, I have a spell book system sorted and I'm
        getting to work on the turn based combat system now.
      </p>
  </section>
  }