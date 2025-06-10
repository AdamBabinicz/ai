import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasNavbarBg = isScrolled || mobileMenuOpen;

  const navLinks = [
    { labelKey: "nav.home", anchorKey: "nav.anchors.home" },
    { labelKey: "nav.howItWorks", anchorKey: "nav.anchors.howItWorks" },
    { labelKey: "nav.showcase", anchorKey: "nav.anchors.showcase" },
    { labelKey: "nav.generator", anchorKey: "nav.anchors.generator" },
    { labelKey: "nav.myths", anchorKey: "nav.anchors.myths" },
  ];

  const scrollToSection = (anchor: string) => {
    setMobileMenuOpen(false);

    setTimeout(() => {
      const sectionId = `#${anchor}`;
      if (location !== "/") {
        window.location.href = `/${sectionId}`;
      } else {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 300);
  };

  // NOWA FUNKCJA DO OBSŁUGI KLIKNIĘCIA W LOGO
  const scrollToTop = () => {
    scrollToSection(t("nav.anchors.home"));
  };

  const renderLinks = () =>
    navLinks.map((link) => (
      <button
        key={link.labelKey}
        onClick={() => scrollToSection(t(link.anchorKey))}
        className={`transition-colors duration-200 py-2 text-base ${
          hasNavbarBg
            ? "text-muted-foreground hover:text-foreground"
            : "text-white/80 hover:text-white"
        }`}
      >
        {t(link.labelKey)}
      </button>
    ));

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          hasNavbarBg ? "glass-effect shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* ZMIANA: <Link> ZASTĄPIONY PRZEZ <button> */}
            <button
              onClick={scrollToTop}
              aria-label={t("nav.home")}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <img
                  src="/assets/2.avif"
                  alt="logo AI"
                  className="w-72 aspect-[227/218] object-contain"
                />
              </div>
              <span className="text-xl font-bold gradient-text">
                {t("site.name")}
              </span>
            </button>
            {/* KONIEC ZMIANY */}

            <nav className="hidden md:flex items-center space-x-6">
              {renderLinks()}
            </nav>

            <div className="flex items-center space-x-2">
              <div className="hidden md:flex items-center space-x-2">
                <LanguageSelector />
                <ThemeToggle />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu
                  size={24}
                  className={`transition-all ${
                    hasNavbarBg ? "text-foreground" : "text-white"
                  } ${mobileMenuOpen ? "hidden" : "block"}`}
                />
                <X
                  size={24}
                  className={`transition-all ${
                    hasNavbarBg ? "text-foreground" : "text-white"
                  } ${mobileMenuOpen ? "block" : "hidden"}`}
                />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-20 left-0 w-full glass-effect md:hidden z-40 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col">
              <nav className="flex flex-col items-start space-y-2">
                {renderLinks()}
              </nav>
              <div className="border-t border-border mt-4 pt-4 flex justify-start items-center space-x-4">
                <LanguageSelector
                  onAction={() => setMobileMenuOpen(false)}
                  variant="inline"
                />
                <ThemeToggle onAction={() => setMobileMenuOpen(false)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
