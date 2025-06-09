import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PolitykaPrywatnosci() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('pages.privacy.title')} - {t('site.name')}</title>
        <meta name="description" content={`${t('pages.privacy.title')} - ${t('site.name')}`} />
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
                {t('pages.privacy.title')}
              </h1>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="glass-effect rounded-2xl p-8">
                <h2>1. Informacje ogólne</h2>
                <p>
                  Niniejsza polityka prywatności określa zasady przetwarzania i ochrony 
                  danych osobowych użytkowników serwisu FutureAI.
                </p>

                <h2>2. Administrator danych</h2>
                <p>
                  Administratorem danych osobowych jest FutureAI, odpowiedzialny za 
                  bezpieczne przetwarzanie powierzonych danych.
                </p>

                <h2>3. Zakres zbieranych danych</h2>
                <p>
                  Serwis może zbierać następujące dane:
                </p>
                <ul>
                  <li>Dane techniczne (adres IP, typ przeglądarki, system operacyjny)</li>
                  <li>Dane o aktywności w serwisie (odwiedzone strony, czas wizyty)</li>
                  <li>Dane z plików cookies (preferencje użytkownika)</li>
                </ul>

                <h2>4. Cel przetwarzania danych</h2>
                <p>
                  Dane są przetwarzane w celu:
                </p>
                <ul>
                  <li>Zapewnienia prawidłowego funkcjonowania serwisu</li>
                  <li>Analizy ruchu i optymalizacji witryny</li>
                  <li>Personalizacji doświadczeń użytkownika</li>
                </ul>

                <h2>5. Podstawa prawna</h2>
                <p>
                  Podstawą przetwarzania danych jest uzasadniony interes administratora 
                  (art. 6 ust. 1 lit. f RODO) oraz zgoda użytkownika (art. 6 ust. 1 lit. a RODO).
                </p>

                <h2>6. Czas przechowywania danych</h2>
                <p>
                  Dane są przechowywane przez czas niezbędny do realizacji celów, 
                  dla których zostały zebrane, nie dłużej niż przez 2 lata.
                </p>

                <h2>7. Prawa użytkowników</h2>
                <p>
                  Użytkownik ma prawo do:
                </p>
                <ul>
                  <li>Dostępu do swoich danych osobowych</li>
                  <li>Sprostowania nieprawidłowych danych</li>
                  <li>Usunięcia danych (prawo do bycia zapomnianym)</li>
                  <li>Ograniczenia przetwarzania</li>
                  <li>Przenoszenia danych</li>
                  <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                </ul>

                <h2>8. Cookies</h2>
                <p>
                  Serwis wykorzystuje pliki cookies w celu zapewnienia prawidłowego 
                  funkcjonowania oraz analizy ruchu. Użytkownik może zarządzać 
                  ustawieniami cookies w swojej przeglądarce.
                </p>

                <h2>9. Bezpieczeństwo</h2>
                <p>
                  Stosujemy odpowiednie środki techniczne i organizacyjne w celu 
                  ochrony danych osobowych przed nieuprawnionym dostępem, utratą czy zniszczeniem.
                </p>

                <h2>10. Kontakt</h2>
                <p>
                  W sprawach dotyczących ochrony danych osobowych można skontaktować 
                  się z nami poprzez formularz kontaktowy dostępny w serwisie.
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
