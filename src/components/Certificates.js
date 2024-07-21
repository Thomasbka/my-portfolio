import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Certificates = () => {
  const certificates = [
    {
      title: 'HTML & CSS Development - Certificate',
      text: 'This is a certificate for the Fullstack Web-Developer course completed at Altcademy.',
      imgSrc: '/HTML_CSS.png',
    },
    {
      title: 'Javascript Programming - Certificate',
      text: 'This is a certificate for the Fullstack Web-Developer course completed at Altcademy.',
      imgSrc: '/JS.png',
    },
    {
      title: 'Dynamic Website Development - Certificate',
      text: 'This is a certificate for the Fullstack Web-Developer course completed at Altcademy.',
      imgSrc: '/Dynamic_Website_Development.png',
    },
    {
      title: 'ReactJS Development - Certificate',
      text: 'This is a certificate for the Fullstack Web-Developer course completed at Altcademy.',
      imgSrc: '/ReactJS_Development.png',
    },
    {
      title: 'Ruby Programming - Certificate',
      text: 'This is a certificate for the Fullstack Web-Developer course completed at Altcademy.',
      imgSrc: '/Ruby.png',
    },
  ];

  return (
    <section className="py-3">
      <div className="container py-3 border rounded">
        <h3>Certificates</h3>
        <p>Below you can find all of the certificates that I have earned so far studying my Fullstack Web-Developer Course at Altcademy.</p>
        <Row>
          {certificates.map((certificate, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={certificate.imgSrc} alt="Certificate" />
                <Card.Body>
                  <Card.Title>{certificate.title}</Card.Title>
                  <Card.Text>{certificate.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Certificates;
