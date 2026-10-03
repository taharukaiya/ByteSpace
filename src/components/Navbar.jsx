import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { motion } from 'framer-motion';

const Navbar = ({ variant = 'solid' }) => {
  const isTransparent = variant === 'transparent';
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full sticky top-0 z-50 ${isTransparent ? 'bg-transparent' : 'bg-[#0047FF] border-b border-white/10'}`}
      style={!isTransparent ? {
        backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)`,
        backgroundSize: '120px 120px',
      } : {}}
    >
      <div className="w-11/12 lg:w-10/12 mx-auto py-6 flex justify-between items-center text-white relative">
        <Link to="/" className="flex items-center gap-2 relative z-50">
          <img src="/logo.svg" alt="Logo" className="h-6" />
          <span className="text-xl md:text-2xl font-bold font-poppins tracking-wide">ByteSpace</span>
        </Link>
        
        {/* Desktop Centered navigation links */}
        <div className="hidden md:flex gap-8 text-[15px] font-medium absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="hover:text-[#D4FF00] transition-colors">Home</Link>
          <Link to="/search" className="hover:text-[#D4FF00] transition-colors">Courses</Link>
          <Link to="/creators" className="hover:text-[#D4FF00] transition-colors">Creators</Link>
        </div>
        
        {/* Desktop Right items */}
        <div className="hidden md:flex items-center gap-6 text-[15px] font-medium relative z-10">
          {user ? (
            <button onClick={handleLogout} className="hover:text-[#D4FF00] transition-colors font-medium">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="hover:text-[#D4FF00] transition-colors">Sign In</Link>
              <Link to="/signup" className="hover:text-[#D4FF00] transition-colors">Join Us</Link>
            </>
          )}
          <Link to="/search" className="hover:text-[#D4FF00] transition-colors ml-2">
            <FiShoppingBag size={20} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4 relative z-50">
          <Link to="/search" className="hover:text-[#D4FF00] transition-colors">
            <FiShoppingBag size={20} />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#D4FF00]">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0047FF] border-b border-white/10 shadow-lg flex flex-col items-center py-6 gap-6 text-white font-medium z-40">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#D4FF00] transition-colors">Home</Link>
          <Link to="/search" onClick={() => setIsOpen(false)} className="hover:text-[#D4FF00] transition-colors">Courses</Link>
          <Link to="/creators" onClick={() => setIsOpen(false)} className="hover:text-[#D4FF00] transition-colors">Creators</Link>
          <div className="w-11/12 h-px bg-white/20 my-2"></div>
          {user ? (
            <button onClick={() => { handleLogout(); setIsOpen(false); }} className="hover:text-[#D4FF00] transition-colors font-medium">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-[#D4FF00] transition-colors">Sign In</Link>
              <Link to="/signup" onClick={() => setIsOpen(false)} className="hover:text-[#D4FF00] transition-colors">Join Us</Link>
            </>
          )}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
