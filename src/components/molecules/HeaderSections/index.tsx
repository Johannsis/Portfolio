import HeaderNavItem from '../HeaderNavItem';

const sections = ['about', 'experience'];

function HeaderSections(): React.ReactElement {
  return (
    <nav className="body-2xs hidden flex-col gap-6 font-extrabold uppercase dark:font-bold lg:flex">
      {sections.map((section, index): React.ReactElement => {
        return <HeaderNavItem key={index} sectionName={section} />;
      })}
    </nav>
  );
}

export default HeaderSections;
