import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0047FF]">
      {/* 
        Grid Background overlaying the entire blue area 
        We use a fixed cell size (e.g., 160px x 160px) and center it
      */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '160px 160px',
          backgroundPosition: 'center top'
        }}
      ></div>

      {/* Navbar specific to 404 to ensure it's transparent and sits over grid */}
      <nav className="text-white px-8 lg:px-16 py-6 flex justify-between items-center relative z-20">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-6" />
          <span className="text-2xl font-bold font-poppins">ByteSpace</span>
        </Link>
        
        <div className="hidden md:flex gap-10 text-sm font-medium">
          <Link to="/" className="hover:text-[#D4FF00] transition-colors">Home</Link>
          <Link to="/" className="hover:text-[#D4FF00] transition-colors">Courses</Link>
          <Link to="/" className="hover:text-[#D4FF00] transition-colors">Creators</Link>
        </div>
        
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link to="/login" className="hover:text-[#D4FF00] transition-colors">Sign In</Link>
          <Link to="/signup" className="hover:text-[#D4FF00] transition-colors">Join Us</Link>
          <button className="hover:text-[#D4FF00] transition-colors">
            <FiShoppingBag size={20} />
          </button>
        </div>
      </nav>

      {/* Main 404 Content */}
      <div className="relative flex-grow flex flex-col items-center justify-center z-10 w-full overflow-hidden pb-20">
        
        <div className="relative flex flex-col items-center justify-center w-full mt-10">
          {/* Giant 404 Background Text */}
          <h1 
            className="text-[280px] md:text-[380px] font-bold font-poppins leading-none select-none tracking-tight -mb-20"
            style={{
              background: 'linear-gradient(180deg, #D4FF00 0%, rgba(212, 255, 0, 0) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              opacity: 0.95,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }}
          >
            404
          </h1>
          
          {/* Foreground Title overlaying 404 */}
          <h2 className="text-4xl md:text-[54px] font-bold font-poppins text-white leading-tight text-center z-10 w-full max-w-4xl tracking-normal">
            The page you are looking<br/>for doesn't exist
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-white/90 mt-12 mb-10 text-[15px] md:text-[17px] font-sans font-normal text-center max-w-lg mx-auto z-10">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* CTA Button */}
        <Link 
          to="/"
          className="z-10 bg-[#D4FF00] text-black px-10 py-3.5 rounded-full font-semibold text-[15px] hover:bg-[#bce600] transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
