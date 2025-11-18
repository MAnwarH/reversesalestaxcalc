# Contact Form Setup Instructions

## Overview
Your contact form is ready to use! It's configured to send emails to **md7anwarhossain@gmail.com** using Formspree - a free form backend service.

---

## Quick Setup (5 minutes)

### Step 1: Sign Up for Formspree (Free)

1. Go to https://formspree.io/register
2. Sign up using **md7anwarhossain@gmail.com** (or any email)
3. Confirm your email address

### Step 2: Create Your Form

1. After logging in, click **"+ New Form"**
2. Name it: `Reverse Sales Tax Calculator Contact`
3. Click **"Create Form"**
4. You'll see your unique form endpoint that looks like:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
   Example: `https://formspree.io/f/xwpezjbl`

### Step 3: Update contact.html

1. Open `contact.html`
2. Find line 75:
   ```html
   <form id="contact-form" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Replace `YOUR_FORM_ID` with your actual form ID from Step 2
4. Save the file

### Step 4: Configure Email Notifications

1. In Formspree dashboard, go to your form settings
2. Under "Notifications", ensure **md7anwarhossain@gmail.com** is the recipient
3. Customize email subject if desired (default: "New contact form submission from Reverse Sales Tax Calculator")
4. Save settings

---

## That's It!

Your contact form is now fully functional!

### How It Works:

1. User fills out the contact form on your website
2. Form submits to Formspree
3. Formspree validates and processes the submission
4. Email is sent to **md7anwarhossain@gmail.com**
5. User sees success message on your site

---

## Free Plan Limits

- ✅ **50 submissions per month** (free tier)
- ✅ Spam protection included
- ✅ Email notifications
- ✅ No branding required

If you need more than 50 submissions/month, upgrade to Formspree Gold ($10/month for 1,000 submissions).

---

## Alternative Options (if you prefer)

### Option 1: Web3Forms (Free Alternative)
- Similar to Formspree
- Unlimited submissions
- Sign up at https://web3forms.com
- Get access key and update form action

### Option 2: EmailJS (Client-Side)
- Completely free
- Sign up at https://www.emailjs.com
- Requires JavaScript SDK
- Good for unlimited submissions

---

## Testing Your Form

After setup:

1. Go to https://reversesalestaxcalc.com/contact.html
2. Fill out the form with test data
3. Click "Send Message"
4. Check **md7anwarhossain@gmail.com** for the email
5. You should see success message on the website

---

## Spam Protection

Built-in features:
- ✅ Honeypot field (hidden from users, catches bots)
- ✅ Formspree spam filtering
- ✅ reCAPTCHA can be added if needed

To add reCAPTCHA (optional):
1. Get reCAPTCHA keys from Google: https://www.google.com/recaptcha
2. Add to Formspree form settings
3. Update contact.html with reCAPTCHA widget

---

## Troubleshooting

**Problem: Emails not arriving**
- Check spam folder
- Verify email in Formspree settings
- Check Formspree dashboard for submission logs

**Problem: Form shows error**
- Verify form ID is correct in contact.html
- Check browser console for errors
- Ensure form action URL is correct

**Problem: Success message not showing**
- Check redirect URL in form settings
- Verify JavaScript is enabled

---

## Support

- **Formspree Docs:** https://help.formspree.io
- **Your Form Dashboard:** https://formspree.io/forms (after login)

---

## Summary

**Files Modified:**
- ✅ contact.html (needs form ID update)

**What You Need:**
1. Formspree account (free)
2. Your unique form ID
3. 2 minutes to update contact.html

**Result:**
- Working contact form
- Emails sent to md7anwarhossain@gmail.com
- Professional user experience
- Spam protection included

Happy emailing! 📧
