import { cn } from "@/lib/utils";

export function Bee({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={cn("absolute w-10 h-10", className)}
            {...props}
        >
            {/* Left Wing */}
            <path d="M40 35 C 20 20, 20 50, 40 50 Z" fill="rgba(255,255,255,0.8)" />
            {/* Right Wing */}
            <path d="M60 35 C 80 20, 80 50, 60 50 Z" fill="rgba(255,255,255,0.8)" />
            
            {/* Body */}
            <ellipse cx="50" cy="60" rx="18" ry="25" fill="#FFC700" />
            
            {/* Stripes */}
            <path d="M35 55 Q 50 50, 65 55" stroke="black" strokeWidth="5" fill="none" />
            <path d="M33 65 Q 50 60, 67 65" stroke="black" strokeWidth="5" fill="none" />
            
            {/* Head */}
            <circle cx="50" cy="45" r="12" fill="black" />
            
            {/* Eyes */}
            <circle cx="45" cy="42" r="3" fill="white" />
            <circle cx="55" cy="42" r="3" fill="white" />

             {/* Stinger */}
            <path d="M50 85 L48 90 L52 90 Z" fill="black" />
        </svg>
    )
}