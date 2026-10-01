import React from 'react';
import { useParams } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import CourseDetailLayout from '../components/CourseDetailLayout';

import sneak1 from '../assets/images/sneak-peak-1.jpg';
import sneak2 from '../assets/images/sneak-peak-2.jpg';
import sneak3 from '../assets/images/sneak-peak-3.jpg';
import sneak4 from '../assets/images/sneak-peak-4.jpg';

const KEY_POINTS = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Access to Exclusive Content',
  'Our Videos on Various Platforms',
  'Digital Asset Management Best Practices',
  'Monetize Your Strategies',
  'Capstone Project: Build Your Portfolio',
];

const CourseDetails = () => {
  const { id } = useParams();

  return (
    <CourseDetailLayout courseId={id}>
      {/* Description */}
      <section>
        <h2 className="text-[22px] font-bold font-poppins text-gray-900 mb-4">Description</h2>
        <div className="text-gray-600 text-[14px] leading-relaxed space-y-4">
          <p>
            Embark on an enlightening exploration into the world of digital creation with our comprehensive
            course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites
            you to dive deep into the intricacies of crafting impactful digital content. From laying the groundwork
            to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential
            for navigating the dynamic landscape of digital asset creation.
          </p>
          <p>
            In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational
            concepts that form the backbone of digital artistic creation. Understand the fundamental elements that
            constitute compelling digital content and gain proficiency in leveraging these elements to communicate
            effectively in the digital realm.
          </p>
          <p>
            As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances
            of design principles that drive impactful imagery. Uncover the secrets behind effective visual
            communication, mastering color theory, typography, and layout strategies that elevate your digital assets
            to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply
            these principles in practical scenarios.
          </p>
        </div>
      </section>

      {/* Sneak Peek */}
      <section className="mt-10">
        <h3 className="text-[18px] font-bold font-poppins text-gray-900 mb-4">Sneak Peek</h3>
        <div className="grid grid-cols-4 gap-3">
          {[sneak1, sneak2, sneak3, sneak4].map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-square">
              <img src={img} alt={`Sneak peek ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Key Points */}
      <section className="mt-10">
        <h3 className="text-[18px] font-bold font-poppins text-gray-900 mb-4">Key Points</h3>
        <ul className="space-y-3">
          {KEY_POINTS.map((pt) => (
            <li key={pt} className="flex items-center gap-3 text-gray-700 text-[14px]">
              <FiCheckCircle className="text-[#0047FF] text-[18px] flex-shrink-0" />
              {pt}
            </li>
          ))}
        </ul>
      </section>
    </CourseDetailLayout>
  );
};

export default CourseDetails;
