import React from 'react';
import './intro.css';
import HireMe from '../assets/HireMe.png';
import ProfilePic from '../assets/png 3.png';

const Intro = () => {

  // Function to handle PDF download
  const handleDownload = () => {
    const pdfUrl = "Raju_Resume_Updated_On_2024.pdf"; // Replace with your cloud storage URL
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Rajasekar_Resume.pdf"; // The name you want the downloaded file to have
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="IntroText">
          I'm 
          <span className="IntroName"> Rajasekar</span>
          <br />
          <span className='frontenddev'>Front End Developer</span>
        </span>
        <p className="IntroPara">Empowering Lives through Code, Compassion, and Inclusivity</p>
        <div className='hiremeLink'>
          <img src={HireMe} alt='hireme' className='btnImg' />
          <button className='HireMeButton' onClick={handleDownload}>
            Hire Me
          </button>
        </div>
      </div>
      <img src={ProfilePic} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
