/* =====================================================================
   ABDUL LATIF JAMEEL HOSPITAL: LINKS PAGE SETTINGS
   This is the ONLY file you need to edit.

   How to edit safely:
   • Change only the text between the "quotes".
   • Keep every comma, quote and bracket where it is.
   • To HIDE a link, leave its link empty:   link: ""
   • To SHOW a link, paste its address:      link: "https://..."
   • The order of the items below is the order on the page.
   • If the page goes blank after an edit, there is a typo here.
     Undo the last change (GitHub keeps every old version).
   ===================================================================== */

window.SITE = {

  /* ---------- Name & look ---------- */
  name: {
    en: "Abdul Latif Jameel Hospital",
    ar: "مستشفى عبداللطيف جميل",
  },
  tagline: {
    en: "Medical Rehabilitation & Specialty Care · Jeddah",
    ar: "التأهيل الطبي والرعاية التخصصية · جدة",
  },

  // Upload the hospital logo next to this file, named exactly logo.png.
  // A logo with a transparent or white background works best.
  // If the file is missing, the page shows the name only.
  logo: "logo.png",

  // Optional: a square version of the logo (just the emblem) for the middle
  // of the QR code, e.g. "logo-square.png". Leave "" to use logo.png.
  qrLogo: "",

  // Brand colours (hex codes from the brand guidelines).
  // primary = the hospital red (buttons, icons, accents). Keep it dark enough for white text on it.
  // text    = main text colour (black).
  // The page background is white.
  colors: {
    primary: "#E63038",
    text: "#000000",
  },

  // "auto" = Arabic for Arabic phones, English for everyone else.
  // Or force one language: "ar" or "en".
  defaultLanguage: "auto",

  // The final public address of this page, once it is live,
  // e.g. "https://links.aljhospital.com". The QR code maker uses it.
  siteUrl: "",

  // Optional, free visit statistics (how many people opened the page / scanned the QR).
  // Create a free "Web Analytics" site in Cloudflare and paste its token here.
  cloudflareAnalyticsToken: "",


  /* ---------- Main buttons (top of the page) ---------- */
  main: [
    {
      type: "website",
      link: "https://www.aljhospital.com",
      label: { en: "Visit our website", ar: "زوروا موقعنا الإلكتروني" },
    },
    // Example of an extra button. Remove the two slashes (//) to use it:
    // { type: "calendar", link: "https://...", label: { en: "Book an appointment", ar: "احجز موعدك" } },
  ],


  /* ---------- Mobile app ---------- */
  app: {
    title:    { en: "Download our app", ar: "حمّل تطبيقنا" },
    subtitle: { en: "Book appointments, view lab results and more.",
                ar: "احجز مواعيدك واطّلع على نتائج التحاليل والمزيد." },
    ios:     "https://apps.apple.com/sa/app/abdul-latif-jameel-hospital/id6451068088",
    android: "https://play.google.com/store/apps/details?id=com.aljHospital",
  },


  /* ---------- Social media ("Follow us") ----------
     Supported types: instagram, x, linkedin, facebook, youtube,
                      tiktok, snapchat, threads, whatsapp            */
  social: [
    { type: "instagram", link: "" },   // e.g. "https://www.instagram.com/aljhospital"
    { type: "x",         link: "https://x.com/aljhospital" },
    { type: "snapchat",  link: "" },   // e.g. "https://www.snapchat.com/add/..."
    { type: "tiktok",    link: "https://www.tiktok.com/@alj.hospital" },
    { type: "linkedin",  link: "https://www.linkedin.com/company/aljhospital" },
    { type: "facebook",  link: "" },
    { type: "youtube",   link: "" },
  ],


  /* ---------- Contact ----------
     phone:    just the number, e.g. "+966126770001"
     whatsapp: just the number, e.g. "+9665XXXXXXXX"
     email:    just the address
     location: a Google Maps link                                   */
  contact: [
    { type: "phone",    link: "+966 12 677 0001" },
    { type: "whatsapp", link: "+966 54 631 2344", label: { en: "Book on WhatsApp", ar: "احجز عبر واتساب" } },
    { type: "phone",    link: "+966 56 609 9540", label: { en: "Patient relations", ar: "علاقات المرضى" } },
    { type: "email",    link: "info@aljhospital.com" },
    { type: "location", link: "https://www.google.com/maps/search/?api=1&query=Abdul+Latif+Jameel+Hospital+Jeddah",
      note: { en: "Prince Saud Ibn Abdullah Ibn Jalawi St, Jeddah", ar: "شارع الأمير سعود بن عبدالله بن جلوي، جدة" } },
  ],

  // Opening hours, shown under the contact list. Leave "" to hide.
  hours: {
    en: "Saturday – Thursday · 9:00 AM – 10:00 PM",
    ar: "السبت – الخميس · 9:00 ص – 10:00 م",
  },
};
