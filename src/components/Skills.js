import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'CSS', icon: faCss3Alt },
  { name: 'HTML', icon: faHtml5 },
];

const Skills = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Skills</h2>
          <div className="skills-box">
            {skills.map(skill => (
              <FontAwesomeIcon key={skill.name} icon={skill.icon} className="floating-icon" />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
