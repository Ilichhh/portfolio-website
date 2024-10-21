import { useState, useEffect } from 'react';

const MOBILE_VIEW_THRESHOLD = 997;

export const useIsMobileView = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= MOBILE_VIEW_THRESHOLD);

  useEffect(() => {
    const windowResizeHandler = () => {
      const matchMediaString = `(max-width: ${MOBILE_VIEW_THRESHOLD}px)`;

      if (matchMedia(matchMediaString).matches) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    window.addEventListener('resize', windowResizeHandler);
    return () => window.removeEventListener('resize', windowResizeHandler);
  }, []);

  return isMobileView;
};
