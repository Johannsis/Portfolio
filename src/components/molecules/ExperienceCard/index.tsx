import TechTag from '../TechTag';

interface ExperienceCardProps {
  companyName: string;
  description: string;
  period: string;
  position: string;
  stack: string[];
  url: string;
}

function ExperienceCard({
  companyName,
  description,
  period,
  position,
  stack,
  url,
}: ExperienceCardProps): React.ReactElement {
  return (
    <div className="group flex grow flex-col gap-3 transition-none md:flex-row md:gap-20 lg:p-4 lg:duration-75 lg:ease-in-out lg:hover:glassmorphism-background dark:lg:hover:glassmorphism-background-dark">
      <div className="flex max-w-[70px]">
        <span className="body-xs text-nowrap font-extrabold uppercase text-primary-50 dark:font-bold dark:text-secondary-50">
          {period}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <a
          className="flex"
          href={url}
          referrerPolicy="no-referrer"
          target="_blank"
        >
          <h2 className="body-md font-bold !leading-tight ease-in-out after:body-xs after:hover:body-md group-hover:lg:after:hover:body-md after:!leading-tight after:duration-100 after:ease-in-out after:content-['_↗'] hover:text-lime-800 dark:font-semibold dark:hover:text-lime-500 group-hover:lg:text-lime-800 dark:group-hover:lg:text-lime-500">
            {position} · {companyName}
          </h2>
        </a>
        <p className="body-xs font-semibold leading-5 text-primary-100 dark:font-normal dark:text-secondary-50">
          {description}
        </p>
        <ul className="flex flex-row flex-wrap gap-2">
          {stack?.map((tag, index): React.ReactElement => {
            return <TechTag key={index} tag={tag} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
