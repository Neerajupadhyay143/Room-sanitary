import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../lib/sanity';
import { Product } from '../types';
import ProductCard from './ProductCard';

const ProductSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] | order(_createdAt desc) [0..5] {
          _id,
          name,
          slug,
          image,
          shortDescription,
          description,
          price,
          category
        }`;
        
        const fetchedProducts = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback demo data
        setProducts([
          {
            _id: '1',
            name: 'Premium Shower Head',
            slug: { current: 'premium-shower-head' },
            image: { asset: { _ref: 'demo' } },
            shortDescription: 'Experience luxury with our rainfall shower head featuring multiple spray patterns.',
            description: 'Full description here...',
            price: 149.99,
            category: 'Shower',
          },
          {
            _id: '2',
            name: 'Modern Bathroom Vanity',
            slug: { current: 'modern-bathroom-vanity' },
            image: { asset: { _ref: 'demo' } },
            shortDescription: 'Sleek and functional vanity with ample storage space.',
            description: 'Full description here...',
            price: 899.99,
            category: 'Vanity',
          },
          {
            _id: '3',
            name: 'LED Mirror with Touch Controls',
            slug: { current: 'led-mirror-touch' },
            image: { asset: { _ref: 'demo' } },
            shortDescription: 'Smart mirror with built-in LED lighting and touch controls.',
            description: 'Full description here...',
            price: 299.99,
            category: 'Mirror',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading products...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium bathroom essentials designed to elevate your daily routine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;