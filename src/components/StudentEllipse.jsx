import React from 'react';
import ellipse1 from '../assets/images/student-ellipse-1.svg';
import ellipse2 from '../assets/images/student-ellipse-2.svg';
import ellipse3 from '../assets/images/student-ellipse-3.svg';
import ellipse4 from '../assets/images/student-ellipse-4.svg';
import ellipse5 from '../assets/images/student-ellipse-5.svg';
import ellipse6 from '../assets/images/student-ellipse-6.svg';
import ellipse7 from '../assets/images/student-ellipse-7.svg';
import greenEllipse from '../assets/images/Ellipse.svg';

const ALL_AVATARS = [
  ellipse1, ellipse2, ellipse3, ellipse4, 
  ellipse5, ellipse6, ellipse7
];

const StudentEllipse = ({ avatarCount = 4, countText = "26+", size = "md", variant = "green" }) => {
  // size can be 'sm' (for course card) or 'lg' (for happy students card)
  const avatarsToShow = ALL_AVATARS.slice(0, avatarCount);
  
  const sizeClasses = {
    sm: "w-[28px] h-[28px] md:w-[32px] md:h-[32px]",
    md: "w-[36px] h-[36px] md:w-[42px] md:h-[42px]",
    lg: "w-12 h-12"
  };
  
  const circleClass = sizeClasses[size] || sizeClasses.md;

  return (
    <div className="flex items-center">
      <div className="flex -space-x-3">
        {avatarsToShow.map((avatar, idx) => (
          <img 
            key={idx} 
            src={avatar} 
            alt={`Student ${idx + 1}`} 
            className={`${circleClass} rounded-full object-cover relative`}
            style={{ zIndex: 20 - idx }}
          />
        ))}
        
        {/* Final Circle */}
        {variant === 'green' ? (
          <div 
            className={`relative ${circleClass} rounded-full flex items-center justify-center font-bold text-black text-[11px] md:text-xs`}
            style={{ zIndex: 10 }}
          >
             <img src={greenEllipse} alt="More students" className="absolute inset-0 w-full h-full object-cover rounded-full" />
             <span className="relative z-10">{countText}</span>
          </div>
        ) : (
          <div 
            className={`relative ${circleClass} rounded-full flex items-center justify-center font-semibold text-white text-[11px] md:text-xs bg-[#242424]`}
            style={{ zIndex: 10 }}
          >
             <span className="relative z-10">{countText}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentEllipse;
