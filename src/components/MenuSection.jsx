import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MenuItemCard from './MenuItemCard'; // Komponen terpisah untuk setiap item menu
//import gambar
import kopiImage from '../images/kopi.jpg'; 
import kopilatteImage from '../images/kopi-latte.jpg'; 
import kopi2Image from '../images/kopi2.jpg'; 
import carotcakeImage from '../images/carot-cake.jpg'; 
import croissantImage from '../images/croissant.png'; 
import chesecakeImage from '../images/cheese-cake.png'; 

function MenuSection() {
  const menuItems = [
    { id: 1, name: 'Kopi Susu Gula Aren', description: 'Kopi Susu dengan campuran gula aren', price: 'Rp 25.000', image:kopiImage },
    { id: 2, name: 'Cafe Latte', description: 'Kopi susu dengan rasa yang autentik', price: 'Rp 35.000', image:kopi2Image},
    { id: 3, name: 'Cappuccino', description: 'Kopi susu dengan foam lembut', price: 'Rp 35.000', image:kopilatteImage},
    { id: 4, name: 'Cheese Cake', description: 'Kue Keju yang lembut dan lezat', price: 'Rp 28.000', image:chesecakeImage },
    { id: 5, name: 'Carrot Cake', description: 'Kue Wortel yang lembut dan lezat', price: 'Rp 25.000', image:carotcakeImage},
    { id: 6, name: 'Croissant ', description: 'Pastry renyah yang sangat cocok dengan kopi', price: 'Rp 20.000', image:croissantImage},
    
  ];

  return (
    <section id="menu" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Menu Kami</h2>
        <p className="text-center mb-5">Ngopi & ngemil makin seru bareng menu favorit dari Selera Rasa</p>
        <Row xs={1} md={2} lg={3} className="g-4">
          {menuItems.map(item => (
            <Col key={item.id}>
              <MenuItemCard item={item} />
            </Col>
            
          ))}
          
      
        </Row>
      </Container>
      
    </section>
  );
}

export default MenuSection;