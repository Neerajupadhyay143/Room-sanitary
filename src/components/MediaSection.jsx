import React, { useEffect, useState } from 'react';
import { client, getImageUrl } from '../lib/sanity';
import { Skeleton } from '@mui/material';
import MediaS1 from "../assets/MediaSection/MediaS1.jpg";
import MediaTake1 from "../assets/MediaSection/MediaTake1.mp4"
import { Link } from 'react-router-dom';

const MediaSection = ({ onWatchVideoClick }) => {
  const [mediaContent, setMediaContent] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(onWatchVideoClick);

  useEffect(() => {
    const fetchMediaContent = async () => {
      try {
        const query = `*[_type == "mediaSection"] | order(_createdAt desc) [0..1] {
          _id,
          title,
          type,
          image,
          video,
          description
        }`;

        const content = await client.fetch(query);
        setMediaContent(content);
      } catch (error) {
        console.error('Error fetching media content:', error);
        setMediaContent([
          {
            _id: '1',
            title: 'Quality You Can Trust',
            type: 'image',
            image: { asset: { _ref: 'https://via.placeholder.com/300x200?text=No+Image' } },
            description:
              'Our bathroom essentials are crafted with precision and built to last, ensuring your bathroom remains beautiful and functional for years to come.',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMediaContent();
  }, []);

  if (loading) {
    return (
      <div className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
          {[1, 2].map((_, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <Skeleton variant="text" width="60%" height={40} />
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="95%" height={20} />
                <Skeleton variant="rectangular" width={140} height={40} sx={{ borderRadius: 2 }} />
              </div>
              <div className="relative">
                <Skeleton variant="rectangular" height={320} sx={{ borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Image Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Premium Bathroom Essentials</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our bathroom essentials are crafted with precision and built to last, ensuring your bathroom remains beautiful and functional for years to come.
            </p>
            <Link to="/about">
              <button className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors text-sm sm:text-base">
                Learn More
              </button>
            </Link>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg group">
            <img
              src={MediaS1}
              alt="High Quality Image"
              className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

        </div>

        {/* Video Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video Left */}
          <div className="relative w-full h-64 sm:h-80 bg-black rounded-lg overflow-hidden shadow-lg">
            <video
              src={MediaTake1}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Text Right */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Experience in Action</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Watch how our products transform ordinary spaces into elegant retreats. Built with quality, designed for comfort.
            </p>
            <button
              onClick={onWatchVideoClick}
              className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors text-sm sm:text-base">
              Watch Video
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MediaSection;
