import React from 'react'
import './skills.css'
import UIDesign from "../assets/UIlayers.png"
import webapp from "../assets/coding.png"
import Diversity from "../assets/working.png"

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do?</span>
        <span className="skillDesc">As a professional with a passion for developing configurable UIs, web applications, and promoting diversity and inclusivity, I'm excited to share some of my notable work and accomplishments.</span>    
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UI" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Config Driven UI</h2>
                    <p>Expert in creating flexible, user-friendly UIs tailored to specific needs.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={webapp} alt="Web" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Application</h2>
                    <p>Proficient in designing visually appealing, robust and user-friendly web applications.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Diversity} alt="App" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Diversity and Inclusion Resource Management</h2>
                    <p>Committed to promoting diversity beyond technical skills.</p>
                </div>
            </div>
        </div>
            
    </section>
  )
}
export default Skills