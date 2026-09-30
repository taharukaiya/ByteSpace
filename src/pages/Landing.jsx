import React from 'react';
import { FiSearch, FiChevronRight, FiPlay, FiStar, FiUser, FiCheckCircle } from 'react-icons/fi';

const Landing = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-[#0047FF] text-white pt-16 pb-32 px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Get Access to Hundreds<br/>Courses Available
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
          
          <div className="bg-white rounded-full p-2 max-w-2xl mx-auto flex items-center shadow-lg">
            <FiSearch className="text-gray-400 ml-4 text-xl" />
            <input 
              type="text" 
              placeholder="Course, topic, creator" 
              className="flex-grow px-4 py-2 text-gray-800 focus:outline-none"
            />
            <button className="bg-[#D4FF00] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#bce600] transition">
              Search
            </button>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-[#D4FF00] rounded-tl-[40px] rounded-br-[40px] rotate-12 opacity-80"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border-[12px] border-white rounded-full opacity-20"></div>
        {/* Placeholder for Hero Image */}
        <div className="mt-16 mx-auto w-full max-w-3xl h-80 bg-blue-800 rounded-t-full relative z-10 border-4 border-[#D4FF00] flex items-center justify-center">
             <span className="text-blue-300">Hero Image Placeholder</span>
        </div>
      </section>

      {/* Partners / Logos Section */}
      <section className="bg-gray-100 py-10 flex justify-center gap-12 flex-wrap px-8">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex items-center gap-2 text-gray-400 font-bold text-xl">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div> Logoipsum
          </div>
        ))}
      </section>

      {/* Categories & Courses */}
      <section className="py-20 px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Discover Your Passion,<br/>Build Your Skills</h2>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>

        {/* Categories Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography', 'Productivity', 'Web Development', 'Data Science', 'Cooking', '+ More'].map((cat, idx) => (
            <button 
              key={idx} 
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${idx === 0 ? 'bg-[#D4FF00] text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            { title: "Learn Figma from Basic", author: "purepearl studio", rating: 4.5, price: 25 },
            { title: "Build Digital Asset", author: "purepearl studio", rating: 4.5, price: 25 },
            { title: "the Power of Big Data", author: "purepearl studio", rating: 4.5, price: 25 },
            { title: "Balancing Productivity and...", author: "purepearl studio", rating: 4.5, price: 25 },
            { title: "Mastering Money Manage...", author: "purepearl studio", rating: 4.5, price: 25 },
            { title: "From Idea to Startup Succ...", author: "purepearl studio", rating: 4.5, price: 25 },
          ].map((course, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition bg-white p-4">
              <div className="bg-gray-200 h-48 rounded-xl mb-4"></div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{course.title}</h3>
                <div className="flex items-center text-yellow-500 font-bold">
                  {course.rating} <FiStar className="ml-1" />
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-4">by {course.author}</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                <div className="font-bold text-xl">${course.price}<span className="text-sm font-normal text-gray-500">/lifetime</span></div>
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Diverse Learning Paths */}
      <section className="bg-gray-50 py-20 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore Diverse Learning Paths at Bytespace</h2>
        <p className="text-gray-500 mb-12 max-w-3xl mx-auto">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone.
        </p>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {['Design', 'Development', 'IT & Software', 'Business', 'Marketing', 'Photography'].map((path, idx) => (
             <div key={idx} className="bg-white border border-gray-200 p-6 rounded-2xl w-40 h-40 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer">
                <div className="w-16 h-16 bg-[#D4FF00] bg-opacity-20 rounded-full flex items-center justify-center mb-4 text-[#8baf00]">
                  <FiPlay size={24} />
                </div>
                <span className="font-semibold text-gray-700">{path}</span>
             </div>
          ))}
        </div>
      </section>

      {/* Your Path to Professional Growth */}
      <section className="py-20 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Your Path to Professional Growth Starts Here!</h2>
          <p className="text-gray-500 mb-10 text-lg">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>
          <div className="flex gap-12">
            <div>
              <div className="text-4xl font-bold text-[#0047FF]">12K</div>
              <div className="text-gray-500">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0047FF]">70+</div>
              <div className="text-gray-500">Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0047FF]">16</div>
              <div className="text-gray-500">Creators</div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative">
           <div className="w-full h-[500px] bg-gray-200 rounded-3xl overflow-hidden relative">
             <div className="absolute top-10 right-10 w-48 bg-white p-4 rounded-xl shadow-xl">
               <div className="text-sm text-gray-500 mb-1">Learning Progress</div>
               <div className="text-3xl font-bold">55%</div>
               <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                 <div className="bg-[#D4FF00] w-[55%] h-full rounded-full"></div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Create & Manage Courses */}
      <section className="py-20 px-8 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
        <div className="md:w-1/2 relative">
           <div className="w-full h-[500px] bg-gray-200 rounded-3xl overflow-hidden"></div>
           <div className="absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
              <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>)}
              </div>
              <div>
                <div className="font-bold text-sm">Happy Students</div>
                <div className="text-xs text-yellow-500 flex items-center">4.5 <FiStar className="ml-1"/></div>
              </div>
           </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Create & Manage<br/>Courses Easily.</h2>
          <p className="text-gray-500 mb-8 text-lg">
            ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
          </p>
          <ul className="space-y-4 mb-8">
            {['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-[#0047FF] text-white flex items-center justify-center">
                  <FiCheckCircle />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Unlock Potential CTA */}
      <section className="bg-[#0047FF] text-white py-24 px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-6">Unlock Your Potential as a<br/>Creator with ByteSpace</h2>
          <p className="text-blue-100 mb-10 text-lg">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <button className="bg-[#D4FF00] text-black px-8 py-3 rounded-full font-bold hover:bg-[#bce600] transition">
            Join as Creator
          </button>
        </div>
      </section>

    </div>
  );
};

export default Landing;
