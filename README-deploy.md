# Deploy to Cloudflare Pages — 3 Steps

This is a static site (HTML/CSS/JavaScript). No build step required. Deploy directly to Cloudflare Pages for free, instant global CDN, and HTTPS.

---

## Step 1: Push to Git Repository

If not already in Git:

```bash
cd /path/to/web/
git init
git add index.html paper.html style.css
git commit -m "Initial commit: Cognitive Sovereignty Foundation website"
git remote add origin https://github.com/YOUR_USERNAME/cognitive-sovereignty.git
git push -u origin main
```

If already in Git:

```bash
git add index.html paper.html style.css
git commit -m "Add website: index, paper, styles"
git push origin main
```

---

## Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Pages Dashboard](https://pages.cloudflare.com)
2. Click **"Create a project"** → **"Connect to Git"**
3. Authorize GitHub and select your repository
4. Choose branch: **main**
5. **Build Settings:**
   - **Build command:** (leave empty — static site, no build)
   - **Build output directory:** `/` (or `.`)
   - Framework: **None**
6. Click **"Save and Deploy"**

Cloudflare will deploy immediately. You'll get a URL like:
```
https://cognitive-sovereignty.pages.dev
```

---

## Step 3: Connect Custom Domain (Optional but Recommended)

1. In Cloudflare Pages project, go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter: `cognitivesovereignty.org`
4. Cloudflare will prompt you to configure DNS. If you don't own the domain yet:
   - Register at [Namecheap](https://www.namecheap.com), [Porkbun](https://porkbun.com), or similar
   - Update nameservers to Cloudflare's (Cloudflare will provide these)
   - Wait 24-48 hours for DNS propagation

Once configured, your site is live at:
```
https://cognitivesovereignty.org
```

---

## That's It

Your site is now:
- ✅ Deployed globally with Cloudflare CDN (fast everywhere)
- ✅ HTTPS enabled (free, automatic)
- ✅ Continuous deployment (push to GitHub → auto-deployed)
- ✅ Zero infrastructure to manage
- ✅ $0/month (Cloudflare Pages is free)

### Future Updates

Every time you push to `main` branch:
```bash
git add .
git commit -m "Update: description"
git push origin main
```

Cloudflare auto-deploys within seconds. No manual steps needed.

---

## Optional: Email Routing (Free)

To forward `contact@cognitivesovereignty.org` → your personal inbox:

1. In Cloudflare dashboard, go to **Email Routing**
2. Add routing rule:
   - **Address:** `contact@cognitivesovereignty.org`
   - **Routes to:** your email (e.g., founder@gmail.com)
3. Save

Now emails sent to `contact@cognitivesovereignty.org` land in your inbox automatically.

---

## Notes

- **No build step:** This is plain HTML/CSS. Cloudflare Pages serves it as-is.
- **Email forms:** The `<form>` in index.html has `action="#"`. To collect emails:
  - Option A: Use [Formspree](https://formspree.io/) (free tier, 50 submissions/month)
    - Change form action to: `https://formspree.io/f/YOUR_FORM_ID`
  - Option B: Use [Basin](https://usebasin.com/) or similar
  - Option C: Collect manually via `contact@cognitivesovereignty.org`

- **Analytics:** Currently no analytics. To add:
  - [Plausible](https://plausible.io/) ($9/month, privacy-focused)
  - [Umami](https://umami.is/) (self-hosted, free)
  - Add tracking code to `<head>` of index.html and paper.html

- **SEO:** Site is ready. Cloudflare Pages automatically serves over HTTPS and supports sitemaps. Add `robots.txt` if needed:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://cognitivesovereignty.org/sitemap.xml
  ```

---

**Questions?** Cloudflare Pages docs: https://developers.cloudflare.com/pages/

---

*Cognitive Sovereignty Foundation | 2026*
