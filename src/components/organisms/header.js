import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import BodyEpisodios from './bodyEpisodios';
import BodyPersonagens from './bodyPersonagens';
import '../../App.scss';
import '../../App.css';

const Header = () => {

	return(
       
    <Navbar bg="light" expand="lg" static="top" classname="mb-5 shadow">
        <Container>
            
            <Navbar.Brand> 
            <NavLink to="/Home"/>
                FanDB
            </Navbar.Brand>

            <Navbar.Toggle data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" />
            <Navbar.Collapse classname="navbar-collapse" id="navbarResponsive">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <ul class="navbar-nav ml-auto"></ul>
                    <NavLink to="/Home" classname="nav-item active">Home</NavLink>
                    <NavLink to="/Home" classname="nav-item">Personagens</NavLink>
                    <NavLink to="/Home"  classname="nav-item">Episodios</NavLink>
                </Nav>
                
            </Navbar.Collapse>
        </Container>
    </Navbar>

	)
}

export default Header;