import type { SVGProps } from "react";

export function NovaPanelLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      {...props}
    >
        <g 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            {/* Spaceship Body */}
            <path d="M12 2L8 10h8L12 2z" />
            <path d="M8 10v6a4 4 0 008 0v-6H8z" />

            {/* Wings */}
            <path d="M6 14s-2 1-2 4h2" />
            <path d="M18 14s2 1 2 4h-2" />

            {/* Flame */}
            <path d="M10 20s-1 2 2 2 2-2 2-2" />

            {/* Window */}
            <circle cx="12" cy="12" r="1" fill="hsl(var(--primary))" />
        </g>
    </svg>
  );
}