import { useTranslation } from "react-i18next";
import { useLocation } from "wouter"; // Usunięty import 'navigate'
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

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [location, setLocation] = useLocation(); // Pobieramy funkcję do nawigacji

  const changeLanguage = (lng: SupportedLanguage) => {
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
      // Używamy setLocation zamiast navigate
      setLocation(newPath, { replace: true });
    });
  };

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
          onClick={() => changeLanguage("pl")}
          className="hover:bg-white/10 dark:hover:bg-white/10"
          disabled={i18n.language === "pl"}
        >
          🇵🇱 Polski
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          className="hover:bg-white/10 dark:hover:bg-white/10"
          disabled={i18n.language === "en"}
        >
          🇬🇧 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
