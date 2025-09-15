import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top-left smoothly on route change
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'smooth' });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;


