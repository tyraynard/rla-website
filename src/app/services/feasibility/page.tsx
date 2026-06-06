import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Development Feasibility Analysis | Raynard Land Advisory",
  description: "Comprehensive site-level feasibility analysis for developers and investors across Southern California.",
}

export default function FeasibilityPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">

        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-rla-sienna text-sm
            tracking-widest uppercase mb-12 hover:text-rla-cream transition-colors"
        >
          Back to Services
        </Link>

        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase text-rla-sienna font-medium mb-4">
            Service 01
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light
            text-rla-cream leading-tight mb-6">
            Development Feasibility Analysis
          </h1>
          <p className="text-rla-stone text-lg leading-relaxed font-light max-w-2xl">
            Know before you commit. Comprehensive site-level analysis that surfaces
            risk, validates opportunity, and gives decision-makers a clear picture
            before a single dollar is deployed.
          </p>
        </div>

        <div className="w-12 h-px bg-rla-sienna mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-display text-2xl font-light text-rla-cream mb-6">
              What is Included
            </h2>
            <ul className="space-y-4">
              {[
                "Site constraint mapping",
                "Entitlement risk assessment",
                "Market absorption analysis",
                "Pro forma revenue projections",
                "Horizontal cost validation",
                "Fee schedule analysis by jurisdiction",
                "Go / no-go recommendation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-rla-sienna mt-2.5 shrink-0" />
                  <span className="text-rla-stone font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-light text-rla-cream mb-6">
              Who It Is For
            </h2>
            <ul className="space-y-4">
              {[
                "Developers evaluating a new acquisition",
                "Investors underwriting raw land",
                "Lenders requiring third-party validation",
                "Owners considering a disposition",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-rla-sienna mt-2.5 shrink-0" />
                  <span className="text-rla-stone font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-rla-border pt-12">
          <p className="text-rla-stone text-sm mb-6">
            Ready to run a feasibility analysis on your next project?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 bg-rla-sienna text-rla-cream
              text-xs tracking-widest uppercase px-8 py-4
              hover:bg-rla-sienna/80 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>

      </div>
    </main>
  )
}