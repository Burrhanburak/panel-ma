"use client";

import Image from "next/image";
import { useState } from "react";
import { getFallbackImage } from "@/lib/images";

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function SafeImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const fallback = getFallbackImage();

  const handleError = () => {
    if (imgSrc !== fallback.url) {
      setImgSrc(fallback.url);
    }
  };

  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        width={width ?? 1200}
        height={height ?? 630}
        className={className}
        priority={priority}
        onError={handleError}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 630}
      className={className}
      priority={priority}
      onError={handleError}
    />
  );
}
