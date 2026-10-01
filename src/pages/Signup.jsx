import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthCollage from '../components/AuthCollage';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup with", name, email, password);
  };

  return (
    <div className="min-h-screen bg-[#0047FF] font-sans overflow-x-hidden flex flex-col relative">
      
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '150px 150px',
          backgroundPosition: 'center top'
        }}
      ></div>

      {/* Top Logo */}
      <div className="relative z-20 w-11/12 lg:w-10/12 mx-auto pt-10 pb-4">
        <Link to="/">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </Link>
      </div>

      <div className="relative z-10 w-11/12 lg:w-10/12 mx-auto flex-grow flex flex-col md:flex-row items-center justify-between pb-16 pt-4 gap-12">
        
        {/* Left Side - Text & Collage */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-white text-3xl font-bold font-poppins mb-6">
            Sign up and come in
          </h1>
          <p className="text-blue-100/90 max-w-md text-[15px] leading-relaxed font-sans font-light">
            The registration process is straightforward, uncomplicated,
            and efficient, allowing users to sign up quickly, easily, and at
            no cost
          </p>

          <AuthCollage />
        </div>

        {/* Right Side - Form Card */}
        <div className="w-full md:w-[480px] bg-white rounded-[32px] p-10 lg:p-12 shadow-2xl relative z-30">
          
          <p className="text-[#0047FF] mb-2 font-medium text-[15px]">Create an Account</p>
          <h2 className="text-4xl lg:text-[42px] font-bold font-poppins text-gray-900 mb-10 leading-tight">
            Welcome to<br/>ByteSpace
          </h2>
          
          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] text-[15px]"
                placeholder="Jamie Davis"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] text-[15px]"
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
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] text-[15px] tracking-widest"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end pt-2">
               <button 
                type="submit" 
                className="bg-[#D4FF00] text-black font-semibold py-3.5 px-10 rounded-full hover:bg-[#bce600] transition-colors text-[15px]"
              >
                Continue
              </button>
            </div>
          </form>

          <div className="mt-16 text-center text-[14px] text-gray-500">
            Already have an account? <Link to="/login" className="text-[#0047FF] hover:underline font-medium">Login</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
