import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import { queryClient } from "./lib/queryClient";
import { useScrollToTop } from "./hooks/useScrollToTop";

import Home from "@/pages/Home";
import Regulamin from "@/pages/Regulamin";
import PolitykaPrywatnosci from "@/pages/PolitykaPrywatnosci";
import NotFound from "@/pages/not-found";

function Router() {
  useScrollToTop();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/regulamin" component={Regulamin} />
      <Route path="/polityka-prywatnosci" component={PolitykaPrywatnosci} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TooltipProvider>
            <Helmet>
              <title>{t('site.title')}</title>
              <meta name="description" content={t('hero.subtitle')} />
            </Helmet>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
