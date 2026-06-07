import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Insights | Raynard Land Advisory",
  description:
    "Market perspective and land development intelligence from Tyler Raynard — feasibility, cost estimating, and Southern California land market analysis.",
}

const ARTICLES = [
  {
    category: "Feasibility",
    date: "June 2026",
    readTime: "5 min read",
    title: "Why Feasibility Analysis Saves Developers Millions Before Escrow Closes",
    excerpt:
      "Most development losses are preventable. A structured feasibility process surfaces the risks that gut-feel underwriting misses — before you're committed.",
    href: "/insights/why-feasibility-analysis-saves-developers-millions",
  },
  {
    category: "Cost Estimating",
    date: "August 2024",
    readTime: "8 min read",
    title: "The Hidden Costs of Horizontal Development in Southern California",
    excerpt:
      "Off-site improvements, utility relocations, and phased grading requirements routinely add 20–40% to budgets that didn't account for them. Here's what to look for.",
    href: "/insights/hidden-costs-horizontal-development-southern-california",
  },
  {
    category: "Advisory",
    date: "July 2024",
    readTime: "7 min read",
    title: "How to Evaluate Raw Land for Investment Potential in South OC",
    excerpt:
      "Yield, entitlement risk, and absorption aren't the whole story. The parcels that underperform almost always share three structural characteristics.",
    href: "/insights/how-to-evaluate-raw-land-investment-potential",
  },
]

export default function InsightsPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase text-rla-sienna font-medium mb-4">
            RLA Intelligence
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light
            text-rla-cream leading-tight mb-6">
            Market Perspective
          </h1>
          <p className="text-rla-stone text-lg leading-relaxed font-light max-w-2xl">
            Land development intelligence, feasibility insights, and Southern
            California market analysis from Tyler Raynard.
          </p>
        </div>

        <div className="w-12 h-px bg-rla-sienna mb-16" />

        {/* Article List */}
        <div className="space-y-0">
          {ARTICLES.map((article, index) => (
            <div
              key={article.href}
              className="border-t border-rla-border py-10 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

                {/* Meta */}
                <div className="md:col-span-1">
                  <p className="text-xs tracking-widest uppercase text-rla-sienna font-medium mb-2">
                    {article.category}
                  </p>
                  <p className="text-xs tracking-widest uppercase text-rla-stone">
                    {article.date}
                  </p>
                  <p className="text-xs tracking-widest uppercase text-rla-stone mt-1">
                    {article.readTime}
                  </p>
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  <h2 className="font-display text-2xl md:text-3xl font-light
                    text-rla-cream leading-tight mb-4
                    group-hover:text-rla-sienna transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-rla-stone font-light leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 text-rla-sienna
                      text-xs tracking-widest uppercase hover:gap-4 transition-all"
                  >
                    Read Article →
                  </Link>
                </div>

              </div>
            </div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-rla-border" />
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-rla-border">
          <p className="text-rla-stone text-sm mb-6">
            Have a project you want a second set of eyes on?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 bg-rla-sienna text-rla-cream
              text-xs tracking-widest uppercase px-8 py-4
              hover:bg-rla-sienna/80 transition-colors"
          >
            Start a Conversation →
          </Link>
        </div>

      </div>
    </main>
  )
}