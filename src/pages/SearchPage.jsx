import React, { useState } from 'react';
import { FiSearch, FiChevronDown, FiFilter } from 'react-icons/fi';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import CourseCard from '../components/CourseCard';
import { COURSES, CATEGORIES } from '../data/mockData';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Featured');
  
  // Filter States
  const levels = ['All Level', 'Beginner', 'Intermediate', 'Advanced'];
  const [levelIndex, setLevelIndex] = useState(0);
  const [showPopularOnly, setShowPopularOnly] = useState(false);

  // Derive filtered courses
  const filteredCourses = COURSES.filter((course) => {
    // 1. Search filter
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 2. Category filter (Featured means show all for demo purposes, otherwise match category)
    const matchesCategory = activeCategory === 'Featured' || course.category === activeCategory;
    
    // 3. Level filter
    const activeLevelText = levels[levelIndex];
    const matchesLevel = activeLevelText === 'All Level' || course.level === activeLevelText || course.level === 'All Levels';
    
    // 4. Popular filter
    const matchesPopular = showPopularOnly ? course.popular === true : true;

    return matchesSearch && matchesCategory && matchesLevel && matchesPopular;
  });

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* ── HERO SECTION ── */}
      <section className="w-full pt-12 pb-16 relative">
        {/* Background layer */}
        <div className="absolute inset-0 live-bg z-0" />
        
        {/* Grid Overlay - Outside overflow-hidden so background-attachment: fixed works */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-50 live-grid"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)`,
            backgroundSize: '120px 120px',
            animationDelay: `-${(Date.now() % 10000) / 1000}s`
          }}
        />

        {/* Particles Wrapper with overflow-hidden */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${80 + Math.random() * 40}%`,
                width: `${10 + Math.random() * 20}px`,
                height: `${10 + Math.random() * 20}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }} 
            />
          ))}
        </div>
        <div className="relative z-10 w-11/12 lg:w-10/12 mx-auto text-center flex flex-col items-center">
          <h1 className="text-white text-3xl md:text-[36px] font-bold font-poppins mb-8">
            Find Your Next Course
          </h1>

          {/* Search Bar */}
          <div className="w-full max-w-2xl bg-white rounded-full flex items-center p-1.5 shadow-lg pl-4">
            <FiSearch className="text-gray-400 text-lg flex-shrink-0" />
            <input
              type="text"
              placeholder="Search by course title or author..."
              className="flex-grow px-3 py-2 text-[14px] text-gray-800 focus:outline-none bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-[#D4FF00] text-black font-semibold text-[13px] px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#c8f200] transition-colors flex-shrink-0">
              Courses
            </button>
          </div>
        </div>
      </section>

      {/* ── FILTERS & CATEGORIES ── */}
      <section className="w-11/12 lg:w-10/12 mx-auto pt-8 pb-8">
        {/* Top Filters Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('Featured'); setLevelIndex(0); setShowPopularOnly(false); }}
              className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <FiFilter size={14} /> Clear Filters
            </button>
            <button 
              onClick={() => setLevelIndex((prev) => (prev + 1) % levels.length)}
              className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-[13px] font-medium text-blue-600 hover:bg-blue-50 transition-colors border-blue-200"
            >
              {levels[levelIndex]} <FiChevronDown size={14} />
            </button>
          </div>
          <div>
            <button 
              onClick={() => setShowPopularOnly(!showPopularOnly)}
              className={`flex items-center gap-2 border rounded-full px-5 py-2 text-[13px] font-medium transition-colors ${showPopularOnly ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}
            >
              <FiFilter size={14} className="rotate-180" /> {showPopularOnly ? 'Popular Only' : 'Most Popular'} <FiChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Categories Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[12px] font-medium transition-colors ${
                activeCategory === cat 
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
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 text-gray-500 font-medium text-lg">
            No courses found matching your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} courseId={course.id} />
            ))}
          </div>
        )}
        
        {/* Pagination */}
        {filteredCourses.length > 0 && (
          <div className="mt-16 flex justify-center items-center gap-2">
            <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 cursor-not-allowed">
              <BsChevronLeft size={12} />
            </button>
            <button className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-medium text-black bg-gray-100">
              1
            </button>
            <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
              <BsChevronRight size={12} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default SearchPage;
