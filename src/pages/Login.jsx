import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthCollage from '../components/AuthCollage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with", email, password);
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
      <div className="relative z-20 w-11/12 lg:w-10/12 mx-auto pt-6 md:pt-10 pb-2 md:pb-4">
        <Link to="/">
          <img src="/logo.svg" alt="Logo" className="h-6 md:h-8" />
        </Link>
      </div>

      <div className="relative z-10 w-11/12 lg:w-10/12 mx-auto flex-grow flex flex-col xl:flex-row items-center justify-between pb-10 md:pb-16 pt-2 md:pt-4 gap-8 md:gap-12">
        
        {/* Left Side - Text & Collage */}
        <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="text-white text-3xl md:text-4xl font-bold font-poppins mb-4 md:mb-6">
            Sign in with ease
          </h1>
          <p className="text-blue-100/90 max-w-md text-[14px] md:text-[15px] leading-relaxed font-sans font-light">
            Experience a seamless and efficient sign-in process that
            grants you instant access to a world of knowledge.
          </p>

          <div className="hidden sm:block w-full max-w-[450px] mx-auto xl:mx-0 flex-shrink-0 h-[380px] md:h-[450px] lg:h-[550px] overflow-hidden sm:overflow-visible">
            <AuthCollage />
          </div>
        </div>

        {/* Right Side - Form Card */}
        <div className="w-full max-w-[480px] bg-white rounded-[24px] md:rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-2xl relative z-30 mx-auto xl:mx-0">
          
          <p className="text-[#0047FF] mb-2 font-medium text-[14px] md:text-[15px]">Sign In</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-poppins text-gray-900 mb-8 md:mb-10 leading-tight">
            Welcome Back
          </h2>
          
          <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] text-[14px] md:text-[15px]"
                placeholder="designer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] text-[14px] md:text-[15px] tracking-widest"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end pt-2">
               <button 
                type="submit" 
                className="bg-[#D4FF00] text-black font-semibold py-3 md:py-3.5 px-8 md:px-10 rounded-full hover:bg-[#bce600] transition-colors text-[14px] md:text-[15px] w-full sm:w-auto"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-8 flex items-center justify-center relative">
             <div className="absolute inset-0 flex items-center">
               <div className="w-full border-t border-gray-200"></div>
             </div>
             <div className="relative bg-white px-4 text-[13px] text-gray-400">
               or
             </div>
          </div>

          {/* Social Logins */}
          <div className="mt-8 flex justify-center gap-5">
             <button className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                </svg>
             </button>
             <button className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.23C21 11.45 20.93 10.73 20.81 10H12.2V14.16H17.21C17.03 15.42 16.29 16.5 15.19 17.24V20H18.06C19.8 18.39 21 15.54 21 12.23Z" fill="black" stroke="none" />
                  <path d="M12.2 21C14.67 21 16.73 20.17 18.06 18.72L15.19 15.96C14.47 16.45 13.43 16.78 12.2 16.78C9.8 16.78 7.76 15.16 7.03 12.98H4.07V15.79C5.55 18.73 8.64 21 12.2 21Z" fill="black" stroke="none" />
                  <path d="M7.03 12.98C6.84 12.4 6.74 11.77 6.74 11.13C6.74 10.49 6.84 9.85 7.03 9.27V6.46H4.07C3.46 7.68 3.12 9.07 3.12 10.5C3.12 11.93 3.46 13.32 4.07 14.54L7.03 12.98Z" fill="black" stroke="none" />
                  <path d="M12.2 5.48C13.54 5.48 14.73 5.95 15.68 6.86L18.15 4.39C16.72 3.06 14.66 2.25 12.2 2.25C8.64 2.25 5.55 4.52 4.07 7.46L7.03 10.27C7.76 8.09 9.8 6.46 12.2 6.46V5.48Z" fill="black" stroke="none" />
                </svg>
             </button>
          </div>

          <div className="mt-10 md:mt-12 text-center text-[13px] md:text-[14px] text-gray-500">
            New user? <Link to="/signup" className="text-[#0047FF] hover:underline font-medium">Create an account</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
