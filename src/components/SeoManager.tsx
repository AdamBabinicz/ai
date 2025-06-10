import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import { routes } from "@/routes"; // Zakładamy, że to jest nasz plik konfiguracyjny
import i18n from "@/i18n";

// Typy i funkcje pomocnicze (powinny być w osobnym pliku, np. /lib/routing.ts)
const supportedLngs = ["pl", "en"] as const;
type SupportedLanguage = (typeof supportedLngs)[number];
const defaultLang: SupportedLanguage = "pl";

const getPathByKey = (key: string, lang: SupportedLanguage): string => {
  const route = routes.find((r) => r.key === key);
  return route ? route.paths[lang] : "/";
};

const getKeyFromPath = (
  path: string,
  lang: SupportedLanguage
): string | null => {
  for (const route of routes) {
    if (route.paths[lang] === path) {
      return route.key;
    }
  }
  return null;
};
// Koniec typów i funkcji pomocniczych

interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

interface BreadcrumbListSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbItem[];
}

export function SeoManager() {
  const { t } = useTranslation();
  const [locationPath] = useLocation();

  const baseUrl = "https://neural-core.netlify.app/";
  const pathOnly = locationPath.split("#")[0];

  const pageKey =
    getKeyFromPath(pathOnly, i18n.language as SupportedLanguage) || "home";

  const canonicalUrl = `${baseUrl}${getPathByKey(
    pageKey,
    i18n.language as SupportedLanguage
  )}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": baseUrl,
    name: t("site.name"),
    url: baseUrl,
    logo: `${baseUrl}/favicons/android-chrome-512x512.png`, // Upewnij się, że ten plik istnieje
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: t("site.name"),
    url: baseUrl,
    inLanguage: i18n.language,
  };

  const getBreadcrumbList = (): BreadcrumbListSchema | null => {
    if (pageKey === "home") return null; // Nie pokazuj breadcrumbs na stronie głównej

    const homePath = getPathByKey("home", i18n.language as SupportedLanguage);
    const currentPagePath = getPathByKey(
      pageKey,
      i18n.language as SupportedLanguage
    );

    const itemList: BreadcrumbItem[] = [
      {
        "@type": "ListItem",
        position: 1,
        name: t("nav.home"),
        item: `${baseUrl}${homePath}`,
      },
    ];

    if (pageKey !== "home") {
      let pageTitle = "";
      if (pageKey === "terms") pageTitle = t("pages.terms.title");
      if (pageKey === "privacy") pageTitle = t("pages.privacy.title");

      itemList.push({
        "@type": "ListItem",
        position: 2,
        name: pageTitle,
        item: `${baseUrl}${currentPagePath}`,
      });
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: itemList,
    };
  };

  const breadcrumbSchema = getBreadcrumbList();

  const alternateLinks = supportedLngs.map((lng) => (
    <link
      key={lng}
      rel="alternate"
      hrefLang={lng}
      href={`${baseUrl}${getPathByKey(pageKey, lng)}`}
    />
  ));

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      {alternateLinks}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}${getPathByKey(pageKey, defaultLang)}`}
      />
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
