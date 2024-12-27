import MouseLight from '@jh/components/atoms/MouseLight';
import ThemeButtonPlaceholder from '@jh/components/molecules/ThemeButton/ThemeButtonPlaceHolder';
import AboutWidget from '@jh/components/organisms/AboutWidget';
import ExperienceWidget from '@jh/components/organisms/ExperienceSection';
import Header from '@jh/components/organisms/Header';

export default function Home(): React.ReactElement {
  return (
    <div className="flex min-h-screen w-full min-w-min grow flex-col gap-6 bg-secondary-40 px-6 py-12 text-black antialiased transition ease-in-out dark:bg-primary-20 dark:text-secondary-100 md:gap-12 lg:px-12 lg:py-24">
      <div className="z-10 flex min-h-full max-w-7xl flex-col gap-6 self-center lg:flex-row">
        <Header />
        <main className="mx-auto my-0 flex w-full grow flex-col gap-16 py-0 lg:mr-0 lg:max-w-[50%]">
          <AboutWidget />
          <ExperienceWidget />
          <footer className="body-xs flex flex-col gap-2 font-semibold text-primary-100 dark:font-normal dark:text-secondary-50 lg:p-4">
            <p>
              Designed with 💚 in{' '}
              <span className="font-bold text-primary-50 dark:font-semibold dark:text-secondary-100">
                Next.js
              </span>{' '}
              and{' '}
              <span className="font-bold text-primary-50 dark:font-semibold dark:text-secondary-100">
                Tailwind CSS
              </span>
              , deployed in GitHub Pages.
            </p>
          </footer>
        </main>
      </div>
      <MouseLight />
      <ThemeButtonPlaceholder />
    </div>
  );
}
