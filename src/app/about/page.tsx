import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About | Raynard Land Advisory",
  description:
    "Tyler Raynard founded Raynard Land Advisory on 14 years of experience spanning mortgage lending, horizontal land development, and real estate transactions across Southern California.",
}

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-rla-sienna font-medium mb-4">
            About RLA
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-light
            text-rla-cream leading-tight mb-8">
            Land Development,{" "}
            <span className="italic">Reimagined.</span>
            <br />
            <span className="text-rla-sienna">From the Ground Up.</span>
          </h1>
          <p className="text-rla-stone text-lg leading-relaxed font-light">
            Most advisors understand one piece of the puzzle. RLA was built
            around understanding all three — and connecting them in a single
            conversation.
          </p>
        </div>

        <div className="w-12 h-px bg-rla-sienna mb-20" />

        {/* Founder section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-start">

          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-sm overflow-hidden
              border border-rla-border">
              <Image
                src="/about-hero.jpg"
                alt="Tyler Raynard overlooking the Southern California coast"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Credentials card */}
            <div className="absolute bottom-0 right-0 md:-right-8
              bg-rla-iron border border-rla-border p-6 max-w-48">
              <p className="text-xs tracking-widest uppercase text-rla-sienna
                font-medium mb-4">
                Credentials
              </p>
              <ul className="space-y-2">
                {[
                  "CA Licensed Broker",
                  "DRE Lic. 02213778",
                  "14+ Years Experience",
                  "South Orange County",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-rla-sienna
                      mt-1.5 shrink-0" />
                    <span className="text-rla-stone text-xs font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-6 text-rla-stone font-light leading-relaxed">
            <h2 className="font-display text-3xl font-light text-rla-cream">
              The Advisor Behind RLA
            </h2>

            <p>
              Tyler Raynard spent 14 years moving through three disciplines that
              most people treat as separate industries. Mortgage lending first —
              a decade understanding how capital structures land acquisitions,
              what lenders actually underwrite, and why deals fall apart at the
              financing stage. Then land development — project management and
              estimating on horizontal projects, reviewing civil plans, pricing
              full scopes, walking dirt. Then brokerage — licensed in California,
              closing transactions across the South OC corridor.
            </p>

            <p>
              None of that was a plan. It was curiosity, followed by opportunity,
              followed by the realization that almost nobody had done all three —
              and that the gap was costing developers, investors, and lenders real
              money.
            </p>

            <p>
              RLA was built to close that gap. One advisor. Complete visibility.
              No hand-offs to generalists who have to be educated on the basics.
            </p>

            <blockquote className="border-l-2 border-rla-sienna pl-6 py-2">
              <p className="font-display text-xl font-light italic text-rla-cream">
                &ldquo;People never forget how you make them feel.&rdquo;
              </p>
              <cite className="text-xs tracking-widest uppercase text-rla-stone
                not-italic mt-2 block">
                Tyler Raynard, Founder & Principal
              </cite>
            </blockquote>
          </div>
        </div>

        <div className="w-full h-px bg-rla-border mb-24" />

        {/* Three disciplines */}
        <div className="mb-24">
          <div className="mb-12">
            <p className="text-xs tracking-widest uppercase text-rla-sienna
              font-medium mb-4">
              The Foundation
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light
              text-rla-cream">
              Three Disciplines. One Conversation.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rla-border">
            {[
              {
                number: "01",
                title: "Land Development",
                body: "Years spent in project management and estimating — reviewing civil plans, analyzing soils and grading reports, pricing full horizontal scopes. Grading, wet and dry utilities, street improvements, landscape, amenities, walls, off-site improvements, and fee analysis. The kind of depth that means nothing gets overlooked and nobody needs to be educated on the basics.",
              },
              {
                number: "02",
                title: "Technology & AI",
                body: "Proprietary cost modeling and AI-assisted analysis built to deliver faster, more accurate project intelligence. A 100+ project database across six Southern California counties. Escalation-adjusted benchmarks. Fee schedules by jurisdiction. A modern approach to a process the industry has historically done by hand.",
              },
              {
                number: "03",
                title: "Brokerage & Lending",
                body: "A decade as a loan officer and processor with a deep understanding of how capital structures land acquisitions and what lenders actually underwrite. A licensed California broker with direct transaction experience across Laguna Beach, Dana Point, San Clemente, and the broader South OC corridor.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="bg-rla-charcoal p-8 space-y-4"
              >
                <p className="font-mono text-xs text-rla-smoke">
                  {item.number}
                </p>
                <h3 className="font-display text-2xl font-light text-rla-cream">
                  {item.title}
                </h3>
                <p className="text-rla-stone font-light leading-relaxed text-sm">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-rla-border mb-24" />

        {/* The wave */}
        <div className="mb-24 max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-rla-sienna
            font-medium mb-4">
            Where We Are Headed
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light
            text-rla-cream mb-8">
            A New Wave Is Forming.
          </h2>

          <div className="space-y-5 text-rla-stone font-light leading-relaxed">
            <p>
              The land development industry is changing. AI-assisted analysis,
              proprietary data modeling, and technology-driven cost intelligence
              are creating a gap between advisors who have adapted and those who
              haven&apos;t. That gap is only going to widen.
            </p>
            <p>
              RLA was built for this moment. The tools are proprietary. The data
              is real. The experience behind it is 14 years deep. And the
              approach — independent, conflict-free, advisor-first — is exactly
              what developers, investors, and lenders need when the stakes are
              high and the margin for error is thin.
            </p>
            <p className="text-rla-sienna font-medium">
              A new wave is forming in land development. RLA plans to be a part
              of the ride.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-rla-border mb-24" />

        {/* Independence statement */}
        <div className="mb-24 border border-rla-border p-8 md:p-12 max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-rla-sienna
            font-medium mb-6">
            How RLA Operates
          </p>
          <p className="font-display text-2xl md:text-3xl font-light
            text-rla-cream leading-relaxed mb-6">
            Independent. Objective. Conflict-free.
          </p>
          <p className="text-rla-stone font-light leading-relaxed">
            RLA operates as an independent advisor. No development interest. No
            ownership stake. No conflict of interest. Ever. Every engagement is
            structured so that the only incentive is giving the client the right
            answer — not the comfortable one.
          </p>
        </div>

        {/* CTA */}
        <div className="border-t border-rla-border pt-16">
          <p className="text-xs tracking-widest uppercase text-rla-sienna
            font-medium mb-4">
            Start a Conversation
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light
            text-rla-cream mb-6">
            Ready to talk through your project?
          </h2>
          <p className="text-rla-stone font-light leading-relaxed mb-8
            max-w-xl">
            Every engagement starts with a direct conversation — no intake
            process, no junior staff. You talk to Tyler.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-rla-sienna
                text-rla-cream text-xs tracking-widest uppercase px-8 py-4
                hover:bg-rla-sienna/80 transition-colors"
            >
              Start a Conversation →
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center gap-3 border border-rla-sienna
                text-rla-sienna text-xs tracking-widest uppercase px-8 py-4
                hover:bg-rla-sienna hover:text-rla-cream transition-colors"
            >
              View Services →
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}