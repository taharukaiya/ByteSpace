import React from 'react';
import { Link, NavLink, useNavigate, Navigate } from 'react-router-dom';
import { FiShare2, FiCheckCircle } from 'react-icons/fi';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { MdVideoLibrary, MdWorkspacePremium } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { COURSES, CREATORS } from '../data/mockData';

import playIcon from '../assets/images/play-icon.svg';
import shareIcon from '../assets/images/share-icon.svg';
import videoIcon from '../assets/images/video-icon.svg';

const LESSONS_LIST = [
  { num: '01.', title: 'Introduction to Digital Assets', duration: '12 mins' },
  { num: '02.', title: 'Design Principles for Impacts', duration: '21 mins' },
  { num: '03.', title: 'Advanced Techniques in Digital Creation', duration: '16 mins' },
];

const CourseDetailLayout = ({ children, courseId = '1' }) => {
  const course = COURSES.find(c => c.id === parseInt(courseId)) || COURSES[0];
  const creator = CREATORS.find(c => c.id === course.authorId) || CREATORS[0];

  if (!course) return <Navigate to="/search" />;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── Blue Hero Header ── */}
      <section
        className="bg-[#0047FF] pt-8 pb-0 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)`,
          backgroundSize: '120px 120px',
        }}
      >
        <div className="w-11/12 lg:w-10/12 mx-auto">
          {/* Title row */}
          <div className="flex justify-between items-start mb-3 pt-2">
            <div className="flex-1 pr-4">
              <h1 className="text-white text-2xl md:text-3xl font-bold font-poppins leading-snug">
                {course.title}
              </h1>
              <p className="text-white/80 text-[14px] mt-1.5">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="text-white/60 text-[13px] mt-1">
                by <Link to={`/creator/${creator.id}`} className="text-[#D4FF00] hover:underline">{creator.name}</Link>
              </p>
              {/* Pills */}
              <div className="flex flex-wrap items-center gap-3 mt-4 mb-6">
                <span className="bg-white/15 border border-white/30 text-white text-[12px] px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <BiBarChartAlt2 size={14} /> {course.level}
                </span>
                <span className="bg-white/15 border border-white/30 text-white text-[12px] px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <FaStar className="text-[#D4FF00]" size={12} /> {course.rating} ({course.comments} reviews)
                </span>
                <span className="bg-white/15 border border-white/30 text-white text-[12px] px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <HiUserGroup size={14} /> 199 Students
                </span>
              </div>
            </div>
            {/* Share button */}
            <button className="bg-white/15 border border-white/30 text-white text-[13px] font-medium px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white/25 transition-colors flex-shrink-0 mt-1">
              <img src={shareIcon} alt="" className="w-4 h-4 brightness-0 invert" /> Share
            </button>
          </div>

          {/* Two-col: video + sidebar */}
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Video */}
            <div className="w-full lg:flex-1 relative rounded-2xl overflow-hidden aspect-video bg-gray-900 mb-0">
              <img src={course.imageSrc} alt="Course preview" className="w-full h-full object-cover opacity-80" />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50">
                  <img src={playIcon} alt="Play" className="w-6 h-6 brightness-0 invert ml-1" />
                </div>
              </button>
            </div>

            {/* Sidebar card */}
            <div className="w-full lg:w-[320px] flex-shrink-0 bg-white rounded-2xl shadow-2xl p-5 -mb-8 relative z-20">
              <p className="font-bold text-gray-900 text-[15px] font-poppins mb-3">{course.lessons} Lessons ({course.duration})</p>
              <ul className="space-y-2 mb-3">
                {LESSONS_LIST.map((l) => (
                  <li key={l.num} className="flex justify-between items-start text-[13px]">
                    <span className="text-gray-700">
                      <span className="text-gray-400 mr-1.5">{l.num}</span>{l.title}
                    </span>
                    <span className="text-[#0047FF] font-medium ml-3 whitespace-nowrap">{l.duration}</span>
                  </li>
                ))}
              </ul>
              <Link to={`/course/${course.id}/lessons`} className="text-[#0047FF] text-[12px] font-medium hover:underline">
                {Math.max(0, course.lessons - 3)} more videos
              </Link>

              <p className="text-[12px] text-gray-500 mt-4 mb-1">Ready to Enroll? Now and Start Building Your Digital Future!</p>
              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-[#0047FF] font-bold text-[32px] font-poppins leading-none">${course.price}</span>
                <span className="text-gray-400 text-[13px]">/lifetime</span>
              </div>
              <button className="w-full bg-[#D4FF00] text-black font-bold text-[15px] py-3.5 rounded-full hover:bg-[#c8f200] transition-colors">
                Enroll Now
              </button>

              <p className="text-[12px] font-semibold text-gray-800 mt-5 mb-3">This course include</p>
              <ul className="space-y-2.5 text-[13px] text-gray-600">
                <li className="flex items-center gap-2.5"><MdVideoLibrary className="text-[#0047FF] text-[18px] flex-shrink-0" /> Learning Resources</li>
                <li className="flex items-center gap-2.5"><img src={videoIcon} alt="" className="w-4 h-4 flex-shrink-0" /> Quality Lesson Videos</li>
                <li className="flex items-center gap-2.5"><MdWorkspacePremium className="text-[#0047FF] text-[18px] flex-shrink-0" /> Certificate of Completion</li>
                <li className="flex items-center gap-2.5"><RiCustomerService2Fill className="text-[#0047FF] text-[18px] flex-shrink-0" /> Private Consultation</li>
              </ul>

              {/* Creator row */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <img src={creator.img} alt={creator.name} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                  <div>
                    <p className="font-bold text-gray-900 text-[13px] font-poppins">{creator.name}</p>
                    <p className="text-gray-400 text-[11px]">{creator.role}</p>
                  </div>
                </div>
                <p className="text-[12px] text-gray-500 mt-2 mb-3">Ready to Enroll? Now and Start Building Your Digital Future!</p>
                <Link
                  to={`/creator/${creator.id}`}
                  className="block text-center border border-gray-300 text-gray-700 text-[13px] font-medium py-2.5 rounded-full hover:bg-gray-50 transition-colors"
                >
                  See Full Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tab navigation ── */}
      <div className="sticky top-[73px] bg-white border-b border-gray-100 z-10">
        <div className="w-11/12 lg:w-10/12 mx-auto pt-12 pb-0">
          <div className="flex gap-1">
            {[
              { label: 'About', to: `/course/${courseId}` },
              { label: 'Lessons', to: `/course/${courseId}/lessons` },
              { label: 'Reviews', to: `/course/${courseId}/reviews` },
            ].map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={label === 'About'}
                className={({ isActive }) =>
                  `px-6 py-2.5 rounded-full text-[13px] font-medium transition-colors ${
                    isActive
                      ? 'bg-[#D4FF00] text-black'
                      : 'text-gray-500 hover:text-gray-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab content (injected) ── */}
      <div className="w-11/12 lg:w-10/12 mx-auto py-10">
        <div className="lg:w-[calc(100%-344px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailLayout;
