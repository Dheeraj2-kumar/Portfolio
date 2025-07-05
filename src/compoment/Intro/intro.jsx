import React from 'react'
import './Intro.css';
import { Link } from 'react-scroll';
import bag from '../../assets/bag.png';
import backd from '../../assets/backd.jpg';



const Intro = () => {
  return (
    
      <section id="intro">
        <div className="introConten">
          <span className="hello">Hello,</span>
          <span className="introText">I'm <span className="introName">Dheeraj</span><br/>Web Developer</span>
          <p className="introPara">I am a skilled Web developer with experience in creating <br /> visually appealing and user friendly website</p>
          {/* <Link><button className="btn">Download CV</button></Link> */}
          <Link><button className="btn"><img src={bag} alt="Hire Me" className='BtnImg'/>Hire Me</button></Link>

        </div>
        <img src={backd} alt="background_image" className='bg' />
      </section>
  
  )
}

export default Intro;