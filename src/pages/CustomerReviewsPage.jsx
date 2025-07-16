// src/pages/CustomerReviewsPage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CustomerReviewsPage.css';

/* import gambar review pelanggan*/
import  review1Image from '../images/review1.jpg';
import  review2Image from '../images/review2.jpg';
import  review3Image from '../images/review3.jpg';

function CustomerReviewsPage() {
  //  data review pelanggan
  const reviews = [
    {
      id: 1,
      name: 'Reysanda',
      rating: 5,
      comment: 'Kopi dan suasana di Cafe Selera Rasa sangat luar biasa! Pasti akan kembali lagi.',
      date: '10 Juni 2025',
      image: review1Image
    },
    {
      id: 2,
      name: 'Tiyas Nur ',
      rating: 4,
      comment: 'Pelayanan cepat dan ramah. Kue-kuenya juga enak. Sedikit ramai di jam sibuk.',
      date: '1 Juli 202',
      image: review2Image
    },
    {
      id: 3,
      name: 'Elisa Melani ',
      rating: 5,
      comment: 'Tempat favorit untuk bersantai dan menikmati kopi berkualitas tinggi. Sangat direkomendasikan!',
      date: '8 Mei 2025',
      image: review3Image
    },
  ];

  return (
    <div className="customer-reviews-section py-5">
      <Container>
        <h2 className="text-center mb-5">Apa Kata Pelanggan Kami?</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {reviews.map(review => (
            <Col key={review.id}>
              <Card className="h-100 shadow-sm">
              <Card.Body>
              <div className="text-center mb-3">
  <img
    src={review.image}
    alt={review.name}
    className="review-avatar mb-3"
  />
  <Card.Title>{review.name}</Card.Title>
  <Card.Subtitle>{'⭐'.repeat(review.rating)}</Card.Subtitle>
</div>
  <Card.Text className="card-text">
    {review.comment}
  </Card.Text>
</Card.Body>
                <Card.Footer className="text-muted text-end">
                  {review.date}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        {}
        <div className="text-center mt-5">
          {}
          {}
        </div>

        <div className="mt-5">
  <h4 className="text-center mb-4">Bagaimana Pengalaman Anda di Selera Rasa?</h4>
  <form className="review-form">
    <Row className="mb-3">
      <Col md={6}>
        <input
          type="text"
          placeholder="Nama Anda"
          className="form-control"
          required
        />
      </Col>
      <Col md={6}>
        <input
          type="email"
          placeholder="Email Anda"
          className="form-control"
          required
        />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={6}>
        <select className="form-control" required>
          <option value="">Rating</option>
          <option value="5">⭐ 5 - Sangat Puas</option>
          <option value="4">⭐ 4 - Puas</option>
          <option value="3">⭐ 3 - Cukup</option>
          <option value="2">⭐ 2 - Kurang</option>
          <option value="1">⭐ 1 - Buruk</option>
        </select>
      </Col>
      <Col md={6}>
        <input
          type="file"
          accept="image/*"
          className="form-control"
        />
      </Col>
    </Row>
    <div className="mb-3">
      <textarea
        className="form-control"
        rows="4"
        placeholder="Tulis ulasan Anda di sini..."
        required
      ></textarea>
    </div>
    <div className="text-center">
      <button type="submit" className="btn btn-primary px-4">
        Kirim Ulasan
      </button>
    </div>
  </form>
</div>

      </Container>
    </div>
  );
}

export default CustomerReviewsPage;