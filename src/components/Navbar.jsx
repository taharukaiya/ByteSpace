import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import Avatar from './Avatar';

const CartLink = ({ count, className = '' }) => (
  <Link to="/cart" aria-label="Cart" className={`relative hover:text-[#D4FF00] transition-colors ${className}`}>
    <FiShoppingBag size={20} />
    {count > 0 && (
      <span className="absolute -top-2 -right-2.5 bg-[#D4FF00] text-black text-[10px] font-bold min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
        {count}
      </span>
    )}
  </Link>
);

const Navbar = ({ variant = 'solid' }) => {
  const { cartIds, user } = useCart();
  const isTransparent = variant === 'transparent';
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const close = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
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
      className={`w-full sticky top-0 z-50 ${isTransparent ? 'bg-transparent' : 'live-bg'}`}
    >
      {!isTransparent && (
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-50 live-grid"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)`,
            backgroundSize: '120px 120px'
          }}
        />
      )}
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
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Account menu"
                className="flex items-center rounded-full focus:outline-none hover:opacity-90 transition-opacity"
              >
                <Avatar user={user} size={36} />
              </button>
              {menuOpen && (
                <div className="absolute right-0 top-full mt-3 w-60 bg-white text-gray-800 rounded-2xl shadow-2xl border border-gray-100 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="font-semibold text-[14px] truncate">{user.displayName || 'My Account'}</p>
                    <p className="text-[12px] text-gray-400 truncate">{user.email}</p>
                  </div>
                  <Link to="/profile" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-[14px] hover:bg-gray-50">Edit Profile</Link>
                  <Link to="/profile?tab=security" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-[14px] hover:bg-gray-50">Change Password</Link>
                  <Link to="/profile?tab=transactions" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-[14px] hover:bg-gray-50">Transactions</Link>
                  <button onClick={() => { setMenuOpen(false); handleLogout(); }} className="w-full text-left px-4 py-2.5 text-[14px] text-red-500 hover:bg-gray-50 border-t border-gray-100 mt-1">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="hover:text-[#D4FF00] transition-colors">Sign In</Link>
              <Link to="/signup" className="hover:text-[#D4FF00] transition-colors">Join Us</Link>
            </>
          )}
          <CartLink count={cartIds.length} className="ml-2" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4 relative z-50">
          <CartLink count={cartIds.length} />
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
            <>
              <Link to="/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-[#D4FF00] transition-colors">
                <Avatar user={user} size={28} /> My Profile
              </Link>
              <Link to="/profile?tab=transactions" onClick={() => setIsOpen(false)} className="hover:text-[#D4FF00] transition-colors">Transactions</Link>
              <button onClick={() => { handleLogout(); setIsOpen(false); }} className="hover:text-[#D4FF00] transition-colors font-medium">
                Logout
              </button>
            </>
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
