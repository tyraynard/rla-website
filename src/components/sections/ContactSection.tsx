"use client";

import { useState, useId } from "react";
import { cn } from "@/lib/utils";
import { SITE_EMAIL, SITE_REGION } from "@/lib/constants";

// Renamed from FormData to avoid shadowing the browser's native FormData API
interface ContactFormData {
  firstName: string;
  lastName:  string;
  email:     string;
  phone:     string;
  company:   string;
  interest:  string;
  message:   string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const INITIAL_FORM: ContactFormData = {
  firstName: "",
  lastName:  "",
  email:     "",
  phone:     "",
  company:   "",
  interest:  "",
  message:   "",
};

const INTERESTS = [
  { value: "",                label: "Select a service area"          },
  { value: "feasibility",     label: "Feasibility Analysis"           },
  { value: "cost-estimating", label: "Horizontal Cost Estimating"     },
  { value: "advisory",        label: "Developer & Investor Advisory"  },
  { value: "general",         label: "General Inquiry"                },
] as const;

const TRUST_SIGNALS = [
  "Responses within one business day",
  "No sales calls — direct to Tyler Raynard",
  "Initial conversation at no cost or obligation",
] as const;

export function ContactSection() {
  const [form,   setForm]   = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  function validate(): boolean {
    const e: Partial<ContactFormData> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim())  e.lastName  = "Last name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "A valid email address is required.";
    }
    if (!form.message.trim()) e.message = "Please share a brief message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        console.error("[contact form]", data?.error ?? res.statusText);
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error("[contact form] Network error:", err);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="section-base bg-rla-black"
      aria-labelledby="contact-heading"
    >
      <div className="container-rla">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: Info ── */}
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow-label mb-6">Contact</p>

            <h2
              id="contact-heading"
              className="font-display font-light text-heading-xl text-rla-cream mb-6"
            >
              Let&rsquo;s Build Something Remarkable.
            </h2>

            <p className="text-body-lg text-rla-stone font-body font-light leading-relaxed mb-10 max-w-[42ch]">
              Ready to move from raw land to a viable project? Every engagement
              starts with a direct conversation — no intake process, no junior staff.
            </p>

            <div className="space-y-5 border-t border-rla-border pt-8">
              <div>
                <p className="text-eyebrow uppercase tracking-widest text-rla-smoke font-body mb-2">Email</p>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="text-body-md font-body text-rla-parchment hover:text-rla-sage-pale transition-colors duration-200"
                >
                  {SITE_EMAIL}
                </a>
              </div>
              <div>
                <p className="text-eyebrow uppercase tracking-widest text-rla-smoke font-body mb-2">Service Area</p>
                <p className="text-body-md font-body text-rla-parchment">{SITE_REGION}</p>
                <p className="text-body-sm font-body text-rla-stone mt-1">
                  Laguna Beach · Dana Point · San Clemente · Laguna Niguel
                </p>
              </div>
            </div>

            <ul className="mt-10 flex flex-col gap-3" aria-label="Why contact us">
              {TRUST_SIGNALS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-rla-sage shrink-0" aria-hidden="true" />
                  <span className="text-body-sm font-body text-rla-stone">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: Form ── */}
          <div>
            {status === "success" ? (
              <SuccessMessage onReset={() => { setStatus("idle"); setErrors({}); }} />
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="First Name" id="firstName" required error={errors.firstName}>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className={fieldClass(!!errors.firstName)}
                      placeholder="Tyler"
                    />
                  </FormField>
                  <FormField label="Last Name" id="lastName" required error={errors.lastName}>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                      className={fieldClass(!!errors.lastName)}
                      placeholder="Raynard"
                    />
                  </FormField>
                </div>

                <FormField label="Email Address" id="email" required error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className={fieldClass(!!errors.email)}
                    placeholder="tyler@company.com"
                  />
                </FormField>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Phone" id="phone" error={errors.phone}>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className={fieldClass(false)}
                      placeholder="(949) 000-0000"
                    />
                  </FormField>
                  <FormField label="Company / Entity" id="company" error={errors.company}>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      className={fieldClass(false)}
                      placeholder="Acme Development LLC"
                    />
                  </FormField>
                </div>

                <FormField label="Service Area" id="interest" error={errors.interest}>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className={cn(fieldClass(false), "cursor-pointer")}
                  >
                    {INTERESTS.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Tell Us About Your Project" id="message" required error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className={cn(fieldClass(!!errors.message), "resize-none")}
                    placeholder="Share a brief overview of the site, your timeline, and what you're trying to determine..."
                  />
                </FormField>

                {status === "error" && (
                  <p className="text-body-sm text-red-400 font-body" role="alert">
                    Something went wrong. Please email us directly at{" "}
                    <a href={`mailto:${SITE_EMAIL}`} className="underline underline-offset-2">
                      {SITE_EMAIL}
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={cn(
                    "w-full h-12 flex items-center justify-center gap-3",
                    "font-body font-medium text-ui-md uppercase tracking-widest",
                    "bg-rla-cream text-rla-black rounded-sm",
                    "transition-all duration-350 ease-out-expo",
                    "hover:bg-rla-white hover:shadow-card",
                    "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  {status === "submitting" ? <><Spinner /> Sending…</> : "Send Message"}
                </button>

                <p className="text-caption text-rla-smoke font-body text-center">
                  By submitting, you agree to our{" "}
                  <a href="/privacy" className="underline underline-offset-2 hover:text-rla-stone transition-colors">
                    Privacy Policy
                  </a>.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────

interface FormFieldProps {
  label:     string;
  id:        string;   // Required: wires label htmlFor → input id
  required?: boolean;
  error?:    string;
  children:  React.ReactNode;
}

function FormField({ label, id, required = false, error, children }: FormFieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-ui-sm font-body font-medium text-rla-stone uppercase tracking-widest"
      >
        {label}
        {required && <span className="text-rla-sage ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} className="text-caption text-red-400 font-body" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function fieldClass(hasError: boolean): string {
  return cn(
    "w-full h-11 px-4 rounded-sm font-body text-body-sm",
    "bg-rla-iron text-rla-cream border outline-none",
    "transition-all duration-250",
    hasError
      ? "border-red-500/50 focus:border-red-400"
      : "border-rla-border focus:border-rla-sage focus:shadow-[0_0_0_3px_rgba(110,140,108,0.12)]",
    "placeholder:text-rla-smoke"
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div
      className="flex flex-col items-start gap-6 p-10 bg-rla-charcoal border border-rla-border rounded-sm"
      role="status"
      aria-live="polite"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-rla-sage-deep border border-rla-sage-muted" aria-hidden="true">
        <svg className="w-5 h-5 text-rla-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <div>
        <h3 className="font-display font-light text-heading-md text-rla-cream mb-3">
          Message Received
        </h3>
        <p className="text-body-sm text-rla-stone font-body font-light leading-relaxed max-w-[42ch]">
          Thank you for reaching out. Tyler will be in touch within one business day to schedule a call.
        </p>
      </div>
      <button
        onClick={onReset}
        className="text-ui-xs font-body font-medium uppercase tracking-widest text-rla-smoke hover:text-rla-stone transition-colors"
      >
        Send Another Message
      </button>
    </div>
  );
}
