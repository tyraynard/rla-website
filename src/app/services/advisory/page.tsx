import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Developer & Investor Advisory | Raynard Land Advisory",
  description:
    "Strategic guidance for developers and investors navigating complex land transactions, entitlements, and project positioning across Southern California.",
}

export default function AdvisoryPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">

        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-rla-sienna text-sm
            tracking-widest uppercase mb-12 hover:text-rla-cream transition-colors"
        >
          ← Back to Services
        </Link>

        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase text-rla-sienna font-medium mb-4">
            Service 03
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light
            text-rla-cream leading-tight mb-6">
            Developer & Investor Advisory
          </h1>
          <p className="text-rla-stone text-lg leading-relaxed font-light max-w-2xl">
            Strategy backed by experience. Strategic guidance for developers and
            investors navigating complex land transactions, entitlements, and project
            positioning — from raw land identification through disposition.
          </p>
        </div>

        <div className="w-12 h-px bg-rla-sienna mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-display text-2xl font-light text-rla-cream mb-6">
              Advisory Services
            </h2>
            <ul className="space-y-4">
              {[
                "Acquisition due diligence",
                "Entitlement strategy and support",
                "Capital stack advisory",
                "Builder and broker positioning",
                "Lender package preparation",
                "Ongoing project oversight",
                "Disposition strategy",
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
              The RLA Advantage
            </h2>
            <ul className="space-y-4">
              {[
                "One advisor across lending, development, and brokerage",
                "No development interest — fully independent",
                "No ownership stake or conflict of interest",
                "Direct access to RLA's Advisory Team",
                "14+ years of Southern California market experience",
                "Proprietary project database across 6 counties",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-rla-sienna mt-2.5 shrink-0" />
                  <span className="text-rla-stone font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-rla-border p-8 mb-16">
          <p className="font-display text-xl font-light italic text-rla-cream mb-4">
            &ldquo;RLA operates as an independent advisor. No development interest.
            No ownership stake. No conflict of interest. Ever. You get objective
            analysis from someone whose only incentive is giving you the right answer.&rdquo;
          </p>
          <p className="text-rla-stone text-sm tracking-widest uppercase">
            Tyler Raynard, Founder
          </p>
        </div>

        <div className="border-t border-rla-border pt-12">
          <p className="text-rla-stone text-sm mb-6">
            Ready to talk through your project?
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
