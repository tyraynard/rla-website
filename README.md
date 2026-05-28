# Raynard Land Advisory — raynardla.com
### Next.js 14 · App Router · Tailwind CSS · TypeScript

Production-ready marketing site for Raynard Land Advisory.
Dark premium consulting aesthetic. Built for Vercel deployment.

---

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/your-org/rla-web.git
cd rla-web

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 4. Add required images (see Image Assets below)

# 5. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Required Image Assets

Add these files to the `/public` directory:

| File | Purpose | Recommended Size |
|---|---|---|
| `logo.png` | Navbar + footer logo | Any — ideally transparent PNG |
| `hero.jpg` | Homepage hero background | 3840×2160px, landscape aerial photo |
| `about-photo.jpg` | About section portrait | 1200×1600px, portrait |
| `og-default.jpg` | Social media preview | 1200×630px |
| `favicon.ico` | Browser tab icon | 32×32px |
| `apple-touch-icon.png` | iOS home screen icon | 180×180px |

> **Logo note:** The current `logo.png` has a cream background. For optimal
> rendering on the dark navbar, request a transparent-background PNG version
> from your designer.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       ← CSS tokens, base resets, layout utilities
│   ├── layout.tsx        ← Root layout: fonts, metadata, Navbar, Footer
│   └── page.tsx          ← Homepage: assembles all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    ← Sticky responsive navigation
│   │   └── Footer.tsx    ← Site footer
│   └── sections/
│       ├── HeroSection.tsx      ← Full-screen hero with background image
│       ├── AboutSection.tsx     ← Founder story + credentials
│       ├── ServicesSection.tsx  ← Three service cards
│       ├── ProcessSection.tsx   ← Four-step workflow
│       ├── InsightsSection.tsx  ← Article card grid
│       └── ContactSection.tsx   ← Contact form (client component)
└── lib/
    └── utils.ts          ← cn(), formatDateShort(), pad()
```

---

## Connecting the Contact Form

The form currently simulates a submission (1.2s delay then success state).
To connect to a real email delivery service:

### Option A — Resend (recommended)

```bash
npm install resend
```

Create `src/app/actions/sendContactEmail.ts`:

```typescript
"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: FormData) {
  await resend.emails.send({
    from:    "RLA Contact <no-reply@raynardla.com>",
    to:      process.env.CONTACT_EMAIL_TO!,
    subject: `New inquiry from ${data.firstName} ${data.lastName}`,
    html:    `<p>${data.message}</p><p>From: ${data.email}</p>`,
  });
}
```

Then in `ContactSection.tsx`, replace the placeholder block with:
```typescript
import { sendContactEmail } from "@/app/actions/sendContactEmail";
await sendContactEmail(form);
```

---

## Deployment to Vercel

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial production build"
git push origin main
```

### 2. Import to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework preset: **Next.js** (auto-detected)
4. Add environment variables from `.env.local`
5. Deploy

### 3. Add Your Domain
1. Vercel Dashboard → Project → Settings → Domains
2. Add `raynardla.com`
3. Follow DNS configuration instructions
4. SSL is provisioned automatically

---

## Development Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build (run before deploying)
npm run start    # Start production server locally
npm run lint     # ESLint check
```

---

## Extending the Site

### Adding a New Page (e.g., `/services/feasibility`)
1. Create `src/app/services/feasibility/page.tsx`
2. Add metadata export
3. Build your sections — they're all Server Components by default

### Connecting a CMS (Sanity — Phase 2)
1. `npm install @sanity/client`
2. Add `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_TOKEN` to `.env.local`
3. Create `src/lib/sanity.ts` with the client
4. Replace static data in section components with async data fetching

### Adding Framer Motion Animations
```bash
npm install framer-motion
```
Use thin wrapper components (see design system) to keep Server Components intact.

---

*Built for Raynard Land Advisory · raynardla.com*
