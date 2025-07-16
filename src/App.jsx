import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// Impor semua halaman 
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CustomerReviewsPage from "./pages/CustomerReviewsPage";  

function App() {
  return (
    <Router>
      <Header /> {}
      <main> {/*  tag main untuk konten utama */}
        <Routes>
          {/*  rute untuk setiap halaman */}
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reviews" element={<CustomerReviewsPage />}/>

          {/* Rute untuk halaman 404 (Not Found) */}
          <Route path="*" element={<h2>Halaman Tidak Ditemukan (404)</h2>} />
        </Routes>
      </main>
      <Footer /> {/* Footer akan selalu muncul di setiap halaman */}
    </Router>
  );
}

export default App;