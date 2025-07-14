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
                {/* <!-- Wings --> */}
                <path d="M 50 30 C 20 0, 20 60, 50 50" fill="#e3f2fd" opacity="0.8" stroke="#90a4ae" strokeWidth="0.5" transform="rotate(-20 50 30)" />
                <path d="M 45 30 C 10 -10, 10 50, 45 45" fill="#fafafa" opacity="0.7" stroke="#b0bec5" strokeWidth="0.5" transform="rotate(-25 45 30)" />

                {/* <!-- Body --> */}
                <ellipse cx="65" cy="65" rx="20" ry="25" fill="#ffc107" transform="rotate(-45 65 65)" />
                
                {/* <!-- Stripes --> */}
                <path d="M 75 55 Q 85 70 70 80 L 60 75 Q 70 65 75 55" fill="#212121" />
                <path d="M 83 63 Q 93 78 78 88 L 68 83 Q 78 73 83 63" fill="#212121" />
                <path d="M 52 72 Q 62 87 47 97 L 37 92 Q 47 82 52 72" fill="#212121" />

                {/* <!-- Head --> */}
                <circle cx="40" cy="50" r="22" fill="#ffc107" />
                
                {/* <!-- Eyes --> */}
                <circle cx="35" cy="50" r="8" fill="white" />
                <circle cx="33" cy="52" r="4" fill="black" />
                <circle cx="37" cy="48" r="1.5" fill="white" opacity="0.9" />
                
                {/* <!-- Antennae --> */}
                <path d="M 25 35 Q 20 25, 25 20" stroke="black" strokeWidth="1.5" fill="none" />
                <path d="M 35 30 Q 38 20, 45 22" stroke="black" strokeWidth="1.5" fill="none" />

                {/* <!-- Fuzz/Legs --> */}
                <path d="M 50 60 L 45 65 M 55 65 L 50 70 M 60 70 L 55 75" stroke="#424242" strokeWidth="1" strokeLinecap="round" />
                 <path d="M 45 55 L 40 60" stroke="#424242" strokeWidth="1" strokeLinecap="round" />
            </g>
        </svg>
    )
}
