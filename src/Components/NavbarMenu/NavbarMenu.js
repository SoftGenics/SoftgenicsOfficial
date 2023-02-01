import React  from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container,NavDropdown,Nav} from 'react-bootstrap'
import './Navbar.css'

const NavbarMenu = () => {
    
  return (
    <div className='navstyle'>
         <Navbar collapseOnSelect expand="lg" className='navbarMenu' fixed='top'>
  <Container fluid>
 
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <img src='/images/21.png' className='logo'/>
  <Navbar.Collapse id="responsive-navbar-nav">
  
  
      <Nav
        className="ms-auto mx-5 py-4 px-3"
      >
        <Nav.Link  as={Link} to="/"  eventKey={2}  >Home</Nav.Link>
        <Nav.Link   href="#footer"   >About</Nav.Link>
        <NavDropdown title="Services" id="collasible-nav-dropdown"  >
        <NavDropdown.Item className='dowpH' ></NavDropdown.Item>
          <NavDropdown.Item className='dowp'  href="#design" >Design</NavDropdown.Item>
          <NavDropdown.Item className='dowp' href="#design" >Development</NavDropdown.Item>
          <NavDropdown.Item className='dowp'  href="#design" >
            Marketing
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Solution" id="collasible-nav-dropdown" className='dowpMenu'>
        <NavDropdown.Item className='dowpH' ></NavDropdown.Item>
          <NavDropdown.Item className='dowp'  as={Link} to="/Applicationlife"  eventKey={2}>Application Lifecycle Management</NavDropdown.Item>
          <NavDropdown.Item className='dowp' as={Link} to="/Itservise"  >IT service Management</NavDropdown.Item>
          <NavDropdown.Item className='dowp'  as={Link} to="/WorkManagement" >Work Management</NavDropdown.Item>
          <NavDropdown.Item className='dowp'  as={Link} to="/Business" >Business Process Management</NavDropdown.Item>
          <NavDropdown.Item className='dowp'  as={Link} to="/DataManagement" >Data Management</NavDropdown.Item>
          
      
          <NavDropdown.Item className='dowp' as={Link} to="/Marketing">
            Marketing
          </NavDropdown.Item>
        </NavDropdown>
        
        <Nav.Link  href="#contact" >
          Contact
        </Nav.Link>
      </Nav>
      {/* //<Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button> 
  </Form> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavbarMenu