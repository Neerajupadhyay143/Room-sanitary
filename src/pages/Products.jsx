import React, { useEffect, useState } from 'react';
import { Slider } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { client } from '../lib/sanity';
import { Drawer, IconButton } from "@mui/material";
import { Filter } from "lucide-react";
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
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [filterOpen, setFilterOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const categories = [
    'all',
    'furniture',
    'sanitaryware',
    'worktops',
    'concealed-showers',
    'brassware',
    'cisterns',
    'waste-accessories',
    'led-mirrors',
    'bath-panels'
  ];

  const demoProducts = [
    { _id: '1', name: 'Premium Shower Head', slug: { current: 'premium-shower-head' }, image: s, shortDescription: 'Experience luxury with our rainfall shower head featuring multiple spray patterns.', description: 'Full description for Premium Shower Head.', price: 149.99, category: 'shower', },
    { _id: '2', name: 'Modern Bathroom Vanity', slug: { current: 'modern-bathroom-vanity' }, image: s2, shortDescription: 'Sleek and functional vanity with ample storage space.', description: 'Full description for Modern Bathroom Vanity.', price: 899.99, category: 'vanity', },
    { _id: '3', name: 'LED Mirror with Touch Controls', slug: { current: 'led-mirror-touch' }, image: s3, shortDescription: 'Smart mirror with built-in LED lighting and touch controls.', description: 'Full description for LED Mirror.', price: 299.99, category: 'mirror', },
    { _id: '4', name: 'Ceramic Bathroom Sink', slug: { current: 'ceramic-bathroom-sink' }, image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } }, shortDescription: 'Stylish and durable ceramic sink for modern bathrooms.', description: 'Full description here...', price: 129.99, category: 'sink', },
    { _id: '5', name: 'Luxury Bathtub', slug: { current: 'luxury-bathtub' }, image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } }, shortDescription: 'Freestanding luxury bathtub for a relaxing bath experience.', description: 'Full description here...', price: 1199.99, category: 'bathtub', },
    { _id: '6', name: 'Wall Mounted Towel Rack', slug: { current: 'wall-mounted-towel-rack' }, image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } }, shortDescription: 'Chrome finish towel rack with multiple bars.', description: 'Full description here...', price: 49.99, category: 'accessories', },
    { _id: '7', name: 'Toilet Paper Holder', slug: { current: 'toilet-paper-holder' }, image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } }, shortDescription: 'Simple and elegant toilet paper holder.', description: 'Full description here...', price: 19.99, category: 'accessories', },
    { _id: '8', name: 'Anti-Slip Bath Mat', slug: { current: 'anti-slip-bath-mat' }, image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } }, shortDescription: 'Soft microfiber mat with anti-slip bottom.', description: 'Full description here...', price: 24.99, category: 'mat', },
    { _id: '9', name: 'Smart Toilet with Bidet', slug: { current: 'smart-toilet-bidet' }, image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } }, shortDescription: 'High-tech toilet with built-in bidet and auto flush.', description: 'Full description here...', price: 1499.99, category: 'toilet', },
    { _id: '10', name: 'Bathroom Storage Cabinet', slug: { current: 'bathroom-storage-cabinet' }, image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } }, shortDescription: 'Vertical cabinet for storing bathroom essentials.', description: 'Full description here...', price: 259.99, category: 'storage', },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] {
          _id, title, slug, image, description, category, guarantee, installationType,
          material, flushType, waterproof, 
          pricing { unitPrice, basinPrice, combinedPrice, flushPlatePrice },
          variants[] { color, dimension, material, productCode, price },
          specifications[] { label, value }
        }`;

        const fetchedProducts = await client.fetch(query);
        if (!fetchedProducts || fetchedProducts.length === 0) {
          setProducts(demoProducts);
          setFilteredProducts(demoProducts);
        } else {
          setProducts(fetchedProducts);
          setFilteredProducts(fetchedProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
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
    const categoryParam = searchParams.get('category');

    if (searchParam) setSearchQuery(searchParam);
    if (categoryParam) setSelectedCategory(categoryParam.toLowerCase());
  }, [searchParams]);

  useEffect(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product =>
        product.category?.toLowerCase() === selectedCategory
      );
    }

    // Search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name?.toLowerCase().includes(searchLower) || // For demo products
        product.title?.toLowerCase().includes(searchLower) || // For sanity products
        product.shortDescription?.toLowerCase().includes(searchLower) ||
        product.description?.toLowerCase().includes(searchLower)
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset page
  }, [products, selectedCategory, searchQuery]);


  // Pagination logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const applyPriceFilter = () => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) =>
        product.category?.toLowerCase() === selectedCategory
      );
    }

    // Search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name?.toLowerCase().includes(searchLower) ||
          product.title?.toLowerCase().includes(searchLower) ||
          product.shortDescription?.toLowerCase().includes(searchLower) ||
          product.description?.toLowerCase().includes(searchLower)
      );
    }

    // ✅ Price filter (slider based)
    filtered = filtered.filter((product) => {
      const price =
        product.price ||
        product.pricing?.unitPrice ||
        product.variants?.[0]?.price ||
        0;

      return price >= priceRange[0] && price <= priceRange[1];
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Discover our complete collection of premium MIRELO BATHROOMS
          </p>
        </div>
      </div>

      <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar (Categories + Price Filter) */}
          <div className=" hidden lg:block lg:col-span-1 space-y-6  sticky top-20 self-start h-fit">
            {/* Categories */}
            <div className="bg-white  p-4 rounded-lg shadow">
              <h2 className="font-semibold mb-3 text-lg">Categories</h2>
              <div className="flex flex-col gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-2 text-left rounded-md font-medium transition-colors text-sm ${selectedCategory === category
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="font-semibold mb-3 text-lg">Price Range</h2>

              <div className="px-2 py-4">
                <Slider
                  value={priceRange}
                  onChange={(e, newValue) => setPriceRange(newValue)}
                  valueLabelDisplay="auto"
                  min={0}
                  max={5000}
                  step={50}
                  sx={{ color: "#374151" }}
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>£{priceRange[0]}</span>
                  <span>£{priceRange[1]}</span>
                </div>
              </div>

              <div className='flex flex-col space-y-4'>
                <button
                  onClick={() => {
                    applyPriceFilter();
                  }}
                  className="mt-3 w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800"
                >
                  GO
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 5000]); // default range
                    applyPriceFilter(); // reset applied filter
                  }}
                  className=" bg-gray-500 text-white py-2 rounded-md hover:bg-gray-800"
                >
                  Reset
                </button>
              </div>
            </div>

          </div>

          {/* Product Grid */}
          <div className="lg:col-span-4">
            {/* Search Bar */}
            <div className="sticky top-0 z-20  pb-4">
              <div className="flex flex-row items-center justify-between space-x-4">
                {/* Search Input */}
                <div className="relative flex-1 max-w-full md:max-w-full lg:max-w-xs">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                   text-sm sm:text-base"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>

                {/* Mobile Filter Button */}
                <div className="flex-shrink-0 lg:hidden">
                  <IconButton onClick={() => setFilterOpen(true)}>
                    <Filter className="h-6 w-6 text-gray-700" />
                  </IconButton>
                </div>
              </div>
            </div>


            {/* Products */}
            {loading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
                {[...Array(6)].map((_, i) => (
                  <Box key={i} className="rounded-lg shadow-sm p-4 bg-white">
                    <Skeleton variant="rectangular" height={350} className="mb-4 rounded" />
                    <Skeleton width="80%" className="mb-2" />
                    <Skeleton width="60%" />
                  </Box>
                ))}
              </div>
            ) : currentProducts.length > 0 ? (
              <>
                <AnimatePresence>
                  <motion.div
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6"
                  >
                    {currentProducts.map((product) => (
                      <motion.div
                        key={product._id}
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-10 flex-wrap gap-2">
                  {/* Previous Arrow */}
                  <button
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-lg border text-sm sm:text-base transition-colors flex items-center justify-center ${currentPage === 1
                      ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                      : "bg-gray-700 text-white border-gray-700 hover:bg-gray-800"
                      }`}
                  >
                    <ArrowBackIos fontSize="small" />
                  </button>

                  {/* Page Numbers */}
                  {[...Array(totalPages)].map((_, i) => {
                    if (i + 1 >= currentPage - 2 && i + 1 <= currentPage + 2) {
                      return (
                        <button
                          key={i + 1}
                          onClick={() => handlePageChange(i + 1)}
                          className={`px-4 py-2 rounded-lg border text-sm sm:text-base transition-colors ${currentPage === i + 1
                            ? "bg-gray-700 text-white border-gray-700"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }`}
                        >
                          {i + 1}
                        </button>
                      );
                    }
                    return null;
                  })}

                  {/* Next Arrow */}
                  <button
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-lg border text-sm sm:text-base transition-colors flex items-center justify-center ${currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                      : "bg-gray-700 text-white border-gray-700 hover:bg-gray-800"
                      }`}
                  >
                    <ArrowForwardIos fontSize="small" />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg sm:text-xl text-gray-600">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </div>


        </div>
      </div>
      <Drawer
        anchor="left"
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        PaperProps={{
          sx: {
            width: "80%", // drawer width
            maxWidth: 320,
            padding: "16px",
          },
        }}
      >
        <h2 className="font-semibold text-lg mb-4">Filters</h2>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Categories</h3>
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setFilterOpen(false);
                }}
                className={`px-3 py-2 text-left rounded-md font-medium transition-colors text-sm ${selectedCategory === category
                  ? "bg-gray-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-3 text-lg">Price Range</h2>

          <div className="px-2 py-4">
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={5000}
              step={50}
              sx={{ color: "#374151" }}
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>£{priceRange[0]}</span>
              <span>£{priceRange[1]}</span>
            </div>
          </div>

          <div className='flex flex-col space-y-4'>
            <button
              onClick={() => {
                applyPriceFilter();
                setFilterOpen(false);
              }}
              className="mt-3 w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800"
            >
              GO
            </button>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setPriceRange([0, 5000]); // default range
                applyPriceFilter(); // reset applied filter
                setFilterOpen(false);
              }}
              className=" bg-gray-500 text-white py-2 rounded-md hover:bg-gray-800"
            >
              Reset
            </button>
          </div>

        </div>
      </Drawer>

    </div >
  );
};

export default Products;


