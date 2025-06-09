import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Play, Image, Music, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AIShowcaseSection() {
  const { t } = useTranslation();

  const showcaseItems = [
    {
      type: 'image',
      icon: Image,
      titleKey: 'showcase.image.title',
      descKey: 'showcase.image.desc',
      content: (
        <svg width="280" height="200" viewBox="0 0 280 200" className="rounded-lg shadow-lg">
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#87CEEB" />
              <stop offset="100%" stopColor="#E0F6FF" />
            </linearGradient>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B7355" />
              <stop offset="100%" stopColor="#A0522D" />
            </linearGradient>
          </defs>
          {/* Sky */}
          <rect width="280" height="120" fill="url(#skyGradient)" />
          {/* Mountains */}
          <polygon points="0,120 80,60 160,90 280,40 280,120" fill="url(#mountainGradient)" />
          {/* Ground */}
          <rect y="120" width="280" height="80" fill="#90EE90" />
          {/* Sun */}
          <circle cx="220" cy="40" r="20" fill="#FFD700" />
          {/* Clouds */}
          <ellipse cx="60" cy="30" rx="25" ry="15" fill="white" opacity="0.8" />
          <ellipse cx="180" cy="25" rx="30" ry="18" fill="white" opacity="0.8" />
          {/* Trees */}
          <rect x="40" y="100" width="8" height="20" fill="#8B4513" />
          <circle cx="44" cy="95" r="12" fill="#228B22" />
          <rect x="200" y="105" width="6" height="15" fill="#8B4513" />
          <circle cx="203" cy="100" r="10" fill="#228B22" />
        </svg>
      )
    },
    {
      type: 'video',
      icon: Play,
      titleKey: 'showcase.video.title',
      descKey: 'showcase.video.desc',
      content: (
        <div className="w-70 h-50 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="z-10"
          >
            <Play className="w-16 h-16 text-white/80" />
          </motion.div>
          <div className="absolute bottom-2 left-2 text-white/70 text-xs">
            AI Generated: "Cosmic Journey"
          </div>
        </div>
      )
    },
    {
      type: 'music',
      icon: Music,
      titleKey: 'showcase.music.title',
      descKey: 'showcase.music.desc',
      content: (
        <div className="w-70 h-50 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg flex flex-col items-center justify-center p-4">
          <div className="flex space-x-1 mb-4">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 bg-white/80 rounded-full"
                animate={{ 
                  height: [20, Math.random() * 40 + 10, 20] 
                }}
                transition={{ 
                  duration: 0.5, 
                  repeat: Infinity, 
                  delay: i * 0.1 
                }}
              />
            ))}
          </div>
          <div className="text-white/90 text-sm font-medium text-center">
            ♪ "Ethereal Dreams" ♪
            <div className="text-xs text-white/70 mt-1">AI Composed</div>
          </div>
        </div>
      )
    },
    {
      type: 'text',
      icon: FileText,
      titleKey: 'showcase.text.title',
      descKey: 'showcase.text.desc',
      content: (
        <div className="w-70 h-50 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg p-4 flex flex-col">
          <div className="flex items-center mb-3">
            <FileText className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Article</span>
          </div>
          <div className="space-y-2 flex-1">
            <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
            <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-4/5"></div>
            <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
            <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Generated in 0.3s
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="ai-showcase" className="py-20" style={{ background: 'var(--section-alt-bg)' }}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('showcase.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('showcase.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.type}
                className="glass-effect rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {t(item.descKey)}
                  </p>
                </div>

                <div className="mb-4 flex justify-center">
                  {item.content}
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="glass-effect border-blue-400/50 text-gray-800 dark:text-white bg-white/20 dark:bg-transparent hover:bg-white/30 dark:hover:bg-white/10"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {t('showcase.tryButton')}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}