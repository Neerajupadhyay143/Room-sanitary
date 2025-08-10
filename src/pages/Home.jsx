import React, { useRef } from 'react';
import Banner from '../components/Banner';
import MediaSection from '../components/MediaSection';
import ProductSection from '../components/ProductSection';
import FAQSection from '../components/F&Q/FAQSection';
import VideoGallery from '../components/VideoG/VideoGallery.jsx';

const Home = () => {
  const videoGalleryRef = useRef(null);

  const scrollToVideoGallery = () => {
    if (videoGalleryRef.current) {
      videoGalleryRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Banner />
      <MediaSection onWatchVideoClick={scrollToVideoGallery} />
      <ProductSection />
      <div ref={videoGalleryRef}>
        <VideoGallery />
      </div>
      <FAQSection />



    </div>
  );
};

export default Home;
