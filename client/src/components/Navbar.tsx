import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";

export function Navbar() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '/', section: '#home' },
    { key: 'howItWorks', href: '/', section: '#how-it-works' },
    { key: 'showcase', href: '/', section: '#ai-showcase' },
    { key: 'generator', href: '/', section: '#generator' },
    { key: 'myths', href: '/', section: '#myths' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location !== '/') {
      window.location.href = `/${sectionId}`;
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white h-5 w-5" />
              </div>
              <span className="text-xl font-bold gradient-text">{t('site.name')}</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className="hover:text-blue-400 transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glass-effect hover:bg-white/10 dark:hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 glass-effect rounded-lg p-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className="block py-2 hover:text-blue-400 transition-colors duration-200 w-full text-left"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
