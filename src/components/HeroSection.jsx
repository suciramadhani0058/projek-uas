
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css'; 
import heroImage from '../images/coffee-making.jpg'; /*import gambar  untuk bg*/

function HeroSection() {
  return (
    <div
      className="hero-section text-white d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${heroImage})`, 
        minHeight: '80vh',
      }}
    >
      <Container className="text-center">
        <Row>
          <Col>
            <h1>Selamat Datang di Cafe Selera Rasa</h1>
            <p className="lead">Dari Hati, Untuk Setiap Selera</p>
            <Button variant="primary"
              size="lg"
              href="/menu"
              className="brown-button" >Lihat Menu Kami</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;