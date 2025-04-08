import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';

const FormPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  const handleReset = () => {
    setFormData({ email: '', password: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <>
      <h2>Form Page</h2>
      {submitted && <Alert variant="success">Form submitted successfully!</Alert>}
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            isInvalid={!!errors.email}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            isInvalid={!!errors.password}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="me-2">Submit</Button>
        <Button variant="secondary" type="button" onClick={handleReset}>Reset</Button>
      </Form>

      {submitted && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Submitted Data</Card.Title>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Password:</strong> {formData.password}</p>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default FormPage;
