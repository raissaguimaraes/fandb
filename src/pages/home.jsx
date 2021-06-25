import React from 'react';
import { Container, Nav, Navbar, NavLink} from 'react-bootstrap';
import Header from '../components/organisms/header';
import Search from '../components/organisms/search';
import Footer from '../components/organisms/footer';
import BodyEpisodios from '../components/organisms/bodyEpisodios';
import BodyPersonagens from '../components/organisms/bodyPersonagens';
import './../App.scss';
import './../App.css';

const Home = () => {
  return (
    <Container className="p-0 background-image" fluid={true}>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
      <Header />
      <Search />
        <div class="bodyContainer">
          <BodyEpisodios />
          <BodyPersonagens />
        </div>
      <Footer />
    </Container>
  );
}

export default Home;
