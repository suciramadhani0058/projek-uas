import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutPage.css'; 
/*import gambar*/
import coffeeBeansImage from '../images/coffee-beans.jpg';
import coffeeMakingImage from '../images/coffee-making.jpg';
import cafeInteriorImage from '../images/cafe-interior.jpg'; 

function AboutPage() {
  return (
    <div className="about-page-container">
      {}
      <section className="about-hero text-center py-5">
        <Container>
          <h1>Tentang Selera Rasa</h1>
          <p className="lead">Menciptakan Pengalaman Lebih dari Sekadar Kopi</p>
        </Container>
      </section>

      {/* Bagian Apa Sih Selera Rasa Itu? */}
      <section className="about-section py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <Card className="about-card">
                {}
                <Card.Img variant="top" src={coffeeBeansImage} alt="Biji Kopi" className="img-fluid" />
              </Card>
            </Col>
            <Col md={6}>
              <h2>Apa Sih Selera Rasa Itu?</h2>
              <p>Selera Rasa menyajikan Destinasi Rasa yang Unik. Selera Rasa adalah kafe dengan atmosfer industrial modern berpadu sentuhan etnik lokal.</p>
              <p>Kami berkomitmen untuk menyediakan pengalaman kopi terbaik, dari biji pilihan hingga secangkir sempurna.</p>
            </Col>
          </Row>

          {/* Bagian Perjalanan Kuliner di Setiap Sajian */}
          <Row className="align-items-center flex-md-row-reverse mb-5">
            <Col md={6}>
              <Card className="about-card">
                {/* Pastikan path gambar sesuai dengan penempatan Anda */}
                <Card.Img variant="top" src={coffeeMakingImage} alt="Pembuatan Kopi" className="img-fluid" />
              </Card>
            </Col>
            <Col md={6}>
              <h2>Perjalanan Kuliner di Setiap Sajian</h2>
              <p>Kami menawarkan berbagai macam minuman kopi, serta minuman segar lainnya. Nikmati juga pastry segar
                 dan hidangan utama yang memadukan tradisional dan modern, semua dibuat dengan kualitas terbaik.</p>
              <p>Setiap sajian kami adalah hasil dari dedikasi dan passion untuk cita rasa.</p>
            </Col>
          </Row>

          {/* Bagian Pusat Komunitas dan Inspirasi */}
          <Row className="align-items-center">
            <Col md={6}>
              <Card className="about-card">
                {}
                <Card.Img variant="top" src={cafeInteriorImage}  alt="Interior Cafe" className="img-fluid" />
              </Card>
            </Col>
            <Col md={6}>
              <h2>Pusat Komunitas dan Inspirasi</h2>
              <p>Lebih dari sekadar kafe, Selera Rasa adalah tempat yang nyaman untuk bekerja atau bersantai.
                 Kami menyediakan suasana yang hangat dan menginspirasi untuk setiap kunjungan Anda.</p>
              <p>Jadikan Selera Rasa titik temu favorit Anda untuk berkumpul, berdiskusi, atau sekadar menikmati waktu luang.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Bagian Call to Action di Bawah (seperti footer) */}
      <section className="about-cta text-center py-5">
        <Container>
          <h3>Datang dan jadilah bagian dari kisah rasa kami!</h3>
        </Container>
      </section>
    </div>
  );
}

export default AboutPage;