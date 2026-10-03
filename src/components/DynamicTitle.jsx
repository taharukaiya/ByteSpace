import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = 'ByteSpace';

    if (path === '/') {
      title = 'Home | ByteSpace';
    } else if (path === '/search') {
      title = 'Search Courses | ByteSpace';
    } else if (path === '/creators') {
      title = 'Creators | ByteSpace';
    } else if (path.startsWith('/creator/')) {
      title = 'Creator Profile | ByteSpace';
    } else if (path.startsWith('/course/')) {
      if (path.endsWith('/lessons')) {
        title = 'Course Lessons | ByteSpace';
      } else if (path.endsWith('/reviews')) {
        title = 'Course Reviews | ByteSpace';
      } else {
        title = 'Course Details | ByteSpace';
      }
    } else if (path === '/login') {
      title = 'Sign In | ByteSpace';
    } else if (path === '/signup') {
      title = 'Join Us | ByteSpace';
    } else if (path === '/cart') {
      title = 'Your Cart | ByteSpace';
    } else if (path === '/checkout') {
      title = 'Checkout | ByteSpace';
    } else {
      title = 'Page Not Found | ByteSpace';
    }

    document.title = title;
  }, [location]);

  return null;
};

export default DynamicTitle;
