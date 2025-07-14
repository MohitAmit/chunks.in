import { cn } from "@/lib/utils";

export function Bee({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={cn("absolute w-12 h-12", className)}
            {...props}
        >
            <defs>
                <radialGradient id="eye-gradient" cx="50%" cy="50%" r="50%" fx="65%" fy="35%">
                    <stop offset="0%" style={{stopColor: "#87CEEB"}} />
                    <stop offset="100%" style={{stopColor: "#0077BE"}} />
                </radialGradient>
            </defs>

            {/* Wings */}
            <path d="M60 40 C 90 10, 95 50, 65 60 Z" fill="#F8B9D4" fillOpacity="0.8"/>
            <path d="M40 40 C 10 10, 5 50, 35 60 Z" fill="#F8B9D4" fillOpacity="0.8"/>

            {/* Body */}
            <path d="M35 55 C 20 70, 25 95, 50 95 C 75 95, 80 70, 65 55 Z" fill="#FFD700"/>

            {/* Stripes */}
            <path d="M30 70 Q 50 65, 70 70" stroke="#1E1E1E" strokeWidth="6" fill="none" />
            <path d="M33 82 Q 50 77, 67 82" stroke="#1E1E1E" strokeWidth="7" fill="none" />
            
            {/* Head */}
            <path d="M50 20 C 30 20, 25 60, 50 60 C 75 60, 70 20, 50 20 Z" fill="#1E1E1E"/>
            <path d="M50 35 C 30 35, 28 65, 50 65 C 72 65, 70 35, 50 35 Z" fill="#FFD700"/>

            {/* Eyes */}
            <circle cx="40" cy="45" r="7" fill="url(#eye-gradient)"/>
            <circle cx="60" cy="45" r="7" fill="url(#eye-gradient)"/>
            <circle cx="42" cy="43" r="2" fill="white"/>
            <circle cx="62" cy="43" r="2" fill="white"/>

            {/* Smile */}
            <path d="M42 55 Q 50 62, 58 55" stroke="#1E1E1E" strokeWidth="1.5" fill="none" />

            {/* Antennae */}
            <path d="M40 25 C 30 10, 30 5, 35 5" stroke="#1E1E1E" strokeWidth="2" fill="none" />
            <path d="M60 25 C 70 10, 70 5, 65 5" stroke="#1E1E1E" strokeWidth="2" fill="none" />
            <circle cx="35" cy="5" r="4" fill="#FFD700" />
            <circle cx="65" cy="5" r="4" fill="#FFD700" />
        </svg>
    )
}
