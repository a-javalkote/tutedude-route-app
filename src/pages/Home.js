import { Suspense } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Logo from '../logo.svg';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <h2 className="mt-4">Welcome to Our React App</h2>
          <p>This is the home page. Use the navigation bar to explore the form and learn more about this app.</p>
          <p><b>GitHub Link</b> : <Link to={"https://github.com/a-javalkote/tutedude-route-app"} target="_blank">Click Here</Link></p>
          <Row className="mt-4">
            <Col md={6}>
              <Image src={Logo} fluid rounded  className="App-logo" alt="logo" />
            </Col>
            <Col md={6}>
              <h4>Highlights:</h4>
              <ul>
                <li>Client-side routing with React Router</li>
                <li>Form validation using plain React</li>
                <li>Styling with React Bootstrap</li>
                <li>Performance optimization via lazy loading</li>
              </ul>
            </Col>
          </Row>
        </div>
      </Suspense>
    );
  };
export default HomePage;