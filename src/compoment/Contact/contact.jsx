import React from 'react'
import './Contact.css';
import linkd from '../../assets/linkd.png';
import github from '../../assets/github.png';
import insta from '../../assets/insta.png';
import faceb from '../../assets/faceb.png';
import leet from '../../assets/leetcode.png';



function Contact() {
  return (
    <section className="contactpage">
      <div id="contact">
       <h1 className="contactpagetitle">Contact Me</h1>
       <span className="contactdesc">Please fill out the form below to discuss my work oppotunities.</span>
       <form className="contactform">
        <div className='box1'>
          <div className='box3'>
        <input type="text" className='name' placeholder='Your Name' />
        <input type="email" className='email' placeholder='Your Email' />
        </div>
        <textarea  className="msg" name="message" rows="5" placeholder='Your message'></textarea>
        </div>
        <button type='submit' value='send' className='submitBtn'>Submit</button>
        <div className="Links">
          <a href="https://www.linkedin.com/in/dheeraj-kumar-b23028260/"> <img  src={linkd}  alt="" className="Link" /></a>
          <a href="https://github.com/Dheeraj2-kumar"><img src={github} alt="" className="Link" /></a>
          <a href="https://leetcode.com/u/42XUJujG1W/"><img src={leet} alt="" className="Link" /></a>
          <a href="https://www.instagram.com/dheerajyadav.54772?igsh=eXd5ZndodGVjemRz"><img src={insta} alt="" className="Link" /></a>
          <a href="https://www.facebook.com/share/1Y6YrzAn3s/"><img src={faceb} alt="" className="Link" /></a>
          
          
           
        </div>

       </form>
      </div>
    </section>
  );
}

export default Contact;