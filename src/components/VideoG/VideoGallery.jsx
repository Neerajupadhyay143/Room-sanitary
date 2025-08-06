import React, { useEffect, useState } from 'react';
import { client } from '../../lib/sanity.js'; 
import { FaYoutube } from 'react-icons/fa';


const demoVideos = [
  {
    id: 1,
    title: "Hues By Hindware Italian Collection | Hindi",
    thumbnail: "https://img.youtube.com/vi/kX9bS9fJbTE/0.jpg",
    link: "https://www.youtube.com/watch?v=kX9bS9fJbTE",
  },
  {
    id: 2,
    title: "Hindware Italian Collection | Bigger. Bolder. Trendier",
    thumbnail: "https://img.youtube.com/vi/YgWReLL0Pq8/0.jpg",
    link: "https://www.youtube.com/watch?v=YgWReLL0Pq8",
  },
  {
    id: 3,
    title: "Sensor Faucets by Hindware | Touchfree is Carefree",
    thumbnail: "https://img.youtube.com/vi/3piu7zMJv-k/0.jpg",
    link: "https://www.youtube.com/watch?v=3piu7zMJv-k",
  },
  {
    id: 4,
    title: "Trine Wash Basin - A perfect blend of style and functionality",
    thumbnail: "https://img.youtube.com/vi/2PIhL17oINo/0.jpg",
    link: "https://www.youtube.com/watch?v=2PIhL17oINo",
  },
];

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const query = `*[_type == "videoGallery"]{
          _id,
          title,
          link,
          "thumbnail": thumbnail.asset->url
        }`;
        const data = await client.fetch(query);

        if (data && data.length > 0) {
          setVideos(data);
        } else {
          setVideos(demoVideos); // fallback
        }
      } catch (error) {
        console.error("Error fetching videos from Sanity:", error);
        setVideos(demoVideos); // fallback on error
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Video Gallery</h2>
        <div className="w-14 h-1 bg-gray-700 mx-auto mt-2 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {videos.map((video) => (
          <div key={video._id || video.id} className="text-center">
            <a
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block rounded-md overflow-hidden shadow-md group"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaYoutube className="text-red-600 text-5xl bg-white rounded-full p-2 shadow-lg" />
              </div>
            </a>
            <p className="mt-3 text-sm font-medium text-gray-800 px-2">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
