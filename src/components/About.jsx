import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@mui/material'

export default function About() {
    return <section id="about" className="about">
      <Carousel className="carousel">
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python"/>
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js"/>   
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL"/>  
        <img className="skill-img" src="https://profilinator.rishav.dev/skills-assets/csharp-original.svg" alt="C#"/>  
      </Carousel>
      <p className="p1 loaded fade">
        I'm a software developer from the North West with experience in
        JavaScript, React, Python, PostgreSQL, C#, and more.
        <br />
        <br />
        I have a huge passion for creating interactive user experiences, and solving
        problems. I'd consider some of my main strengths to be my analytical mind,
        my constant drive to learn new things, and my friendly nature.
        <br />
        <br />
        I am currently focused on web development, but I find many areas of programming
        fascinating. I am currently spending a lot of my spare time learning Python, as
        the applications of both machine learning and big data analysis interests me
        greatly.
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