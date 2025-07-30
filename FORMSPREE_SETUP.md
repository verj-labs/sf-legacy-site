# Formspree Setup Guide for SF Legacy Motors

## Getting Started with Formspree

1. **Create Formspree Account**
   - Go to https://formspree.io/
   - Sign up for a free account
   - Verify your email address

2. **Create a New Form**
   - Click "New Form" in your dashboard
   - Name it "Used Car Financing Application"
   - Choose "React/AJAX" as the integration type

3. **Get Your Form ID**
   - After creating the form, you'll get a form endpoint like: `https://formspree.io/f/YOUR_FORM_ID`
   - Copy the `YOUR_FORM_ID` part (e.g., `xvoeqpkl`)

4. **Update the Financing Page**
   - Open `/src/app/financing/page.tsx`
   - Find line ~70: `const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {`
   - Replace `YOUR_FORM_ID` with your actual form ID

5. **Configure Form Settings in Formspree**
   - **Notification Email**: Set to your business email (e.g., info@sflegacymotors.com)
   - **Redirect URL**: Set to `https://yourwebsite.com/financing?submitted=true` (optional)
   - **Spam Protection**: Enable reCAPTCHA if desired
   - **File Uploads**: Enable if you want customers to upload documents

6. **Test the Integration**
   - Submit a test application through your website
   - Check that you receive the email notification
   - Verify all form fields are captured correctly

7. **Form Data You'll Receive**
   The form will send you all the customer data including:
   - Vehicle pricing information
   - Complete personal details
   - Employment information
   - Trade-in and co-applicant status
   - Document availability confirmation
   - Legal consent confirmation

## Formspree Pricing
- **Free**: 50 submissions/month
- **Bronze ($10/month)**: 1,000 submissions/month  
- **Gold ($20/month)**: 10,000 submissions/month

## Advanced Features (Optional)
- **Auto-responder**: Send confirmation emails to customers
- **Webhook integration**: Connect to your CRM or other tools
- **Custom thank you page**: Redirect after successful submission
- **Export data**: Download submissions as CSV

## Support
- Formspree documentation: https://formspree.io/guides/
- Contact Formspree support if you need help with setup
