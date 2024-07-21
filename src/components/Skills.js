import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faCss3Alt, faHtml5, faBootstrap} from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'CSS', icon: faCss3Alt },
  { name: 'HTML', icon: faHtml5 },
  { name: 'Bootstrap', icon: faBootstrap},
];

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const icons = document.querySelectorAll('.floating-icon');
    const box = containerRef.current;

    const setInitialPositions = () => {
      const boxRect = box.getBoundingClientRect();
      const boxWidth = boxRect.width;
      const boxHeight = boxRect.height;

      icons.forEach(icon => {
        let x = Math.random() * (boxWidth - 50); 
        let y = Math.random() * (boxHeight - 50);
        let dx = (Math.random() - 0.5) * 4; 
        let dy = (Math.random() - 0.5) * 4;

        const moveIcon = () => {
          x += dx;
          y += dy;

          if (x <= 0 || x >= boxWidth - 50) {
            dx *= -1; 
            x = Math.max(0, Math.min(x, boxWidth - 50));
          }

          if (y <= 0 || y >= boxHeight - 50) {
            dy *= -1; 
            y = Math.max(0, Math.min(y, boxHeight - 50));
          }

          icon.style.transform = `translate(${x}px, ${y}px)`;
          requestAnimationFrame(moveIcon);
        };

        moveIcon();
      });
    };

    setInitialPositions();

    window.addEventListener('resize', setInitialPositions);

    return () => {
      window.removeEventListener('resize', setInitialPositions);
    };
  }, []);

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2 className="text-center"><u>Skills</u></h2>
          <div className="skills-box" ref={containerRef}>
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
