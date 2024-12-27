'use client';

import { memo, useCallback, useState } from 'react';

import clsx from 'clsx';

function AboutWidget(): React.ReactElement {
  const [visible, setVisibility] = useState<boolean>(false);
  const handleVisibility = useCallback((): void => {
    setVisibility(!visible);
  }, [visible]);

  return (
    <div className="flex flex-col gap-4">
      <p
        className={clsx(
          'body-xs font-semibold leading-6 text-primary-100 dark:font-normal dark:text-secondary-50',
          !visible && 'hidden',
        )}
      >
        Currently, I’m a{' '}
        <span className="font-bold text-primary-50 dark:font-semibold dark:text-secondary-100">
          {' '}
          Senior Front-End Engineer
        </span>{' '}
        at
        <span className="font-bold text-primary-50 dark:font-semibold dark:text-secondary-100">
          {' '}
          TelevisaUnivision
        </span>
        , specializing in performance and new features. I contribute to the
        creation and integration of UI components that power TelevisaUnivision’s
        frontend, ensuring that the platform meets the highest standards of
        quality, performance, and best practices to deliver an outstanding user
        experience.
      </p>
      <p
        className={clsx(
          'body-xs font-semibold leading-6 text-primary-100 dark:font-normal dark:text-secondary-50',
          !visible && 'hidden',
        )}
      >
        In the past, I&apos;ve had the opportunity to develop software across a
        variety of environments, from{' '}
        <span className="font-bold text-primary-50 dark:font-semibold dark:text-secondary-100">
          start-ups
        </span>{' '}
        to{' '}
        <span className="font-bold text-primary-50 dark:font-semibold dark:text-secondary-100">
          large corporations
        </span>{' '}
        and{' '}
        <span className="font-bold text-primary-50 dark:font-semibold dark:text-secondary-100">
          digital banking products
        </span>
        .
      </p>
      <button
        className="body-xs w-fit rounded-xl px-2 py-1 font-extrabold leading-6 text-primary-100 glassmorphism-background hover:text-lime-700 dark:font-bold dark:text-secondary-100 dark:glassmorphism-background-dark dark:hover:text-lime-500"
        onClick={handleVisibility}
        type="button"
      >
        {visible ? 'Show less' : 'Read more'}
      </button>
    </div>
  );
}

export default memo(AboutWidget);
