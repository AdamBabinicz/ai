import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { routes } from "@/routes";
import { Zap, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const currentLang = i18n.language as "pl" | "en";

  const getPath = (key: string) => {
    const route = routes.find((r) => r.key === key);
    return route ? route.paths[currentLang] : "/";
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white h-5 w-5" />
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
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
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
              <li>
                <a
                  href={`#${t("nav.anchors.home")}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href={`#${t("nav.anchors.howItWorks")}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("nav.howItWorks")}
                </a>
              </li>
              <li>
                <a
                  href={`#${t("nav.anchors.showcase")}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("nav.showcase")}
                </a>
              </li>
              <li>
                <a
                  href={`#${t("nav.anchors.generator")}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("nav.generator")}
                </a>
              </li>
              <li>
                <a
                  href={`#${t("nav.anchors.myths")}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t("nav.myths")}
                </a>
              </li>
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
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
