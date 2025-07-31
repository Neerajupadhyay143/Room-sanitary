import React from 'react';
import Banner from '../components/Banner';
import MediaSection from '../components/MediaSection';
import ProductSection from '../components/ProductSection';

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <MediaSection />
      <ProductSection />
    </div>
  );
};

export default Home;