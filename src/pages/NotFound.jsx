import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#0047FF] overflow-x-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '150px 150px',
          backgroundPosition: 'center top'
        }}
      ></div>

      <Navbar variant="transparent" />

      {/* Main 404 Content */}
      <div className="relative flex-grow flex flex-col items-center justify-center z-10 w-full px-4 pb-20 pt-8 lg:pb-32 lg:pt-10">
        
        {/* Giant 404 Background Text */}
        <h1 
          className="text-[140px] sm:text-[200px] md:text-[280px] lg:text-[420px] font-bold font-poppins leading-[0.8] select-none tracking-tight text-center py-2 overflow-visible"
          style={{
            background: 'linear-gradient(180deg, #D4FF00 0%, rgba(212, 255, 0, 0) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            opacity: 0.95
          }}
        >
          404
        </h1>
        
        {/* Foreground Title overlaying bottom of 404 */}
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[68px] font-bold font-poppins text-white leading-[1.1] text-center w-full max-w-5xl tracking-normal -mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16 relative z-10">
          The page you are looking<br/>for doesn’t exist
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 mt-6 md:mt-8 mb-8 md:mb-10 text-[14px] md:text-[16px] font-sans font-normal text-center max-w-lg mx-auto relative z-10 px-4">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* CTA Button */}
        <Link 
          to="/"
          className="relative z-10 bg-[#D4FF00] text-black px-8 py-3 lg:px-9 lg:py-3.5 rounded-full font-semibold text-[14px] lg:text-[15px] hover:bg-[#bce600] transition-colors duration-300 shadow-lg"
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
