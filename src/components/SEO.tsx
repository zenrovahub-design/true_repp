import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({
  title = "TrueRepp – 5-Star Google Reviews & Profile Boost",
  description = "Collect authentic 5-star Google reviews and resolve customer complaints privately. TrueRepp rapidly boosts your Google Online Profile and search ranking.",
  canonical = "https://truerepp.com/",
  noindex = false,
  ogImage = "https://truerepp.com/og-image.jpg",
  ogType = "website",
}: SEOProps) {
  useEffect(() => {
    // 1. Update title
    document.title = title;

    // Helper to set or create meta tags
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // 2. Standard description
    setMetaTag("name", "description", description);

    // 3. Search Engine Robots directive
    setMetaTag("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    // 4. OpenGraph tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonical);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:type", ogType);

    // 5. Twitter Cards
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // 6. Canonical link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);
  }, [title, description, canonical, noindex, ogImage, ogType]);

  return null;
}
