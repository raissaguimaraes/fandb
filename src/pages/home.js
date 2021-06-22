import React from 'react';
import Header from '../components/organisms/header';
import Footer from '../components/organisms/footer';
import { Navbar, Container } from 'react-bootstrap/';
//import BodyPersonagens from '../components/organisms/bodyPersonagens';
import '../App.css';



//import { Episodios, Personagens, Header, Footer } from './pages';

const Home = () => {
  return (
    <div>
      <Header />
      <Container className="p-0 background-image" fluid={true}>
        
      </Container>
    </div>
  );
}

export default Home;