import Image from "next/image";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

const STATS = [
  { value: "14+",  label: "Years Experience"       },
  { value: "$2B+", label: "In Transaction Value"   },
  { value: "200+", label: "Parcels Analyzed"        },
] as const;

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Gradient fallback (always visible, sits furthest back) ── */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(46,61,44,0.25) 0%, transparent 70%), " +
            "linear-gradient(160deg, #111009 0%, #0F0E0C 50%, #090806 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Background photo (add /public/hero.png to activate) ── */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Legibility overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,8,6,0.65) 0%, rgba(9,8,6,0.45) 40%, rgba(9,8,6,0.80) 80%, rgba(9,8,6,0.96) 100%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="container-rla w-full pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-[820px]">

          <p
            className="eyebrow-label mb-7 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            Land Development Consulting
          </p>

          <h1
            id="hero-heading"
            className="font-display font-light text-display-2xl text-rla-white animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Shaping Communities
            <br />
            <span className="text-rla-cream">From the Ground Up</span>
          </h1>

          <p
            className="mt-7 text-body-xl text-rla-parchment font-body font-light max-w-[56ch] leading-relaxed animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            Strategic land advisory, feasibility analysis, and horizontal cost
            estimating for developers and investors across Southern California.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up"
            style={{ animationDelay: "480ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center h-12 px-8
                         font-body font-medium text-ui-md uppercase tracking-widest
                         bg-rla-cream text-rla-black rounded-sm
                         transition-all duration-350 ease-out-expo
                         hover:bg-rla-white hover:shadow-card-hover"
            >
              Start a Conversation
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 h-12 px-6
                         font-body font-medium text-ui-md uppercase tracking-widest
                         text-rla-stone border border-rla-border rounded-sm
                         transition-all duration-350 ease-out-expo
                         hover:text-rla-cream hover:border-rla-parchment"
            >
              View Services
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* ── Stats ── */}
        <div
          className="mt-20 md:mt-28 pt-8 border-t border-rla-border/60
                     grid grid-cols-3 gap-8 max-w-xl animate-fade-up"
          style={{ animationDelay: "600ms" }}
          aria-label="Key statistics"
        >
          {STATS.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-1">
              <span
                className="font-display font-light text-display-lg text-rla-cream leading-none"
                aria-label={`${stat.value} ${stat.label}`}
              >
                {stat.value}
              </span>
              <span className="text-eyebrow uppercase tracking-widest text-rla-stone font-body" aria-hidden="true">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1000ms" }}
        aria-hidden="true"
      >
        <span className="text-eyebrow uppercase tracking-widest text-rla-smoke font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-rla-stone/50 to-transparent" />
      </div>
    </section>
  );
}
