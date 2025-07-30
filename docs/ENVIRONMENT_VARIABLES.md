# Environment Variables Setup

This document describes the environment variables used in the SF Legacy Autos website.

## Required Environment Variables

Add these to your `.env.local` file:

### Form Submission URLs
```bash
# Financing form submission endpoint
NEXT_PUBLIC_FINANCING_FORM_URL=https://formspree.io/f/mrblkvnd

# Contact form submission endpoint (replace with actual URL when available)
NEXT_PUBLIC_CONTACT_FORM_URL=https://formspree.io/f/YOUR_CONTACT_FORM_ID
```

### Sanity CMS Configuration
```bash
NEXT_PUBLIC_USE_SANITY_DATA=true
NEXT_PUBLIC_SANITY_PROJECT_ID=tlbomgvx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Calendly Configuration
```bash
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/verjlabs/test-drive-appointment
```

## Usage

The environment variables are accessed in components using:
- `process.env.NEXT_PUBLIC_FINANCING_FORM_URL` - for financing form submissions
- `process.env.NEXT_PUBLIC_CONTACT_FORM_URL` - for contact form submissions (when implemented)

## Security Note

All variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Do not include sensitive data in these variables.
