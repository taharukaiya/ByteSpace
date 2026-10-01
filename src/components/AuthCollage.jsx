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
  const filterGreen = 'brightness(0) saturate(100%) invert(90%) sepia(60%) saturate(600%) hue-rotate(28deg) brightness(1.05)';
  const filterWhite = 'brightness(0) invert(1)';

  return (
    // This wrapper clips all overflow so nothing bleeds into the page
    <div className="relative w-full h-[480px] overflow-visible pointer-events-none mt-6">

      {/* ── Back card (Build Digital Asset) – rotated left ── */}
      <div className="absolute top-10 left-0 w-[290px] -rotate-6 opacity-90 z-10">
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

      {/* ── Green donut – top-left, above cards ── */}
      <img
        src={donut}
        alt=""
        className="absolute top-[-10px] left-[20px] z-30 w-24"
        style={{ filter: `${filterGreen} drop-shadow(0 8px 12px rgba(0,0,0,0.25))` }}
      />

      {/* ── Front card (Power of Big Data) ── */}
      <div className="absolute top-8 left-[55px] w-[300px] z-20 shadow-2xl rounded-[24px]">
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

      {/* ── Happy Students card ── */}
      <div className="absolute bottom-[20px] right-[10px] bg-[#D4FF00] px-5 py-4 rounded-3xl shadow-xl flex flex-col gap-1.5 z-30 w-[240px] overflow-hidden">
        <p className="text-gray-900 font-semibold text-[17px] font-poppins">Happy Students</p>
        <p className="text-gray-900 font-semibold text-[13px] flex items-center gap-1.5">
          4.5 <span className="text-gray-500 font-normal">(240)</span>
          <FiStar className="text-[#0047FF] fill-[#0047FF] text-[14px]" />
        </p>
        <div className="mt-1">
          <StudentEllipse avatarCount={7} countText="2K+" size="sm" variant="dark" />
        </div>
      </div>

      {/* ── White noodle – overlapping Happy Students card top-right ── */}
      <img
        src={noodle}
        alt=""
        className="absolute bottom-[130px] right-[-10px] z-40 w-[100px] rotate-[20deg]"
        style={{ filter: `${filterWhite} drop-shadow(0 8px 12px rgba(0,0,0,0.15))` }}
      />

      {/* ── Green pyramid – bottom-left ── */}
      <img
        src={pyramid}
        alt=""
        className="absolute bottom-[10px] left-[-10px] z-20 w-[130px] -rotate-12"
        style={{ filter: `${filterGreen} drop-shadow(0 8px 12px rgba(0,0,0,0.25))` }}
      />
    </div>
  );
};

export default AuthCollage;
