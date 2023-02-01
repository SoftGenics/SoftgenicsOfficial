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
    <div className='heroIt'>
    <div className='overlap'>
    
    <h1 >IT Services Management</h1>
      </div>
    </div>
    <div style={{width:'100%',height:'4rem', backgroundColor:'rgb(255, 55, 0)' }}></div>
    <div className='container'>
    <Row className='application'>
      <Col md={12}>
    <h1>Information technology service management</h1></Col>
        <Col md={6}>
        <p>ITSM tools are often marketed as ITSM suites, which support a whole set of ITSM processes. At their core is usually a workflow management system for handling incidents, service requests, problems and changes. They usually also include a tool for a configuration management database. The ability of these suites to enable easy linking between incident, service request, problem and change records with each other and with records of configuration items from the CMDB, can be a great advantage. ITSM tools are also commonly referred to as ITIL tools. More than 100 tools are self-proclaimed ITSM or ITIL tools.[11] Software vendors whose ITSM tools fulfill defined functional requirements to support a set of ITIL processes, can obtain official approval, allowing them to use Axelos trademarks and an "ITIL process compliant" logo, under Axelos' ITIL Software Endorsement scheme.</p>
        
         </Col>
         <Col md={6}>
            
         <img src='images/hero/sIt.gif' alt='gif' className='imgage' ></img>
       
        </Col>



    </Row>
    
</div>
<br/>
    <div>  
    <div className='container-fluid'>

  <Row>
  <h2 className='head2'>Our ITSM Process on- </h2>
        <Col md='1'></Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Analyze the workflow </Card.Title>
           <Card.Text className='card-text'>
            
          The process of making an organization of system more efficient by implementing simple and more agile approaches.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
           <Card.Text className='card-text'>
          <Card.Title>Increased efficiency</Card.Title>
          rovide equipment and work space, and introduce the team members. In this scenario, one of your tasks is to fill out paperwork.

          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Fast time Service</Card.Title>
           <Card.Text className='card-text'>
          Some additional advantages include  content. The insights can be structured or unstructured, quantitative or qualitative.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>TechTarget</Card.Title>
           <Card.Text className='card-text'>
          Actionable insights are conclusions drawn from data that can be turned directly into an action or Transform data. 
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
    </div>
    </div>
    <br/>
   <FloatingWhatsapp />
<Contact />
<Footer />


    </>

  )
}

export default ApplicationLife