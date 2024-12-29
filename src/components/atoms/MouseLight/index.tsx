'use client';

import type React from 'react';
import { useEffect, useRef } from 'react';

function MouseLight(): React.ReactElement {
  const lightRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent): void => {
    if (lightRef.current) {
      const lightSize = 300;
      lightRef.current.style.transform = `translate(${e.clientX - lightSize}px, ${e.clientY - lightSize}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return (): void => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0"
      ref={lightRef}
      style={{
        transform: 'translate(-9999px, -9999px)',
        willChange: 'transform',
      }}
    >
      <div className="h-[600px] w-[600px] rounded-full bg-[radial-gradient(rgba(6,23,14,0.05)_0%,rgba(6,23,14,0.00)_100%)] opacity-75 dark:bg-[radial-gradient(rgba(227,255,245,0.03)_0%,rgba(227,255,245,0.00)_100%)]"></div>
    </div>
  );
}

export default MouseLight;
