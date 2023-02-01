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
   
    <div className='heroM'>
    <div className='overlap'>
    
    <h1 >Marketing Management</h1>
      </div>
    </div>
    <div style={{width:'100%',height:'4rem', backgroundColor:'rgb(255, 55, 0)' }}></div>
    
    <div className='container'>
    <Row className='application'>
      <Col md={12}>
    <h2>Marketing Management</h2></Col>
        <Col md={6}>
        <p>When people started to use more than just print media to endorse a product. As TV -- and soon, the internet -- entered households, marketers could conduct entire campaigns across multiple platforms. And as you might expect, over the last 70 years, marketers have become increasingly important to fine-tuning how a business sells a product to consumers to optimize success.

In fact, the fundamental purpose of marketing is to attract consumers to your brand through messaging. Ideally, that messaging will helpful and educational to your target audience so you can convert consumers into leads.</p>
         </Col>
         <Col md={6}>
            
         <img src='images/hero/sm.png' alt='jpg' className='imgage' ></img>
       
        </Col>



    </Row>
    
</div>
<div className=''>  
    <div className='container-fluid'>

  <Row>
  <h2 className='head2'>Our Marketing Process </h2>
        <Col md='1'></Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Product </Card.Title>
           <Card.Text className='card-text'>
            
          Governance describes the decisions made about an application. When you begin the process of creating a new application.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
           <Card.Text className='card-text'>
          <Card.Title>Price</Card.Title>
          Your marketing team will check out competitors' product prices, or use focus groups and surveys, to estimate ideal customer is willing to pay..

          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Place</Card.Title>
           <Card.Text className='card-text'>
          It's critical that your marketing department uses their understanding and analysis of your business's consumers to offer suggestions.          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Promotion</Card.Title>
           <Card.Text className='card-text'>
          This P is likely the one you expected from the get-go: promotion entails any online or print advertisement, event, or discount your marketing.          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={2}>
        <Card className='card-design'>
      
        <Card.Body>
        <Card.Title>Search engine optimization</Card.Title>
           <Card.Text className='card-text'>
          Abbreviated "SEO," this is the process of optimizing content on a website so that it appears in search engine results. It's used by marketers to attract people    </Card.Text>      </Card.Body>
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