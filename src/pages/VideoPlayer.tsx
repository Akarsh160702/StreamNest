import React from "react";
import { useParams } from "react-router-dom";

const VideoPlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Construct the correct S3 video URL (replace with your actual S3 bucket URL)
  const videoUrl = `https://stream-nest.s3.us-east-2.amazonaws.com/${id}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-black aspect-video mb-6">
        <video controls className="w-full h-full">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className="text-2xl font-bold mb-2">{id}</h1>
    </div>
  );
};

export default VideoPlayer;
