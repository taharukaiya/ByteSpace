import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import './index.css';

// Global JS animation for the grid to perfectly sync all elements
const animateGrid = () => {
  const time = Date.now() % 10000;
  const pos = (time / 10000) * 120;
  document.documentElement.style.setProperty('--grid-pos', `${pos}px ${pos}px`);
  requestAnimationFrame(animateGrid);
};
animateGrid();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
