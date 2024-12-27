import 'server-only';

import ContactLinks from '@jh/components/molecules/ContactLinks';
import HeaderSections from '@jh/components/molecules/HeaderSections';
import { userData } from '@jh/data/user';

function Header(): React.ReactElement {
  return (
    <div className="mb-20 flex min-h-60 flex-col gap-5 lg:fixed lg:mb-0 lg:max-h-screen lg:min-h-[90vh] lg:max-w-[33%] lg:justify-between 2xl:max-w-[calc(20%-0.75rem)]">
      <div className="flex w-full flex-col gap-3">
        <h1 className="lg:leading-12 titles-4xl font-bold leading-tight">
          {userData.name}
        </h1>
        <h2 className="titles-xl font-semibold">{userData.job}</h2>
        <h3 className="body-sm font-bold text-primary-100 dark:font-semibold dark:text-secondary-50">
          Based in {userData.location}
        </h3>
        <p className="body-sm font-semibold leading-5 text-primary-100 dark:font-normal dark:text-secondary-50">
          {userData.motto}
        </p>
      </div>
      <HeaderSections />
      <ContactLinks />
    </div>
  );
}

export default Header;
