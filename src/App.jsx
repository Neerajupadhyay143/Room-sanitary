import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Retailers from './pages/Retailers';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/retailers" element={<Retailers />} />
            <Route path="/contact" element={<Contact />} />
            {/* Placeholder routes for footer links */}
            <Route path="/terms" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4"><h1 className="text-xl sm:text-2xl text-center">Terms & Conditions - Coming Soon</h1></div>} />
            <Route path="/privacy" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4"><h1 className="text-xl sm:text-2xl text-center">Privacy Policy - Coming Soon</h1></div>} />
            <Route path="/promotions" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4"><h1 className="text-xl sm:text-2xl text-center">Promotions - Coming Soon</h1></div>} />
            <Route path="/sitemap" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4"><h1 className="text-xl sm:text-2xl text-center">Site Map - Coming Soon</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;