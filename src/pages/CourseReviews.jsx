import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import CourseDetailLayout from '../components/CourseDetailLayout';

import purepearlImg from '../assets/images/PurePearl Studio.png';
import albertImg from '../assets/images/Albert Flores.png';
import codyImg from '../assets/images/Cody Fisher.png';
import brooklynImg from '../assets/images/Brooklyn Simmons.png';

const STAR_BARS = [
  { stars: 5, count: 54 },
  { stars: 4, count: 13 },
  { stars: 3, count: 3 },
  { stars: 2, count: 2 },
  { stars: 1, count: 4 },
];

const REVIEWS = [
  {
    name: 'PurePearl Studio',
    role: 'UX Designer',
    rating: 5,
    date: '1 year ago',
    text: 'The course was excellent! I got a comprehensive understanding of digital assets. The lessons were easy to follow, and the instructor who was always ready to help has embarked on a fun, exhilarating digital adventure.',
    img: purepearlImg,
  },
  {
    name: 'Albert Flores',
    role: 'UI Designer',
    rating: 5,
    date: '1 year ago',
    text: "This course has changed my approach to digital design. The curriculum covers many fronts, and the real-world applications made a truly inspiring, hands-on experience that's uniquely immersive.",
    img: albertImg,
  },
  {
    name: 'Cody Fisher',
    role: 'UI Treacher',
    rating: 5,
    date: '1 year ago',
    text: "It's packed with invaluable information. I've picked up ideas that I couldn't implement it anywhere else and which I can confidently apply now. Helpful exercises and a focus on practicalities — the best experience.",
    img: codyImg,
  },
  {
    name: 'Brooklyn Simmons',
    role: 'UI Designer',
    rating: 5,
    date: '1 year ago',
    text: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course artifacts for marketing on our professions and the easy-to-understand way of teaching were excellent.',
    img: brooklynImg,
  },
];

const StarRow = ({ count }) =>
  Array.from({ length: 5 }).map((_, i) => (
    <FaStar key={i} className={i < count ? 'text-[#D4FF00]' : 'text-gray-300'} size={12} />
  ));

const CourseReviews = () => {
  const { id } = useParams();
  const [activeFilter, setActiveFilter] = useState('All rating');

  return (
    <CourseDetailLayout courseId={id}>
      {/* What Learners Are Saying */}
      <section>
        <h2 className="text-[22px] font-bold font-poppins text-gray-900 mb-2">What Learners Are Saying</h2>
        <p className="text-gray-500 text-[14px] mb-6 leading-relaxed">
          See what students have to say about Build Digital Asset in this comprehensive course. These are real
          stories from real people who've embraced the fun, exhilarating, digital adventure.
        </p>

        {/* Rating Summary */}
        <div className="flex items-start gap-8 mb-8 bg-gray-50 rounded-2xl p-5">
          <div className="text-center">
            <p className="text-[48px] font-bold font-poppins text-gray-900 leading-none">4.7</p>
            <div className="flex gap-0.5 mt-2 justify-center">
              <StarRow count={5} />
            </div>
          </div>
          <div className="flex-1 space-y-2">
            {STAR_BARS.map(({ stars, count }) => (
              <div key={stars} className="flex items-center gap-3">
                <div className="w-32 bg-gray-200 rounded-full h-1.5 flex-shrink-0">
                  <div
                    className="h-full bg-gray-700 rounded-full"
                    style={{ width: `${(count / 54) * 100}%` }}
                  />
                </div>
                <div className="flex gap-0.5">
                  <StarRow count={stars} />
                </div>
                <span className="text-gray-500 text-[12px] w-4">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-7">
          {['All rating', '5 ★', '4 ★', '3 ★', '2 ★', '1 ★'].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-[12px] font-medium border transition-colors ${
                activeFilter === f
                  ? 'bg-[#D4FF00] border-[#D4FF00] text-black'
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Individual Reviews */}
        <h3 className="text-[16px] font-bold font-poppins text-gray-900 mb-5">Individual Reviews</h3>
        <div className="space-y-6">
          {REVIEWS.map((r) => (
            <div key={r.name} className="border border-gray-100 rounded-2xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <img src={r.img} alt={r.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900 text-[14px] font-poppins">{r.name}</p>
                      <p className="text-gray-400 text-[12px]">{r.role}</p>
                    </div>
                    <span className="text-gray-400 text-[12px]">{r.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                <StarRow count={r.rating} />
              </div>
              <p className="text-gray-600 text-[13px] leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </section>
    </CourseDetailLayout>
  );
};

export default CourseReviews;
