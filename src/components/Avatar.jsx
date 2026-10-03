const Avatar = ({ user, size = 30, className = '' }) => {
  const name = user?.displayName || user?.email || 'U';
  const initials = name
    .split(/[\s@.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0].toUpperCase())
    .join('');

  const style = { width: size, height: size, fontSize: Math.max(10, size * 0.4) };

  return user?.photoURL ? (
    <img
      src={user.photoURL}
      alt={name}
      referrerPolicy="no-referrer"
      style={style}
      className={`rounded-full object-cover ring-1 ring-white/50 ${className}`}
    />
  ) : (
    <span
      style={style}
      className={`rounded-full bg-[#D4FF00] text-black font-bold font-poppins flex items-center justify-center ring-1 ring-white/50 ${className}`}
    >
      {initials}
    </span>
  );
};

export default Avatar;
