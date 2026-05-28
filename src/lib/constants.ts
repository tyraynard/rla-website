/**
 * Site-wide constants.
 * Import from here — never hardcode strings in components.
 */

export const SITE_NAME  = "Raynard Land Advisory";
export const SITE_SHORT = "RLA";
export const SITE_URL   = "https://raynardla.com";
export const SITE_EMAIL = "hello@raynardla.com";
export const SITE_REGION = "South Orange County, California";

export const LINKEDIN_URL = "https://linkedin.com/company/raynard-land-advisory";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process",  href: "#process"  },
  { label: "About",    href: "#about"    },
  { label: "Insights", href: "#insights" },
] as const;

export const SERVICE_SLUGS = {
  feasibility:     "/services/feasibility",
  costEstimating:  "/services/cost-estimating",
  advisory:        "/services/advisory",
} as const;
