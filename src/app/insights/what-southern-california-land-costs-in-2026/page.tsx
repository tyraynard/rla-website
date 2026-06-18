import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "What Southern California Land Development Actually Costs in 2026 | RLA",
  description:
    "Material escalation, labor tightening, and utility relocation costs have shifted horizontal budgets significantly. Here is what the numbers look like right now.",
}

export default function LandCosts2026Article() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Back */}
        <Link
          href="/#insights"
          className="inline-flex items-center gap-2 text-rla-sienna text-sm
          tracking-widest uppercase mb-12 hover:text-rla-cream transition-colors"
        >
          ← Back to Insights
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="text-xs tracking-widest uppercase text-rla-sienna font-medium">
              Cost Estimating
            </span>
            <span className="text-rla-border">·</span>
            <span className="text-xs tracking-widest uppercase text-rla-stone">
              June 2026
            </span>
            <span className="text-rla-border">·</span>
            <span className="text-xs tracking-widest uppercase text-rla-stone">
              6 min read
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light
            text-rla-cream leading-tight mb-6">
            What Southern California Land Development Actually Costs in 2026
          </h1>

          <p className="text-rla-stone text-lg leading-relaxed font-light">
            The budgets that worked two years ago don&apos;t work today.
          </p>
        </div>

        {/* Terra cotta rule */}
        <div className="w-12 h-px bg-rla-sienna mb-12" />

        {/* Body */}
        <article className="space-y-6 text-rla-stone font-body font-light
          leading-relaxed text-base md:text-lg">

          <p>
            Every quarter we update our horizontal cost database across Southern
            California. Six counties, hundreds of line items, real project data.
            And what the numbers are showing right now is a market that has
            repriced significantly from where it was in 2023 and 2024.
          </p>

          <p>
            This isn&apos;t about inflation as an abstraction. It&apos;s about
            specific line items that have moved in ways that matter for
            underwriting — and that most pro formas we review are still
            getting wrong.
          </p>

          <div className="w-full h-px bg-rla-border my-10" />

          <h2 className="font-display text-2xl md:text-3xl font-light
            text-rla-cream pt-2">
            Where the Numbers Have Moved
          </h2>

          <p>
            Grading costs have held relatively stable in most inland markets,
            but coastal and hillside sites are a different story. Haul-off
            rates, imported fill, and compaction requirements on constrained
            sites have added 15 to 25 percent to earthwork budgets compared
            to 2022 baselines.
          </p>

          <p>
            Dry utilities — electric, gas, telecom — are the line item catching
            the most developers off guard right now. Utility company lead times
            have extended in most Southern California jurisdictions, and the
            cost to extend or relocate infrastructure has increased sharply.
            A transformer upgrade that penciled at $180,000 two years ago is
            landing closer to $260,000 today on many projects we&apos;ve
            estimated.
          </p>

          <p>
            Wet utilities have also moved. Sewer capacity constraints in
            coastal Orange County and parts of Los Angeles have triggered
            off-site main upsizing requirements on projects where the existing
            infrastructure wasn&apos;t budgeted to absorb additional flow.
            That&apos;s a cost that doesn&apos;t show up until the utility
            will-serve letter comes back — which is often after the land is
            already in escrow.
          </p>

          <div className="w-full h-px bg-rla-border my-10" />

          <h2 className="font-display text-2xl md:text-3xl font-light
            text-rla-cream pt-2">
            What This Means for Underwriting
          </h2>

          <p>
            The developers who are getting hurt right now are the ones using
            stale unit costs. A cost estimate from 2023 — even a good one —
            is not a reliable basis for a 2026 acquisition. The gap between
            what those numbers say and what a contractor will actually bid
            has widened enough to move deals from marginal to underwater.
          </p>

          <p>
            The other underwriting problem we see consistently is contingency.
            Most pro formas are carrying 10 percent on horizontal costs as a
            standard assumption. On a straightforward infill site in a
            well-documented jurisdiction, that might be enough. On a coastal
            site with utility constraints, an uncertain entitlement path, or
            a tight construction window — it isn&apos;t. We recommend 15 to
            20 percent on most coastal Southern California projects right now,
            and higher on anything with significant off-site scope.
          </p>

          <p>
            Escalation factors matter too. A project that breaks ground in
            12 months will face different labor and material costs than one
            that breaks ground in 24. Building escalation into the model
            explicitly — rather than hoping costs stay flat — is the
            difference between a budget that survives the project and one
            that doesn&apos;t.
          </p>

          <div className="w-full h-px bg-rla-border my-10" />

          <h2 className="font-display text-2xl md:text-3xl font-light
            text-rla-cream pt-2">
            The Right Answer Is Project-Specific
          </h2>

          <p>
            General cost benchmarks are useful for orientation. They are not
            useful for underwriting. The difference between a $45,000
            per-lot horizontal cost and a $90,000 per-lot horizontal cost
            on what looks like a similar site can come down to a single
            utility constraint, a grading condition that isn&apos;t visible
            on the topo, or a fee schedule that changed in the last budget
            cycle.
          </p>

          <p>
            What we build for our clients is a project-specific estimate —
            line by line, based on current contractor intelligence and real
            comparable projects. Not a template. Not a benchmark applied to
            acreage. An actual number built from the ground up, with the
            specific conditions of the specific site factored in.
          </p>

          <p>
            If you&apos;re underwriting a Southern California land acquisition
            right now and working from costs that are more than 18 months old,
            it&apos;s worth a conversation before you close.
          </p>

        </article>
      </div>
    </main>
  )
}
