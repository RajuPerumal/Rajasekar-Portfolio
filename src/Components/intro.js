import React from 'react'
import './intro.css'
// import {Link} from "react-scroll"
import HireMe from "../assets/HireMe.png"
import ProfilePic from "../assets/png 3.png"
// import TextRevealing from "./TextRevealing"


const Intro = ()=> {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="IntroText">I'm 
            <span className="IntroName"> Rajasekar</span>
            <br />Front End Developer
            </span>
            <p className="IntroPara">Empowering Lives through Code, Compassion, and Inclusivity</p>
            <div className='hiremeLink'>
              <img src={HireMe} alt='hireme'className='btnImg'/>
              <button className='HireMeButton'>Hire Me</button>
            </div>
            {/* <Link ><button className="hiremebtn"><img src={HireMe} alt="hireme" className='btnImg'/>Hire Me</button></Link> */}
        </div>
        <img src={ProfilePic} alt="profile" className="bg" />
    </section>
  )
}

export default Intro