const Avatar = ({ user, size = 36, className = '' }) => {
  const name = user?.displayName || user?.email || 'U';
  const initials = name
    .split(/[\s@.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0].toUpperCase())
    .join('');

  const style = { width: size, height: size, fontSize: size * 0.38 };

  return user?.photoURL ? (
    <img
      src={user.photoURL}
      alt={name}
      referrerPolicy="no-referrer"
      style={style}
      className={`rounded-full object-cover border-2 border-white/60 ${className}`}
    />
  ) : (
    <span
      style={style}
      className={`rounded-full bg-[#D4FF00] text-black font-bold flex items-center justify-center border-2 border-white/60 ${className}`}
    >
      {initials}
    </span>
  );
};

export default Avatar;
