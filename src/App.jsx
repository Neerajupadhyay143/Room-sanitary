import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 👇 Lazy load your page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Retailers = lazy(() => import('./pages/Retailers'));
const Contact = lazy(() => import('./pages/Contact'));
const BrochurePage = lazy(() => import('./pages/BrochurePage'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

// 👇 Optional fallback UI
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500" />
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/retailers" element={<Retailers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Brochure" element={<BrochurePage />} />
              <Route path="*" element={<NotFound />} />
              {/* Placeholder routes for footer links */}
              <Route
                path="/terms"
                element={
                  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                    <h1 className="text-xl sm:text-2xl text-center">Terms & Conditions - Coming Soon</h1>
                  </div>
                }
              />
              <Route
                path="/privacy"
                element={
                  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                    <h1 className="text-xl sm:text-2xl text-center">Privacy Policy - Coming Soon</h1>
                  </div>
                }
              />
              <Route
                path="/promotions"
                element={
                  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                    <h1 className="text-xl sm:text-2xl text-center">Promotions - Coming Soon</h1>
                  </div>
                }
              />
              <Route
                path="/sitemap"
                element={
                  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                    <h1 className="text-xl sm:text-2xl text-center">Site Map - Coming Soon</h1>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
