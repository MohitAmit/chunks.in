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

                .dark .cow-body { fill: #d1d5db; stroke: #f9fafb; }
                .dark .cow-spots { fill: #374151; }
                .dark .cow-hooves { fill: #1f2937; }
                .dark .cow-snout { fill: #e5a7b6; }
              `}
            </style>
            <g transform="translate(0, 10)">
                 {/* Body */}
                <ellipse className="cow-body" cx="50" cy="60" rx="35" ry="25"/>
                
                {/* Head */}
                <circle className="cow-body" cx="78" cy="45" r="20"/>
                <ellipse className="cow-snout" cx="88" cy="55" rx="8" ry="6"/>
                <circle className="cow-eyes" cx="75" cy="42" r="2"/>
                <path d="M70,30 a15,15 0 0,1 10,-5" className="cow-body" />
                <path d="M86,30 a15,15 0 0,0 -10,-5" className="cow-body" />

                 {/* Spots */}
                <circle className="cow-spots" cx="40" cy="60" r="10"/>
                <ellipse className="cow-spots" cx="60" cy="70" rx="12" ry="8"/>
                <circle className="cow-spots" cx="70" cy="35" r="5" />
            </g>
        </svg>
    )
}
