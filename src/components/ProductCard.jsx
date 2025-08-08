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

  const hasPricing = product?.pricing && (
    product.pricing.unitPrice != null ||
    product.pricing.basinPrice != null ||
    product.pricing.combinedPrice != null
  );

  const isSanitaryware = product?.category === 'sanitaryware';
  const isBrassware = product?.category === 'brassware';

  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={product?.title || 'Product image'}
          className=" w-full h-60 object-contain  group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 bg-gray-100 space-y-2 sm:space-y-3 flex flex-col flex-grow">

        {/* Product Title */}
        {product?.title && (
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 bg-gray-300 p-2 text-center rounded-md">
            {product.title}
          </h3>
        )}

        {/* Variants and Info */}
        <div className='flex items-center justify-between'>
          {product?.variants?.[0]?.dimension && (
            <p className="text-sm text-gray-500 font-semibold">{product.variants[0].dimension}</p>
          )}
          <div className='flex flex-col gap-1 items-end'>
            {product?.guarantee && (
              <span className="font-medium">Guarantee: {product.guarantee}y</span>
            )}
            {product?.waterproof && (
              <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-semibold">100% Waterproof</span>
            )}
          </div>
        </div>

        {/* All Variants Styled Like Screenshot */}
        {product?.variants?.length > 0 && (
          <div className="mt-3 space-y-1">
            {product.variants.map((variant, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm p-1 rounded">
                <div className="flex items-center space-x-2">
                  {variant.productCode && (
                    <span className={`${isSanitaryware ? 'text-[#159890]' : isBrassware ? 'text-purple-600' : 'text-orange-600'} font-bold`}>
                      {variant.productCode}
                    </span>
                  )}
                  {variant.color && (
                    <span
                      className="w-4 h-4 rounded-full border border-gray-400 inline-block"
                      style={{ backgroundColor: variant.color }}
                      title={variant.color}
                    />
                  )}
                  {variant.material && (
                    <span className="text-gray-500 font-semibold">{variant.material}</span>
                  )}
                </div>
                {
                  variant.price != null && (
                    <span className="font-semibold text-gray-700">| Price : £{variant.price.toFixed(2)}</span>
                  )
                }
              </div>
            ))}
          </div>
        )}

        {/* Pricing */}
        
        {hasPricing && (
          <div className="text-sm text-gray-800 leading-6">
            <div className="flex items-center justify-between gap-4">
              <div className="w-1/2">
                {product.pricing.unitPrice != null && (
                  <p><strong>Unit:</strong> £{product.pricing.unitPrice.toFixed(2)}</p>
                )}
              </div>
              <div className="w-1/2 text-right">
                {product.pricing.basinPrice != null && (
                  <p><strong>Basin:</strong> £{product.pricing.basinPrice.toFixed(2)}</p>
                )}
              </div>
            </div>

            {/* Smart Total Price Logic */}
            <div className='flex items-center justify-between mt-1'>
              <p><strong>Total:</strong> <span className="text-base font-bold">
                £{
                  product.pricing.combinedPrice != null
                    ? product.pricing.combinedPrice.toFixed(2)
                    : product.pricing.unitPrice != null
                      ? product.pricing.unitPrice.toFixed(2)
                      : product.pricing.basinPrice != null
                        ? product.pricing.basinPrice.toFixed(2)
                        : 'N/A'
                }
              </span></p>
            </div>
          </div>
        )}

        {/* Specifications */}
        {product?.specifications?.length > 0 && (
          <div className="mt-2 text-sm text-gray-700">
            <ul className="list-disc pl-5 space-y-1">
              {product.specifications.slice(0, 3).map((spec, i) => (
                <li key={i}><strong>{spec.label}:</strong> {spec.value}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Spacer to push View Details down */}
        <div className="flex-grow" />

        {/* View Details */}
        <div className='mt-3'>
          {product?.slug?.current && (
            <Link
              to={`/products/${product.slug.current}`}
              className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-500 font-medium transition-colors text-sm"
            >
              <span>View Details</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div >
  );
};

export default ProductCard;
