'use client';

import { useCallback, useEffect } from 'react';

function MouseLight(): React.ReactElement {
  const handleMouseMove = useCallback((event: MouseEvent): void => {
    const y = event.pageY;
    const x = event.pageX;
    const ref = document.querySelector('.follow-cursor') as HTMLElement;
    const scrollLeft =
      window.pageXOffset !== undefined
        ? window.pageXOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollLeft;
    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    ref.style.left = x - scrollLeft - 300 + 'px';
    ref.style.top = y - scrollTop - 300 + 'px';
  }, []);
  useEffect((): void => {
    document.addEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="follow-cursor fixed z-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(rgba(0,0,0,0.03)_0%,rgba(0,0,0,0.001)_100%)] dark:bg-[radial-gradient(rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.001)_100%)]"></div>
  );
}

export default MouseLight;
