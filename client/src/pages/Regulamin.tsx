import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Regulamin() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('pages.terms.title')} - {t('site.name')}</title>
        <meta name="description" content={`${t('pages.terms.title')} - ${t('site.name')}`} />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-8">
              <Link href="/">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Powrót do strony głównej
                </Button>
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                {t('pages.terms.title')}
              </h1>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="glass-effect rounded-2xl p-8">
                <h2>1. Postanowienia ogólne</h2>
                <p>
                  Niniejszy regulamin określa zasady korzystania z serwisu FutureAI, 
                  dostępnego pod adresem internetowym oraz związanych z nim usług.
                </p>

                <h2>2. Definicje</h2>
                <p>
                  <strong>Serwis</strong> - witryna internetowa FutureAI oraz wszystkie 
                  związane z nią funkcjonalności i usługi.
                </p>
                <p>
                  <strong>Użytkownik</strong> - osoba fizyczna korzystająca z Serwisu.
                </p>

                <h2>3. Zasady korzystania</h2>
                <p>
                  Korzystanie z Serwisu jest bezpłatne i nie wymaga rejestracji. 
                  Użytkownik zobowiązuje się do korzystania z Serwisu zgodnie z jego 
                  przeznaczeniem i obowiązującymi przepisami prawa.
                </p>

                <h2>4. Własność intelektualna</h2>
                <p>
                  Wszystkie treści publikowane w Serwisie, w tym teksty, grafiki, 
                  logotypy, stanowią własność intelektualną FutureAI i są chronione 
                  przepisami prawa autorskiego.
                </p>

                <h2>5. Wyłączenie odpowiedzialności</h2>
                <p>
                  Serwis ma charakter edukacyjny i informacyjny. Treści prezentowane 
                  w Serwisie nie stanowią porady prawnej, finansowej ani inwestycyjnej.
                </p>

                <h2>6. Postanowienia końcowe</h2>
                <p>
                  Regulamin może być zmieniany. O wszelkich zmianach Użytkownicy będą 
                  informowani poprzez publikację nowej wersji regulaminu w Serwisie.
                </p>

                <p className="text-sm text-gray-500 mt-8">
                  Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
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
