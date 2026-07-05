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
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className || ''} ${isLoaded ? '' : 'bg-stone-200 animate-pulse text-transparent'}`}
      onLoad={(e) => {
        setIsLoaded(true);
        if (props.onLoad) props.onLoad(e);
      }}
      {...props}
    />
  );
}
