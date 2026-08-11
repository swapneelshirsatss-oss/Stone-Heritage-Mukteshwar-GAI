import React, { useState, useEffect, useRef } from 'react';

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth !== 0) {
        setIsLoaded(true);
      } else {
        setIsError(true);
      }
    }
  }, [src]);

  // Generate srcset if widths are provided, otherwise undefined
  const srcSet = widths && widths.length > 0 
    ? widths.map(w => {
        const separator = src.includes('?') ? '&' : '?';
        return `${src}${separator}w=${w} ${w}w`;
      }).join(', ')
    : undefined;

  return (
    <img
      ref={imgRef}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={`${className || ''} ${isError ? 'bg-red-100' : isLoaded ? '' : 'bg-stone-200/40'}`}
      onLoad={(e) => {
        setIsLoaded(true);
        if (props.onLoad) props.onLoad(e);
      }}
      onError={(e) => {
        setIsError(true);
        if (props.onError) props.onError(e);
      }}
      {...props}
    />
  );
}

