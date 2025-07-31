import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../lib/sanity';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image ? getImageUrl(product.image) : 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=400'}
          alt={product.image?.alt || product.name}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
          {product.shortDescription}
        </p>
        {product.price && (
          <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
            ${product.price.toFixed(2)}
          </p>
        )}
        <Link
          to={`/products/${product.slug.current}`}
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm sm:text-base"
        >
          <span>View Details</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;