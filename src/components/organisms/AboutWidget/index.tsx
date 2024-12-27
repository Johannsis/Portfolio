'use client';

import { useCallback, useState } from 'react';

import clsx from 'clsx';

import Section from '@jh/components/atoms/Section';
import SectionTitle from '@jh/components/atoms/SectionTitle';

function AboutWidget(): React.ReactElement {
  const [visible, setVisibility] = useState<boolean>(false);
  const handleVisibility = useCallback((): void => {
    setVisibility(!visible);
  }, [visible]);

  return (
    <Section ariaLabel="About me" className="lg:!p-4" id="about">
      <SectionTitle title="about" />
      <p className="body-xs font-semibold leading-6 text-primary-100 dark:font-normal dark:text-secondary-50">
        I&apos;m a detail-oriented Software Engineer passionate about building
        performant, pixel-perfect, and accessible interfaces that combine
        creative design with maintainable engineering. I love integrating
        cutting-edge technologies with thoughtful design to create engaging user
        experiences focused on responsiveness, performance, usability, and SEO,
        while optimizing for Web Core Vitals.
      </p>
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
    </Section>
  );
}

export default AboutWidget;
