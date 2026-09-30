import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-[#0047FF] text-white px-8 py-6 flex justify-between items-center border-b border-white/10 relative z-50">
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" className="h-6" />
        <span className="text-xl font-bold font-poppins">ByteSpace</span>
      </Link>
      
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <Link to="/" className="hover:text-[#D4FF00] transition-colors">Home</Link>
        <Link to="/" className="hover:text-[#D4FF00] transition-colors">Courses</Link>
        <Link to="/" className="hover:text-[#D4FF00] transition-colors">Creators</Link>
      </div>
      
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link to="/login" className="hover:text-[#D4FF00] transition-colors">Sign In</Link>
        <Link to="/signup" className="hover:text-[#D4FF00] transition-colors">Join Us</Link>
        <button className="hover:text-[#D4FF00] transition-colors">
          <FiShoppingBag size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
