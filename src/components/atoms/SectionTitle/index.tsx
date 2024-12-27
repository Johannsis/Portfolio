import clsx from 'clsx';

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps): React.ReactElement {
  return (
    <h2
      className={clsx(
        'titles-lg sticky top-0 w-full py-6 font-extrabold uppercase tracking-wider text-primary-100 dark:font-bold dark:text-secondary-50 lg:hidden',
      )}
    >
      <div className="absolute left-0 top-0 -z-10 -ml-8 h-full w-screen overflow-clip bg-secondary-40 opacity-90 transition-colors dark:bg-primary-30"></div>
      {title}
    </h2>
  );
}

export default SectionTitle;
