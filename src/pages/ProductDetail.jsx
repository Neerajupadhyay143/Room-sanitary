import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, getImageUrl } from '../lib/sanity';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) return;

      try {
        const query = `*[_type == "product" && slug.current == $slug][0] {
          _id,
          name,
          slug,
          image,
          shortDescription,
          description,
          price,
          category
        }`;
        
        const fetchedProduct = await client.fetch(query, { slug });
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
        // Fallback demo data
        setProduct({
          _id: '1',
          name: 'Premium Shower Head',
          slug: { current: 'premium-shower-head' },
          image: { asset: { _ref: 'demo' } },
          shortDescription: 'Experience luxury with our rainfall shower head featuring multiple spray patterns.',
          description: 'Transform your daily shower routine into a spa-like experience with our premium rainfall shower head. Featuring multiple spray patterns including rainfall, massage, and mist modes, this shower head is crafted from high-quality materials for lasting durability. The easy-clean nozzles prevent mineral buildup, while the universal connection fits most standard shower arms. With its sleek chrome finish and modern design, this shower head complements any bathroom decor.',
          price: 149.99,
          category: 'Shower',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Products</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="lg:flex">
            {/* Product Image */}
            <div className="lg:w-1/2">
              <img
                src={product.image ? getImageUrl(product.image) : 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800'}
                alt={product.image?.alt || product.name}
                className="w-full h-64 sm:h-80 lg:h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 p-6 sm:p-8">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 mb-6">
                {product.shortDescription}
              </p>

              {product.price && (
                <div className="mb-6">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <Heart className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Features</h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li>• Premium quality materials</li>
                    <li>• Easy installation</li>
                    <li>• Long-lasting durability</li>
                    <li>• Modern design</li>
                    <li>• Manufacturer warranty included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;