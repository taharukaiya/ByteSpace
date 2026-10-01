import React from 'react';
import { useParams } from 'react-router-dom';
import CourseDetailLayout from '../components/CourseDetailLayout';

const MODULES = [
  {
    title: 'Module 1: Introduction to Digital Assets',
    desc: 'Lay the groundwork with essential Understanding Digital Elements and Navigating Design Software Tools. Dive into the essential of digital user awareness.',
  },
  {
    title: 'Module 2: Design Principles for Impact',
    desc: 'Master the principles that drive impactful design with lessons on Color Theory in Digital Design and Typography Essentials. Elevate your visual communication skills.',
  },
  {
    title: 'Module 4: User-Centric Design Strategies',
    desc: 'Understand Design Thinking in Digital Creation and delve into User Experience (UX) Essentials. Craft digital assets with a focus on user-centric design.',
  },
  {
    title: 'Module 5: Interactive Media and Engagement',
    desc: 'Engage your audience with Interactive Storytelling techniques by Creating Interactive Presentation and Designing Multimedia Elements. Master the art of creating immersive digital experiences.',
  },
  {
    title: 'Module 6: Project Showcase and Critique',
    desc: 'Perfect your presentation skills with Creative Presentation Techniques and embrace collaborative spirit — Peer Critique and Collaborative workshops. Showcase your work with confidence.',
  },
  {
    title: 'Module 7: Optimizing Digital Assets for Various Platforms',
    desc: 'Adapt your digital creations for various Platforms and optimize for Social Media. Ensure your assets are engaging and relevant across the digital landscape.',
  },
];

const CourseLessons = () => {
  const { id } = useParams();

  return (
    <CourseDetailLayout courseId={id}>
      {/* Explore the Modules */}
      <section>
        <h2 className="text-[22px] font-bold font-poppins text-gray-900 mb-2">Explore the Modules</h2>
        <p className="text-gray-500 text-[14px] mb-6 leading-relaxed">
          Immerse yourself in the course content as we break down each module in this comprehensive course,
          providing insightful insights and hands-on experiences.
        </p>

        <h3 className="text-[16px] font-bold font-poppins text-gray-900 mb-4">Lesson List</h3>
        <ul className="space-y-5">
          {MODULES.map((m) => (
            <li key={m.title} className="flex gap-4 items-start">
              {/* Green play icon */}
              <div className="flex-shrink-0 w-10 h-10 bg-[#D4FF00] rounded-full flex items-center justify-center mt-0.5">
                <svg viewBox="0 0 24 24" fill="black" className="w-4 h-4 ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-[14px] font-poppins">{m.title}</p>
                <p className="text-gray-500 text-[13px] mt-1 leading-relaxed">{m.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Lesson Content */}
      <section className="mt-10">
        <h3 className="text-[16px] font-bold font-poppins text-gray-900 mb-2">Lesson Content</h3>
        <p className="text-gray-500 text-[14px] leading-relaxed">
          Engage with each lesson through captivating video content, detailed textual explanations, and
          interactive elements. Download exercises, complete assignments, and test your understanding with quizzes.
        </p>
      </section>

      {/* Lesson Progress Tracking */}
      <section className="mt-8">
        <h3 className="text-[16px] font-bold font-poppins text-gray-900 mb-2">Lesson Progress Tracking</h3>
        <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
          Monitor your growth as you complete lessons, with an intuitive progress tracking tool guiding you
          through your learning journey.
        </p>

        <div className="max-w-sm">
          <p className="text-gray-500 text-[12px] mb-1">Learning Progress</p>
          <p className="text-gray-900 font-bold text-[34px] font-poppins leading-none">55%</p>
          <div className="mt-3 w-full h-2 bg-gray-200 rounded-full">
            <div className="h-full bg-[#D4FF00] rounded-full" style={{ width: '55%' }} />
          </div>
        </div>
      </section>
    </CourseDetailLayout>
  );
};

export default CourseLessons;
