import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { routes } from "@/routes";

type SupportedLanguage = "pl" | "en";

// ZMIANA TUTAJ: Dodajemy 'variant' do interfejsu
interface LanguageSelectorProps {
  onAction?: () => void;
  variant?: "dropdown" | "inline";
}

export function LanguageSelector({
  onAction,
  variant = "dropdown", // Odbieramy 'variant' z domyślną wartością
}: LanguageSelectorProps) {
  const { i18n } = useTranslation();
  const [location, setLocation] = useLocation();

  const handleLanguageChange = (lng: SupportedLanguage) => {
    const currentLang = i18n.language as SupportedLanguage;
    const pathWithoutHash = location.split("#")[0];

    let currentKey = "home";
    for (const route of routes) {
      if (route.paths[currentLang] === pathWithoutHash) {
        currentKey = route.key;
        break;
      }
    }

    const newPath = routes.find((r) => r.key === currentKey)?.paths[lng] || "/";

    i18n.changeLanguage(lng).then(() => {
      setLocation(newPath, { replace: true });
    });

    onAction?.();
  };

  if (variant === "inline") {
    return (
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleLanguageChange("pl")}
          disabled={i18n.language === "pl"}
          className="glass-effect hover:bg-gray-200/20 dark:hover:bg-white/10 border border-gray-300/30 dark:border-white/20"
        >
          🇵🇱 PL
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleLanguageChange("en")}
          disabled={i18n.language === "en"}
          className="glass-effect hover:bg-gray-200/20 dark:hover:bg-white/10 border border-gray-300/30 dark:border-white/20"
        >
          🇬🇧 EN
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="glass-effect hover:bg-gray-200/20 dark:hover:bg-white/10 border border-gray-300/30 dark:border-white/20 gap-2"
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">
            {i18n.language.split("-")[0].toUpperCase()}
          </span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="glass-effect border border-white/20">
        <DropdownMenuItem
          onClick={() => handleLanguageChange("pl")}
          className="hover:bg-white/10 dark:hover:bg-white/10"
          disabled={i18n.language === "pl"}
        >
          🇵🇱 Polski
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("en")}
          className="hover:bg-white/10 dark:hover:bg-white/10"
          disabled={i18n.language === "en"}
        >
          🇬🇧 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
