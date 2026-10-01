import React from 'react';
import CourseCard from './CourseCard';
import StudentEllipse from './StudentEllipse';
import { FiStar } from 'react-icons/fi';

import imgData from '../assets/images/the Power of Big Data.jpg';
import imgDigital from '../assets/images/Build Digital Asset.jpg';

import donut from '../assets/images/donut.png';
import noodle from '../assets/images/noodle.png';
import pyramid from '../assets/images/pyramid.png';

const AuthCollage = () => {
  return (
    <div className="relative w-[450px] h-[550px] scale-[0.7] sm:scale-[0.8] md:scale-90 lg:scale-100 origin-top-left font-sans pointer-events-none mt-10 md:mt-16">
      
      {/* SVG Filters for coloring the 3D shapes */}
      <svg width="0" height="0" className="absolute hidden">
        <filter id="green-tint" colorInterpolationFilters="sRGB">
          <feColorMatrix 
            type="matrix" 
            values="
              0.831 0 0 0 0
              0 0.984 0 0 0
              0 0 0.125 0 0
              0 0 0 1 0
            " 
          />
        </filter>
        <filter id="white-tint" colorInterpolationFilters="sRGB">
          <feColorMatrix 
            type="matrix" 
            values="
              1.8 0 0 0 0
              0 1.8 0 0 0
              0 0 1.8 0 0
              0 0 0 1 0
            " 
          />
        </filter>
      </svg>

      {/* Back Card (Build Digital Asset) */}
      <div className="absolute top-12 left-[-10px] w-[320px] transform -rotate-6 opacity-95">
        <CourseCard 
            title="Build Digital Asset"
            author="purepearl studio"
            rating={4.5}
            price={25}
            lessons={17}
            duration="2 hours 16 mins"
            comments={59}
            imageSrc={imgDigital}
        />
      </div>

      {/* Green Donut */}
      <div className="absolute top-[-20px] left-[25px] z-20 w-28" style={{ filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.2))' }}>
        <img 
          src={donut} 
          alt="Donut decoration" 
          className="w-full object-contain" 
          style={{ filter: 'url(#green-tint)' }}
        />
      </div>

      {/* Front Card (The Power of Big Data) */}
      <div className="absolute top-[40px] left-[60px] w-[340px] z-30 shadow-2xl rounded-[28px]">
        <CourseCard 
            title="the Power of Big Data"
            author="purepearl studio"
            rating={4.5}
            price={25}
            lessons={17}
            duration="2 hours 16 mins"
            comments={59}
            imageSrc={imgData}
        />
      </div>

      {/* Happy Students Card */}
      <div className="absolute bottom-[20px] right-[-60px] bg-[#D4FF00] p-6 rounded-3xl shadow-xl flex flex-col gap-2 z-40 w-[270px]">
        <div className="text-gray-900 font-semibold text-[20px] font-poppins tracking-wide">Happy Students</div>
        <div className="text-gray-900 font-bold text-[15px] flex items-center mb-3">
          4.5 <span className="text-gray-500 font-normal mx-1.5 text-[14px]">(240)</span> <FiStar className="text-[#0047FF] fill-[#0047FF] text-[16px] -mt-0.5" />
        </div>
        <StudentEllipse avatarCount={7} countText="2K+" size="lg" variant="dark" />
      </div>

      {/* White Noodle / Squiggle */}
      <div className="absolute bottom-[90px] right-[-90px] z-50 w-[140px] transform rotate-[30deg]" style={{ filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.2))' }}>
        <img 
          src={noodle} 
          alt="Noodle decoration" 
          className="w-full object-contain" 
          style={{ filter: 'url(#white-tint)' }}
        />
      </div>
      
      {/* Green Pyramid */}
      <div className="absolute bottom-[-10px] left-[10px] z-40 w-[150px] transform -rotate-12" style={{ filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.2))' }}>
        <img 
          src={pyramid} 
          alt="Pyramid decoration" 
          className="w-full object-contain" 
          style={{ filter: 'url(#green-tint)' }}
        />
      </div>

    </div>
  );
};

export default AuthCollage;
