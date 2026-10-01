import React from 'react';
import CourseCard from './CourseCard';
import StudentEllipse from './StudentEllipse';
import { FiStar } from 'react-icons/fi';

import imgData from '../assets/images/the Power of Big Data.jpg';
import imgDigital from '../assets/images/Build Digital Asset.jpg';

import cone1 from '../assets/images/cone-1.png';
import cone2 from '../assets/images/cone-2.png';
import cone3 from '../assets/images/cone-3.png';

const AuthCollage = () => {
  return (
    <div className="relative w-[450px] h-[550px] mt-16 scale-90 lg:scale-100 origin-top-left font-sans pointer-events-none">
      
      {/* Back Card (Build Digital Asset) */}
      <div className="absolute top-12 left-[-20px] w-[320px] transform -rotate-6 opacity-90">
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
      <div className="absolute top-0 left-16 w-[340px] z-10 shadow-2xl rounded-[28px]">
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
      <div className="absolute bottom-16 right-[-20px] bg-[#D4FF00] p-5 rounded-2xl shadow-xl flex flex-col gap-2 z-20 w-[240px]">
        <div className="text-gray-900 font-bold text-[17px] font-poppins tracking-wide">Happy Students</div>
        <div className="text-gray-800 font-medium text-[13px] flex items-center -mt-1 mb-3">
          4.5 <span className="text-gray-600 font-normal mx-1">(240)</span> <FiStar className="ml-1 text-[#0047FF] fill-[#0047FF] text-sm" />
        </div>
        <StudentEllipse avatarCount={7} countText="2K+" size="md" />
      </div>

      {/* Floating Shapes */}
      {/* Green Ring */}
      <img src={cone1} alt="Decoration" className="absolute top-10 left-4 z-20 w-24 object-contain" />
      
      {/* White Squiggle */}
      <img src={cone2} alt="Decoration" className="absolute bottom-36 right-0 z-10 w-28 object-contain" />
      
      {/* Green Pyramid */}
      <img src={cone3} alt="Decoration" className="absolute bottom-8 left-[-10px] z-20 w-28 object-contain" />

    </div>
  );
};

export default AuthCollage;
