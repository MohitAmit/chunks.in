import { cn } from "@/lib/utils";

export function Sugarcane({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 200"
            className={cn("absolute w-8 h-32 text-green-700/50 dark:text-green-400/30", className)}
            {...props}
        >
            <defs>
                <linearGradient id="sugarcaneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'hsl(var(--primary) / 0.4)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'hsl(var(--primary) / 0.2)', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <g fill="url(#sugarcaneGradient)">
                {/* Stalk segments */}
                <rect x="15" y="50" width="20" height="150" rx="5" />
                <line x1="15" y1="80" x2="35" y2="80" stroke="hsl(var(--background))" strokeWidth="2" />
                <line x1="15" y1="110" x2="35" y2="110" stroke="hsl(var(--background))" strokeWidth="2" />
                <line x1="15" y1="140" x2="35" y2="140" stroke="hsl(var(--background))" strokeWidth="2" />
                <line x1="15" y1="170" x2="35" y2="170" stroke="hsl(var(--background))" strokeWidth="2" />
                
                {/* Leaves */}
                <path d="M 25 50 C 5 40, 5 20, 30 0" strokeWidth="2" stroke="currentColor" fill="none" />
                <path d="M 25 55 C 45 45, 45 25, 20 5" strokeWidth="2" stroke="currentColor" fill="none" />
                <path d="M 25 60 C 10 50, 10 30, 25 10" strokeWidth="2" stroke="currentColor" fill="none" />
            </g>
        </svg>
    );
}
