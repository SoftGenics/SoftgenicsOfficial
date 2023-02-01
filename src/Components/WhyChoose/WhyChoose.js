import React, {useEffect} from 'react'
import { Container , Row ,Col} from 'react-bootstrap'
import './WhyChoose.css'
import Aos from 'aos'
import "aos/dist/aos.css";

const WhyChoose = () => {
  useEffect(() =>{
    Aos.init({duration:2000});
  },[])
  return (
    <>  
      <div className='testimonial-container' >
        <h1>Why Choose SoftGenics</h1>
      </div>
      <Container data-aos="flip-left">
        <Row className='why-chos' data-aos="zoom-in">
          <Col md={6} className='p-cont'>
          <p className='para'><strong>S</strong>oftGenics is one of the most affordable, 
          low cost website design company offering
           best services with reasonable price .
           We have great expertise and vast experience in
            the field 
           Website and Mobile Application Development .
           The different areas of web design include web graphic design; user interface design (UI design); authoring, including standardised code and proprietary software; user experience design (UX design); and search engine optimization. Often many individuals will work in teams covering different aspects of the design process, although some designers will cover them all.[1] The term "web design" is normally used to describe the design process relating to the front-end (client side) design of a website including writing markup.</p>
          </Col>
          <Col md={6}>
            <img src='images/hero/g7.gif' alt='img' style={{width:'400px' , height:'400px'}}></img>
          </Col>
        </Row>
      </Container>
      
    </>

  )
}

export default WhyChoose