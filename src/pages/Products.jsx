import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { client } from '../lib/sanity';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';
import { Skeleton, Box } from '@mui/material';
import s from "../assets/Products/s.jpg"
import s2 from "../assets/Products/s2.jpg"
import s3 from "../assets/Products/s3.jpeg"

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchParams] = useSearchParams();

  const categories = ['all', 'shower', 'vanity', 'mirror', 'toilet', 'accessories', 'furniture'];

  const demoProducts = [
    {
      _id: '1',
      name: 'Premium Shower Head',
      slug: { current: 'premium-shower-head' },
      image: s,
      shortDescription: 'Experience luxury with our rainfall shower head featuring multiple spray patterns.',
      description: 'Full description for Premium Shower Head.',
      price: 149.99,
      category: 'shower',
    },
    {
      _id: '2',
      name: 'Modern Bathroom Vanity',
      slug: { current: 'modern-bathroom-vanity' },
      image: s2,
      shortDescription: 'Sleek and functional vanity with ample storage space.',
      description: 'Full description for Modern Bathroom Vanity.',
      price: 899.99,
      category: 'vanity',
    },
    {
      _id: '3',
      name: 'LED Mirror with Touch Controls',
      slug: { current: 'led-mirror-touch' },
      image: s3,
      shortDescription: 'Smart mirror with built-in LED lighting and touch controls.',
      description: 'Full description for LED Mirror.',
      price: 299.99,
      category: 'mirror',
    },
    {
      _id: '4',
      name: 'Ceramic Bathroom Sink',
      slug: { current: 'ceramic-bathroom-sink' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Stylish and durable ceramic sink for modern bathrooms.',
      description: 'Full description here...',
      price: 129.99,
      category: 'sink',
    },
    {
      _id: '5',
      name: 'Luxury Bathtub',
      slug: { current: 'luxury-bathtub' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Freestanding luxury bathtub for a relaxing bath experience.',
      description: 'Full description here...',
      price: 1199.99,
      category: 'bathtub',
    },
    {
      _id: '6',
      name: 'Wall Mounted Towel Rack',
      slug: { current: 'wall-mounted-towel-rack' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Chrome finish towel rack with multiple bars.',
      description: 'Full description here...',
      price: 49.99,
      category: 'accessories',
    },
    {
      _id: '7',
      name: 'Toilet Paper Holder',
      slug: { current: 'toilet-paper-holder' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Simple and elegant toilet paper holder.',
      description: 'Full description here...',
      price: 19.99,
      category: 'accessories',
    },
    {
      _id: '8',
      name: 'Anti-Slip Bath Mat',
      slug: { current: 'anti-slip-bath-mat' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Soft microfiber mat with anti-slip bottom.',
      description: 'Full description here...',
      price: 24.99,
      category: 'mat',
    },
    {
      _id: '9',
      name: 'Smart Toilet with Bidet',
      slug: { current: 'smart-toilet-bidet' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'High-tech toilet with built-in bidet and auto flush.',
      description: 'Full description here...',
      price: 1499.99,
      category: 'toilet',
    },
    {
      _id: '10',
      name: 'Bathroom Storage Cabinet',
      slug: { current: 'bathroom-storage-cabinet' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Vertical cabinet for storing bathroom essentials.',
      description: 'Full description here...',
      price: 259.99,
      category: 'storage',
    },
    {
      _id: '11',
      name: 'LED Shower Panel',
      slug: { current: 'led-shower-panel' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Shower panel with LED lights and multiple jets.',
      description: 'Full description here...',
      price: 599.99,
      category: 'shower',
    },
    {
      _id: '12',
      name: 'Wall-Mounted Soap Dispenser',
      slug: { current: 'soap-dispenser' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Convenient soap dispenser for handwashing.',
      description: 'Full description here...',
      price: 29.99,
      category: 'accessories',
    },
    {
      _id: '13',
      name: 'Bathroom Shelf Set',
      slug: { current: 'bathroom-shelf-set' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Set of 3 wooden shelves for bathroom storage.',
      description: 'Full description here...',
      price: 89.99,
      category: 'storage',
    },
    {
      _id: '14',
      name: 'Frameless Glass Shower Enclosure',
      slug: { current: 'glass-shower-enclosure' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Minimalistic frameless glass design.',
      description: 'Full description here...',
      price: 1099.99,
      category: 'shower',
    },
    {
      _id: '15',
      name: 'Bathroom Faucet Set',
      slug: { current: 'bathroom-faucet-set' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Modern faucet set with chrome finish.',
      description: 'Full description here...',
      price: 199.99,
      category: 'faucet',
    },
    {
      _id: '16',
      name: 'Compact Bathroom Heater',
      slug: { current: 'bathroom-heater' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Wall-mounted heater for quick warmth.',
      description: 'Full description here...',
      price: 149.99,
      category: 'heater',
    },
    {
      _id: '17',
      name: 'Luxury Bath Towels Set',
      slug: { current: 'bath-towels-set' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Set of ultra-soft and absorbent towels.',
      description: 'Full description here...',
      price: 69.99,
      category: 'towels',
    },
    {
      _id: '18',
      name: 'LED Vanity Light Bar',
      slug: { current: 'led-vanity-light' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Bright LED lighting bar for vanities.',
      description: 'Full description here...',
      price: 79.99,
      category: 'lighting',
    },
    {
      _id: '19',
      name: 'Touchless Trash Can',
      slug: { current: 'touchless-trash-can' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Sensor-based trash bin for hygiene.',
      description: 'Full description here...',
      price: 99.99,
      category: 'accessories',
    },
    {
      _id: '20',
      name: 'Scented Bathroom Diffuser',
      slug: { current: 'bathroom-diffuser' },
      image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
      shortDescription: 'Keep your bathroom fresh and aromatic.',
      description: 'Full description here...',
      price: 39.99,
      category: 'fragrance',
    },
  ];
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] {
  _id,
  name,
  slug,
  image,
  shortDescription,
  description,
  price {
    unitPrice,
    basinPrice,
    combinedPrice
  },
  category
}`;



        const fetchedProducts = await client.fetch(query);
        if (!fetchedProducts || fetchedProducts.length === 0) {
          // Agar products nahi mile to fallback
          setProducts(demoProducts);
          setFilteredProducts(demoProducts);

          console.log("Fetched Products from Sanity:", fetchedProducts);

        } else {
          setProducts(fetchedProducts);
          setFilteredProducts(fetchedProducts);
        }

      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback demo data
        ;
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

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product =>
        product.category?.toLowerCase() === selectedCategory
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery]);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto">
              Discover our complete collection of premium bathroom essentials
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Filters */}
        <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 sm:px-4 rounded-lg font-medium transition-colors text-sm sm:text-base ${selectedCategory === category
                  ? 'bg-gray-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Products Grid or Skeleton */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[...Array(6)].map((_, i) => (
              <Box key={i} className="rounded-lg shadow-sm p-4 bg-white">
                <Skeleton variant="rectangular" height={350} className="mb-4 rounded" />
                <Skeleton width="80%" className="mb-2" />
                <Skeleton width="60%" />
              </Box>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg sm:text-xl text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
