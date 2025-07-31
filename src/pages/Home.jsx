import React from 'react';
import Banner from '../components/Banner';
import MediaSection from '../components/MediaSection';
import ProductSection from '../components/ProductSection';
import FAQSection from '../components/F&Q/FAQSection';

const Home = () => {
  return (
    <div>
      <Banner />
      <MediaSection />
      <ProductSection />
      <FAQSection />
    </div>
  );
};

export default Home;