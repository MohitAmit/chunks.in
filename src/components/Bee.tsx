import { cn } from "@/lib/utils";

export function Bee({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={cn("absolute w-12 h-12", className)}
            {...props}
        >
            <g transform="translate(50,50) rotate(-15)">
                {/* Wings */}
                <path d="M 5, -15 C -20, -40, -20, 0, 5, -5" fill="#e3f2fd" opacity="0.9" />
                <path d="M -5, -15 C 20, -40, 20, 0, -5, -5" fill="#bbdefb" opacity="0.9" />

                {/* Body */}
                <ellipse cx="0" cy="0" rx="25" ry="20" fill="#ffc107" />
                
                {/* Stripes */}
                <path d="M -23 5 C -20 15, 20 15, 23 5 Q 24 -5 -24 -5 Z" fill="#212121" />
                <path d="M -15 -13 C -12 -5, 12 -5, 15 -13 Q 12 -18 -12 -18 Z" fill="#212121" />
                
                {/* Face */}
                <circle cx="-7" cy="-2" r="2" fill="#212121" />
                <circle cx="7" cy="-2" r="2" fill="#212121" />

                {/* Antennae */}
                <path d="M -10 -18 Q -18 -25 -15 -30" stroke="#212121" strokeWidth="2" fill="none" />
                <path d="M 10 -18 Q 18 -25 15 -30" stroke="#212121" strokeWidth="2" fill="none" />
                <circle cx="-15" cy="-30" r="2.5" fill="#212121" />
                <circle cx="15" cy="-30" r="2.5" fill="#212121" />
            </g>
        </svg>
    )
}
