import React, { useEffect, useState } from 'react'
import {Container, Col , Row} from 'react-bootstrap'
import './OurLatestWork.css'
import Aos from 'aos'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

//import "aos/dist/aos.css";

const OurLatestWork = () => {
  useEffect(() =>{
Aos.init({duration:2000});
  },[])
 
  
  const slides = [
    {
      con: "1",
      src:'images/work1.png',
      link: "https://sharp-swirles-a1a601.netlify.app/#service",
    },
    {
      con: "2",
      src:'images/work2.png',
      link: "https://genecalifescience.netlify.app/#product",
      disc:'Geneca Life Science is a manufacturer company with the industrial and NIC code of as per the official records.'
    },
    {
      con: "3",
      src:'images/work3.png',
      link: "http://www.soroup.com/",
      disc:'A major element to our competitive strength is our sales and distribution strategy anchored by our best-in-class sales team. Our well established distribution network will ensure that our products are well delivered and displayed on time at every outlets'
    },
    {
      con: "4",
      src:'images/work4.png',
      link: "https://sharp-swirles-a1a601.netlify.app/#service",
      disc:'Shreeji Multispeciality Dental Clinic  is one of the leading businesses in the Dentists. Also known for Dentists, Dental Surgeons, Paedodontist Doctors, Orthodontist Doctors, Dental X Ray Centres, Root Canal Doctors, Endodontist Doctors, 24 Hours Dentists and much more.'
    },
    {
      con: "5",
      src:'images/work5.png',
      link: "https://goanatural.com/",
      disc:'The Dental & Maxillofacial Clinic is a Dentistry Clinic in Gomtinagar, Lucknow. The clinic is visited by doctors like Dr. Hemant Gupta'
    },
    {
      con: "6",
      src:'images/work6.png',
      link: "https://imagemarket.xyz/welcome.php",
      disc:'We are a luxury home-services salon in Patna serving all your beauty needs from the comfort of your home. Golden Honey started in year 2015.'
    },
    {
      con: "7",
      src:'images/work7.png',
      link: "https://sharp-swirles-a1a601.netlify.app/#service",
    },
  ]
    const slideLeft = () => {
      const slider = document.getElementById("slider");
      // for (var i = 0; i < 10000; i++) {
      //     window.clearInterval(i);
      //   }
      slider.scrollLeft = slider.scrollLeft - 600;
    };
  
    const slideRight = () => {
      const slider = document.getElementById("slider");
      // for (var i = 0; i < 10000; i++) {
      //   window.clearInterval(i);
      // }
      slider.scrollLeft = slider.scrollLeft + 600;
    };
    useEffect(() => {
      window.slider = document.getElementById("slider");
  
      window.setInterval(slideRight, 30000);
    }, []);

  return (
    <>
     
    <div className='bgimg' data-aos="zoom-out">
    <Container className='slidebg' data-aos="zoom-in" >
      <Row >
      <Col md={6}>
    <div id="main-slider-container" className='ourworksize' data-aos="slide-up" >
     
      <MdKeyboardArrowLeft
        className="slider-icon left"
        size={40}
        onClick={slideLeft}
      />
      <div id="slider">
        {slides.map((slide, index) => (
          <div className="slider-card" key={index}>
            <div className="slider-card-image-container">
              <a href={`${slide.link}`}><img src={slide.src} className="slider-card-image" alt="hell" /></a>
            </div>
            
          </div>
        ))}
      </div>
      <MdKeyboardArrowRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
     
    </div>
    </Col>
    <Col md={6} data-aos="letter-typing">
    <h1>Our Latest Work</h1>
   <p className='disc'>These are our Latest work which is made by expert team. All Project is showing one by one in a slide, just click on the image to visite website and get infomation, Goanatural, Shreeji Dental clinic, Maxillofacial Dental clinic, imagemarket, PMS, Digicircle these are our latest work. What'sApp Intigeration given in every Project and technologies that is used like react, nodejs, php, javascript, ajax, css, bootstrap. All Project made full responsive and user friendly.  

</p>
    </Col>
    </Row>
    </Container>
    </div>
    </>
  )
}

export default OurLatestWork