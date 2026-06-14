# Portfolio Website (Next.js)

A portfolio website built with **Next.js (App Router) + TypeScript + Tailwind CSS**. The contact form is powered by a Next.js Route Handler at `app/api/contact/route.ts` (Nodemailer) — there is no separate backend server.

## 🎯 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env.local` file in the root directory:

```env
# Email Configuration for Contact Form
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-digit-app-password
CONTACT_EMAIL=where-you-want-to-receive-emails@gmail.com
```

> Next.js loads `.env.local` automatically — no `dotenv` needed. The app runs on port **3000**.

### 3. Gmail Setup (REQUIRED for contact form)

#### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click "Security" in the left sidebar
3. Under "Signing in to Google", click "2-Step Verification"
4. Follow the setup process

#### Step 2: Generate App Password
1. In Google Account Settings → Security
2. Under "Signing in to Google", click "App passwords"
3. Select "Mail" and "Other (custom name)"
4. Enter "Portfolio Contact Form"
5. Copy the 16-digit password (no spaces)
6. Use this password in `EMAIL_PASS` (NOT your regular Gmail password)

### 4. Run the Application
```bash
# Start the dev server (frontend + API routes) on http://localhost:3000
npm run dev

# Production build + start
npm run build
npm run start
```

## 🔧 Contact Form Features

### ✅ What Works:
- **Email Notifications**: You receive emails when someone submits the form
- **Auto-Reply**: Users get a confirmation email
- **Form Validation**: Checks for required fields and valid email
- **Error Handling**: Shows helpful error messages
- **Responsive Design**: Works on all devices
- **Theme Support**: Adapts to light/dark themes

### 📧 Email Templates:
- **Professional Design**: HTML emails with your branding
- **Contact Details**: Name, email, subject, and message
- **Auto-Reply**: Thank you message with next steps
- **Reply-To**: Easy to respond directly to the sender

## 🛠️ Troubleshooting

### Common Issues:

#### 1. "Network error" message
- **Solution**: Make sure the dev server is running with `npm run dev`
- **Check**: App is served at `http://localhost:3000`

#### 2. "Email service not configured" error
- **Solution**: Check your `.env.local` file has correct Gmail credentials (`EMAIL_USER` / `EMAIL_PASS`)
- **Note**: Restart the dev server after editing `.env.local`

#### 3. "Invalid credentials" error
- **Solution**: Use App Password, not regular Gmail password
- **Check**: 2-Factor Authentication must be enabled first

#### 4. Emails not sending
- **Solution**: Check Gmail security settings
- **Prefer**: Use an App Password

### 🧪 Testing the Setup:

#### Test the Contact Form:
1. Fill out the contact form on your website
2. Check the terminal logs (the API route logs errors there)
3. Check your email for notifications
4. Verify the sender receives the auto-reply

You can also exercise the endpoint directly:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"test@example.com","subject":"Hi","message":"Hello"}'
```

## 📁 File Structure

```
├── app/
│   ├── layout.tsx            # Root layout (fonts, metadata, providers)
│   ├── providers.tsx         # Client providers: theme + loading + Layout
│   ├── globals.css           # Global styles (Tailwind + custom CSS)
│   ├── page.tsx              # Home (/)
│   ├── about|skills|experience|projects|contact/page.tsx
│   └── api/contact/route.ts  # Contact form handler (Nodemailer)
├── components/               # Navbar, Footer, ScrollAnimatedSection, ...
├── contexts/ThemeContext.tsx # Light/dark theme + system sync
├── hooks/                    # useScrollAnimation, usePageLoading
├── .env.local                # Environment variables (create this)
├── .env.example              # Template for environment variables
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🚀 Deployment Notes

### For Production:
1. **Environment Variables**: Set `EMAIL_USER` / `EMAIL_PASS` / `CONTACT_EMAIL` on your hosting platform
2. **Email Service**: Consider using SendGrid, Mailgun, or AWS SES for higher deliverability
3. **Security**: Add rate limiting / spam protection to the contact route

### Hosting Options:
- **Recommended**: Vercel (first-class Next.js support — frontend and API routes deploy together)
- **Also works**: Netlify, Render, Railway, or any Node host running `next start`

## 📞 Support

If you encounter issues:
1. Check the console logs in the terminal
2. Verify your `.env.local` file configuration
3. Ensure the dev server is running (`npm run dev`)

## 🎨 Theme Sync Feature

The website now automatically syncs with your browser's theme preference:
- **First Visit**: Uses your system's dark/light mode preference
- **Manual Change**: Remembers your choice for future visits
- **System Change**: Auto-updates if you haven't manually set a preference

---

**Ready to receive contact form submissions! 🎉**