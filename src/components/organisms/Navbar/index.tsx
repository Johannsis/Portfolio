import ContactLinks from '@jh/components/molecules/ContactLinks';
import ThemeButtonPlaceholder from '@jh/components/molecules/ThemeButton/ThemeButtonPlaceHolder';
import { userData } from '@jh/data/user';

function Navbar(): React.ReactElement {
  const userName = userData.name;

  return (
    <nav className="z-10 flex h-32 w-full items-center justify-between gap-8">
      <h1 className="titles-lg">{userName}</h1>
      <ul className="body-sm flex max-w-[70%] grow flex-row items-center justify-between">
        <li>About</li>
        <li>Experience</li>
        <li>Contact</li>
        <li>
          <a href="Johannes-Hoersch-CV.pdf" target="_blank">
            Resume
          </a>
        </li>
        <li>
          <ThemeButtonPlaceholder />
        </li>
      </ul>
      <ContactLinks />
    </nav>
  );
}

export default Navbar;
