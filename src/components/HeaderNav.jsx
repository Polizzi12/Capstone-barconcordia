import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css';
import backgroundImage from '../assets/bar.jpg';
import Button from 'react-bootstrap/Button';
import Logo from '../assets/logo.jpg';

const HeaderNav = () => {
  return (
    <Navbar className='custom-navbar' expand="lg"  style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container>
        <Navbar.Brand href="#">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Home"><Button className='bb'>Home</Button></Nav.Link>
            <Nav.Link href="#Prodotti"><Button className='bb'>Prodotti</Button></Nav.Link>
            <Nav.Link href="#Prenota"><Button className='bb'>Prenota</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;