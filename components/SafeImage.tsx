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
  sizes?: string;
  className?: string;
  priority?: boolean;
}

export function SafeImage({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
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

  const imageProps = {
    src: imgSrc,
    alt,
    className,
    priority,
    onError: handleError,
  };

  if (fill) {
    return <Image {...imageProps} fill sizes={sizes ?? "100vw"} />;
  }

  return (
    <Image
      {...imageProps}
      width={width ?? 1200}
      height={height ?? 630}
      sizes={sizes}
    />
  );
}
