import { pad } from "@/lib/utils";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

interface ProcessStep {
  title:       string;
  description: string;
  outputs:     string[];
}

const STEPS: ProcessStep[] = [
  {
    title:    "Initial Consultation",
    description:
      "Every engagement begins with a direct conversation about the project, the timeline, and the decision being made. No intake forms. No junior staff. You talk to Tyler.",
    outputs: [
      "Project scope clarity",
      "Engagement structure defined",
      "Timeline established",
    ],
  },
  {
    title:    "Site & Market Analysis",
    description:
      "We conduct a comprehensive review of the site — constraints, entitlement history, comparable transactions, and market absorption — before any numbers are put on paper.",
    outputs: [
      "Constraint mapping",
      "Comp analysis",
      "Market absorption data",
    ],
  },
  {
    title:    "Cost & Feasibility Report",
    description:
      "A detailed, line-item horizontal cost estimate and pro forma built from real project data. No templates. The numbers reflect what it actually costs to build in Southern California.",
    outputs: [
      "Line-item cost estimate",
      "Pro forma projections",
      "Risk-adjusted scenarios",
    ],
  },
  {
    title:    "Ongoing Strategic Advisory",
    description:
      "For clients who want continued guidance through entitlement, financing, or builder disposition — RLA stays engaged as a strategic partner through to project completion.",
    outputs: [
      "Entitlement support",
      "Capital advisory",
      "Builder / broker positioning",
    ],
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="section-base bg-rla-black"
      aria-labelledby="process-heading"
    >
      <div className="container-rla">

        <div className="mb-14 md:mb-16">
          <p className="eyebrow-label mb-6">How We Work</p>
          <h2
            id="process-heading"
            className="font-display font-light text-heading-xl text-rla-cream max-w-[28ch]"
          >
            A Clear Process. No Guesswork.
          </h2>
        </div>

        <ol
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-rla-border rounded-sm overflow-hidden"
          aria-label="Our process steps"
        >
          {STEPS.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} />
          ))}
        </ol>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-rla-border">
          <p className="text-body-lg font-display font-light text-rla-parchment max-w-[42ch]">
            Every project starts with a single conversation.
            There&rsquo;s no cost and no obligation to the first call.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 shrink-0
                       h-12 px-8
                       font-body font-medium text-ui-md uppercase tracking-widest
                       text-rla-cream border border-rla-border rounded-sm
                       transition-all duration-350 ease-out-expo
                       hover:border-rla-sage-muted hover:text-rla-sage-pale"
          >
            Start the Conversation
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

// ── StepCard ──────────────────────────────────────────────────────────────
function StepCard({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <li className="bg-rla-charcoal p-8 flex flex-col gap-5">
      <span
        className="font-display font-light text-display-lg leading-none text-rla-border"
        aria-hidden="true"
      >
        {pad(index + 1)}
      </span>

      <span className="block w-8 h-px bg-rla-sage-muted" aria-hidden="true" />

      <h3 className="font-body font-medium text-heading-sm text-rla-cream">
        {step.title}
      </h3>

      <p className="text-body-sm text-rla-stone font-body font-light leading-relaxed flex-1">
        {step.description}
      </p>

      <div className="border-t border-rla-border pt-5 mt-auto">
        <p className="text-eyebrow uppercase tracking-widest text-rla-smoke font-body mb-3">
          Outputs
        </p>
        <ul className="space-y-1.5" aria-label={`${step.title} outputs`}>
          {step.outputs.map((output) => (
            <li
              key={output}
              className="flex items-start gap-2 text-ui-xs text-rla-stone font-body"
            >
              <span className="text-rla-sage-muted shrink-0 mt-px" aria-hidden="true">—</span>
              {output}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
