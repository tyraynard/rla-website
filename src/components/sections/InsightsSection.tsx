import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

interface Insight {
  slug:        string;
  category:    string;
  title:       string;
  summary:     string;
  date:        string;
  readTime:    number;
  accentColor: string;
}

const INSIGHTS: Insight[] = [
  {
    slug:        "why-feasibility-analysis-saves-developers-millions",
    category:    "Feasibility",
    title:       "Why Feasibility Analysis Saves Developers Millions Before Escrow Closes",
    summary:
      "Most development losses are preventable. A structured feasibility process surfaces the risks that gut-feel underwriting misses — before you're committed.",
    date:        "2024-09-01",
    readTime:    6,
    accentColor: "from-rla-sage-deep to-rla-obsidian",
  },
  {
    slug:        "hidden-costs-horizontal-development-southern-california",
    category:    "Cost Estimating",
    title:       "The Hidden Costs of Horizontal Development in Southern California",
    summary:
      "Off-site improvements, utility relocations, and phased grading requirements routinely add 20–40% to budgets that didn't account for them. Here's what to look for.",
    date:        "2024-08-01",
    readTime:    8,
    accentColor: "from-rla-iron to-rla-black",
  },
  {
    slug:        "how-to-evaluate-raw-land-investment-potential",
    category:    "Advisory",
    title:       "How to Evaluate Raw Land for Investment Potential in South OC",
    summary:
      "Yield, entitlement risk, and absorption aren't the whole story. The parcels that underperform almost always share three structural characteristics.",
    date:        "2024-07-01",
    readTime:    7,
    accentColor: "from-rla-charcoal to-rla-black",
  },
];

export function InsightsSection() {
  return (
    <section
      id="insights"
      className="section-base bg-rla-obsidian border-y border-rla-border"
      aria-labelledby="insights-heading"
    >
      <div className="container-rla">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div>
            <p className="eyebrow-label mb-6">Insights</p>
            <h2
              id="insights-heading"
              className="font-display font-light text-heading-xl text-rla-cream max-w-[24ch]"
            >
              Market Perspective
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 shrink-0
                       text-ui-sm font-body font-medium uppercase tracking-widest
                       text-rla-stone hover:text-rla-cream transition-colors duration-250"
          >
            All Articles
            <ArrowIcon />
          </Link>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          aria-label="Recent articles"
        >
          {INSIGHTS.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>

      </div>
    </section>
  );
}

// ── InsightCard ───────────────────────────────────────────────────────────

function InsightCard({ insight }: { insight: Insight }) {
  const formattedDate = new Date(insight.date).toLocaleDateString("en-US", {
    month: "long",
    year:  "numeric",
  });

  return (
    <article className="group flex flex-col card-base overflow-hidden">

      {/* Placeholder image area — replace with <Image> when cover photos are ready */}
      <div
        className={`relative h-44 bg-gradient-to-br ${insight.accentColor} overflow-hidden shrink-0`}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#6E8C6C 1px, transparent 1px), " +
              "linear-gradient(90deg, #6E8C6C 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2.5 py-1 bg-rla-black/60 backdrop-blur-sm rounded-sm border border-rla-border text-eyebrow uppercase tracking-widest text-rla-sage font-body font-medium">
            {insight.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 mb-4">
          <time dateTime={insight.date} className="text-caption text-rla-smoke font-body uppercase tracking-wider">
            {formattedDate}
          </time>
          <span className="text-rla-border" aria-hidden="true">·</span>
          <span className="text-caption text-rla-smoke font-body">
            {insight.readTime} min read
          </span>
        </div>

        <h3 className="font-display font-light text-heading-sm text-rla-cream mb-3 flex-1 leading-snug transition-colors duration-250 group-hover:text-rla-white">
          {insight.title}
        </h3>

        <p className="text-body-xs text-rla-stone font-body font-light leading-relaxed mb-6 line-clamp-3">
          {insight.summary}
        </p>

        <Link
          href={`/insights/${insight.slug}`}
          className="inline-flex items-center gap-2 mt-auto
                     text-ui-xs font-body font-medium uppercase tracking-widest
                     text-rla-smoke transition-colors duration-250 group-hover:text-rla-sage-pale"
          aria-label={`Read article: ${insight.title}`}
        >
          Read Article
          <ArrowIcon className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
