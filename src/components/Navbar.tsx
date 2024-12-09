
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">StreamNest</div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/browse" className="hover:underline">Browse</Link>
          <Link to="/upload" className="hover:underline">Upload</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          
          <div 
            onClick={toggleTheme} 
            className="relative w-14 h-8 flex items-center bg-gray-600 rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"
          >
            <div 
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                theme === 'light' ? 'translate-x-0' : 'translate-x-6'
              }`}
            ></div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
