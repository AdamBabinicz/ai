import { useTranslation } from "react-i18next";
import { Database, Cpu, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorksSection() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Database,
      key: 'step1',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Cpu,
      key: 'step2',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Sparkles,
      key: 'step3',
      gradient: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-100 dark:bg-gray-800/50" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('howItWorks.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.key} className="relative">
                <motion.div
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-6">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto transition-transform`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {t(`howItWorks.${step.key}.title`)}
                  </h3>
                  
                  <p className="text-gray-300">
                    {t(`howItWorks.${step.key}.description`)}
                  </p>
                </motion.div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent transform translate-x-4">
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-6 h-6 text-blue-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
