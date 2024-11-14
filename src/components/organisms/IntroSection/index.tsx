/* eslint-disable @next/next/no-img-element */
import Section from '@jh/components/atoms/Section';
import { userData } from '@jh/data/user';

function IntroSection(): React.ReactElement {
  const data = userData;

  return (
    <Section>
      <div className="titles-4xl flex w-full flex-col items-center justify-center self-center">
        <span>{data.name}</span>
        <span>{data.job}</span>
      </div>
    </Section>
  );
}

export default IntroSection;
