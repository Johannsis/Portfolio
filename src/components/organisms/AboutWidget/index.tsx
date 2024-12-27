import Section from '@jh/components/atoms/Section';
import SectionTitle from '@jh/components/atoms/SectionTitle';

function AboutWidget(): React.ReactElement {
  return (
    <Section ariaLabel="About me" className="lg:!p-4" id="about">
      <SectionTitle title="about" />
      <p className="body-md font-semibold leading-6 text-primary-100 dark:font-normal dark:text-secondary-50">
        I&apos;m a perfectionist Software Engineer passionate about crafting the
        most performant, pixel-perfect, and accessible interfaces that blend
        creative designs with maintainable engineering. My favorite part of my
        work is integrating the latest fast technologies with thoughtful and
        desired designs to create experiences that engage users not only through
        looks but also responsiveness, best practices, performance, and
        usability while maintaining high SEO and Web Core Vitals&apos; metrics.
      </p>
      <p className="body-md font-semibold leading-6 text-primary-100 dark:font-normal dark:text-secondary-50">
        Currently, I’m a Senior Front-End Engineer at
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
      <p className="body-md font-semibold leading-6 text-primary-100 dark:font-normal dark:text-secondary-50">
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
    </Section>
  );
}

export default AboutWidget;