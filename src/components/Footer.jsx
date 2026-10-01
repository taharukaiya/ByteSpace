import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-16 border-t border-gray-100">
      <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left side */}
        <div className="md:w-1/3">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img src="/logo.svg" alt="Logo" className="h-6" />
            <span className="text-xl font-bold text-gray-900 font-poppins">ByteSpace</span>
          </Link>
          <p className="text-gray-600 text-sm mb-6 font-sans">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>
          <form className="flex gap-2 mb-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#0047FF] font-sans"
            />
            <button className="bg-[#D4FF00] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#bce600] font-sans">
              Search
            </button>
          </form>
          <p className="text-xs text-gray-400 font-sans">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>

        {/* Right side - Links */}
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm font-sans">
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Browse</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link to="/" className="hover:text-[#0047FF]">Featured Courses</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF]">Featured Categories</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF]">Business</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF]">IT</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF]">Design</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-800 hidden md:block">&nbsp;</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link to="/" className="hover:text-[#0047FF]">Development</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF]">Marketing</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF]">Photography</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF]">Finance</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF]">Sport</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Platform</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link to="/" className="hover:text-[#0047FF]">Become a Creator</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF]">Affiliate Program</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF]">Contact</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF]">Help</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF]">About</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-10/12 mx-auto mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans">
        <p>@ 2023 ByteSpace. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-[#0047FF]">Privacy Policy</Link>
          <Link to="/" className="hover:text-[#0047FF]">Terms of Service</Link>
          <Link to="/" className="hover:text-[#0047FF]">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
