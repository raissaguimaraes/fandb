import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import '../../App.scss';

const Header = () => {

	return(
       
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
                    <Nav.Link classname="nav-item active" href="/home">Home</Nav.Link>
                    <Nav.Link classname="nav-item" href="/personagens">Personagens</Nav.Link>
                    <Nav.Link classname="nav-item" href="/episodios">Episodios</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Container>
    </Navbar>

	)
}

export default Header;