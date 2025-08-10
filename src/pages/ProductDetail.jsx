import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, getImageUrl } from '../lib/sanity';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from '@mui/material';

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
  title,
  slug,
  image,
  description,
  category,
  guarantee,
  installationType,
  material,
  flushType,
  waterproof, 
  pricing {
    unitPrice,
    basinPrice,
    combinedPrice,
    flushPlatePrice
  },
  variants[] {
    color,
    dimension,
    material,
    productCode,
    price
  },
  specifications[] {
    label,
    value
  }
}`;

        const currentProduct = await client.fetch(productQuery, { slug });
        setProduct(currentProduct);

        if (currentProduct?.category) {
          const relatedQuery = `*[_type == "product" && category == $category && slug.current != $slug][0...4] {
  _id,
  title,
  slug,
  image,
  shortDescription,
  pricing {
    combinedPrice,
    unitPrice,
    basinPrice
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

  const getFormattedDimensions = (dimensions) => {
    if (!dimensions) return null;
    if (dimensions.label) return dimensions.label;
    if (dimensions.length && dimensions.width && dimensions.height) {
      return `${dimensions.length} x ${dimensions.width} x ${dimensions.height} mm`;
    }
    return null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="mb-6 sm:mb-8">
            <Skeleton variant="text" width={150} height={30} />
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="lg:flex">
              {/* Image Skeleton */}
              <div className="lg:w-1/2">
                <Skeleton variant="rectangular" width="100%" height={320} />
              </div>

              {/* Text Content Skeleton */}
              <div className="lg:w-1/2 p-6 sm:p-8 space-y-4">
                <Skeleton variant="text" width={100} height={30} />
                <Skeleton variant="text" width="80%" height={40} />
                <Skeleton variant="text" width="50%" height={25} />
                <Skeleton variant="text" width="90%" height={25} />
                <Skeleton variant="text" width="70%" height={25} />
                <Skeleton variant="text" width="60%" height={25} />
                <Skeleton variant="rectangular" width="100%" height={80} />
              </div>
            </div>
          </div>

          {/* Related Product Skeleton */}
          <div className="mt-12">
            <Skeleton variant="text" width={200} height={40} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Skeleton variant="rectangular" width="100%" height={192} />
                  <div className="p-4">
                    <Skeleton variant="text" width="80%" height={30} />
                    <Skeleton variant="text" width="100%" height={20} />
                    <Skeleton variant="text" width="40%" height={25} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
          <div className="lg:flex items-center">
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src={product.image ? getImageUrl(product.image) : 'https://via.placeholder.com/600x400?text=No+Image'}
                alt={product.title}
                className="w-full h-80 object-contain"
              />
            </div>

            {/* Details */}
            <div className="lg:w-1/2 p-6 sm:p-8 space-y-4">
              {/* Category Tag */}
              {product.category && (
                <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm px-3 py-1 rounded-full">
                  {product.category}
                </span>
              )}

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {product.title}
              </h1>

              {/* Slug */}
              <p className="text-sm text-gray-500 font-semibold">Slug: {product.slug?.current}</p>

              {/* Pricing Section */}
              {product.pricing && (
                <div className="text-sm sm:text-base text-gray-700 space-y-1">
                  {product.pricing.unitPrice && <p><strong>Unit Price:</strong> £{product.pricing.unitPrice.toFixed(2)}</p>}
                  {product.pricing.basinPrice && <p><strong>Basin Price:</strong> £{product.pricing.basinPrice.toFixed(2)}</p>}
                  {product.pricing.flushPlatePrice && <p><strong>Flush Plate Price:</strong> £{product.pricing.flushPlatePrice.toFixed(2)}</p>}
                  {product.pricing.combinedPrice && <p><strong>Combined Price:</strong> £{product.pricing.combinedPrice.toFixed(2)}</p>}
                </div>
              )}

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 mt-4">
                {product.material && <p><strong>Material:</strong> {product.material}</p>}
                {product.guarantee && <p ><strong>Guarantee:</strong> <span className='font-semibold'>{product.guarantee}</span></p>}
                {product.flushType && <p><strong>Flush Type:</strong> {product.flushType}</p>}
                {product.installationType && <p><strong>Installation Type :</strong> {product.installationType}</p>}
                {product.waterproof && <p className="text-green-600 font-medium">✔ 100% Waterproof</p>}
              </div>

              {/* Description */}
              {product.description && (
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-semibold">{product.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Variants */}
        {product.variants?.length > 0 && (
          <div className="overflow-x-auto w-full mt-6">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border text-left">Color</th>
                  <th className="px-4 py-2 border text-left">Dimensions</th>
                  <th className="px-4 py-2 border text-left">Material</th>
                  <th className="px-4 py-2 border text-left">Product Code</th>
                  <th className="px-4 py-2 border text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {product.variants?.map((variant, index) => (
                  <tr key={index} className="even:bg-gray-50">
                    <td className="px-4 py-2 border">
                      {variant.color ? (
                        <div
                          className="w-6 h-6 rounded-full border border-gray-300 inline-block"
                          style={{ backgroundColor: variant.color }}
                          title={variant.color}
                        ></div>
                      ) : (
                        '-'
                      )}
                    </td>
                    <td className="px-4 py-2 border">
                      {variant.dimension || '-'}
                    </td>
                    <td className="px-4 py-2 border">
                      {variant.material || '-'}
                    </td>
                    <td className="px-4 py-2 border">
                      {variant.productCode || '-'}
                    </td>
                    <td className="px-4 py-2 border">
                      <span className='font-semibold'> {variant.price ? `£${variant.price.toFixed(2)}` : '-'}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        )}

        {/* Specifications */}
        {product.specifications?.length > 0 && (
          <div className="mt-10 bg-white rounded-lg shadow px-6 py-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {product.specifications.map((spec, i) => (
                <li key={i}>
                  <strong>{spec.label}:</strong> {spec.value}
                </li>
              ))}
            </ul>
          </div>
        )}


        {/* Related Products */}
        {relatedProducts?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => {
                const imageUrl = item.image ? getImageUrl(item.image) : 'https://via.placeholder.com/300x200?text=No+Image';

                // Price fallback logic
                const price =
                  item.pricing?.combinedPrice ??
                  item.pricing?.unitPrice ??
                  item.pricing?.basinPrice ??
                  null;

                return (
                  <Link
                    key={item._id}
                    to={`/products/${item.slug.current}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                  >
                    <img
                      src={imageUrl}
                      alt={item.title}
                      className="w-full h-48 object-contain"
                    />
                    <div className="p-4 bg-gray-100 flex flex-col h-full">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>

                      {item.shortDescription && (
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {item.shortDescription}
                        </p>
                      )}

                      {price != null && (
                        <p className="text-base font-bold text-gray-700 mt-auto">
                          £{price.toFixed(2)}
                        </p>
                      )}
                    </div>

                  </Link>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>

  );
};

export default ProductDetail;
