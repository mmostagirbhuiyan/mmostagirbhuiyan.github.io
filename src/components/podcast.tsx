'use client';

import { motion } from 'framer-motion';
import { Podcast as PodcastIcon, Play, Headphones } from 'lucide-react';
import { podcast } from '@/data/portfolio';

// Clean SVG icons for podcast platforms
function ApplePodcastIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3.5a6.5 6.5 0 0 1 3.894 11.707 1 1 0 0 1-1.281-1.536A4.5 4.5 0 1 0 7.5 12a4.48 4.48 0 0 0 1.113 2.96 1 1 0 0 1-1.536 1.28A6.5 6.5 0 0 1 12 5.5zm0 3a3.5 3.5 0 0 1 1.823 6.489l-.323.194V18.5a1.5 1.5 0 1 1-3 0v-3.317l-.323-.194A3.5 3.5 0 0 1 12 8.5zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
    </svg>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 0 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.622.622 0 0 1 .207.857zm1.223-2.722a.78.78 0 0 1-1.072.257c-2.687-1.652-6.786-2.13-9.965-1.166a.78.78 0 0 1-.452-1.492c3.632-1.102 8.147-.568 11.234 1.329a.78.78 0 0 1 .255 1.072zm.105-2.835c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 1 1-.543-1.79c3.533-1.072 9.404-.865 13.115 1.338a.935.935 0 1 1-.954 1.608z"/>
    </svg>
  );
}

function AmazonMusicIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6ZM8 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
    </svg>
  );
}

const platformIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  apple: ApplePodcastIcon,
  spotify: SpotifyIcon,
  amazon: AmazonMusicIcon,
};

export function Podcast() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-accent">
                  <PodcastIcon className="w-6 h-6 text-white" />
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  AI-Powered Podcast
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {podcast.title}
              </h2>
              <p className="text-lg text-primary mb-4">{podcast.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {podcast.description}
              </p>

              {/* Platform Links */}
              <div className="flex flex-wrap gap-3">
                {podcast.platforms.map((platform) => {
                  const Icon = platformIcons[platform.icon];
                  return (
                    <motion.a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                      <span className="font-medium text-sm">{platform.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Visual */}
            <div className="relative flex justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                {/* Podcast artwork mockup */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-primary via-accent to-blue-500 p-1 shadow-2xl shadow-primary/25">
                  <div className="w-full h-full rounded-3xl bg-background flex flex-col items-center justify-center">
                    <Headphones className="w-16 h-16 text-primary mb-4" />
                    <span className="text-xl font-bold gradient-text">The Practical</span>
                    <span className="text-lg font-bold gradient-text">AI Digest</span>
                  </div>
                </div>

                {/* Floating play button */}
                <motion.a
                  href={podcast.platforms[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30"
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </motion.a>
              </motion.div>

              {/* Sound waves decoration */}
              <div className="absolute -z-10 inset-0 flex items-center justify-center">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-48 h-48 rounded-full border border-primary/20"
                    style={{
                      width: `${200 + i * 60}px`,
                      height: `${200 + i * 60}px`,
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
