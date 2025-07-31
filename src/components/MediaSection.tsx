import React, { useEffect, useState } from 'react';
import { client, getImageUrl } from '../lib/sanity';
import { MediaSection as MediaSectionType } from '../types';

const MediaSection: React.FC = () => {
  const [mediaContent, setMediaContent] = useState<MediaSectionType[]>([]);
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
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading content...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {mediaContent.map((media, index) => (
            <React.Fragment key={media._id}>
              {index % 2 === 0 ? (
                <>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {media.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {media.description}
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                      Learn More
                    </button>
                  </div>
                  <div className="relative">
                    {media.type === 'image' ? (
                      <img
                        src={media.image ? getImageUrl(media.image) : 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800'}
                        alt={media.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    ) : (
                      <div className="w-full h-80 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
                        <span className="text-gray-600">Video Content</span>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="relative md:order-first">
                    {media.type === 'image' ? (
                      <img
                        src={media.image ? getImageUrl(media.image) : 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800'}
                        alt={media.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    ) : (
                      <div className="w-full h-80 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
                        <span className="text-gray-600">Video Content</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {media.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {media.description}
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                      Learn More
                    </button>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaSection;