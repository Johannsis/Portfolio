import AboutSection from '@jh/components/organisms/AboutSection';
import ContactSection from '@jh/components/organisms/ContactSection';
import ExperienceSection from '@jh/components/organisms/ExperienceSection';
import IntroSection from '@jh/components/organisms/IntroSection';
import Navbar from '@jh/components/organisms/Navbar';

export default function Home(): React.ReactElement {
  return (
    <div className="flex w-svw flex-col bg-[#e3fff5] text-black antialiased dark:bg-primary-50 dark:text-white">
      <main className="mx-auto my-0 flex w-full max-w-[1920px] grow flex-col overflow-hidden px-32 py-0">
        <Navbar />
        <IntroSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="absolute bottom-0 text-nowrap py-1 pl-8"></footer>
    </div>
  );
}
