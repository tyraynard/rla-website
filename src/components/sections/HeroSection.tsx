"use client";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
      style={{
        backgroundImage: 'url("/hero.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark gradient overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(9,8,6,0.65) 0%, rgba(9,8,6,0.45) 40%, rgba(9,8,6,0.80) 80%, rgba(9,8,6,0.96) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Gradient fallback if no image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(46,61,44,0.25) 0%, transparent 70%), linear-gradient(160deg, #111009 0%, #0F0E0C 50%, #090806 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-rla w-full pt-24 pb-20 md:pt-32 md:pb-28 relative">
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
            Southern California's fully independent land advisory. No development interest. No ownership stake. No conflict of interest.
      </p>
      <p className="text-sm italic text-rla-parchment/60 mt-3 tracking-widest"
        style={{ animationDelay: "350ms" }}>
        Details, simplified.
      </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up"
            style={{ animationDelay: "480ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center h-12 px-8 font-body font-medium text-ui-md uppercase tracking-widest bg-rla-cream text-rla-black rounded-sm transition-all duration-350 ease-out-expo hover:bg-rla-white hover:shadow-card-hover"
            >
              Start a Conversation
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 h-12 px-6 font-body font-medium text-ui-md uppercase tracking-widest text-rla-stone border border-rla-border rounded-sm transition-all duration-350 ease-out-expo hover:text-rla-cream hover:border-rla-parchment"
            >
              View Services
              <ArrowIcon />
            </a>
          </div>
        </div>

       

      
  );
}
