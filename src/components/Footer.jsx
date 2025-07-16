import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const footerStyle = {
    backgroundColor: '#6d4c41', };
  return (
    <footer style={footerStyle} className="text-white py-4">
      <Container className="text-center">
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Cafe Selera Rasa. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;