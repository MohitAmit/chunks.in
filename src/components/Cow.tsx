import { cn } from "@/lib/utils";

export function Cow({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("text-foreground", className)}
            {...props}
        >
            <path d="M18.5 7.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5" />
            <path d="M14 12c-2.5 0-4.5 2-4.5 4.5V20h9v-3.5c0-2.5-2-4.5-4.5-4.5Z" />
            <path d="M4.5 16.5c-1.5 0-3-1.5-3-3V6c0-1.5 1-3 3-3h1c1.5 0 3 1.5 3 3v2" />
            <path d="M19.5 16.5c1.5 0 3-1.5 3-3V6c0-1.5-1-3-3-3h-1c-1.5 0-3 1.5-3 3v2" />
            <path d="M7 11v1" />
            <path d="M17 11v1" />
            <path d="M12 16h.01" />
        </svg>
    );
}
