import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';


const HomePage = () => {
  return (
    <>
   

      {/* Main Content */}
      <Container className="my-5">
        <Row className="text-center">
          <Col>
            <h1>Welcome to My Project </h1><br /><br />
            <h2>"LOGIN SYSTEM WITH BLOG PROJECT"</h2><br /><br /><br />
            <h4>Objective :~</h4><br />
            <p>
            Develop a full-stack web application titled "Blog Management System" using React.js for the frontend and Node.js, Express, and MongoDB for the backend. This application support CRUD operations on blog posts with authentication and role-based access for admin and user roles. Key features include JWT-based authentication, bcrypt for password encryption, and cookie-based session management and also include otp signup method .
            </p>
            <Button variant="primary" size="lg">Learn More</Button>
          </Col>
        </Row>
      </Container>


    </>
  );
};

export default HomePage;
