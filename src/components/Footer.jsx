import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-[0_-4px_10px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* Instagram Feed */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Visit Our Instagram Feed</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <button
                key={index}
                className="w-full aspect-square flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg shadow transition"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                  <path d="M10 17l6-5-6-5v10z" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Social Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center space-x-2"><Facebook className="h-4 w-4" /><span>Facebook</span></li>
            <li className="flex items-center space-x-2"><Instagram className="h-4 w-4" /><span>Instagram</span></li>
            <li className="flex items-center space-x-2"><Twitter className="h-4 w-4" /><span>Twitter</span></li>
            <li className="flex items-center space-x-2"><Linkedin className="h-4 w-4" /><span>LinkedIn</span></li>
            <li className="flex items-center space-x-2"><Youtube className="h-4 w-4" /><span>YouTube</span></li>
            <li className="flex items-center space-x-2"><MessageCircle className="h-4 w-4" /><span>Whatsapp</span></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/exports">Exports</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/wwr">Who we are</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Useful Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/blogs">Blog</Link></li>
            <li><Link to="/privacyp">Privacy Policy</Link></li>
            <li><Link to="/t&c">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Talk To Us + Contact Info */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Talk To Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li className="flex items-center space-x-2">
              <Phone className="h-4 w-4 font-bold" /><span>+44 7393 282490
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4 font-bold" /><span>info@mirelo.co.uk
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* 📍 Company Address - Full Width */}
      <div className="border-t border-gray-700 mt-10 pt-6 px-4 text-sm text-gray-400 text-center w-full space-y-2 mb-4">
        <p>
          <a
            href="https://www.google.com/maps?q=The+Old+Ferrari+Garage,+Rugby+Road,+Brandon,+Coventry,+CV8+3GH"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors underline"
          >
            Unit H, Kelvin Road, Swindon, SN3 3JW


          </a>
        </p>

        <p className="mt-2">
          Mirelo LTD UK and Wales Registration Number: 12840417
        </p>
      </div>
    </footer>
  );
};

export default Footer;
