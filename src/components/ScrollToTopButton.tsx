import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollToTopButton() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // ZMIANA: Dodajemy animację po najechaniu myszką
          whileHover={{ scale: 1.1, rotate: -5 }}
          // ZMIANA: Definiujemy typ przejścia dla animacji
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
            duration: 0.3,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            size="icon"
            // ZMIANA: Dodajemy klasę `group`, aby umożliwić animację ikony wewnątrz
            className="rounded-full w-12 h-12 shadow-lg group"
            onClick={scrollToTop}
            aria-label={t("pages.common.scrollToTop")}
          >
            <ArrowUp
              // ZMIANA: Dodajemy animację dla ikony
              className="h-6 w-6 transition-transform duration-200 group-hover:-translate-y-1"
            />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
