import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import { SeoManager } from "./components/SeoManager";
import { queryClient } from "./lib/queryClient";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { routes } from "./routes";

import NotFound from "@/pages/not-found";

function Router() {
  useScrollToTop();
  const currentLang = i18n.language as "pl" | "en";

  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.key}
          path={route.paths[currentLang]}
          component={route.component}
        />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <SeoManager />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TooltipProvider>
            <Helmet>
              <title>{t("site.title")}</title>
              <meta name="description" content={t("hero.subtitle")} />
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
