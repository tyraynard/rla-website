

const DIFFERENTIATORS = [
  {
    title: "Mortgage Lending",
    body: "A decade as a loan officer and processor, with deep understanding of how capital structures land acquisitions and what lenders actually underwrite.",
  },
  {
    title: "Land Development",
    body: "Project management and estimating experience on horizontal projects gives clients exact cost clarity before a dollar is committed.",
  },
  {
    title: "Brokerage and Transactions",
    body: "Licensed broker with direct transaction experience across Laguna Beach, Dana Point, San Clemente, and the broader South OC corridor.",
  },
];

const CREDENTIALS = [
  "CA Licensed Broker",
  "14+ Years Experience",
  "South Orange County",
  "CA DRE Lic. 02213778",
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
              lending, land development, and real estate transactions, a
              combination of disciplines that virtually no single advisor can
              match.
            </p>

            <p className="text-body-md text-rla-stone font-body font-light leading-relaxed mb-10">
              That three-sided expertise gives clients complete visibility at
              every stage of a project: from acquisition financing and
              feasibility through horizontal cost estimating and final
              disposition. No blind spots. No hand-offs to generalists.
            </p>

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

            <blockquote className="mt-10 border-l-2 border-rla-sage pl-5">
              <p className="font-display font-light italic text-heading-sm text-rla-parchment leading-snug">
                &ldquo;People never forget how you make them feel.&rdquo;
              </p>
              <cite className="mt-2 block text-caption text-rla-smoke font-body uppercase tracking-widest not-italic">
                Tyler Raynard, Founder
              </cite>
            </blockquote>

            <div className="mt-8 flex items-start gap-4 p-5 bg-rla-iron border border-rla-border rounded-sm">
              <span
                className="mt-1 w-1.5 h-1.5 rounded-full bg-rla-sienna shrink-0"
                aria-hidden="true"
              />
              <p className="text-body-sm font-body font-light text-rla-stone leading-relaxed">
                <span className="text-rla-cream font-medium">
                  RLA operates as an independent advisor.
                </span>{" "}
                No development interest. No ownership stake. No conflict of
                interest. Ever. You get objective analysis from someone whose
                only incentive is giving you the right answer.
              </p>
            </div>
          </div>

          <div className="relative pb-8 md:pb-0">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-rla-iron border border-rla-border">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 30%, rgba(74,97,72,0.18) 0%, transparent 60%), linear-gradient(135deg, #1A1916 0%, #232119 100%)",
                }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <span className="font-display font-light text-[120px] text-rla-border leading-none select-none">
                  RLA
                </span>
              </div>
              <Image
                src="/tyler-raynard-rla.webp"
                alt="Tyler Raynard — Founder & Principal, Raynard Land Advisory"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            <aside
              className="absolute -bottom-2 -left-4 md:left-auto md:-right-6 bg-rla-obsidian border border-rla-border rounded-sm p-5 shadow-card min-w-[200px]"
              aria-label="Credentials"
            >
              <p className="text-eyebrow uppercase tracking-widest text-rla-smoke font-body mb-3">
                Credentials
              </p>
              <ul className="space-y-2">
                {CREDENTIALS.map((cred) => (
                  <li key={cred} className="flex items-center gap-2">
                    <span
                      className="w-1 h-1 rounded-full bg-rla-sienna shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-ui-xs font-body text-rla-parchment">
                      {cred}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
