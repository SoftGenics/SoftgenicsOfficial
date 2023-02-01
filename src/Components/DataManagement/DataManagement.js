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
    <div className='heroD'>
    <div className='overlap'>
    
    <h1 >Data Management</h1>
      </div>
    </div>
    <div style={{width:'100%',height:'4rem', backgroundColor:'rgb(255, 55, 0)' }}></div>
    
    <div className='container'>
    <Row className='application'>
      
        <Col md={6}>
        <h2>Data management plays several roles in an organization’s data environment</h2>

        <p>Data management can increase the visibility of your organization’s data assets, making it easier for people to quickly and confidently find the right data for their analysis. Data visibility allows your company to be more organized and productive, allowing employees to find the data they need to better do their jobs. Aerospike delivers predictable performance, scales from gigabytes to petabytes, is strongly consistent, with unparalleled cross-datacenter replication for a true globally distributed real-time database. </p>        
</Col>
         <Col md={6}>
            
         <img src='images/hero/datamag.gif' alt='gif' className='imgage' ></img>
       
        </Col>
        <Col md={12}>
        </Col>



    </Row>
    
</div>
<div className=''>  
    <div className='container-fluid'>

  <Row>
  <h2 className='head2'>Our ITSM Process on- </h2>
        <Col md='1'></Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Data preparation</Card.Title>
           <Card.Text className='card-text'>
            
          Data preparation is used to clean and transform raw data into the right shape and format for analysis, including making corrections.</Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
           <Card.Text className='card-text'>
          <Card.Title> Data pipelines</Card.Title>
          Data pipelines enable the automated transfer of data from one system to another,providing a summary of its changes of Data.
          
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Data catalogs</Card.Title>
           <Card.Text className='card-text'>
          Data catalogs help manage metadata to create a complete picture of the data, and quality while also making the data easy to find</Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title> Data warehouses</Card.Title>
           <Card.Text className='card-text'>
          Data warehouses are places to consolidate various data sources, contend with data types businesses, provide a clear route for data analysis. </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Data governance</Card.Title>
           <Card.Text className='card-text'>
          Data governance defines standards, processes, and policies to maintain data security and integrity by our team.
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
    <Contact/>
    
    <Footer />



    </>

  )
}

export default ApplicationLife