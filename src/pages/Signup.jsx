import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthCollage from '../components/AuthCollage';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup', name, email, password);
  };

  return (
    <div
      className="min-h-screen xl:h-screen bg-[#0047FF] font-sans relative flex flex-col xl:overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
        `,
        backgroundSize: '120px 120px',
      }}
    >
      {/* ── Inner width-constrained column ── */}
      <div className="relative z-10 w-11/12 lg:w-10/12 mx-auto flex flex-col flex-1">

        {/* Logo */}
        <div className="pt-6 md:pt-8 pb-4 md:pb-6 flex-shrink-0">
          <Link to="/">
            <img src="/logo.svg" alt="ByteSpace" className="h-7 md:h-8" />
          </Link>
        </div>

        {/* Two-column layout */}
        <div className="flex-1 flex flex-col xl:flex-row items-center xl:items-stretch gap-8 xl:gap-12 pb-8 xl:pb-12">

          {/* ── LEFT: heading + collage ── */}
          <div className="w-full xl:flex-1 flex flex-col justify-start xl:justify-center pt-0 xl:pt-4">
            <h1 className="text-white text-[22px] md:text-[26px] font-bold font-poppins leading-snug">
              Sign up and come in
            </h1>
            <p className="text-white/80 text-[13px] md:text-[14px] leading-relaxed mt-2 max-w-[380px]">
              The registration process is straightforward, uncomplicated, and efficient,
              allowing users to sign up quickly, easily, and at no cost.
            </p>

            {/* Collage – only visible on sm+ */}
            <div className="hidden sm:block mt-4 w-full max-w-[420px]">
              <AuthCollage />
            </div>
          </div>

          {/* ── RIGHT: white form card ── */}
          <div className="w-full xl:w-[440px] flex-shrink-0 flex items-center xl:items-center">
            <div className="w-full bg-white rounded-[28px] px-8 sm:px-10 py-10 shadow-2xl">

              <p className="text-[#0047FF] text-[13px] font-medium mb-1">Create an Account</p>
              <h2 className="text-[32px] md:text-[38px] font-bold font-poppins text-gray-900 leading-tight mb-8">
                Welcome to<br />ByteSpace
              </h2>

              <form onSubmit={handleSignup} className="space-y-5">
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition"
                    placeholder="Jamie Davis"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition"
                    placeholder="designer@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition tracking-widest"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    className="bg-[#D4FF00] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#c8f200] transition-colors text-[14px]"
                  >
                    Continue
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-[13px] text-gray-500">
                Already have an account?{' '}
                <Link to="/login" className="text-[#0047FF] font-medium hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
