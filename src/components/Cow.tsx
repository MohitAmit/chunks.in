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
                .cow-stroke { stroke: #4a4a4a; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; fill: none; }
                .dark .cow-stroke { stroke: #e5e7eb; }
              `}
            </style>
            <g transform="translate(5, 5) scale(0.9)">
                {/* Body */}
                <path className="cow-stroke" d="M43.1,88.9c-8.9-2.6-15-10.4-15-19.8c0-11.4,9.2-20.6,20.6-20.6c3.2,0,6.2,0.7,8.9,2c4.1,2,7.4,5.2,9.3,9.2"/>
                {/* Head */}
                <path className="cow-stroke" d="M66.8,50c-0.2-12.7-10.6-22.8-23.4-22.6c-12.8,0.2-23,10.6-22.8,23.4c0.1,7.2,3.5,13.7,8.8,17.9"/>
                {/* Horns */}
                <path className="cow-stroke" d="M29.5,33.5c-4.6-5.8-3.3-14.3,2.5-18.9c5.8-4.6,14.3-3.3,18.9,2.5"/>
                <path className="cow-stroke" d="M57.9,21.9c4.9-5.4,13.4-6.3,19.4-2.1c6,4.2,7.2,12.5,2.3,17.9"/>
                {/* Eyes and nose */}
                <path className="cow-stroke" d="M41.7,46.2c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S41.7,45.1,41.7,46.2z"/>
                <path className="cow-stroke" d="M54.7,46.2c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S54.7,45.1,54.7,46.2z"/>
                <path className="cow-stroke" d="M43.3,57.1c1.3,1.3,3.5,1.3,4.8,0"/>
                {/* Ears */}
                <path className="cow-stroke" d="M22.5,47.1c-4.9-2.5-7.3-8.3-4.8-13.2c2.5-4.9,8.3-7.3,13.2-4.8"/>
                <path className="cow-stroke" d="M66.6,56.7c5.1,1.5,10.4-1.1,11.9-6.2c1.5-5.1-1.1-10.4-6.2-11.9"/>
                {/* Legs */}
                <path className="cow-stroke" d="M30.7,69.5c-3.7,5.5-1.9,12.9,3.6,16.6s12.9,1.9,16.6-3.6"/>
                <path className="cow-stroke" d="M68.5,70.9c-0.4,6.7-6,12.1-12.7,12.5c-6.7,0.4-12.5-4.6-12.9-11.3"/>
            </g>
        </svg>
    )
}
