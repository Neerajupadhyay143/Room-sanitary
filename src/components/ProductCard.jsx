import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../lib/sanity.js';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  const imageUrl =
    product.image?.asset?._ref
      ? getImageUrl(product.image)
      : typeof product.image === 'string'
        ? product.image
        : 'https://via.placeholder.com/300x200?text=No+Image';
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={product?.image?.alt || product?.name || 'Product image'}
          className="w-full h-60 sm:h-56 object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>

      <div className="p-4 sm:py-6 min-h-full bg-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-500 transition-colors">
          {product?.name}
        </h3>

        {product?.shortDescription && (
          <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
            {product.shortDescription}
          </p>
        )}

        {product?.price && (
          <p className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">
            €{Number(product.price.combinedPrice).toFixed(2)}
          </p>
        )}

        {product?.slug?.current && (
          <Link
            to={`/products/${product.slug.current}`}
            className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-500 font-medium transition-colors text-sm sm:text-base"
          >
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
