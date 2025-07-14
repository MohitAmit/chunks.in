import { cn } from "@/lib/utils";

export function Bee({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={cn("absolute w-16 h-16", className)}
            {...props}
        >
            <g transform="translate(5, 5) rotate(15)">
                {/* Wings */}
                <ellipse cx="45" cy="35" rx="15" ry="20" fill="#e0f7fa" stroke="#b0bec5" strokeWidth="1" transform="rotate(-10 45 35)" />
                <ellipse cx="55" cy="35" rx="15" ry="20" fill="#e0f7fa" stroke="#b0bec5" strokeWidth="1" transform="rotate(10 55 35)" />

                {/* Body */}
                <ellipse cx="60" cy="60" rx="25" ry="20" fill="#ffc107" />
                
                {/* Stripes */}
                <path d="M 55 50 Q 60 60 55 70" stroke="#212121" strokeWidth="6" strokeLinecap="round" />
                <path d="M 68 48 Q 73 58 68 68" stroke="#212121" strokeWidth="6" strokeLinecap="round" />

                {/* Stinger */}
                <path d="M 85 60 L 95 60" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
                
                {/* Antennae */}
                <path d="M 40 45 Q 30 30 40 25" stroke="black" strokeWidth="1.5" fill="none" />
                <path d="M 50 45 Q 60 30 50 25" stroke="black" strokeWidth="1.5" fill="none" />
            </g>
        </svg>
    )
}
