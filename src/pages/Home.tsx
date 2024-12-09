import React from 'react'
import { Link } from 'react-router-dom'
import { Play, Upload, Video, User } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to StreamNest</h1>
        <p className="text-xl mb-8">Your go-to platform for seamless video streaming and sharing</p>
        <div className="flex justify-center space-x-4">
          <Link to="/browse" className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center hover:bg-blue-700 transition duration-300">
            <Play className="mr-2" />
            Start Watching
          </Link>
          <Link to="/upload" className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center hover:bg-green-700 transition duration-300">
            <Upload className="mr-2" />
            Upload Video
          </Link>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <Video className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Diverse Content</h2>
          <p className="text-gray-600">Explore a wide range of videos from creators around the world.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <Upload className="mx-auto h-12 w-12 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Easy Uploads</h2>
          <p className="text-gray-600">Share your videos with our simple and fast upload process.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <User className="mx-auto h-12 w-12 text-purple-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Community</h2>
          <p className="text-gray-600">Connect with other creators and build your audience.</p>
        </div>
      </div>
    </div>
  )
}

export default Home