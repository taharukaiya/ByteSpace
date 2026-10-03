import React, { useState } from 'react';
import { FiSearch, FiCheckCircle, FiStar } from 'react-icons/fi';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import StudentEllipse from '../components/StudentEllipse';

// ── Images ───────────────────────────────────────────────────────────────────
import imgFigma from '../assets/images/Learn Figma from Basic.jpg';
import imgDigital from '../assets/images/Build Digital Asset.jpg';
import imgData from '../assets/images/the Power of Big Data.jpg';
import imgProductivity from '../assets/images/Balancing Productivity and Self-Care.jpg';
import imgMoney from '../assets/images/Mastering Money Management.jpg';
import imgStartup from '../assets/images/From Idea to Startup Success.jpg';
import guyLaptop from '../assets/images/guy-holding-laptop.png';
import girlHeadphones from '../assets/images/girl-in-headphones.png';
import noodle from '../assets/images/noodle.png';
import donut from '../assets/images/donut.png';
import pyramid from '../assets/images/pyramid.png';
import cylinder from '../assets/images/cylinder.png';
import avatarSarah from '../assets/images/sarah.png';
import avatarJames from '../assets/images/james.png';
import avatarAlex from '../assets/images/alex.png';

// Category icons
import iconDesign from '../assets/images/design.svg';
import iconDev from '../assets/images/development.svg';
import iconIT from '../assets/images/itandsoftware.svg';
import iconBusiness from '../assets/images/business.svg';
import iconMarketing from '../assets/images/marketing.svg';
import iconPhoto from '../assets/images/photography.svg';

// Logoipsum
import logo1 from '../assets/images/logoipsum-1.svg';
import logo2 from '../assets/images/logoipsum-2.svg';
import logo3 from '../assets/images/logoipsum-3.svg';
import logo4 from '../assets/images/logoipsum-4.svg';
import logo5 from '../assets/images/logoipsum-5.svg';

// ── Data ─────────────────────────────────────────────────────────────────────
const COURSES = [
  { title: 'Learn Figma from Basic', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgFigma },
  { title: 'Build Digital Asset', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgDigital },
  { title: 'the Power of Big Data', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgData },
  { title: 'Balancing Productivity and Self-Care', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgProductivity },
  { title: 'Mastering Money Management', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgMoney },
  { title: 'From Idea to Startup Success', author: 'purepearl studio', rating: 4.5, price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgStartup },
];

const CATEGORIES = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation',
  'Social Media', 'UI/UX Design', 'Creative Marketing', 'Digital Illustration',
  'Film & Video', 'Crafts', 'Freelance & Entrepreneurship',
  'Graphic Design', 'Photography', 'Productivity', 'Web Development',
  'Data Science', 'Cooking', '+ More',
];

const PATHS = [
  { icon: iconDesign, label: 'Design' },
  { icon: iconDev, label: 'Development' },
  { icon: iconIT, label: 'IT & Software' },
  { icon: iconBusiness, label: 'Business' },
  { icon: iconMarketing, label: 'Marketing' },
  { icon: iconPhoto, label: 'Photography' },
];

const LOGOS = [logo1, logo2, logo3, logo4, logo5];

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    roleColor: '#7C5CF6',
    avatar: avatarSarah,
    text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    roleColor: '#0047FF',
    avatar: avatarJames,
    text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    roleColor: '#16A34A',
    avatar: avatarAlex,
    text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

// ── CSS filter shorthands ─────────────────────────────────────────────────────
const filterGreen = 'brightness(0) saturate(100%) invert(90%) sepia(60%) saturate(600%) hue-rotate(28deg) brightness(1.05)';
const filterWhite = 'brightness(0) invert(1)';

export default function Landing() {
  const [activeCategory, setActiveCategory] = useState('Featured');

  return (
    <div className="font-sans">

      {/* ════════════════════════════════════ HERO ═══════════════════════════ */}
      <section className="relative live-bg overflow-hidden pt-16 md:pt-24 pb-0 border-b-[8px] border-[#D4FF00]">
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-50 live-grid"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)`,
            backgroundSize: '120px 120px',
            animationDelay: `-${(Date.now() % 10000) / 1000}s`
          }}
        />
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(15)].map((_, i) => (
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

        <div className="relative z-10 w-11/12 lg:w-10/12 mx-auto">

          {/* ─── Decorative shapes ─── */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[-12%] top-[0%] w-[25%] pointer-events-none z-0"
          >
            <motion.img 
              initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
              src={noodle} alt="" aria-hidden className="w-full h-full" style={{ filter: filterGreen }} 
            />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute left-[-3%] bottom-[15%] w-[20%] pointer-events-none z-30"
          >
            <motion.img 
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              src={donut} alt="" aria-hidden className="w-full h-full" style={{ filter: filterWhite, opacity: 0.95 }} 
            />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute right-[5%] top-[10%] w-[14%] pointer-events-none z-0"
          >
            <motion.img 
              initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 0.95 }} transition={{ duration: 0.8, delay: 0.4 }}
              src={pyramid} alt="" aria-hidden className="w-full h-full" style={{ filter: filterWhite }} 
            />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute right-[-12%] top-[0%] w-[22%] pointer-events-none z-30"
          >
            <motion.img 
              initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}
              src={cylinder} alt="" aria-hidden className="w-full h-full" style={{ filter: filterGreen }} 
            />
          </motion.div>

          {/* ─── Text content ─────────────────────────────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-40 text-center"
          >
            <h1 className="text-white text-4xl sm:text-5xl lg:text-[56px] font-bold font-poppins leading-tight max-w-3xl mx-auto">
              Get Access to Hundreds<br className="hidden sm:block" /> Courses Available
            </h1>
            <p className="text-white/80 mt-5 text-[14px] md:text-[16px] max-w-xl mx-auto leading-relaxed">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="mt-8 flex items-center bg-white rounded-full px-4 py-1.5 max-w-lg mx-auto shadow-lg"
            >
              <FiSearch className="text-gray-400 text-lg flex-shrink-0 ml-1" />
              <input
                className="flex-1 px-3 py-2 text-[14px] text-gray-700 focus:outline-none bg-transparent"
                placeholder="Course, topic, creator"
              />
              <button className="bg-[#D4FF00] text-black font-semibold text-[14px] px-6 py-2.5 rounded-full hover:bg-[#c8f200] transition-colors flex-shrink-0">
                Search
              </button>
            </motion.div>
          </motion.div>

          {/* ─── Hero image area ──────────────────────────────────────── */}
          <div className="mt-12 flex justify-center px-4 relative z-20">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative bg-[#D4FF00] w-full max-w-[850px] flex justify-center items-end"
              style={{
                aspectRatio: '2/1',
                borderTopLeftRadius: '2000px',
                borderTopRightRadius: '2000px',
              }}
            >
              <img
                src={guyLaptop}
                alt="Student with laptop"
                className="absolute bottom-[-1%] z-10 object-contain object-bottom pointer-events-none"
                style={{ height: '115%' }}
              />

              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }}
                className="absolute left-[-5%] sm:left-[0%] md:left-[8%] top-[25%] bg-white rounded-2xl px-4 py-3 shadow-xl z-20 text-left min-w-[150px]"
              >
                <p className="font-bold text-gray-900 text-[13px] font-poppins">UI/UX Design</p>
                <p className="text-gray-400 text-[11px] mt-0.5">200 Courses → 1000+ Students</p>
              </motion.div>

              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
                className="absolute left-[-8%] sm:left-[-2%] md:left-[5%] bottom-[12%] bg-white rounded-2xl px-4 py-3 shadow-xl z-20 text-left min-w-[150px]"
              >
                <p className="font-bold text-gray-900 text-[13px] font-poppins mb-1">Happy Students</p>
                <p className="text-gray-600 text-[11px] flex items-center gap-1 mb-2">
                  4.5 <span className="text-gray-400">(240)</span>
                  <FiStar className="text-[#D4FF00] fill-[#D4FF00] text-[11px]" />
                </p>
                <StudentEllipse avatarCount={5} countText="2K+" size="sm" variant="dark" />
              </motion.div>

              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring" }}
                className="absolute right-[-5%] sm:right-[0%] md:right-[8%] top-[35%] bg-white rounded-2xl px-4 py-3 shadow-xl z-20 text-left min-w-[145px]"
              >
                <p className="text-gray-500 text-[10px] mb-1">Learning Progress</p>
                <p className="text-gray-900 font-bold text-[34px] font-poppins leading-none">55%</p>
                <div className="mt-2 w-full h-1.5 bg-gray-200 rounded-full">
                  <motion.div 
                    initial={{ width: 0 }} animate={{ width: '55%' }} transition={{ duration: 1.5, delay: 1.5 }}
                    className="h-full bg-[#D4FF00] rounded-full" 
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ PARTNER LOGOS ════════════════════════ */}
      <section className="bg-[#F4F4F4] py-8 border-b border-gray-200 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-11/12 lg:w-10/12 mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {LOGOS.map((src, i) => (
            <motion.img 
              key={i} 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              src={src} 
              alt={`Partner ${i + 1}`} 
              className="h-7 md:h-8 opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition" 
            />
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════ COURSES ══════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-[38px] font-bold font-poppins text-gray-900 leading-tight">
              Discover Your Passion,<br />Build Your Skills
            </h2>
            <p className="text-gray-500 text-[14px] md:text-[15px] mt-4 max-w-2xl mx-auto leading-relaxed">
              At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
            </p>
          </motion.div>

          {/* Category pills */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2.5 mb-12"
          >
            {CATEGORIES.map((cat) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${activeCategory === cat
                  ? 'bg-[#D4FF00] text-gray-900 font-semibold'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Course grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {COURSES.map((course, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════ LEARNING PATHS ═══════════════════════════ */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="w-11/12 lg:w-10/12 mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-[36px] font-bold font-poppins text-gray-900">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="text-gray-500 text-[14px] md:text-[15px] mt-4 max-w-2xl mx-auto leading-relaxed">
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
            </p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="mt-12 grid grid-cols-3 sm:grid-cols-6 gap-4"
          >
            {PATHS.map(({ icon, label }) => (
              <motion.div 
                key={label} 
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-[18px] py-6 px-2 cursor-pointer shadow-sm transition-shadow"
              >
                <div className="w-[56px] h-[56px] rounded-full bg-[#D4FF00] flex items-center justify-center">
                  <img src={icon} alt={label} className="w-6 h-6 object-contain" />
                </div>
                <span className="text-gray-800 font-semibold text-[12px] md:text-[13px]">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════ COMBINED GROWTH & CREATE SECTIONS ══════════════════════ */}
      <div
        className="overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 10% 20%, #cce0ff 0%, transparent 35%), radial-gradient(circle at 90% 30%, rgba(212,255,0,0.35) 0%, transparent 30%), radial-gradient(circle at 10% 80%, rgba(212,255,0,0.35) 0%, transparent 30%), radial-gradient(circle at 90% 80%, #cce0ff 0%, transparent 30%), #f8faff',
        }}
      >
        {/* ── Professional Growth ── */}
        <section className="py-16 md:pt-16 md:pb-4">
          <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Left: text + stats */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-[38px] font-bold font-poppins text-gray-900 leading-tight">
                Your Path to Professional<br />Growth Starts Here!
              </h2>
              <p className="text-gray-500 text-[14px] md:text-[15px] mt-5 leading-relaxed max-w-lg">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>
              <div className="flex gap-10 mt-10">
                {[['12K', 'Students'], ['70+', 'Courses'], ['16', 'Creators']].map(([num, lbl]) => (
                  <div key={lbl}>
                    <p className="text-[#0047FF] font-bold text-[30px] md:text-[34px] font-poppins leading-none">{num}</p>
                    <p className="text-gray-500 text-[13px] mt-1">{lbl}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: grouped student + floating cards */}
            <div className="lg:w-1/2 flex justify-center py-10">
              {/* Group container hugs the image size */}
              <div className="relative inline-block">
                {/* Student image */}
                <img src={guyLaptop} alt="Student" className="relative z-20 h-[320px] md:h-[420px] object-contain drop-shadow-2xl" />

                {/* Green noodle top-right */}
                <img src={noodle} alt="" aria-hidden
                  className="absolute top-[10%] right-[-5%] w-[60px] md:w-[70px] z-30 pointer-events-none hidden sm:block"
                  style={{ filter: filterGreen }} />

                {/* Floating mini course card (BEHIND student) */}
                <div className="absolute left-[-10%] bottom-[15%] z-10 w-[160px] md:w-[190px] bg-white rounded-2xl p-3 shadow-xl">
                  <div className="rounded-xl overflow-hidden mb-2" style={{ aspectRatio: '16/9' }}>
                    <img src={imgFigma} alt="" className="w-full h-full object-cover" />
                  </div>
                  <p className="font-bold text-gray-900 text-[11px] md:text-[12px] font-poppins leading-snug">Learn Figma fr...</p>
                  <p className="text-gray-400 text-[10px] md:text-[11px]">by purepearl studio</p>
                  <div className="flex items-center gap-1 mt-1.5">
                    <BiBarChartAlt2 className="text-gray-400 text-[11px]" />
                    <span className="text-gray-500 text-[10px]">Beginner</span>
                  </div>
                  <p className="text-[#0047FF] font-bold text-[13px] mt-1">$25<span className="text-gray-400 font-normal text-[10px]">/lifetime</span></p>
                </div>

                {/* Learning Progress floating card */}
                <div className="absolute right-[-5%] top-[25%] z-30 bg-white rounded-2xl px-4 py-3 shadow-xl w-[140px] md:w-[160px]">
                  <p className="text-gray-500 text-[10px] mb-1">Learning Progress</p>
                  <p className="text-gray-900 font-bold text-[28px] md:text-[32px] font-poppins leading-none">55%</p>
                  <div className="mt-2 w-full h-1.5 bg-gray-200 rounded-full">
                    <div className="h-full bg-[#D4FF00] rounded-full" style={{ width: '55%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Create & Manage ── */}
        <section className="py-16 md:py-5">
          <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
            {/* Left: grouped girl image + floating cards */}
            <div className="lg:w-1/2 flex justify-center py-10">
              <div className="relative inline-block">
                {/* Girl image */}
                <img src={girlHeadphones} alt="Creator with headphones" className="relative z-20 h-[340px] md:h-[460px] object-contain drop-shadow-2xl" />

                {/* Green noodle (BEHIND girl) */}
                <img src={noodle} alt="" aria-hidden
                  className="absolute right-[0%] top-[40%] w-[80px] md:w-[90px] z-10 pointer-events-none hidden sm:block rotate-12"
                  style={{ filter: filterGreen }} />

                {/* Total Revenue card (top-left, BEHIND girl) */}
                <div className="absolute left-[-0%] top-[15%] z-10 bg-[#0047FF] rounded-2xl px-4 py-3 md:py-4 shadow-xl text-white w-[140px] md:w-[160px]">
                  <p className="text-white/70 text-[10px] md:text-[11px]">Total Revenue</p>
                  <p className="text-white/60 text-[9px] md:text-[10px]">July, 105</p>
                  <p className="font-bold text-[20px] md:text-[24px] font-poppins mt-0.5">$120.29</p>
                  <div className="mt-2 w-full h-1 bg-blue-400/40 rounded-full">
                    <div className="h-full bg-[#D4FF00] rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>

                {/* Year to Date card (mid-left, BEHIND girl) */}
                <div className="absolute left-[-5%] top-[45%] z-10 bg-[#0047FF] rounded-2xl px-4 py-3 md:py-4 shadow-xl text-white w-[140px] md:w-[160px]">
                  <p className="text-white/70 text-[10px] md:text-[11px]">Year to Date</p>
                  <p className="text-white/60 text-[9px] md:text-[10px]">2023</p>
                  <p className="font-bold text-[20px] md:text-[24px] font-poppins mt-0.5 mb-2">$1,200.38</p>
                  <div className="inline-block bg-[#D4FF00] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                    +12%
                  </div>
                </div>

                {/* Happy Students card (bottom, IN FRONT of girl) */}
                <div className="absolute bottom-[5%] right-[-5%] z-30 bg-white rounded-2xl px-4 py-3 shadow-xl text-left w-[170px] md:w-[190px]">
                  <p className="font-bold text-gray-900 text-[13px] md:text-[14px] font-poppins mb-1">Happy Students</p>
                  <p className="text-gray-500 text-[11px] md:text-[12px] flex items-center gap-1 mb-2">
                    4.5 <span className="text-gray-400">(240)</span>
                    <FiStar className="text-[#D4FF00] fill-[#D4FF00] text-[11px]" />
                  </p>
                  <StudentEllipse avatarCount={5} countText="2K+" size="sm" variant="dark" />
                </div>
              </div>
            </div>

            {/* Right: text + checklist */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-[38px] font-bold font-poppins text-gray-900 leading-tight">
                Create & Manage<br />Courses Easily.
              </h2>
              <p className="text-gray-500 text-[14px] md:text-[15px] mt-5 leading-relaxed max-w-lg">
                ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>
              <ul className="mt-8 space-y-4">
                {['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 font-medium text-[14px] md:text-[15px]">
                    <FiCheckCircle className="text-[#0047FF] text-[20px] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* ════════════════════════════ UNLOCK POTENTIAL CTA ═══════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden live-bg border-t-[8px] border-[#D4FF00]">
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-50 live-grid"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)`,
            backgroundSize: '120px 120px',
          }}
        />
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

        {/* ── Decorative Shapes (Matching Figma exactly) ── */}

        {/* Top Left: Green Noodle */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-2%] top-[-5%] w-[18%] pointer-events-none z-0"
        >
          <motion.img 
            initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
            src={noodle} alt="" aria-hidden className="w-full h-full" style={{ filter: filterGreen }} 
          />
        </motion.div>

        {/* Mid Left: White Noodle */}
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [45, 40, 45] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute left-[12%] top-[18%] w-[10%] pointer-events-none z-0"
        >
          <motion.img 
            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 0.9 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}
            src={noodle} alt="" aria-hidden className="w-full h-full" style={{ filter: filterWhite }} 
          />
        </motion.div>

        {/* Bottom Left: White Pyramid */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [-15, -10, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute left-[2%] bottom-[5%] w-[12%] pointer-events-none z-0"
        >
          <motion.img 
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
            src={pyramid} alt="" aria-hidden className="w-full h-full" style={{ filter: filterWhite, opacity: 0.95 }} 
          />
        </motion.div>

        {/* Bottom Mid-Left: Green Donut */}
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute left-[8%] bottom-[-15%] w-[20%] pointer-events-none z-0"
        >
          <motion.img 
            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
            src={donut} alt="" aria-hidden className="w-full h-full" style={{ filter: filterGreen }} 
          />
        </motion.div>

        {/* Top Right: Green Pyramid */}
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [15, 20, 15] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute right-[22%] top-[10%] w-[8%] pointer-events-none z-0"
        >
          <motion.img 
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}
            src={pyramid} alt="" aria-hidden className="w-full h-full" style={{ filter: filterGreen }} 
          />
        </motion.div>

        {/* Mid Right: Massive White Cylinder */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [15, 10, 15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-5%] top-[15%] w-[22%] pointer-events-none z-0"
        >
          <motion.img 
            initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 0.95 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}
            src={cylinder} alt="" aria-hidden className="w-full h-full" style={{ filter: filterWhite }} 
          />
        </motion.div>

        {/* Bottom Right: Green Noodle */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [15, 25, 15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute right-[2%] bottom-[-15%] w-[18%] pointer-events-none z-0"
        >
          <motion.img 
            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}
            src={noodle} alt="" aria-hidden className="w-full h-full" style={{ filter: filterGreen }} 
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 w-11/12 lg:w-10/12 mx-auto text-center"
        >
          <h2 className="text-white text-3xl md:text-[42px] font-bold font-poppins leading-tight max-w-2xl mx-auto">
            Unlock Your Potential as a<br />Creator with ByteSpace
          </h2>
          <p className="text-white/80 mt-5 text-[14px] md:text-[16px] max-w-2xl mx-auto leading-relaxed">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-[#D4FF00] text-black font-semibold text-[15px] px-10 py-3.5 rounded-full hover:bg-[#c8f200] transition-colors"
          >
            Join as Creator
          </motion.button>
        </motion.div>
      </section>

      {/* ═══════════════════════════ TESTIMONIALS ════════════════════════════ */}
      <section
        className="py-16 md:py-24"
        style={{ background: 'radial-gradient(circle at 0% 100%, #e0e8ff 0%, transparent 50%), radial-gradient(circle at 100% 0%, #dcfc9a 0%, transparent 50%), #f4f6fa' }}
      >
        <div className="w-11/12 lg:w-10/12 mx-auto">

          {/* ── Two-column header ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-14"
          >
            {/* Left: heading */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-[40px] font-bold font-poppins text-gray-900 leading-tight">
                Discover What Our<br />Community Is Saying
              </h2>
            </div>
            {/* Right: description */}
            <div className="lg:w-1/2 flex items-center">
              <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </motion.div>

          {/* ── Three testimonial cards ── */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {TESTIMONIALS.map(({ name, role, roleColor, avatar, text }) => (
              <motion.div 
                key={name} 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white rounded-[20px] p-6 flex flex-col gap-4 shadow-sm"
              >
                {/* Avatar + name + role */}
                <div className="flex items-center gap-3">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-[15px] font-poppins">{name}</p>
                    <p className="text-[13px] font-medium" style={{ color: roleColor }}>{role}</p>
                  </div>
                </div>
                {/* Quote */}
                <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed">
                  "{text}"
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}
