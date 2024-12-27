import Section from '@jh/components/atoms/Section';
import SectionTitle from '@jh/components/atoms/SectionTitle';

function AboutWidget(): React.ReactElement {
  return (
    <Section ariaLabel="About me" className="lg:!p-4" id="about">
      <SectionTitle title="about" />
      <p className="body-md font-semibold leading-6 text-primary-100 dark:font-normal dark:text-secondary-50">
        I&apos;m a excited Software Engineer passionate about crafting the most
        performant, pixel-perfect and accesible interfaces that mixes creative
        designs with maintainable engineering. My favorite part of my work is
        integrating the latest fast technologies with your thoughtful and
        desired design to create experiences that&apos;ll engage the users not
        only for looks, but also responsiveness, performance and usability.
      </p>
      <p className="body-md font-semibold leading-6 text-primary-100 dark:font-normal dark:text-secondary-50">
        Currently, I&apos;m a Senior Front-End Engineer at{' '}
        <span className="font-bold text-primary-50 dark:font-semibold dark:text-secondary-100">
          TelevisaUnivision
        </span>
        , specializing in performance and new features. I contribute to the
        creation and integration of UI components that power
        TelevisaUnivision&apos;s sites&apos;frontend, ensuring that the platform
        meets the highest standard of quality, performance and best practices to
        deliver an outstanding user experience.
      </p>
      <p className="body-md font-semibold leading-6 text-primary-100 dark:font-normal dark:text-secondary-50">
        In the past, I&apos;ve had the opportunity to develop software across a
        variety of environments, from{' '}
        <span className="font-bold text-primary-50 dark:font-semibold dark:text-secondary-100">
          start-ups
        </span>{' '}
        and{' '}
        <span className="font-bold text-primary-50 dark:font-semibold dark:text-secondary-100">
          small digital product studios
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
