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
                .logo-c { fill: #8e44ad; }
                .logo-h { fill: #2a9d8f; }
                .logo-u { fill: #e74c3c; }
                .logo-n { fill: #f4a261; }
                .logo-k { fill: #e76f51; }
                .logo-s { fill: #8e44ad; }
                .logo-subtext { fill: hsl(var(--foreground)); opacity: 0.8; }
                .dark .logo-c { fill: #f5c02c; }
                .dark .logo-h { fill: #81b29a; }
                .dark .logo-u { fill: #e74c3c; }
                .dark .logo-n { fill: #f5b98b; }
                .dark .logo-k { fill: #ee9279; }
                .dark .logo-s { fill: #f5c02c; }
                .dark .logo-subtext { fill: hsl(var(--foreground)); opacity: 0.8; }
              `}
            </style>
            <text y="22" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="28">
                <tspan className="logo-c">C</tspan>
                <tspan dx="1" className="logo-h">h</tspan>
                <tspan dx="1" className="logo-u">u</tspan>
                <tspan dx="1" className="logo-n">n</tspan>
                <tspan dx="1" className="logo-k">k</tspan>
                <tspan dx="1" className="logo-s">s</tspan>
            </text>
            <text x="0" y="38" fontSize="12" className="logo-subtext">
                of happiness
            </text>
        </svg>
      </div>
    );
};
