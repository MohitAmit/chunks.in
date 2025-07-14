import { cn } from "@/lib/utils";

export function Bee({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={cn("absolute w-8 h-8", className)}
            {...props}
        >
            <circle cx="50" cy="50" r="22" fill="#FFD700" />
            <path d="M50 28 L50 72" stroke="black" strokeWidth="12" />
            <path d="M50 38 L50 62" stroke="#4A4A4A" strokeWidth="8" />
            <path d="M30 30 A 20 20, 0, 0, 1, 70 30" fill="rgba(255,255,255,0.7)" />
            <path d="M35 25 A 20 20, 0, 0, 1, 65 25" fill="rgba(255,255,255,0.5)" />
            <circle cx="38" cy="45" r="3" fill="black" />
            <circle cx="62" cy="45" r="3" fill="black" />
        </svg>
    )
}
