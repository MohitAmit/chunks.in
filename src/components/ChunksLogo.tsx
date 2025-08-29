'use client';

import Image from 'next/image';

export const ChunksLogo = () => {
    return (
      <Image
        src="https://i.ibb.co/ynCgxZ9h/Screenshot-2025-07-14-at-8-04-49-PM.png"
        alt="Chunks Logo"
        width={150}
        height={40}
        className="object-contain"
        priority
      />
    );
};
