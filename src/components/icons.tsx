import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

/** Minus icon — used in portfolio link card buttons */
export function MinusIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-3 w-3", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.9502 6.00088c0 .24853-.20148.45088-.4502.45088H2.5002c-.24853 0-.4502-.20235-.4502-.45088 0-.24853.20167-.45088.4502-.45088h7c.24872 0 .4502.20235.4502.45088z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Arrow icon — used for external links */
export function ArrowUpRightIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-3 w-3", className)}
      {...props}
    >
      <path
        d="M2.5 9.5L9.5 2.5M3.5 2.5h6v6"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
