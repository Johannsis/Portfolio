import Section from '@jh/components/atoms/Section';
import SectionTitle from '@jh/components/atoms/SectionTitle';
import ExperienceCard from '@jh/components/molecules/ExperienceCard';
import { userData } from '@jh/data/user';
import { Icon } from '@jh/icons';

function ExperienceWidget(): React.ReactElement {
  const data = userData.experience;

  return (
    <Section ariaLabel="Work experience" id="experience">
      <SectionTitle title="experience" />
      <div className="flex grow flex-col gap-20">
        {data?.map((experience, index): React.ReactElement => {
          return <ExperienceCard key={index} {...experience} />;
        })}
      </div>
      <a
        className="body-md mt-4 flex flex-row items-center gap-2 fill-current font-bold duration-200 ease-in-out hover:text-lime-700 dark:font-semibold dark:hover:text-lime-500 lg:p-4"
        href="/assets/Johannes-Hoersch-CV.pdf"
        target="_blank"
      >
        <span className="body-md font-semibold dark:font-medium">
          View Full Resume
        </span>
        <Icon
          className="fill-current"
          iconName="arrowRight"
          size={20}
          viewBox="0 0 24 24"
        />
      </a>
    </Section>
  );
}

export default ExperienceWidget;
