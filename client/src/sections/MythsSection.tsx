import { useTranslation } from "react-i18next";
import { MythBusterCard } from "@/components/MythBusterCard";
import { motion } from "framer-motion";

export function MythsSection() {
  const { t } = useTranslation();

  const myths = ["myth1", "myth2", "myth3", "myth4", "myth5", "myth6"];

  return (
    <section id={t("nav.anchors.myths")} className="py-20 parallax-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t("myths.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("myths.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {myths.map((mythKey, index) => (
            <MythBusterCard key={mythKey} mythKey={mythKey} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
