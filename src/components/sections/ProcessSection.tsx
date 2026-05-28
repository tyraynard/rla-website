import { pad } from "@/lib/utils";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

interface ProcessStep {
  title:       string;
  description: string;
  outputs:     string[];
}

const STEPS: ProcessStep[] = [
  {
    title:    "Initial Consultation",
    description:
      "Every engagement begins with a direct conversation about the project, the timeline, and the decision being made. No intake forms. No junior staff. You talk to Tyler.",
    outputs: [
      "Project scope clarity",
      "Engagement structure defined",
      "Timeline established",
    ],
  },
  {
    title:    "Site & Market Analysis",
    description:
      "We conduct a comprehensive review of the site — constraints, entitlement history, comparable transactions, and market absorption — before any numbers are put on paper.",
    outputs: [
      "Constraint mapping",
      "Comp analysis",
      "Market absorption data",
    ],
  },
  {
    title:    "Cost & Feasibility Report",
    description:
      "A detailed, line-item horizontal cost estimate and pro forma built from real project data. No templates. The numbers reflect what it actually costs to build in Southern California.",
    outputs: [
      "Line-item cost estimate",
      "Pro forma projections",
      "Risk-adjusted scenarios",
    ],
  },
  {
    title:    "Ongoing Strategic Advisory",
    description:
      "For clients who want continued guidance through entitlement, financing, or builder disposition — RLA stays engaged as a strategic partner through to project completion.",
    outputs: [
      "Entitlement support",
      "Capital advisory",
      "Builder / broker positioning",
    ],
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="section-base bg-rla-black"
      aria-labelledby="process-heading"
    >
      <div className="container-rla">

        <div className="mb-14 md:mb-16">
          <p className="eyebrow-label mb-6">How We Work</p>
          <h2
            id="process-heading"
            className="font-display font-light text-heading-xl text-rla-cream max-w-[28ch]"
          >
            A Clear Process. No Guesswork.
          </h2>
        </div>

        <ol
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-rla-border rounded-sm overflow-hidden"
          aria-label="Our process steps"
        >
          {STEPS.map((step, i) => (
            