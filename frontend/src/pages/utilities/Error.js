import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const Error = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="display-1">404</h1>
      <h2>Page Under Construction</h2>
      <p>The page you are looking for does not exist.</p>
      <Button variant="warning" as={Link} to="/vehicles">Go to Home</Button>
    </Container>
  );
};

export default Error;
