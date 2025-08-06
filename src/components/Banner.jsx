import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { client, getImageUrl } from '../lib/sanity';
import { motion } from 'framer-motion';
import { Skeleton, Box } from '@mui/material';

import Banner1 from "../assets/Banner/Banner1.jpg";
import Banner2 from "../assets/Banner/Banner2.jpg";
import Banner3 from "../assets/Banner/Banner3.jpg";
import Banner4 from "../assets/Banner/Banner4.jpg";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const fallbackImages = [
  { id: 'local-1', title: 'Elegant Bathroom Designs', image: Banner1 },
  { id: 'local-2', title: 'Smart Fixtures Collection', image: Banner2 },
  { id: 'local-3', title: 'Luxury Bathware', image: Banner3 },
  { id: 'local-4', title: 'Modern Styling Ideas', image: Banner4 },
];

const Banner = () => {
  const [bannerImages, setBannerImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBannerImages = async () => {
      try {
        const query = `*[_type == "bannerImage"] | order(_createdAt desc) {
          _id,
          title,
          image,
          link
        }`;

        const images = await client.fetch(query);
        setBannerImages(images);
      } catch (error) {
        console.error('Error fetching banner images:', error);
        setBannerImages([]); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchBannerImages();
  }, []);

  const activeImages = bannerImages.length > 0 ? bannerImages : fallbackImages;

  if (loading) {
    return (
      <Box className="h-64 sm:h-80 md:h-[70vh] w-full overflow-hidden relative">
        <Skeleton variant="rectangular" width="100%" height="100%" />
        <Box className="absolute inset-0 flex items-center justify-center">
          <Skeleton variant="text" width={200} height={40} />
        </Box>
      </Box>
    );
  }

  return (
    <div className="relative h-64 sm:h-80 md:h-[70vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        className="h-full text-white"
      >
        {activeImages.map((banner) => (
          <SwiperSlide

            key={banner._id || banner.id}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: banner.image?.asset
                    ? `url(${getImageUrl(banner.image)})`
                    : `url(${banner.image})`
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="relative h-full flex items-center justify-center px-4">
                <motion.div
                  className="text-center text-white max-w-4xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <motion.h1
                    className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    {banner.title || "Bathroom Essentials"}
                  </motion.h1>
                  <motion.p
                    className="text-base sm:text-xl md:text-2xl mb-4 sm:mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Transform Your Bathroom Experience
                  </motion.p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-8 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    Explore Products
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
