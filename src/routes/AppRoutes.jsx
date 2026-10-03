import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import SearchPage from '../pages/SearchPage';
import CourseDetails from '../pages/CourseDetails';
import CourseLessons from '../pages/CourseLessons';
import CourseReviews from '../pages/CourseReviews';
import CreatorProfile from '../pages/CreatorProfile';
import Creators from '../pages/Creators';
import NotFound from '../pages/NotFound';
import DynamicTitle from '../components/DynamicTitle';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import { CartProvider } from '../context/CartContext';

const AppRoutes = () => {
  return (
    <CartProvider>
    <Router>
      <DynamicTitle />
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/course/:id/lessons" element={<CourseLessons />} />
          <Route path="/course/:id/reviews" element={<CourseReviews />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/creator/:id" element={<CreatorProfile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        {/* Routes without MainLayout wrapper */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </CartProvider>
  );
};

export default AppRoutes;
