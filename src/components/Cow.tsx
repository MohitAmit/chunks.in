import { cn } from "@/lib/utils";

export function Cow({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={cn("absolute", className)}
            {...props}
        >
            <style>
              {`
                .cow-body { fill: #fff; stroke: #4a4a4a; stroke-width: 2; }
                .cow-spots { fill: #4a4a4a; }
                .cow-hooves { fill: #363636; }
                .cow-snout { fill: #f5c7d6; }
                .cow-eyes { fill: #000; }
                .cow-smile { fill: none; stroke: #000; stroke-width: 1; }

                .dark .cow-body { fill: #d1d5db; stroke: #f9fafb; }
                .dark .cow-spots { fill: #374151; }
                .dark .cow-hooves { fill: #1f2937; }
                .dark .cow-snout { fill: #e5a7b6; }
                .dark .cow-smile { stroke: #f9fafb; }
              `}
            </style>
            <g transform="translate(0, 10)">
                 {/* Body */}
                <path d="M10 60 Q 50 20, 90 60 Q 70 110, 30 110 Z" className="cow-body" />
                
                {/* Legs */}
                <rect x="30" y="80" width="10" height="20" className="cow-body" />
                <rect x="60" y="80" width="10" height="20" className="cow-body" />
                
                {/* Head */}
                <circle className="cow-body" cx="80" cy="40" r="22"/>
                <ellipse className="cow-snout" cx="90" cy="48" rx="10" ry="8"/>
                <circle className="cow-eyes" cx="75" cy="35" r="2.5"/>
                <circle className="cow-eyes" cx="88" cy="35" r="2.5"/>
                
                {/* Smile */}
                <path className="cow-smile" d="M85 50 Q 90 55, 95 50" />
                
                {/* Horns */}
                <path d="M70,20 a15,15 0 0,1 10,-5" className="cow-body" />
                <path d="M90,20 a15,15 0 0,0 -10,-5" className="cow-body" />

                {/* Spots */}
                <circle className="cow-spots" cx="40" cy="65" r="10"/>
                <ellipse className="cow-spots" cx="65" cy="75" rx="15" ry="10"/>
                <circle className="cow-spots" cx="75" cy="25" r="5" />
            </g>
        </svg>
    )
}
