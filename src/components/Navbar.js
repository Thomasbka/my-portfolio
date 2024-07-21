import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavigationBar = () => {
  return (
    <Navbar id="navbar" className="navbar-dark pb-5" bg="black" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/certificates">Certificates</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="navbar-icons">
        <Nav.Link href="https://linkedin.com/in/thomas-andersen-062258106" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </Nav.Link>
        <Nav.Link href="https://github.com/Thomasbka" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </Nav.Link>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
