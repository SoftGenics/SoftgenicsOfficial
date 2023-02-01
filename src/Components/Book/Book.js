import React, {useEffect, useState, useRef} from "react"
import {Row, Col, Container,Form,   Modal} from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Book.css'


const Book=()=>{

const [model,Setmodel]=useState(true)
const form = useRef();
const [showModal, setShowModal] = useState(false);

const handleClose = () => setShowModal(false);
const handleShow = () => setShowModal(true);
const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Show drop down on mousehover
  const [showdropdown, setshowdropdown] = useState(false);
  const HandleShowDropDown = () => setshowdropdown(!showdropdown);

  //Modal state
 

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_bnhtkgs', 'template_pkccdsc', form.current, 'jpPQTGEnAduefl8Cg')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  }
return(<>

<button type="button"  className='btn btn-booking btn-primary'   onClick={closeMobileMenu && handleShow} >
  Book Online
</button>



   
<Modal show={showModal}
        onHide={handleClose}
        size="lg"
        className="auth-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>

<Form ref={form} onSubmit={sendEmail} className='login' >
     <div className='text-center d-inline mb-b'>
     
     </div>
        <Row>
          <Col md={12} sm={12}>
       
              <Form.Control type="text" className="form-control" name="name" placeholder="Full Name" />
              </Col>

                         <Col md={12} sm={12}>
                     
                         <Form.Control type="text" className="form-control" name="email" placeholder="Email" />
                         </Col>
                          </Row>
                         <Col md={12} sm={12}>
                       
                              <Form.Control type="tel" className="form-control" name="p_number" placeholder="Phone"/>
                            
                              <Form.Control as="textarea" className="form-control mb-3" rows="5" name="message" placeholder="Text here..."></Form.Control>
                         </Col>
                    <Row>
                    <Col md={12} sm={12}>
                       <button type="submit" className="submit" id="cf-submit" >Submit</button>
                       </Col>
                    </Row>
</Form>

   </Modal.Body>
  
</Modal>


</>)


}
export default Book;

