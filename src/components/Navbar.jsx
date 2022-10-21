import { useEffect, useState } from 'react';
import CV from '../images/DanielMoss_CV.pdf';

export default function Navbar() {
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
        <a href="#games">Projects</a>
      </li>
      <li>
        <a href={CV} download>CV</a>
      </li>
    </ul>
  </nav>
  }