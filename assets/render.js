/* Builds the links page from config.js. You should not need to edit this file. */
(function () {
  "use strict";

  // Brand icons from Simple Icons (CC0), 24×24 filled paths.
  var BRAND = {"instagram":"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077","x":"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z","linkedin":"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z","facebook":"M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z","youtube":"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z","tiktok":"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z","snapchat":"M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z","whatsapp":"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z","threads":"M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z","apple":"M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701","googleplay":"M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"};

  // Simple outline icons, 24×24 stroked paths.
  var LINE = {
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    email: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    location: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    smartphone: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  };

  var NAMES = {
    website:   { en: "Website", ar: "الموقع الإلكتروني" },
    instagram: { en: "Instagram", ar: "إنستغرام" },
    x:         { en: "X (Twitter)", ar: "إكس (تويتر)" },
    linkedin:  { en: "LinkedIn", ar: "لينكدإن" },
    facebook:  { en: "Facebook", ar: "فيسبوك" },
    youtube:   { en: "YouTube", ar: "يوتيوب" },
    tiktok:    { en: "TikTok", ar: "تيك توك" },
    snapchat:  { en: "Snapchat", ar: "سناب شات" },
    threads:   { en: "Threads", ar: "ثريدز" },
    whatsapp:  { en: "WhatsApp", ar: "واتساب" },
    phone:     { en: "Call us", ar: "اتصل بنا" },
    email:     { en: "Email us", ar: "راسلنا" },
    location:  { en: "Find us on the map", ar: "موقعنا على الخريطة" },
    calendar:  { en: "Book an appointment", ar: "احجز موعدك" },
  };

  var UI = {
    follow:   { en: "Follow us", ar: "تابعونا" },
    contact:  { en: "Get in touch", ar: "تواصل معنا" },
    iosTop:   { en: "Download on the", ar: "حمّله من" },
    andTop:   { en: "Get it on", ar: "احصل عليه من" },
    switchTo: { en: "عربي", ar: "English" },
    switchLabel: { en: "التبديل إلى العربية", ar: "Switch to English" },
    broken:   { en: "This page's settings could not be loaded.", ar: "تعذّر تحميل إعدادات الصفحة." },
  };

  // Each platform in its own official colours, on a light tile of that colour.
  var LOOK = {
    instagram: { bg: "#FFF0F6", gradient: true },
    x:         { bg: "#EFEFEF", fill: "#000000" },
    linkedin:  { bg: "#E8F1FB", fill: "#0A66C2" },
    facebook:  { bg: "#E8F0FF", fill: "#0866FF" },
    youtube:   { bg: "#FFECEC", fill: "#FF0000" },
    tiktok:    { bg: "#EFEFEF", tiktok: true },
    snapchat:  { bg: "#FFFC00", fill: "#FFFFFF", stroke: "#000000" },
    threads:   { bg: "#EFEFEF", fill: "#000000" },
    whatsapp:  { bg: "#E6F9EE", fill: "#25D366" },
  };
  var gradientId = 0;

  function brandSvg(name) {
    var look = LOOK[name], d = BRAND[name], defs = "", body, box = "0 0 24 24";
    if (look.gradient) { // Instagram gradient
      var id = "ig-grad-" + (++gradientId);
      defs = '<defs><linearGradient id="' + id + '" x1="0" y1="1" x2="1" y2="0">' +
        '<stop offset="0" stop-color="#FFD600"/><stop offset=".28" stop-color="#FF7A00"/>' +
        '<stop offset=".55" stop-color="#FF0069"/><stop offset=".8" stop-color="#D300C5"/>' +
        '<stop offset="1" stop-color="#7638FA"/></linearGradient></defs>';
      body = '<path fill="url(#' + id + ')" d="' + d + '"/>';
    } else if (look.tiktok) { // TikTok cyan/pink offset
      box = "-1 -1 26 26";
      body = '<path fill="#25F4EE" transform="translate(-.6 -.5)" d="' + d + '"/>' +
        '<path fill="#FE2C55" transform="translate(.6 .5)" d="' + d + '"/>' +
        '<path fill="#000000" d="' + d + '"/>';
    } else if (look.stroke) { // Snapchat white ghost, black outline
      box = "-1 -1 26 26";
      body = '<path fill="' + look.fill + '" stroke="' + look.stroke + '" stroke-width="1.15" stroke-linejoin="round" d="' + d + '"/>';
    } else {
      body = '<path fill="' + look.fill + '" d="' + d + '"/>';
    }
    return '<svg viewBox="' + box + '" aria-hidden="true">' + defs + body + "</svg>";
  }

  function icon(name, cls) {
    var svg;
    if (LOOK[name] && (cls === "row-ico" || cls === "main-ico")) {
      var s = document.createElement("span");
      s.className = cls + " brand";
      s.style.background = LOOK[name].bg;
      s.innerHTML = brandSvg(name);
      return s;
    }
    if (BRAND[name]) {
      svg = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="' + BRAND[name] + '"/></svg>';
    } else {
      svg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (LINE[name === "website" ? "globe" : name] || LINE.link) + "</svg>";
    }
    var span = document.createElement("span");
    span.className = cls || "ico";
    span.innerHTML = svg;
    return span;
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function pick(obj, lang) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] || obj.en || obj.ar || "";
  }

  // Turn what the editor typed into a real link.
  function href(item) {
    var v = String(item.link || "").trim();
    if (!v) return "";
    var digits = v.replace(/[^\d+]/g, "");
    switch (item.type) {
      case "phone":    return /^tel:/i.test(v) ? v : "tel:" + digits;
      case "whatsapp": return /^https?:/i.test(v) ? v : "https://wa.me/" + digits.replace(/^\+/, "");
      case "email":    return /^mailto:/i.test(v) ? v : "mailto:" + v;
      default:         return /^[a-z]+:/i.test(v) ? v : "https://" + v;
    }
  }

  // The small grey line under each link: @handle, domain, number…
  function detail(item, lang) {
    if (item.note) return pick(item.note, lang);
    var v = String(item.link || "").trim();
    if (item.type === "phone" || item.type === "whatsapp") {
      return "⁦" + v.replace(/^tel:/i, "").replace(/^https?:\/\/wa\.me\//i, "+") + "⁩";
    }
    if (item.type === "email") return v.replace(/^mailto:/i, "");
    try {
      var u = new URL(href(item));
      var host = u.hostname.replace(/^www\./, "");
      var seg = u.pathname.split("/").filter(Boolean);
      if (item.type === "website" || item.type === "calendar" || !seg.length) return host;
      var handle = seg[seg.length - 1].replace(/^@/, "");
      if (item.type === "linkedin" || item.type === "youtube" && !/^@/.test(seg[0])) return host + "/" + seg.join("/");
      return "⁦@" + handle + "⁩";
    } catch (e) {
      return "";
    }
  }

  function visible(list) {
    return (list || []).filter(function (it) { return it && String(it.link || "").trim(); });
  }

  function storeButton(kind, url, lang) {
    var a = el("a", "store");
    a.href = url;
    a.setAttribute("data-store", kind);
    a.appendChild(icon(kind === "ios" ? "apple" : "googleplay", "store-ico"));
    var t = el("span", "store-txt");
    t.appendChild(el("small", null, pick(kind === "ios" ? UI.iosTop : UI.andTop, lang)));
    t.appendChild(el("strong", null, kind === "ios" ? "App Store" : "Google Play"));
    t.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    a.appendChild(t);
    return a;
  }

  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }

  function appStores(app, lang) {
    var wrap = el("div", "stores");
    var ios = app && String(app.ios || "").trim();
    var and = app && String(app.android || "").trim();
    var buttons = [];
    if (ios) buttons.push(storeButton("ios", ios, lang));
    if (and) buttons.push(storeButton("android", and, lang));
    // Show the visitor's own store first (App Store first on iPhone and computers).
    if (/Android/i.test(navigator.userAgent)) buttons.reverse();
    buttons.forEach(function (b) { wrap.appendChild(b); });
    return buttons.length ? wrap : null;
  }

  function row(item, lang) {
    var a = el("a", "row");
    a.href = href(item);
    a.appendChild(icon(item.type, "row-ico"));
    var txt = el("span", "row-txt");
    txt.appendChild(el("strong", null, pick(item.label, lang) || pick(NAMES[item.type], lang) || item.type));
    var d = detail(item, lang);
    if (d) txt.appendChild(el("small", null, d));
    a.appendChild(txt);
    a.appendChild(icon("chevron", "row-chev"));
    return a;
  }

  function mainButton(item, lang) {
    var a = el("a", "main-btn");
    a.href = href(item);
    a.appendChild(icon(item.type, "main-ico"));
    var txt = el("span", "main-txt");
    txt.appendChild(el("strong", null, pick(item.label, lang) || pick(NAMES[item.type], lang)));
    var d = detail(item, lang);
    if (d) txt.appendChild(el("small", null, d));
    a.appendChild(txt);
    a.appendChild(icon("chevron", "main-chev"));
    return a;
  }

  function listSection(title, items, lang) {
    items = visible(items);
    if (!items.length) return null;
    var s = el("section", "block");
    s.appendChild(el("h2", "block-title", pick(title, lang)));
    var card = el("div", "card list");
    items.forEach(function (it) { card.appendChild(row(it, lang)); });
    s.appendChild(card);
    return s;
  }

  function chooseLang(cfg) {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "ar" || q === "en") return q;
    try {
      var saved = localStorage.getItem("aljh-lang");
      if (saved === "ar" || saved === "en") return saved;
    } catch (e) {}
    if (cfg.defaultLanguage === "ar" || cfg.defaultLanguage === "en") return cfg.defaultLanguage;
    var langs = navigator.languages || [navigator.language || "en"];
    return /^ar\b/i.test(langs[0] || "") ? "ar" : "en";
  }

  function analytics(cfg) {
    var t = String(cfg.cloudflareAnalyticsToken || "").trim();
    if (!t || !/^https?:$/.test(location.protocol) || document.getElementById("cf-beacon")) return;
    var s = document.createElement("script");
    s.id = "cf-beacon";
    s.defer = true;
    s.src = "https://static.cloudflareinsights.com/beacon.min.js";
    s.setAttribute("data-cf-beacon", JSON.stringify({ token: t }));
    document.head.appendChild(s);
  }

  function applyBrand(cfg, root) {
    analytics(cfg);
    var c = cfg.colors || {};
    var st = document.documentElement.style;
    if (c.primary) st.setProperty("--primary", c.primary);
    if (c.text) st.setProperty("--text", c.text);
  }

  function header(cfg, lang, root, onToggle) {
    var h = el("header", "hero");
    var tog = el("button", "lang", pick(UI.switchTo, lang));
    tog.type = "button";
    tog.setAttribute("lang", lang === "ar" ? "en" : "ar");
    tog.setAttribute("aria-label", pick(UI.switchLabel, lang));
    tog.addEventListener("click", onToggle);
    h.appendChild(tog);

    if (cfg.logo) {
      var lw = el("div", "logo");
      var img = new Image();
      img.alt = ""; // the name is in the heading below (visually hidden while the logo shows)
      img.decoding = "async";
      h.classList.add("has-logo");
      img.onerror = function () { lw.remove(); h.classList.remove("has-logo"); h.classList.add("no-logo"); };
      img.src = root + cfg.logo;
      lw.appendChild(img);
      h.appendChild(lw);
    } else {
      h.classList.add("no-logo");
    }
    h.appendChild(el("h1", "name", pick(cfg.name, lang)));
    var tl = pick(cfg.tagline, lang);
    if (tl) h.appendChild(el("p", "tagline", tl));
    else h.classList.add("no-tagline");
    return h;
  }

  function appCard(cfg, lang) {
    var stores = appStores(cfg.app, lang);
    if (!stores) return null;
    var s = el("section", "card app");
    var head = el("div", "app-head");
    head.appendChild(icon("smartphone", "app-ico"));
    var t = el("div");
    t.appendChild(el("h2", "app-title", pick(cfg.app.title, lang)));
    var sub = pick(cfg.app.subtitle, lang);
    if (sub) t.appendChild(el("p", "app-sub", sub));
    head.appendChild(t);
    s.appendChild(head);
    s.appendChild(stores);
    return s;
  }

  function setLang(lang, cfg) {
    var html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    var n = pick(cfg.name, lang);
    document.title = pick(cfg.name, "en") + " | " + pick(cfg.name, "ar");
    return n;
  }

  // ---------------------------------------------------------------- pages

  function renderHome(mount, root) {
    var cfg = window.SITE;
    if (!cfg) return broken(mount);
    applyBrand(cfg, root);
    var lang = chooseLang(cfg);

    function draw() {
      setLang(lang, cfg);
      mount.innerHTML = "";
      mount.appendChild(header(cfg, lang, root, function () {
        lang = lang === "ar" ? "en" : "ar";
        try { localStorage.setItem("aljh-lang", lang); } catch (e) {}
        draw();
      }));

      var main = el("main", "content");
      var mains = visible(cfg.main);
      if (mains.length) {
        var m = el("section", "block mains");
        mains.forEach(function (it) { m.appendChild(mainButton(it, lang)); });
        main.appendChild(m);
      }
      var ac = appCard(cfg, lang);
      if (ac) main.appendChild(ac);
      var follow = listSection(UI.follow, cfg.social, lang);
      if (follow) main.appendChild(follow);
      var contact = listSection(UI.contact, cfg.contact, lang);
      var hours = pick(cfg.hours, lang);
      if (hours) {
        if (!contact) { contact = el("section", "block"); }
        var hrs = el("p", "hours");
        hrs.appendChild(icon("clock", "hours-ico"));
        hrs.appendChild(el("span", null, hours));
        contact.appendChild(hrs);
      }
      if (contact) main.appendChild(contact);
      mount.appendChild(main);

      var f = el("footer", "foot", "© " + new Date().getFullYear() + " " + pick(cfg.name, lang));
      mount.appendChild(f);
    }
    draw();
  }

  // /app/ : sends phones straight to the right store, shows both on computers.
  function renderApp(mount, root) {
    var cfg = window.SITE;
    if (!cfg) return broken(mount);
    var app = cfg.app || {};
    var ua = navigator.userAgent;
    var stay = new URLSearchParams(location.search).has("stay");
    if (!stay) {
      if (isIOS() && app.ios) return location.replace(app.ios);
      if (/Android/i.test(ua) && app.android) return location.replace(app.android);
    }
    applyBrand(cfg, root);
    var lang = chooseLang(cfg);
    function draw() {
      setLang(lang, cfg);
      mount.innerHTML = "";
      mount.appendChild(header(cfg, lang, root, function () {
        lang = lang === "ar" ? "en" : "ar";
        try { localStorage.setItem("aljh-lang", lang); } catch (e) {}
        draw();
      }));
      var main = el("main", "content");
      var ac = appCard(cfg, lang);
      if (ac) main.appendChild(ac);
      var back = el("a", "back", lang === "ar" ? "كل روابطنا ←" : "All our links →");
      back.href = root || "./";
      main.appendChild(back);
      mount.appendChild(main);
    }
    draw();
  }

  function broken(mount) {
    var lang = /^ar\b/i.test(navigator.language || "") ? "ar" : "en";
    mount.innerHTML = "";
    var p = el("p", "broken", pick(UI.broken, lang));
    mount.appendChild(p);
    console.error("config.js failed to load or has a typo. Check the browser console for the line number.");
  }

  window.ALJH = { renderHome: renderHome, renderApp: renderApp };
})();
