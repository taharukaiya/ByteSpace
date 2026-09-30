import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="relative min-h-[calc(100vh-200px)] flex items-center justify-center bg-[#0047FF] overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: 'center center'
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full">
        {/* Giant 404 Text */}
        <div className="relative flex items-center justify-center w-full">
          <h1 
            className="text-[12rem] md:text-[20rem] font-bold leading-none select-none"
            style={{
              background: 'linear-gradient(180deg, #D4FF00 0%, rgba(212, 255, 0, 0) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              opacity: 0.9
            }}
          >
            404
          </h1>
          
          {/* Foreground Title overlaying 404 */}
          <h2 className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold text-white w-full max-w-4xl tracking-tight">
            The page you are looking<br className="hidden md:block" /> for doesn't exist
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-white/80 mt-16 md:mt-12 mb-8 text-lg md:text-xl font-sans max-w-lg mx-auto relative z-20">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* CTA Button */}
        <Link 
          to="/"
          className="relative z-20 bg-[#D4FF00] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#bce600] transition-colors duration-300 font-sans"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
