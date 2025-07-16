import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import bgImage from '../images/bg-kopi.jpg'; //import gmbar bg

function AboutSection() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Tentang Kami</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={bgImage} fluid rounded />
          </Col>
          <Col md={6}>
            <p className="lead">
              Cafe Selera Rasa didirikan dengan passion untuk menyajikan kopi berkualitas tinggi dan hidangan lezat dalam suasana yang nyaman dan ramah. 
              Kami percaya bahwa setiap cangkir kopi dan setiap hidangan memiliki cerita,
              dan kami berkomitmen untuk menciptakan pengalaman yang tak terlupakan bagi setiap pelanggan.
            </p>
            <p>
              Dengan biji kopi pilihan dari petani lokal dan bahan-bahan segar,
              kami memastikan kualitas terbaik di setiap sajian. Kunjungi kami dan rasakan sendiri kehangatan dan kelezatan di Cafe Selera Rasa!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;