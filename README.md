# Design Space and Infra Website

Premium website for Design Space and Infra, an interior design and execution company based in Guntur and serving Andhra Pradesh and Hyderabad.

Live website: https://www.designspaceandinfra.com/

## What The Website Does

- Presents residential and commercial interior services.
- Shows featured hotel, restaurant, dhaba, and hospitality projects.
- Sends enquiry details to the website lead endpoint before opening WhatsApp.
- Supports custom domain SEO through sitemap, robots, metadata, and local business schema.
- Uses mobile-friendly call and WhatsApp actions for faster enquiries.

## Local Preview

```bash
npm run dev
```

Open http://localhost:3000 in the browser.

## Production Setup Status

Completed:

- Custom domain is live at `https://www.designspaceandinfra.com/`.
- Resend is connected to Vercel for Production and Preview.
- `RESEND_API_KEY` and `RESEND_EMAIL_DOMAIN` are available in Vercel.
- Website form submissions are accepted by the live API endpoint.
- Resend domain sending is verified for `designspaceandinfra.com`.

Still needed:

- Create the business mailbox `info@designspaceandinfra.com` through Google Workspace, Zoho Mail, or another email provider.
- Add the email provider MX records in the domain DNS settings.
- Add real Google reviews or client testimonials before final advertising.
- Add at least one residential project case study when photos are available.
- Complete the billing address warning in Vercel account settings.

## Useful Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://www.designspaceandinfra.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
LEAD_TO_EMAIL=info@designspaceandinfra.com
LEAD_FROM_EMAIL=Design Space and Infra <onboarding@resend.dev>
RESEND_API_KEY=re_xxxxxxxxx
```

The form opens WhatsApp after submitting details to the website API. Email delivery through Resend is configured, but the receiving inbox `info@designspaceandinfra.com` must still be created before that address can receive mail reliably.
