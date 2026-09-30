import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-[#0047FF] flex items-center justify-center p-8 relative overflow-hidden">
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-transparent rounded-3xl overflow-hidden shadow-2xl relative z-10 h-[85vh]">
        
        {/* Left Side - Illustration */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center relative bg-[#0047FF] text-white hidden md:flex border-r border-blue-500">
           <Link to="/" className="absolute top-8 left-12 text-2xl font-bold flex items-center gap-2">
            <span className="text-[#D4FF00]">b</span>
           </Link>
           <h2 className="text-3xl font-bold mb-4">Sign up and come in</h2>
           <p className="text-blue-100 max-w-sm mb-12">
             The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
           </p>
           
           {/* Mock Course Card */}
           <div className="bg-white text-black p-4 rounded-2xl w-72 shadow-xl absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-20">
              <div className="bg-gray-200 h-32 rounded-xl mb-3"></div>
              <h4 className="font-bold">Build Digital Asset</h4>
              <p className="text-xs text-gray-500 mb-2">by purepearl studio</p>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                <span className="font-bold">$25<span className="text-xs text-gray-500">/lifetime</span></span>
              </div>
           </div>
           
           {/* Decorative elements */}
           <div className="absolute left-10 top-1/3 w-20 h-20 border-[10px] border-[#D4FF00] rounded-full z-10"></div>
           <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#D4FF00] rounded-tl-[40px] rounded-br-[40px] rotate-12 z-10"></div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-white p-12 md:p-16 flex flex-col justify-center rounded-3xl md:rounded-l-none relative z-30">
          <p className="text-[#0047FF] mb-2 font-medium">Create an Account</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Welcome to<br/>ByteSpace</h2>
          
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
                className="bg-[#D4FF00] text-black font-bold py-3 px-8 rounded-full hover:bg-[#bce600] transition"
              >
                Continue
              </button>
            </div>
          </form>

          <p className="mt-12 text-center text-sm text-gray-600">
            Already have an account? <Link to="/login" className="text-[#0047FF] hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
