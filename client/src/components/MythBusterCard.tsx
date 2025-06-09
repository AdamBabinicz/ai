import { useTranslation } from "react-i18next";
import { XCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface MythBusterCardProps {
  mythKey: string;
  index: number;
}

export function MythBusterCard({ mythKey, index }: MythBusterCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-effect rounded-xl p-6 hover:bg-white/10 dark:hover:bg-white/10 transition-colors group"
    >
      {/* Myth Section */}
      <div className="mb-4">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">
            <XCircle className="w-5 h-5 text-red-400" />
          </div>
          <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold">
            {t('myths.mythLabel')}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
          {t(`myths.${mythKey}.myth`)}
        </h3>
      </div>

      {/* Fact Section */}
      <div className="border-t border-gray-700 pt-4">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
            {t('myths.factLabel')}
          </span>
        </div>
        <p className="text-gray-300">
          {t(`myths.${mythKey}.fact`)}
        </p>
      </div>
    </motion.div>
  );
}
