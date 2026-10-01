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
    <div className="relative w-[450px] h-[550px] mt-16 scale-90 lg:scale-100 origin-top-left font-sans pointer-events-none">
      
      {/* Back Card (Build Digital Asset) */}
      <div className="absolute top-12 left-[10px] w-[320px] transform -rotate-6 opacity-95">
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

      {/* Front Card (The Power of Big Data) */}
      <div className="absolute top-[30px] left-[60px] w-[340px] z-10 shadow-2xl rounded-[28px]">
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
      <div className="absolute bottom-[40px] right-[-10px] bg-[#D4FF00] p-5 rounded-3xl shadow-xl flex flex-col gap-1.5 z-20 w-[250px] border border-[#cbe500]">
        <div className="text-gray-900 font-bold text-[18px] font-poppins tracking-wide">Happy Students</div>
        <div className="text-gray-900 font-bold text-[14px] flex items-center mb-3">
          4.5 <span className="text-gray-700 font-medium mx-1 text-[13px]">(240)</span> <FiStar className="ml-1 text-[#0047FF] fill-[#0047FF] text-[15px]" />
        </div>
        <StudentEllipse avatarCount={7} countText="2K+" size="md" variant="dark" />
      </div>

      {/* Floating Shapes */}
      {/* Green Donut */}
      <img 
        src={donut} 
        alt="Donut decoration" 
        className="absolute top-[-10px] left-[20px] z-20 w-32 object-contain" 
      />
      
      {/* White Noodle / Squiggle */}
      <img 
        src={noodle} 
        alt="Noodle decoration" 
        className="absolute bottom-[110px] right-[-30px] z-30 w-[140px] object-contain transform rotate-12" 
      />
      
      {/* Green Pyramid */}
      <img 
        src={pyramid} 
        alt="Pyramid decoration" 
        className="absolute bottom-[-10px] left-[10px] z-20 w-[150px] object-contain" 
      />

    </div>
  );
};

export default AuthCollage;
