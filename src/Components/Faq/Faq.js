import React, { useState } from 'react'
import { Accordion, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Container ,Col } from "react-bootstrap";
import Aos from 'aos'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ReactCardFlip from 'react-card-flip';
import './Faq.css'

const Faq = () => {
  const [show, setIsShown]=useState(false)
  const [show2, setIsShown2]=useState(false)
  const [show3, setIsShown3]=useState(false)
  const [show4, setIsShown4]=useState(false)
  const [show5, setIsShown5]=useState(false)
  const [show6, setIsShown6]=useState(false)

  
  
  return (
    <>
<h1>Solution</h1>
<Container fluid >
<Row >
<Col md={4} className='d-flex justify-content-center'>

        <Card   as={Link} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false) } 
                  to={'/ApplicationLife'}   className='cardset'>
      <Card.Body><Card.Title className='cart-title'>  Application Lifecycle Management</Card.Title>
      <Card.Img  variant="top" src='images/hero/b3.webp' />
      
      </Card.Body>
    </Card>
    
    
       
  

</Col>
<Col md={4} className='d-flex justify-content-center'>

<Card  as={Link} 
                  to={'/Itservise'}  className='cardset' onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false) }>
      
      <Card.Body><Card.Title className='cart-title'>It services Management</Card.Title>
      <Card.Img variant="top" src='images/hero/m1.webp' />
        
      </Card.Body>
      
    </Card>
</Col>
<Col md={4} className='d-flex justify-content-center'>
<Card as={Link}
                  to={'/WorkManagement'}  className='cardset'onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false) }>
      <Card.Body> <Card.Title className='cart-title'>Work Management</Card.Title>
      <Card.Img variant="top" src='images/hero/b3.webp' />
       
      </Card.Body>
    </Card>

</Col>
<Col md={4} className='d-flex justify-content-center'>

<Card as={Link}
                  to={'/Marketing'}  className='cardset' onMouseEnter={() => setIsShown4(true)} onMouseLeave={() => setIsShown4(false) }>
      <Card.Body> <Card.Title className='cart-title'>Marketing</Card.Title>
      <Card.Img variant="top" src='images/hero/b4.webp' />
       
      </Card.Body>
    </Card> 
  

</Col>
<Col md={4} className='d-flex justify-content-center'>
<Card as={Link}
                  to={'/Business'}  className='cardset' onMouseEnter={() => setIsShown5(true)} onMouseLeave={() => setIsShown5(false) }>
      <Card.Body>
      <Card.Title className='cart-title'>Business Process Management</Card.Title>
      <Card.Img variant="top" src='images/hero/m8.jpg' />
        
      </Card.Body>
    </Card>

</Col>
<Col md={4} className='d-flex justify-content-center'>
<Card as={Link}
                  to={'/DataManagement'}  className='cardset' onMouseEnter={() => setIsShown6(true)} onMouseLeave={() => setIsShown6(false) }>
      <Card.Body>
      <Card.Title className='cart-title'>Data Management</Card.Title>
      <Card.Img variant="top" src='images/hero/m6.jpg' />
       
      </Card.Body>
    </Card>

</Col>
</Row>
</Container>
    </>
  )
}
 
      
        
export default Faq