import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { aiPredictions } from "@/lib/utils";

export function InteractiveGenerator() {
  const { t, i18n } = useTranslation();
  const [generatedText, setGeneratedText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const generatePrediction = async () => {
    setIsLoading(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const predictions = aiPredictions[i18n.language as keyof typeof aiPredictions] || aiPredictions.pl;
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    
    setGeneratedText(randomPrediction);
    setIsLoading(false);
  };

  return (
    <div className="glass-effect rounded-2xl p-8 md:p-12 text-center">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-[120px] flex items-center justify-center mb-8"
          >
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-blue-500 mx-auto mb-4 animate-spin" />
              <p className="text-blue-600 text-lg">{t('generator.loading')}</p>
            </div>
          </motion.div>
        ) : generatedText ? (
          <motion.div
            key="generated"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-[120px] flex items-center justify-center mb-8"
          >
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-blue-500 mx-auto mb-4 animate-pulse" />
              <p className="text-2xl md:text-3xl text-foreground font-light leading-relaxed">
                {generatedText}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-[120px] flex items-center justify-center mb-8"
          >
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-4 animate-pulse" />
              <p className="text-2xl md:text-3xl text-gray-400 italic">
                {t('generator.placeholder')}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={generatePrediction}
        disabled={isLoading}
        className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 glow-effect"
      >
        <Sparkles className="w-5 h-5 mr-2" />
        {t('generator.button')}
      </Button>
    </div>
  );
}
