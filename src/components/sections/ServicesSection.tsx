import Link from "next/link";
import { cn, pad } from "@/lib/utils";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { SERVICE_SLUGS } from "@/lib/constants";

interface Service {
  title:        string;
  tagline:      string;
  description:  string;
  deliverables: string[];
  href:         string;
}

const SERVICES: Service[] = [
  {
    title:    "Feasibility Analysis",
    tagline:  "Clarity before capital is committed.",
    href:     SERVICE_SLUGS.feasibility,
    description:
      "Comprehensive site-level analysis that surfaces risk, validates opportunity, " +
      "and gives decision-makers a clear picture before a single dollar is deployed.",
    deliverables: [
      "Site constraint mapping",
      "Entitlement risk assessment",
      "Market absorption analysis",
      "Pro forma revenue projections",
      "Go / no-go recommendation",
    ],
  },
  {
    title:    "Horizontal Cost Estimating",
    tagline:  "Precision from the ground up.",
    href:     SERVICE_SLUGS.costEstimating,
    description:
      "Detailed horizontal development cost estimates backed by real projects across Southern California — grading, utilities, " +
      "infrastructure, and off-site improvements — built on real project data " +
      "from projects delivered across Southern California.",
    deliverables: [
      "Grading and earthwork takeoffs",
      "Wet and dry utility budgets",
      "Street and infrastructure costs",
      "Off-site improvement estimates",
      "Contingency and escalation modeling",
    ],
  },
  {
    title:    "Strategic Land Advisory",
    tagline:  "Guidance from acquisition to disposition.",
    href:     SERVICE_SLUGS.advisory,
    description:
      "Strategic guidance for developers and investors navigating complex land, with complete objectivity at every stage. " +
      "transactions, entitlements, and project positioning — from raw land " +
      "identification through disposition.",
    deliverables: [
      "Acquisition due diligence",
      "Entitlement strategy",
      "Capital stack advisory",
      "Builder and broker positioning",
      "Ongoing project oversight",
    ],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-base bg-rla-obsidian"
      aria-labelledby="services-heading"
    >
      <div className="container-rla">

        <div className="mb-14 md:mb-16">
          <p className="eyebrow-label mb-6">What We Do</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              id="services-heading"
              className="font-display font-light text-heading-xl text-rla-cream max-w-[20ch]"
            >
              Advisory Built on Real Experience
            </h2>
            <p className="text-body-md text-rla-stone font-body font-light max-w-[42ch] md:text-right leading-relaxed">
              Three disciplines. No conflict of interest.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rla-border rounded-sm overflow-hidden"
          role="list"
          aria-label="Services offered"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

// ── ServiceCard ───────────────────────────────────────────────────────────
function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article
      role="listitem"
      className={cn(
        "group relative flex flex-col",
        "bg-rla-charcoal p-8 md:p-10",
        "transition-all duration-450 ease-out-expo hover:bg-rla-iron",
        // Top sage reveal on hover
        "before:absolute before:inset-x-0 before:top-0 before:h-px",
        "before:bg-rla-sage before:scale-x-0 before:origin-left",
        "before:transition-transform before:duration-450 before:ease-out-expo",
        "hover:before:scale-x-100"
      )}
    >
      <span
        className="block font-display font-light text-display-lg leading-none text-rla-border mb-6
                   transition-colors duration-350 group-hover:text-rla-sage-muted"
        aria-hidden="true"
      >
        {pad(index + 1)}
      </span>

      <h3 className="font-display font-light text-heading-lg text-rla-cream mb-2 transition-colors duration-250 group-hover:text-rla-white">
        {service.title}
      </h3>

      <p className="text-ui-xs font-body font-medium uppercase tracking-widest text-rla-sage mb-5">
        {service.tagline}
      </p>

      <p className="text-body-sm text-rla-stone font-body font-light leading-relaxed mb-8 flex-1">
        {service.description}
      </p>

      <div className="border-t border-rla-border pt-6 mb-8">
        <p className="text-eyebrow uppercase tracking-widest text-rla-smoke font-body mb-4">
          Deliverables
        </p>
        <ul className="space-y-2" aria-label={`${service.title} deliverables`}>
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-body-xs text-rla-stone font-body">
              <span className="text-rla-sage-muted mt-px shrink-0" aria-hidden="true">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ── CTA — now a real Link using the href ── */}
      <Link
        href={service.href}
        className="flex items-center gap-2 w-fit
                   text-ui-sm font-body font-medium uppercase tracking-widest
                   text-rla-smoke transition-colors duration-250
                   group-hover:text-rla-sage-pale"
        aria-label={`Learn more about ${service.title}`}
      >
        <span>Learn More</span>
        <ArrowIcon className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
