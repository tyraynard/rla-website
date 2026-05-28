import Image from "next/image";

const DIFFERENTIATORS = [
  {
    title: "Mortgage Lending",
    body:  "A decade as a loan officer and processor — deep understanding of how capital structures land acquisitions and what lenders actually underwrite.",
  },
  {
    title: "Land Development",
    body:  "Project management and estimating experience on horizontal projects gives clients exact cost clarity before a dollar is committed.",
  },
  {
    title: "Brokerage & Transactions",
    body:  "Licensed broker with direct transaction experience across Laguna Beach, Dana Point, San Clemente, and the broader South OC corridor.",
  },
];

const CREDENTIALS = [
  "CA Licensed Broker",
  "14+ Years Experience",
  "South Orange County",
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-base bg-rla-charcoal border-y border-rla-border overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container-rla">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Text ── */}
          <div>
            <p className="eyebrow-label mb-6">Who We Are</p>

            <h2
              id="about-heading"
              className="font-display font-light text-heading-xl text-rla-cream mb-6"
            >
              Three Disciplines.
              <br />
              <span className="text-rla-stone">One Advisor.</span>
            </h2>

            <p className="text-body-lg text-rla-parchment font-body font-light leading-relaxed mb-6">
              Tyler Raynard brings 14+ years of experience spanning mortgage
              lending, land development, and real estate transactions — a
              combination of disciplines that virtually no single advisor can match.
            </p>

            <p className="text-body-md text-rla-stone font-body font-light leading-relaxed mb-10">
              That three-sided expertise gives clients complete visibility at
              every stage of a project: from acquisition financing and feasibility
              through horizontal cost estimating and final disposition.
              No blind spots. No hand-offs to generalists.
            </p>

            {/* Differentiators */}
            <ul className="space-y-6" aria-label="Areas of expertise">
              {DIFFERENTIATORS.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    className="mt-1.5 block w-5 h-px bg-rla-sienna-muted shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-heading-sm font-body font-medium text-rla-cream mb-1">
                      {item.title}
                    </h3>
                    <p className="text-body-sm text-rla-stone font-body font-light leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Signature quote */}
            <blockquote className="mt-10 border-l-2 border-rla-sage pl-5">
              <p className="font-display font-light italic text-heading-sm text-rla-parchment leading-snug">
                &ldquo;People never forget how you make them feel.&rdquo;
              </p>
              <cite className="mt-2 block text-caption text-rla-smoke font-body uppercase tracking-widest not-italic">
                Tyler Raynard, Founder
              </cite>
            </blockquote>

            {/* Trust anchor */}
            <div className="mt-8 flex items-start gap-4 p-5 bg-rla-iron border border-rla-border rounded-sm">
              <span
                className="mt-1 w-1.5 h-1.5 rounded-full bg-rla-sienna shrink-0"
                aria-hidden="true"
              />
              <p className="text-body-sm font-body font-light text-rla-stone leading-relaxed">
                <span className="text-rla-cream font-medium">RLA operates as an independent advisor.</span>{" "}
                No development interest. No ownership stake. No conflict of interest — ever.
                You get objective analysis from someone whose only incentive is giving you
                the right answer.
              </p>
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="relative pb-8 md:pb-0">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-rla-iron border border-rla-border">

              {/* Gradient placeholder */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 30%, rgba(74,97,72,0.18) 0%, transparent 60%), " +
                    "linear-gradient(135deg, #1A1916 0%, #232119 100%)",
                }}
                aria-hidden="true"
              />

              {/* Decorative monogram */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <span className="font-display font-light text-[120px] text-rla-border leading-none select-none">
                  RLA
                </span>
              </div>

              {/* Photo */}
              <Image
                src="/about-photo.jpg"
                alt="Tyler Raynard, Founder of Raynard Land Advisory"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Floating credential card */}
            <aside
              className="absolute -bottom-2 -left-4 md:left-auto md:-right-6
                         bg-rla-obsidian border border-rla-border rounded-sm
                         