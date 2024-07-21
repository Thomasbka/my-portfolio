import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Spline from '@splinetool/react-spline';

const Contact = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6} className="text-center border rounded py-3">
          <h3>Contact Me</h3>
          <p>If you have any questions or would like to get in touch, feel free to send me an email.</p>
          <p>
            <a href="mailto:tolle_bka@hotmail.com" className="btn btn-light">
              Send an Email
            </a>
          </p>
          <div id="spline-container">
            <Spline scene="https://prod.spline.design/UlCAiLjoO4wFGTDj/scene.splinecode" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
