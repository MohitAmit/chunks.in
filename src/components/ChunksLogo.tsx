'use client';
import Image from 'next/image';

export const ChunksLogo = () => {
  return (
    <Image
      src="https://i.ibb.co/wrcGcBc6/Screenshot-2025-08-29-at-10-22-15-PM.png"
      alt="Chunks Logo"
      width={120}
      height={30}
      className="object-contain"
      priority
    />
  );
};
