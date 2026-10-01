import React from 'react';
import ellipse1 from '../assets/images/student-ellipse-1.svg';
import ellipse2 from '../assets/images/student-ellipse-2.svg';
import ellipse3 from '../assets/images/student-ellipse-3.svg';
import ellipse4 from '../assets/images/student-ellipse-4.svg';
import ellipse5 from '../assets/images/student-ellipse-5.svg';
import ellipse6 from '../assets/images/student-ellipse-6.svg';
import ellipse7 from '../assets/images/student-ellipse-7.svg';
import greenEllipse from '../assets/images/Ellipse.svg';

const ALL_AVATARS = [ellipse1, ellipse2, ellipse3, ellipse4, ellipse5, ellipse6, ellipse7];

/**
 * StudentEllipse
 *
 * size:
 *   "sm"  – small course-card avatars (28px), max 3 avatars shown
 *   "md"  – medium avatars (36px), max 5
 *   "lg"  – large happy-students avatars (40px), max 7
 *
 * variant:
 *   "green" – final count circle uses the green Ellipse.svg
 *   "dark"  – final count circle is dark (#1a1a1a) with white text
 */
const StudentEllipse = ({
  avatarCount = 4,
  countText = '26+',
  size = 'sm',
  variant = 'green',
}) => {
  // Pixel dimensions per size — fixed, no responsive breakpoints so layout never shifts
  const dim = { sm: 28, md: 36, lg: 40 };
  const px = dim[size] ?? 28;

  // Negative overlap so avatars stack tightly, identical to Figma
  const overlap = { sm: -8, md: -10, lg: -12 };
  const marginLeft = overlap[size] ?? -8;

  const avatarsToShow = ALL_AVATARS.slice(0, Math.min(avatarCount, ALL_AVATARS.length));

  const style = { width: px, height: px, flexShrink: 0, borderRadius: '50%' };

  return (
    <div className="flex items-center">
      {/* First avatar — no negative margin */}
      {avatarsToShow.map((avatar, idx) => (
        <img
          key={idx}
          src={avatar}
          alt={`Student ${idx + 1}`}
          style={{
            ...style,
            objectFit: 'cover',
            marginLeft: idx === 0 ? 0 : marginLeft,
            zIndex: 20 - idx,
            position: 'relative',
          }}
        />
      ))}

      {/* Count circle */}
      {variant === 'green' ? (
        <div
          style={{
            ...style,
            marginLeft,
            zIndex: 10,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={greenEllipse}
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span style={{ position: 'relative', zIndex: 1, fontSize: px <= 28 ? 10 : 11, fontWeight: 700, color: '#000' }}>
            {countText}
          </span>
        </div>
      ) : (
        <div
          style={{
            ...style,
            marginLeft,
            zIndex: 10,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1a1a1a',
          }}
        >
          <span style={{ position: 'relative', zIndex: 1, fontSize: px <= 28 ? 9 : 11, fontWeight: 600, color: '#fff' }}>
            {countText}
          </span>
        </div>
      )}
    </div>
  );
};

export default StudentEllipse;
