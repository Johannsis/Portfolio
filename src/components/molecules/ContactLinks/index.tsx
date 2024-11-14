import { userData } from '@jh/data/user';
import { Icon } from '@jh/icons';

function ContactLinks(): React.ReactElement {
  const socialLinks = userData.social;

  return (
    <div className="fixed bottom-0 left-0 flex flex-col gap-4 p-4 pb-16">
      {socialLinks.map(
        ({ icon, name, url }, index): React.ReactElement => (
          <a aria-label={name} href={url} key={index} target="_blank">
            <Icon
              className="fill-current text-black dark:text-white"
              iconName={icon}
              size={36}
            />
          </a>
        ),
      )}
    </div>
  );
}

export default ContactLinks;
