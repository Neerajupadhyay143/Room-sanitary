import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, getImageUrl } from '../lib/sanity';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) return;

      try {
        const productQuery = `*[_type == "product" && slug.current == $slug][0] {
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

        const currentProduct = await client.fetch(productQuery, { slug });

        setProduct(currentProduct);

        if (currentProduct?.category) {
          const relatedQuery = `*[_type == "product" && category == $category && slug.current != $slug][0...4] {
        _id,
        name,
        slug,
        image,
        shortDescription,
        price {
          combinedPrice
        }
      }`;

          const related = await client.fetch(relatedQuery, {
            category: currentProduct.category,
            slug: slug,
          });

          setRelatedProducts(related);
        }
      } catch (error) {
        console.error('Error fetching product or related products:', error);
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
            className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-500 font-medium text-sm sm:text-base"
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
                  <span className="text-2xl sm:text-3xl font-bold text-gray-700">
                    €{product.price.combinedPrice.toFixed(2)}
                  </span>
                </div>
              )}


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

        {relatedProducts?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item._id}
                  to={`/products/${item.slug.current}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-gray-50"
                >
                  <img
                    src={item.image ? getImageUrl(item.image) : 'https://via.placeholder.com/300x200?text=No+Image'}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    {item.shortDescription && (
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.shortDescription}</p>
                    )}
                    {item.price?.combinedPrice && (
                      <p className="text-base font-bold text-gray-700 mt-2">
                        €{item.price.combinedPrice.toFixed(2)}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default ProductDetail;