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
      <g fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.5a9.5 9.5 0 1 0-9.5-9.5A9.51 9.51 0 0 0 12 21.5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.25a.75.75 0 0 1-1.5 0v-2.5a2 2 0 0 0-4 0v2.5a.75.75 0 0 1-1.5 0v-2.5a3.5 3.5 0 0 1 7 0Z"
        />
        <path
          d="M12 13.25a2.5 2.5 0 0 0-2.34 1.55l-1.06.35a3.5 3.5 0 0 0 4.21 4.21l.35-1.06A2.5 2.5 0 0 0 12 13.25Z"
        />
      </g>
    </svg>
  );
}