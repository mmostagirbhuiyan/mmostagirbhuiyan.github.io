'use client';

import { motion } from 'framer-motion';
import { Podcast as PodcastIcon, Play, Headphones, ExternalLink } from 'lucide-react';
import { podcast } from '@/data/portfolio';
import { PodcastEpisode } from '@/lib/podcast';

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

interface PodcastClientProps {
  episodes: PodcastEpisode[];
  podcastImage?: string;
}

export function PodcastClient({ episodes, podcastImage }: PodcastClientProps) {
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

          <div className="relative">
            {/* Header */}
            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center mb-8">
              {/* Podcast artwork */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative shrink-0"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl shadow-primary/25">
                  {podcastImage ? (
                    <img
                      src={podcastImage}
                      alt={podcast.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary via-accent to-blue-500 flex items-center justify-center">
                      <Headphones className="w-12 h-12 text-white" />
                    </div>
                  )}
                </div>
                <motion.a
                  href={podcast.platforms[1]?.url || podcast.platforms[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                >
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </motion.a>
              </motion.div>

              {/* Podcast info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    AI-Powered Podcast
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {podcast.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                  {podcast.description}
                </p>

                {/* Platform Links */}
                <div className="flex flex-wrap gap-2">
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span className="font-medium text-sm">{platform.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Latest Episodes */}
            {episodes.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <PodcastIcon className="w-5 h-5 text-primary" />
                  Latest Episodes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {episodes.map((episode, index) => (
                    <motion.a
                      key={episode.title}
                      href={episode.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                        <Play className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          {episode.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(episode.pubDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
