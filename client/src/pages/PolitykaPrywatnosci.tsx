import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PolitykaPrywatnosci() {
  const { t, i18n } = useTranslation();
  const privacyData = t("pages.privacy.sections", { returnObjects: true }) as {
    title: string;
    content?: string;
    items?: string[];
  }[];
  const lastUpdate = new Date().toLocaleDateString(i18n.language);

  return (
    <>
      <Helmet>
        <title>
          {t("pages.privacy.title")} - {t("site.name")}
        </title>
        <meta
          name="description"
          content={`${t("pages.privacy.title")} - ${t("site.name")}`}
        />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-8">
              <Link href="/">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t("pages.common.backToHome")}
                </Button>
              </Link>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                {t("pages.privacy.title")}
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="glass-effect rounded-2xl p-8">
                {Array.isArray(privacyData) &&
                  privacyData.map((section, index) => (
                    <div key={index}>
                      <h2>{section.title}</h2>
                      {section.content && <p>{section.content}</p>}
                      {section.items && (
                        <ul>
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                <p className="text-sm text-gray-500 mt-8">
                  {t("pages.common.lastUpdated")}: {lastUpdate}
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
