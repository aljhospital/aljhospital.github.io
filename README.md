# Abdul Latif Jameel Hospital: Links Page

One link and one QR code that open a branded page with the hospital's website, app (App Store and Google Play) and social media accounts. Arabic and English, built for phones, free to host.

| File | What it is |
|---|---|
| `config.js` | ★ **The only file you edit.** Links, text, colours |
| `logo.png` | ★ **You add this.** The hospital logo |
| `index.html` | The links page |
| `app/` | Smart app link: iPhones go to the App Store, Android phones go to Google Play |
| `qr.html` | QR code maker (for the marketing team) |
| `assets/` | Design, icons, font. No need to touch |

---

## How it stays up (no maintenance)

* **Standalone:** the page is a handful of static files with no server, database, login or plugins. Nothing can "go down" except the host itself.
* **Hosted on GitHub Pages:** free, runs on a global CDN (Fastly), with automatic HTTPS. It serves sites for large companies and governments.
* **No outside dependencies:** fonts, icons and the QR generator are all inside the folder. No third-party service has to stay alive.
* **The QR code is permanent:** it contains only the address `https://links.aljhospital.com`. That address belongs to the hospital, so if you ever change host (Cloudflare Pages, the hospital's own server…), IT points the address at the new host and every printed code keeps working.
* **Safe to edit:** every change is versioned. Any old version can be restored in one click.
* **Mistyped addresses** (e.g. `links.aljhospital.com/insta`) land on the links page instead of an error.

---

## 1. Put it online (free, about 10 minutes)

We use **GitHub Pages**: free, no ads, very reliable, and you can edit from a browser.

1. Create a free account at **github.com**. Use a **hospital email** so the hospital owns it, not a person. Pick a username like `aljhospital-marketing`.
2. Click **+** (top right), then **New repository**. Name it `links`, choose **Public**, then click **Create repository**.
3. Click **"uploading an existing file"**. Drag in **everything in this folder** (`index.html`, `config.js`, `qr.html`, the `app` and `assets` folders) plus your `logo.png`. Click **Commit changes**.
4. Go to **Settings**, then **Pages**. Under *Branch*, choose `main` and `/ (root)`, then click **Save**.
5. After about a minute the page is live at `https://USERNAME.github.io/links/`.

## 2. Use the hospital's own address (do this before printing any QR code)

Ask IT to add **one DNS record**. aljhospital.com uses Cloudflare, so IT adds it in Cloudflare → DNS:

| Type | Name | Target | Proxy status |
|---|---|---|---|
| CNAME | `links` | `USERNAME.github.io` | **DNS only** (grey cloud) |

Then in GitHub go to **Settings**, then **Pages**. Under **Custom domain**, enter `links.aljhospital.com` and click **Save**. When the option appears (up to an hour), tick **Enforce HTTPS**.

> IT preference: the same folder can also be hosted on **Cloudflare Pages** (free, in the same Cloudflare account as aljhospital.com). The result is identical.

**Why it matters:** the QR code holds the *address*. If the address is the hospital's own, the page can move to any other host later and every printed QR code keeps working.

## 3. Make the QR codes

1. In `config.js`, set `siteUrl: "https://links.aljhospital.com"`.
2. Open **https://links.aljhospital.com/qr.html**.
3. Choose **Links page** (everything) or **App download** (goes straight to the right store, which suits app posters).
4. Choose **Black** (safest for print) or **Hospital red**. Download the **SVG** for print and the **PNG** for social media and screens.
5. **Test-scan with an iPhone and an Android phone before printing.**

The codes are standard "static" QR codes. They never expire, need no subscription, and do not depend on any QR website.

## 4. Edit links at any time (no reprinting needed)

1. On GitHub, open `config.js` and click the ✏️ pencil icon.
2. Change what you need, for example paste the Instagram link between the quotes:
   `{ type: "instagram", link: "https://www.instagram.com/..." },`
3. Click **Commit changes**. The page updates within a minute or two.

* **Hide a link:** make it empty: `link: ""`
* **Reorder:** move the lines up or down.
* **Change the logo:** upload a new `logo.png` (**Add file**, then **Upload files**). It replaces the old one.
* **Made a mistake?** Open `config.js` and click **History** to see and restore any old version.

## 5. Visit statistics (optional, free)

In Cloudflare, go to **Analytics & Logs**, then **Web Analytics**, then **Add a site**. Enter `links.aljhospital.com` and copy the token. Paste it into `config.js` as `cloudflareAnalyticsToken`. You will see how many people open the page each day, from which countries and devices. It uses no cookies, so no consent banner is needed.

## 6. Link preview on WhatsApp

When the address is final, open `index.html` and `app/index.html` and replace `YOUR-ADDRESS` with it (for example `links.aljhospital.com`). WhatsApp and X will then show the logo when the link is shared.

---

## Status

Done: logo, brand colours (from the hospital website), website, app links, Instagram, X, TikTok, YouTube, Facebook, LinkedIn, phone numbers, WhatsApp booking, email, map pin and opening hours.

Still to do:

- [ ] Optional: a higher-resolution or SVG logo for extra-sharp phone screens (replace `logo.png`).
- [ ] Snapchat link, when ready.
- [ ] Move to a hospital-owned address (GitHub organization and/or `links.aljhospital.com`).
- [ ] Then set `siteUrl` and replace `YOUR-ADDRESS`, make the final QR codes and test them before printing.
