interface TechTagProps {
  tag: string;
}

function TechTag({ tag }: TechTagProps): React.ReactElement {
  return (
    <li className="body-2xs rounded-2xl bg-lime-950 px-2 py-1 font-semibold text-lime-500 dark:bg-lime-900 dark:text-lime-400">
      {tag}
    </li>
  );
}

export default TechTag;
