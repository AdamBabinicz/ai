import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Menu, X, Zap } from "lucide-react";
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

  const navLinks = [
    { labelKey: "nav.howItWorks", anchorKey: "nav.anchors.howItWorks" },
    { labelKey: "nav.showcase", anchorKey: "nav.anchors.showcase" },
    { labelKey: "nav.generator", anchorKey: "nav.anchors.generator" },
    { labelKey: "nav.myths", anchorKey: "nav.anchors.myths" },
  ];

  const scrollToSection = (anchor: string) => {
    const sectionId = `#${anchor}`;
    if (location !== "/") {
      window.location.href = `/${sectionId}`;
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const renderLinks = () =>
    navLinks.map((link) => (
      <button
        key={link.labelKey}
        onClick={() => scrollToSection(t(link.anchorKey))}
        className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 text-base"
      >
        {t(link.labelKey)}
      </button>
    ));

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "glass-effect shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* ZMIANA TUTAJ: Usunięty wewnętrzny tag <a> */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white h-5 w-5" />
              </div>
              <span className="text-xl font-bold gradient-text">
                {t("site.name")}
              </span>
            </Link>

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
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                <LanguageSelector />
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
