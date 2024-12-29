'use client';

import { memo, useEffect, useRef } from 'react';

interface HeaderNavItemProps {
  sectionName: string;
}

const observerOptions: IntersectionObserverInit = {
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
};

function HeaderNavItem({
  sectionName,
}: HeaderNavItemProps): React.ReactElement {
  const navItemRef = useRef<HTMLAnchorElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect((): void => {
    const sectionElement = document.getElementById(sectionName);

    if (!sectionElement || !navItemRef.current || !divRef.current) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry): void => {
          const { bottom } = entry.boundingClientRect;
          const isInterecting = bottom >= 0 && entry.intersectionRatio >= 0.6;
          if (!isInterecting) {
            navItemRef.current?.classList.remove(
              'text-primary-50',
              'dark:text-secondary-100',
            );
            navItemRef.current?.classList.add(
              'text-primary-100',
              'dark:text-secondary-50',
            );
            divRef.current?.classList.add('w-8');
            divRef.current?.classList.remove('w-16');

            return;
          }
          navItemRef.current?.classList.add(
            'text-primary-50',
            'dark:text-secondary-100',
          );
          navItemRef.current?.classList.remove(
            'text-primary-100',
            'dark:text-secondary-50',
          );
          divRef.current?.classList.remove('w-8');
          divRef.current?.classList.add('w-16');
        });
      },
      observerOptions,
    );

    observer.observe(sectionElement);
  }, [sectionName]);

  return (
    <a
      className="group flex w-fit flex-row items-center gap-4 text-primary-100 hover:text-primary-50 dark:text-secondary-50 dark:hover:text-secondary-100"
      href={`#${sectionName}`}
      ref={navItemRef}
    >
      <div
        className="h-[1px] w-8 bg-primary-100 transition-all duration-100 ease-in-out group-hover:w-16 group-hover:bg-primary-50 dark:bg-secondary-50 dark:group-hover:bg-secondary-100"
        ref={divRef}
      />
      {sectionName}
    </a>
  );
}

export default memo(HeaderNavItem);
