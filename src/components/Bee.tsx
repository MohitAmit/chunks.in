import { cn } from "@/lib/utils";

export function Bee({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={cn("absolute w-20 h-20", className)}
            {...props}
        >
            {/* Wings */}
            <path d="M55 25 C 85 -5, 105 35, 70 50 Z" fill="#a2d5f2" fillOpacity="0.9" transform="rotate(-10 70 30)"/>
            <path d="M60 28 C 90 0, 110 40, 75 53 Z" fill="#d0e9f8" fillOpacity="0.8" transform="rotate(-10 70 30)"/>
            
            {/* Body */}
            <path d="M30 50 C 10 70, 20 100, 50 95 C 80 100, 90 70, 70 50 Z" fill="#ffcb05"/>
            
            {/* Stripes */}
            <path d="M28 65 Q 50 60, 72 65" stroke="#3d2b00" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M35 80 Q 50 75, 65 80" stroke="#3d2b00" strokeWidth="9" fill="none" strokeLinecap="round" />

            {/* Head */}
            <circle cx="65" cy="45" r="25" fill="#ffcb05"/>
            <path d="M85 45 A 20 20 0 0 0 45 45" fill="#3d2b00" />
            
            {/* Face */}
            <circle cx="58" cy="42" r="5" fill="#3d2b00"/>
            {/* Wink */}
            <path d="M72 38 Q 78 42, 72 46" stroke="#3d2b00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            {/* Smile */}
            <path d="M60 55 Q 68 62, 76 54" stroke="#3d2b00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            {/* Blush */}
            <circle cx="80" cy="50" r="5" fill="#ff7b7b" opacity="0.8"/>
            
            {/* Antennae */}
            <path d="M58 22 C 50 10, 55 5, 50 0" stroke="#3d2b00" strokeWidth="2" fill="none" />
            <path d="M72 22 C 80 10, 75 5, 80 0" stroke="#3d2b00" strokeWidth="2" fill="none" />
            <circle cx="50" cy="0" r="3" fill="#3d2b00"/>
            <circle cx="80" cy="0" r="3" fill="#3d2b00"/>
        </svg>
    )
}
