import React, { useEffect, useState, useRef } from "react";
import { client } from "../../lib/sanity.js";
import MediaTake1 from "../../assets/MediaSection/MediaTake1.mp4";
import MediaTake2 from "../../assets/MediaSection/MediaTake2.mp4";
import MediaTake3 from "../../assets/MediaSection/MediaTake3.mp4";
import MediaTake4 from "../../assets/MediaSection/MediaTake4.mp4";

const demoVideos = [
  {
    id: 1,
    title: "Hues By Mirelo Italian Collection – Elegant Bathroom Inspiration",
    link: MediaTake1,
  },
  {
    id: 2,
    title: "Luxury Overhead Shower – Bigger, Bolder, Trendier Design",
    link: MediaTake2,
  },
  {
    id: 3,
    title: "Premium Sensor Faucet – Touch-Free Water Flow for Modern Bathrooms",
    link: MediaTake3,
  },
  {
    id: 4,
    title: "Smart LED Mirror – Style Meets Functionality",
    link: MediaTake4,
  },
];

// Smart video component
const SmartVideo = ({ src, title }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => { });
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 } // play when 50% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className="relative block rounded-md overflow-hidden shadow-md">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        preload="none"
        className="w-full h-44 object-cover"
      />
    </div>
  );
};

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const query = `*[_type == "videoGallery"]{
          _id,
          title,
          "link": link.asset->url
        }`;
        const data = await client.fetch(query);

        if (data && data.length > 0) {
          setVideos(data);
        } else {
          setVideos(demoVideos); // fallback
        }
      } catch (error) {
        console.error("Error fetching videos from Sanity:", error);
        setVideos(demoVideos); // fallback
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Video Gallery
        </h2>
        <div className="w-14 h-1 bg-gray-700 mx-auto mt-2 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {videos.map((video) => (
          <div key={video._id || video.id} className="text-center">
            <SmartVideo src={video.link} />
            <p className="mt-3 text-sm font-medium text-gray-800 px-2">
              {video.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
