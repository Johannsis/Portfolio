/* eslint-disable @next/next/no-img-element */
import Section from '@jh/components/atoms/Section';
import { userData } from '@jh/data/user';

function AboutSection(): React.ReactElement {
  const data = userData;

  return (
    <Section>
      <div className="body-md flex flex-col items-center justify-center">
        <p>Hello! I&apos;m {data.name}</p>
        <p>{data.job}</p>
        <p>{data.description}</p>
      </div>
    </Section>
  );
}

export default AboutSection;
