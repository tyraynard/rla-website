import { cn } from "@/lib/utils";

interface ClientType {
  eyebrow:     string;
  title:       string;
  description: string;
  points:      string[];
}

const CLIENTS: ClientType[] = [
  {
    eyebrow:     "For Developers",
    title:       "Know Your Numbers Before You're Committed",
    description: "Development losses are almost always preventable. RLA delivers the feasibility analysis and horizontal cost precision that turns raw land into a fundable, executable project — before you're locked in.",
    points: [
      "Site-level feasibility before escrow",
      "Line-item horizontal cost estimates",
      "Go / no-go clarity on every deal",
    ],
  },
  {
    eyebrow:     "For Investors",
    title:       "Independent Validation Before You Wire Funds",
    description: "RLA operates as a true third party — no development interest, no conflict. You get objective land development analysis you can put in front of your partners, your board, or your lender with confidence.",
    points: [
      "No conflict of interest — ever",
      "Third-party budget validation",
      "Risk-adjusted pro forma review",
    ],
  },
  {
    eyebrow:     "For Builders",
    title:       "Budget Clarity From Someone Who's Been in the Field",
    description: "Tyler has managed horizontal development projects from the ground up — not just modeled them in a spreadsheet. That experience translates directly into estimates that hold up when shovels hit the ground.",
    points: [
      "Grading, utilities, infrastructure takeoffs",
      "Off-site improvement estimates",
      "Contingency built on real project data",
    ],
  },
  {
    eyebrow:     "For Lenders",
    title:       "Analysis Built for Credit Files",
    description: "Underwriting land development requires independent, credible cost validation. RLA produces objective estimates and feasibility summaries structured specifically for lender review — transparent, defensible, and on time.",
    points: [
      "Independent third-party cost validation",
      "Lender-ready report format",
      "Cost-to-complete analysis",
    ],
  },
];

export function WhoWeServeSection() {
  return (
    <section
      id="who-we-serve"
      className="section-base bg-rla-charcoal border-y border-rla-border"
      aria-labelledby="serve-heading"
    >
      <div className="container-rla">
        <div className="mb-14 md:mb-16">
          <p className="eyebrow-label mb-6">Who We Serve</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              id="serve-heading"
              className="font-display font-light text-heading-xl text-rla-cream max-w-[24ch]"
            >
              Built for the People
              <br />
              <span className="text-rla-stone">Who Build California</span>
            </h2>
            <p className="text-body-md text-rla-stone font-body font-light max-w-[40ch] md:text-right leading-relaxed">
              Different clients need different things. RLA&apos;s three-sided expertise
              means we speak every language at the table.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rla-border rounded-sm overflow-hidden"
          role="list"
          aria-label="Client types we serve"
        >
          {CLIENTS.map((client, i) => (
            <ClientCard key={client.eyebrow} client={client} index={i} />
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-rla-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-body-sm text-rla-stone font-body font-light max-w-[52ch]">
            Not sure which service fits your situation?
            The first conversation is always direct, always free.
          </p>
          
            href="#contact"
            className="inline-flex items-center gap-2 shrink-0 h-10 px-6
                       font-body font-medium text-ui-sm uppercase tracking-widest
                       text-rla-sage border border-rla-sage-muted rounded-sm
                       transition-all duration-350 ease-out-expo
                       hover:border-rla-sage hover:text-rla-sage-pale"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  );
}

function ClientCard({ client, index }: { client: ClientType; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article
      role="listitem"
      className={cn(
        "group flex flex-col gap-5 p-8 md:p-10 transition-colors duration-350",
        isEven ? "bg-rla-obsidian hover:bg-rla-charcoal" : "bg-rla-iron hover:bg-rla-charcoal"
      )}
    >
      <p className="text-eyebrow uppercase tracking-widest text-rla-sienna font-body font-medium">
        {client.eyebrow}
      </p>

      <h3 className="font-display font-light text-heading-md text-rla-cream leading-snug transition-colors duration-250 group-hover:text-rla-white">
        {client.title}
      </h3>

      <p className="text-body-sm text-rla-stone font-body font-light leading-relaxed flex-1">
        {client.description}
      </p>

      <ul
        className="space-y-2 border-t border-rla-border pt-5"
        aria-label={`Key services for ${client.eyebrow}`}
      >
        {client.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-body-xs text-rla-stone font-body">
            <span className="text-rla-sienna-muted shrink-0 mt-px" aria-hidden="true">—</span>
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}