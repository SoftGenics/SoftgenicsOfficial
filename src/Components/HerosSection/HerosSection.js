import {React, useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter';
import './HerosSection.css'
import { Link } from 'react-router-dom';
import {Row, Col, Container,Form} from 'react-bootstrap';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import "aos/dist/aos.css"
import Overlay from "react-overlay-component";
import Book from '../Book/Book';

const HerosSection = () => {
  const form = useRef();
  const [show, setShow]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bnhtkgs', 'template_pkccdsc', form.current, 'jpPQTGEnAduefl8Cg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    }
   

    const closeOverlay = () => setShow(false);

    const configs = {
        animate: true,
        top: `5em`,
        // clickDismiss: false,
        // escapeDismiss: false,
        // focusOutline: false,
        
    };
  return (
    
    <div  className='hero-container' data-aos='zoom-in'>
       
       <div className='over' >  
       <br/><br/>
      
        <span className='heroFont font-effect-neon'>
      
            <Typewriter 
            loop
            cursor
            cursorStyle="|"
            typeSpeed={20}
            deleteSpeed={80}
            words={['Softgenics']}
          />  
          
            </span>
            
            
      <p   className='design'>Website Designer  & Mobile App Development </p>
      <Book />
      
        </div>
        <div style={{width:'100%',height:'4rem', backgroundColor:'rgb(255, 55, 0)' }}></div>
        
       
       
        </div>
        
      
       
  )
}

export default HerosSection