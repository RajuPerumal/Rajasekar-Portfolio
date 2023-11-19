import React, { useState } from 'react'
import "./navbar.css"
import {Link} from "react-scroll"
import burgerMenu from '../assets/burgerMenu.png'
import letterR from "../assets/letter-r.png"
import ContactMenu from "../assets/email.png"

const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false)
  return (
<nav className="navbar">
    <img src={letterR} alt="" className='logo'/>
    <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset= {-100} duration={500} className="desktopMenuListItems">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset= {-50} duration={500} className="desktopMenuListItems">About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset= {-50} duration={500} className="desktopMenuListItems">Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset= {-50} duration={500} className="desktopMenuListItems">Interests</Link>
    </div>
    <Link  to='contacts' spy={true} smooth={true} offset= {-100} duration={500} >
    <button className="desktopbtnMenuBtn" 
    // onClick={()=>{
    //     document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    // }}
    >
        <img src={ContactMenu} alt="Contact" className="desktopMenuImg" />
        Contact Me
    </button>
    </Link>
    <img src={burgerMenu} alt="BurgerMenu" aria-label="Burger Menu Icon" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
    <div className="navMenu" style={{display : showMenu?'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset= {-100} duration={500} className="ListItems" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset= {-50} duration={500} className="ListItems" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset= {-50} duration={500} className="ListItems" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset= {-50} duration={500} className="ListItems" onClick={()=>setShowMenu(false)}>Clients</Link>
        <Link  to='contacts' spy={true} smooth={true} offset= {-100} duration={500} className="ListItems" onClick={()=>setShowMenu(false)}>Contact</Link>

    </div>
</nav>  
)
}

export default Navbar