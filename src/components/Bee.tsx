import { cn } from "@/lib/utils";

export function Bee({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={cn("absolute w-12 h-12", className)}
            {...props}
        >
            <g transform="translate(20 20) rotate(-30)">
                {/* Left Wing */}
                <path d="M45 30 C 25 10, 25 50, 45 50 Z" fill="#FDD85D" />
                {/* Right Wing */}
                <path d="M55 30 C 75 10, 75 50, 55 50 Z" fill="#FDD85D" />
                
                {/* Body */}
                <path d="M50 35 C 70 35, 80 50, 65 65 C 50 80, 30 80, 25 65 C 10 50, 30 35, 50 35 Z" fill="#FFFFFF"/>
                
                {/* Stripes */}
                <path d="M50 42 C 65 42, 70 50, 60 55 C 50 60, 35 60, 30 55 C 20 50, 35 42, 50 42 Z" fill="#000000" />
                <path d="M50 58 C 62 58, 65 65, 58 70 C 50 75, 40 75, 35 70 C 30 65, 38 58, 50 58 Z" fill="#000000" />
                <path d="M50 35 C 70 35, 80 50, 65 65 C 50 80, 30 80, 25 65 C 10 50, 30 35, 50 35 Z" fill="none" stroke="#000000" strokeWidth="2"/>

                {/* Eyes */}
                <circle cx="45" cy="38" r="1.5" fill="#000000" />
                <circle cx="55" cy="38" r="1.5" fill="#000000" />
            </g>
        </svg>
    )
}
