import 'server-only';

function AboutWidget(): React.ReactElement {
  return (
    <div className="flex flex-col-reverse gap-4">
      <label className="peer body-xs w-fit rounded-xl px-2 py-1 font-extrabold leading-6 text-primary-100 glassmorphism-background hover:text-lime-700 dark:font-bold dark:text-secondary-100 dark:glassmorphism-background-dark dark:hover:text-lime-500">
        <input className="peer hidden" type="checkbox" />
        <span className="after:content-['Read\00a0More'] after:peer-checked:content-['Show\00a0Less']" />
      </label>
      <div className="hidden flex-col gap-4 peer-has-[:checked]:flex">
        <p className="body-xs font-semibold leading-6 text-primary-100 dark:font-normal dark:text-secondary-50">
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
          creation and integration of UI components that power
          TelevisaUnivision’s frontend, ensuring that the platform meets the
          highest standards of quality, performance, and best practices to
          deliver an outstanding user experience.
        </p>
        <p className="body-xs font-semibold leading-6 text-primary-100 dark:font-normal dark:text-secondary-50">
          In the past, I&apos;ve had the opportunity to develop software across
          a variety of environments, from{' '}
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
      </div>
    </div>
  );
}

export default AboutWidget;
