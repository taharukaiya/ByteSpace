import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left side */}
        <div className="md:w-1/3">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2 mb-4 text-black">
            <span className="text-[#D4FF00]">b</span> ByteSpace
          </Link>
          <p className="text-gray-600 text-sm mb-6">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>
          <form className="flex gap-2 mb-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#0047FF]"
            />
            <button className="bg-[#D4FF00] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#bce600]">
              Search
            </button>
          </form>
          <p className="text-xs text-gray-400">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>

        {/* Right side - Links */}
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Browse</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link to="/">Featured Courses</Link></li>
              <li><Link to="/">Featured Categories</Link></li>
              <li><Link to="/">Business</Link></li>
              <li><Link to="/">IT</Link></li>
              <li><Link to="/">Design</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-800 hidden md:block">&nbsp;</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link to="/">Development</Link></li>
              <li><Link to="/">Marketing</Link></li>
              <li><Link to="/">Photography</Link></li>
              <li><Link to="/">Finance</Link></li>
              <li><Link to="/">Sport</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Platform</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link to="/">Become a Creator</Link></li>
              <li><Link to="/">Affiliate Program</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Help</Link></li>
              <li><Link to="/">About</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>@ 2023 ByteSpace. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
          <Link to="/">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
