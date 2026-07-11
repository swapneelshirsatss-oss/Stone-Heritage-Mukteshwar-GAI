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
  
  // Use VITE_CDN_URL from environment if available and the src is a relative path
  const cdnBase = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_CDN_URL 
    ? import.meta.env.VITE_CDN_URL 
    : '';
  const finalSrc = src.startsWith('/') && cdnBase ? `${cdnBase}${src}` : src;

  // Generate srcset if widths are provided, otherwise undefined
  const srcSet = widths && widths.length > 0 
    ? widths.map(w => {
        // For static hosting/Hostinger CDN, use the pre-generated suffixed images
        // e.g. /vintage-room.webp -> /vintage-room-640.webp
        const isRelative = src.startsWith('/');
        if (isRelative) {
          const extIndex = src.lastIndexOf('.');
          if (extIndex !== -1) {
            const base = src.substring(0, extIndex);
            const ext = src.substring(extIndex);
            const responsiveUrl = `${cdnBase}${base}-${w}.webp`;
            return `${responsiveUrl} ${w}w`;
          }
        }
        
        // Fallback for external URLs or if we want to use query params
        const separator = finalSrc.includes('?') ? '&' : '?';
        return `${finalSrc}${separator}w=${w} ${w}w`;
      }).join(', ')
    : undefined;

  const aspectStyle = aspectRatio ? { aspectRatio, objectFit: 'cover' as const, width: '100%' } : {};
  const combinedStyle = { ...aspectStyle, ...style };

  return (
    <img
      src={finalSrc}
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
