import { cn } from "@/lib/utils";

export function Cow({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={cn("absolute opacity-20", className)}
            {...props}
        >
            <style>
              {`
                .cow-fill { fill: #d1d5db; }
                .cow-stroke { stroke: #4a4a4a; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
                .cow-spots { fill: #4a4a4a; }

                .dark .cow-fill { fill: #4b5563; }
                .dark .cow-stroke { stroke: #e5e7eb; }
                .dark .cow-spots { fill: #1f2937; }
              `}
            </style>
            <g transform="translate(10, 10) rotate(-10)">
                {/* Body */}
                <path d="M 20,70 C 5,60 10,30 30,25 S 60,15 70,30 C 85,50 80,75 60,80 Z" className="cow-fill cow-stroke" />

                {/* Head */}
                <path d="M 55,30 C 50,10 75,10 70,30" className="cow-fill cow-stroke" />

                {/* Horns */}
                <path d="M 53,15 C 50,5 60,5 57,15" className="cow-fill cow-stroke" />
                <path d="M 72,15 C 75,5 65,5 68,15" className="cow-fill cow-stroke" />
                
                {/* Spots */}
                <circle cx="30" cy="50" r="8" className="cow-spots" />
                <path d="M 60,65 a 10,7 0 1,0 1,1 z" className="cow-spots" />
                <circle cx="65" cy="25" r="4" className="cow-spots" />

                {/* Legs */}
                <path d="M 40,75 C 35,85 45,88 50,80" className="cow-fill cow-stroke" />
                 <path d="M 55,78 C 60,88 70,85 65,75" className="cow-fill cow-stroke" />
            </g>
        </svg>
    )
}
