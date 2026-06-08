import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE_NAME, SITE_EMAIL, SITE_REGION, LINKEDIN_URL } from "@/lib/constants";

const CREDENTIALS = [
  "Licensed Real Estate Broker",
  "CA DRE — South Orange County",
  "14+ Years Industry Experience",
  "Land Development · Lending · Transactions",
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>

<div className="py-5 px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center border-t border-b" style={{borderColor:"rgba(122,158,142,0.2)", background:"rgba(122,158,142,0.06)"}}><span className="text-xs tracking-widest uppercase" style={{color:"#6B6358"}}>Part of the Raynard brand ecosystem</span><span style={{color:"#3A3830"}} className="hidden sm:block">·</span><a href="https://raynardrealestate.com" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase transition-colors" style={{color:"#7A9E8E"}}>Raynard Real Estate — Residential Brokerage and Property Management</a></div>
<footer className="bg-rla-black border-t border-rla-border" aria-label="Site footer">
      {/* Main content */}
      <div className="container-rla py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 mb-4 w-fit group"
              aria-label={`${SITE_NAME} — Home`}
            >
              <div className="relative w-8 h-8 shrink-0 overflow-hidden rounded-sm opacity-80 group-hover:opacity-100 transition-opacity">
                <Image
                  src="/logo.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="font-display font-light text-rla-cream text-base tracking-wide leading-none">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-body-sm text-rla-stone max-w-[28ch] leading-relaxed mt-4">
              Premium land development advisory for developers and investors across Southern California.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="block text-ui-sm text-rla-stone hover:text-rla-sage-pale transition-colors duration-200"
              >
                {SITE_EMAIL}
              </a>
              <p className="text-ui-sm text-rla-smoke">{SITE_REGION}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <p className="text-eyebrow uppercase tracking-widest text-rla-smoke mb-5 font-body font-medium">
              Navigation
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ui-sm text-rla-stone hover:text-rla-cream transition-colors duration-200 uppercase tracking-wider font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials */}
          <div className="md:col-span-1">
            <p className="text-eyebrow uppercase tracking-widest text-rla-smoke mb-5 font-body font-medium">
              Credentials
            </p>
            <ul className="space-y-3" aria-label="Professional credentials">
              {CREDENTIALS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-rla-sage-muted mt-px shrink-0" aria-hidden="true">—</span>
                  <span className="text-ui-sm text-rla-stone font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-rla-border">
        <div className="container-rla py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-caption text-rla-smoke font-body">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <nav aria-label="Legal and social links" className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-caption text-rla-smoke hover:text-rla-stone transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-caption text-rla-smoke hover:text-rla-stone transition-colors"
            >
              Terms
            </Link>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-rla-smoke hover:text-rla-stone transition-colors"
              aria-label="Raynard Land Advisory on LinkedIn (opens in new tab)"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
    </>
  );
}
