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
    
    // For music demo, simulate a more complex musical sequence
    if (type === 'music') {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const masterGain = audioContext.createGain();
        masterGain.connect(audioContext.destination);
        masterGain.gain.setValueAtTime(0.1, audioContext.currentTime);
        
        // Play a short melody sequence
        const notes = [440, 523.25, 659.25, 880, 659.25, 523.25]; // A4, C5, E5, A5, E5, C5
        
        notes.forEach((frequency, index) => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(masterGain);
          
          oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
          oscillator.type = 'sine';
          
          const startTime = audioContext.currentTime + index * 0.3;
          const endTime = startTime + 0.25;
          
          gainNode.gain.setValueAtTime(0, startTime);
          gainNode.gain.linearRampToValueAtTime(0.3, startTime + 0.05);
          gainNode.gain.exponentialRampToValueAtTime(0.001, endTime);
          
          oscillator.start(startTime);
          oscillator.stop(endTime);
        });
      } catch (error) {
        console.log('Audio not supported');
      }
    }
    
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
            {/* High-quality photorealistic landscape */}
            <svg width="288" height="192" viewBox="0 0 288 192" className="rounded-lg shadow-lg">
              <defs>
                <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B6B" />
                  <stop offset="30%" stopColor="#4ECDC4" />
                  <stop offset="70%" stopColor="#45B7D1" />
                  <stop offset="100%" stopColor="#96CEB4" />
                </linearGradient>
                <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2C3E50" />
                  <stop offset="50%" stopColor="#34495E" />
                  <stop offset="100%" stopColor="#7F8C8D" />
                </linearGradient>
                <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3498DB" />
                  <stop offset="100%" stopColor="#2980B9" />
                </linearGradient>
              </defs>
              
              {/* Sky with gradient */}
              <rect width="288" height="130" fill="url(#skyGradient)" />
              
              {/* Distant mountains */}
              <polygon points="0,100 60,60 120,75 180,45 240,65 288,50 288,130" fill="#5D6D7E" opacity="0.7" />
              
              {/* Main mountains */}
              <polygon points="0,130 40,80 90,95 140,70 200,85 260,75 288,85 288,130" fill="url(#mountainGradient)" />
              
              {/* Water reflection */}
              <rect y="130" width="288" height="35" fill="url(#waterGradient)" />
              
              {/* Water ripples */}
              {[...Array(8)].map((_, i) => (
                <motion.ellipse
                  key={i}
                  cx={40 + i * 30}
                  cy={140 + Math.sin(i) * 8}
                  rx="15"
                  ry="3"
                  fill="white"
                  opacity="0.1"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    rx: [15, 20, 15],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
              
              {/* Foreground */}
              <rect y="165" width="288" height="27" fill="#27AE60" />
              
              {/* Trees with detail */}
              <g>
                <rect x="30" y="140" width="4" height="25" fill="#8B4513" />
                <polygon points="25,135 32,120 39,135" fill="#228B22" />
                <circle cx="32" cy="130" r="8" fill="#2ECC71" />
              </g>
              
              <g>
                <rect x="180" y="145" width="3" height="20" fill="#8B4513" />
                <polygon points="176,142 181.5,130 187,142" fill="#1E8449" />
                <circle cx="181.5" cy="137" r="6" fill="#27AE60" />
              </g>
              
              {/* Sun with rays */}
              <motion.g>
                <circle cx="240" cy="35" r="18" fill="#F39C12" />
                {[...Array(8)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1={240 + Math.cos(i * Math.PI / 4) * 25}
                    y1={35 + Math.sin(i * Math.PI / 4) * 25}
                    x2={240 + Math.cos(i * Math.PI / 4) * 35}
                    y2={35 + Math.sin(i * Math.PI / 4) * 35}
                    stroke="#F1C40F"
                    strokeWidth="2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </motion.g>
              
              {/* Clouds with volume */}
              <g opacity="0.8">
                <ellipse cx="70" cy="40" rx="20" ry="12" fill="white" />
                <ellipse cx="85" cy="35" rx="25" ry="15" fill="white" />
                <ellipse cx="75" cy="45" rx="18" ry="10" fill="white" />
              </g>
              
              <g opacity="0.6">
                <ellipse cx="180" cy="25" rx="22" ry="14" fill="white" />
                <ellipse cx="195" cy="20" rx="28" ry="18" fill="white" />
                <ellipse cx="185" cy="30" rx="20" ry="12" fill="white" />
              </g>
            </svg>
            
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
                  <div className="text-sm opacity-80">"Sunset over mountains"</div>
                  
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
        <div className="w-72 h-48 bg-black rounded-lg shadow-lg relative overflow-hidden border border-gray-300">
          {/* Video frame simulation */}
          <div className="absolute inset-2 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 rounded">
            {/* Animated particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                animate={{
                  x: [Math.random() * 280, Math.random() * 280],
                  y: [Math.random() * 180, Math.random() * 180],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                }}
              />
            ))}
            
            {/* Moving geometric shapes */}
            <motion.div
              className="absolute w-8 h-8 border-2 border-white/60"
              animate={{
                rotate: [0, 360],
                x: [10, 240, 10],
                y: [20, 140, 20],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.div
              className="absolute w-6 h-6 bg-white/40 rounded-full"
              animate={{
                x: [200, 50, 200],
                y: [30, 120, 30],
                scale: [1, 1.5, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </div>
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="bg-black/50 rounded-full p-4"
              animate={activeDemo === 'video' ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <Play className="w-8 h-8 text-white fill-white" />
            </motion.div>
          </div>
          
          {/* Video controls */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white/80 text-xs">
            <span>{activeDemo === 'video' ? '🎬 Rendering...' : '▶ "Neural Network Visualization"'}</span>
            <span>2:34</span>
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
        <div className="w-72 h-48 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 rounded-lg shadow-lg flex flex-col items-center justify-center p-4 relative overflow-hidden">
          {/* Audio waveform */}
          <div className="flex items-end space-x-1 mb-4 h-24">
            {[...Array(32)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-cyan-400 to-purple-400 rounded-full"
                animate={{ 
                  height: activeDemo === 'music' 
                    ? [
                        Math.sin(i * 0.3) * 30 + 35,
                        Math.sin(i * 0.3 + Math.PI/2) * 40 + 40,
                        Math.sin(i * 0.3 + Math.PI) * 35 + 30,
                        Math.sin(i * 0.3 + 3*Math.PI/2) * 45 + 35
                      ]
                    : [
                        Math.sin(i * 0.2) * 15 + 20,
                        Math.sin(i * 0.2 + Math.PI/4) * 20 + 25,
                        Math.sin(i * 0.2 + Math.PI/2) * 15 + 20
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
          {activeDemo === 'music' && [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/60 text-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: [0, 1, 0],
                y: [40, -20],
                x: [Math.random() * 200, Math.random() * 200],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {['♪', '♫', '♬', '♩', '♭', '♯'][i]}
            </motion.div>
          ))}
          
          <div className="text-white/90 text-sm font-medium text-center z-10">
            {activeDemo === 'music' ? '🎵 Composing Symphony...' : '♪ "AI Symphony No.1 in D Minor" ♪'}
            <div className="text-xs text-white/70 mt-1">
              {activeDemo === 'music' ? 'Generating harmonies...' : 'AI Composed • 3:47'}
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-white/20 rounded-full h-1 mt-2">
            <motion.div
              className="bg-cyan-400 h-1 rounded-full"
              animate={activeDemo === 'music' ? { width: ['0%', '100%'] } : { width: '67%' }}
              transition={{ duration: 3, ease: "linear" }}
            />
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