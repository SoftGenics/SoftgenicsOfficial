import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faMapMarkerAlt, faPhone, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import './Footer.css'
import { Container,Row ,Col } from "react-bootstrap";
import {FaFacebook , FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelopeOpenText} from 'react-icons/fa';
import Aos from 'aos'
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'


const Footer = () => {
  return(
    <>
   
    <footer className="completeFooter  text-center">
    <Container >
      <Row>
      <Col md={3}>

          <h4>About Us</h4>
          <h4 data-aos="fade-right" className="underline"></h4>

          <p className="AboutSoftgenics">
          SoftGenics is one of the most affordable, low cost website design company offering best services with reasonable price . 
          
          
          <i class="fa-solid fa-envelope-circle-check"><p><a href="mailto:softgenics.private@gmail.com" className="cont"><FaEnvelopeOpenText/></a>softgenics.private@gmail.com</p></i>
          <i class="fa-solid fa-mobile-screen-button"> <p><a href="tel:9380359418" className="cont"><FaPhoneAlt/></a>(+91) 9380359418</p></i>
        </p>
        </Col>

        <Col md={3}>
          <h4>Contact Us</h4>
          <h4 data-aos="fade-right" className="underline"></h4>
     
            <ul className="list-unstyled">
            <li className="officeName">Patna</li>
           
            <li>
            <a href="https://www.google.com/maps/dir/25.5711566,85.1583054/buddha+subhash+enclave+jaganpura/@25.5753501,85.1469421,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x39f2a77ed9bbd073:0xd27834b8a03b3a50!2m2!1d85.1500086!2d25.5822669" className="text-white mt-1">
            <FontAwesomeIcon icon={faMapMarkerAlt}  className="footerPhone"/>
            <i className="ml-1">Budha Shubash Enclave,New Jaganpura,Patna,Bihar,800027</i>
            </a>           
             </li>
             <li>
              <a  className="text-white mt-1"
                href="https://wa.me/919380359418"
              target="_blank"
           rel="noopener noreferrer">
              
                 <FontAwesomeIcon icon={faPhone}  className="footerPhone"/>
                 <i className="ml-1">9380359418</i>
              </a>
            </li>
           
        </ul>
        <ul  className="list-unstyled ml-5">
      
      <li className="officeName">USA</li>
              
        <li>
        <a href="https://www.google.com/maps/dir/25.5711566,85.1583054/buddha+subhash+enclave+jaganpura/@25.5753501,85.1469421,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x39f2a77ed9bbd073:0xd27834b8a03b3a50!2m2!1d85.1500086!2d25.5822669" className="text-white mt-1">
        <FontAwesomeIcon icon={faMapMarkerAlt}  className="footerPhone"/>
        <i className="ml-1"> Intersection Dale/ Benwood
        Anaheim, California -  92804
        USA</i>
        </a>           
         </li>
         <li>
          <a  className="text-white mt-1"
            href="https://wa.me/1949 299 9667"
          target="_blank"
       rel="noopener noreferrer">
          
             <FontAwesomeIcon icon={faPhone}  className="footerPhone"/>
             <i className="ml-1">+1 949 299 9667</i>
          </a>
        </li>
        </ul>
       
        
        
        
          </Col> 
          <Col md={3}>
          <h4>Queeck Links</h4>
          <h4 data-aos="fade-right" className="underline"></h4>
          <ul  className="list-unstyle ml-5">
        <li className='dowp'>Home</li>
        <li className='dowp'  as={Link} to="/Applicationlife"  eventKey={2}>Application Lifecycle Management</li>
          <li className='dowp' as={Link} to="/Itservise"  >IT service Management</li>
          <li className='dowp'  as={Link} to="/WorkManagement" >Work Management</li>
          <li className='dowp'  as={Link} to="/Business" >Business Process Management</li>
          <li className='dowp'  as={Link} to="/DataManagement" >Data Management</li>
          
      
          <li  className='dowp' as={Link} to="/WorkManagement">
            Marketing
          </li>

       
     
      </ul>
      <div className="social-foot">
            <a href='https://www.facebook.com/profile.php?id=100075713184173'  className="s-img"> <FaFacebook/></a>
            <a href=' https://www.instagram.com/invites/contact/?i=47yfmt8z04ya&utm_content=nyx3xmx'><FaInstagram/></a>
            <a href='https://wa.me/919380359418'><FaWhatsapp/></a>
            </div>
         </Col>
           <Col md={3}>
           
         
            <img src='images/hero/fgif.gif' alt='#' className="foot-img"></img>
           
            </Col>
            
   </Row>
  
    </Container>
    </footer>
    <div className="text-center p-3 copyright">
      © 2022 Copyright:
      <a className="text-white ml-2" href="https://mdbootstrap.com/">SoftGenics.com</a>
    </div>
    
    </>
  )
};

export default Footer;
