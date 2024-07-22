import React, { useEffect } from "react";
import './App.css';
import LandingPage from './components/organisms/LandingPage/LandingPage';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorEffect = document.getElementById('cursor-effect');
      cursorEffect.style.left = `${e.clientX - 250}px`; // Adjusting to center the gradient
      cursorEffect.style.top = `${e.clientY - 250}px`;  // Adjusting to center the gradient
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <div
        id="cursor-effect"
        className="pointer-events-none fixed w-52 h-52 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(18, 31, 66, 0.03) 0%, rgba(18, 31, 66, 0) 100%)',
          transition: 'all 0.1s ease'
        }}
      />
      <div className="text-md text-gray-500 dark:text-gray-400 text-left p-6">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
