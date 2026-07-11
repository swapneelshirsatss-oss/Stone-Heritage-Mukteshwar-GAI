import React, { useState } from 'react';

type OptimizedImageProps = React.ComponentProps<'img'> & {
  src: string;
  alt: string;
  widths?: number[];
  sizes?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  widths = [640, 768, 1024, 1280, 1536],
  sizes = '100vw',
  className, 
  loading = 'lazy',
  decoding = 'async',
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(loading === 'eager');

  // Generate srcset if widths are provided, otherwise undefined
  const srcSet = widths && widths.length > 0 
    ? widths.map(w => {
        const separator = src.includes('?') ? '&' : '?';
        return `${src}${separator}w=${w} ${w}w`;
      }).join(', ')
    : undefined;

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={`${className || ''} ${isLoaded ? '' : 'bg-stone-200 animate-pulse text-transparent'}`}
      onLoad={(e) => {
        setIsLoaded(true);
        if (props.onLoad) props.onLoad(e);
      }}
      {...props}
    />
  );
}
