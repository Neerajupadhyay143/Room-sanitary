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
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-router-dom';

const Footer = () => {
  const categories = [
    { label: "Furniture", slug: "furniture", },
    { label: "Sanitaryware", slug: "sanitaryware", },
    { label: "Worktops", slug: "worktops", },
    { label: "Concealed Showers", slug: "concealed-showers", },
    { label: "Brassware", slug: "brassware", },
    { label: "Cisterns", slug: "cisterns", },
    { label: "Waste & Accessories", slug: "waste-accessories", },
    { label: "LED Mirrors", slug: "led-mirrors", },
  ];
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-[0_-4px_10px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* Instagram Feed */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Visit Our Instagram Feed</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
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
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
              >
                <Facebook className="h-4 w-4" />
                <span>Facebook</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/mirelobathrooms/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
            </li>

            <li>
              <a
                href="https://x.com/mirelobathrooms"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <span>
                  <svg
                    className="bg-white rounded-md"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                  </svg>
                </span>
                <span className="text-medium font-semibold">X</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/mirelobathrooms/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/channel/UCCAHYOKL0x1_bPPkOu50s9Q"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-red-500 transition-colors"
              >
                <Youtube className="h-4 w-4" />
                <span>YouTube</span>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/447393282490"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Whatsapp</span>
              </a>
            </li>
          </ul>

        </div>
        {/* products */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Products</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {categories.map((val) => (
              <>
                <li><Link key={val.slug}
                  to={`/products?category=${val.slug}`}>{val.label}</Link></li>
              </>
            ))}
          </ul>
        </div>
        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Useful Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {/* <li><Link to="/blogs">Blog</Link></li> */}
            <li><Link to="/privacyp">Privacy Policy</Link></li>
            <li><Link to="/t&c">Terms & Conditions</Link></li>
          </ul>
          {/* Company Links */}
          <div className='mt-5'>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about">About us</Link></li>
              {/* <li><Link to="/exports">Exports</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/wwr">Who we are</Link></li> */}
            </ul>
          </div>
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
      <div className=" px-4 text-sm text-gray-100 text-center w-full space-y-2 mb-4">
        <p >
          Made by <a href="http://techvedasoftware.com" target='_blank' rel="noopener noreferrer"> techvedasoftware.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
