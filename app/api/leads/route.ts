import { NextResponse } from "next/server";
import { contactDetails, siteData } from "@/lib/site-data";

type LeadRequest = {
  name?: string;
  phone?: string;
  spaceType?: string;
  city?: string;
  context?: string;
  source?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as LeadRequest | null;

  if (!body?.name || !body.phone || !body.spaceType || !body.city) {
    return NextResponse.json({ ok: false, error: "Missing required lead details." }, { status: 400 });
  }

  const leadToEmail = process.env.LEAD_TO_EMAIL ?? contactDetails.email;
  const leadFromEmail = process.env.LEAD_FROM_EMAIL ?? "Design Space and Infra <onboarding@resend.dev>";
  const resendApiKey = process.env.RESEND_API_KEY;
  const lines = [
    "New website enquiry",
    "",
    `Name: ${body.name}`,
    `Phone: ${body.phone}`,
    `Space type: ${body.spaceType}`,
    `City / area: ${body.city}`,
    `Context: ${body.context ?? "Website form"}`,
    `Source: ${body.source ?? "Website"}`,
  ];

  if (!resendApiKey) {
    console.log(lines.join("\n"));
    return NextResponse.json({
      ok: true,
      configured: false,
      message: "Lead endpoint received the enquiry, but email delivery is not configured yet.",
    });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: leadFromEmail,
      to: [leadToEmail],
      subject: `New enquiry for ${siteData.companyName}`,
      text: lines.join("\n"),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Lead email failed", errorText);
    return NextResponse.json({ ok: false, error: "Could not send lead email." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, configured: true });
}
