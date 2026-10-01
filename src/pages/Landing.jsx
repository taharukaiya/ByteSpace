import React, { useState } from 'react';
import { FiSearch, FiCheckCircle, FiStar } from 'react-icons/fi';
import { BiBarChartAlt2 } from 'react-icons/bi';
import CourseCard from '../components/CourseCard';
import StudentEllipse from '../components/StudentEllipse';

// ── Images ──────────────────────────────────────────────────────────────────
import imgFigma       from '../assets/images/Learn Figma from Basic.jpg';
import imgDigital     from '../assets/images/Build Digital Asset.jpg';
import imgData        from '../assets/images/the Power of Big Data.jpg';
import imgProductivity from '../assets/images/Balancing Productivity and Self-Care.jpg';
import imgMoney       from '../assets/images/Mastering Money Management.jpg';
import imgStartup     from '../assets/images/From Idea to Startup Success.jpg';
import guyLaptop      from '../assets/images/guy-holding-laptop.png';
import girlHeadphones from '../assets/images/girl-in-headphones.png';
import noodle         from '../assets/images/noodle.png';
import donut          from '../assets/images/donut.png';
import pyramid        from '../assets/images/pyramid.png';
import cylinder       from '../assets/images/cylinder.png';

// Category icons
import iconDesign      from '../assets/images/design.svg';
import iconDev         from '../assets/images/development.svg';
import iconIT          from '../assets/images/itandsoftware.svg';
import iconBusiness    from '../assets/images/business.svg';
import iconMarketing   from '../assets/images/marketing.svg';
import iconPhoto       from '../assets/images/photography.svg';

// Logoipsum
import logo1 from '../assets/images/logoipsum-1.svg';
import logo2 from '../assets/images/logoipsum-2.svg';
import logo3 from '../assets/images/logoipsum-3.svg';
import logo4 from '../assets/images/logoipsum-4.svg';
import logo5 from '../assets/images/logoipsum-5.svg';

// ── Data ─────────────────────────────────────────────────────────────────────
const COURSES = [
  { title:'Learn Figma from Basic',                 author:'purepearl studio', rating:4.5, price:25, lessons:17, duration:'2 hours 16 mins', comments:59, imageSrc:imgFigma },
  { title:'Build Digital Asset',                    author:'purepearl studio', rating:4.5, price:25, lessons:17, duration:'2 hours 16 mins', comments:59, imageSrc:imgDigital },
  { title:'the Power of Big Data',                  author:'purepearl studio', rating:4.5, price:25, lessons:17, duration:'2 hours 16 mins', comments:59, imageSrc:imgData },
  { title:'Balancing Productivity and Self-Care',   author:'purepearl studio', rating:4.5, price:25, lessons:17, duration:'2 hours 16 mins', comments:59, imageSrc:imgProductivity },
  { title:'Mastering Money Management',             author:'purepearl studio', rating:4.5, price:25, lessons:17, duration:'2 hours 16 mins', comments:59, imageSrc:imgMoney },
  { title:'From Idea to Startup Success',           author:'purepearl studio', rating:4.5, price:25, lessons:17, duration:'2 hours 16 mins', comments:59, imageSrc:imgStartup },
];

const CATEGORIES = [
  'Featured','Music','Drawing & Painting','Marketing','Animation',
  'Social Media','UI/UX Design','Creative Marketing','Digital Illustration',
  'Film & Video','Crafts','Freelance & Entrepreneurship',
  'Graphic Design','Photography','Productivity','Web Development',
  'Data Science','Cooking','+ More',
];

const PATHS = [
  { icon:iconDesign,   label:'Design' },
  { icon:iconDev,      label:'Development' },
  { icon:iconIT,       label:'IT & Software' },
  { icon:iconBusiness, label:'Business' },
  { icon:iconMarketing,label:'Marketing' },
  { icon:iconPhoto,    label:'Photography' },
];

const LOGOS = [logo1, logo2, logo3, logo4, logo5];

const TESTIMONIALS = [
  {
    name:'Linda Jones',    role:'UI/UX Designer',
    text:'ByteSpace transformed my career. The courses are top-notch and incredibly practical. My design skills have reached a whole new level thanks to the expert instructors.',
    rating:5,
  },
  {
    name:'Maria L',       role:'Software Engineer',
    text:'I can\'t recommend ByteSpace enough! The courses are comprehensive and engaging. I\'ve learned more here than in years of formal education. ByteSpace is a game-changer!',
    rating:5,
  },
  {
    name:'Phy D',         role:'Marketing Manager',
    text:'I\'ve tried many e-learning platforms, but ByteSpace stands out. The course quality, instructor expertise, and the community support have exceeded my expectations.',
    rating:5,
  },
];

// ── CSS filter helpers ────────────────────────────────────────────────────────
const filterWhite = 'brightness(0) invert(1)';
const filterGreen = 'brightness(0) saturate(100%) invert(85%) sepia(74%) saturate(600%) hue-rotate(30deg)';

// ── Component ─────────────────────────────────────────────────────────────────
const Landing = () => {
  const [activeCategory, setActiveCategory] = useState('Featured');

  return (
    <div className="font-sans">

      {/* ════════════════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative bg-[#0047FF] overflow-hidden pt-16 pb-0"
        style={{
          backgroundImage:`linear-gradient(to right,rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.1) 1px,transparent 1px)`,
          backgroundSize:'120px 120px',
        }}
      >
        {/* ── Decorative 3-D shapes ── */}
        {/* Left – large white noodle */}
        <img src={noodle} alt="" aria-hidden
          className="absolute left-[-40px] top-[80px] w-[180px] lg:w-[220px] pointer-events-none select-none"
          style={{ filter:filterWhite, opacity:0.9 }} />
        {/* Left-bottom – small white noodle */}
        <img src={noodle} alt="" aria-hidden
          className="absolute left-[30px] bottom-[220px] w-[100px] pointer-events-none select-none rotate-45 hidden md:block"
          style={{ filter:filterWhite, opacity:0.8 }} />
        {/* Left-bottom – white donut */}
        <img src={donut} alt="" aria-hidden
          className="absolute left-[-20px] bottom-[60px] w-[180px] lg:w-[200px] pointer-events-none select-none hidden md:block"
          style={{ filter:filterWhite, opacity:0.85 }} />
        {/* Right – white pyramid / triangle */}
        <img src={pyramid} alt="" aria-hidden
          className="absolute right-[80px] top-[60px] w-[90px] lg:w-[110px] pointer-events-none select-none hidden md:block"
          style={{ filter:filterWhite, opacity:0.85 }} />
        {/* Far-right – yellow-green cylinder */}
        <img src={cylinder} alt="" aria-hidden
          className="absolute right-[-30px] top-[30px] w-[130px] lg:w-[160px] pointer-events-none select-none hidden lg:block"
          style={{ filter:filterGreen }} />
        {/* Right-bottom – white noodle */}
        <img src={noodle} alt="" aria-hidden
          className="absolute right-[20px] bottom-[200px] w-[130px] pointer-events-none select-none rotate-12 hidden md:block"
          style={{ filter:filterWhite, opacity:0.8 }} />

        {/* ── Main content ── */}
        <div className="relative z-10 w-11/12 lg:w-10/12 mx-auto text-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-[56px] font-bold font-poppins leading-tight max-w-3xl mx-auto">
            Get Access to Hundreds<br className="hidden sm:block" /> Courses Available
          </h1>
          <p className="text-white/80 mt-5 text-[14px] md:text-[16px] max-w-xl mx-auto leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search bar */}
          <div className="mt-8 flex items-center bg-white rounded-full px-4 py-1.5 max-w-lg mx-auto shadow-lg">
            <FiSearch className="text-gray-400 text-lg flex-shrink-0 ml-1" />
            <input
              className="flex-1 px-3 py-2 text-[14px] text-gray-700 focus:outline-none bg-transparent"
              placeholder="Course, topic, creator"
            />
            <button className="bg-[#D4FF00] text-black font-semibold text-[14px] px-6 py-2.5 rounded-full hover:bg-[#c8f200] transition-colors flex-shrink-0">
              Search
            </button>
          </div>

          {/* ── Hero image area ── */}
          <div className="relative mt-12 flex justify-center items-end">
            {/* Green blob behind student */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-full bg-[#D4FF00]"
              style={{ width:'min(480px,90vw)', height:'min(420px,80vw)' }}
            />

            {/* Student image */}
            <img
              src={guyLaptop}
              alt="Student with laptop"
              className="relative z-10 h-[300px] sm:h-[360px] md:h-[420px] lg:h-[460px] object-contain object-bottom"
            />

            {/* Floating card – UI/UX Design (left) */}
            <div className="absolute left-[4%] sm:left-[8%] lg:left-[10%] bottom-[36%] bg-white rounded-2xl px-4 py-3 shadow-xl z-20 text-left w-[150px] sm:w-[170px] hidden sm:block">
              <p className="font-bold text-gray-900 text-[13px] font-poppins">UI/UX Design</p>
              <p className="text-gray-400 text-[11px] mt-0.5">200 Courses</p>
              <p className="text-gray-400 text-[11px]">1000+ Students</p>
            </div>

            {/* Floating card – Happy Students (bottom-left) */}
            <div className="absolute left-[2%] sm:left-[5%] bottom-[4%] bg-[#D4FF00] rounded-2xl px-4 py-3 shadow-xl z-20 hidden sm:block">
              <p className="font-bold text-gray-900 text-[13px] font-poppins">Happy Students</p>
              <p className="text-gray-800 text-[11px] flex items-center gap-1 mt-0.5 mb-2">
                4.5 <span className="text-gray-500">(240)</span>
                <FiStar className="text-[#0047FF] fill-[#0047FF] text-[12px]" />
              </p>
              <StudentEllipse avatarCount={5} countText="2K+" size="sm" variant="dark" />
            </div>

            {/* Floating card – Learning Progress (right) */}
            <div className="absolute right-[4%] sm:right-[8%] lg:right-[10%] bottom-[32%] bg-white rounded-2xl px-4 py-3 shadow-xl z-20 hidden sm:block w-[155px]">
              <p className="text-gray-500 text-[10px] mb-1">Learning Progress</p>
              <p className="text-gray-900 font-bold text-[32px] font-poppins leading-none">55%</p>
              <div className="mt-2 w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-full bg-[#D4FF00] rounded-full" style={{ width:'55%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PARTNER LOGOS
          ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F4F4F4] py-8">
        <div className="w-11/12 lg:w-10/12 mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {LOGOS.map((src, i) => (
            <img key={i} src={src} alt={`Partner ${i+1}`} className="h-7 md:h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition" />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          COURSES SECTION
          ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-[36px] font-bold font-poppins text-gray-900 leading-tight">
              Discover Your Passion,<br />Build Your Skills
            </h2>
            <p className="text-gray-500 text-[14px] md:text-[15px] mt-4 max-w-2xl mx-auto leading-relaxed">
              At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
            </p>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#D4FF00] text-gray-900 font-semibold'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Course grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course, i) => (
              <CourseCard key={i} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          DIVERSE LEARNING PATHS
          ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="w-11/12 lg:w-10/12 mx-auto text-center">
          <h2 className="text-3xl md:text-[34px] font-bold font-poppins text-gray-900">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-gray-500 text-[14px] md:text-[15px] mt-4 max-w-2xl mx-auto leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>

          {/* Path cards */}
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-6 gap-4">
            {PATHS.map(({ icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-[18px] py-6 px-2 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="w-[56px] h-[56px] rounded-full bg-[#D4FF00] flex items-center justify-center">
                  <img src={icon} alt={label} className="w-6 h-6 object-contain" />
                </div>
                <span className="text-gray-800 font-semibold text-[13px] md:text-[14px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PROFESSIONAL GROWTH
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 md:py-24 overflow-hidden"
        style={{ background:'linear-gradient(135deg,#f0f4ff 0%,#faffef 50%,#f5f5f5 100%)' }}
      >
        <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: text */}
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-[38px] font-bold font-poppins text-gray-900 leading-tight">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="text-gray-500 text-[14px] md:text-[15px] mt-5 leading-relaxed max-w-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats */}
            <div className="flex gap-10 mt-10">
              {[['12K','Students'],['70+','Courses'],['16','Creators']].map(([num,label]) => (
                <div key={label}>
                  <p className="text-[#0047FF] font-bold text-[28px] md:text-[32px] font-poppins leading-none">{num}</p>
                  <p className="text-gray-500 text-[13px] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image + floating cards */}
          <div className="lg:w-1/2 relative flex justify-center">
            {/* Green noodle decoration */}
            <img src={noodle} alt="" aria-hidden
              className="absolute top-[-20px] right-[0px] w-[80px] z-20 pointer-events-none hidden sm:block"
              style={{ filter:filterGreen }} />

            {/* Student image */}
            <img
              src={guyLaptop}
              alt="Student"
              className="relative z-10 h-[340px] md:h-[400px] object-contain"
            />

            {/* Floating course card */}
            <div className="absolute left-[-10px] sm:left-[-30px] bottom-[40px] z-20 w-[170px] md:w-[190px] bg-white rounded-2xl p-3 shadow-xl">
              <div className="rounded-xl overflow-hidden mb-2 aspect-video">
                <img src={imgFigma} alt="" className="w-full h-full object-cover" />
              </div>
              <p className="font-bold text-gray-900 text-[11px] font-poppins">Learn Figma fr...</p>
              <p className="text-gray-400 text-[10px]">by purepearl studio</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <BiBarChartAlt2 className="text-gray-400 text-[12px]" />
                <span className="text-gray-500 text-[10px]">Beginner</span>
              </div>
              <p className="text-[#0047FF] font-bold text-[14px] mt-1.5">$25<span className="text-gray-400 font-normal text-[10px]">/lifetime</span></p>
            </div>

            {/* Learning Progress card */}
            <div className="absolute right-[-10px] sm:right-[-20px] top-[30px] z-20 bg-white rounded-2xl px-4 py-3 shadow-xl w-[150px]">
              <p className="text-gray-500 text-[10px] mb-1">Learning Progress</p>
              <p className="text-gray-900 font-bold text-[28px] font-poppins leading-none">55%</p>
              <div className="mt-2 w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-full bg-[#D4FF00] rounded-full" style={{ width:'55%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CREATE & MANAGE COURSES
          ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: image + floating card */}
          <div className="lg:w-1/2 relative flex justify-center">
            <img
              src={girlHeadphones}
              alt="Creator"
              className="relative z-10 h-[340px] md:h-[420px] object-contain rounded-3xl"
            />
            {/* Revenue floating card */}
            <div className="absolute bottom-[30px] left-[-10px] sm:left-[-20px] z-20 bg-[#0047FF] rounded-2xl px-4 py-3 shadow-xl text-white">
              <p className="text-white/70 text-[10px]">Total Revenue</p>
              <p className="text-white/70 text-[10px]">July, 105</p>
              <p className="font-bold text-[22px] font-poppins mt-0.5">$120.29</p>
            </div>
          </div>

          {/* Right: text */}
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-[38px] font-bold font-poppins text-gray-900 leading-tight">
              Create & Manage<br />Courses Easily.
            </h2>
            <p className="text-gray-500 text-[14px] md:text-[15px] mt-5 leading-relaxed max-w-lg">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            <ul className="mt-8 space-y-4">
              {['Share Your Expertise','Monetize Your Passion','Flexibility and Autonomy','Build a Community'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-medium text-[14px] md:text-[15px]">
                  <FiCheckCircle className="text-[#0047FF] text-[20px] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          UNLOCK POTENTIAL CTA
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-20 md:py-28 overflow-hidden bg-[#0047FF]"
        style={{
          backgroundImage:`linear-gradient(to right,rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.08) 1px,transparent 1px)`,
          backgroundSize:'120px 120px',
        }}
      >
        {/* Decorative shapes */}
        <img src={noodle} alt="" aria-hidden className="absolute left-6 top-8 w-24 pointer-events-none hidden md:block" style={{ filter:filterGreen }} />
        <img src={pyramid} alt="" aria-hidden className="absolute right-10 bottom-10 w-20 pointer-events-none hidden md:block" style={{ filter:filterGreen }} />
        <img src={noodle} alt="" aria-hidden className="absolute right-16 top-6 w-20 pointer-events-none hidden md:block rotate-45" style={{ filter:filterWhite, opacity:0.7 }} />

        <div className="relative z-10 w-11/12 lg:w-10/12 mx-auto text-center">
          <h2 className="text-white text-3xl md:text-[42px] font-bold font-poppins leading-tight max-w-2xl mx-auto">
            Unlock Your Potential as a<br />Creator with ByteSpace
          </h2>
          <p className="text-white/80 mt-5 text-[14px] md:text-[16px] max-w-2xl mx-auto leading-relaxed">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <button className="mt-10 bg-[#D4FF00] text-black font-semibold text-[15px] px-10 py-3.5 rounded-full hover:bg-[#c8f200] transition-colors">
            Join as Creator
          </button>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TESTIMONIALS
          ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[36px] font-bold font-poppins text-gray-900">
              Discover What Our<br />Community is Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, role, text, rating }) => (
              <div key={name} className="bg-[#F9F9F9] rounded-[20px] p-6 flex flex-col gap-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <FiStar key={i} className="text-[#D4FF00] fill-[#D4FF00] text-[16px]" />
                  ))}
                </div>
                {/* Review text */}
                <p className="text-gray-600 text-[13px] md:text-[14px] leading-relaxed flex-1">{text}</p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-[#D4FF00] flex items-center justify-center font-bold text-gray-900 text-[14px] flex-shrink-0">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-[14px] font-poppins">{name}</p>
                    <p className="text-gray-400 text-[12px]">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Landing;
