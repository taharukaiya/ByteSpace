import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import imgDigital from '../assets/images/Build Digital Asset.jpg';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Firebase auth integration goes here
    console.log("Signup with", name, email, password);
  };

  return (
    <div className="min-h-screen bg-[#0047FF] flex items-center justify-center p-8 relative overflow-hidden font-sans">
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-transparent rounded-3xl overflow-hidden shadow-2xl relative z-10 h-[85vh]">
        
        {/* Left Side - Illustration */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center relative bg-[#0047FF] text-white hidden md:flex border-r border-blue-500">
           <Link to="/" className="absolute top-8 left-12 text-2xl font-bold flex items-center gap-2">
            <span className="text-[#D4FF00]">b</span>
           </Link>
           <h2 className="text-3xl font-bold font-poppins mb-4">Sign up and come in</h2>
           <p className="text-blue-100 max-w-sm mb-12 leading-relaxed">
             The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
           </p>
           
           {/* Course Card Component */}
           <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-24 z-20 w-80 scale-90 pointer-events-none">
             <CourseCard 
                title="Build Digital Asset"
                author="purepearl studio"
                rating={4.5}
                price={25}
                lessons={17}
                duration="2 hours 16 mins"
                comments={59}
                imageSrc={imgDigital}
             />
           </div>
           
           {/* Decorative elements */}
           <div className="absolute left-10 top-1/3 w-20 h-20 border-[10px] border-[#D4FF00] rounded-full z-10"></div>
           <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#D4FF00] rounded-tl-[40px] rounded-br-[40px] rotate-12 z-10"></div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-white p-12 md:p-16 flex flex-col justify-center rounded-3xl md:rounded-l-none relative z-30">
          <p className="text-[#0047FF] mb-2 font-medium">Create an Account</p>
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-10">Welcome to<br/>ByteSpace</h2>
          
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF]"
                placeholder="Jamie Davis"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF]"
                placeholder="designer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF]"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end pt-4">
               <button 
                type="submit" 
                className="bg-[#D4FF00] text-black font-semibold py-3.5 px-9 rounded-full hover:bg-[#bce600] transition-colors"
              >
                Continue
              </button>
            </div>
          </form>

          <p className="mt-12 text-center text-[15px] text-gray-600">
            Already have an account? <Link to="/login" className="text-[#0047FF] hover:underline font-medium">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
