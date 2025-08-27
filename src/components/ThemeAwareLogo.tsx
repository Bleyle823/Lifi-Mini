"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ThemeAwareLogoProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

export function ThemeAwareLogo({ 
  width = 120, 
  height = 30, 
  className = "", 
  alt = "LiFi Logo" 
}: ThemeAwareLogoProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for component to mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder during hydration to avoid mismatch
    return (
      <div 
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width, height }}
      />
    );
  }

  const isDark = resolvedTheme === "dark";
  const logoSrc = isDark 
    ? "/logo_lifi_dark_horizontal.png" 
    : "/logo_lifi_light_horizontal.png";

  return (
    <Image
      src={logoSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
