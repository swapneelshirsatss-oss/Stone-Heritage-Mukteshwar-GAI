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
  widths,
  sizes,
  className, 
  loading = 'lazy',
  decoding = 'async',
  ...props 
}: OptimizedImageProps) {
  const [isError, setIsError] = useState(false);

  // Generate srcset only if widths are explicitly specified
  const srcSet = props.srcSet || (widths && widths.length > 0 
    ? widths.map(w => {
        const separator = src.includes('?') ? '&' : '?';
        return `${src}${separator}w=${w} ${w}w`;
      }).join(', ')
    : undefined);

  const effectiveSizes = srcSet ? (sizes || '100vw') : sizes;

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={effectiveSizes}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={`${className || ''} ${isError ? 'bg-red-100' : ''}`.trim()}
      onError={(e) => {
        setIsError(true);
        if (props.onError) props.onError(e);
      }}
      {...props}
    />
  );
}

