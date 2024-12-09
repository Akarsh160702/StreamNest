import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listVideosFromS3 } from "../services/s3Service";

const Browse: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the list of videos from S3
    const fetchVideos = async () => {
      try {
        const videoList = await listVideosFromS3();
        setVideos(videoList);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.Key}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="relative">
              {/* Video preview in place of the image */}
              <Link to={`/video/${encodeURIComponent(video.Key)}`}>
                <video
                  src={`https://stream-nest.s3.us-east-2.amazonaws.com/${video.Key}`}
                  className="w-full h-48 object-cover"
                  muted
                  loop
                  autoPlay
                >
                  Your browser does not support the video tag.
                </video>
              </Link>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{video.Key}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
