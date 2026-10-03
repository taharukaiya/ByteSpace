import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { motion } from 'framer-motion';
import StudentEllipse from './StudentEllipse';

const MotionLink = motion(Link);

const CourseCard = ({
  title,
  author,
  rating,
  price,
  level = "Beginner",
  lessons,
  duration,
  comments,
  studentsText = "26+",
  imageSrc,
  courseId = '1',
}) => {
  return (
    <MotionLink 
      to={`/course/${courseId}`} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="block bg-white border border-gray-100 rounded-[28px] p-4 shadow-sm hover:shadow-xl font-sans"
    >
      
      {/* Image with overlay pills */}
      <div className="relative mb-5 rounded-2xl overflow-hidden aspect-video">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200"></div>
        )}
        
        {/* Overlay Pills */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 overflow-hidden text-[11px] font-medium text-gray-800">
          <div className="bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full whitespace-nowrap">
            {lessons} Lessons
          </div>
          <div className="bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full whitespace-nowrap">
            {duration}
          </div>
          <div className="bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full whitespace-nowrap">
            {comments} Comments
          </div>
        </div>
      </div>

      {/* Title & Rating */}
      <div className="flex justify-between items-start mb-1 px-1">
        <h3 className="font-bold text-gray-900 text-lg leading-tight font-poppins">{title}</h3>
        <div className="flex items-center text-gray-500 font-medium text-sm whitespace-nowrap ml-2 mt-0.5">
          {rating} <FiStar className="ml-1 text-[#D4FF00] fill-[#D4FF00]" />
        </div>
      </div>

      {/* Author */}
      <p className="text-gray-500 text-sm mb-5 px-1">
        by <span className="text-[#0047FF]">{author}</span>
      </p>

      {/* Level & Students Row */}
      <div className="flex justify-between items-center mb-5 px-1">
        <div className="bg-gray-100/80 px-4 py-2 rounded-full flex items-center gap-2 text-gray-700 text-sm font-medium">
          <BiBarChartAlt2 className="text-gray-500 text-lg" /> {level}
        </div>
        <StudentEllipse avatarCount={4} countText={studentsText} size="sm" />
      </div>

      {/* Price */}
      <div className="px-1">
        <div className="font-bold text-[#0047FF] text-2xl font-poppins">
          ${price}<span className="text-[13px] font-normal text-gray-500 font-sans">/lifetime</span>
        </div>
      </div>

    </MotionLink>
  );
};

export default CourseCard;
