import { cn } from "@/lib/utils";

export function Bee({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("lucide lucide-bee absolute w-6 h-6 text-foreground/50", className)}
            {...props}
        >
            <path d="M14 6l-1 2h-1l-1 2" />
            <path d="M10 8h.01" />
            <path d="M12 10.5h.01" />
            <path d="M14 8h.01" />
            <path d="M16 13h.01" />
            <path d="M18 11h.01" />
            <path d="M18 9h.01" />
            <path d="M20 7h.01" />
            <path d="M12 2l-2 4-2.5 1.5L6 8" />
            <path d="M14 17.9a4 4 0 0 1-8 0" />
            <path d="M18 10a4 4 0 0 1-8 0" />
            <path d="M21.17 8a4.72 4.72 0 0 1-1.12 3.9" />
            <path d="M3.95 11.9a4.72 4.72 0 0 1 1.12-3.9" />
            <path d="M12.9 20a4.72 4.72 0 0 1-1.8 0" />
            <path d="M6.53 16a4.72 4.72 0 0 1-1.48-2.45" />
            <path d="M18.95 13.55a4.72 4.72 0 0 1-1.48 2.45" />
        </svg>
    )
}
