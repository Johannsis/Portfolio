import clsx from 'clsx';

import type { IconNames } from './constants/iconNames';
import svgs from './svgs';

interface IconComponentProps {
  className?: string;
  height?: number | string;
  iconName: IconNames;
  size?: number;
  stroke?: string;
  viewBox?: string;
  width?: number | string;
}

export function Icon({
  className,
  height,
  iconName,
  size,
  stroke,
  viewBox,
  width,
}: IconComponentProps): null | React.ReactElement {
  if (!iconName) return null;

  const heightValue = size || height;
  const widthValue = size || width;

  const IconComponent = svgs[iconName];

  if (!IconComponent) {
    return null;
  }

  return (
    <figure className={clsx('relative flex')}>
      <IconComponent
        className={clsx('w-full', className)}
        height={heightValue}
        stroke={stroke}
        viewBox={viewBox}
        width={widthValue}
      />
    </figure>
  );
}
