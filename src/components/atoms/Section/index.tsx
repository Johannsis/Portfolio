interface SectionProps {
  children: Readonly<React.ReactNode>;
}

function Section({ children }: SectionProps): React.ReactElement {
  return (
    <section className="my-4 flex min-h-[65svh] w-full">{children}</section>
  );
}

export default Section;
