import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Home() {

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#22262a' }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'white' }}>
          ShopKart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:"white"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home" style={{ color: 'white' }}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: 'white' }}>
              About Us
            </Nav.Link>
            <NavDropdown title={<span style={{color:"white"}}>Our Products</span>} >
              <NavDropdown.Item href="#action/3.1" >
                Product 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
                Product 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Product 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Product 4
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about" style={{ color: 'white' }}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;

