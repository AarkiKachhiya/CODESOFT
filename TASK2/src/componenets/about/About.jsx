import React from 'react'
import './about.css'
import Me2 from '../../assets/Me2.jpg';
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";




const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me2} alt="about-pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0</small>
            </article>
            <article className='about__card'>
              <FaFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>3</small>
            </article>
          </div>
           <p>Hi! I'm Aarki Kachhiya, a web developer with a passion for creating dynamic and responsive websites. As a recent graduate, I have hands-on experience with HTML, CSS, JavaScript, and modern frameworks like React and Node.js.
            During my academic projects, I developed a strong foundation in front-end and back-end development, ensuring seamless user experiences and robust functionality. I'm eager to apply my skills to real-world projects and continue learning and growing in the field.

</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About