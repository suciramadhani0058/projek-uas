import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactSection.css'; /* import section kontak */

function ContactSection() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Hubungi Kami</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="text-center">
              Punya pertanyaan, saran, atau ingin reservasi? Jangan ragu untuk menghubungi kami melalui formulir di bawah ini
               atau informasi kontak kami.
            </p>
            <Row className="mb-4 text-center">
              <Col md={6}>
                <h4>Alamat</h4>
                <p>Jl.Melati Indah, Jawa Tengah, Indonesia</p>
              </Col>
              <Col md={6}>
                <h4>Telepon & Email</h4>
                <p>+62 856-4769-5804</p>
                <p>info@cafeselerarasa.com</p>
              </Col>
            </Row>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control type="text" placeholder="Masukkan nama Anda" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Masukkan email Anda" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridSubject">
                <Form.Label>Subjek</Form.Label>
                <Form.Control type="text" placeholder="Subjek pesan" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridMessage">
                <Form.Label>Pesan</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Tulis pesan Anda di sini..." />
              </Form.Group>

              <Button variant="primary" type="submit">
                Kirim Pesan
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;