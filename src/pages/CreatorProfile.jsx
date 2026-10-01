import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { FiFilter } from 'react-icons/fi';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { CREATORS, COURSES } from '../data/mockData';
import CourseCard from '../components/CourseCard';

const CreatorProfile = () => {
  const { id } = useParams();
  
  // Find creator or default to the first one if not found for demo purposes
  const creator = CREATORS.find(c => c.id === parseInt(id)) || CREATORS[0];
  
  // Find courses authored by this creator
  const creatorCourses = COURSES.filter(course => course.authorId === creator.id);

  if (!creator) return <Navigate to="/creators" />;

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
              src={creator.img}
              alt={creator.name}
              className="w-20 h-20 rounded-2xl object-cover flex-shrink-0 border-4 border-white/20"
            />
            <div className="pt-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-white text-2xl md:text-3xl font-bold font-poppins">{creator.name}</h1>
                <span className="bg-[#D4FF00] text-black text-[11px] font-bold px-3 py-1 rounded-full">Creator</span>
              </div>
              <p className="text-white/70 text-[14px] mt-1">{creator.role}</p>
            </div>
          </div>

          {/* Bio */}
          <div className="text-white/80 text-[14px] leading-relaxed max-w-2xl space-y-2 mb-6">
            <p>
              Welcome to the creative world of {creator.name}. Here, you'll discover the passion, expertise, and inspiration
              that drive my creative journey. Let's explore and learn together!
            </p>
            <p>
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia
              projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>

          {/* Stats + Follow */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <button className="bg-white/15 border border-white/30 text-white text-[13px] font-medium px-5 py-2 rounded-full hover:bg-white/25 transition-colors cursor-default">
                {creator.courses} Products
              </button>
              <button className="bg-white/15 border border-white/30 text-white text-[13px] font-medium px-5 py-2 rounded-full hover:bg-white/25 transition-colors cursor-default">
                {creator.followers} Followers
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
          {creatorCourses.length > 0 ? (
            creatorCourses.map((course) => (
              <CourseCard key={course.id} {...course} courseId={course.id} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500 font-medium">
              This creator hasn't published any courses yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CreatorProfile;
