'use client';

import { useState, useEffect } from 'react';

export const ChunksLogo = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className="w-[150px] h-[40px]" />;
    }

    return (
      <div className="w-[150px] h-[40px]">
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <style>
              {`
                .logo-char { fill: hsl(var(--foreground)); }
                .logo-subtext { fill: hsl(var(--muted-foreground)); }
                .dark .logo-char { fill: hsl(var(--foreground)); }
                .dark .logo-subtext { fill: hsl(var(--muted-foreground)); }
              `}
            </style>
            <text y="22" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="28">
                <tspan className="logo-char">C</tspan>
                <tspan dx="1" className="logo-char">h</tspan>
                <tspan dx="1" className="logo-char">u</tspan>
                <tspan dx="1" className="logo-char">n</tspan>
                <tspan dx="1" className="logo-char">k</tspan>
                <tspan dx="1" className="logo-char">s</tspan>
            </text>
            <text x="0" y="38" fontSize="12" className="logo-subtext">
                of happiness
            </text>
        </svg>
      </div>
    );
};
