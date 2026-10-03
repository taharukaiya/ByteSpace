import { Link, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { COURSES } from '../data/mockData';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartIds, removeFromCart, user, authReady } = useCart();
  const navigate = useNavigate();

  if (!authReady) return null;
  if (!user) return <Navigate to="/login" state={{ from: '/cart' }} replace />;

  const items = cartIds.map((id) => COURSES.find((c) => c.id === id)).filter(Boolean);
  const total = items.reduce((sum, c) => sum + c.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <section className="live-bg relative py-12">
        <div
          className="absolute inset-0 pointer-events-none opacity-50 live-grid"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)`,
            backgroundSize: '120px 120px',
          }}
        />
        <div className="relative z-10 w-11/12 lg:w-10/12 mx-auto">
          <h1 className="text-white text-3xl font-bold font-poppins">Your Cart</h1>
          <p className="text-white/80 text-sm mt-1">
            {items.length} {items.length === 1 ? 'course' : 'courses'} ready for checkout
          </p>
        </div>
      </section>

      <div className="w-11/12 lg:w-10/12 mx-auto py-10">
        {items.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 py-20 flex flex-col items-center text-center">
            <FiShoppingBag size={40} className="text-gray-300 mb-4" />
            <p className="text-gray-700 font-semibold text-lg font-poppins">Your cart is empty</p>
            <p className="text-gray-500 text-sm mt-1 mb-6">Find a course and start building your digital future.</p>
            <Link to="/search" className="bg-[#D4FF00] text-black font-semibold text-sm px-8 py-3 rounded-full hover:bg-[#c8f200] transition-colors">
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 w-full space-y-4">
              {items.map((course) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl border border-gray-100 p-4 flex gap-4 items-center"
                >
                  <img src={course.imageSrc} alt={course.title} className="w-28 h-20 sm:w-36 sm:h-24 object-cover rounded-xl flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <Link to={`/course/${course.id}`} className="font-bold text-gray-900 font-poppins text-[15px] hover:text-[#0047FF] line-clamp-2">
                      {course.title}
                    </Link>
                    <p className="text-gray-500 text-[12px] mt-1">by {course.author}</p>
                    <p className="text-gray-400 text-[12px]">{course.lessons} lessons · {course.level}</p>
                  </div>
                  <div className="text-right flex flex-col items-end gap-3">
                    <span className="text-[#0047FF] font-bold text-xl font-poppins">${course.price}</span>
                    <button
                      onClick={() => removeFromCart(course.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1 text-[12px]"
                    >
                      <FiTrash2 size={14} /> Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="w-full lg:w-[340px] bg-white rounded-2xl border border-gray-100 shadow-lg p-6 lg:sticky lg:top-28">
              <h2 className="font-bold text-gray-900 font-poppins text-lg mb-4">Order Summary</h2>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between"><span>Subtotal</span><span>${total}</span></div>
                <div className="flex justify-between"><span>Discount</span><span>$0</span></div>
              </div>
              <div className="border-t border-gray-100 pt-4 flex justify-between items-baseline mb-6">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="text-[#0047FF] font-bold text-3xl font-poppins">${total}</span>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-[#D4FF00] text-black font-bold py-3.5 rounded-full hover:bg-[#c8f200] transition-colors"
              >
                Proceed to Checkout
              </button>
              <Link to="/search" className="block text-center text-[13px] text-gray-500 hover:text-[#0047FF] mt-4">
                Continue browsing
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
