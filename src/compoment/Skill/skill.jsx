import React, { useEffect } from 'react'
import './skill.css';
import log  from '../../assets/react.png';
import log1  from '../../assets/java.png';
import log2  from '../../assets/front.png';
import log3  from '../../assets/sql.png';
import log4  from '../../assets/python.png';
import log5  from '../../assets/ml.png';






function Skill() {
  useEffect(() => {
    const handleScroll = () => {
      const skillBars = document.querySelectorAll('.skillBar');
      skillBars.forEach(skillBar => {
        const rect = skillBar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          skillBar.classList.add('visible');
        } else {
          skillBar.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the scroll handler once to apply the effect on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="skills">
      <span className="skillTitle">What I do</span> <br />
      <span className="skillDesc">I am a skilled Web developer with experience in creating <br /> visually appealing and user-friendly websites</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={log1} alt="Uidesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Java <br /> <span className='des'>Language</span></h2>
            {/* <p>FrameWork</p> */}
          </div>
        </div>
         <div className="skillBar">
          <img src={log4} alt="Uidesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2>C<br /> <span className='des'>Language</span></h2>
            {/* <p>FrameWork</p> */}
          </div>
        </div>
        <div className="skillBar">
          <img src={log5} alt="Uidesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Machine Learning</h2>
            {/* <p>this is a demo text</p> */}
          </div>
        </div>
        <div className="skillBar">
          <img src={log} alt="Uidesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2>React.Js <br /> <span className='des'>Framework</span></h2>
            {/* <p>FrameWork</p> */}
          </div>
        </div>

        

        <div className="skillBar">
          <img src={log2} alt="Uidesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Html , CSS , Javascript</h2>
            {/* <p>Fronted</p> */}
          </div>
        </div>
        <div className="skillBar">
          <img src={log3} alt="Uidesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2>SQL <br /> <span className='des'>Database</span></h2>
            {/* <p>FrameWork</p> */}
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default Skill;
