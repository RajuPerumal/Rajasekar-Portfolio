import React from 'react'
import './works.css'
import Portfolio from '../assets/logo.png'

const Works = () => {
  return (
    <section id='works'>
        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksdesc">Paragraph</span>
        <div className="worksImgs">
            <img src={Portfolio} alt="" className="worksImg" />
            <img src={Portfolio} alt="" className="worksImg" />
            <img src={Portfolio} alt="" className="worksImg" />
            <img src={Portfolio} alt="" className="worksImg" />
            <img src={Portfolio} alt="" className="worksImg" />
            <img src={Portfolio} alt="" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </section>
    )
}

export default Works