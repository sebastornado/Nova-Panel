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
        {/* Robot Head */}
        <rect x="5" y="8" width="14" height="10" rx="2" />
        
        {/* Eyes as Gears */}
        <circle cx="9.5" cy="13" r="1.5" />
        <path d="M9.5 11.5v-1m0 6v-1m-1.5-2h-1m6 0h-1m-2.9-2.9l-.7-.7m4.3 4.3l-.7-.7m-2.9 0l-.7.7m4.3-4.3l-.7.7" />
        
        <circle cx="14.5" cy="13" r="1.5" />
        <path d="M14.5 11.5v-1m0 6v-1m-1.5-2h-1m6 0h-1m-2.9-2.9l-.7-.7m4.3 4.3l-.7-.7m-2.9 0l-.7.7m4.3-4.3l-.7.7" />

        {/* Antenna */}
        <path d="M12 8v-2" />
        <path d="M12 4h.01" />

      </g>
    </svg>
  );
}
