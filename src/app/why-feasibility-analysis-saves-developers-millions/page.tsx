import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Why Feasibility Analysis Saves Developers Millions | RLA",
  description:
    "Most development losses are preventable. A structured feasibility process surfaces the risks that gut-feel underwriting misses — before you're committed.",
}

export default function FeasibilityArticle() {
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
              Feasibility
            </span>
            <span className="text-rla-border">·</span>
            <span className="text-xs tracking-widest uppercase text-rla-stone">
              June 2026
            </span>
            <span className="text-rla-border">·</span>
            <span className="text-xs tracking-widest uppercase text-rla-stone">
              5 min read
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light
            text-rla-cream leading-tight mb-6">
            Why Feasibility Analysis Saves Developers Millions Before Escrow Closes
          </h1>

          <p className="text-rla-stone text-lg leading-relaxed font-light">
            Most development losses are preventable.
          </p>
        </div>

        {/* Terra cotta rule */}
        <div className="w-12 h-px bg-rla-sienna mb-12" />

        {/* Body */}
        <article className="space-y-6 text-rla-stone font-body font-light
          leading-relaxed text-base md:text-lg">

          <p>
            I&apos;ve said that to a lot of people and it usually lands the same way.
            A little uncomfortable. Because if it&apos;s true, it means the losses were
            a choice — even if nobody knew it at the time.
          </p>

          <p>
            The stuff that kills deals almost never comes out of nowhere. Undersized
            utilities. Fee schedules nobody budgeted for. Grading conditions that looked
            fine on a topo until the civil engineer got into it. That information existed
            before the land went into escrow. It just wasn&apos;t looked for.
          </p>

          <p>That&apos;s what feasibility is for.</p>

          <div className="w-full h-px bg-rla-border my-10" />

          <h2 className="font-display text-2xl md:text-3xl font-light
            text-rla-cream pt-2">
            It&apos;s Not a Formality
          </h2>

          <p>
            There&apos;s a version of feasibility analysis that&apos;s one page, tells
            you what you want to hear, and gets filed somewhere never to be seen again.
            That&apos;s not feasibility. That&apos;s optimism with a cover page.
          </p>

          <p>
            Real feasibility means pulling on every thread that could unravel a deal —
            before you&apos;re under contract, before you&apos;ve told your investors it
            pencils, before walking away starts to feel like failure.
          </p>

          <p>
            Is there sewer capacity at the street or does the main need to be upsized?
            What does the fee schedule look like in this jurisdiction right now, not last
            year? What&apos;s the actual entitlement path and how long does it
            realistically take?
          </p>

          <p>None of that is complicated. But it requires knowing where to look.</p>

          <div className="w-full h-px bg-rla-border my-10" />

          <h2 className="font-display text-2xl md:text-3xl font-light
            text-rla-cream pt-2">
            Why People Skip It
          </h2>

          <p>Speed. And optimism.</p>

          <p>
            When a site is in play, the instinct is to get into contract and sort out
            the details during due diligence. But here&apos;s what actually happens.
            You get in contract. The clock starts. The seller controls the timeline.
            And now you&apos;re doing your analysis under pressure, with money on the
            line, and a team that&apos;s already bought in emotionally.
          </p>

          <p>
            The warning signs that would have been easy to walk away from two months
            ago are now things you&apos;re rationalizing.
          </p>

          <p>That&apos;s how developers end up closing on problems.</p>

          <div className="w-full h-px bg-rla-border my-10" />

          <h2 className="font-display text-2xl md:text-3xl font-light
            text-rla-cream pt-2">
            Where It Gets Expensive
          </h2>

          {[
            {
              title: "Off-site infrastructure.",
              body: "Sewer nearby doesn't mean sewer adequate. If the main is undersized or at capacity, the cost to extend or upsize it is on you. I've seen that run into the hundreds of thousands on what looked like a simple infill project.",
            },
            {
              title: "Fees.",
              body: "Development impact fees in Southern California get updated. Some jurisdictions index them to construction costs. Others pass new fee programs mid-cycle. Underwrite to last year's numbers and pull permits next year — the gap matters on thin margins.",
            },
            {
              title: "Grading.",
              body: "Flat-looking land is not always flat land. Cut and fill, soil reports, export costs — these add up fast, especially in hillside or coastal markets.",
            },
            {
              title: "Entitlement.",
              body: "Some cities move in months. Others take years for reasons you'll never fully understand. The carry cost difference between those two outcomes can change everything.",
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="border-l-2 border-rla-sienna pl-6 py-1"
            >
              <p>
                <span className="text-rla-cream font-medium">{title}</span>{" "}
                {body}
              </p>
            </div>
          ))}

          <div className="w-full h-px bg-rla-border my-10" />

          <h2 className="font-display text-2xl md:text-3xl font-light
            text-rla-cream pt-2">
            What You&apos;re Actually Buying
          </h2>

          <p>
            When you do feasibility right, you&apos;re not just looking for problems.
            You&apos;re building an honest picture of what the deal costs to execute.
          </p>

          <p>
            That changes the conversation with lenders, with equity partners, with the
            seller. A developer who knows exactly what a site costs to develop — and
            can back it up — operates at a completely different level.
          </p>

          <p>
            It also gives you the ability to walk away clean. That sounds simple but
            it&apos;s hard when you&apos;re excited about a site. A structured process
            makes it harder to fool yourself.
          </p>

          <p>
            The developers who protect their capital over time are the ones who got
            good at walking away from deals that looked right but weren&apos;t.
          </p>

          <div className="w-full h-px bg-rla-border my-10" />

          <h2 className="font-display text-2xl md:text-3xl font-light
            text-rla-cream pt-2">
            Southern California Specifically
          </h2>

          <p>
            This market is expensive. Infrastructure costs are high. Fee programs are
            layered. Entitlement timelines vary wildly — sometimes by who&apos;s
            sitting on the council that year. The margin for error is thin.
          </p>

          <p>
            The sites that look cheap usually look that way for a reason. And the
            reason almost always shows up when you actually dig in.
          </p>

          <div className="w-full h-px bg-rla-border my-10" />

          <p>
            If you&apos;re looking at a site and want a second set of eyes — reach
            out. First conversation is always at no cost or obligation. That&apos;s
            not a gimmick. It&apos;s just how I work.
          </p>

        </article>

        {/* Author bio */}
        <div className="mt-12 pt-8 border-t border-rla-border">
          <p className="text-rla-stone text-sm leading-relaxed font-light italic">
            Tyler Raynard is a licensed California real estate broker and land advisor
            with 14 years of experience in mortgage lending, land development, and
            transactions. He founded Raynard Land Advisory to serve developers,
            investors, and lenders across Southern California.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 pt-10 border-t border-rla-border">
          <p className="text-rla-stone text-sm mb-6">
            Ready to run a real feasibility analysis on your next project?
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
