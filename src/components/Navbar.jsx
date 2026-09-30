import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-[#0047FF] text-white px-8 py-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold flex items-center gap-2">
        <span className="text-[#D4FF00]">b</span> ByteSpace
      </Link>
      
      <div className="hidden md:flex gap-8 text-sm">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/" className="hover:text-gray-200">Courses</Link>
        <Link to="/" className="hover:text-gray-200">Creators</Link>
      </div>
      
      <div className="flex items-center gap-6 text-sm">
        <Link to="/login" className="hover:text-gray-200">Sign In</Link>
        <Link to="/signup" className="hover:text-gray-200">Join Us</Link>
        <button className="hover:text-gray-200">
          <FiShoppingBag size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
