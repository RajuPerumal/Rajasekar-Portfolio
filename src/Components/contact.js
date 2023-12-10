import React, { useRef } from 'react'
// import Portfolio from '../assets/logo.png'
import LinkedIn from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import whatsapp from "../assets/whatsapp.png"
import github from "../assets/github.png"
import './contact.css'
import emailjs from '@emailjs/browser';
import html from "../assets/html-5.png"
import css from "../assets/css-3.png"
import atom from "../assets/atom.png"
import javascript from "../assets/java-script.png"
import express from "../assets/express.png"
import java from "../assets/java.png"
import nodejs from "../assets/nodejs.png"
import mongodb from "../assets/mongodb_plain_wordmark_logo_icon_146423.png"


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y6md0kp', 'template_y0phqn8', form.current, 'vVX7M4LnKsf3zDkmw')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email Sent !")
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <section id="ContactPage">
        <div id="clients">
            <h1 className="contacPageTitle">My Skills</h1>
            <p className="clientDesc">Committed to staying at the forefront of web technologies to create innovative and user-friendly digital experiences.</p>
            <div className="clientImgs">
                <img src={atom} alt="" className="clientImg" />
                <img src={javascript} alt="" className="clientImg" />
                <img src={html} alt="" className="clientImg" />
                <img src={css} alt="" className="clientImg" />
            </div>
            <div className="clientImgs">
                <img src={mongodb} alt="" className="clientImg" />
                <img src={nodejs} alt="" className="clientImg" />
                <img src={express} alt="" className="clientImg" />
                <img src={java} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contacts">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Let's connect and collaborate to bring your web projects to life!</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                <input type="text" className="email" placeholder='Your Email'name='from_email'/>
                <textarea name="message" className='msg' placeholder='Your Message' row='5' ></textarea>
                <button className="submitBtn" value='send' type='submit'>Submit</button>
                <div className="links">
                    <img src={LinkedIn} alt="" className="link" />
                    <img src={github} alt="" className="link" />
                    <img src={twitter} alt="" className="link" />
                    <img src={whatsapp} alt="" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact