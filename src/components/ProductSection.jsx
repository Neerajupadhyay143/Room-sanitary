import React, { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import ProductCard from "./ProductCard";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { getImageUrl } from "../lib/sanity"; // ✅ optimized image helper import

// Category Images
import Furniture from "../assets/Products/Furniture.png";
import Sanitaryware from "../assets/Products/sanatry.png";
import Worktops from "../assets/Products/Workspace.png";
import ConcealedShowers from "../assets/Products/CONCEALED_SHOWERS.png";
import Brassware from "../assets/Products/Brassware.png";
import Cisterns from "../assets/Products/CISTERNS.jpg";
import LED from "../assets/Products/LED.jpg";
import WasteAccessories from "../assets/Products/Waste_Accessories.jpg";
import s from "../assets/Products/s.jpg";
import s2 from "../assets/Products/s2.jpg";
import s3 from "../assets/Products/s3.jpeg";

const categories = [
  { label: "Furniture", slug: "furniture", img: Furniture },
  { label: "Sanitaryware", slug: "sanitaryware", img: Sanitaryware },
  { label: "Worktops", slug: "worktops", img: Worktops },
  { label: "Concealed Showers", slug: "concealed-showers", img: ConcealedShowers },
  { label: "Brassware", slug: "brassware", img: Brassware },
  { label: "Cisterns", slug: "cisterns", img: Cisterns },
  { label: "Waste & Accessories", slug: "waste-accessories", img: WasteAccessories },
  { label: "LED Mirrors", slug: "led-mirrors", img: LED },
];

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
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

        const result = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);

        // Demo data if sanity fails
        setProducts([
          {
            _id: "1",
            title: "Premium Shower Head",
            slug: { current: "premium-shower-head" },
            image: s,
            description: "Full description for Premium Shower Head.",
            price: 149.99,
            category: "shower",
          },
          {
            _id: "2",
            title: "Modern Bathroom Vanity",
            slug: { current: "modern-bathroom-vanity" },
            image: s2,
            description: "Full description for Modern Bathroom Vanity.",
            price: 899.99,
            category: "vanity",
          },
          {
            _id: "3",
            title: "LED Mirror with Touch Controls",
            slug: { current: "led-mirror-touch" },
            image: s3,
            description: "Full description for LED Mirror.",
            price: 299.99,
            category: "mirror",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-1 md:py-6 lg:py-12  px-4 md:px-12">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Products</h2>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/products?category=${cat.slug}`}
            className="group relative block overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={cat.img}
              alt={cat.label}
              loading="lazy" // ✅ lazy load category images
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className={`
                absolute bottom-0 left-0 w-full 
                bg-white/40 backdrop-blur-md text-black py-2 text-center 
                opacity-100 md:opacity-0 md:group-hover:opacity-100 
                transition-all duration-300
              `}
            >
              <span className="font-semibold">{cat.label}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Products Grid */}
      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from(new Array(3)).map((_, index) => (
            <Box key={index} className="rounded-lg overflow-hidden shadow-md p-4">
              <Skeleton variant="rectangular" height={180} className="rounded-md" />
              <Skeleton variant="text" height={30} width="80%" sx={{ mt: 2 }} />
              <Skeleton variant="text" height={20} width="60%" />
              <Skeleton variant="text" height={20} width="40%" />
            </Box>
          ))
          : products.slice(0, 3).map((product) => (
            <ProductCard
              key={product._id}
              product={{
                ...product,
                // ✅ Optimize Sanity image
                image: product.image
                  ? getImageUrl(product.image, { width: 500, quality: 75 })
                  : product.image,
              }}
            />
          ))}
      </div> */}
    </section>
  );
};

export default ProductSection;
