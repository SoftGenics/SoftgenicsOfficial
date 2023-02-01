import React, {useEffect} from 'react'
import { Container , Row ,Col, Navbar} from 'react-bootstrap'
import '../ApplicationLife/Applicationlife.css'
import Aos from 'aos'
import "aos/dist/aos.css";
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import { Card } from 'react-bootstrap';
import FloatingWhatsapp from '../FloatingWhatsapp';

const ApplicationLife= () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
  return (
    <>
    <Header/>
    <NavbarMenu />
    <div className='heroW'>
    <div className='overlap'>
    
    <h1>Our Work Management and Services</h1>
      </div>
    </div>
    
    
    <div style={{width:'100%',height:'4rem', backgroundColor:'rgb(255, 55, 0)' }}></div>
    <div className='container'>
    <Row className='application'>
      
   
        <Col md={6}>
        <h2>Easy to Use Work Management Platforms</h2>
<p>Softgenics team is about taking many of the different parts of managing a project as they relate to the team and integrating them into a work management system that boosts productivity. Therefore, work management touches many aspects of project management.
The work management process starts with Us for identifying the project scope, planning, scheduling, and then executing the work. But it doesn’t end there: follow-up is important. Use project status reports and work management tools to figure out what’s helping and what isn’t.

</p>
        
        
         </Col>
         <Col md={6}>
            
         <img src='images/hero/sw.gif' alt='gif' className='imgage' ></img>
       
        </Col>

      
       

    </Row>
    
</div>
<div className=''>  
    <div className='container-fluid'>

  <Row>
  <h2 className='head2'>Our Work Management Process on- </h2>
        <Col md='1'></Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Identify </Card.Title>
           <Card.Text className='card-text'>
          Identify To manage work, Softgenics and its team first have to define how, when and in what way that work is done. Be thorough and accurate.
            
      
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
           <Card.Text className='card-text'>
          <Card.Title>Plan</Card.Title>
            our Plan What work must be done. a work breakdown structure will make a time estimation of how long that work will take and the resources involved.

          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Schedule</Card.Title>
           <Card.Text className='card-text'>
         You have the work planned out and a timeline, now you have to create a work schedule, whether daily or weekly, to define workflow and responsibilities.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Document</Card.Title>
           <Card.Text className='card-text'>
          Always make a paper trail of the work management process to capture anything learned and the communications involved throughout.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Analyze</Card.Title>
           <Card.Text className='card-text'>
          We analyze finally, use the experience and documentation to refine your processes. Work management is a continuously improving system. </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md='1'></Col>
    </Row>
    </div>
</div>
    
  <br/>
   <FloatingWhatsapp />
    <Contact/>
    
    <Footer />


    </>

  )
}

export default ApplicationLife