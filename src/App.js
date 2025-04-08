import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Home = lazy(() => import('./pages/Home'));;
const FormPage = lazy(() => import('./pages/Form'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">React App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/form">Form</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
