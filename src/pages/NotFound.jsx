import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#0047FF]">
      {/* 
        Grid Background overlaying the entire blue area 
      */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '150px 150px',
          backgroundPosition: 'center top'
        }}
      ></div>

      <Navbar variant="transparent" />

      {/* Main 404 Content */}
      <div className="relative flex-grow flex flex-col items-center justify-center z-10 w-full px-4 pb-24 pt-8">
        
        {/* Giant 404 Background Text & Foreground Title */}
        <div className="relative flex flex-col items-center justify-center w-full">
          {/* 404 text in normal flow so it doesn't get cropped by overflow issues */}
          <h1 
            className="text-[200px] md:text-[320px] lg:text-[360px] font-bold font-poppins leading-none select-none tracking-tight"
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
          
          {/* Foreground Title overlaying 404 */}
          <h2 className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold font-poppins text-white leading-[1.1] text-center w-full max-w-5xl tracking-normal">
            The page you are looking<br/>for doesn't exist
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-white/90 mt-14 mb-10 text-[15px] md:text-[17px] font-sans font-normal text-center max-w-lg mx-auto">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* CTA Button */}
        <Link 
          to="/"
          className="bg-[#D4FF00] text-black px-9 py-3.5 rounded-full font-semibold text-[15px] hover:bg-[#bce600] transition-colors duration-300 shadow-lg"
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
