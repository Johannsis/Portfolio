'use client';

import { memo, useEffect, useState } from 'react';

import clsx from 'clsx';

interface HeaderNavItemProps {
  sectionName: string;
}

const observerOptions: IntersectionObserverInit = {
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
};

function HeaderNavItem({
  sectionName,
}: HeaderNavItemProps): React.ReactElement {
  const [active, setActive] = useState(false);

  useEffect((): void => {
    const sectionElement = document.getElementById(sectionName);

    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry): void => {
          const { bottom } = entry.boundingClientRect;
          const isInterecting = bottom >= 0 && entry.intersectionRatio >= 0.3;
          if (!isInterecting) {
            setActive(false);

            return;
          }
          setActive(true);
        });
      },
      observerOptions,
    );

    observer.observe(sectionElement);
  }, [sectionName]);

  return (
    <a
      className={clsx(
        'group flex w-fit flex-row items-center gap-4 hover:text-primary-50 dark:hover:text-secondary-100',
        active && 'text-primary-50 dark:text-secondary-100',
        !active && 'text-primary-100 dark:text-secondary-50',
      )}
      href={`#${sectionName}`}
    >
      <div
        className={clsx(
          'h-[1px] transition-all duration-100 ease-in-out group-hover:w-16 group-hover:bg-primary-50 dark:group-hover:bg-secondary-100',
          active && 'w-16 bg-primary-50 dark:bg-secondary-100',
          !active && 'w-8 bg-primary-100 dark:bg-secondary-50',
        )}
      />
      {sectionName}
    </a>
  );
}

export default memo(HeaderNavItem);
