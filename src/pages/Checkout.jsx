import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiLock } from 'react-icons/fi';
import { COURSES } from '../data/mockData';
import { useCart } from '../context/CartContext';

const inputCls =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0047FF] focus:ring-2 focus:ring-[#0047FF]/10 transition';

const Checkout = () => {
  const { cartIds, placeOrder, user, authReady } = useCart();
  const [form, setForm] = useState({ name: '', email: '', card: '', expiry: '', cvc: '' });
  const [processing, setProcessing] = useState(false);
  const [order, setOrder] = useState(null);

  if (!authReady) return null;
  if (!user) return <Navigate to="/login" state={{ from: '/checkout' }} replace />;

  const items = cartIds.map((id) => COURSES.find((c) => c.id === id)).filter(Boolean);
  const total = items.reduce((s, c) => s + c.price, 0);

  if (!order && items.length === 0) return <Navigate to="/cart" replace />;

  const set = (k) => (e) => {
    let v = e.target.value;
    if (k === 'card') v = v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
    if (k === 'expiry') {
      v = v.replace(/\D/g, '').slice(0, 4);
      if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2);
    }
    if (k === 'cvc') v = v.replace(/\D/g, '').slice(0, 3);
    setForm({ ...form, [k]: v });
  };

  const handlePay = (e) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      const newOrder = {
        id: 'BS-' + Math.floor(100000 + Math.random() * 900000),
        items: items.map((c) => ({ id: c.id, title: c.title, price: c.price })),
        total,
        date: new Date().toISOString(),
      };
      placeOrder(newOrder);
      setOrder(newOrder);
      setProcessing(false);
    }, 1500);
  };

  if (order) {
    return (
      <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4 py-16 font-sans">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 max-w-md w-full text-center"
        >
          <FiCheckCircle className="text-green-500 mx-auto mb-4" size={56} />
          <h1 className="font-poppins font-bold text-2xl text-gray-900">Payment Successful!</h1>
          <p className="text-gray-500 text-sm mt-2">Order <span className="font-semibold text-gray-800">{order.id}</span></p>
          <ul className="text-left text-sm text-gray-600 my-6 space-y-2 border-y border-gray-100 py-4">
            {order.items.map((i) => (
              <li key={i.id} className="flex justify-between gap-4">
                <span className="truncate">{i.title}</span><span>${i.price}</span>
              </li>
            ))}
            <li className="flex justify-between font-bold text-gray-900 pt-2"><span>Total paid</span><span>${order.total}</span></li>
          </ul>
          <p className="text-[12px] text-gray-400 mb-6">This was a demo checkout — no real payment was made.</p>
          <Link to="/search" className="inline-block bg-[#D4FF00] text-black font-bold px-8 py-3 rounded-full hover:bg-[#c8f200] transition-colors">
            Explore more courses
          </Link>
        </motion.div>
      </div>
    );
  }

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
          <h1 className="text-white text-3xl font-bold font-poppins">Checkout</h1>
          <p className="text-white/80 text-sm mt-1">Demo payment — use any card details</p>
        </div>
      </section>

      <div className="w-11/12 lg:w-10/12 mx-auto py-10 flex flex-col-reverse lg:flex-row gap-8 items-start">
        <form onSubmit={handlePay} className="flex-1 w-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-4">
          <h2 className="font-bold text-gray-900 font-poppins text-lg flex items-center gap-2">
            <FiLock size={16} /> Payment Details
          </h2>
          <input required className={inputCls} placeholder="Name on card" value={form.name} onChange={set('name')} />
          <input required type="email" className={inputCls} placeholder="Email" value={form.email} onChange={set('email')} />
          <input required className={inputCls} placeholder="Card number (e.g. 4242 4242 4242 4242)" inputMode="numeric" minLength={19} value={form.card} onChange={set('card')} />
          <div className="flex gap-4">
            <input required className={inputCls} placeholder="MM/YY" minLength={5} value={form.expiry} onChange={set('expiry')} />
            <input required className={inputCls} placeholder="CVC" minLength={3} value={form.cvc} onChange={set('cvc')} />
          </div>
          <button
            type="submit"
            disabled={processing}
            className="w-full bg-[#D4FF00] text-black font-bold py-3.5 rounded-full hover:bg-[#c8f200] transition-colors disabled:opacity-60"
          >
            {processing ? 'Processing…' : `Pay $${total}`}
          </button>
        </form>

        <div className="w-full lg:w-[340px] bg-white rounded-2xl border border-gray-100 shadow-lg p-6">
          <h2 className="font-bold text-gray-900 font-poppins text-lg mb-4">Order Summary</h2>
          <ul className="space-y-3 text-sm text-gray-600 mb-4">
            {items.map((c) => (
              <li key={c.id} className="flex justify-between gap-4">
                <span className="line-clamp-2">{c.title}</span>
                <span className="font-medium text-gray-900">${c.price}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-100 pt-4 flex justify-between items-baseline">
            <span className="font-semibold">Total</span>
            <span className="text-[#0047FF] font-bold text-3xl font-poppins">${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
