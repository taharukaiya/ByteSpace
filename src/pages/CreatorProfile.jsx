import React from 'react';
import { useParams } from 'react-router-dom';
import { FiFilter } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { BiBarChartAlt2 } from 'react-icons/bi';

import creatorImg from '../assets/images/PurePearl Studio.png';
import imgFigma from '../assets/images/Learn Figma from Basic.jpg';
import imgDigital from '../assets/images/Build Digital Asset.jpg';
import imgData from '../assets/images/the Power of Big Data.jpg';
import imgProductivity from '../assets/images/Balancing Productivity and Self-Care.jpg';
import imgMoney from '../assets/images/Mastering Money Management.jpg';
import imgStartup from '../assets/images/From Idea to Startup Success.jpg';
import StudentEllipse from '../components/StudentEllipse';
import CourseCard from '../components/CourseCard';

const COURSES = [
  { title: 'Learn Figma from Basic', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgFigma },
  { title: 'Build Digital Asset', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgDigital },
  { title: 'the Power of Big Data', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgData },
  { title: 'Balancing Productivity an...', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgProductivity },
  { title: 'Mastering Money Manage...', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgMoney },
  { title: 'From Idea to Startup Succ...', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgStartup },
];

const CreatorProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── Blue Hero Banner ── */}
      <section
        className="bg-[#0047FF] pt-8 pb-12"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)`,
          backgroundSize: '120px 120px',
        }}
      >
        <div className="w-11/12 lg:w-10/12 mx-auto">
          {/* Creator identity row */}
          <div className="flex items-start gap-5 mb-5">
            <img
              src={creatorImg}
              alt="PurePearl Studio"
              className="w-20 h-20 rounded-2xl object-cover flex-shrink-0 border-4 border-white/20"
            />
            <div className="pt-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-white text-2xl md:text-3xl font-bold font-poppins">PurePearl Studio</h1>
                <span className="bg-[#D4FF00] text-black text-[11px] font-bold px-3 py-1 rounded-full">Creator</span>
              </div>
              <p className="text-white/70 text-[14px] mt-1">Passionate UI/UX, Web designer</p>
            </div>
          </div>

          {/* Bio */}
          <div className="text-white/80 text-[14px] leading-relaxed max-w-2xl space-y-2 mb-6">
            <p>
              Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration
              that drive my creative journey. Let's explore and learn together!
            </p>
            <p>
              I've into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia
              projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>

          {/* Stats + Follow */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <button className="bg-white/15 border border-white/30 text-white text-[13px] font-medium px-5 py-2 rounded-full hover:bg-white/25 transition-colors">
                3 Products
              </button>
              <button className="bg-white/15 border border-white/30 text-white text-[13px] font-medium px-5 py-2 rounded-full hover:bg-white/25 transition-colors">
                12 Followers
              </button>
            </div>
            <button className="bg-[#D4FF00] text-black font-bold text-[14px] px-8 py-2.5 rounded-full hover:bg-[#c8f200] transition-colors">
              Follow
            </button>
          </div>
        </div>
      </section>

      {/* ── Courses Grid Section ── */}
      <section className="w-11/12 lg:w-10/12 mx-auto py-10">
        {/* Filters row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <FiFilter size={14} /> Filter
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <BiBarChartAlt2 size={14} /> Level
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Category
            </button>
          </div>
          <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <FiFilter size={14} className="rotate-180" /> Most relevant
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
          {COURSES.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CreatorProfile;
