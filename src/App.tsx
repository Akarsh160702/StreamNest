
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Browse from './pages/Browse';
import VideoPlayer from './pages/VideoPlayer';
import Profile from './pages/Profile';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
