# Cognitive Sovereignty Foundation — Website MVP

A minimal, academic website for the Cognitive Sovereignty Foundation. Pure HTML/CSS, optimized for performance and accessibility, ready for deployment on Vercel.

## 📋 Contents

- `index.html` — Landing page
- `paper.html` — Full working paper (v2) with sticky table of contents
- `style.css` — Academic design system (mobile-first, serif typography)
- `vercel.json` — Vercel routing and security headers configuration
- `README.md` — This file

## 🚀 Deploy to Vercel in 3 Steps

### Step 1: Fork and Set Up GitHub Repository

1. **Clone this repository locally:**
   ```bash
   git clone https://github.com/[YOUR-GITHUB-USERNAME]/cognitive-sovereignty-website.git
   cd cognitive-sovereignty-website
   ```

2. **Create a GitHub repository** (if not already forked):
   - Go to [github.com/new](https://github.com/new)
   - Name it `cognitive-sovereignty-website`
   - Push your code:
     ```bash
     git remote set-url origin https://github.com/[YOUR-GITHUB-USERNAME]/cognitive-sovereignty-website.git
     git push -u origin main
     ```

### Step 2: Connect to Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign up (or log in)
2. Click **"New Project"**
3. Select **"Import Git Repository"**
4. Choose your GitHub repository: `cognitive-sovereignty-website`
5. Leave default settings as-is (Vercel will auto-detect the setup)
6. Click **"Deploy"**

**That's it!** Vercel will automatically build and deploy your site. You'll get a live URL like `cognitive-sovereignty-website.vercel.app`.

### Step 3: Set Up a Custom Domain (Optional)

1. **In Vercel dashboard**, go to your project → **Settings → Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `cognitivesovereignty.org`)
4. Follow DNS configuration instructions:
   - For **root domain** (`cognitivesovereignty.org`): Point DNS A record to Vercel's IP
   - For **subdomain** (`www.cognitivesovereignty.org`): Add CNAME record pointing to your Vercel URL
5. DNS changes take 5-30 minutes to propagate

#### Example DNS Setup (Cloudflare):

If using **Cloudflare** as your DNS provider:

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | @ | `76.76.19.132` | Proxied ⚠️ → DNS only |
| CNAME | www | `cname.vercel-dns.com` | DNS only |

**Important:** Use **DNS only** (gray cloud icon), not proxied. Vercel handles SSL automatically.

---

## 📐 Project Structure

```
cognitive-sovereignty-website/
├── index.html              # Landing page
├── paper.html              # Full working paper
├── style.css              # Styles (mobile-first, responsive)
├── vercel.json            # Vercel configuration
└── README.md              # This file
```

**No build step required.** Files are served as-is.

---

## 🎨 Design Notes

- **Mobile-first approach:** Base styles for 480px, optimized up to 1200px+
- **Typography:** Georgia serif + strong contrast (white/black)
- **Academic aesthetic:** Minimal, clean, legible
- **Performance:** No JavaScript, no external dependencies
- **Accessibility:** Semantic HTML, high contrast, responsive layout

---

## 🔒 Security Headers (Vercel)

The included `vercel.json` sets these security headers automatically:

- `X-Content-Type-Options: nosniff` — Prevent MIME type sniffing
- `X-Frame-Options: SAMEORIGIN` — Prevent clickjacking
- `X-XSS-Protection` — Legacy XSS protection
- `Referrer-Policy` — Control referrer information
- `Permissions-Policy` — Disable geolocation, camera, microphone
- `Cache-Control` — 1-hour cache for HTML

---

## 🔄 Updating Content

Edit the `.html` files directly. Changes auto-deploy when you push to GitHub:

```bash
git add .
git commit -m "Update content"
git push origin main
```

Vercel redeploys automatically within seconds.

---

## 📧 Contact

- **Email:** contact@cognitivesovereignty.org
- **GitHub:** [Cognitive Sovereignty Foundation](https://github.com/cognitive-sovereignty)

---

## 📄 License

© 2026 Cognitive Sovereignty Foundation. All rights reserved.

This work is licensed under **Creative Commons Attribution 4.0 International** (CC BY 4.0).
You are free to share, adapt, and redistribute, with attribution.

---

## ✅ Checklist Before Going Live

- [ ] Update email signup form action (currently `action="#"`)
- [ ] Set up custom domain and DNS
- [ ] Test on mobile (use Vercel Preview links)
- [ ] Verify all links work (index.html ↔ paper.html)
- [ ] Update contact email if different
- [ ] Review paper.html for accuracy
- [ ] Test print layout (paper.html should look good when printed)

---

## 🆘 Troubleshooting

**Deploy fails?**
- Check `vercel.json` syntax (validate JSON)
- Ensure all HTML files are in root directory
- Check GitHub repo is public or Vercel has access

**Custom domain not working?**
- DNS changes take 5-30 minutes
- Double-check DNS records match Vercel's requirements
- Use `dig cognitivesovereignty.org` to verify DNS propagation

**Links broken?**
- Ensure filenames match exactly (case-sensitive)
- Test with Vercel's preview deployment first

---

**Built with intent. Deployed with care.**
