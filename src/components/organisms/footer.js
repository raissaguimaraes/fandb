import React from 'react';
import { Container } from 'react-bootstrap';
import '../../App.scss';
import '../../App.css';

//import { Container, Row, Col} from 'react-bootstrap/';

const Footer = () => {
  return (
    <Container>
    <body class="d-flex flex-column">
      <div id="page-content">
        <div class="container text-center">
          <div class="row justify-content-center">
            <div class="col-md-7">
              <h1 class="font-weight-dark mt-4">FanDB</h1>
              <p class="lead text">Explore informações sobre seus personagens e episodios favoritos aqui na FanDB!</p>
            </div>
          </div>
        </div>
      </div>
      <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
          <small>Copyright &copy; FanDB</small>
        </div>
      </footer>
    </body>
    </Container>
  );
}

export default Footer;