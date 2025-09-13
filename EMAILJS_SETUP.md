# EmailJS Setup Guide

This guide will help you set up EmailJS to enable contact form functionality on your landing page.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Configure Your Application

1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id', 
  PUBLIC_KEY: 'your_actual_public_key',
  TO_EMAIL: 'your-email@example.com'
};
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the contact form submission

## Template Variables

The contact form sends these variables to your email template:

- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email address
- `{{subject}}` - Message subject
- `{{message}}` - User's message
- `{{to_email}}` - Your email address

## Troubleshooting

### Common Issues:

1. **"Invalid service ID"** - Double-check your Service ID in the config
2. **"Template not found"** - Verify your Template ID
3. **"Invalid public key"** - Ensure your Public Key is correct
4. **Emails not received** - Check your spam folder and email service settings

### Testing:

- Use the EmailJS dashboard to test your template
- Check browser console for any JavaScript errors
- Verify all configuration values are correct

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to use in client-side code
- EmailJS handles rate limiting and spam protection

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

For higher limits, consider upgrading to a paid plan.
