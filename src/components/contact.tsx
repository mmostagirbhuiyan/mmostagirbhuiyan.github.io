'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Github,
  BookOpen,
  FileText,
  ArrowUpRight,
  Send,
} from 'lucide-react';
import { SectionHeader } from './section-header';
import { siteConfig } from '@/data/portfolio';

const socialLinks = [
  {
    name: 'Email',
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    description: 'Get in touch directly',
  },
  {
    name: 'GitHub',
    href: `https://github.com/${siteConfig.github}`,
    icon: Github,
    description: 'Check out my code',
  },
  {
    name: 'Medium',
    href: siteConfig.social.medium,
    icon: BookOpen,
    description: 'Read my articles',
  },
  {
    name: 'Google Scholar',
    href: siteConfig.social.googleScholar,
    icon: FileText,
    description: 'Academic research',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Connect"
          title="Let's Connect"
          subtitle="Open to discussing leadership roles, advisory opportunities, or collaborations in cloud, AI, and platform engineering."
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-2xl p-8 md:p-12 text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6">
              <Send className="w-7 h-7 text-primary" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
              Let's Talk
            </h3>

            <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Looking for engineering leadership, platform strategy, or AI infrastructure expertise?
              I'd be glad to connect and explore how I can help.
            </p>

            <motion.a
              href={`mailto:${siteConfig.email}`}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send Me an Email
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-xl p-5 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium text-sm mb-0.5 group-hover:text-primary transition-colors">
                    {link.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
