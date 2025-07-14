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
                .cow-body-fill { fill: #fff; }
                .cow-body-stroke { stroke: #4a4a4a; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
                .cow-spots { fill: #4a4a4a; }
                .cow-cheeks { fill: #f9a888; }
                .cow-flower { fill: #f26d5b; }
                .cow-flower-center { fill: #f7a329; }
                .cow-leaves { fill: #5a8d67; }

                .dark .cow-body-fill { fill: #d1d5db; }
                .dark .cow-body-stroke { stroke: #f9fafb; }
                .dark .cow-spots { fill: #374151; }
                .dark .cow-cheeks { fill: #e59878; }
                .dark .cow-flower { fill: #e25d4b; }
                .dark .cow-flower-center { fill: #e79319; }
                .dark .cow-leaves { fill: #4a7d57; }
              `}
            </style>
            <g transform="translate(5, 5) rotate(-5)">
                {/* Main Body */}
                <path d="M 30,80 C 10,70 15,40 35,30 S 65,20 75,35 C 95,55 90,80 70,90 Z" className="cow-body-fill cow-body-stroke" />

                {/* Head */}
                <path d="M 60,35 C 55,15 80,15 75,35" className="cow-body-fill cow-body-stroke" />
                
                {/* Snout and Face */}
                <path d="M 62,32 C 60,38 75,38 73,32" fill="#fde8e1" className="cow-body-stroke" />
                <path d="M 64 28 C 65 29, 66 29, 67 28" className="cow-body-stroke" fill="none" />
                <path d="M 70 28 C 71 29, 72 29, 73 28" className="cow-body-stroke" fill="none" />
                
                {/* Cheeks */}
                <circle cx="58" cy="30" r="3" className="cow-cheeks" />
                <circle cx="77" cy="30" r="3" className="cow-cheeks" />

                {/* Horns */}
                <path d="M 58,18 C 55,10 65,10 62,18" className="cow-body-fill cow-body-stroke" />
                <path d="M 77,18 C 80,10 70,10 73,18" className="cow-body-fill cow-body-stroke" />

                {/* Flower Decoration */}
                <g transform="translate(67.5, 14) rotate(15)">
                    <circle cx="0" cy="0" r="3" className="cow-flower-center" />
                    <path d="M 0,-6 C 3,-3 3,3 0,6 C -3,3 -3,-3 0,-6" className="cow-flower" transform="rotate(0)" />
                    <path d="M 0,-6 C 3,-3 3,3 0,6 C -3,3 -3,-3 0,-6" className="cow-flower" transform="rotate(72)" />
                    <path d="M 0,-6 C 3,-3 3,3 0,6 C -3,3 -3,-3 0,-6" className="cow-flower" transform="rotate(144)" />
                    <path d="M 0,-6 C 3,-3 3,3 0,6 C -3,3 -3,-3 0,-6" className="cow-flower" transform="rotate(216)" />
                    <path d="M 0,-6 C 3,-3 3,3 0,6 C -3,3 -3,-3 0,-6" className="cow-flower" transform="rotate(288)" />
                </g>
                <path d="M 60,15 C 55,12 50,20 55,22" className="cow-leaves" />
                
                {/* Spots */}
                <path d="M 35,50 a 10,10 0 1,1 -1, -1 z" className="cow-spots" />
                <path d="M 65,70 a 12,8 0 1,0 1,1 z" className="cow-spots" />
                <path d="M 70,45 a 5,7 0 1,1 -1,-1 z" className="cow-spots" />

                {/* Arms */}
                <path d="M 40,40 C 20,35 15,55 25,60" className="cow-body-fill cow-body-stroke" />
                <path d="M 80,55 C 95,50 98,70 85,75" className="cow-body-fill cow-body-stroke" />

                {/* Legs */}
                <path d="M 45,85 C 40,95 50,98 55,90" className="cow-body-fill cow-body-stroke" />
                 <path d="M 65,88 C 70,98 80,95 75,85" className="cow-body-fill cow-body-stroke" />
            </g>
        </svg>
    )
}
