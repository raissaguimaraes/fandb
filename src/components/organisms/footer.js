import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import '../../App.scss';

//import { Container, Row, Col} from 'react-bootstrap/';

const Footer = () => {
  return (
    <Navbar bg="light" expand="lg" static="top" classname="mb-5 shadow">
        <Container>
            <Navbar.Brand href="/home" >FanDB</Navbar.Brand>
            <Navbar.Toggle data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" />
            <Navbar.Collapse classname="navbar-collapse" id="navbarResponsive">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <ul class="navbar-nav ml-auto"></ul>
            
                </Nav>
                
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Footer;