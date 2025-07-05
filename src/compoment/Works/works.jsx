import React from 'react'
import './work.css';
import port from '../../assets/logo1.jpg';
import face from '../../assets/face.png';
import portfolio from '../../assets/portfolio.png';
import cal from '../../assets/calculator.png';



const Works = () => {
  return (
    <section className="works">
            <h2 className="workstitle">My Projects </h2>

      <span className="worksDesc">This project is a web-based application developed using HTML, CSS, and JavaScript for an interactive and user-friendly interface.</span>
      <div className="worksImgs">
      <div className='worksImg'> 
        <div className='box'>
         <span><img src={port} alt="jssoj" className='imagelogo' /></span>
        <button className='btn  btn1'><a href="https://github.com/Dheeraj2-kumar/Business-Websites">View</a></button>
        </div>
        <span className='web'>Business Website</span>
      </div>
      <div className='worksImg'> 
        <div className='box'>
         <span><img src={face} alt="jssoj" className='imagelogo' /></span>
        <button className='btn  btn1'><a href="https://github.com/Dheeraj2-kumar/Advance-Face-and-Video-Emotion-Recognition-System">View</a></button>
        </div>
        <span className='web'>Adavance Face Detection</span>
      </div>
      <div className='worksImg'> 
        <div className='box'>
         <span><img src={portfolio} alt="jssoj" className='imagelogo' /></span>
        <button className='btn  btn1'><a href="https://github.com/Dheeraj2-kumar/Business-Websites">View</a></button>
        </div>
        <span className='web'>PortFolio</span>
      </div>
      <div className='worksImg'> 
        <div className='box'>
         <span><img src={cal} alt="jssoj" className='imagelogo' /></span>
        <button className='btn  btn1'><a href="https://github.com/Dheeraj2-kumar/Calculator">View</a></button>
        </div>
        <span className='web'>Calculator</span>
      </div>
      </div>
      <button className="workBtn">See More</button>
    </section>
  )
}

export default Works;