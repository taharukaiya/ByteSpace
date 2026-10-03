import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import purepearlImg from '../assets/images/PurePearl Studio.png';
import albertImg from '../assets/images/Albert Flores.png';
import codyImg from '../assets/images/Cody Fisher.png';
import brooklynImg from '../assets/images/Brooklyn Simmons.png';
import jamesImg from '../assets/images/james.png';
import sarahImg from '../assets/images/sarah.png';
import alexImg from '../assets/images/alex.png';

const CREATORS_DATA = [
  { id: 1, name: 'PurePearl Studio', role: 'Passionate UI/UX, Web designer', rating: 4.8, courses: 3, followers: 12, img: purepearlImg },
  { id: 2, name: 'Albert Flores', role: 'UI/UX Designer', rating: 4.9, courses: 5, followers: 45, img: albertImg },
  { id: 3, name: 'Cody Fisher', role: 'Digital Artist & Animator', rating: 4.7, courses: 2, followers: 8, img: codyImg },
  { id: 4, name: 'Brooklyn Simmons', role: 'Marketing Specialist', rating: 4.6, courses: 4, followers: 22, img: brooklynImg },
  { id: 5, name: 'James Wilson', role: 'Full Stack Developer', rating: 4.9, courses: 6, followers: 156, img: jamesImg },
  { id: 6, name: 'Sarah Connor', role: '3D Modeler', rating: 4.8, courses: 2, followers: 34, img: sarahImg },
  { id: 7, name: 'Alex Morgan', role: 'Data Scientist', rating: 4.5, courses: 1, followers: 5, img: alexImg },
  { id: 8, name: 'Design Masters', role: 'Creative Agency', rating: 4.8, courses: 8, followers: 210, img: purepearlImg }, // Reusing an image for extra data
];

const Creators = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCreators = CREATORS_DATA.filter((creator) =>
    creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    creator.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* ── HERO SECTION ── */}
      <section className="w-full live-bg pt-12 pb-16 relative overflow-hidden">
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-50 live-grid"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)`,
            backgroundSize: '120px 120px',
            animationDelay: `-${(Date.now() % 10000) / 1000}s`
          }}
        />
        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
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
            Meet Our Top Creators
          </h1>

          {/* Search Bar */}
          <div className="w-full max-w-2xl bg-white rounded-full flex items-center p-1.5 shadow-lg pl-4">
            <FiSearch className="text-gray-400 text-lg flex-shrink-0" />
            <input
              type="text"
              placeholder="Search creators by name or role..."
              className="flex-grow px-3 py-2 text-[14px] text-gray-800 focus:outline-none bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-[#D4FF00] text-black font-semibold text-[13px] px-8 py-2.5 rounded-full hover:bg-[#c8f200] transition-colors flex-shrink-0">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ── CREATORS GRID ── */}
      <section className="w-11/12 lg:w-10/12 mx-auto py-16 flex-grow">
        
        {filteredCreators.length === 0 ? (
          <div className="text-center text-gray-500 py-12">No creators found matching your search.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCreators.map((creator) => (
              <Link 
                key={creator.id} 
                to={`/creator/${creator.id}`}
                className="bg-white border border-gray-100 rounded-[28px] p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-50 group-hover:border-[#0047FF]/10 transition-colors">
                  <img src={creator.img} alt={creator.name} className="w-full h-full object-cover" />
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 font-poppins mb-1">{creator.name}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-1">{creator.role}</p>
                
                <div className="w-full flex justify-between items-center text-[12px] text-gray-600 mb-5 px-2">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-gray-900 text-[14px]">{creator.rating}</span>
                    <span>Rating</span>
                  </div>
                  <div className="w-px h-6 bg-gray-200"></div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-gray-900 text-[14px]">{creator.courses}</span>
                    <span>Courses</span>
                  </div>
                  <div className="w-px h-6 bg-gray-200"></div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-gray-900 text-[14px]">{creator.followers}</span>
                    <span>Followers</span>
                  </div>
                </div>

                <button className="w-full bg-gray-50 text-gray-900 font-semibold text-[13px] py-2.5 rounded-full group-hover:bg-[#D4FF00] transition-colors border border-gray-100 group-hover:border-transparent">
                  View Profile
                </button>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-16 flex justify-center items-center gap-2">
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 cursor-not-allowed">
            <BsChevronLeft size={12} />
          </button>
          {[1, 2, 3].map((num) => (
            <button 
              key={num}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-medium ${
                num === 1 ? 'text-black bg-gray-100' : 'text-gray-500 hover:bg-gray-50'
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

export default Creators;
