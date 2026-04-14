import React from 'react';
import Image from 'next/image';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

const SIZE_MAP: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
  '2xl': 64,
  '3xl': 96,
};

interface IconProps {
  name: string;
  size?: IconSize;
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

/**
 * A reusable Icon component that loads SVGs from the /public/images directory.
 * Usage: <Icon name="menu" size="md" /> or <Icon name="menu" width={24} height={24} />
 */
const Icon: React.FC<IconProps> = ({
  name,
  size,
  width,
  height,
  className = "",
  alt = ""
}) => {
  const iconWidth = width || (size ? SIZE_MAP[size] : 24);
  const iconHeight = height || (size ? SIZE_MAP[size] : 24);

  const src = name.startsWith('/') ? name : `/images/${name.endsWith('.svg') ? name : `${name}.svg`}`;

  return (
    <div className={`inline-flex items-center justify-center flex-shrink-0 ${className}`}>
      <Image
        src={src}
        alt={alt || name}
        width={iconWidth}
        height={iconHeight}
        className="cursor-pointer"
        style={{ height: 'auto' }}
      />
    </div>
  );
};

export default Icon;
