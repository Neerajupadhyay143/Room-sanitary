import React from 'react';
import Banner from '../components/Banner';
import MediaSection from '../components/MediaSection';
import ProductSection from '../components/ProductSection';
import FAQSection from '../components/F&Q/FAQSection';
import VideoGallery from '../components/VideoG/VideoGallery.jsx';

const Home = () => {
  return (
    <div>
      <Banner />
      <MediaSection />
      <ProductSection />
      <FAQSection />
      <VideoGallery />
    </div>
  );
};

export default Home;