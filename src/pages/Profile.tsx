import React from 'react'
import { User, Settings, Video } from 'lucide-react'

const Profile: React.FC = () => {
  // Mock user data (in a real app, this would be fetched from an API)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2023',
    uploadedVideos: 15,
    subscribers: 1000,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex items-center mb-6">
          <div className="bg-blue-600 text-white dark:text-white rounded-full p-3 mr-4">
            <User size={48} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600 dark:text-gray-400 dark:text-gray-300 dark:text-gray-400">{user.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-xl font-semibold">{user.uploadedVideos}</p>
            <p className="text-gray-600 dark:text-gray-400 dark:text-gray-300 dark:text-gray-400">Uploaded Videos</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-xl font-semibold">{user.subscribers}</p>
            <p className="text-gray-600 dark:text-gray-400 dark:text-gray-300 dark:text-gray-400">Subscribers</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-xl font-semibold">{user.joinDate}</p>
            <p className="text-gray-600 dark:text-gray-400 dark:text-gray-300 dark:text-gray-400">Joined</p>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white dark:text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center">
            <Video className="mr-2" size={18} />
            Manage Videos
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300 flex items-center">
            <Settings className="mr-2" size={18} />
            Account Settings
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile