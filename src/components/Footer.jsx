import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-16 border-t border-gray-100">
      <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-16 lg:gap-24">
        {/* Left side */}
        <div className="md:w-2/5">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img src="/logo.svg" alt="Logo" className="h-6" />
            <span className="text-2xl font-bold text-gray-900 font-poppins tracking-wide">ByteSpace</span>
          </Link>
          <p className="text-gray-500 text-[15px] mb-8 font-sans leading-relaxed pr-4">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>
          <form className="flex gap-2 mb-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow border border-gray-200 rounded-full px-5 py-3 text-[15px] focus:outline-none focus:border-[#0047FF] font-sans"
            />
            <button className="bg-[#D4FF00] text-black px-8 py-3 rounded-full text-[15px] font-semibold hover:bg-[#bce600] font-sans transition-colors">
              Search
            </button>
          </form>
          <p className="text-[13px] text-gray-400 font-sans pr-4 leading-relaxed">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>

        {/* Right side - Links */}
        <div className="md:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 text-[15px] font-sans pt-2">
          <div>
            <ul className="space-y-4 text-gray-500">
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">Featured Courses</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">Featured Categories</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">Business</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">IT</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">Design</Link></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 text-gray-500">
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">Development</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">Marketing</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">Photography</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">Finance</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">Sport</Link></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 text-gray-500">
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">Become a Creator</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">Affiliate Program</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">Contact</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">Help</Link></li>
              <li><Link to="/" className="hover:text-[#0047FF] transition-colors">About</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-10/12 mx-auto mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[14px] text-gray-500 font-sans">
        <p>@ 2023 ByteSpace. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link to="/" className="hover:text-[#0047FF] transition-colors">Privacy Policy</Link>
          <Link to="/" className="hover:text-[#0047FF] transition-colors">Terms of Service</Link>
          <Link to="/" className="hover:text-[#0047FF] transition-colors">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
