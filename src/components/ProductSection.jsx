import React, { useEffect, useState } from 'react';
import { client } from '../lib/sanity';
import ProductCard from './ProductCard';
import s from "../assets/Products/s.jpg";
import s2 from "../assets/Products/s2.jpg";
import s3 from "../assets/Products/s3.jpeg";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
          _id,
          name,
          slug,
          image,
          shortDescription,
          description,
          price,
          category
        }`;
        const result = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products from Sanity:", error);

    
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
        ];

        setProducts(demoProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <section className="py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0 ,3).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
