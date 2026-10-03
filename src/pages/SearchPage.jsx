import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronDown, FiSliders, FiCheck } from 'react-icons/fi';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { LuLayoutGrid } from 'react-icons/lu';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import { COURSES, CATEGORIES } from '../data/mockData';

const LEVELS = ['All Level', 'Beginner', 'Intermediate', 'Advanced'];
const FILTERS = ['All Courses', 'Popular Only'];
const SORTS = ['Most relevant', 'Top rated', 'Price: Low to High', 'Price: High to Low'];

/** Pill dropdown that matches the Figma filter buttons */
const PillDropdown = ({ icon: Icon, label, options, value, onChange, align = 'left', variant = 'outline' }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const styles =
    variant === 'accent'
      ? 'bg-[#D4FF00] text-black hover:bg-[#c8f200] border-transparent font-semibold'
      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 font-medium';

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-2 border rounded-full px-4 py-2 text-[13px] transition-colors whitespace-nowrap ${styles}`}
      >
        {Icon && <Icon size={14} />}
        {label}
        <FiChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className={`absolute top-full mt-2 min-w-[180px] bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-30 max-h-64 overflow-y-auto ${
              align === 'right' ? 'right-0' : 'left-0'
            }`}
          >
            {options.map((opt) => (
              <li key={opt}>
                <button
                  onClick={() => { onChange(opt); setOpen(false); }}
                  className="w-full flex items-center justify-between gap-4 px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50 text-left"
                >
                  {opt}
                  {value === opt && <FiCheck size={14} className="text-[#0047FF]" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [level, setLevel] = useState('All Level');
  const [filter, setFilter] = useState('All Courses');
  const [sort, setSort] = useState('Most relevant');

  const filteredCourses = COURSES.filter((course) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = course.title.toLowerCase().includes(q) || course.author.toLowerCase().includes(q);
    const matchesCategory = activeCategory === 'Featured' || course.category === activeCategory;
    const matchesLevel = level === 'All Level' || course.level === level || course.level === 'All Levels';
    const matchesPopular = filter === 'Popular Only' ? course.popular === true : true;
    return matchesSearch && matchesCategory && matchesLevel && matchesPopular;
  }).sort((a, b) => {
    if (sort === 'Top rated') return b.rating - a.rating;
    if (sort === 'Price: Low to High') return a.price - b.price;
    if (sort === 'Price: High to Low') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* ── HERO SECTION ── */}
      <section className="w-full pt-12 pb-16 md:pb-20 relative">
        <div className="absolute inset-0 live-bg z-0" />
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-50 live-grid"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)`,
            backgroundSize: '120px 120px',
          }}
        />
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
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 w-11/12 lg:w-10/12 mx-auto text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-3xl md:text-[36px] font-bold font-poppins mb-8"
          >
            Find Your Next Course
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full max-w-2xl flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <input
              type="text"
              placeholder="Search"
              className="flex-grow bg-white rounded-full px-6 py-3 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 transition-shadow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <PillDropdown
              variant="accent"
              label="Courses"
              options={['Courses', 'Creators']}
              value="Courses"
              align="right"
              onChange={(v) => v === 'Creators' && navigate('/creators')}
            />
          </motion.div>
        </div>
      </section>

      {/* ── FILTERS & CATEGORIES ── */}
      <section className="w-11/12 lg:w-10/12 mx-auto pt-8 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-between items-center gap-3 mb-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <PillDropdown icon={FiSliders} label={filter === 'All Courses' ? 'Filter' : filter} options={FILTERS} value={filter} onChange={setFilter} />
            <PillDropdown icon={BiBarChartAlt2} label={level === 'All Level' ? 'Level' : level} options={LEVELS} value={level} onChange={setLevel} />
            <PillDropdown
              icon={LuLayoutGrid}
              label={activeCategory === 'Featured' ? 'Category' : activeCategory}
              options={CATEGORIES}
              value={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
          <PillDropdown icon={HiOutlineBars3BottomLeft} label={sort} options={SORTS} value={sort} onChange={setSort} align="right" />
        </motion.div>

        <div className="flex flex-wrap items-center gap-2.5">
          {CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 + i * 0.03 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[12px] font-medium transition-colors ${
                activeCategory === cat ? 'bg-[#D4FF00] text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </motion.button>
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
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course, i) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.04 }}
                >
                  <CourseCard {...course} courseId={course.id} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

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
