import { useState, useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import {
  updateProfile,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { FiUser, FiLock, FiCreditCard } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { auth } from '../services/firebase';
import Avatar from '../components/Avatar';

const inputCls =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0047FF] focus:ring-2 focus:ring-[#0047FF]/10 transition disabled:bg-gray-50 disabled:text-gray-400';

const TABS = [
  { key: 'profile', label: 'Profile', icon: FiUser },
  { key: 'security', label: 'Password', icon: FiLock },
  { key: 'transactions', label: 'Transactions', icon: FiCreditCard },
];

const Notice = ({ n }) =>
  n ? (
    <p className={`text-sm rounded-xl px-4 py-3 ${n.type === 'ok' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
      {n.text}
    </p>
  ) : null;

const ProfileTab = ({ user, refreshUser }) => {
  const [name, setName] = useState(user.displayName || '');
  const [photo, setPhoto] = useState(user.photoURL || '');
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState(null);

  const save = async (e) => {
    e.preventDefault();
    setBusy(true);
    setNote(null);
    try {
      await updateProfile(user, { displayName: name.trim(), photoURL: photo.trim() || null });
      refreshUser();
      setNote({ type: 'ok', text: 'Profile updated.' });
    } catch (err) {
      setNote({ type: 'err', text: err.message });
    }
    setBusy(false);
  };

  return (
    <form onSubmit={save} className="space-y-4 max-w-lg">
      <div className="flex items-center gap-4 mb-2">
        <Avatar user={{ ...user, displayName: name, photoURL: photo }} size={72} className="!border-gray-100" />
        <p className="text-sm text-gray-500">Preview of your avatar</p>
      </div>
      <label className="block text-[13px] font-medium text-gray-700">
        Full name
        <input className={`${inputCls} mt-1`} value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label className="block text-[13px] font-medium text-gray-700">
        Email
        <input className={`${inputCls} mt-1`} value={user.email || ''} disabled />
      </label>
      <label className="block text-[13px] font-medium text-gray-700">
        Photo URL <span className="text-gray-400 font-normal">(optional)</span>
        <input className={`${inputCls} mt-1`} placeholder="https://…" value={photo} onChange={(e) => setPhoto(e.target.value)} />
      </label>
      <Notice n={note} />
      <button disabled={busy} className="bg-[#D4FF00] text-black font-bold px-8 py-3 rounded-full hover:bg-[#c8f200] transition-colors disabled:opacity-60">
        {busy ? 'Saving…' : 'Save Changes'}
      </button>
    </form>
  );
};

const SecurityTab = ({ user }) => {
  const hasPassword = user.providerData.some((p) => p.providerId === 'password');
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState(null);

  const change = async (e) => {
    e.preventDefault();
    setNote(null);
    if (next.length < 6) return setNote({ type: 'err', text: 'New password must be at least 6 characters.' });
    if (next !== confirm) return setNote({ type: 'err', text: 'Passwords do not match.' });
    setBusy(true);
    try {
      await reauthenticateWithCredential(user, EmailAuthProvider.credential(user.email, current));
      await updatePassword(user, next);
      setCurrent(''); setNext(''); setConfirm('');
      setNote({ type: 'ok', text: 'Password changed successfully.' });
    } catch (err) {
      const wrong = err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential';
      setNote({ type: 'err', text: wrong ? 'Current password is incorrect.' : err.message });
    }
    setBusy(false);
  };

  const sendReset = async () => {
    setBusy(true);
    setNote(null);
    try {
      await sendPasswordResetEmail(auth, user.email);
      setNote({ type: 'ok', text: `Password reset email sent to ${user.email}.` });
    } catch (err) {
      setNote({ type: 'err', text: err.message });
    }
    setBusy(false);
  };

  if (!hasPassword) {
    return (
      <div className="max-w-lg space-y-4">
        <p className="text-sm text-gray-600">
          You signed in with Google, so your password is managed by your Google account. You can still
          request a password reset email to set a ByteSpace password.
        </p>
        <Notice n={note} />
        <button onClick={sendReset} disabled={busy} className="bg-[#D4FF00] text-black font-bold px-8 py-3 rounded-full hover:bg-[#c8f200] transition-colors disabled:opacity-60">
          {busy ? 'Sending…' : 'Send Password Reset Email'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={change} className="space-y-4 max-w-lg">
      <input type="password" className={inputCls} placeholder="Current password" value={current} onChange={(e) => setCurrent(e.target.value)} required />
      <input type="password" className={inputCls} placeholder="New password" value={next} onChange={(e) => setNext(e.target.value)} required />
      <input type="password" className={inputCls} placeholder="Confirm new password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
      <Notice n={note} />
      <button disabled={busy} className="bg-[#D4FF00] text-black font-bold px-8 py-3 rounded-full hover:bg-[#c8f200] transition-colors disabled:opacity-60">
        {busy ? 'Updating…' : 'Change Password'}
      </button>
    </form>
  );
};

const TransactionsTab = ({ orders }) => {
  if (orders.length === 0) {
    return <p className="text-gray-500 text-sm py-10 text-center">No transactions yet. Your purchases will appear here.</p>;
  }
  return (
    <div className="space-y-4">
      {orders.map((o) => (
        <div key={o.id} className="border border-gray-100 rounded-2xl p-5">
          <div className="flex flex-wrap justify-between gap-2 mb-3">
            <div>
              <p className="font-bold text-gray-900 font-poppins text-[15px]">Order {o.id}</p>
              <p className="text-gray-400 text-[12px]">
                {new Date(o.date).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
              </p>
            </div>
            <span className="self-start bg-green-50 text-green-700 text-[12px] font-semibold px-3 py-1 rounded-full">Paid</span>
          </div>
          <ul className="text-sm text-gray-600 space-y-1.5 border-t border-gray-100 pt-3">
            {o.items.map((i) => (
              <li key={i.id} className="flex justify-between gap-4">
                <span className="truncate">{i.title}</span><span>${i.price}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between border-t border-gray-100 mt-3 pt-3 font-bold text-gray-900">
            <span>Total</span><span className="text-[#0047FF]">${o.total}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const Profile = () => {
  const { user, authReady, orders, refreshUser, profileVersion } = useCart();
  const [params, setParams] = useSearchParams();
  const tab = TABS.some((t) => t.key === params.get('tab')) ? params.get('tab') : 'profile';

  useEffect(() => { window.scrollTo(0, 0); }, [tab]);

  if (!authReady) return null;
  if (!user) return <Navigate to="/login" state={{ from: '/profile' }} replace />;

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
        <div className="relative z-10 w-11/12 lg:w-10/12 mx-auto flex items-center gap-5" key={profileVersion}>
          <Avatar user={user} size={72} />
          <div>
            <h1 className="text-white text-2xl md:text-3xl font-bold font-poppins">{user.displayName || 'My Account'}</h1>
            <p className="text-white/80 text-sm">{user.email}</p>
          </div>
        </div>
      </section>

      <div className="w-11/12 lg:w-10/12 mx-auto py-10 flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-60 bg-white rounded-2xl border border-gray-100 p-3 flex md:flex-col gap-1 overflow-x-auto">
          {TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setParams({ tab: key })}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-[14px] font-medium whitespace-nowrap transition-colors ${
                tab === key ? 'bg-[#D4FF00] text-black' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 w-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-8"
        >
          <h2 className="font-bold text-gray-900 font-poppins text-xl mb-6">
            {TABS.find((t) => t.key === tab).label}
          </h2>
          {tab === 'profile' && <ProfileTab user={user} refreshUser={refreshUser} />}
          {tab === 'security' && <SecurityTab user={user} />}
          {tab === 'transactions' && <TransactionsTab orders={orders.filter((o) => !o.uid || o.uid === user.uid)} />}
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
