import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@mui/material'

export default function About() {
    return <section id="about" className="about">
      <Carousel className="carousel">
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/csharp-original.svg" alt="C#"/>  
        <img className="skill-img" src="https://i.redd.it/tu3gt6ysfxq71.png" alt="Unity Engine"/>
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg" alt="C++"/>
        <img className="skill-img" src="https://cdn.worldvectorlogo.com/logos/unreal-1.svg" alt="Unreal Engine"/>
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript"/>
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python"/>
        {/*<img className="skill-img" src="https://images.opencollective.com/pixijs/f97b489/logo/256.png" alt="PixiJS"/>*/}
        {/*<img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React"/>  */}
        {/*<img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5"/>  */}
        {/*<img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3"/>*/}
        {/*<img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL"/>  */}
      </Carousel>
      <p className="p1 loaded fade">
        Heya! I'm Daniel, a software developer from the North West with extensive experience building games in
        C# using Unity. 
        I am currently working at Cloth Cat Games on Planted! as well as developing a vertical slice for an external client.
        <br />
        <br />
        I have a huge passion for problem solving, and love an excuse to discuss problems with others.
        Storytelling is something I strive to do through my work, whether that be a 
        complex branching narrative, or as simple as "dude beating up other dudes with big stick", I
        think stories are what drive us forward.
        <br />
        <br />
        During my time in the games industry I have had the pleasure to work on a number of titles including The Precinct, Laika: Aged Through Blood,
        and Hellboy Web of Wyrd; as well as being heavily involved in a number of prototypes and pitches.
        <br />
        <br />
        Prior to working in the gaming industry, I studied physics, acted, and developed for the
        web predominantly using JavaScript (React/PixiJS), Python, and SQL.
      </p>
  </section>
  }