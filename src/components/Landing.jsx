import headshot from '../images/headshot.png'

export default function Landing() {
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