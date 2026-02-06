'use client';

import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './section-header';
import { MediumPost } from '@/lib/medium';

interface BlogClientProps {
  posts: MediumPost[];
  mediumUrl: string;
}

export function BlogClient({ posts, mediumUrl }: BlogClientProps) {
  return (
    <section id="blog" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Writing"
          title="Featured Articles"
          subtitle="Thoughts on AI, systems architecture, and engineering leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-44 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                {post.thumbnail && (
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="tag-pill text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                    Medium
                  </span>
                </div>
                <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <motion.a
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:border-primary/30 hover:bg-secondary font-medium transition-all duration-300"
          >
            <BookOpen className="w-4 h-4" />
            Read More on Medium
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
