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
      <g fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.5a9.5 9.5 0 1 0-9.5-9.5" />
        <path d="M15.5 15.5L12 12l-1.5 1.5" />
        <path d="M12 12l1.5 1.5" />
        <path d="M12 21.5V17l-3.5-3.5" />
        <path d="M8.5 13.5L7 12" />
        <path d="M12 8.5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0" />
      </g>
    </svg>
  );
}
