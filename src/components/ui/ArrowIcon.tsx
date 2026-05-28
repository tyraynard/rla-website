interface ArrowIconProps {
  className?: string;
  size?: number;
}

/**
 * ArrowIcon — Consistent right-pointing arrow used across all CTAs.
 * Replaces 6 duplicate inline SVG blocks.
 */
export function ArrowIcon({ className = "w-4 h-4", size }: ArrowIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
}
