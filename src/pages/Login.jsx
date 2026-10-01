import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import imgData from '../assets/images/the Power of Big Data.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Firebase auth integration goes here
    console.log("Login with", email, password);
  };

  return (
    <div className="min-h-screen bg-[#0047FF] flex items-center justify-center p-8 relative overflow-hidden font-sans">
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-transparent rounded-3xl overflow-hidden shadow-2xl relative z-10 h-[80vh]">
        
        {/* Left Side - Illustration */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center relative bg-[#0047FF] text-white hidden md:flex border-r border-blue-500">
           <Link to="/" className="absolute top-8 left-12 text-2xl font-bold flex items-center gap-2">
            <span className="text-[#D4FF00]">b</span>
           </Link>
           <h2 className="text-3xl font-bold font-poppins mb-4">Sign in with ease</h2>
           <p className="text-blue-100 max-w-sm mb-12 leading-relaxed">
             Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
           </p>
           
           {/* Course Card component */}
           <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-24 z-20 w-80 scale-90 pointer-events-none">
             <CourseCard 
                title="the Power of Big Data"
                author="purepearl studio"
                rating={4.5}
                price={25}
                lessons={17}
                duration="2 hours 16 mins"
                comments={59}
                imageSrc={imgData}
             />
           </div>
           
           {/* Decorative elements */}
           <div className="absolute left-10 top-1/2 w-20 h-20 border-[10px] border-[#D4FF00] rounded-full z-10"></div>
           <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#D4FF00] rounded-tl-[40px] rounded-br-[40px] rotate-45 z-10"></div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-white p-12 md:p-20 flex flex-col justify-center rounded-3xl md:rounded-l-none relative z-30">
          <p className="text-[#0047FF] mb-2 font-medium">Sign In</p>
          <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-10">Welcome Back</h2>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF]"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end pt-2">
               <button 
                type="submit" 
                className="bg-[#D4FF00] text-black font-semibold py-3.5 px-9 rounded-full hover:bg-[#bce600] transition-colors"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-8 flex items-center">
             <div className="flex-grow border-t border-gray-200"></div>
             <span className="px-4 text-gray-400 text-sm">or</span>
             <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
             <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-xl font-bold text-gray-700">
                f
             </button>
             <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-xl font-bold text-gray-700">
                G
             </button>
          </div>

          <p className="mt-12 text-center text-[15px] text-gray-600">
            New user? <Link to="/signup" className="text-[#0047FF] hover:underline font-medium">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
