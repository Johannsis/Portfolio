import type { IconProps } from '../constants/types';

export default function arrowRight({
  className,
  height = '800',
  viewBox = '0 0 20 20',
  width = '800',
}: IconProps): React.ReactElement {
  return (
    <svg className={className} height={height} viewBox={viewBox} width={width}>
      <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" />
    </svg>
  );
}
