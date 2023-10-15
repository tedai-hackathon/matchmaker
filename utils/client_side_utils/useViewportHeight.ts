// hooks/useViewportHeight.ts
import { useEffect } from 'react';

const useViewportHeight = (): void => {
  useEffect(() => {
    const setViewportHeight = (): void => {
      const vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Run the function initially
    setViewportHeight();

    // Update the variable whenever the window is resized
    window.addEventListener('resize', setViewportHeight);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);
};

export default useViewportHeight;
