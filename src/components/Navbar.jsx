import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Phone, Menu, X } from 'lucide-react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Banner1 from "../assets/Banner/Banner1.jpg"
import p1 from "../assets/Products/p1.jpeg"
import p2 from "../assets/Products/p2.jpeg"
import p3 from "../assets/Products/p3.jpeg"
import p4 from "../assets/Products/p4.jpeg"
import logo from "../assets/logo/logo.png"
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
    <nav className=" bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img
              src={logo}
              alt="Bathroom Essentials Logo"
              className="h-12 w-auto object-contain"
            />

          </Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>

            <div className=" group">
              <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                <span className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
                  Products
                </span>
              </Link>
              {/* Mega Menu */}
              <div className="absolute left-0 top-full w-[100%] bg-white py-10 px-8 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ">
                <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">

                  {/* Category Card */}
                  <Link to="/products?category=hues" className="group relative block overflow-hidden rounded-md shadow-sm">
                    <img
                      src={Banner1}
                      alt="HUES by Hindware"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Overlay Blur + Text */}
                    <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm text-black py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-semibold">HUES by Hindware</span>
                    </div>
                  </Link>


                  <Link to="/products?category=faucets" className="group relative block overflow-hidden rounded-md shadow-sm">
                    <img
                      src={p1}
                      alt="Faucets"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm text-black py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-semibold">Faucets</span>
                    </div>
                  </Link>

                  <Link to="/products?category=showers" className="group relative block overflow-hidden rounded-md shadow-sm">
                    <div className="overflow-hidden rounded-md shadow-sm">
                      <img
                        src={p2}
                        alt="Showers"
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm text-black py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300"><span className="font-semibold">Showers</span></div>
                  </Link>

                  {/* Add more cards below */}
                  <Link to="/products?category=divertors" className="group relative block overflow-hidden rounded-md shadow-sm">
                    <div className="overflow-hidden rounded-md shadow-sm">
                      <img
                        src={p3}
                        alt="Divertors Faucets"
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm text-black py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300"> <span className="font-semibold">Divertors Faucets</span></div>
                  </Link>

                  <Link to="/products?category=accessories" className="group relative block overflow-hidden rounded-md shadow-sm">
                    <div className="overflow-hidden rounded-md shadow-sm">
                      <img
                        src={p4}
                        alt="Bathroom Accessories"
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm text-black py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300"> <span className="font-semibold">Bathroom Accessories</span></div>
                  </Link>
                </div>
              </div>
            </div>


            <Link to="/Brochure" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Brochure
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
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48 lg:w-48"
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
    </nav >
  );
};

export default Navbar;