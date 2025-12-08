# n8n Webhook Setup Guide

## Why CORS Errors Occur

When you make a fetch request from your browser (client-side) to a different origin (like `localhost:5678`), the browser enforces CORS (Cross-Origin Resource Sharing) policy. If the server doesn't explicitly allow your origin, the request is blocked.

## Solution: Use Next.js API Route (Proxy)

Instead of calling n8n directly from the browser, we use a Next.js API route that:
1. Runs on the server (same origin as your frontend)
2. Makes the request to n8n server-side (no CORS restrictions)
3. Returns the response to your frontend

## Setting Up Your n8n Webhook URL

### Option 1: Full Webhook URL (Recommended)

In your `.env.local`, set the **complete webhook URL** including the path:

```env
NEXT_PUBLIC_N8N_WEBHOOK_BASE=http://localhost:5678/webhook-test/form-submission
```

**Important:**
- ✅ Use hyphens (`-`) instead of spaces in the path
- ✅ Include the full path to your webhook
- ✅ No trailing slash

### Option 2: Base URL Only

If you set just the base URL:

```env
NEXT_PUBLIC_N8N_WEBHOOK_BASE=http://localhost:5678
```

The API route will append `/webhook/contact` automatically.

## Getting Your n8n Webhook URL

1. Open your n8n workflow
2. Click on the **Webhook** node
3. Click **Test URL** or copy the webhook URL
4. It should look like: `http://localhost:5678/webhook-test/[workflow-name]`
5. Copy the **entire URL** including the path

## Common Issues

### Issue 1: Spaces in URL Path
❌ **Wrong:** `http://localhost:5678/webhook-test/form submission/contact`
✅ **Correct:** `http://localhost:5678/webhook-test/form-submission/contact`

**Fix:** Rename your n8n workflow to use hyphens instead of spaces.

### Issue 2: Wrong Path
Make sure your webhook URL includes the complete path from n8n. The path usually includes:
- `/webhook-test/` or `/webhook/`
- Your workflow name
- Any additional path segments

### Issue 3: n8n Not Running
Make sure n8n is running on `localhost:5678`. You can test by visiting:
```
http://localhost:5678
```

## Testing

1. Start your Next.js dev server: `npm run dev`
2. Start n8n (if running locally)
3. Submit the contact form
4. Check the browser console for any errors
5. Check n8n workflow execution logs

## Production Deployment

For production:
1. Use your production n8n instance URL
2. Update `.env.local` or Vercel environment variables
3. Make sure the URL is accessible from your hosting provider

Example production URL:
```env
NEXT_PUBLIC_N8N_WEBHOOK_BASE=https://your-n8n-instance.com/webhook/contact-form
```

