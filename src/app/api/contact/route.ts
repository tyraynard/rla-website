import { NextResponse } from "next/server";

interface ContactPayload {
  firstName: string;
  lastName:  string;
  email:     string;
  phone?:    string;
  company?:  string;
  interest?: string;
  message:   string;
}

/**
 * POST /api/contact
 *
 * Delivers contact form submissions via Resend REST API.
 * No SDK needed — uses native fetch.
 *
 * Required env vars (set in Vercel Dashboard → Project → Settings → Environment Variables):
 *   RESEND_API_KEY     — from https://resend.com (verify raynardla.com as sender domain first)
 *   CONTACT_EMAIL_TO   — e.g. hello@raynardla.com
 */
export async function POST(request: Request): Promise<NextResponse> {
  // ── Parse body ────────────────────────────────────────────────────────
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // ── Server-side validation ────────────────────────────────────────────
  if (!body.firstName?.trim() || !body.lastName?.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 422 });
  }
  if (!body.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 422 });
  }
  if (!body.message?.trim()) {
    return NextResponse.json({ error: "Message is required." }, { status: 422 });
  }

  // ── Environment check ─────────────────────────────────────────────────
  const apiKey  = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !toEmail) {
    console.error("[contact] RESEND_API_KEY or CONTACT_EMAIL_TO is not set.");
    return NextResponse.json(
      { error: "Email service is not configured. Please contact us directly." },
      { status: 503 }
    );
  }

  // ── Build email HTML ──────────────────────────────────────────────────
  const rows = [
    ["Name",     `${body.firstName} ${body.lastName}`],
    ["Email",    body.email],
    body.phone   && ["Phone",    body.phone],
    body.company && ["Company",  body.company],
    body.interest && ["Service Interest", body.interest],
  ].filter(Boolean) as [string, string][];

  const metaRows = rows
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#8A8680;font-size:13px;">${k}</td><td style="padding:4px 0;color:#EAE4DA;font-size:13px;">${v}</td></tr>`)
    .join("");

  const html = `
<!DOCTYPE html>
<html>
<body style="background:#0F0E0C;font-family:system-ui,sans-serif;padding:32px;margin:0;">
  <div style="max-width:600px;margin:0 auto;">
    <p style="color:#6E8C6C;font-size:11px;text-transform:uppercase;letter-spacing:0.15em;margin-bottom:24px;">
      New Inquiry — Raynard Land Advisory
    </p>
    <h1 style="color:#EAE4DA;font-size:22px;font-weight:300;margin-bottom:24px;">
      ${body.firstName} ${body.lastName} sent a message
    </h1>
    <table style="border-collapse:collapse;margin-bottom:24px;">${metaRows}</table>
    <div style="border-top:1px solid #2E2C26;padding-top:20px;">
      <p style="color:#8A8680;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:8px;">Message</p>
      <p style="color:#C4BEB4;font-size:15px;line-height:1.7;white-space:pre-wrap;margin:0;">${body.message}</p>
    </div>
    <div style="margin-top:32px;border-top:1px solid #2E2C26;padding-top:16px;">
      <a href="mailto:${body.email}" style="color:#6E8C6C;font-size:13px;">Reply to ${body.email}</a>
    </div>
  </div>
</body>
</html>`;

  // ── Send via Resend REST API ───────────────────────────────────────────
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method:  "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type":  "application/json",
      },
      body: JSON.stringify({
        from:    `RLA Contact <no-reply@raynardla.com>`,
        to:      [toEmail],
        replyTo: body.email,
        subject: `New inquiry from ${body.firstName} ${body.lastName}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[contact] Resend error:", err);
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
