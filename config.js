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

  // The hospital logo, next to this file. A transparent or white background works best.
  // While the logo shows, the typed name above is hidden (the logo already contains it).
  // If the file is missing, the page shows the typed name instead.
  logo: "logo.png",

  // The square emblem, used in the middle of the QR code.
  // (icon.png / favicon.png are the browser-tab and home-screen icons.)
  qrLogo: "logo-mark.png",

  // Brand colours (hex codes from the brand guidelines).
  // primary = the hospital red (buttons, icons, accents). Keep it dark enough for white text on it.
  // text    = main text colour (black).
  // The page background is white.
  colors: {
    primary: "#E63038",
    text: "#000000",
    qrGreen: "#007A3D",   // only used for the "Green" option in the QR code maker
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
    { type: "instagram", link: "https://www.instagram.com/alj_hospital" },
    { type: "x",         link: "https://x.com/aljhospital" },
    { type: "tiktok",    link: "https://www.tiktok.com/@alj.hospital" },
    { type: "snapchat",  link: "" },   // e.g. "https://www.snapchat.com/add/..."
    { type: "youtube",   link: "https://www.youtube.com/@abdullatifjameelhospital7396",
      note: { en: "Abdul Latif Jameel Hospital", ar: "مستشفى عبداللطيف جميل" } },
    { type: "facebook",  link: "https://www.facebook.com/profile.php?id=61554454365157",
      note: { en: "Abdul Latif Jameel Hospital", ar: "مستشفى عبداللطيف جميل" } },
    { type: "linkedin",  link: "https://www.linkedin.com/company/aljhospital/posts/",
      note: { en: "Abdul Latif Jameel Hospital", ar: "مستشفى عبداللطيف جميل" } },
  ],


  /* ---------- Contact ----------
     phone:    just the number, e.g. "+966126770001"
               add  whatsapp: true  to show both "Call" and "WhatsApp" buttons
     whatsapp: just the number, e.g. "+9665XXXXXXXX"
     email:    just the address
     location: a Google Maps link                                   */
  contact: [
    { type: "phone",    link: "+966 12 677 0001" },
    { type: "whatsapp", link: "+966 54 631 2344", label: { en: "Book on WhatsApp", ar: "احجز عبر واتساب" } },
    { type: "phone",    link: "+966 56 609 9540", label: { en: "Patient relations", ar: "علاقات المرضى" }, whatsapp: true },
    { type: "email",    link: "info@aljhospital.com" },
    { type: "location", link: "https://maps.app.goo.gl/a2DJxtPF9EqhjwLJA",
      note: { en: "Prince Saud Ibn Abdullah Ibn Jalawi St, Jeddah", ar: "شارع الأمير سعود بن عبدالله بن جلوي، جدة" } },
  ],

  // Opening hours, shown under the contact list. Leave "" to hide.
  hours: {
    en: "Saturday – Thursday · 9:00 AM – 10:00 PM",
    ar: "السبت – الخميس · 9:00 ص – 10:00 م",
  },
};
