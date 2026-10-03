import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AuthCollage from '../components/AuthCollage';
import { useCart } from '../context/CartContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useCart();

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');
    try {
      register(name, email, password);
      navigate(location.state?.from || '/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = () => {
    setError('Google sign up is disabled in mock mode. Please use email/password.');
  };

  return (
    <div
      className="min-h-screen bg-[#0047FF] font-sans relative flex flex-col"
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
        <motion.div 
          initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
          className="pt-6 md:pt-8 pb-4 md:pb-6 flex-shrink-0"
        >
          <Link to="/">
            <img src="/logo.svg" alt="ByteSpace" className="h-7 md:h-8" />
          </Link>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex-1 flex flex-col xl:flex-row items-center xl:items-stretch gap-8 xl:gap-12 pb-8 xl:pb-12">

          {/* ── LEFT: heading + collage ── */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}
            className="w-full xl:flex-1 flex flex-col justify-start xl:justify-center pt-0 xl:pt-4"
          >
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
          </motion.div>

          {/* ── RIGHT: white form card ── */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full xl:w-[440px] flex-shrink-0 flex items-center xl:items-center"
          >
            <div className="w-full bg-white rounded-[28px] px-8 sm:px-10 py-10 shadow-2xl">

              <p className="text-[#0047FF] text-[13px] font-medium mb-1">Create an Account</p>
              <h2 className="text-[32px] md:text-[38px] font-bold font-poppins text-gray-900 leading-tight mb-8">
                Welcome to<br />ByteSpace
              </h2>

              <motion.form 
                onSubmit={handleSignup} 
                className="space-y-5"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
              >
                {error && (
                  <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl">
                    {error}
                  </motion.div>
                )}
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition"
                    placeholder="Jamie Davis"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition"
                    placeholder="designer@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition tracking-widest"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex justify-end pt-1">
                  <motion.button
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-[#D4FF00] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#c8f200] transition-colors text-[14px]"
                  >
                    Continue
                  </motion.button>
                </motion.div>
              </motion.form>

              {/* Divider */}
              <div className="mt-7 flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-[12px] text-gray-400">or</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Social */}
              <div className="mt-6 flex justify-center gap-4">
                {/* Google */}
                <motion.button 
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-[52px] h-[52px] rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21.805 10.023H12.2v3.977h5.451c-.467 2.446-2.556 3.754-5.451 3.754-3.313 0-6-2.686-6-6s2.687-6 6-6c1.466 0 2.8.504 3.833 1.33l2.939-2.94C17.318 2.942 14.86 2 12.2 2 6.677 2 2.2 6.477 2.2 12s4.477 10 10 10c5.523 0 9.8-4.477 9.8-10 0-.66-.067-1.31-.195-1.977Z" fill="black"/>
                  </svg>
                </motion.button>
              </div>

              <p className="mt-10 text-center text-[13px] text-gray-500">
                Already have an account?{' '}
                <Link to="/login" className="text-[#0047FF] font-medium hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
