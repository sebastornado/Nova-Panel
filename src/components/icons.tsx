import type { SVGProps } from "react";

export function NovaPanelLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1.5em"
      height="1.5em"
      {...props}
    >
      <path fill="hsl(var(--primary))" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z" />
      <path fill="hsl(var(--primary))" d="m164.38 77.62l-64 32a8 8 0 0 0 0 12.76l64 32A8 8 0 0 0 176 148V84a8 8 0 0 0-11.62-6.38ZM160 135.24l-42.33-21.17L160 92.76Z" />
    </svg>
  );
}
