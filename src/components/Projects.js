import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Financial Portfolio Manager',
      description: "A financial portfolio manager that allows users to add, edit and track their stock investments. Users can fetch live prices, see profit/loss, and track dividends over time. The user also has access to a sentiment analysis tool that gives an overall analysis of the market sentiment of a stock as well as the stock's confidence level. This analysis is based on the live financial articles. It also includes a little section that explains the key reasons for this.",
      image: '/financial-portfolio-manager.png',
      link:'https://financial-portfolio-manager-842a648c8184.herokuapp.com/',
    },
    {
      title: 'Airbnb-clone',
      description: 'A full-stack web application inspired by Airbnb, built with Ruby on Rails, ReactJS, and PostgreSQL. Users can create, update, and delete properties with image uploads (handled via AWS S3), book properties, and view available bookings dynamically. The app features ActiveStorage for image management, Action Mailer for email integration, and a responsive ReactJS frontend styled with SCSS. Authentication is managed with sessions and cookies, ensuring secure user interactions. 🔴 Please note that this is a portfolio project and not intended for actual use!',
      image: '/airbnb-clone.png',
      link:'https://fswd-airbnb-clone-905d31d1f8ba.herokuapp.com/',
    },
    {
      title: 'Floating Game',
      description: 'Working together with a colleague, using git and git hub for version control, we created a floating game using purely HTML, CSS and JS.',
      image: '/Floating-Game.png',
      link:'https://manobrawn.github.io/floating-game/',
    },
    {
      title: 'Calculator',
      description: 'Working together with a colleague, using git and github for version control, we created a fully functional calculator using purely HTML, CSS and JS.',
      image: '/Calculator.png',
      link: 'https://manobrawn.github.io/calculator/',
    },
    {
      title: 'To Do List',
      description: 'Fullstack Web-application that contains a to do list. This was created using Ruby on Rails.',
      image: '/To_Do_List.png',
      link: 'https://pure-plateau-84858-166fc0cd4586.herokuapp.com/',
    },
    {
      title: '10 Seconds Math Game',
      description: 'Created using pure JS, HTML and CSS. User needs to input the correct answer to a basic arithmetic equation. Such as 5 + 10. However, there is a time limit of 10 seconds for which the user can input the correct answer and progress to the next question.',
      image: '/10-sec-math-game.png',
      link: 'https://math-game-10sec.netlify.app',
    },
    {
      title: 'Dental Website Clone',
      description: 'Using ReactJS I cloned a very standard dental website specializing in root canal treatments. The site is in German and features appointment scheduling as well as detailed service descriptions.',
      image: '/Endoclin-clone.png',
      link: 'https://endoclin-clone.netlify.app',
    },
    {
      title: 'Currency Converter',
      description: 'This Currency Converter was created using ReactJS as well. The converter gets the daily currencies from an open-source API URL called frankfurter.app that contains foreign exchange rates, published by the European Central Bank.',
      image: '/Currency-converter.png',
      link: 'https://shielded-cove-53585-86b0c96935b5.herokuapp.com/',
    },
  ];

  const [expanded, setExpanded] = useState(projects.map(() => false));

  const toggleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const maxLength = 100;

  return (
    <section className="container border rounded">
      <h3 className="text-center my-4 text-uppercase"><u>Projects</u></h3>
      <Row className="my-4 g-4">
        {projects.map((project, index) => (
          <Col md={4} key={index} className="d-flex col-spacing">
            <Card className="mb-4 flex-fill">
              <Card.Img variant="top" src={project.image} alt={project.title} className="card-img-top" />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {expanded[index]
                    ? project.description
                    : `${project.description.substring(0, maxLength)}...`}
                </Card.Text>
                <div>
                  <Button
                    variant="link"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expanded[index] ? 'Read Less' : 'Read More'}
                  </Button>
                  <Button
                    variant="dark"
                    href={project.link}
                    target="_blank"
                    className="mt-2"
                  >
                    View Project
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Projects;
