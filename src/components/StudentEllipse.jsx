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

const StudentEllipse = ({ avatarCount = 4, countText = "26+", size = "md" }) => {
  // size can be 'sm' (for course card) or 'lg' (for happy students card)
  const avatarsToShow = ALL_AVATARS.slice(0, avatarCount);
  
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };
  
  const circleClass = sizeClasses[size] || sizeClasses.md;

  return (
    <div className="flex items-center">
      <div className="flex -space-x-3 md:-space-x-4">
        {avatarsToShow.map((avatar, idx) => (
          <img 
            key={idx} 
            src={avatar} 
            alt={`Student ${idx + 1}`} 
            className={`${circleClass} rounded-full border-2 border-white object-cover`}
          />
        ))}
        
        {/* Green Ellipse */}
        <div className={`relative ${circleClass} rounded-full border-2 border-white flex items-center justify-center font-bold text-black text-xs`}>
           <img src={greenEllipse} alt="More students" className="absolute inset-0 w-full h-full object-cover" />
           <span className="relative z-10">{countText}</span>
        </div>
      </div>
    </div>
  );
};

export default StudentEllipse;
