import React, { useEffect, useState } from 'react';
import { client, getImageUrl } from '../lib/sanity';
import MediaS1 from "../assets/MediaSection/MediaS1.jpg"

const MediaSection = () => {
  const [mediaContent, setMediaContent] = useState([]);
  const [loading, setLoading] = useState(true);

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
        // Fallback demo data
        setMediaContent([
          {
            _id: '1',
            title: 'Quality You Can Trust',
            type: 'image',
            image: { asset: { _ref: 'demo' } },
            description: 'Our bathroom essentials are crafted with precision and built to last, ensuring your bathroom remains beautiful and functional for years to come.',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading content...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 lg:space-y-16">
          {mediaContent.map((media, index) => (
            <div key={media._id} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {media.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {media.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors text-sm sm:text-base">
                  Learn More
                </button>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                {media.type === 'image' ? (

                  <div className="overflow-hidden rounded-lg shadow-lg group">
                    <img
                      // src={media.image?.asset ? getImageUrl(media.image) : MediaS1}
                      src={MediaS1}
                      alt={media.title}
                      className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>


                ) : (
                  <div className="w-full h-64 sm:h-80 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
                    <span className="text-gray-600">Video Content</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaSection;