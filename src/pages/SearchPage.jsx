import React, { useState } from 'react';
import { FiSearch, FiChevronDown, FiFilter } from 'react-icons/fi';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import CourseCard from '../components/CourseCard';

import imgFigma from '../assets/images/balancing Productivity.jpg';
import imgMoney from '../assets/images/Mastering Money.jpg';
import imgStartup from '../assets/images/From Idea to Startup.jpg';
import imgData from '../assets/images/the Power of Big Data.jpg';
import imgDigital from '../assets/images/Build Digital Asset.jpg';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Generate 12 dummy courses for the grid
  const baseCourses = [
    { title: 'Learn Figma from Basic', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgFigma },
    { title: 'Build Digital Asset', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgDigital },
    { title: 'the Power of Big Data', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgData },
    { title: 'Balancing Productivity an...', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgMoney },
    { title: 'Mastering Money Manage...', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgStartup },
    { title: 'From Idea to Startup Succ...', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgData },
  ];

  const courses = [...baseCourses, ...baseCourses, ...baseCourses]; // 18 items

  const categories = [
    'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 
    'Social Media', 'UI/UX Design', 'Creative Marketing', 'Cooking'
  ];

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* ── HERO SECTION ── */}
      <section
        className="w-full bg-[#0047FF] pt-12 pb-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)`,
          backgroundSize: '120px 120px',
        }}
      >
        <div className="relative z-10 w-11/12 lg:w-10/12 mx-auto text-center flex flex-col items-center">
          <h1 className="text-white text-3xl md:text-[36px] font-bold font-poppins mb-8">
            Find Your Next Course
          </h1>

          {/* Search Bar */}
          <div className="w-full max-w-2xl bg-white rounded-full flex items-center p-1.5 shadow-lg pl-4">
            <FiSearch className="text-gray-400 text-lg flex-shrink-0" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow px-3 py-2 text-[14px] text-gray-800 focus:outline-none bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-[#D4FF00] text-black font-semibold text-[13px] px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#c8f200] transition-colors flex-shrink-0">
              Courses <FiChevronDown size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── FILTERS & CATEGORIES ── */}
      <section className="w-11/12 lg:w-10/12 mx-auto pt-8 pb-8">
        {/* Top Filters Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <FiFilter size={14} /> Filter
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              All Level <FiChevronDown size={14} />
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Category <FiChevronDown size={14} />
            </button>
          </div>
          <div>
            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <FiFilter size={14} className="rotate-180" /> Most Popular <FiChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Categories Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-[12px] font-medium transition-colors ${
                idx === 0 
                  ? 'bg-[#D4FF00] text-black border border-[#D4FF00]' 
                  : 'bg-transparent border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── COURSES GRID ── */}
      <section className="w-11/12 lg:w-10/12 mx-auto pb-16 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-16 flex justify-center items-center gap-2">
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 cursor-not-allowed">
            <BsChevronLeft size={12} />
          </button>
          {[1, 2, 3, 4, 5].map((num) => (
            <button 
              key={num}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-medium ${
                num === 1 ? 'text-black' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              {num}
            </button>
          ))}
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
            <BsChevronRight size={12} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
