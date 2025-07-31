import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { client } from '../lib/sanity';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchParams] = useSearchParams();

  const categories = ['all', 'shower', 'vanity', 'mirror', 'toilet', 'accessories'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] | order(_createdAt desc) {
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
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback demo data
        const demoProducts = [
          {
            _id: '1',
            name: 'Premium Shower Head',
            slug: { current: 'premium-shower-head' },
            image: { asset: { _ref: 'demo' } },
            shortDescription: 'Experience luxury with our rainfall shower head featuring multiple spray patterns.',
            description: 'Full description here...',
            price: 149.99,
            category: 'shower',
          },
          {
            _id: '2',
            name: 'Modern Bathroom Vanity',
            slug: { current: 'modern-bathroom-vanity' },
            image: { asset: { _ref: 'demo' } },
            shortDescription: 'Sleek and functional vanity with ample storage space.',
            description: 'Full description here...',
            price: 899.99,
            category: 'vanity',
          },
          {
            _id: '3',
            name: 'LED Mirror with Touch Controls',
            slug: { current: 'led-mirror-touch' },
            image: { asset: { _ref: 'demo' } },
            shortDescription: 'Smart mirror with built-in LED lighting and touch controls.',
            description: 'Full description here...',
            price: 299.99,
            category: 'mirror',
          },
          {
            _id: '4',
            name: 'Luxury Toilet Seat',
            slug: { current: 'luxury-toilet-seat' },
            image: { asset: { _ref: 'demo' } },
            shortDescription: 'Comfortable and hygienic toilet seat with soft-close technology.',
            description: 'Full description here...',
            price: 89.99,
            category: 'toilet',
          },
          {
            _id: '5',
            name: 'Towel Warmer Rack',
            slug: { current: 'towel-warmer-rack' },
            image: { asset: { _ref: 'demo' } },
            shortDescription: 'Electric towel warmer to keep your towels cozy and dry.',
            description: 'Full description here...',
            price: 199.99,
            category: 'accessories',
          },
          {
            _id: '6',
            name: 'Spa Shower System',
            slug: { current: 'spa-shower-system' },
            image: { asset: { _ref: 'demo' } },
            shortDescription: 'Complete shower system with body jets and rainfall head.',
            description: 'Full description here...',
            price: 1299.99,
            category: 'shower',
          },
        ];
        setProducts(demoProducts);
        setFilteredProducts(demoProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover our complete collection of premium bathroom essentials
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;