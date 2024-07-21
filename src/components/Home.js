import React from 'react';
import Spline from '@splinetool/react-spline';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Skills from './Skills'; 
import Projects from './Projects';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div>
        <h3 className="text-center">Thomas Andersen</h3>
        <h4 className="text-center">Frontend Web-Developer</h4>
      </div>
      <div id="spline-container">
        <Spline scene="https://prod.spline.design/UlCAiLjoO4wFGTDj/scene.splinecode" />
      </div>
      <div className="content">
        <Skills />
        <Container>
          <Row className="my-4">
            <Col className="text-center">
              <hr/>
              <h2><u>CV</u></h2>
              <p className="cv-intro">
                Welcome to my portfolio.<br/> Below, you can find my detailed CV that outlines my skills, experience, and accomplishments. Feel free to browse through it to get a better understanding of my background and expertise. If you wish to keep a copy for your reference, you can download it using the button provided.
              </p>
              <Image 
                src="/Thomas_Andersen_CV.png" 
                alt="Thomas Andersen CV Preview" 
                style={{ maxWidth: '60%', height: 'auto' }} 
                className="cv-preview" 
              />
            </Col>
          </Row>
          <Row className="">
            <Col className="text-center">
              <Button 
                variant="light" 
                href="/Thomas Andersen_CV.pdf" 
                download
                className="download-button"
              >
                Download CV
              </Button>
              <hr/>
            </Col>
          </Row>
          <Projects/>
        </Container>
      </div>
    </div>
  );
}

export default Home;
