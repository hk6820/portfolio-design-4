## 📬 Enable Contact Form (EmailJS)

To receive form submissions in your email:

1. Go to [https://emailjs.com](https://emailjs.com) and create a free account.
2. Create a service (e.g., Gmail or Outlook)
3. Create an email template
4. Get your:
   - Service ID
   - Template ID
   - Public Key

5. Replace the placeholders in `src/utils/emailConfig.js`:

```js
export const EMAIL_SERVICE_ID = 'your_service_id';
export const EMAIL_TEMPLATE_ID = 'your_template_id';
export const EMAIL_PUBLIC_KEY = 'your_public_key';
