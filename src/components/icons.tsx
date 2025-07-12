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
            {/* Face Outline */}
            <path d="M12 2a10 10 0 0 0-7.75 16.25A10 10 0 0 0 19.75 5.75 9.9 9.9 0 0 0 12 2Z" />

            {/* Dividing Line */}
            <path d="M12 2v20" />

            {/* Human Side (Left) */}
            <path d="M8 10a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1Z" />
            <path d="M7 15s1.5-1 4-1" />

            {/* Robot Side (Right) */}
            <rect x="15" y="9" width="2" height="4" rx="1" />
            <path d="M16 13v-1" />
            <path d="M16 15h.01" />
            <path d="M14 17h4" />
        </g>
    </svg>
  );
}
