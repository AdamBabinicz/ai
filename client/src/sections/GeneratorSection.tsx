import { useTranslation } from "react-i18next";
import { InteractiveGenerator } from "@/components/InteractiveGenerator";
import { motion } from "framer-motion";

export function GeneratorSection() {
  const { t } = useTranslation();

  return (
    <section id="generator" className="py-20 bg-gray-900 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('generator.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('generator.description')}
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <InteractiveGenerator />
        </motion.div>
      </div>
    </section>
  );
}
