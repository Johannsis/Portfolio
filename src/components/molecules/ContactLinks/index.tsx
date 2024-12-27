import { userData } from '@jh/data/user';
import { Icon } from '@jh/icons';

function ContactLinks(): React.ReactElement {
  const socialLinks = userData.social;

  return (
    <div className="flex h-fit flex-row gap-5 lg:relative lg:mb-36">
      {socialLinks.map(
        ({ icon, name, url }, index): React.ReactElement => (
          <a
            aria-label={name}
            className="text-black duration-200 ease-in-out hover:!text-lime-800 dark:text-white dark:hover:!text-lime-500"
            href={url}
            key={index}
            target="_blank"
          >
            <Icon className="fill-current" iconName={icon} size={24} />
          </a>
        ),
      )}
    </div>
  );
}

export default ContactLinks;
