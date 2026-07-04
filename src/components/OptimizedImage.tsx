import React, { useState } from 'react';

type OptimizedImageProps = React.ComponentProps<'img'> &  {
  src: string;
  alt: string;
  widths?: number[];
  sizes?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  widths = [400, 800, 1200, 1600], 
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className, 
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const isExternal = src.startsWith('http') || src.startsWith('data:');
  
  // A CDN-friendly URL builder using query parameters
  const getOptimizedUrl = (url: string, width: number) => {
    if (isExternal) return url;
    // By adding ?w=width&format=webp, standard CDNs (Vercel, Cloudflare, etc.) can intercept and resize dynamically
    return `${url}?w=${width}&format=webp&q=80`;
  };

  const srcSet = isExternal 
    ? undefined 
    : widths.map(w => `${getOptimizedUrl(src, w)} ${w}w`).join(', ');

  return (
    <img
      src={isExternal ? src : getOptimizedUrl(src, Math.max(...widths))}
      srcSet={srcSet}
      sizes={isExternal ? undefined : sizes}
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
