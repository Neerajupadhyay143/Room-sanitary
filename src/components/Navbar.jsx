import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Phone, Menu, X } from 'lucide-react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../assets/logo/logo.png"
import Furniture from "../assets/Products/Furniture.png"
import sanatry from "../assets/Products/sanatry.png"
import PVC from "../assets/Products/PVC.png"
import workspace from "../assets/Products/Workspace.png"
import CONCEALED_SHOWERS from "../assets/Products/CONCEALED_SHOWERS.png"
import Brassware from "../assets/Products/Brassware.png"
import CISTERNS from "../assets/Products/CISTERNS.jpg"
import LED from "../assets/Products/LED.jpg"
import Waste_Accessories from "../assets/Products/Waste_Accessories.jpg"
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
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <Link to="/" className="hidden lg:inline-flex text-gray-700 hover:text-gray-500 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-500 transition-colors font-medium">
              About
            </Link>

            <div className=" group">
              <Link to="/products" className="text-gray-700 hover:text-gray-500 transition-colors font-medium">
                Products
              </Link>
              {/* Mega Menu */}
              <div className="absolute left-0 top-full w-full bg-white py-10 px-8 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Furniture */}
                  <Link to="/products?category=furniture" className="group relative block overflow-hidden rounded-md shadow-sm">
                    <img src={Furniture} alt="Furniture" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm text-black py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-semibold">Furniture</span>
                    </div>
                  </Link>

                  {/* Sanitaryware */}
                  <Link to="/products?category=sanitaryware" className="group relative block overflow-hidden rounded-md shadow-sm">
                    <img src={sanatry} alt="Sanitaryware" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm text-black py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-semibold">Sanitaryware</span>
                    </div>
                  </Link>

                  {/* Worktops */}
                  <Link to="/products?category=worktops" className="group relative block overflow-hidden rounded-md shadow-sm">
                    <img src={workspace} alt="Worktops" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm text-black py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-semibold">worktops
                      </span>
                    </div>
                  </Link>

                  {/* Concealed Showers */}
                  <Link to="/products?category=concealed-showers" className="group relative block overflow-hidden rounded-md shadow-sm">
                    <img src={CONCEALED_SHOWERS} alt="Concealed Showers" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm text-black py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-semibold">Concealed Showers</span>
                    </div>
                  </Link>

                  {/* Brassware */}
                  <Link to="/products?category=brassware" className="group relative block overflow-hidden rounded-md shadow-sm">
                    <img src={Brassware} alt="Brassware" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm text-black py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-semibold">Brassware</span>
                    </div>
                  </Link>

                  {/* Cisterns */}
                  <Link to="/products?category=cisterns" className="group relative block overflow-hidden rounded-md shadow-sm">
                    <img src={CISTERNS} alt="Cisterns" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm text-black py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-semibold">Cisterns</span>
                    </div>
                  </Link>

                  {/* Waste & Accessories */}
                  <Link to="/products?category=waste-accessories" className="group relative block overflow-hidden rounded-md shadow-sm">
                    <img src={Waste_Accessories} alt="Waste & Accessories" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm text-black py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-semibold">Waste & Accessories</span>
                    </div>
                  </Link>

                  {/* LED Mirrors */}
                  <Link to="/products?category=led-mirrors" className="group relative block overflow-hidden rounded-md shadow-sm">
                    <img src={LED} alt="LED Mirrors" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm text-black py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-semibold">LED Mirrors</span>
                    </div>
                  </Link>
                </div>
              </div>

            </div>


            <Link to="/Brochure" className="text-gray-700 hover:text-gray-500 transition-colors font-medium">
              Brochure
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-500 transition-colors font-medium">
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
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent w-48 lg:w-48"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>

            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="h-4 w-4 lg:h-5 lg:w-5" />
              <a href="tel:+447393282490" className="font-medium text-sm lg:text-base">
                <span className="hidden xl:block">+44 7393 282490</span>
                <span className="xl:hidden">Call</span>
              </a>

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
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-500 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-gray-500 transition-colors font-medium px-4 py-2">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-500 transition-colors font-medium px-4 py-2">
                About
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-gray-500 transition-colors font-medium px-4 py-2">
                Products
              </Link>
              <Link to="/Brochure" className="text-gray-700 hover:text-gray-500 transition-colors font-medium px-4 py-2">
                Brochure
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-500 transition-colors font-medium px-4 py-2">
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
                  <a href="tel:+447393282490" className="font-medium text-sm lg:text-base">
                    <span className=" xl:block">+44 7393 282490</span>
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-500 transition-colors">
                    <FacebookIcon />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    className="text-gray-700 hover:text-pink-600 transition-colors">
                    <InstagramIcon />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-500 transition-colors">
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