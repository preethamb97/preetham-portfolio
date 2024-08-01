// git subtree push --prefix resume origin gh-pages
import React, { useEffect } from "react";
import './App.css';
import LandingPage from './components/organisms/LandingPage/LandingPage';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorEffect = document.getElementById('cursor-effect');
      const size = cursorEffect.offsetWidth / 2; // Get half the width of the cursor effect
      cursorEffect.style.left = `${e.clientX - size}px`; // Adjust to center the gradient
      cursorEffect.style.top = `${e.clientY - size}px`;  // Adjust to center the gradient
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
        className="pointer-events-none fixed rounded-full w-52 h-52 sm:w-24 sm:h-24"
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
