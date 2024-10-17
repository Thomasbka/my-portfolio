import React, { useState } from 'react';
import { Row, Col, Card, Modal } from 'react-bootstrap';
import './Certificates.css';

const Certificates = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const certificates = [
    {
      title: 'Frontend Development - Certificate',
      text: 'After working 1 month as a Frontend Developer at Kreativstorm I have received this certificate of completion. In the time working here I completed multiple projects together with colleagues utilizing git for version control.',
      imgSrc: '/kreativstorm-certificate.png',
    },
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
    {
      title: 'Ruby on Rails - Certificate',
      text: 'This is a certificate for the Fullstack Web-Developer course completed at Altcademy.',
      imgSrc: '/Ruby_on_Rails.png',
    },
  ];

  const handleShowModal = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCertificate(null);
  };

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-3">
      <div className="container py-3 border rounded">
        <h3>Certificates</h3>
        <p>Below you can find all of the certificates that I have earned so far studying my Fullstack Web-Developer Course at Altcademy as well as my certificate from working as a Frontend Developer Trainee at Kreativstorm.</p>
        <Row>
          {certificates.map((certificate, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card onClick={() => handleShowModal(certificate)} className="certificate-card" style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={certificate.imgSrc} alt="Certificate" />
                <Card.Body>
                  <Card.Title>{certificate.title}</Card.Title>
                  <Card.Text>
                    {expandedIndex === index ? certificate.text : `${certificate.text.slice(0, 60)}...`}
                  </Card.Text>
                  <span onClick={(e) => { 
                      e.stopPropagation(); 
                      toggleReadMore(index); 
                    }} 
                    style={{ color: 'blue', cursor: 'pointer' }}>
                    {expandedIndex === index ? 'Read less' : 'Read more'}
                  </span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal for displaying full-size certificate */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCertificate?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedCertificate?.imgSrc} alt="Full Certificate" className="img-fluid" />
            <p className="mt-3">{selectedCertificate?.text}</p>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
};

export default Certificates;
