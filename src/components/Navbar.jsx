import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

const Navbar = ({ variant = 'solid' }) => {
  const isTransparent = variant === 'transparent';
  
  return (
    <nav className={`text-white px-8 lg:px-16 py-6 flex justify-between items-center relative z-50 ${isTransparent ? 'bg-transparent' : 'bg-[#0047FF] border-b border-white/10'}`}>
      <Link to="/" className="flex items-center gap-2 relative z-10">
        <img src="/logo.svg" alt="Logo" className="h-6" />
        <span className="text-2xl font-bold font-poppins tracking-wide">ByteSpace</span>
      </Link>
      
      {/* Centered navigation links */}
      <div className="hidden md:flex gap-8 text-[15px] font-medium absolute left-1/2 transform -translate-x-1/2">
        <Link to="/" className="hover:text-[#D4FF00] transition-colors">Home</Link>
        <Link to="/" className="hover:text-[#D4FF00] transition-colors">Courses</Link>
        <Link to="/" className="hover:text-[#D4FF00] transition-colors">Creators</Link>
      </div>
      
      <div className="flex items-center gap-6 text-[15px] font-medium relative z-10">
        <Link to="/login" className="hover:text-[#D4FF00] transition-colors">Sign In</Link>
        <Link to="/signup" className="hover:text-[#D4FF00] transition-colors">Join Us</Link>
        <button className="hover:text-[#D4FF00] transition-colors ml-2">
          <FiShoppingBag size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
