import React, { useState } from 'react';

type ResponsiveImageProps = React.ComponentProps<'img'> & {
  src: string;
  alt: string;
  aspectRatio?: string;
  widths?: number[];
  sizes?: string;
};

export function ResponsiveImage({ 
  src, 
  alt, 
  aspectRatio,
  widths = [640, 768, 1024, 1280, 1536],
  sizes = '100vw',
  className, 
  loading = 'lazy',
  decoding = 'async',
  style,
  ...props 
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate srcset if widths are provided, otherwise undefined
  const srcSet = widths && widths.length > 0 
    ? widths.map(w => {
        const separator = src.includes('?') ? '&' : '?';
        return `${src}${separator}w=${w} ${w}w`;
      }).join(', ')
    : undefined;

  const aspectStyle = aspectRatio ? { aspectRatio, objectFit: 'cover' as const, width: '100%' } : {};
  const combinedStyle = { ...aspectStyle, ...style };

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding={decoding}
      style={combinedStyle}
      className={`${className || ''} ${isLoaded ? '' : 'bg-stone-200 animate-pulse text-transparent'}`}
      onLoad={(e) => {
        setIsLoaded(true);
        if (props.onLoad) props.onLoad(e);
      }}
      {...props}
    />
  );
}
