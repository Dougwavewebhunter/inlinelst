export const BRAND = {
  name: "Inline Granite",
  tagline: "Granite • Quartz • Marble Installation",
  phone: "+27786165887",
  phoneDisplay: "+27 78 616 5887",
  whatsapp: "27786165887",
  email: "info@inlightgranite.co.za",
  address: "South Africa",
  domain: "www.inlinegranite.co.za",
  credit: {
    name: "WebDevPro",
    url: "https://www.webdevpro.co.za",
    phone: "+27812159792",
  },
};

export const waLink = (msg = "Hi Inline Granite, I'd like a quote.") =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`;