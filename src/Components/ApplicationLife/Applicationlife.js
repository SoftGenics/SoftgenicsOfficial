import React, {useEffect} from 'react'
import { Container , Row ,Col, Navbar} from 'react-bootstrap'
import './Applicationlife.css'
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
   
    <div className='hero'>
    <div className='overlap'>
      
     <h1 >Softgenics application Management and Services</h1> 
    </div>
    </div>
    <div style={{width:'100%',height:'4rem', backgroundColor:'rgb(255, 55, 0)' }}></div>
    <div>
    
    <Container>
    <Row className='application'>
      
     
     <Col md={6}>
        <h2>Application Lifecycle Management</h2>
          <p>We Provide ALM to integrated system of people, tools and processes that supervise a software application from its initial planning and development, through testing and maintenance, and into decommissioning and retirement. By combining and organizing the elements of an application's lifecycle, ALM improves product quality, optimizes productivity and eases the management and maintenance burden for related products and services.
</p>
        </Col>
        
        
         <Col md={6}>
            
         <img src='images/hero/g7.gif' alt='gif'  ></img>
       
        </Col>
        
        
    </Row>
  <Row className=''>
  <h1 className='head2'>Our Application lifecycle Management </h1>
        <Col md='1'></Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>ALM stages </Card.Title>
          <Card.Text className='card-text'>
                  ALM helps give visibility to the development process. Because the process is integrated, you can see what progress has been made.

          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
         
          <Card.Title>Application governance</Card.Title>
          <Card.Text className='card-text'>
          Governance describes the decisions made an application. When you begin the process of creating a new application.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Application development</Card.Title>
           <Card.Text className='card-text'>
          After requirements for the application or update have been outlined and agreed to development can begin. </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Software testing</Card.Title>
           <Card.Text className='card-text'>
          Application has been developed it will need to be tested and bugs will need to be resolved before moving forward into production.  
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Expert's Knowledge Base</Card.Title>
           <Card.Text className='card-text'>
        A self-service knowledge base is a centralized, organized collection of information about a product, service, department, or topic.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md='1'></Col>
    </Row>

    </Container>
    </div>
    <br/>
    <FloatingWhatsapp/>
<Contact/>
    
    <Footer />
    
   
    


    </>

  )
}

export default ApplicationLife