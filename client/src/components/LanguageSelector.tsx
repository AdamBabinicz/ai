import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="glass-effect hover:bg-white/10 dark:hover:bg-white/10 gap-2"
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">
            {currentLang === 'pl' ? 'PL' : 'EN'}
          </span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="glass-effect border border-white/20">
        <DropdownMenuItem 
          onClick={() => changeLanguage('pl')}
          className="hover:bg-white/10 dark:hover:bg-white/10"
        >
          🇵🇱 Polski
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')}
          className="hover:bg-white/10 dark:hover:bg-white/10"
        >
          🇬🇧 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
