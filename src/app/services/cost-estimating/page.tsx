import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Horizontal Cost Estimating | Raynard Land Advisory",
  description: "Detailed horizontal development cost estimates built on real project data from across Southern California.",
}

export default function CostEstimatingPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/#services" className="inline-flex items-center gap-2 text-rla-sienna text-sm tracking-widest uppercase mb-12 hover:text-rla-cream transition-colors">
          Back to Services
        </Link>
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase text-rla-sienna font-medium mb-4">Service 02</p>
          <h1 className="font-display text-4xl md:text-5xl font-light text-rla-cream leading-tight mb-6">
            Horizontal Cost Estimating
          </h1>
          <p className="text-rla-stone text-lg leading-relaxed font-light max-w-2xl">
            Precision from the ground up. Detailed horizontal development cost estimates built on real project data from across Southern California.
          </p>
        </div>
        <div className="w-12 h-px bg-rla-sienna mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-display text-2xl font-light text-rla-cream mb-6">Scope Coverage</h2>
            <ul className="space-y-4">
              {["Grading and earthwork takeoffs","Wet utilities — sewer, water, storm drain","Dry utilities — electrical, gas, telecom","Street and infrastructure improvements","Off-site improvement estimates","Landscape, walls, and amenities","Fee analysis by jurisdiction","Contingency and escalation modeling"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-rla-sienna mt-2.5 shrink-0" />
                  <span className="text-rla-stone font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-rla-cream mb-6">What Makes It Different</h2>
            <ul className="space-y-4">
              {["Built on 100+ real Southern California projects","Calibrated against actual delivered costs","Escalation-adjusted for current market conditions","Fee schedules maintained by jurisdiction","AI-assisted modeling for speed and precision","Line-item detail — not regional averages"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-rla-sienna mt-2.5 shrink-0" />
                  <span className="text-rla-stone font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-rla-border pt-12">
          <p className="text-rla-stone text-sm mb-6">Need a detailed horizontal cost estimate for your project?</p>
          <Link href="/#contact" className="inline-flex items-center gap-3 bg-rla-sienna text-rla-cream text-xs tracking-widest uppercase px-8 py-4 hover:bg-rla-sienna/80 transition-colors">
            Start a Conversation
          </Link>
        </div>
      </div>
    </main>
  )
}
