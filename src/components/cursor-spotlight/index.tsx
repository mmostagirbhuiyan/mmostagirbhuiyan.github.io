import { useEffect, useRef } from 'react';

const CursorSpotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        spotlight.style.opacity = '1';
        isVisible = true;
      }
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = '0';
      isVisible = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div ref={spotlightRef} className="cursor-spotlight" style={{ opacity: 0 }} />;
};

export default CursorSpotlight;
