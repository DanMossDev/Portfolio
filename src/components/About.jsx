import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@mui/material'

export default function About() {
    return <section id="about" className="about">
      <Carousel className="carousel">
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/csharp-original.svg" alt="C#"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg" alt="C++"/>
        <img className="skill-img" src="https://i.redd.it/tu3gt6ysfxq71.png" alt="Unity"/>
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript"/>
        <img className="skill-img" src="https://images.opencollective.com/pixijs/f97b489/logo/256.png" alt="PixiJS"/>
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python"/>
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3"/>
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL"/>  
      </Carousel>
      <p className="p1 loaded fade">
        I'm a software developer from the North West with extensive experience building games in
        C# using Unity. I also have professional experience porting games to all modern platforms,
        creating custom physics systems, and working alongside designers and artists to create some
        remarkable stories for customers.
        Prior to working in the gaming industry, I studied physics, acted, and developed for the 
        web using predominantly using JavaScript (React/PixiJS), Python, and SQL.
        <br />
        <br />
        I have a huge passion for problem solving, and love an excuse to discuss problems with others!
        Storytelling is also something I strive to do through my work, whether those stories are
        complex branching narratives, or as simple as "dude beating up other dudes with big stick", I
        think stories are what drive us forward.
        <br />
        <br />
        With a background in physics I have strong fundamentals in the mathematical side of
        programming, and a deep understanding of important concepts in 3D manipulation of objects via code,
        and I frequently find myself utilising algorithms and formulae to attain the functionality I
        desire, as well as to optimise that functionality.
        <br />
        <br />
        I started out self taught, messing around in Unity to create personal projects - after that
        I entered the Northcoders bootcamp before going on to work in web development on browser based games.
        Currently I am in sunny Dundee, working at Hyper Luminal Games - during my time here I've had
        the pleasure to work on a number of titles including Laika: Aged Through Blood, Hellboy Web of Wyrd
        and Pine Hearts.
      </p>
  </section>
  }