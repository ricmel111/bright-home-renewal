export const SITE_NAME = "Lyttle Smart Homes";
export const BASE_URL = "https://lyttlesmarthomes.co.uk";
export const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/9154898e-6016-421e-9926-3584fe71ab60";

type PageSeoInput = {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
};

export function buildCanonicalUrl(path: string) {
  return new URL(path, BASE_URL).toString();
}

export function buildPageSeo({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
}: PageSeoInput) {
  const canonicalUrl = buildCanonicalUrl(path);
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;

  return {
    links: [{ rel: "canonical", href: canonicalUrl }],
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: resolvedOgTitle },
      { property: "og:description", content: resolvedOgDescription },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { property: "og:image:alt", content: "Lyttle Smart Homes branding image" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: resolvedOgTitle },
      { name: "twitter:description", content: resolvedOgDescription },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: BASE_URL,
    image: DEFAULT_OG_IMAGE,
    telephone: "+44 7447 089033",
    email: "hello@lyttlesmarthomes.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Glenarm",
      addressRegion: "Northern Ireland",
      addressCountry: "GB",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Northern Ireland",
      },
      {
        "@type": "Country",
        name: "Republic of Ireland",
      },
    ],
    serviceType: [
      "Smart home design",
      "Smart home installation",
      "Loxone integration",
      "Lighting automation",
      "Heating and climate control",
      "Home security automation",
    ],
  };
}
