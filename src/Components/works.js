import React from 'react'
import './works.css'
// import Portfolio from '../assets/logo.png'
import Foodvilla from "../assets/FoodVilla.png"
import TNMDA from "../assets/TNMDA.png"
import TNMDAUpdates from "../assets/TNMDA Updates.png"

const Works = () => {
  return (
    <section id='works'>
        <h2 className="workstitle">My Portfolio</h2>
        {/* <span className="worksdesc">Paragraph</span> */}
        <div className="worksImgs">
            <img src={Foodvilla} alt="" className="worksImg" />
            <img src={TNMDA} alt="" className="worksImg" />
            <img src={TNMDAUpdates} alt="" className="worksImg" />
                       
        </div>
        <button className="worksBtn">See More</button>
    </section>
    )
}

export default Works