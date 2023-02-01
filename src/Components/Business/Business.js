import React, {useEffect} from 'react'
import { Container , Row ,Col, Navbar} from 'react-bootstrap'
import '../ApplicationLife/Applicationlife.css';
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
    <div className='heroB'>
    <div className='overlap'>
    
    <h1>Business Management</h1>
      </div>
    </div>
    
    <div style={{width:'100%',height:'4rem', backgroundColor:'rgb(255, 55, 0)' }}></div>
    <div className='container'>
    <Row className='application'>
      
        <Col md={6}>
     
        <h2>Methodology aimed at optimizing business processes Management</h2>
    <p>SoftGenics team involves drawing the process diagram, using graphical objects, and then defining the attributes of these objects, for example, stipulating which person or system should perform a certain task 
    It involves analyzing the data produced and collected in the execution phase, it often includes statistical graphics such as Bams and KPIs. Decisions are made based on the analysis conducted during the monitoring stage 
</p>
         </Col>
         <Col md={6}>
            
         <img src='images/hero/sb.gif' alt='gif' className='imgage' ></img>
       
        </Col>
       


    </Row>
    
</div>
<div className=''>  
    <div className='container-fluid'>

  <Row>
  <h2 className='head2'>Our Business Process on- </h2>
        <Col md='1'></Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title> Design </Card.Title>
           <Card.Text className='card-text'>
         
Business analysts examine current business rules, conduct interviews with various stakeholders, and meet with management to discuss desired outcomes.


          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
           <Card.Text className='card-text'>
          <Card.Title>Modeling</Card.Title>
          
This stage involves drawing the process diagram,defining the attributes of these objects, stipulating  or system should perform a certain task.

          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Monitoring</Card.Title>
           <Card.Text className='card-text'>
Analyzing the data produced collected in the execution phase, it often includes statistical graphics such as Bams and KPIs. Decisions are made based on the analysis. 
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title> Optimization</Card.Title>
           <Card.Text className='card-text'>
         
          Optimization by Softgenics is the main goal of this stage is to make the needed changes to improve costs, time consumption, process, and the use of resources. 

          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Expert's Knowledge Base</Card.Title>
           <Card.Text className='card-text'>
          Softgenics is A self-service knowledge base is a centralized, organized collection of information about a product, service, department, or topic.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md='1'></Col>
    </Row>
    </div>

   </div>
   <FloatingWhatsapp />
    <Contact/>
    
    <Footer />


    </>

  )
}

export default ApplicationLife