import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { routes } from "@/routes";
import { Twitter, Github, Facebook } from "lucide-react";
import { useLocation } from "wouter";

export function Footer() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const currentLang = i18n.language as "pl" | "en";

  const getPath = (key: string) => {
    const route = routes.find((r) => r.key === key);
    return route ? route.paths[currentLang] : "/";
  };

  const foundingYear = 2025;
  const currentYear = new Date().getFullYear();
  const yearDisplay =
    currentYear > foundingYear
      ? `${foundingYear} - ${currentYear}`
      : foundingYear;

  // Ta sama logika co w Navbarze, dla spójności
  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    anchor: string
  ) => {
    if (location === "/") {
      event.preventDefault();
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${anchor}`);
      }
    }
  };

  const navLinks = [
    { labelKey: "nav.home", anchorKey: "nav.anchors.home" },
    { labelKey: "nav.howItWorks", anchorKey: "nav.anchors.howItWorks" },
    { labelKey: "nav.showcase", anchorKey: "nav.anchors.showcase" },
    { labelKey: "nav.generator", anchorKey: "nav.anchors.generator" },
    { labelKey: "nav.myths", anchorKey: "nav.anchors.myths" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <img
                  src="/assets/2.avif"
                  alt="logo AI"
                  className="w-72 aspect-[227/218] object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xl font-bold gradient-text">
                {t("site.name")}
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://x.com/AdamBabinicz"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/adam.gierczak.334"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/AdamBabinicz"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("footer.navigation")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              {navLinks.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={`/#${t(link.anchorKey)}`}
                    onClick={(e) => handleSmoothScroll(e, t(link.anchorKey))}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("footer.legal")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href={getPath("terms")}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link
                  href={getPath("privacy")}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t("footer.copyright", { year: yearDisplay })}</p>
        </div>
      </div>
    </footer>
  );
}
