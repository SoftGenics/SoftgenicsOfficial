import React, { useEffect } from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

import './DesignProcess.css'
import Aos from 'aos'
import "aos/dist/aos.css"



const DesignProcess = () => {
  useEffect(() =>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
    <div>
    <Container fluid>
<Row>
<Col md={12} >
  <div className='develop' data-aos="slide-up">
  <h1 className='textprocess'>Our Development Process</h1>
  <img src='/images/banner-bg.gif' alt='process' />
  
  </div>
</Col> 
</Row>
</Container> 
  
   
    </div>
    
    </>
  )
}

export default DesignProcess