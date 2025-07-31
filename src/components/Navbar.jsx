import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Phone, Menu, X } from 'lucide-react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BE</span>
            </div>
            <span className="text-xl font-bold text-gray-800 hidden sm:block">Bathroom Essentials</span>
            <span className="text-lg font-bold text-gray-800 sm:hidden">BE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Products
            </Link>
            <Link to="/retailers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Find a Retailer
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Search, Phone, and Social Icons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-32 lg:w-48"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
            
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="font-medium text-sm lg:text-base hidden xl:block">1-800-BATHROOM</span>
              <span className="font-medium text-sm lg:text-base xl:hidden">Call</span>
            </div>

            <div className="flex items-center space-x-1 lg:space-x-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-blue-600 transition-colors p-1">
                <FacebookIcon fontSize="small" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-pink-600 transition-colors p-1">
                <InstagramIcon fontSize="small" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-blue-700 transition-colors p-1">
                <LinkedInIcon fontSize="small" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2">
                About
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2">
                Products
              </Link>
              <Link to="/retailers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2">
                Find a Retailer
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2">
                Contact
              </Link>
              
              <form onSubmit={handleSearch} className="px-4 pt-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </form>
              
              <div className="px-4 pt-2">
                <div className="flex items-center space-x-2 text-gray-700 mb-4">
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">1-800-BATHROOM</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-blue-600 transition-colors">
                    <FacebookIcon />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                     className="text-gray-600 hover:text-pink-600 transition-colors">
                    <InstagramIcon />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                     className="text-gray-600 hover:text-blue-700 transition-colors">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;