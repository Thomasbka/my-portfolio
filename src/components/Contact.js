import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Spline from '@splinetool/react-spline';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:tolle_bka@hotmail.com?subject=Message from ${form.name}&body=${form.message} (Contact: ${form.email})`;
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6} className="border rounded py-3">
          <h3>Contact Me</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="py-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="py-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="py-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Enter your message"
                required
              />
            </Form.Group>

            <Button variant="light" type="submit" className="mt-3">
              Submit
            </Button>
            <div id="spline-container">
              <Spline scene="https://prod.spline.design/UlCAiLjoO4wFGTDj/scene.splinecode" />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
