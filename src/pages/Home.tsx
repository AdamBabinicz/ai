import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { AIShowcaseSection } from "@/sections/AIShowcaseSection";
import { GeneratorSection } from "@/sections/GeneratorSection";
import { MythsSection } from "@/sections/MythsSection";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("site.title")}</title>
        <meta name="description" content={t("hero.subtitle")} />
        <meta property="og:title" content={t("site.title")} />
        <meta property="og:description" content={t("hero.subtitle")} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorksSection />
          <AIShowcaseSection />
          <GeneratorSection />
          <MythsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
