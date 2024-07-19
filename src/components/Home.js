import React from 'react';
import Spline from '@splinetool/react-spline';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Skills from './Skills';  // Import the Skills component
import './Home.css';  // Import the CSS file for animations

const Home = () => {
  return (
    <div>
      <div>
        <h3 className="text-center">Thomas Andersen</h3>
        <h4 className="text-center">Web Developer</h4>
      </div>
      <div id="spline-container">
        <Spline scene="https://prod.spline.design/UlCAiLjoO4wFGTDj/scene.splinecode" />
      </div>
      <div className="content">
        <Skills />
        <Container>
          <Row className="my-4">
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>Description of project 1.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Project 2</Card.Title>
                  <Card.Text>Description of project 2.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Project 3</Card.Title>
                  <Card.Text>Description of project 3.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
