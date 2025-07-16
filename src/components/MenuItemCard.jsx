import React from 'react';
import { Card } from 'react-bootstrap';
import './MenuSection.css';

function MenuItemCard({ item }) {
  return (
    <Card className="menu-card">
      <Card.Img variant="top" src={item.image} alt={item.name} />
      <Card.Body className="menu-card-body">
        <Card.Title className="menu-card-title">{item.name}</Card.Title>
        <Card.Text className="menu-card-text">
          {item.description}
        </Card.Text>
        <div className="menu-card-price">{item.price}</div>
        <a href="#" class="btn btn-danger">Pesan Sekarang</a>
      </Card.Body>
    </Card>
  );
}

export default MenuItemCard;
