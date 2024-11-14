import type { IconProps } from '../constants/types';

export default function moon({
  className = 'fill-current text-white',
  height = '800',
  viewBox = '0 0 24 24',
  width = '800',
}: IconProps): React.ReactElement {
  return (
    <svg className={className} height={height} viewBox={viewBox} width={width}>
      <path
        className={className}
        d="M12 22c5.523 0 10-4.477 10-10 0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10Z"
      />
    </svg>
  );
}
