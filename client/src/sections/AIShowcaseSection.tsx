import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Play, Image, Music, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Typewriter effect component
function TypewriterEffect({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    
    return () => clearInterval(timer);
  }, [text]);
  
  return (
    <div>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block"
      >
        |
      </motion.span>
    </div>
  );
}

export function AIShowcaseSection() {
  const { t } = useTranslation();
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const handleTryDemo = (type: string) => {
    setActiveDemo(type);
    
    // Simulate demo activation
    setTimeout(() => {
      setActiveDemo(null);
    }, 3000);
  };

  const showcaseItems = [
    {
      type: 'image',
      icon: Image,
      titleKey: 'showcase.image.title',
      descKey: 'showcase.image.desc',
      content: (
        <motion.div
          className="relative rounded-lg overflow-hidden"
          animate={activeDemo === 'image' ? { scale: [1, 1.02, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="w-72 h-48 relative">
            <img 
              src="/assets/ai-generated-image.png" 
              alt="AI Generated Futuristic Portrait"
              className="w-72 h-48 rounded-lg shadow-lg object-cover"
            />
            
            {/* Generation overlay */}
            {activeDemo === 'image' && (
              <motion.div 
                className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-center text-white">
                  <motion.div
                    className="text-2xl mb-2"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    🎨
                  </motion.div>
                  <div className="font-semibold">Generating image...</div>
                  <div className="text-sm opacity-80">"Futuristic AI portrait"</div>
                  
                  {/* Progress bar */}
                  <div className="w-32 bg-white/30 rounded-full h-1 mt-3 mx-auto">
                    <motion.div
                      className="bg-blue-400 h-1 rounded-full"
                      animate={{ width: ['0%', '100%'] }}
                      transition={{ duration: 2.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )
    },
    {
      type: 'video',
      icon: Play,
      titleKey: 'showcase.video.title',
      descKey: 'showcase.video.desc',
      content: (
        <div className="w-72 h-48 rounded-lg shadow-lg relative overflow-hidden">
          <video 
            className="w-72 h-48 rounded-lg shadow-lg object-cover"
            controls
            poster="/assets/ai-generated-image.png"
            preload="metadata"
          >
            <source src="/assets/ai-generated-video.mp4" type="video/mp4" />
            Twoja przeglądarka nie obsługuje elementu video.
          </video>
          
          {/* Generation overlay - only when demo is active */}
          {activeDemo === 'video' && (
            <motion.div 
              className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-center text-white">
                <motion.div
                  className="text-2xl mb-2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  🎬
                </motion.div>
                <div className="font-semibold">Processing video...</div>
                <div className="text-sm opacity-80">"AI Generated Content"</div>
                
                {/* Progress bar */}
                <div className="w-32 bg-white/30 rounded-full h-1 mt-3 mx-auto">
                  <motion.div
                    className="bg-blue-400 h-1 rounded-full"
                    animate={{ width: ['0%', '100%'] }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )
    },
    {
      type: 'music',
      icon: Music,
      titleKey: 'showcase.music.title',
      descKey: 'showcase.music.desc',
      content: (
        <div className="w-72 h-48 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 rounded-lg shadow-lg flex flex-col items-center justify-center p-4 relative overflow-hidden">
          {/* Audio player */}
          <div className="w-full mb-4">
            <audio 
              controls
              className="w-full h-12 bg-black/20 rounded-lg"
              preload="metadata"
            >
              <source src="/assets/ai-generated-music.mp3" type="audio/mpeg" />
              Twoja przeglądarka nie obsługuje elementu audio.
            </audio>
          </div>

          {/* Audio waveform visualization */}
          <div className="flex items-end space-x-1 mb-4 h-16">
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-cyan-400 to-purple-400 rounded-full"
                animate={{ 
                  height: activeDemo === 'music' 
                    ? [
                        Math.sin(i * 0.3) * 20 + 25,
                        Math.sin(i * 0.3 + Math.PI/2) * 25 + 30,
                        Math.sin(i * 0.3 + Math.PI) * 20 + 25,
                        Math.sin(i * 0.3 + 3*Math.PI/2) * 30 + 25
                      ]
                    : [
                        Math.sin(i * 0.2) * 10 + 15,
                        Math.sin(i * 0.2 + Math.PI/4) * 15 + 20,
                        Math.sin(i * 0.2 + Math.PI/2) * 10 + 15
                      ]
                }}
                transition={{ 
                  duration: activeDemo === 'music' ? 0.4 : 0.8,
                  repeat: Infinity, 
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* Floating notes */}
          {activeDemo === 'music' && [...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/60 text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: [0, 1, 0],
                y: [30, -15],
                x: [Math.random() * 150, Math.random() * 150],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {['♪', '♫', '♬', '♩'][i]}
            </motion.div>
          ))}
          
          <div className="text-white/90 text-sm font-medium text-center z-10">
            {activeDemo === 'music' ? '🎵 Composing...' : '♪ "AI Generated Music" ♪'}
            <div className="text-xs text-white/70 mt-1">
              {activeDemo === 'music' ? 'Generating harmonies...' : 'AI Composed Track'}
            </div>
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
        <div className="w-72 h-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-3">
            <FileText className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {activeDemo === 'text' ? '✍️ AI Writing...' : 'AI Generated Article'}
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <motion.div className="text-xs leading-relaxed text-gray-700 dark:text-gray-300 h-full">
              {activeDemo === 'text' ? (
                <TypewriterEffect 
                  text="Artificial Intelligence is revolutionizing the way we work and live. From automating complex tasks to providing intelligent insights, AI systems are becoming increasingly sophisticated. Modern language models can understand context, generate creative content, and assist with problem-solving across diverse fields including healthcare, finance, and education..."
                />
              ) : (
                <div>
                  <p className="mb-2 font-semibold">How AI Transforms Industries</p>
                  <p className="mb-1">Artificial Intelligence is revolutionizing the way we work and live. From automating complex tasks to providing intelligent insights...</p>
                  <p className="mb-1">Modern language models can understand context, generate creative content, and assist with problem-solving...</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">✨ Generated by AI in 2.3 seconds</p>
                </div>
              )}
            </motion.div>
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

                <div className="mb-4 flex justify-center min-h-[200px] items-center">
                  <div className="relative">
                    {item.content}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleTryDemo(item.type)}
                  disabled={activeDemo === item.type}
                  className="glass-effect border-blue-400/50 text-gray-800 dark:text-white bg-white/20 dark:bg-transparent hover:bg-white/30 dark:hover:bg-white/10 disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {activeDemo === item.type ? t('showcase.processing', 'Processing...') : t('showcase.tryButton')}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}