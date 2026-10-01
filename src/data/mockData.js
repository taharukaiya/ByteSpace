import purepearlImg from '../assets/images/PurePearl Studio.png';
import albertImg from '../assets/images/Albert Flores.png';
import codyImg from '../assets/images/Cody Fisher.png';
import brooklynImg from '../assets/images/Brooklyn Simmons.png';
import jamesImg from '../assets/images/james.png';
import sarahImg from '../assets/images/sarah.png';
import alexImg from '../assets/images/alex.png';

import imgFigma from '../assets/images/Learn Figma from Basic.jpg';
import imgDigital from '../assets/images/Build Digital Asset.jpg';
import imgData from '../assets/images/the Power of Big Data.jpg';
import imgProductivity from '../assets/images/Balancing Productivity and Self-Care.jpg';
import imgMoney from '../assets/images/Mastering Money Management.jpg';
import imgStartup from '../assets/images/From Idea to Startup Success.jpg';

export const CREATORS = [
  { id: 1, name: 'PurePearl Studio', role: 'UI/UX Designer', rating: 4.8, courses: 3, followers: 12, img: purepearlImg },
  { id: 2, name: 'Albert Flores', role: 'Product Designer', rating: 4.9, courses: 5, followers: 45, img: albertImg },
  { id: 3, name: 'Cody Fisher', role: 'Digital Artist & Animator', rating: 4.7, courses: 2, followers: 8, img: codyImg },
  { id: 4, name: 'Brooklyn Simmons', role: 'Marketing Specialist', rating: 4.6, courses: 4, followers: 22, img: brooklynImg },
  { id: 5, name: 'James Wilson', role: 'Full Stack Developer', rating: 4.9, courses: 6, followers: 156, img: jamesImg },
  { id: 6, name: 'Sarah Connor', role: '3D Modeler', rating: 4.8, courses: 2, followers: 34, img: sarahImg },
  { id: 7, name: 'Alex Morgan', role: 'Data Scientist', rating: 4.5, courses: 1, followers: 5, img: alexImg },
  { id: 8, name: 'Design Masters', role: 'Creative Agency', rating: 4.8, courses: 8, followers: 210, img: purepearlImg },
];

export const COURSES = [
  { id: 1, title: 'Learn Figma from Basic', author: 'PurePearl Studio', authorId: 1, rating: 4.5, price: 25, level: 'Beginner', category: 'UI/UX Design', lessons: 17, duration: '2 hours 16 mins', comments: 59, imageSrc: imgFigma, popular: true },
  { id: 2, title: 'Build Digital Asset', author: 'Albert Flores', authorId: 2, rating: 4.8, price: 35, level: 'Intermediate', category: 'Animation', lessons: 24, duration: '4 hours 10 mins', comments: 120, imageSrc: imgDigital, popular: true },
  { id: 3, title: 'the Power of Big Data', author: 'Alex Morgan', authorId: 7, rating: 4.6, price: 50, level: 'Advanced', category: 'IT', lessons: 30, duration: '6 hours', comments: 45, imageSrc: imgData, popular: false },
  { id: 4, title: 'Balancing Productivity and Self-Care', author: 'Brooklyn Simmons', authorId: 4, rating: 4.9, price: 15, level: 'All Levels', category: 'Social Media', lessons: 10, duration: '1 hour 30 mins', comments: 88, imageSrc: imgProductivity, popular: true },
  { id: 5, title: 'Mastering Money Management', author: 'Design Masters', authorId: 8, rating: 4.7, price: 40, level: 'Beginner', category: 'Marketing', lessons: 22, duration: '3 hours', comments: 200, imageSrc: imgMoney, popular: true },
  { id: 6, title: 'From Idea to Startup Success', author: 'James Wilson', authorId: 5, rating: 4.4, price: 60, level: 'Intermediate', category: 'Business', lessons: 40, duration: '8 hours', comments: 34, imageSrc: imgStartup, popular: false },
  { id: 7, title: 'Advanced 3D Modeling Techniques', author: 'Sarah Connor', authorId: 6, rating: 4.9, price: 55, level: 'Advanced', category: 'Design', lessons: 28, duration: '5 hours', comments: 110, imageSrc: imgDigital, popular: false },
  { id: 8, title: 'Social Media Marketing 101', author: 'Brooklyn Simmons', authorId: 4, rating: 4.3, price: 20, level: 'Beginner', category: 'Creative Marketing', lessons: 12, duration: '2 hours', comments: 45, imageSrc: imgProductivity, popular: false },
  { id: 9, title: 'UI/UX Masterclass', author: 'Albert Flores', authorId: 2, rating: 5.0, price: 80, level: 'Advanced', category: 'UI/UX Design', lessons: 50, duration: '12 hours', comments: 400, imageSrc: imgFigma, popular: true },
  { id: 10, title: 'Introduction to Animation', author: 'Cody Fisher', authorId: 3, rating: 4.6, price: 30, level: 'Beginner', category: 'Animation', lessons: 15, duration: '3 hours', comments: 75, imageSrc: imgStartup, popular: true },
  { id: 11, title: 'Creative Painting in Procreate', author: 'Cody Fisher', authorId: 3, rating: 4.7, price: 25, level: 'Beginner', category: 'Drawing & Painting', lessons: 18, duration: '3 hours 30 mins', comments: 150, imageSrc: imgFigma, popular: false },
  { id: 12, title: 'Music Production Basics', author: 'PurePearl Studio', authorId: 1, rating: 4.2, price: 45, level: 'Beginner', category: 'Music', lessons: 20, duration: '4 hours', comments: 22, imageSrc: imgData, popular: false },
];

export const CATEGORIES = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 
  'Social Media', 'UI/UX Design', 'Creative Marketing', 'Cooking', 'IT', 'Business', 'Design'
];
