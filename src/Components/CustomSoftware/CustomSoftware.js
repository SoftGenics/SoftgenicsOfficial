import React, { useEffect, useState } from 'react'
import { Container,Row ,Col } from 'react-bootstrap'
import './CustomSoftware.css'
import Aos from 'aos'
import "aos/dist/aos.css"

const CustomSoftware = () => {
  const [showp1, setShowp1] =useState(true);
  const [showp2, setShowp2] =useState(false);
  const [show1, setIsShown1]=useState(true);
    const [show2, setIsShown2]=useState(false);
    const [show3, setIsShown3]=useState(false);
    const [show4, setIsShown4]=useState(false);
    const [show5, setIsShown5]=useState(false);
    const pc=()=>{
      setShowp1(true);
      setShowp2(false)
    }
  const  Showbox1=()=>{
      setIsShown1(true)
      setIsShown2(false)
      setIsShown3(false)
      setIsShown4(false)
      setIsShown5(false)
      setShowp1(false);
      setShowp2(true)

    }
    const  Showbox2=()=>{
      setIsShown1(false)
      setIsShown2(true)
      setIsShown3(false)
      setIsShown4(false)
      setIsShown5(false)
      setShowp1(false);
      setShowp2(true)
      
    }
    const  Showbox3=()=>{
      setIsShown1(false)
      setIsShown2(false)
      setIsShown3(true)
      setIsShown4(false)
      setIsShown5(false)
      setShowp1(false);
      setShowp2(true)
     
    }
    const  Showbox4=()=>{
      setIsShown1(false)
      setIsShown2(false)
      setIsShown3(false)
      setIsShown4(true)
      setIsShown5(false)
      setShowp1(false);
      setShowp2(true)
     

    }
    const  Showbox5=()=>{
      setIsShown1(false)
      setIsShown2(false)
      setIsShown3(false)
      setIsShown4(false)
      setIsShown5(true)
      setShowp1(false);
      setShowp2(true)
     

    }

  useEffect(() =>{
    Aos.init({duration:2000});
    
  },[])
  return (
    <>

<div>
    <div id='tech'>
      <h1>Technology</h1>
      <p>Softgenics is a leading custom application development company in India. Our experts collaborate with high-end technologies and architectures to provide unique solutions to our clients. Some of the technologies we work with</p>
      <Container><Row className='tech-row'>
      <Col md={4} className='ourWork' sm={2} >

<p onMouseEnter={Showbox1} onMouseLeave={pc} className='fontend'
 ><a href="#">Frontend</a>
<h3 data-aos="fade-left" className='uderline'></h3>
</p>
<p onMouseEnter={Showbox2} onMouseLeave={pc} className='fontend'
><a href='#'>Backend</a>
<h3 data-aos="fade-left" className='uderline'></h3></p>

<p onMouseEnter={Showbox3} onMouseLeave={pc} className='fontend'><a href="#">Database</a>
<h3 data-aos="fade-left" className='uderline'></h3></p>  

{showp1 &&
<img src='/images/pc1.png' alt='pc' width={200}></img>}
{showp2 &&
<img src='/images/pc2.png' alt='pc' width={200}></img>}

  
{/* <p onMouseEnter={Showbox4} ><a href="#">Software</a>
<h3 data-aos="fade-left" className='uderline'>_________________________</h3>
</p>
<p onMouseEnter={Showbox4} ><a href="#">Server</a>
<h3 data-aos="fade-left" className='uderline'>_________________________</h3>
</p> */}


  
  
</Col>
<Col md={8}  sm={6} data-aos="fade-down" className='tech-row'>
          {show1 && (
        <div>
         
        
        <img src='images/forntend.png' alt='' className='image' ></img>
      
        </div>
      )}
       {show2 && (
        <div>
                
       <img src='images/backend.png' alt='' className='image'  ></img>
      

        </div>
      )}
 {show3 && (
        <div>
        <img src='images/database.png' alt='' className='image' ></img>
     
 
        </div>
      )}
       {show4 && (
        <div>
                <Row >
       
      
       <Col md={3}>
        <img src='images/database.png' alt='' className='image'></img>
        <h5>PHP</h5>
        </Col>
     </Row>

        </div>
      )}
    
</Col></Row>


    </Container>
    </div>
    </div>
    </>
  )
}

export default CustomSoftware